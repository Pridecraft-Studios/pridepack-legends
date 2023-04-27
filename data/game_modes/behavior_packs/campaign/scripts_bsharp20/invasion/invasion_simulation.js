const PLAYER_MOVE_SCENARIO_A = "playerMoveScenarioA"
const PLAYER_MOVE_SCENARIO_B = "playerMoveScenarioB"
const PLAYER_MOVE_SCENARIO_C = "playerMoveScenarioC"
const PLAYER_MOVE_SCENARIO_NONE = "playerMoveScenarioNone"

const BASE_ANY_INVASION = "base_any_invasion"
const BASE_PLANNING = "base_planning"
const BASE_NONPLANNING = "base_nonplanning"

const scenarios = [PLAYER_MOVE_SCENARIO_NONE, PLAYER_MOVE_SCENARIO_A, PLAYER_MOVE_SCENARIO_B, PLAYER_MOVE_SCENARIO_C]

const _SetPlayerMoveScenario = (scenario) => {
    const index = scenarios.indexOf(scenario)
    if (index === -1) {
        Loge(`Attempt to set incorrect player move scenario ${scenario}`)
        return
    }
    OUTPUT_SetGlobalVariable("playerMoveScenario", index)
}

const _GetPlayerMoveScenario = () => {
    const index = QUERY_GetGlobalVariable("playerMoveScenario")
    return scenarios[index]
}

const _PlayerKillsBase = (villageId) => {
    if (IsBossVillage(villageId)) {
        const hordeName = QUERY_GetFactionNameFromVillageID(villageId)
        _SetBossDestroyedForBossBase(hordeName)
    }
    OUTPUT_DebugLogInvasion(`KILLING BASE ${villageId}`)
    OUTPUT_DestroyVillageEntities(GetVillageEntityFromID(villageId))
}

const _GetScenarioPhaseVal = (string) => {
    const defaultValue = invasionSimulationVals[string]
}

//Can be used to return a base under certain conditions - for example, to return 2 random medium bases every 3 times called, we call _GetRandomBaseId(BASE_ANY_INVASION, BASE_SIZE_MEDIUM, true, "scenario_a_phase_x", 2, 3)
//If we want to just get a random base, we can call _GetRandomBaseId(BASE_ANY_INVASION, BASE_SIZE_MEDIUM, true)
const _GetRandomBaseId = (baseType = BASE_ANY_INVASION, baseSize = BASE_SIZE_ALL_PORTALS_AND_BOSS, returnRandomAsBackup = true, ignoreTheseBasesThisCall = [], returnTimeCounterId = "", returnThisAmountOfBases = 1, returnOverNumberOfCalls = 1) => {
    if (returnThisAmountOfBases > returnOverNumberOfCalls) {
        Loge("GET RANDOM BASE ID: Can only return max 1 base id per call")
        return null
    }

    const baseCounter = "gv_inv_sim_base_counter_" + returnTimeCounterId
    const dayCounter = "gv_inv_sim_day_counter_" + returnTimeCounterId
    const intervalAmount = "gv_inv_sim_interval_amount" + returnTimeCounterId
    const intervalCounter = "gv_inv_sim_interval_" + returnTimeCounterId

    //If this is the first time getting called (or is being reset) - assuming we care about bases over time
    if (QUERY_GetGlobalVariable(dayCounter) === 0 && returnTimeCounterId !== "") {
        const startingInterval = Math.floor((returnOverNumberOfCalls - returnThisAmountOfBases) / returnThisAmountOfBases) //Space out
        OUTPUT_SetGlobalVariable(baseCounter, returnThisAmountOfBases)
        OUTPUT_SetGlobalVariable(dayCounter, returnOverNumberOfCalls)
        OUTPUT_SetGlobalVariable(intervalAmount, startingInterval)
        OUTPUT_SetGlobalVariable(intervalCounter, startingInterval)
    }

    let basesIds = []
    OUTPUT_DebugLogInvasion("This call has Day Counter: " + QUERY_GetGlobalVariable(dayCounter) + " Interval counter: " + QUERY_GetGlobalVariable(intervalCounter) + " Base counter: " + QUERY_GetGlobalVariable(baseCounter))

    if (returnTimeCounterId === "" || (QUERY_GetGlobalVariable(dayCounter) > 0 && QUERY_GetGlobalVariable(intervalCounter) === 0 && QUERY_GetGlobalVariable(baseCounter) > 0)) {
        ForEachAliveVillageEntity((villageEntity) => {
            const villageId = QUERY_GetVillageIDFromEntity(villageEntity)
            const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)
            const isPiglinInvasionBase = HasEntities(FILTER_ByVillageSize(FILTER_ByFactionName(villageEntity, FACTION_PIGLINS), BASE_SIZE_ALL_PORTALS_AND_BOSS))
            if (!ignoreTheseBasesThisCall.includes(villageId) && baseSize.includes(villageSize)) {
                //For any base type
                if (baseType === BASE_ANY_INVASION && isPiglinInvasionBase) {
                    basesIds.push(villageId)
                }
                //For planning bases
                if (baseType === BASE_PLANNING && HasDelayedInvasionAction(villageId)) {
                    basesIds.push(villageId)
                }
                //For non-planning bases
                if (baseType === BASE_NONPLANNING && isPiglinInvasionBase && !HasDelayedInvasionAction(villageId)) {
                    basesIds.push(villageId)
                }
            }
        })

        //Pick a random base as backup if no base found for planning/nonplanning
        if (basesIds.length <= 0 && returnRandomAsBackup && baseType !== BASE_ANY_INVASION) {
            ForEachAliveVillageEntity((villageEntity) => {
                const villageId = QUERY_GetVillageIDFromEntity(villageEntity)
                const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)
                const isPiglinInvasionBase = HasEntities(FILTER_ByVillageSize(FILTER_ByFactionName(villageEntity, FACTION_PIGLINS), BASE_SIZE_ALL_PORTALS_AND_BOSS))
                if (isPiglinInvasionBase && baseSize.includes(villageSize)) {
                    basesIds.push(villageId)
                }
            })
        }

        if (basesIds.length > 0) {
            //Decrement everything if valid
            if (returnTimeCounterId !== "") {
                DecrementGlobal(baseCounter)
                DecrementGlobal(dayCounter)
                OUTPUT_SetGlobalVariable(intervalCounter, QUERY_GetGlobalVariable(intervalAmount)) //Reset the interval
            }
            //Return a random base from those available
            const randomIndex = Math.floor(RandomFloat() * basesIds.length)
            OUTPUT_DebugLogInvasion("Base found: " + basesIds[randomIndex])
            return basesIds[randomIndex]
        } else {
            OUTPUT_DebugLogInvasion("No valid base found")
            return null //Do not decrement any value this time, since no base is valid
        }
    } else {
        //Decrease day + interval counter since no base was selected to be returned
        OUTPUT_DebugLogInvasion("Skipping this day for call " + returnTimeCounterId)
        DecrementGlobal(dayCounter)
        DecrementGlobal(intervalCounter)
        return null
    }
}

const _GetRandomPlanningBaseId = (baseSize = BASE_SIZE_ALL_PORTALS_AND_BOSS) => {
    let planningBasesIds = []
    ForEachAliveVillageEntity((villageEntity) => {
        const villageId = QUERY_GetVillageIDFromEntity(villageEntity)
        const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)
        if (HasDelayedInvasionAction(villageId) && baseSize.includes(villageSize)) {
            planningBasesIds.push(villageId)
        }
    })

    if (planningBasesIds.length <= 0) {
        return null
    }

    const randomIndex = Math.floor(RandomFloat() * planningBasesIds.length)
    return planningBasesIds[randomIndex]
}

const _GetRandomNonPlanningBaseId = (baseSize = BASE_SIZE_ALL_PORTALS_AND_BOSS) => {
    let nonPlanningBasesIds = []
    ForEachAliveVillageEntity((villageEntity) => {
        const villageId = QUERY_GetVillageIDFromEntity(villageEntity)
        const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)
        const isPiglinInvasionBase = HasEntities(FILTER_ByVillageSize(FILTER_ByFactionName(villageEntity, FACTION_PIGLINS), BASE_SIZE_ALL_PORTALS_AND_BOSS))
        if (isPiglinInvasionBase && !HasDelayedInvasionAction(villageId) && baseSize.includes(villageSize)) {
            nonPlanningBasesIds.push(villageId)
        }
    })

    if (nonPlanningBasesIds.length <= 0) {
        return null
    }

    const randomIndex = Math.floor(RandomFloat() * nonPlanningBasesIds.length)
    return nonPlanningBasesIds[randomIndex]
}

// Player destroys an invasion base every other night, a normal base on other nights.
const _ScenarioADayAction = () => {
    OUTPUT_DebugLogInvasion("Scenario A!")
    const planningBaseId = _GetRandomPlanningBaseId()
    const nonPlanningBaseId = _GetRandomNonPlanningBaseId()

    if (planningBaseId === null && nonPlanningBaseId === null) {
        OUTPUT_DebugLogInvasion("There are no piglin bases to kill. Doing nothing for the player.")
        return
    }

    if (planningBaseId === null || (QUERY_GetGlobalVariable("scenarioAInvasionBaseDestroyed") === 1 && nonPlanningBaseId !== null)) {
        OUTPUT_DebugLogInvasion("[PLAYER MOVE] KILLING A NON-PLANNING BASE")
        _PlayerKillsBase(nonPlanningBaseId)
        OUTPUT_SetGlobalVariable("scenarioAInvasionBaseDestroyed", 0)
        return
    }

    if (nonPlanningBaseId === null || (QUERY_GetGlobalVariable("scenarioAInvasionBaseDestroyed") === 0 && planningBaseId !== null)) {
        OUTPUT_DebugLogInvasion("[PLAYER MOVE] KILLING A PLANNING BASE")
        _PlayerKillsBase(planningBaseId)
        OUTPUT_SetGlobalVariable("scenarioAInvasionBaseDestroyed", 1)
        return
    }
}

// Player destroys an invasion base every night.
const _ScenarioBDayAction = () => {
    OUTPUT_DebugLogInvasion("Scenario B!")
    OUTPUT_DebugLogInvasion("Looking for a planning base to kill...")
    const planningBaseId = _GetRandomPlanningBaseId()
    if (planningBaseId !== null) {
        OUTPUT_DebugLogInvasion("[PLAYER MOVE] KILLING A PLANNING BASE")
        _PlayerKillsBase(planningBaseId)
        return
    }

    OUTPUT_DebugLogInvasion("Couldn't find any planning base to kill. Looking for a non-planning...")
    const nonPlanningBaseId = _GetRandomNonPlanningBaseId()
    if (nonPlanningBaseId !== null) {
        OUTPUT_DebugLogInvasion("[PLAYER MOVE] KILLING A NON-PLANNING BASE")
        _PlayerKillsBase(nonPlanningBaseId)
        OUTPUT_SetGlobalVariable("scenarioAInvasionBaseDestroyed", 0)
        return
    }

    OUTPUT_DebugLogInvasion("Couldn't find any non-planning base to kill. Doing nothing for the player.")
}

//Player does smort things.
const _ScenarioCDayAction = () => {
    OUTPUT_DebugLogInvasion("Scenario C!")

    const amountOfBasesDestroyed = QUERY_GetGlobalVariable(INVASION_PHASE_STATE.BASES_DESTROYED_COUNT)
    OUTPUT_DebugLogInvasion("Bases already destroyed = " + amountOfBasesDestroyed)

    //Early on - Destroy random small portal base every other day
    if (amountOfBasesDestroyed <= 2) {
        const baseId = _GetRandomBaseId(BASE_ANY_INVASION, BASE_SIZE_SMALL, true, [], "scenario_c_stage_1", 1, 2)
        if (baseId !== null) {
            _PlayerKillsBase(baseId)
            return
        }
    } else if (amountOfBasesDestroyed <= 4) {
        //Early-mid, destroy random small portal base every day
        const baseId = _GetRandomBaseId(BASE_ANY_INVASION, BASE_SIZE_SMALL, true)
        if (baseId !== null) {
            _PlayerKillsBase(baseId)
            return
        }
    } else if (amountOfBasesDestroyed <= 10) {
        //Mid-game - player has grasp of the game, they're destroying 2 planning bases every 3 days (+ a random base, prioritizing nonplanning), ONLY small/medium bases
        const eligibleBaseSizes = [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM]
        const baseId1 = _GetRandomBaseId(BASE_PLANNING, eligibleBaseSizes, true, [], "scenario_c_stage_3_planning", 2, 3) //2 every 3 days
        const baseId2 = _GetRandomBaseId(BASE_NONPLANNING, eligibleBaseSizes, true, [baseId1], "scenario_c_stage_3_nonplanning", 1, 3) //1 every 3 days
        if (baseId1 !== null) {
            _PlayerKillsBase(baseId1)
        }
        if (baseId2 !== null) {
            _PlayerKillsBase(baseId2)
        }
    } else if (amountOfBasesDestroyed <= 15) {
        //Mid-late game, player destroys a planning base every day, and another random small/medium base every alternate day
        const eligibleBaseSizesForRandom = [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM]
        const baseId1 = _GetRandomBaseId(BASE_PLANNING, BASE_SIZE_ALL_PORTALS_AND_BOSS, true) //Every day
        const baseId2 = _GetRandomBaseId(BASE_NONPLANNING, eligibleBaseSizesForRandom, true, [baseId1], "scenario_c_stage_4_nonplanning", 1, 2) //1 every 2 days
        if (baseId1 !== null) {
            _PlayerKillsBase(baseId1)
        }
        if (baseId2 !== null) {
            _PlayerKillsBase(baseId2)
        }
    } else {
        //Late game, player destroys 2 planning bases every day
        const baseId1 = _GetRandomBaseId(BASE_PLANNING, BASE_SIZE_ALL_PORTALS_AND_BOSS, true) //Every day
        const baseId2 = _GetRandomBaseId(BASE_PLANNING, BASE_SIZE_ALL_PORTALS_AND_BOSS, true, [baseId1]) //Every day
        if (baseId1 !== null) {
            _PlayerKillsBase(baseId1)
        }
        if (baseId2 !== null) {
            _PlayerKillsBase(baseId2)
        }
    }
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.invasionEnabled, (rule) => {
    if (rule.value) {
        // Default scenario
        _SetPlayerMoveScenario(PLAYER_MOVE_SCENARIO_A)

        LISTENFOR_InvasionPlayerActionsExecuted({
            snippet: "ipae_perform_player_move",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_set_player_move_scenario",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "setPlayerMoveScenario"
        })
    }
})

SNIPPET_ExternalEvent("ee_set_player_move_scenario", (variant, _payload) => {
    const scenario = variant.value
    _SetPlayerMoveScenario(scenario)
})

SNIPPET_InvasionPlayerActionsExecuted("ipae_perform_player_move", (isDayActions, _payload) => {
    const currentScenario = _GetPlayerMoveScenario()
    if (currentScenario === PLAYER_MOVE_SCENARIO_NONE) {
        return
    }

    // We don't have any scenarios for the night YET
    if (isDayActions === false) {
        return
    }

    IncrementGlobal("gv_inv_sim_day")
    OUTPUT_DebugLogInvasion(" >>>>>>>>>>>>>>> DAY " + QUERY_GetGlobalVariable("gv_inv_sim_day"))

    if (currentScenario === PLAYER_MOVE_SCENARIO_A) {
        _ScenarioADayAction()
    }

    if (currentScenario === PLAYER_MOVE_SCENARIO_B) {
        _ScenarioBDayAction()
    }

    if (currentScenario === PLAYER_MOVE_SCENARIO_C) {
        _ScenarioCDayAction()
    }
})
