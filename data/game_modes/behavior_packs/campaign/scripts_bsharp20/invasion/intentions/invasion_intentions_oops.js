const oopsFactionMessages = [
    {
        faction: FACTION_NAME_ATTACK,
        message: "invasion_oops_attack"
    },
    {
        faction: FACTION_NAME_DEFEND,
        message: "invasion_oops_defend"
    },
    {
        faction: FACTION_NAME_OBSTACLE,
        message: "invasion_oops_obstacle"
    }
]

const _GetFactionOopsMessage = (faction) => {
    for (const factionMessageInfo of oopsFactionMessages) {
        if (factionMessageInfo.faction === faction) {
            return factionMessageInfo.message
        }
    }

    Loge("Faction " + faction + " doesn't exist or it is not listed in the dictionary in invasion_intentions_oops.js")
}

//Revise once more complex behaviour is required
const GenerateOopsSource = (faction) => {
    const availableBases = GetUnreservedFactionBases(faction)

    let source = -1
    if (QUERY_GetEntitiesCount(availableBases) > 0) {
        source = RandomEntity(availableBases)
    }

    return source
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_SetOops = (faction, hidden, selectSource = true, targetVillageId = null) => {
    let target = -1
    if (targetVillageId !== null) {
        target = GetVillageEntityFromID(targetVillageId)

        if (!HasEntities(OPER_Intersection(GetUnreservedFactionBases(faction), target))) {
            OUTPUT_DebugLogInvasion(`Failed to plan an oops action: given target village ${targetVillageId} is already reserved!`)
            return false
        }
    } else {
        target = GenerateOopsSource(faction)
    }

    if (!HasEntities(target)) {
        OUTPUT_DebugLogInvasion(`Failed to plan an oops action: given target village ${targetVillageId} is an invalid entity!`)
        return false
    }

    ReserveVillage(target)
    OUTPUT_DebugLogInvasion("Prepared oops target " + QUERY_GetVillageIDFromEntity(target) + " for Oops intention for faction " + faction)

    const source = selectSource ? target : -1

    if (HasEntities(source) && !hidden) {
        // Update map icons
        OUTPUT_MapSetKeyValue(source, MAP_KEY.INVASION_INTENTION, MAP_INVASION_INTENTION.BUILDING)
    }

    OUTPUT_SetDelayedInvasionAction(source, FACTION_ACTION_OOPS, target, hidden, faction, 0)
    return true
}

// set hidden boolean?
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_ResolveOops = (faction, target, hidden) => {
    if (!HasEntities(target)) {
        OUTPUT_DebugLogInvasion(`Can't perform oops action for faction ${faction} because target entity is invalid!`)
        return false
    }

    if (!IsVillageAlive(QUERY_GetVillageIDFromEntity(target))) {
        OUTPUT_DebugLogInvasion(`Can't perform oops action for faction ${faction} because target entity is not alive!`)
        return false
    }

    //Reminder: Delayed nature handled in code of OUTPUT_DoInvasionOops()
    const targetVillageId = QUERY_GetVillageIDFromEntity(target)

    OUTPUT_DebugLogInvasion(`The village ${targetVillageId} from faction ${faction} is Oopsing!`)
    OUTPUT_DoInvasionOops(targetVillageId, hidden)

    // Update map icons
    if (!hidden){
        // Update map icons
        OUTPUT_MapSetKeyValue(target, MAP_KEY.INVASION_ACTIVE, MAP_INVASION_ACTIVE.IS_BUILDING)
    }

    return true
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.invasionEnabled, (ruleValue) => {
    if (ruleValue) {
        LISTENFOR_InvasionOopsApply({
            snippet: "ioa_do_oops",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })
    }
})

SNIPPET_InvasionOopsApply("ioa_do_oops", (villageId, _payload) => {
    const factionName = QUERY_GetFactionNameFromVillageID(villageId)
    OUTPUT_Announce(_GetFactionOopsMessage(factionName), [])
    const buildings = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [TAG_BUILDABLE], ["mob", "portal_piglin", "poi_loot_piglin_crate", "pigCrystal"])
    const toDestroy = Math.round(RandomFloat() * QUERY_GetEntitiesCount(buildings))
    OUTPUT_DebugLogInvasion(`Oops action by faction ${factionName}: Destroying ${toDestroy}`)
    OUTPUT_DamageEntitiesByPercentage(FILTER_RandomCount(buildings, toDestroy), RandomIntFromInterval(50, 100))

    // Update map icons
    const villageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_MapRemoveKey(villageEntity, MAP_KEY.INVASION_ACTIVE)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.INVASION_RECAP, MAP_INVASION_RECAP.OOPSED)
})
