/////////////////////////////////////////////////CAMPAIGN//////////////////////////////////////////////////////////////////////
// This previously used the chestRewardMode game rule
SNIPPET_InheritsFromGameMode("campaign", () => {
    LISTENFOR_PlayerInteracted({
        snippet: "pi_piglin_crate_interacted_campaign",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["piglin_crate_interact"]
    })
    OUTPUT_SetGlobalVariable(PIGLIN_CRATE_CAMPAIGN_DATA.globalIndex, RandomIntFromInterval(0, PIGLIN_CRATE_CAMPAIGN_DATA.rewardTable.length))
})

//checks campaign piglin crate interaction and rewards items
SNIPPET_PlayerInteracted("pi_piglin_crate_interacted_campaign", (playerEntity, interactedEntity, _payload) => {
    const playerHasPiglinKey = QUERY_GetResource(playerEntity, "piglin_key") > 0
    if (playerHasPiglinKey || IsCurrentAct(ACTS.EPILOGUE)) {
        GrantRewardFromLootTable(playerEntity, interactedEntity, LOOT_TYPE.piglinCrate)
        OUTPUT_SetOverrideForCompassMaxRange(interactedEntity, 0)
        if (playerHasPiglinKey) {
            OUTPUT_AddOrRemoveResource(playerEntity, "piglin_key", -1, false)
        }
        if (DoOnce("gv_piglin_crate_journal_unlocked")) {
            UnlockJournalEntry(JOURNAL_UNLOCKS.PIGLIN_CRATE)
        }
    } else {
        DelayedAnnounceTimed("piglin_crate_keyRequired", 1)
    }
})
