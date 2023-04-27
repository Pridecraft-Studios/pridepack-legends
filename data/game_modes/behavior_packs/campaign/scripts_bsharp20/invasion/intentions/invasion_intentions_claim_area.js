const invasionIntentionClaimAreaVals = {
    VO: {
        claimAreaPlannedFirstTime: "invasion_claim_area_planned_1",
        claimAreaExecutedFirstTime: "invasion_claim_area_1"
    },
    globals: {
        hasClaimAreaBeenPlanned: "gv_hasClaimAreaBeenPlanned",
        hasClaimAreaBeenExecuted: "gv_hasClaimAreaBeenExecuted"
    }
}

const _GenerateClaimAreaSource = (faction) => {
    const availableBases = GetUnreservedFactionBases(faction)

    let source = -1
    if (QUERY_GetEntitiesCount(availableBases) > 0) {
        source = RandomEntity(availableBases)
    }

    return source
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_SetClaimArea = (faction, selectSource = true, useInvasionManagerRestrictions = true, sourceVillageId = null) => {
    // Check if exceeding the cap
    if (useInvasionManagerRestrictions && !CheckClaimedAreaNumberRestriction(faction)) {
        return false
    }

    let source = -1
    if (sourceVillageId !== null) {
        source = GetVillageEntityFromID(sourceVillageId)

        if (!HasEntities(source)) {
            OUTPUT_DebugLogInvasion(`Failed to plan a claimed area action: given source village ${sourceVillageId} is an invalid entity!`)
            return false
        }

        if (!HasEntities(OPER_Intersection(GetUnreservedFactionBases(faction), source))) {
            OUTPUT_DebugLogInvasion(`Failed to plan a claimed area action: given source village ${sourceVillageId} is already reserved!`)
            return false
        }
    } else if (selectSource) {
        source = _GenerateClaimAreaSource(faction)

        if (!HasEntities(source)) {
            return false
        }
    }

    if (HasEntities(source)) {
        ReserveVillage(source)

        // Update map icons
        OUTPUT_MapSetKeyValue(source, MAP_KEY.INVASION_INTENTION, MAP_INVASION_INTENTION.CLAIMING)

        OUTPUT_DebugLogInvasion("Prepared source " + QUERY_GetVillageIDFromEntity(source) + " for Claimed Area intention for faction " + faction)
    }

    if (DoOnce(invasionIntentionClaimAreaVals.globals.hasClaimAreaBeenPlanned)) {
        PlayPresentationActionToAll(invasionIntentionClaimAreaVals.VO.claimAreaPlannedFirstTime)
    }

    OUTPUT_SetDelayedInvasionAction(source, FACTION_ACTION_CLAIM_AREA, [], false, faction, 0)
    return true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_ResolveClaimArea = (faction) => {
    OUTPUT_DebugLogInvasion(`Trying to claim an area for ${faction}`)

    const claimedAreaDef = CLAIMED_AREAS_DEF[faction].INVASION.claimedAreaOnly
    if (RunInvasionClaimedAreaPlacementAndSpawn(faction, claimedAreaDef.radius, claimedAreaDef.numOutposts, false)) {
        if (DoOnce(invasionIntentionClaimAreaVals.globals.hasClaimAreaBeenExecuted)) {
            PlayPresentationActionToAll(invasionIntentionClaimAreaVals.VO.claimAreaExecutedFirstTime)
        }
        OUTPUT_DebugLogInvasion(`Successfully resolved claimed area for horde ${faction}`)
        return true
    } else {
        OUTPUT_DebugLogInvasion(`Failed to resolve claimed area for horde ${faction}`)
        return false
    }
}
