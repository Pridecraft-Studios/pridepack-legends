const upgradeSelectWeights = [
    {
        type: BASE_SIZE_SMALL,
        amount: 4
    },
    {
        type: BASE_SIZE_MEDIUM,
        amount: 1
    }
]
const upgradeSizePriorityList = [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM] // the first size is the most prioritized and the last one is least prioritized
const smallBaseUpgradeThreshold = 0.5

const _GetUpgradeSizeWeightedList = () => {
    const weightedArray = []
    for (const weight of upgradeSelectWeights) {
        for (let i = 0; i < weight.amount; i++) {
            weightedArray.push(weight.type)
        }
    }

    ShuffleArray(weightedArray)
    return weightedArray
}

const GenerateUpgradeBaseSource = (faction) => {
    let target = -1
    const smallestUpgradeSize = upgradeSizePriorityList[0] // the list should always be populated

    const allBases = FILTER_ByVillageSize(GetFactionBases(faction), upgradeSizePriorityList)
    const smallestBases = FILTER_ByVillageSize(allBases, [smallestUpgradeSize])
    const smallestBasesPercentage = QUERY_GetEntitiesCount(smallestBases) / QUERY_GetEntitiesCount(allBases)

    const baseSizeList = smallestBasesPercentage >= smallBaseUpgradeThreshold ? upgradeSizePriorityList : _GetUpgradeSizeWeightedList()
    for (const baseSize of baseSizeList) {
        const bases = FILTER_ByVillageSize(GetUnreservedFactionBases(faction), [baseSize])
        if (QUERY_GetEntitiesCount(bases) <= 0) {
            continue
        }

        target = RandomEntity(bases)
        break
    }

    return target
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_SetUpgradeBase = (faction, selectSource = true, targetVillageId = null) => {
    let target = -1
    if (targetVillageId !== null) {
        target = GetVillageEntityFromID(targetVillageId)

        if (!HasEntities(OPER_Intersection(GetUnreservedFactionBases(faction), target))) {
            OUTPUT_DebugLogInvasion(`Failed to plan an upgrade action: given target village ${targetVillageId} is already reserved!`)
            return false
        }
    } else {
        target = GenerateUpgradeBaseSource(faction)
    }

    if (!HasEntities(target)) {
        OUTPUT_DebugLogInvasion("All bases are upgraded to max or there are no bases left for faction " + faction)
        return false
    }

    ReserveVillage(target)
    OUTPUT_DebugLogInvasion("Prepared base " + QUERY_GetVillageIDFromEntity(target) + " for Upgrade intention for faction " + faction)

    const source = selectSource ? target : -1

    if (HasEntities(source)) {
        // Update map icons
        OUTPUT_MapSetKeyValue(source, MAP_KEY.INVASION_INTENTION, MAP_INVASION_INTENTION.UPGRADING)
    }

    OUTPUT_SetDelayedInvasionAction(source, FACTION_ACTION_UPGRADE_BASE, target, false, faction, 0)
    return true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_ResolveUpgradeBase = (faction, target) => {
    if (!HasEntities(target)) {
        OUTPUT_DebugLogInvasion(`Can't perform upgrade action for horde ${faction} because the target entity is invalid!`)
        return false
    }

    if (!IsVillageAlive(QUERY_GetVillageIDFromEntity(target))) {
        OUTPUT_DebugLogInvasion(`Can't perform upgrade action for horde ${faction} because the target village is dead!`)
        return false
    }
    //Reminder: Delayed nature handled in code of OUTPUT_DoInvasionUpgrade()

    const targetVillageId = QUERY_GetVillageIDFromEntity(target)
    const currentSize = QUERY_GetFactionSizeFromVillageID(targetVillageId)

    if (currentSize === BASE_SIZE_LARGE) {
        Logw(`Attempting to upgrade an already large-sized base ${targetVillageId} of faction ${faction}. Revise the process of selecting the source base for Upgrade DAI.`)
        return false
    }

    if (currentSize !== BASE_SIZE_VANGUARD && currentSize !== BASE_SIZE_SMALL && currentSize !== BASE_SIZE_MEDIUM) {
        Logw(`Attempting to upgrade a base ${targetVillageId} with undefined size ${currentSize} of faction ${faction}. Revise the process of selecting the source base for Upgrade DAI.`)
        return false
    }

    let newSize = BASE_SIZE_SMALL
    switch (currentSize) {
        case BASE_SIZE_VANGUARD:
            newSize = BASE_SIZE_SMALL
            break
        case BASE_SIZE_SMALL:
            newSize = BASE_SIZE_MEDIUM
            break
        case BASE_SIZE_MEDIUM:
            newSize = BASE_SIZE_LARGE
            break
    }

    OUTPUT_DebugLogInvasion(`The village ${targetVillageId} of size ${currentSize} from faction ${faction} is Upgrading to size ${newSize}!`)

    const factionData = _GetInvasionHelperFactionData(faction)
    OUTPUT_DoInvasionUpgrade(targetVillageId, factionData.villageArchetype, newSize, true, TEXTURE_KEYS.PRIMARY, GetStampTextureForFaction(faction, newSize), true)

    // Update map icons
    OUTPUT_MapSetKeyValue(target, MAP_KEY.INVASION_ACTIVE, MAP_INVASION_ACTIVE.IS_UPGRADING)

    HordeBasesConstructedCounter.Decrement(faction, currentSize)
    HordeBasesConstructedCounter.Increment(faction, newSize)
    HordeBasesUpgradedCounter.Increment(faction)
    HordeBasesConstructedAndUpgradedCounter.Increment(faction)

    return true
}

SNIPPET_CinematicFinished("cf_post_invasion_cine_upgrade_message", (payload) => { //Set a timer for after the cinematic, this way it will wait for what it was talking about to finish
    LISTENFOR_LocalTimer({
        snippet: "lt_post_invasion_cine_upgrade_message",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 18, //Delay this message and presentation action until POST invasion FMV VO has played and night time center notification. Please see "cf_post_invasion_cine" in campaign_acts.js
        payloadString: payload.string
    })
})

SNIPPET_LocalTimer("lt_post_invasion_cine_upgrade_message", (payload) => { //Plays a HUD message + first time VO (if not already played)
    OUTPUT_Announce(payload.string, [])
    if (QUERY_GetGlobalVariable("invasionFirstBaseUpgraded") === 0) {
        PlayPresentationActionToAll("invasion_base_upgrade")
        OUTPUT_SetGlobalVariable("invasionFirstBaseUpgraded", 1)
    }
})
