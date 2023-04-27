const hordeDrawsVariable = "number_of_horde_draws"
const invasionDrawInfoVal = {
    remainingDraws: "gv_invasion_draw_remaining_draws",
    remainingDays: "gv_invasion_draw_remaining_days"
}

const _FindDrawInfo = () => {
    const currentPhase = GetInvasionPhase()
    if (currentPhase < invasionDrawData.drawInfoByPhase.length) {
        return invasionDrawData.drawInfoByPhase[currentPhase]
    } else {
        return null
    }
}

const _GetDrawsNumber = () => {
    if (!InvasionActive()) {
        return 0
    }

    const drawInfo = _FindDrawInfo()
    if (drawInfo === null) {
        Loge(`Draw info does not exist in invasion_intentions_draws.js`)
        return 0
    }

    if (QUERY_GetGlobalVariable(invasionDrawInfoVal.remainingDays) === 0) {
        ResetInvasionDrawCounter()
    }

    const draws = Math.ceil(QUERY_GetGlobalVariable(invasionDrawInfoVal.remainingDraws) / QUERY_GetGlobalVariable(invasionDrawInfoVal.remainingDays))
    OUTPUT_SetGlobalVariable(invasionDrawInfoVal.remainingDraws, QUERY_GetGlobalVariable(invasionDrawInfoVal.remainingDraws) - draws)
    DecrementGlobal(invasionDrawInfoVal.remainingDays)

    const resultDraws = Math.max(draws, drawInfo.minimumDraws)

    OUTPUT_DebugLogInvasion(`# of draws this day according to phase ${GetInvasionPhase()}: ${draws}`)
    OUTPUT_DebugLogInvasion(`# of draws minimum for phase ${GetInvasionPhase()}: ${drawInfo.minimumDraws}`)
    OUTPUT_DebugLogInvasion(`# of result draws: ${resultDraws}`)

    return resultDraws
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ResetInvasionDrawCounter = () => {
    if (InvasionActive()) {
        const drawInfo = _FindDrawInfo()
        OUTPUT_SetGlobalVariable(invasionDrawInfoVal.remainingDraws, drawInfo.totalDraws)
        const drawDays = drawInfo.overNumberOfDays === undefined ? 1 : drawInfo.overNumberOfDays
        OUTPUT_SetGlobalVariable(invasionDrawInfoVal.remainingDays, drawDays)
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetTotalIntentionsDrawsAtDawn = () => {
    return _GetDrawsNumber()
}

const SetInvasionHordeDraws = (numberOfDraws) => {
    OUTPUT_DebugLogInvasion(`Setting number of horde draws: ${numberOfDraws}`)
    OUTPUT_SetGlobalVariable(hordeDrawsVariable, numberOfDraws)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetInvasionHordeDraws = () => {
    return QUERY_GetGlobalVariable(hordeDrawsVariable)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DecrementHordeDraws = () => {
    const currentDrawCount = QUERY_GetGlobalVariable(hordeDrawsVariable)
    if (currentDrawCount === 0) {
        Logw("Attempting to decrement invasion horde draws when its already at 0!")
        return
    }
    SetInvasionHordeDraws(currentDrawCount - 1)
}
