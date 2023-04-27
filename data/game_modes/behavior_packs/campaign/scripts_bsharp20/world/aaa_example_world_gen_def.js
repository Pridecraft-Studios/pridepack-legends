// An example definition
const showcaseWorldGenDefinition = {
    base: campaignWorldGenDefinition, // if base is not null, then inherit from that definition
    modify: (filterManager) => {
        // Modify function runs after the inherited definition has been constructed, i.e. after inherited definition's modify() function ran
        // Modify function can be used for either constructing a filter collection or altering a base filter collection
        // NOTE: this is manipulating FILTERS and not CARDS directly. Filters will get translated into cards after calling SetWorldGenDefinition()

        // RemoveFilter() removes the filter entire out of collection. Make sure to only have 1 filter present at a time (count can vary)
        filterManager.RemoveFilter(["poi_tower_01"])
        filterManager.RemoveFilter(["poi_tower_02"])
        filterManager.RemoveFilter(["poi_tower_04"])
        filterManager.RemoveFilter(["center", "campaign"])

        // AppendFilter() adds the new filter to the very end of the collection
        filterManager.AppendFilter(["dlc", "challenge2"], 1)

        // PrependFilter() adds the new filter to the very beginning of the collection
        filterManager.PrependFilter(["center", "campaign"], 1)

        // ReplaceFilter() would search for the given filter and replace it with another filter
        filterManager.ReplaceFilter(["wellOfFate", "campaign"], ["dlc", "wellOfFate"], 1)
        filterManager.ReplaceFilter(["center", "campaign"], ["dlc", "center"], 1)

        // AddFilterAfterTarget() would insert a new filter after another given filter. Useful for preserving the dependencies
        filterManager.AddFilterAfterTarget(["poi_deck"], ["poi_tower_01"], RandomNumWorldGen(2, 5))
        filterManager.AddFilterAfterTarget(["poi_deck"], ["poi_tower_04"], RandomNumWorldGen(2, 5))

        // AddFilterBeforeTarget() would insert a new filter before another given filter. Useful when you want to localize a collection change
        filterManager.AddFilterBeforeTarget(["poi_tower_04"], ["poi_tower_02"], RandomNumWorldGen(2, 5))

        // FilterExists() returns true if a filter exists in the collection. Useful when you need any conditional logic for adding/removing filters
        if (filterManager.FilterExists("poi_tower_01")) {
            filterManager.AddFilterAfterTarget(["biome", "campaign", "set2"], ["forest"], RandomNumWorldGen(2, 5))
        }

        // GetFilterCount() returns the count size of the filter
        if (filterManager.GetFilterCount(["poi_tower_02"]) > 2) {
            filterManager.AddFilterAfterTarget(["poi_tower_02"], ["wetlands"], RandomNumWorldGen(2, 5))
        }

        // ChangeFilterCount() would alter the count of the given filter
        filterManager.ChangeFilterCount(["poi_tower_01"], 10)
    }
}

// Note that we can have an indifnite chain of inheritance. Here modify() would run after the modify() of showcaseWorldGenDefinition
// And modify() of showcaseWorldGenDefinition runs after modify() of campaignWorldGenDefinition which is the original deck construction
const inheritedShowcaseWorldGenDefinition = {
    base: showcaseWorldGenDefinition,
    modify: (filterManager) => {
        filterManager.AddFilterAfterTarget(["biome", "campaign", "set2"], ["forest"], RandomNumWorldGen(2, 5))
        if (filterManager.FilterExists(["wetlands"]) && filterManager.FilterExists(["poi_tower_04"])) {
            filterManager.ChangeFilterCount(["poi_tower_04"], 10)
        }
    }
}
