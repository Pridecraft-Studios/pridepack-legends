// SPECIAL FORCED ACTION TRACKER

const _ForcedActionGV = (horde, action) => {
    return `gv_forced_action_${horde}_${action}`
}

const RecordForcedAction = (horde, action) => {
    IncrementGlobal(_ForcedActionGV(horde, action))
}

const ConsumeForcedAction = (horde, action) => {
    const actionGV = _ForcedActionGV(horde, action)
    if (QUERY_GetGlobalVariable(actionGV) === 0) {
        return false
    }

    OUTPUT_DebugLogInvasion(`Consuming skipped action ${action} for horde ${horde}`)
    DecrementGlobal(actionGV)
    return true
}