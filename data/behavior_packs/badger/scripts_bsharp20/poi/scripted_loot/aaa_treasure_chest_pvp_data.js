// TODO: (sallen) Move this to pvp data pack

/* eslint-disable @typescript-eslint/no-unused-vars */
const pvpSizeAmountsTreasureChest = {
    smallWood: [250, 250],
    mediumWood: [500, 500],
    largeWood: [750, 1000],
    smallStone: [125, 125],
    mediumStone: [250, 250],
    largeStone: [750, 1000],
    smallIron: [20, 20],
    mediumIron: [50, 50],
    largeIron: [75, 75],
    extremeIron: [125, 125],
    smallRedstone: [35, 25],
    mediumRedstone: [50, 50],
    largeRedstone: [125, 125],
    extremeRedstone: [250, 250],
    smallPrismarine: [75, 75],
    mediumPrismarine: [100, 100],
    largePrismarine: [125, 125],
    smallLapis: [25, 25],
    mediumLapis: [100, 100],
    largeLapis: [250, 250],
    extremeLapis: [275, 275],
    smallDiamond: [35, 25],
    mediumDiamond: [75, 75],
    largeDiamond: [125, 125],
    smallCoal: [35, 25],
    mediumCoal: [75, 75],
    largeCoal: [125, 125]
}

const TREASURE_CHEST_PVP_DATA = {
    globalIndex: "gv_pvp_treasure_chest_index",
    // BBI-TODO: (bmceachern 1) this is unlocalized -- requires additional localization tech to pass through arguments
    messagePrefix: "treasure_chest_pvp_rewards_",
    telemetryType: "poi_treasure_chest",
    telemetrySubcategory: TELEMETRY_SUBCATEGORIES.TREASURE_CHEST,
    chooseRandom: true,
    useAvailabilityRestrictions: false,
    rewardTable: [
        //Do not delete comment, necessary for linter to not autoformat array
        // Rows 1-4
        {
            //250 wood, 125 stone. enough for a single arrow tower
            weight: 10,
            rewards: [
                { resource: "wood", value: pvpSizeAmountsTreasureChest.smallWood },
                { resource: "stone", value: pvpSizeAmountsTreasureChest.smallStone }
            ]
        },
        {
            // 500 wood, 250 stone, 25 coal. enough for 2 arrow towers or 1 arrow tower and 1 shotgun tower
            weight: 10,
            rewards: [
                { resource: "wood", value: pvpSizeAmountsTreasureChest.mediumWood },
                { resource: "stone", value: pvpSizeAmountsTreasureChest.mediumStone },
                { resource: "coal", value: pvpSizeAmountsTreasureChest.smallCoal }
            ]
        },
        {
            //750+ stone, 75 iron. enough for a mason once you get the iron upgrade!
            weight: 10,
            rewards: [
                { resource: "iron", value: pvpSizeAmountsTreasureChest.largeIron },
                { resource: "stone", value: pvpSizeAmountsTreasureChest.largeStone }
            ]
        },
        {
            //750+ stone. enough for 6+ freeze traps
            weight: 10,
            rewards: [{ resource: "stone", value: pvpSizeAmountsTreasureChest.largeStone }]
        },
        // Rows 5-6
        {
            //25 lapis, 35 redstone. enough for a zombie spawner if you get extra lapis
            weight: 10,
            rewards: [
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis },
                { resource: "redstone", value: pvpSizeAmountsTreasureChest.smallRedstone }
            ]
        },
        {
            //25 lapis, 50 coal. enough for a creeper spawner and some creepers if you get extra lapis and the coal upgrade
            weight: 10,
            rewards: [
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis },
                { resource: "coal", value: pvpSizeAmountsTreasureChest.mediumCoal }
            ]
        },
        // Rows 7-8
        {
            //25 lapis, 35 diamond. enough for a skeleton spawner if you get extra lapis
            weight: 10,
            rewards: [
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis },
                { resource: "coal", value: pvpSizeAmountsTreasureChest.smallDiamond }
            ]
        },
        {
            //25 lapis, 20 iron. enough for secondary golem spanwers + a few golems
            weight: 10,
            rewards: [
                { resource: "iron", value: pvpSizeAmountsTreasureChest.smallIron },
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }
            ]
        },
        //Rows 9-11
        {
            //250 stone, 25 lapis. enough for a few stone golems
            weight: 10,
            rewards: [
                { resource: "stone", value: pvpSizeAmountsTreasureChest.mediumStone },
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }
            ]
        },
        {
            //250 wood, 25 lapis. enough for a few wood golems
            weight: 10,
            rewards: [
                { resource: "wood", value: pvpSizeAmountsTreasureChest.smallWood },
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }
            ]
        },
        //Rows 12-14
        {
            //25 lapis, 50 diamond. enough for a skeleton spawner if you get extra lapis
            weight: 10,
            rewards: [
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis },
                { resource: "coal", value: pvpSizeAmountsTreasureChest.mediumDiamond }
            ]
        },
        {
            //25 lapis, 50 redstone. enough for a zombie spawner if you get extra lapis
            weight: 10,
            rewards: [
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis },
                { resource: "redstone", value: pvpSizeAmountsTreasureChest.mediumRedstone }
            ]
        },
        {
            //25 lapis, 50 coal. enough for a creeper spawner and some creepers if you get extra lapis
            weight: 10,
            rewards: [
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis },
                { resource: "coal", value: pvpSizeAmountsTreasureChest.mediumCoal }
            ]
        },
        // Rows 15-17
        {
            //25 lapis, 20 iron. enough for secondary golem spanwers + a few golems
            weight: 10,
            rewards: [
                { resource: "iron", value: pvpSizeAmountsTreasureChest.smallIron },
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }
            ]
        },
        {
            //250 stone, 25 lapis. enough for a few stone golems
            weight: 10,
            rewards: [
                { resource: "stone", value: pvpSizeAmountsTreasureChest.mediumStone },
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }
            ]
        },
        {
            //250 wood, 25 lapis. enough for a few wood golems
            weight: 10,
            rewards: [
                { resource: "wood", value: pvpSizeAmountsTreasureChest.smallWood },
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }
            ]
        }
    ],
    rewardTableUncapped: [
        [
            {
                weight: 10,
                rewards: [{ resource: "xp_common", value: pvpSizeAmountsTreasureChest.smallPrismarine }]
            },
            {
                weight: 10,
                rewards: [{ resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }]
            },
            {
                weight: 10,
                rewards: [{ resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }]
            },
            {
                weight: 10,
                rewards: [{ resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }]
            },
            {
                weight: 10,
                rewards: [{ resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }]
            },
            {
                weight: 10,
                rewards: [{ resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }]
            },
            {
                weight: 10,
                rewards: [{ resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }]
            },
            {
                weight: 10,
                rewards: [{ resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }]
            },
            {
                weight: 10,
                rewards: [{ resource: "emerald", value: pvpSizeAmountsTreasureChest.largeLapis }]
            },
            {
                weight: 10,
                rewards: [{ resource: "emerald", value: pvpSizeAmountsTreasureChest.extremeLapis }]
            },
            {
                weight: 10,
                rewards: [
                    { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis },
                    { resource: "xp_common", value: pvpSizeAmountsTreasureChest.smallPrismarine }
                ]
            },
            {
                weight: 10,
                rewards: [
                    { resource: "emerald", value: pvpSizeAmountsTreasureChest.largeLapis },
                    { resource: "xp_common", value: pvpSizeAmountsTreasureChest.largePrismarine }
                ]
            }
        ]
    ]
}
