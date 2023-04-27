const invasionNightConst = {
    introVODays: {
        min: 1,
        max: 4
    },
    VO: {
        sunsetIntro: "overworld_sunset"
    },
    stinger: {
        invasionHorn: "BAE_mus_campaign_invasion_start"
    }
}

const ExecuteAllInvasionActions = () => {
    OUTPUT_ExecuteAllDelayedInvasionActions()
}

const _ClearVillageVariableInvasionResult = () => {
    ForEachAliveVillageEntity((village) => {
        // get ID
        const villageId = QUERY_GetVillageIDFromEntity(village)
        SetVillageVariable(villageId, INVASION_ATTACK_RESULT_VILLAGE_VARIABLE, -1)
    })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SetupInvasionNightListeners = () => {
    LISTENFOR_TimeOfDay({
        snippet: "tod_execute_invasion_actions",
        timeOfDayName: "invasion_phase_execution",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })

    LISTENFOR_InvasionActionsExecuted({
        snippet: "iae_invasion_actions_executed",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })

    LISTENFOR_InvasionNightActionsResolved({
        snippet: "inar_piglins_executed_actions",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })
}

SNIPPET_TimeOfDay("tod_execute_invasion_actions", () => {
    if (!IsAnyHordeArrived()){
        // Note: this is important here as it will unblock the simulation flow forward. No actions are queued so no actions will be executed.
        // TODO: this is hacky and has to be properly changed for the new staggered entry + invasion flow
        ExecuteAllInvasionActions()
        return
    }

    //PlayMusicStingerToPlayers(invasionNightConst.stinger.invasionHorn, GetPlayers()) moving this elsewhere
    ExecuteAllInvasionActions()
})

SNIPPET_InvasionActionsExecuted("iae_invasion_actions_executed", (_payload) => {    
    OUTPUT_DebugLogInvasion("Executing all registered invasion actions!")
    UnreserveAllVillages()
    //BuildNightOutpost() we build outposts via claimed areas now
    _ClearVillageVariableInvasionResult()
})

SNIPPET_InvasionNightActionsResolved("inar_piglins_executed_actions", () => {
    // First check if need to flush recaps
    if (InvasionFlushRecapsCounter.Get() === 1) {
        OUTPUT_MapRemoveKey(OPER_Union(QUERY_GetAllAliveVillages(), QUERY_GetAllClaimedAreas()), MAP_KEY.INVASION_RECAP)
        InvasionFlushRecapsCounter.Decrement()
    }

    // Reset the counter for showing the HUD
    InvasionDuskHUDCounter.Set(1)
    StaggeredEntryNextDusk()
})
