SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignActsEnabled, (ruleValue) => {
    if (ruleValue.value) {
        LISTENFOR_CinematicEvent({
            snippet: "ce_open_chest",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "chest_open"
        })
    }
})

SNIPPET_CinematicEvent("ce_open_chest", () => {
    Logi("~~~~~ Open chest ~~~~~")
    const chest = QUERY_GetEntitiesWithTags(["village_treasure_chest_interact"])
    if (HasEntities(chest)) {
        Logi("~~~~~ Found chest ~~~~~ " + QUERY_GetEntitiesCount(chest))
        OUTPUT_AddVisualState(chest, "open_chest")
    }
})