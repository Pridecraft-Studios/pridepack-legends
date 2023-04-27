const IncrementAllInvasionActionTracking = () => {
    for (const action of ALL_INVASION_ACTIONS) {
        for (const horde of FACTION_PIGLINS) {
            InvasionActionsDayPassedCounter.Increment(horde, action)
        }
        InvasionActionsDayPassedCounter.Increment(GLOBAL_TRACKER, action)
    }
}

const ResetHordeInvasionActionTracking = (horde, action) => {
    InvasionActionsDayPassedCounter.Reset(horde, action)
}

const SetupAllHordeInvasionActionTracking = (horde) => {
    for (const action of ALL_INVASION_ACTIONS) {
        InvasionActionsDayPassedCounter.Set(MAX_ACTION_GAP, horde, action)
    }
}

const ResetGlobalInvasionActionTracking = (action) => {
    InvasionActionsDayPassedCounter.Reset(GLOBAL_TRACKER, action)
}

const SetupAllGlobalInvasionActionTracking = () => {
    for (const action of ALL_INVASION_ACTIONS) {
        InvasionActionsDayPassedCounter.Set(MAX_ACTION_GAP, GLOBAL_TRACKER, action)
    }
}

const GetHordeInvasionActionDaysPassed = (horde, action) => {
    return InvasionActionsDayPassedCounter.Get(horde, action)
}

const GetGlobalInvasionActionDaysPassed = (action) => {
    return InvasionActionsDayPassedCounter.Get(GLOBAL_TRACKER, action)
}