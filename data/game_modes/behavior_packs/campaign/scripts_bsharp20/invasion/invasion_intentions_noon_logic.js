const invasionNoonConst = {
    globals: {
        timeTillNextMobAllianceNotification: "time_till_next_mob_alliance_destroyed_notification",
        timeTillNextVillageNotification: "time_till_next_village_destroyed_notification"
    },
    mobAllianceNotifGap: 3,
    villageNotifGap: 4
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SetupInvasionNoonListeners = () => {
    LISTENFOR_TimeOfDay({
        snippet: "tod_noon_notifications",
        timeOfDayNumber: TIME_NOON,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })

    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_mob_alliance_lost",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        variableName: MESSAGING_GLOBALS.MOB_ALLIANCE_LOST
    })

    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_village_lost",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        variableName: MESSAGING_GLOBALS.VILLAGE_LOST
    })
}

//Mob Alliance Destroyed
SNIPPET_GlobalVariableChanged("gvc_mob_alliance_lost", (oldValue, newValue, _payload) => {
    _CheckAndSetNoonDestructionVariables(invasionNoonConst.globals.timeTillNextMobAllianceNotification, invasionNoonConst.mobAllianceNotifGap, ONBOARDING_GLOBALS.MOB_ALLIANCE_LOST_RECOVERED, newValue, oldValue)
})

//Village Destroyed
SNIPPET_GlobalVariableChanged("gvc_village_lost", (oldValue, newValue, _payload) => {
    _CheckAndSetNoonDestructionVariables(invasionNoonConst.globals.timeTillNextVillageNotification, invasionNoonConst.villageNotifGap, ONBOARDING_GLOBALS.VILLAGE_DESTROYED_REBUILT, newValue, oldValue)
})

SNIPPET_TimeOfDay("tod_noon_notifications", () => {
    //Mob alliance
    _CheckAndAnnounceNoonDestructionNotification(invasionNoonConst.globals.timeTillNextMobAllianceNotification, invasionNoonConst.mobAllianceNotifGap, MESSAGING_GLOBALS.MOB_ALLIANCE_LOST, "invasion_mob_alliance_destroyed_nudge")
    //Village
    _CheckAndAnnounceNoonDestructionNotification(invasionNoonConst.globals.timeTillNextVillageNotification, invasionNoonConst.villageNotifGap, MESSAGING_GLOBALS.VILLAGE_LOST, "invasion_village_destroyed_nudge")
})

const _CheckAndSetNoonDestructionVariables = (timeTillNextNotificationVariable, notificationGap, globalOnboardingVariableToCheck, newDestructionValue, oldDestructionValue) => {
    if (QUERY_GetGlobalVariable(globalOnboardingVariableToCheck) === 1) {
        if (newDestructionValue === 0) {
            OUTPUT_SetGlobalVariable(timeTillNextNotificationVariable, 0)
        }

        if (newDestructionValue === 1 && oldDestructionValue === 0) {
            if (QUERY_GetGlobalVariable(timeTillNextNotificationVariable) === 0) {
                OUTPUT_SetGlobalVariable(timeTillNextNotificationVariable, notificationGap)
            }
        }
    }
}

const _CheckAndAnnounceNoonDestructionNotification = (timeTillNextNotificationVariable, notificationGap, globalDestructionVariableToCheck, notificationToPlay) => {
    if (QUERY_GetGlobalVariable(timeTillNextNotificationVariable) > 0) {
        DecrementGlobal(timeTillNextNotificationVariable)
    }

    if (QUERY_GetGlobalVariable(globalDestructionVariableToCheck) > 0) {
        //Message
        if (QUERY_GetGlobalVariable(timeTillNextNotificationVariable) === 0) {
            OUTPUT_Announce(notificationToPlay, [])
            OUTPUT_SetGlobalVariable(timeTillNextNotificationVariable, notificationGap) //Repeat
            PlayUIActionToAll("invasion_indicator@map_indicator")
        }
    } else {
        OUTPUT_SetGlobalVariable(timeTillNextNotificationVariable, 0)
    }
}
