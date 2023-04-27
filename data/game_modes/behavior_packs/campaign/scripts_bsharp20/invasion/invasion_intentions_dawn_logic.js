const invasionDawnConst = {
    introVODays: {
        min: 2,
        max: 4
    },
    VO: {
        sunriseIntro: "overworld_sunrise",
        villageDamaged: "invasion_village_damaged",
        villageDestroyed: "invasion_village_destroyed"
    },
    globals: {
        villageDamaged: "gv_invasion_village_damaged",
        villageDestroyed: "gv_invasion_village_destroyed"
    }
}

const _CheckForAttackHordeBossVillageAttack = () => {
    if (!QUERY_GetGlobalVariable(`${BOSS_BASE_VALS.globals.bossArrived}_${FACTION_NAME_ATTACK}`)) {
        return // boss hasnt arrived yet
    }

    // clean up the previous attack
    CleanupBossOccupation()

    if (QUERY_GetGlobalVariable(GV_ATTACK_HORDE_BOSS_HEALTH) === -1) {
        return // attack horde boss has been defeated already
    }

    //Circumvent the card drawing, as we know what card we need in advance
    OUTPUT_DebugLogInvasion("Attack horde boss active: forcing planning of attack horde boss village attack.")
    let success = SetupForcedDAIForFaction(FACTION_ACTION_ATTACK_VILLAGE_V2_ATTACK_BOSS, FACTION_NAME_ATTACK)
    if (!success) {
        OUTPUT_DebugLogInvasion("Attack horde boss active: Couldn't plan boss attack. Planning backup 'Boss Occupation'.")
        success = SetupForcedDAIForFaction(FACTION_ACTION_BOSS_OCCUPATION, FACTION_NAME_ATTACK)
        if (!success) {
            const errorMessage = "Attack horde boss action couldn't be planned!"
            Loge(errorMessage)
            OUTPUT_DebugLogInvasion(errorMessage)
        }
    }
}

const DrawInvasionHordeCards = () => {
    // Must call PlayerActivity_IncremenentInactiveDays() right before doing draws since it assumes all activity manupulations were done
    PlayerActivity_IncremenentInactiveDays()

    // Phase and inactivity must be updated before this

    // We have a debug command which forces invasion break to always happen by setting total draws to 0
    const totalDraws = IsDebugForcedInvasionBreak() ? 0 : GetTotalIntentionsDrawsAtDawn()
    if (totalDraws <= 0 && QUERY_GetGlobalVariable(TELEMETRY_INVASION.GV_INVASION_BREAK_ACTIVE) === 0) {
        IncrementGlobal(TELEMETRY_INVASION.GV_INVASION_BREAK_ACTIVE)
        TelemetryInvasionBreakDaysPassedCounter.Reset()
        TelemetrySendInvasionBreakStartedEvent()
    }

    SetInvasionHordeDraws(totalDraws)
    DrawInvasionHordeCard()
}

const _OnHordeCardDrawingDone = () => {
    OUTPUT_DebugLogInvasion("Done drawing horde cards for invasion.")
    OUTPUT_ExecuteInvasionActionsReady()
}

const DrawInvasionHordeCard = () => {
    const numberOfDraws = GetInvasionHordeDraws()

    OUTPUT_DebugLogInvasion("Drawing horde card for invasion.")
    OUTPUT_DebugLogInvasion(`Number of draws left: ${numberOfDraws}`)

    //If number of action is exhausted, do nothing
    //This prevents from just wasting the cards on determining whether have drawn enough
    if (numberOfDraws === 0) {
        _OnHordeCardDrawingDone()
        return
    }

    // Replenish horde deck before drawing again.
    if (GetInvasionHordeDeckCount() === 0) {
        ReplenishInvasionHordeDeck()

        // Check there are horde cards after replenishing. If not, then
        // no more invasion actions can be planned today.
        if (GetInvasionHordeDeckCount() === 0) {
            OUTPUT_DebugLogInvasion("No more hordes available to plan actions. Aborting intention planning...")
            _OnHordeCardDrawingDone()
            SetInvasionHordeDraws(0)
            return
        }
    }

    DecrementHordeDraws()
    // eslint-disable-next-line no-undef
    OUTPUT_PlayHordeCardFromNamedDeck(invasionHordeDeckName)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SetupInvasionDawnListeners = () => {
    LISTENFOR_TimeOfDay({
        snippet: "tod_resolve_actions_before_dawn",
        timeOfDayName: "invasion_phase_resolve",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })

    LISTENFOR_TimeOfDay({
        snippet: "tod_draw_intentions_on_dawn",
        timeOfDayName: "invasion_phase_intention",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })

    LISTENFOR_InvasionIntentionsDrawn({
        snippet: "iid_draw_horde_deck",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })

    LISTENFOR_HordeCardPlayed({
        snippet: "hcp_draw_intention_cards_for_faction",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        // eslint-disable-next-line no-undef
        deckName: invasionHordeDeckName
    })

    // DEBUG
    LISTENFOR_ExternalEvent({
        snippet: "ee_start_forced_invasion_break",
        eventName: "startForcedInvasionBreak",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })

    LISTENFOR_ExternalEvent({
        snippet: "ee_stop_forced_invasion_break",
        eventName: "stopForcedInvasionBreak",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })
}

SNIPPET_TimeOfDay("tod_resolve_actions_before_dawn", () => {
    // you can also use `/invasion resolve_actions` for testing
    OUTPUT_InvasionResolveActiveActions()
})

SNIPPET_TimeOfDay("tod_draw_intentions_on_dawn", () => {
    if (!InvasionActive()) {
        return
    }

    OUTPUT_DrawInvasionIntentions()

    if (!IsAnyHordeArrived()) {
        return
    }

    IncrementGlobal(INVASION_SUNRISE_COUNT)

    //Play Sunrise VO for day 2-4 of invasion
    const sunriseCount = QUERY_GetGlobalVariable(INVASION_SUNRISE_COUNT)
    if (sunriseCount >= invasionDawnConst.introVODays.min && sunriseCount <= invasionDawnConst.introVODays.max) {
        PlayPresentationActionToAll(invasionDawnConst.VO.sunriseIntro)
    }
})

const PlayAudioUIDawnInvasionStage = () => {
    if (DoOnce("gv_skip_first_dawn_message")) {
        Logi("Skipping first dawn message when invasion starts")
    } else {
        OUTPUT_AnnounceSequence("invasion_intentions_drawn_sequence") //Notification sequence, used to utilize //PlayUIActionToAll("invasion_indicator@map_indicator") below but no longer required
    }

    //Play any village VO
    if (QUERY_GetGlobalVariable(invasionDawnConst.globals.villageDamaged) === 1) {
        OUTPUT_SetGlobalVariable(invasionDawnConst.globals.villageDamaged, 2)
        PlayPresentationActionToAll(invasionDawnConst.VO.villageDamaged)
    }

    if (QUERY_GetGlobalVariable(invasionDawnConst.globals.villageDestroyed) === 1) {
        OUTPUT_SetGlobalVariable(invasionDawnConst.globals.villageDestroyed, 2)
        PlayPresentationActionToAll(invasionDawnConst.VO.villageDestroyed)
    }
}

// This snippet ultimately fires at the "system" dawn - supported by simulation
SNIPPET_InvasionIntentionsDrawn("iid_draw_horde_deck", (_payload) => {
    const days = DaysSinceCounter.Increment()

    OUTPUT_DebugLogInvasion(``)
    OUTPUT_DebugLogInvasion(``)
    OUTPUT_DebugLogInvasion(`-----------------INVASION DAY ${days}-----------------`)
    OUTPUT_DebugLogInvasion(`\t-----------------DAWN-----------------`)

    // Need to clear the map from all intentions, because new intentions will be planned
    OUTPUT_MapRemoveKey(QUERY_GetAllAliveVillages(), MAP_KEY.INVASION_INTENTION)

    // Increment "days passed" counter for all actions
    IncrementAllInvasionActionTracking()

    // Increment "days break" counter
    if (QUERY_GetGlobalVariable(TELEMETRY_INVASION.GV_INVASION_BREAK_ACTIVE)) {
        TelemetryInvasionBreakDaysPassedCounter.Increment()
    }

    // Set the flag for recap flushing to occur at night
    InvasionFlushRecapsCounter.Increment()

    // check if we need plan an attack horde boss attack this dawn (only one will be planned)
    _CheckForAttackHordeBossVillageAttack()

    // Called here to tie into the invasion flow and be a part of simulation
    // Ensures that all hordes enter before next invasion cycle
    // TODO: cleanup the interaction between invasion and staggered horde entry
    StaggeredEntryNextDawn()

    if (!IsAnyHordeArrived() || GetAliveFactions().length === 0) {
        // Note: this is important here as it will unblock the simulation flow forward. No cards need to be drawn so we just "green-lit" the invasion right away.
        // TODO: this is hacky and has to be properly changed for the new staggered entry + invasion flow
        OUTPUT_ExecuteInvasionActionsReady()
        return
    }

    PlayAudioUIDawnInvasionStage()

    if (!InvasionActive()) {
        OUTPUT_ExecuteInvasionActionsReady()
        return
    }

    DrawInvasionHordeCards()
})

SNIPPET_HordeCardPlayed("hcp_draw_intention_cards_for_faction", (faction) => {
    if (faction === EMPTY_CARD) {
        // A special case where something went wrong in the engine we did not get a faction card
        // Simply pick a random alive faction
        Loge(`ATTENTION-ATTENTION: Horde card was played with NO faction name! Assigning a random alive faction!`)
        faction = ChooseFromArray(GetAliveFactions())
    }

    PlayFactionIntentionDeck(faction)
})

// DEBUG
const IsDebugForcedInvasionBreak = () => {
    return QUERY_GetGlobalVariable("gv_forced_invasion_break") === 1
}

SNIPPET_ExternalEvent("ee_start_forced_invasion_break", (_variant, _payload) => {
    OUTPUT_SetGlobalVariable("gv_forced_invasion_break", 1)
})

SNIPPET_ExternalEvent("ee_stop_forced_invasion_break", (_variant, _payload) => {
    OUTPUT_SetGlobalVariable("gv_forced_invasion_break", 0)

    if (QUERY_GetGlobalVariable(TELEMETRY_INVASION.GV_INVASION_BREAK_ACTIVE) === 1) {
        PlayerActivity_Break()
    }
})
