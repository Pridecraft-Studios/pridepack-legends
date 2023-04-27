// ===== INVASION DEBUG UI ======
SNIPPET_RuleInitialized(GAME_RULE_NAMES.invasionEnabled, (ruleValue) => {
    if (ruleValue.value) {
        LISTENFOR_EntitySpawned({
            snippet: "es_invasion_ui",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: "invasion_ui"
        })
    }
})

SNIPPET_EntitySpawned("es_invasion_ui", (entity, _payload) => {
    //TODO: remove this when the Invasion 2.0 is ready
    //For now, remove icons because Invasion system is not active as a whole
    OUTPUT_DestroyEntities(entity)
    OUTPUT_SetIconOff(entity)
})
