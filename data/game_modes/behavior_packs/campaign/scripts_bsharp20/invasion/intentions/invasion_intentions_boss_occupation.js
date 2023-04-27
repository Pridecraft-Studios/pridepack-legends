SNIPPET_RuleInitialized(GAME_RULE_NAMES.invasionEnabled, (ruleValue) => {
    if (ruleValue.value) {
        LISTENFOR_ExternalEvent({
            snippet: "ee_execute_debug_boss_occupation",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "executeDebugBossOccupation"
        })
    }
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_SetBossOccupation = (faction, targetVillageId) => {
    let village = null
    let villageId = null
    if (targetVillageId !== null) {
        village = GetVillageEntityFromID(targetVillageId)
        if (!HasEntities(village)) {
            OUTPUT_DebugLogInvasion(`Invasion Intention Boss Occupation Failed: Given target village ${targetVillageId} is an invalid entity!`)
            return false
        }

        if (QUERY_GetDelayedInvasionAction() !== "") {
            OUTPUT_DebugLogInvasion(`Invasion Intention Boss Occupation Failed: Given target village ${targetVillageId} is already planning an action!`)
            return false
        }

        villageId = targetVillageId
    } else {
        const villageTargets = GetOccupiedFriendlyVillages()
        if (QUERY_GetEntitiesCount(villageTargets) === 0) {
            OUTPUT_DebugLogInvasion(`Invasion Intention Boss Occupation Failed: There are no occupied villages! Most likely bad imgui command`)
            return false
        }
        village = RandomEntity(villageTargets)
        villageId = QUERY_GetVillageIDFromEntity(village)
    }

    OUTPUT_DebugLogInvasion("Prepared " + villageId + " for Boss Occupation intention for faction " + faction)
    OUTPUT_SetDelayedInvasionAction(village, FACTION_ACTION_BOSS_OCCUPATION, [], false, faction, 0)

    // Update map icons
    OUTPUT_MapSetKeyValue(village, MAP_KEY.INVASION_INTENTION, MAP_INVASION_INTENTION.BOSS_OCCUPATION)
    OUTPUT_MapSetKeyValue(village, MAP_KEY.ATTACKING_FACTION, faction)
    OUTPUT_MapSetKeyValue(village, MAP_KEY.INVASION_SPECIAL, MAP_INVASION_SPECIAL.IS_BOSS)

    //VO
    // TODO: Add VO if we want anything here.

    return true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_ResolveBossOccupation = (faction, source) => {
    if (!HasEntities(source)) {
        OUTPUT_DebugLogInvasion(`Can't perform 'Boss Occupation' for faction ${faction} if the village entity is invalid!`)
        return
    }

    const villageId = QUERY_GetVillageIDFromEntity(source)
    if (!IsVillageAlive(villageId)) {
        OUTPUT_DebugLogInvasion(`DAI 'Boss Occupation' for faction ${faction} cannot happen because target village is dead.`)
        return false
    }

    OUTPUT_DebugLogInvasion(`DAI 'Boss Occupation' resolution for the village ${villageId} from faction ${faction}`)

    //Set up the boss occupation here.
    SetVillageVariable(villageId, "boss_occupation_active", 1)

    OUTPUT_MapSetKeyValue(source, MAP_KEY.INVASION_ACTIVE, MAP_INVASION_ACTIVE.IS_BOSS_OCCUPATION)
    OUTPUT_MapSetKeyValue(source, MAP_KEY.ATTACKING_FACTION, faction)
    OUTPUT_MapSetKeyValue(source, MAP_KEY.INVASION_SPECIAL, MAP_INVASION_SPECIAL.IS_BOSS)

    // If the player is inside the village during the day and waits for night time to fight the boss w/o clearing the occupation, the boss never spawns
    // This is because we spawn occupation forces when the player's presence is detected but the boss only spawns on resolve (at night)
    // This check here is to spawn the boss if the player is detected inside the village at the time of the resolution
    const occupationTriggerVolume = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [occupationValCommon.vicinityTvTag], [])
    if (HasEntities(occupationTriggerVolume)) {
        const players = FILTER_ByTagFilter(QUERY_GetIntruders(occupationTriggerVolume), ["player"], [])
        if (HasEntities(players)) {
            SetVillageVariable(villageId, "spawned_boss_while_player_was_inside_the_village", 1)
            _SpawnAttackHordeBossIfNeededForOccupation(villageId)
        }
    }
    return true
}

// eslint-disable-next-line @typescript-eslint/camelcase
const CleanupBossOccupation = () => {
    let friendlyVillages = GetAllFriendlyVillages()
    while (HasEntities(friendlyVillages)) {
        const village = RandomEntity(friendlyVillages)
        const villageId = QUERY_GetVillageIDFromEntity(village)
        if (GetVillageVariable(villageId, "boss_occupation_active") > 0) {
            const villageEntity = GetVillageEntityFromID(villageId)
            SetVillageVariable(villageId, "boss_occupation_active", 0)
            OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.INVASION_ACTIVE, MAP_INVASION_ACTIVE.IS_OCCUPIED)
            OUTPUT_MapRemoveKey(villageEntity, MAP_KEY.INVASION_SPECIAL)

            //We need to clear the boss and set the occupation objective in case the player is inside the village when predawn comes
            const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
            const bossEntity = FILTER_ByTagFilter(villageEntities, [TAG_HAMMER_BOSS], ["occupying_piglin_despawning"])
            if (HasEntities(bossEntity)) {
                const fountains = GetVillageCentralStructures(villageId)
                OUTPUT_TriggerCinematic("hrd02_c07_attack_boss_lose", fountains)
                OUTPUT_DespawnEntities(bossEntity)
            }
            const piglins = FILTER_ByTagFilter(villageEntities, ["mob", "piglin"], ["occupying_piglin_despawning"])

            if (HasEntities(piglins)) {
                const piglinsToKill = Math.floor(QUERY_GetEntitiesCount(piglins) * 0.8)
                if (piglinsToKill > 0) {
                    OUTPUT_DebugLogInvasion(`Setting up Destroy Entities Objective with ${piglinsToKill}`)
                    if (GetVillageVariable(villageId, "spawned_boss_while_player_was_inside_the_village") === 0) {
                        OUTPUT_SetupDestroyEntitiesObjective(villageId, piglins, piglinsToKill, FACTION_NAME_ATTACK)
                    }
                } else {
                    OUTPUT_DebugLogInvasion("Piglins already cleared")
                    SetVillageVariable(villageId, "piglins_cleared", 1)
                }

                LISTENFOR_LocalTimer({
                    snippet: "lt_send_occupying_piglins_back",
                    ownerVillageId: villageId,
                    waitTime: 30
                })
            } else {
                OUTPUT_DebugLogInvasion("No more Piglins after boss. Occupation is cleared")
                SetVillageVariable(villageId, "piglins_cleared", 1)
            }
            break
        }
        friendlyVillages = OPER_Difference(friendlyVillages, village)
        SetVillageVariable(villageId, "spawned_boss_while_player_was_inside_the_village", 0)
    }
}

SNIPPET_ExternalEvent("ee_execute_debug_boss_occupation", (variant, _payload) => {
    const commandString = variant.value
    const tokens = commandString.split(" ")

    let targetVillageId = parseInt(tokens[0])

    const players = GetPlayers()
    if (!HasEntities(players)) {
        OUTPUT_DebugLogInvasion(`Debug Boss Occupation: CANCELLED - No player entity.`)
        return
    }

    const player = RandomEntity(players)

    if (targetVillageId === -1) {
        const villageTargets = GetOccupiedAll()
        if (!HasEntities(villageTargets)) {
            OUTPUT_DebugLogInvasion(`Debug Boss Occupation: CANCELLED - No occupied villages!`)
            return
        }
        targetVillageId = QUERY_GetVillageIDFromEntity(FILTER_ByClosest(villageTargets, player, 1))
    } else if (!QUERY_IsVillageOccupied(targetVillageId)) {
        OUTPUT_DebugLogInvasion(`Debug Boss Occupation: CANCELLED - Chosen village is not occupied!`)
        return
    }

    if (!IsNightTime()) {
        OUTPUT_SetTimeOfDay(TIME_DUSK)
    }

    OUTPUT_DebugLogInvasion(`Debug Boss Occupation: village '${targetVillageId}'`)
    DAI_ResolveBossOccupation(FACTION_NAME_ATTACK, GetVillageEntityFromID(targetVillageId))
})
