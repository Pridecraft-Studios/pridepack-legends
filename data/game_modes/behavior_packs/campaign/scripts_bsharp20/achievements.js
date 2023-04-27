// Contains functionality for achievements specific to PVP
// Checks to see if the player is earning Lapis in PVP over X period of time
// Once timer has expired, no longer records the telemetry event
// Otherwise you could simply leave the game on in practice, go AFK and you could get it, although this isn't much harder, it will encourage use of the mechanic
const killPiglinsAchievement = {
    unitIncludeTags: TAGS_PIGLIN_MOB,
    structureIncludeTags: ["piglin", TAG_BUILDABLE],
    structureExcludeTags: ["wall"]
}

SNIPPET_InheritsFromGameMode("campaign", () => {
    LISTENFOR_PopCappedEntityDestroyed({
        snippet: "ed_kill_piglin_unit_achievement",
        destroyerTeamName: TEAM_BLUE,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: killPiglinsAchievement.unitIncludeTags,
        despawned: false
    })
    LISTENFOR_PopCappedEntityDestroyed({
        snippet: "ed_kill_piglin_structure_achievement",
        destroyerTeamName: TEAM_BLUE,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: killPiglinsAchievement.structureIncludeTags,
        excludeTags: killPiglinsAchievement.structureExcludeTags,
        despawned: false
    })
})

SNIPPET_PopCappedEntityDestroyed("ed_kill_piglin_unit_achievement", (_entity, _payload) => {
    TelemetrySendPiglinUnitKillCount(1)
})

SNIPPET_PopCappedEntityDestroyed("ed_kill_piglin_structure_achievement", (_entity, _payload) => {
    TelemetrySendPiglinStructureKillCount(1)
})
