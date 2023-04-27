// This definition exists in a separate file so that DLC or challenge modes could inherit from it.
// When you are making a definition that must persist across many game modes / data packs, put it into a separate file that won't get stomped.
const campaignWorldGenDefinition = {
    base: null, //base definition is null, which means this definition will not inherit any filters. It is very likely you will need to make such filters in modify()
    modify: (filterManager) => {
        filterManager.AppendFilter(["center", "campaign"], 1)
        filterManager.AppendFilter(["wellOfFate", "campaign"], 1)
        filterManager.AppendFilter(["cluster", "campaign"], 1)
        filterManager.AppendFilter(["sub-cluster", "campaign"], GetSubclusterCount())
        filterManager.AppendFilter(["culture_required"], 1)
        filterManager.AppendFilter(["biome", "campaign", "set1"], 1)
        filterManager.AppendFilter(["biome", "skeleton_alliance"], 1)
        filterManager.AppendFilter(["biome", "campaign", "set2"], 1)
        filterManager.AppendFilter(["villageBaseSlot"], 1)
        filterManager.AppendFilter(["act1CampsSlot"], 1)
        filterManager.AppendFilter(["mob_alliance_factions"], 1)
        filterManager.AppendFilter(["mobAllianceBaseSlot"], 1)
        filterManager.AppendFilter(["faction_required"], 1)
        filterManager.AppendFilter(["poi_deck"], 1)
        filterManager.AppendFilter(["poi_tower_01"], RandomNumWorldGen(2, 5))
        filterManager.AppendFilter(["poi_tower_02"], RandomNumWorldGen(2, 5))
        filterManager.AppendFilter(["poi_tower_04"], RandomNumWorldGen(2, 5))
        filterManager.AppendFilter(["invasionBaseSlot"], 1)
    }
}
