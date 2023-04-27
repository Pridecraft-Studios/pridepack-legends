const PIGLIN_CRATE_CAMPAIGN_DATA_PEACEFUL = {
    rewardTable: [
        //Do not delete comment, necessary for linter to not autoformat array
        {
            weight: 20,
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
            rewards: [{ resource: "xp_common", value: campaignSizeAmountsPiglinCrate.xpCommonHigh}]
        }
    ]
}

RegisterDifficultyConfig("piglin_crate_campaign_data_config", PIGLIN_CRATE_CAMPAIGN_DATA_PEACEFUL, GAME_DIFFICULTY.peaceful)