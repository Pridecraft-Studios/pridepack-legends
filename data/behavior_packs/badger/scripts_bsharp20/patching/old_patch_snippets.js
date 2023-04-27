// WARNING
// DO NO REMOVE ANY SNIPPETS IN THIS FILE, THEY ARE USED FOR OLD DEV SAVES FOR PATCHES THAT GOT CLEANED UP

// used for patching emitters on already built outposts
SNIPPET_PlayerEnteredVillage("pev_attackUpdateMusicEmitter", (villageId, _playerCount) => {
    SetAudioPhaseForBase(villageId, attackVal.audioPerPhaseArray[0])
    Once()
})

SNIPPET_PlayerEnteredVillage("pev_player_entered_occupation_base_barracks_patch", (villageId, _playerCount, payload) => {
    const mobId = payload.string
    patchOccupationBaseBarracks(villageId, mobId)
    Once()
})

SNIPPET_PlayerEnteredVillage("pev_player_entered_obstacle_base_patch", (villageId, _playerCount, _payload) => {
    Logi(" ~~~~~~~~~~~~~pev_player_entered_obstacle_base_patch~~~~~~~~~~~~~ ")
    const rallyPoints = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["obstacleRallyPoint"], [])
    OUTPUT_AddTag(rallyPoints, "doNotDivideRally")
    Once()
})

// used for patching emitters on already built outposts
SNIPPET_PlayerEnteredVillage("pev_defendUpdateMusicEmitter", (villageId, _playerCount) => {
    SetAudioPhaseForBase(villageId, defendVal.audioPerPhaseArray[0])
    Once()
})

// used for patching emitters on already built outposts
SNIPPET_PlayerEnteredVillage("pev_obstacleUpdateMusicEmitter", (villageId, _playerCount) => {
    SetAudioPhaseForBase(villageId, obstacleVal.audioPerPhaseArray[0])
    Once()
})
