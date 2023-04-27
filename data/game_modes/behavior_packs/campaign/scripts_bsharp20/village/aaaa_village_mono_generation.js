
const _RandomIntFromIntervalVillager = (min, max) => {
    return RandomIntFromIntervalGroup(min, max, RANDOM_GROUP_VILLAGER)
}

const _DeckShuffleVillager = (deck) => {
    DECK_ShuffleGroup(deck, RANDOM_GROUP_VILLAGER)
}

const VillageDeckO = () => {
    const villageDeck = DECK_Empty()

    //Central District
    const centralFountainZone = ZonesCard("addZone", 1)
    DECK_MultiplyBySingle(centralFountainZone, ZoneTagCard("villageDeadCenter"))

    const villageFountainNorthConnection = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(villageFountainNorthConnection, [ZoneTagCard("pathConnectionZoneInnerNorth"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])
    DECK_PutOnBottomOf(villageFountainNorthConnection, centralFountainZone)

    const villageFountainEastConnection = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(villageFountainEastConnection, [ZoneTagCard("pathConnectionZoneInnerEast"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")])
    DECK_PutOnBottomOf(villageFountainEastConnection, centralFountainZone)

    const villageFountainSouthConnection = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(villageFountainSouthConnection, [ZoneTagCard("pathConnectionZoneInnerSouth"), PlacementPreferenceCard("placeInDirectionSouthWithWedgeBrush")])
    DECK_PutOnBottomOf(villageFountainSouthConnection, centralFountainZone)

    const villageFountainWestConnection = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(villageFountainWestConnection, [ZoneTagCard("pathConnectionZoneInnerWest"), PlacementPreferenceCard("placeInDirectionWestWithWedgeBrush")])
    DECK_PutOnBottomOf(villageFountainWestConnection, centralFountainZone)

    DECK_MultiplyBySingle(centralFountainZone, ZoneTagCard("villageRing1"))
    DECK_PutOnBottomOf(centralFountainZone, villageDeck)
    const cageLayer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(cageLayer, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("villageCageZone")])
    DECK_PutOnBottomOf(cageLayer, villageDeck)

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Add Districts

    //North District
    const districtNorth = DistrictCard("district1")
    DECK_MultiplyByMultipleRules(districtNorth, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])
    DECK_PutOnBottomOf(districtNorth, villageDeck)

    //East District
    const districtEast = DistrictCard("district2")
    DECK_MultiplyByMultipleRules(districtEast, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")])
    DECK_PutOnBottomOf(districtEast, villageDeck)

    //South District
    const districtSouth = DistrictCard("district3")
    DECK_MultiplyByMultipleRules(districtSouth, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush")])
    DECK_PutOnBottomOf(districtSouth, villageDeck)

    //West District
    const districtWest = DistrictCard("district4")
    DECK_MultiplyByMultipleRules(districtWest, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])
    DECK_PutOnBottomOf(districtWest, villageDeck)

    //North East District
    const districtNorthEast = DistrictCard("districtNorthEast")
    DECK_MultiplyByMultipleRules(districtNorthEast, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionNorthEastWithWedgeBrush")])
    DECK_PutOnBottomOf(districtNorthEast, villageDeck)

    //South West District
    const districtSouthWest = DistrictCard("districtSouthWest")
    DECK_MultiplyByMultipleRules(districtSouthWest, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionSouthWestWithWedgeBrush")])
    DECK_PutOnBottomOf(districtSouthWest, villageDeck)

    // Add District Zones

    // North
    const villageZoneNorth = ZonesCard("addZone", 1)
    DECK_MultiplyBySingle(villageZoneNorth, ZoneTagCard("pathConnectionZone"))
    DECK_PutOnBottomOf(LayerOfZonesCard("addLayerOfZones", 1), villageZoneNorth)
    DECK_MultiplyByMultipleRules(villageZoneNorth, [DistrictCard("district1"), ZoneTagCard("district1")])
    DECK_PutOnBottomOf(villageZoneNorth, villageDeck)

    const zoneExtensionNorth = ZonesCard("addZone", 3)
    DECK_MultiplyByMultipleRules(zoneExtensionNorth, [PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), PlacementPreferenceCard("closeToDistrictStart")])
    DECK_MultiplyByMultipleRules(zoneExtensionNorth, [DistrictCard("district1"), ZoneTagCard("district1")])
    DECK_PutOnBottomOf(zoneExtensionNorth, villageDeck)

    // East
    const villageZoneEast = ZonesCard("addZone", 1)
    DECK_MultiplyBySingle(villageZoneEast, ZoneTagCard("pathConnectionZone"))
    DECK_PutOnBottomOf(LayerOfZonesCard("addLayerOfZones", 1), villageZoneEast)
    DECK_MultiplyByMultipleRules(villageZoneEast, [DistrictCard("district2"), ZoneTagCard("district2")])
    DECK_PutOnBottomOf(villageZoneEast, villageDeck)

    const zoneExtensionEast = ZonesCard("addZone", 3)
    DECK_MultiplyByMultipleRules(zoneExtensionEast, [PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), PlacementPreferenceCard("closeToDistrictStart")])
    DECK_MultiplyByMultipleRules(zoneExtensionEast, [DistrictCard("district2"), ZoneTagCard("district2")])
    DECK_PutOnBottomOf(zoneExtensionEast, villageDeck)

    // South
    const villageZoneSouth = ZonesCard("addZone", 1)
    DECK_MultiplyBySingle(villageZoneSouth, ZoneTagCard("pathConnectionZone"))
    DECK_PutOnBottomOf(LayerOfZonesCard("addLayerOfZones", 1), villageZoneSouth)
    DECK_MultiplyByMultipleRules(villageZoneSouth, [DistrictCard("district3"), ZoneTagCard("district3")])
    DECK_PutOnBottomOf(villageZoneSouth, villageDeck)

    const zoneExtensionSouth = ZonesCard("addZone", 3)
    DECK_MultiplyByMultipleRules(zoneExtensionSouth, [PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), PlacementPreferenceCard("closeToDistrictStart")])
    DECK_MultiplyByMultipleRules(zoneExtensionSouth, [DistrictCard("district3"), ZoneTagCard("district3")])
    DECK_PutOnBottomOf(zoneExtensionSouth, villageDeck)

    // West
    const villageZoneWest = ZonesCard("addZone", 1)
    DECK_MultiplyBySingle(villageZoneWest, ZoneTagCard("pathConnectionZone"))
    DECK_PutOnBottomOf(LayerOfZonesCard("addLayerOfZones", 1), villageZoneWest)
    DECK_MultiplyByMultipleRules(villageZoneWest, [DistrictCard("district4"), ZoneTagCard("district4")])
    DECK_PutOnBottomOf(villageZoneWest, villageDeck)

    const zoneExtensionWest = ZonesCard("addZone", 3)
    DECK_MultiplyByMultipleRules(zoneExtensionWest, [PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), PlacementPreferenceCard("closeToDistrictStart")])
    DECK_MultiplyByMultipleRules(zoneExtensionWest, [DistrictCard("district4"), ZoneTagCard("district4")])
    DECK_PutOnBottomOf(zoneExtensionWest, villageDeck)

    //Districts we might use later
    const villageZoneNorthEast = ZonesCard("addZone", 1)
    DECK_MultiplyBySingle(villageZoneNorthEast, ZoneTagCard("pathConnectionZone"))
    DECK_PutOnBottomOf(LayerOfZonesCard("addLayerOfZones", 1), villageZoneNorthEast)
    DECK_MultiplyByMultipleRules(villageZoneNorthEast, [DistrictCard("districtNorthEast"), ZoneTagCard("districtNorthEast")])
    DECK_PutOnBottomOf(villageZoneNorthEast, villageDeck)

    const villageZoneSouthWest = ZonesCard("addZone", 1)
    DECK_MultiplyBySingle(villageZoneSouthWest, ZoneTagCard("pathConnectionZone"))
    DECK_PutOnBottomOf(LayerOfZonesCard("addLayerOfZones", 1), villageZoneSouthWest)
    DECK_MultiplyByMultipleRules(villageZoneSouthWest, [DistrictCard("districtSouthWest"), ZoneTagCard("districtSouthWest")])
    DECK_PutOnBottomOf(villageZoneSouthWest, villageDeck)

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Paths
    //Place inner paths, gaurentees they align with the village structure
    const innerNorthPathStartRules = [PlacementPreferenceCard("closeToDistrictStart"), ZoneFilterCard("villageDeadCenter")]
    const innerNorthPathEndRules = [ZoneFilterCard("pathConnectionZoneInnerNorth")]
    CreatePathRequestOnBottomOf("example_district_path", innerNorthPathStartRules, innerNorthPathEndRules, villageDeck)

    const innerEastPathStartRules = [PlacementPreferenceCard("closeToDistrictStart"), ZoneFilterCard("villageDeadCenter")]
    const innerEastPathEndRules = [ZoneFilterCard("pathConnectionZoneInnerEast")]
    CreatePathRequestOnBottomOf("example_district_path", innerEastPathStartRules, innerEastPathEndRules, villageDeck)

    const innerSouthPathStartRules = [PlacementPreferenceCard("closeToDistrictStart"), ZoneFilterCard("villageDeadCenter")]
    const innerSouthPathEndRules = [ZoneFilterCard("pathConnectionZoneInnerSouth")]
    CreatePathRequestOnBottomOf("example_district_path", innerSouthPathStartRules, innerSouthPathEndRules, villageDeck)

    const innerWestPathStartRules = [PlacementPreferenceCard("closeToDistrictStart"), ZoneFilterCard("villageDeadCenter")]
    const innerWestPathEndRules = [ZoneFilterCard("pathConnectionZoneInnerWest")]
    CreatePathRequestOnBottomOf("example_district_path", innerWestPathStartRules, innerWestPathEndRules, villageDeck)

    //Place paths outwards
    const northPathStartRules = [ZoneFilterCard("pathConnectionZoneInnerNorth")]
    const northPathEndRules = [ZoneFilterCard("district1"), ZoneFilterCard("pathConnectionZone")]
    CreatePathRequestOnBottomOf("example_district_path", northPathStartRules, northPathEndRules, villageDeck)

    const eastPathStartRules = [ZoneFilterCard("pathConnectionZoneInnerEast")]
    const eastPathEndRules = [ZoneFilterCard("district2"), ZoneFilterCard("pathConnectionZone")]
    CreatePathRequestOnBottomOf("example_district_path", eastPathStartRules, eastPathEndRules, villageDeck)

    const southPathStartRules = [ZoneFilterCard("pathConnectionZoneInnerSouth")]
    const southPathEndRules = [ZoneFilterCard("district3"), ZoneFilterCard("pathConnectionZone")]
    CreatePathRequestOnBottomOf("example_district_path", southPathStartRules, southPathEndRules, villageDeck)

    const westPathStartRules = [ZoneFilterCard("pathConnectionZoneInnerWest")]
    const westPathEndRules = [ZoneFilterCard("district4"), ZoneFilterCard("pathConnectionZone")]
    CreatePathRequestOnBottomOf("example_district_path", westPathStartRules, westPathEndRules, villageDeck)

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    const comboVillageDrawDeck = DECK_Empty()

    const smallHouseDeck = BuildableCard("culture1HouseSmall", 5)
    const mediumHouseDeck = BuildableCard("culture1HouseMedium", 3)
    const largeHouseDeck = BuildableCard("culture1HouseLarge", 1)

    DECK_PutOnBottomOf(smallHouseDeck, comboVillageDrawDeck)
    DECK_PutOnBottomOf(mediumHouseDeck, comboVillageDrawDeck)

    _DeckShuffleVillager(comboVillageDrawDeck)

    //Divide the houses
    const villageHouseDeck = []
    let amountToDraw = 0
    let minAmount = 999
    let minIndex = 0
    for (let i = 0; i < 4; i++) {
        amountToDraw = _RandomIntFromIntervalVillager(1, 3)
        if (amountToDraw < minAmount) {
            minAmount = amountToDraw
            minIndex = i
        }
        villageHouseDeck[i] = DECK_DrawFromTop(comboVillageDrawDeck, amountToDraw)
    }

    //Add large house to least populated
    DECK_PutOnTopOf(largeHouseDeck, villageHouseDeck[minIndex])

    const comboVillageDeckNorth = villageHouseDeck[0]
    const comboVillageDeckEast = villageHouseDeck[1]
    const comboVillageDeckSouth = villageHouseDeck[2]
    const comboVillageDeckWest = villageHouseDeck[3]

    //Bench and Planter Along Path

    const comboVillagePathDecorationsAlongPathDeck = DECK_Empty()

    const decoVillagePathBench01 = BuildableCard("village_bench_01", 10)

    const decoVillagePathPlanter01 = BuildableCard("village_planter_01", 5)
    const decoVillagePathPlanter02 = BuildableCard("village_planter_02", 5)
    const decoVillagePathPlanter03 = BuildableCard("village_planter_03", 5)
    const decoVillagePathPlanter04 = BuildableCard("village_planter_04", 5)

    DECK_PutOnBottomOf(decoVillagePathBench01, comboVillagePathDecorationsAlongPathDeck)

    DECK_PutOnBottomOf(decoVillagePathPlanter01, comboVillagePathDecorationsAlongPathDeck)
    DECK_PutOnBottomOf(decoVillagePathPlanter02, comboVillagePathDecorationsAlongPathDeck)
    DECK_PutOnBottomOf(decoVillagePathPlanter03, comboVillagePathDecorationsAlongPathDeck)
    DECK_PutOnBottomOf(decoVillagePathPlanter04, comboVillagePathDecorationsAlongPathDeck)

    _DeckShuffleVillager(comboVillagePathDecorationsAlongPathDeck)

    const villageAlongPathDecorationCenter = DECK_DrawFromTop(comboVillagePathDecorationsAlongPathDeck, _RandomIntFromIntervalVillager(1, 6))

    const villageAlongPathDecorationNorth = DECK_DrawFromTop(comboVillagePathDecorationsAlongPathDeck, _RandomIntFromIntervalVillager(1, 6))
    const villageAlongPathDecorationEast = DECK_DrawFromTop(comboVillagePathDecorationsAlongPathDeck, _RandomIntFromIntervalVillager(1, 6))
    const villageAlongPathDecorationSouth = DECK_DrawFromTop(comboVillagePathDecorationsAlongPathDeck, _RandomIntFromIntervalVillager(1, 6))
    const villageAlongPathDecorationWest = DECK_DrawFromTop(comboVillagePathDecorationsAlongPathDeck, _RandomIntFromIntervalVillager(1, 6))

    const villageAlongPathDecorationNorthEast = DECK_DrawFromTop(comboVillagePathDecorationsAlongPathDeck, _RandomIntFromIntervalVillager(1, 6))
    const villageAlongPathDecorationSouthWest = DECK_DrawFromTop(comboVillagePathDecorationsAlongPathDeck, _RandomIntFromIntervalVillager(1, 6))

    //Arches over Path
    const comboVillagePathDecorationsOverPathDeck = DECK_Empty()

    const decoVillagePathArch01 = BuildableCard("village_arch_01", 35)

    DECK_PutOnBottomOf(decoVillagePathArch01, comboVillagePathDecorationsOverPathDeck)

    const villageOverPathDecorationCenter = DECK_DrawFromTop(comboVillagePathDecorationsOverPathDeck, _RandomIntFromIntervalVillager(1, 6))

    const villageOverPathDecorationNorth = DECK_DrawFromTop(comboVillagePathDecorationsOverPathDeck, _RandomIntFromIntervalVillager(1, 6))
    const villageOverPathDecorationEast = DECK_DrawFromTop(comboVillagePathDecorationsOverPathDeck, _RandomIntFromIntervalVillager(1, 6))
    const villageOverPathDecorationSouth = DECK_DrawFromTop(comboVillagePathDecorationsOverPathDeck, _RandomIntFromIntervalVillager(1, 6))
    const villageOverPathDecorationWest = DECK_DrawFromTop(comboVillagePathDecorationsOverPathDeck, _RandomIntFromIntervalVillager(1, 6))

    const villageOverPathDecorationNorthEast = DECK_DrawFromTop(comboVillagePathDecorationsOverPathDeck, _RandomIntFromIntervalVillager(1, 6))
    const villageOverPathDecorationSouthWest = DECK_DrawFromTop(comboVillagePathDecorationsOverPathDeck, _RandomIntFromIntervalVillager(1, 6))

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    const villageRing1Fountain = BuildableCard("centerFountain")
    DECK_MultiplyByMultipleRules(villageRing1Fountain, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneFilterCard("villageRing1")])
    DECK_PutOnBottomOf(villageRing1Fountain, villageDeck)

    //North Houses
    DECK_MultiplyByMultipleRules(comboVillageDeckNorth, [PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard("example_build_from_district_path"), DistrictCard("district1")])
    DECK_PutOnBottomOf(comboVillageDeckNorth, villageDeck)

    //East Houses
    DECK_MultiplyByMultipleRules(comboVillageDeckEast, [PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard("example_build_from_district_path"), DistrictCard("district2")])
    DECK_PutOnBottomOf(comboVillageDeckEast, villageDeck)

    //South Houses
    DECK_MultiplyByMultipleRules(comboVillageDeckSouth, [PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard("example_build_from_district_path"), DistrictCard("district3")])
    DECK_PutOnBottomOf(comboVillageDeckSouth, villageDeck)

    //West Houses
    DECK_MultiplyByMultipleRules(comboVillageDeckWest, [PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard("example_build_from_district_path"), DistrictCard("district4")])
    DECK_PutOnBottomOf(comboVillageDeckWest, villageDeck)

    // Benches and Planters Along Path
    DECK_MultiplyByMultipleRules(villageAlongPathDecorationCenter, [PlacementPreferenceCard("villageAlongPath"), ZoneFilterCard("villageRing1")])
    DECK_PutOnBottomOf(villageAlongPathDecorationCenter, villageDeck)

    DECK_MultiplyByMultipleRules(villageAlongPathDecorationCenter, [PlacementPreferenceCard("villageAlongPath"), ZoneFilterCard("villageCageZone")])
    DECK_PutOnBottomOf(villageAlongPathDecorationCenter, villageDeck)

    DECK_MultiplyByMultipleRules(villageAlongPathDecorationNorth, [PlacementPreferenceCard("villageAlongPath"), DistrictCard("district1")])
    DECK_PutOnBottomOf(villageAlongPathDecorationNorth, villageDeck)

    DECK_MultiplyByMultipleRules(villageAlongPathDecorationEast, [PlacementPreferenceCard("villageAlongPath"), DistrictCard("district2")])
    DECK_PutOnBottomOf(villageAlongPathDecorationEast, villageDeck)

    DECK_MultiplyByMultipleRules(villageAlongPathDecorationSouth, [PlacementPreferenceCard("villageAlongPath"), DistrictCard("district3")])
    DECK_PutOnBottomOf(villageAlongPathDecorationSouth, villageDeck)

    DECK_MultiplyByMultipleRules(villageAlongPathDecorationWest, [PlacementPreferenceCard("villageAlongPath"), DistrictCard("district4")])
    DECK_PutOnBottomOf(villageAlongPathDecorationWest, villageDeck)

    DECK_MultiplyByMultipleRules(villageAlongPathDecorationNorthEast, [PlacementPreferenceCard("villageAlongPath"), DistrictCard("districtNorthEast")])
    DECK_PutOnBottomOf(villageAlongPathDecorationNorthEast, villageDeck)

    DECK_MultiplyByMultipleRules(villageAlongPathDecorationSouthWest, [PlacementPreferenceCard("villageAlongPath"), DistrictCard("districtSouthWest")])
    DECK_PutOnBottomOf(villageAlongPathDecorationSouthWest, villageDeck)

    //Arches Over Path
    DECK_MultiplyByMultipleRules(villageOverPathDecorationCenter, [PlacementPreferenceCard("villageAcrossPath"), ZoneFilterCard("villageRing1")])
    DECK_PutOnBottomOf(villageOverPathDecorationCenter, villageDeck)

    DECK_MultiplyByMultipleRules(villageAlongPathDecorationCenter, [PlacementPreferenceCard("villageAcrossPath"), ZoneFilterCard("villageCageZone")])
    DECK_PutOnBottomOf(villageAlongPathDecorationCenter, villageDeck)

    DECK_MultiplyByMultipleRules(villageOverPathDecorationNorth, [PlacementPreferenceCard("villageAcrossPath"), DistrictCard("district1")])
    DECK_PutOnBottomOf(villageOverPathDecorationNorth, villageDeck)

    DECK_MultiplyByMultipleRules(villageOverPathDecorationEast, [PlacementPreferenceCard("villageAcrossPath"), DistrictCard("district2")])
    DECK_PutOnBottomOf(villageOverPathDecorationEast, villageDeck)

    DECK_MultiplyByMultipleRules(villageOverPathDecorationSouth, [PlacementPreferenceCard("villageAcrossPath"), DistrictCard("district3")])
    DECK_PutOnBottomOf(villageOverPathDecorationSouth, villageDeck)

    DECK_MultiplyByMultipleRules(villageOverPathDecorationWest, [PlacementPreferenceCard("villageAcrossPath"), DistrictCard("district4")])
    DECK_PutOnBottomOf(villageOverPathDecorationWest, villageDeck)

    DECK_MultiplyByMultipleRules(villageOverPathDecorationNorthEast, [PlacementPreferenceCard("villageAcrossPath"), DistrictCard("districtNorthEast")])
    DECK_PutOnBottomOf(villageOverPathDecorationNorthEast, villageDeck)

    DECK_MultiplyByMultipleRules(villageOverPathDecorationSouthWest, [PlacementPreferenceCard("villageAcrossPath"), DistrictCard("districtSouthWest")])
    DECK_PutOnBottomOf(villageOverPathDecorationSouthWest, villageDeck)

    DECK_PutOnTopOf(EntityClearingCard("clearPiglinInvisibleSpawners"), villageDeck)
    DECK_PutOnTopOf(EntityClearingCard("clearPiglins"), villageDeck)

    const onboardingGenericMarker = BuildableCard("onboardingGenericMarker", 1)
    DECK_MultiplyByMultipleRules(onboardingGenericMarker, [ZoneFilterCard("villageCageZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    DECK_PutOnBottomOf(onboardingGenericMarker, villageDeck)

    return villageDeck
}
