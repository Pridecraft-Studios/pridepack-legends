const baseLootVals = {
    library: "base_loot",
    globals: {
        lootIndex: "vv_base_loot_index"
    }
}

const _GetBaseLootDeckName = (horde, size) => {
    return `deck_base_loot_${horde}_${size}`
}

const _BaseLootCard = (variation, count) => {
    return DECK_MakeFromLibraryFilteredWithCopies(VARIATION_DECK_LIBRARY_NAME, [baseLootVals.library, variation], count)
}

const _RestockBaseLootDeck = (lootTables, deckName) => {
    let deck = DECK_Empty()
    for (const lootTable of lootTables) {
        const cards = _BaseLootCard(lootTable.name, lootTable.weight)
        deck = DECK_Stack(cards, deck)
    }
    DECK_Shuffle(deck)
    OUTPUT_SetNamedDeck(deckName, deck)
}

const CollectDynamicBaseLoot = (villageId) => {
    const horde = QUERY_GetFactionNameFromVillageID(villageId)
    const size = QUERY_GetFactionSizeFromVillageID(villageId)

    const lootTables = baseLootTables[horde][size]
    if (lootTables === undefined) {
        Logi(`Base from horde: ${horde} and size: ${size} does not support dynamic loot.`)
        return {}
    }

    const lootIdx = GetVillageVariable(villageId, baseLootVals.globals.lootIndex)
    if (lootIdx < 0) {
        Logv(`Loot not defined for piglin base vID: ${villageId}`)
        return {}
    }

    const lootTable = lootTables[lootIdx]

    Logi(`Rewarding loot for destroyed piglin base vID: ${villageId} horde: ${horde} size: ${size} using scripted loot table: ${lootTable.name}`)
    const collectedRewards = {}
    for (const resource of lootTable.loot) {
        LISTENFOR_LocalTimer({
            snippet: "lt_delayed_collectdynamicbaseloot_reward",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 5,
            payloadString: resource.name,
            payloadInt: resource.amount
        })
        collectedRewards[resource.name] = resource.amount
    }
    return collectedRewards
}

SNIPPET_LocalTimer("lt_delayed_collectdynamicbaseloot_reward", (payload) => { 
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, payload.string, payload.int, true)
})

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignBasesEnabled, (rule) => {
    if (rule.value) {
        for (const horde in baseLootTables) {
            LISTENFOR_VillagePlanned({
                snippet: "vp_base_dynamic_loot",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                factionName: horde
            })

            for (const size in baseLootTables[horde]) {
                const deckName = _GetBaseLootDeckName(horde, size)
                const lootTables = baseLootTables[horde][size]
                _RestockBaseLootDeck(lootTables, deckName)
            }
        }

        LISTENFOR_GenericCardPlayed({
            snippet: "gcp_base_loot_card",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cardCategory: baseLootVals.library
        })
    }
})

SNIPPET_VillagePlanned("vp_base_dynamic_loot", (villageId, _payload) => {
    const horde = QUERY_GetFactionNameFromVillageID(villageId)
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const lootTables = GetChild(baseLootTables, horde, size)
    if (lootTables === undefined) {
        Logi(`Base from horde: ${horde} and size: ${size} does not support dynamic loot.`)
        return
    }

    const deckName = _GetBaseLootDeckName(horde, size)

    if (QUERY_GetNamedDeckCardCount(deckName) === 0) {
        _RestockBaseLootDeck(lootTables, deckName)
    }

    OUTPUT_PlayGenericCardFromNamedDeck(deckName, villageId)
})

SNIPPET_GenericCardPlayed("gcp_base_loot_card", (villageId, cardValue, _payload) => {
    Logi(`Applying dynamic base loot ${cardValue} to vID: ${villageId}`)

    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const horde = QUERY_GetFactionNameFromVillageID(villageId)
    const lootTables = GetChild(baseLootTables, horde, size)

    const idx = lootTables.findIndex((element) => element.name === cardValue)
    if (idx === -1) {
        Loge("Variation could not be found - something went wrong.")
        return
    }

    SetVillageVariable(villageId, baseLootVals.globals.lootIndex, idx)
    const villageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.BASE_LOOT, cardValue)
})
