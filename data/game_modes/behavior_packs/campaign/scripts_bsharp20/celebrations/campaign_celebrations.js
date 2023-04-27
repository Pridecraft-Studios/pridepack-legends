// Common celebrations in campaign.

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignBasesEnabled, (rule) => {
    if (rule.value) {
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_celebration_piglin_portal",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: [TAG_PORTAL_PIGLIN],
            despawned: false
        })
    }
})

SNIPPET_NonPopCappedEntityDestroyed("ed_celebration_piglin_portal", (entity) => {
    Logi("@@@@ ed_celebration_piglin_portal @@@@ ")
    const villageFaction = QUERY_GetFactionNameFromEntity(entity)
    if (villageFaction !== FACTION_NAME_DBB) {
        const villageId = QUERY_GetVillageIDFromEntity(entity)
        const villageEntity = GetVillageEntityFromID(villageId)
        TriggerCelebration(villageEntity, CELEBRATION_NAMES.MOBS)
    }
})
