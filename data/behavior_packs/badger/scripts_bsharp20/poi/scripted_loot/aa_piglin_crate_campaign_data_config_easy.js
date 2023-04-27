const PIGLIN_CRATE_CAMPAIGN_DATA = {
    globalIndex: "gv_campaign_piglin_crate_index",
    // BBI-TODO: (bmceachern 1) this is unlocalized -- requires additional localization tech to pass through arguments
    messagePrefix: "piglin_crate_reward_",
    telemetryType: "piglin_crate",
    telemetrySubcategory: TELEMETRY_SUBCATEGORIES.PIGLIN_CRATE,
    chooseRandom: true,
    isWeighted: true,
    useAvailabilityRestrictions: false,
    rewardTable: [
        //Do not delete comment, necessary for linter to not autoformat array
        {
            weight: 30,
            rewards: [{ resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh}]
        },
        {
            weight: 10,
            rewards: [{ resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays}]
        },
        {
            weight: 10,
            rewards: [{ resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays}]
        }
    ],
    rewardTableUncapped: [
        //Do not delete comment, necessary for linter to not autoformat array
        {
            weight: 10,
            rewards: [{ resource: "xp_common", value: campaignSizeAmountsPiglinCrate.xpCommonHigh }]
        }
    ]
}

RegisterDifficultyConfig("piglin_crate_campaign_data_config", PIGLIN_CRATE_CAMPAIGN_DATA, GAME_DIFFICULTY.easy)