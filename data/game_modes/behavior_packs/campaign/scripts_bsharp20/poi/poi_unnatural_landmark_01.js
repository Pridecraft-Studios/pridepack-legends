SNIPPET_Bootstrap("", () => {
    LISTENFOR_VillageGenerated({
        snippet: "vg_unnatural_landmark_01",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: "faction.poi.unnatural.landmark.01"
    })
})

SNIPPET_VillageGenerated("vg_unnatural_landmark_01", (villageId) => {
    const baseDeck = DECK_Empty()
    DECK_PutOnBottomOf(ZonesCard("addPoiZones", 4), baseDeck)
    const towerPOI = BuildableCard("poiUnnaturalLandmark01")
    DECK_MultiplyByMultipleRules(towerPOI, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("facingNorth")])

    DECK_PutOnBottomOf(towerPOI, baseDeck)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)

    // note: we don't filter on village ID b/c `OUTPUT_SpawnBuildableAtWithOffset` has no option to set village ownership.
    LISTENFOR_BuildingComplete({
        snippet: "bc_unnatural_landmark_01_base",
        ownerVillageId: villageId,
        includeTags: ["poi_unnatural_landmark_01_base"]
    })
})

SNIPPET_BuildingComplete("bc_unnatural_landmark_01_base", (buildingCompleteEG) => {
    OUTPUT_SpawnBuildableAtWithOffset("badger:poi_unnatural_landmark_01_stack_01", buildingCompleteEG, TEAM_BLUE, SOUTH, true, false, 0, 45, 0, CALLBACK_NONE)
    Once()
})

// // Setup trigger volume for discovery
// SNIPPET_BuildingComplete("bc_poi_max_size_test", (poiBuildingEntity) => {
//     const triggerVolume = GetInstanceTriggerVolume(poiVEVal.instance.triggerZone, TEAM_WILD, undefined, false, [TAG_PLAYER], [])
//     LISTENFOR_SpatialPartitionEntered({
//         snippet: "spe_discover_poi_max_size_test",
//         ownerVillageId: OWNER_VILLAGE_OPT_OUT,
//         triggerEntity: triggerVolume,
//         payloadEntities: poiBuildingEntity
//     })
// })

// // Discovered the POI
// SNIPPET_SpatialPartitionEntered("spe_discover_poi_max_size_test", (triggerEntity, intruderEntity, payload) => {
//     OUTPUT_TriggerCinematic(poiVEVal.cinematic.discovered, OPER_Append(payload.entities, intruderEntity))
//     DelayedAnnounceTimed(poiVEVal.message.completed, 18, 0, 10)
//     OUTPUT_MarkPOIVisited(QUERY_GetPOIByName(POI_NAME_LANDMARK_TEMP))
//     OUTPUT_DespawnEntities(triggerEntity)
//     Once()
// })
