// Contains functionality for achievements specific to PVP
// Checks to see if the player is earning Lapis in PVP over X period of time
// Once timer has expired, no longer records the telemetry event
// Otherwise you could simply leave the game on in practice, go AFK and you could get it, although this isn't much harder, it will encourage use of the mechanic
const collectLapisAchievement = {
    timerDuration: 60 * 30, //intended match experience is ~30 minutes
    gv: "gv_collect_lapis_achievement_pvp"
}

SNIPPET_InheritsFromGameMode("pvp", () => {
    LISTENFOR_ResourcesChanged({
        snippet: "rc_collect_lapis_pvp",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        resourceName: "emerald" //lapis is called emerald under the hood
    })
    LISTENFOR_LocalTimer({
        snippet: "lt_collect_lapis_pvp",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: collectLapisAchievement.timerDuration
    })
})

SNIPPET_LocalTimer("lt_collect_lapis_pvp", (_timeLeft, _payload) => {
    OUTPUT_SetGlobalVariable(collectLapisAchievement.gv, 1)
})

SNIPPET_ResourcesChanged("rc_collect_lapis_pvp", (_resourceName, teamID, previousAmount, currentAmount) => {
    const amountOfLapis = currentAmount - previousAmount //how much of the resource did you just receive?
    let relevantPlayers = FILTER_ByTeam(GetAllPlayers(), teamID)

    if (!QUERY_GetGlobalVariable(collectLapisAchievement.gv)) {
        //check to see if timer has expired
        if (amountOfLapis > 0) {
            //only want it for a positive amount, not for when its spent ALSO check if relevant players is valid cause testing in a practice, I generated tons of errors
            while (HasEntities(relevantPlayers)) {
                const player = RandomEntity(relevantPlayers)
                TelemetrySendLapisCount(player, amountOfLapis)
                relevantPlayers = OPER_Difference(relevantPlayers, player)
            }
        }
    } else {
        Once() //stop running this
    }
})
