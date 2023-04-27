/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */

const CheckPassPlanningRestrictions = (horde, action) => {
    OUTPUT_DebugLogInvasion(`[INV MANAGER] Checking if can plan an action ${action} for horde ${horde}.`)

    // if invasion hasn't started yet, always pass
    if (!InvasionActive()) {
        OUTPUT_DebugLogInvasion(`[INV MANAGER] Pass - invasion is not active yet. We are probably in the pre-game.`)
        return true
    }
    
    // If no restriction on action - always pass
    const actionConfig = invasionManagerActionRestriction[action]
    if (!IsNotNull(actionConfig)) {
        OUTPUT_DebugLogInvasion(`[INV MANAGER] Pass - no restrictions for the specified action ${action} exist.`)
        return true
    }

    // First ensure that global restrictions are satisfied
    if (IsNotNull(actionConfig[GLOBAL_RESTRICTION]) && IsNotNull(actionConfig[GLOBAL_RESTRICTION].planningRestrictions)) {
        const globalPlanningRestrictions = actionConfig[GLOBAL_RESTRICTION].planningRestrictions
        const gapBetweenActions = globalPlanningRestrictions.gapBetweenActions
        if (IsNotNull(gapBetweenActions)) {
            const minDaysGap = gapBetweenActions[GetInvasionPhase()]
            const daysPassedSinceLastAction = GetGlobalInvasionActionDaysPassed(action)
            if (minDaysGap !== ANY_GAP && daysPassedSinceLastAction < minDaysGap) {
                OUTPUT_DebugLogInvasion(`[INV MANAGER] Fail - does not satisfy global days gap condition. Days passed: ${daysPassedSinceLastAction}, minimum days needed: ${minDaysGap}}`)
                return false
            }
        }

        const concurrentActions = globalPlanningRestrictions.concurrentActions
        if (IsNotNull(concurrentActions)) {
            const maxConcurrentActions = concurrentActions[GetInvasionPhase()]
            const currentlyPlannedActions = CountAllPlannedDelayedInvasionActions(action)

            if (maxConcurrentActions !== ANY_CONCURRENT && concurrentActions >= maxConcurrentActions) {
                OUTPUT_DebugLogInvasion(`[INV MANAGER] Fail - does not satisfy global concurrency condition. Actions currently planned: ${currentlyPlannedActions}, maximum actions allowed: ${maxConcurrentActions}}`)
                return false
            }
        }

        const customFunction = globalPlanningRestrictions.customFunction
        if (IsNotNull(customFunction)) {
            const funcEval = customFunction[GetInvasionPhase()]
            if (funcEval !== NO_FUNCTION && !funcEval.eval()) {
                OUTPUT_DebugLogInvasion(`[INV MANAGER] Fail - does not satisfy global custom function condition. Did not pass the evaluation.`)
                return false
            }
        }
    }
    
    OUTPUT_DebugLogInvasion(`[INV MANAGER] Checkpoint - successfully passed global restrictions check!`)

    // Now let's take a look at per-horde basis
    const order = HordeEntry.GetOrderByName(horde)
    if (order === -1) {
        OUTPUT_DebugLogInvasion(`[INV MANAGER] Pass - can't look up the conditions for the horde ${horde} by their order because the horde hasn't arrived yet. Please check the logic carefully as this should never happen.`)
        return true
    }

    if (IsNotNull(actionConfig[horde]) && IsNotNull(actionConfig[horde].planningRestrictions)) {
        const hordePlanningRestrictions = actionConfig[horde].planningRestrictions
        const gapBetweenActions = hordePlanningRestrictions.gapBetweenActions
        if (IsNotNull(gapBetweenActions)) {
            const minDaysGap = gapBetweenActions[order][GetInvasionPhase()]
            const daysPassedSinceLastAction = GetHordeInvasionActionDaysPassed(horde, action)
            if (minDaysGap !== ANY_GAP && daysPassedSinceLastAction < minDaysGap) {
                OUTPUT_DebugLogInvasion(`[INV MANAGER] Fail - does not satisfy horde days gap condition. Days passed: ${daysPassedSinceLastAction}, minimum days needed: ${minDaysGap} for horde ${horde}`)
                return false
            }
        }

        const concurrentActions = hordePlanningRestrictions.concurrentActions
        if (IsNotNull(concurrentActions)) {
            const maxConcurrentActions = concurrentActions[order][GetInvasionPhase()]
            const currentlyPlannedActions = CountFactionPlannedDelayedInvasionActions(horde, action)

            if (maxConcurrentActions !== ANY_CONCURRENT && concurrentActions >= maxConcurrentActions) {
                OUTPUT_DebugLogInvasion(`[INV MANAGER] Fail - does not satisfy horde concurrency condition. Actions currently planned: ${currentlyPlannedActions}, maximum actions allowed: ${maxConcurrentActions} for horde ${horde}`)
                return false
            }
        }

        const customFunction = hordePlanningRestrictions.customFunction
        if (IsNotNull(customFunction)) {
            const funcEval = customFunction[order][GetInvasionPhase()]
            if (funcEval !== NO_FUNCTION && !funcEval.eval()) {
                OUTPUT_DebugLogInvasion(`[INV MANAGER] Fail - does not satisfy global custom function condition. Did not pass the evaluation for horde ${horde}.`)
                return false
            }
        }
    }

    OUTPUT_DebugLogInvasion(`[INV MANAGER] Checkpoint - successfully passed horde restrictions check for horde ${horde}!`)
    OUTPUT_DebugLogInvasion(`[INV MANAGER] Pass - all conditions are satisfied.`)
    return true
}

const GetNextEnforcedActionGlobal = () => {
    OUTPUT_DebugLogInvasion(`[INV MANAGER] Calculating next enforced action.`)

    // if invasion hasn't started yet, we don't queue anything
    if (!InvasionActive()) {
        OUTPUT_DebugLogInvasion(`[INV MANAGER] Null - invasion hasn't started yet.`)
        return null
    }

    const restrictionConfig = invasionManagerActionRestriction

    // NOTE: we use "in" here to iterate over keys
    for (const action in restrictionConfig) {
        const actionConfig = restrictionConfig[action]
    
        // Skip if there is a null definition
        if (!IsNotNull(actionConfig)) {
            continue
        }

        // First see if there is a global action that needs to be taken
        if (IsNotNull(actionConfig[GLOBAL_RESTRICTION]) && IsNotNull(actionConfig[GLOBAL_RESTRICTION].enforceConditions)) {
            const globalEnforceConditions = actionConfig[GLOBAL_RESTRICTION].enforceConditions
            const gapBetweenActions = globalEnforceConditions.gapBetweenActions
            if (IsNotNull(gapBetweenActions)) {
                const maxDaysGap = gapBetweenActions[GetInvasionPhase()]
                const daysPassedSinceLastAction = GetGlobalInvasionActionDaysPassed(action)
                if (maxDaysGap !== ANY_GAP && daysPassedSinceLastAction >= maxDaysGap) {
                    OUTPUT_DebugLogInvasion(`[INV MANAGER] ${action} - passes global days gap condition. Days passed: ${daysPassedSinceLastAction}, max days required: ${maxDaysGap}}`)
                    return action
                }
            }

            const concurrentActions = globalEnforceConditions.concurrentActions
            if (IsNotNull(concurrentActions)) {
                const minConcurrentActions = concurrentActions[GetInvasionPhase()]
                const currentlyPlannedActions = CountAllPlannedDelayedInvasionActions(action)

                if (minConcurrentActions !== ANY_CONCURRENT && concurrentActions < minConcurrentActions) {
                    OUTPUT_DebugLogInvasion(`[INV MANAGER] ${action} - passes global concurrency condition. Actions currently planned: ${currentlyPlannedActions}, minimum actions required: ${minConcurrentActions}}`)
                    return action
                }
            }

            const customFunction = globalEnforceConditions.customFunction
            if (IsNotNull(customFunction)) {
                const funcEval = customFunction[GetInvasionPhase()]
                if (funcEval !== NO_FUNCTION && funcEval.eval()) {
                    OUTPUT_DebugLogInvasion(`[INV MANAGER] ${action} - passes global custom function condition.`)
                    return action
                }
            }
        }
    }

    OUTPUT_DebugLogInvasion(`[INV MANAGER] Null - none of the actions pass any of the global conditions or the global conditions aren't defined.`)
    return null
}

const GetNextEnforcedActionHorde = (horde) => {
    OUTPUT_DebugLogInvasion(`[INV MANAGER] Calculating next enforced action for the particular horde.`)

    // if invasion hasn't started yet, we don't queue anything
    if (!InvasionActive()) {
        OUTPUT_DebugLogInvasion(`[INV MANAGER] Null - invasion hasn't started yet.`)
        return null
    }

    // Now let's take a look at per-horde basis
    const order = HordeEntry.GetOrderByName(horde)
    if (order === -1) {
        OUTPUT_DebugLogInvasion(`[INV MANAGER] Null - can't look up the enforced action conditions for the horde ${horde} by their order because the horde hasn't arrived yet. Please check the logic carefully as this should never happen.`)
        return null
    }

    const restrictionConfig = invasionManagerActionRestriction

    // NOTE: we use "in" here to iterate over keys
    for (const action in restrictionConfig) {
        const actionConfig = restrictionConfig[action]
    
        // Skip if there is a null definition
        if (!IsNotNull(actionConfig)) {
            continue
        }

        // First see if there is a global action that needs to be taken
        if (IsNotNull(actionConfig[horde]) && IsNotNull(actionConfig[horde].enforceConditions)) {
            const hordeEnforceConditions = actionConfig[horde].enforceConditions
            const gapBetweenActions = hordeEnforceConditions.gapBetweenActions
            if (IsNotNull(gapBetweenActions)) {
                const maxDaysGap = gapBetweenActions[order][GetInvasionPhase()]
                const daysPassedSinceLastAction = GetHordeInvasionActionDaysPassed(horde, action)
                if (maxDaysGap !== ANY_GAP && daysPassedSinceLastAction >= maxDaysGap) {
                    OUTPUT_DebugLogInvasion(`[INV MANAGER] ${action} - passes horde days gap condition. Days passed: ${daysPassedSinceLastAction}, max days required: ${maxDaysGap} for horde ${horde}`)
                    return action
                }
            }

            const concurrentActions = hordeEnforceConditions.concurrentActions
            if (IsNotNull(concurrentActions)) {
                const minConcurrentActions = concurrentActions[order][GetInvasionPhase()]
                const currentlyPlannedActions = CountFactionPlannedDelayedInvasionActions(horde, action)

                if (minConcurrentActions !== ANY_CONCURRENT && concurrentActions < minConcurrentActions) {
                    OUTPUT_DebugLogInvasion(`[INV MANAGER] ${action} - passes horde concurrency condition. Actions currently planned: ${currentlyPlannedActions}, minimum actions required: ${minConcurrentActions} for horde ${horde}`)
                    return action
                }
            }

            const customFunction = hordeEnforceConditions.customFunction
            if (IsNotNull(customFunction)) {
                const funcEval = customFunction[order][GetInvasionPhase()]
                if (funcEval !== NO_FUNCTION && funcEval.eval()) {
                    OUTPUT_DebugLogInvasion(`[INV MANAGER] ${action} - passes horde custom function condition for horde ${horde}.`)
                    return action
                }
            }
        }
    }

    OUTPUT_DebugLogInvasion(`[INV MANAGER] Null - the action doesn't pass any of the horde conditions or the horde conditions aren't defined.`)
    return null
}