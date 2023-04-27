const invasionHordeDeckName = "invasion_horde_deck"

const _GetFactionIntentionDeckInfo = (factionName) => {
    const hordeIntentionDeckInfo = invasionDrawData.hordeDrawDeck
    for (const intentionInfo of hordeIntentionDeckInfo) {
        if (intentionInfo.factionName === factionName) {
            return intentionInfo
        }
    }
}

const IntentionCard = (faction, type, count) => {
    if (count !== undefined) {
        return DECK_MakeFromLibraryFilteredWithCopies("invasionCards", [faction, type], count)
    } else {
        return DECK_MakeFromLibraryFiltered("invasionCards", [faction, type])
    }
}

const GetFactionIntentionDeckCount = (faction) => {
    return QUERY_GetNamedDeckCardCount(_GetFactionIntentionDeckInfo(faction).deckName)
}

const HordeCard = (faction, count) => {
    if (count !== undefined) {
        return DECK_MakeFromLibraryFilteredWithCopies("hordeCards", faction, count)
    } else {
        return DECK_MakeFromLibraryFiltered("hordeCards", faction)
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetInvasionHordeDeckCount = () => {
    return QUERY_GetNamedDeckCardCount(invasionHordeDeckName)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ReplenishInvasionHordeDeck = () => {
    OUTPUT_DebugLogInvasion("Generating horde deck for invasion.")

    const hordeDeck = DECK_Empty()
    for (const faction of GetAliveFactions()) {
        if (!HordeEstablishment.IsEstablished(faction)){
            continue
        }

        const availableBases = QUERY_GetEntitiesCount(GetUnreservedFactionBases(faction))

        if (availableBases === 0) {
            OUTPUT_DebugLogInvasion(`No more available bases for ${faction} faction.`)
            continue
        }

        OUTPUT_DebugLogInvasion(`Adding card for ${faction} faction to horde deck.`)
        DECK_PutOnBottomOf(HordeCard(faction), hordeDeck)
    }
    DECK_ShuffleGroup(hordeDeck, RANDOM_GROUP_INVASION)
    OUTPUT_SetNamedDeck(invasionHordeDeckName, hordeDeck)
}

const GetHordeDeckFormation = (factionName, phase) => {
    const intentionInfo = _GetFactionIntentionDeckInfo(factionName)
    for (const formation of intentionInfo.phases[phase].formationByOrder) {
        // Returning the first one, no need for ordering of arrival anymore
        return formation.formation
    }

    Logi(`ATTENTION: RETURNING AN EMPTY ACTION POOL FOR ${factionName} amd phase ${phase}`)
    return []
}

const SetFactionDeckFromPhase = (factionName, phase) => {
    const intentionInfo = _GetFactionIntentionDeckInfo(factionName)
    const baseDeck = DECK_Empty()

    if (phase >= 0) {
        const finalFormationData = GetHordeDeckFormation(factionName, phase)
    
        for (const cardType of finalFormationData) {
            const intentions = IntentionCard(factionName, cardType.action, cardType.amount)
            DECK_PutOnBottomOf(intentions, baseDeck)
        }
        DECK_ShuffleGroup(baseDeck, RANDOM_GROUP_INVASION)
    }

    OUTPUT_DebugLogInvasion("Generating deck for " + factionName + "...")
    OUTPUT_DebugLogDeck(baseDeck, false)

    OUTPUT_SetNamedDeck(intentionInfo.deckName, baseDeck)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SetAllFactionDecksFromPhase = (phase) => {
    for (const faction of FACTION_PIGLINS) {
        SetFactionDeckFromPhase(faction, phase)
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PlayFactionIntentionDeck = (faction) => {
    if (GetFactionIntentionDeckCount(faction) <= 0) {
        OUTPUT_DebugLogInvasion("Deck for " + faction + " currently have no cards to play. Restocking!")
        SetFactionDeckFromPhase(faction, GetInvasionPhase())
    }

    let forcedAction = GetNextEnforcedActionGlobal()
    if (forcedAction === null) {
        forcedAction = GetNextEnforcedActionHorde(faction)
    }

    if (forcedAction !== null && SetupForcedDAIForFaction(forcedAction, faction)) {
        OUTPUT_DebugLogInvasion(`[INV MANAGER] Setting forced delayed invasion action ${forcedAction}`)
        RecordForcedAction(faction, forcedAction)
        _ProgressIntentionsDraws(faction)
    } else {
        OUTPUT_PlayInvasionCardFromNamedDeck(_GetFactionIntentionDeckInfo(faction).deckName)
    }
}
