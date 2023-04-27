const pvpEndMatchVal = {
    vo: {
        pvpDefeat: ["pvp_defeat_1", "pvp_defeat_2", "pvp_defeat_3"],
        pvpVictory: ["pvp_victory_1", "pvp_victory_2", "pvp_victory_3"]
    },
    victoryTime: 10,
    victoryTimerName: "end_match_timer",
    globalVars: {
        winningTeamName: "gv_winning_team_name"
    },
    behaviors: {
        win: "badger:behavior_pvp_mobs_win",
        lose: "badger:behavior_pvp_mobs_lose",
        piglin: "badger:behavior_none"
    },
    messages: {
        lost: "pvp_team_lost",
        won: "pvp_team_win"
    },
    telemetry: {
        healthThreshold: 0.1
    }
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.matchEndHQsLastStanding, (ruleValue) => {
    if (ruleValue.value) {
        if (OnceIfMatchEnded()) {
            return
        }

        Logi("End match by last HQ standing.", 2)

        //if the match has started, then we can proceed, otherwise we have to wait
        if (HasMatchStarted()) {
            _SetupLastHQStandingCondition()
        } else {
            LISTENFOR_GlobalVariableChanged({
                snippet: "gvc_match_started_hq_ls",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                variableName: GAME_MODE_GLOBAL.matchStarted
            })
        }
    }
})

// =================================================================================
// ==== Last HQ Standing ===========================================================
// =================================================================================
SNIPPET_GlobalVariableChanged("gvc_match_started_hq_ls", (_oldValue, newValue) => {
    if (newValue !== 1) {
        return
    }
    _SetupLastHQStandingCondition()
    Once()
})

const _SetupLastHQStandingCondition = () => {
    // Match ends when only 1 HQ is remaining (even if despawned ensure the game ends)
    LISTENFOR_VillageDestroyed({
        snippet: "ed_match_end_hq_destroyed",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: PVP_HEADQUARTERS_BLUE
    })

    LISTENFOR_VillageDestroyed({
        snippet: "ed_match_end_hq_destroyed",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: PVP_HEADQUARTERS_RED
    })
}

// =================================================================================
//=====MATCH OVER===================================================================
//==================================================================================

SNIPPET_VillageDestroyed("ed_match_end_hq_destroyed", (villageId) => {
    _CheckLastHQStandingCondition(villageId)
})

const _CheckLastHQStandingCondition = (villageId) => {
    if (OnceIfMatchEnded()) {
        return
    }

    // Disable Piggies
    const piglins = QUERY_GetEntitiesWithTags(["piglin"])
    OUTPUT_SetBehavior(piglins, pvpEndMatchVal.behaviors.piglin)

    // Announce the losing team
    const allHQVillages = FILTER_ByFactionName(QUERY_GetAllVillages(), [PVP_HEADQUARTERS_BLUE, PVP_HEADQUARTERS_RED])
    const losingTeam = FILTER_ByVillageID(allHQVillages, villageId)
    const losingTeamName = QUERY_GetTeamName(losingTeam)
    const defeatVO = ChooseFromArray(pvpEndMatchVal.vo.pvpDefeat)
    OUTPUT_AnnounceTeam(pvpEndMatchVal.messages.lost, [losingTeamName], losingTeamName)
    Logi("LOSING TEAM: " + losingTeamName)
    PlayPresentationActionToTeam(defeatVO, losingTeamName)
    _PlayEndingBehaviors(losingTeamName, false)

    // Check if there is only 1 HQ remaining in the game, and end the match if there is
    const remainingHQs = FILTER_ByFactionName(OPER_Difference(QUERY_GetAllAliveVillages(), GetVillageEntityFromID(villageId)), [PVP_HEADQUARTERS_BLUE, PVP_HEADQUARTERS_RED])

    if (QUERY_GetEntitiesCount(remainingHQs) === 1) {
        // Pause Time of Day
        OUTPUT_LockDayNightCycle(true)
        OUTPUT_SetInvulnerable(FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(QUERY_GetVillageIDFromEntity(remainingHQs)), [TAG_PVP_HQ], []), true)
        const winningTeamName = QUERY_GetTeamName(remainingHQs)
        const victoryVO = ChooseFromArray(pvpEndMatchVal.vo.pvpVictory)
        OUTPUT_AnnounceTeam(pvpEndMatchVal.messages.won, [winningTeamName], winningTeamName)
        PlayPresentationActionToTeam(victoryVO, winningTeamName)
        _PlayEndingBehaviors(winningTeamName, true)

        OUTPUT_SetNamedTimer(pvpEndMatchVal.victoryTimerName, pvpEndMatchVal.victoryTime)
        LISTENFOR_Timer({
            snippet: "t_end_match",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            timerName: pvpEndMatchVal.victoryTimerName,
            threshold: 0,
            payloadString: winningTeamName
        })
        LISTENFOR_EntitySpawned({
            snippet: "es_player_spawned_post_game",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: ["player"]
        })

        Once()
    }
}

SNIPPET_Timer("t_end_match", (_timeLeft, payload) => {
    const winningTeam = payload.string
    EndMatch(winningTeam)

    // special telemetry event for this mode
    const hq = FILTER_ByTeam(QUERY_GetEntitiesWithTags(TAG_PVP_HQ), winningTeam)
    const health = QUERY_CurrentHealth(hq) / QUERY_MaxHealth(hq)
    if (health <= pvpEndMatchVal.telemetry.healthThreshold) {
        TelemetrySendCloseMatch(FILTER_ByTeam(GetPlayers(), winningTeam), true)
        TelemetrySendCloseMatch(FILTER_ByTeam(GetPlayers(), GetOppositeTeam(winningTeam)), false)
    }
})

const _PlayEndingBehaviors = (teamName, isWinningTeam) => {
    const teamMobs = FILTER_ByTeam(QUERY_GetEntitiesWithTagFilter(["mob"], ["piglin"]), teamName)
    const teamPlayers = FILTER_ByTeam(QUERY_GetAlivePlayers(), teamName)
    const winningTeamInt = +isWinningTeam

    OUTPUT_SetInvulnerable(teamMobs, true)
    OUTPUT_SetInvulnerable(teamPlayers, true)

    // Set behaviours which only allows celebrate or fear actions
    if (winningTeamInt === 1) {
        OUTPUT_SetBehavior(teamMobs, pvpEndMatchVal.behaviors.win)
    } else {
        OUTPUT_SetBehavior(teamMobs, pvpEndMatchVal.behaviors.lose)
    }

    LISTENFOR_EntitySpawned({
        snippet: "es_team_mob_spawned_post_game",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["mob"],
        excludeTags: ["piglin"],
        payloadString: teamName,
        payloadInt: winningTeamInt
    })
}

SNIPPET_EntitySpawned("es_team_mob_spawned_post_game", (spawnedEntity, payload) => {
    const winningTeam = payload.int

    if (QUERY_GetTeamName(spawnedEntity) === payload.string) {
        OUTPUT_SetInvulnerable(spawnedEntity, true)
        if (winningTeam === 1) {
            OUTPUT_SetBehavior(spawnedEntity, pvpEndMatchVal.behaviors.win)
        } else {
            OUTPUT_SetBehavior(spawnedEntity, pvpEndMatchVal.behaviors.lose)
        }
    }
})

SNIPPET_EntitySpawned("es_player_spawned_post_game", (spawnedEntity, _payload) => {
    OUTPUT_SetInvulnerable(spawnedEntity, true)
})
