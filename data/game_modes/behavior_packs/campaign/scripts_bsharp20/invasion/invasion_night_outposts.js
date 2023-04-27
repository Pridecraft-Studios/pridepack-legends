const outpostHordeDeckName = "outpost_horde_deck"

//Build outpost after selecting faction from deck
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BuildNightOutpost = () => {
    if (QUERY_GetNamedDeckCardCount(outpostHordeDeckName) <= 0) {
        ReplenishNightOutpostHordeDeck()

        if (QUERY_GetNamedDeckCardCount(outpostHordeDeckName) <= 0){
            // Nothing to replenish with, the deck is empty, all hordes are dead
            return
        }
    }

    OUTPUT_PlayHordeCardFromNamedDeck(outpostHordeDeckName)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SetupInvasionNightOutpostListeners = () => {
    LISTENFOR_HordeCardPlayed({
        snippet: "hcp_draw_horde_night_outpost",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        // eslint-disable-next-line no-undef
        deckName: outpostHordeDeckName
    })
}

const ReplenishNightOutpostHordeDeck = () => {
    OUTPUT_DebugLogInvasion("Generating horde deck for night outposts.")

    const hordeDeck = DECK_Empty()
    for (const faction of GetAliveFactions()) {
        OUTPUT_DebugLogInvasion(`Adding card for ${faction} faction to horde deck.`)
        DECK_PutOnBottomOf(HordeCard(faction), hordeDeck)
    }
    DECK_ShuffleGroup(hordeDeck, RANDOM_GROUP_INVASION)
    OUTPUT_SetNamedDeck(outpostHordeDeckName, hordeDeck)
}

SNIPPET_HordeCardPlayed("hcp_draw_horde_night_outpost", (faction) => {
    if (!SpawnDefensiveOutpostWithRules(faction, true)) {
        Logw(`Horde ${faction} couldn't build a Defensive Outpost. Placement failed!`)
        return false
    } else {
        OUTPUT_DebugLogInvasion(`Horde ${faction} is building a night Outpost!`)
    }
})
