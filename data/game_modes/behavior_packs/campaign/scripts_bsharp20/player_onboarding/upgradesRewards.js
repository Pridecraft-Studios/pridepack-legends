const upgradesRewards = {
    gatherIron: {
        tag: "unlock_gather_uncommon",
        resource: "iron",
        campaignReward: 25
    },
    gatherRedStone: {
        tag: "unlock_gather_redstone",
        resource: "redstone",
        campaignReward: 25
    },
    gatherDiamond: {
        tag: "unlock_gather_rare",
        resource: "diamond",
        campaignReward: 25
    },
    gatherCoal: {
        tag: "unlock_gather_coal",
        resource: "coal",
        campaignReward: 25
    }
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.GAME_MODE, (ruleValue) => {
    if (ruleValue.value === "campaign") {
        for (const upgrade in upgradesRewards) {
            const data = upgradesRewards[upgrade]
            LISTENFOR_BuildingComplete({
                snippet: "bc_upgrade_campaign",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                includeTags: [data.tag],
                payloadString: data.resource,
                payloadInt: data.campaignReward
            })
        }
    }
})

SNIPPET_BuildingComplete("bc_upgrade_campaign", (_buildingCompleteEG, payload) => {
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, payload.string, payload.int, false)
    Once()
})
