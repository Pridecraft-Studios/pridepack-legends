/* eslint-disable @typescript-eslint/no-unused-vars */

const GetBaseNumberRestriction = (horde) => {
    const order = HordeEntry.GetOrderByName(horde)
    if (order === -1) {
        return 0
    }

    return InvasionActive() ? invasionManagerSharedRestrictions.baseNumberRestriction[horde][order][GetInvasionPhase()] : 0
}

const GetOutpostNumberRestriction = (horde) => {
    const order = HordeEntry.GetOrderByName(horde)
    if (order === -1) {
        return 0
    }

    return InvasionActive() ? invasionManagerSharedRestrictions.outpostNumberRestriction[horde][order][GetInvasionPhase()] : 0
}

const CheckBaseNumberRestriction = (horde) => {
    const existingBasesCount = QUERY_GetEntitiesCount(FILTER_ByVillageSize(GetFactionBases(horde), ALLOWED_INVASION_BASE_SIZES))
    const plannedBasesCount = CountAllPlannedDelayedInvasionActions(horde, FACTION_ACTION_BUILD_NEAR_BASE) + CountAllPlannedDelayedInvasionActions(horde, FACTION_ACTION_BUILD_FAR_BASE)
    const totalBaseCount = existingBasesCount + plannedBasesCount
    const maxAllowedBaseCount = GetBaseNumberRestriction(horde)

    OUTPUT_DebugLogInvasion(`[INV MANAGER] Horde ${horde}; Existing bases: ${existingBasesCount}; Planned bases: ${plannedBasesCount}; Total: ${totalBaseCount}`)
    if (totalBaseCount >= maxAllowedBaseCount) {
        OUTPUT_DebugLogInvasion(`[INV MANAGER] There are already too many (>=${maxAllowedBaseCount}) bases in the world, can't place more`)
        return false
    } else {
        return true
    }
}

const CheckOutpostNumberRestriction = (horde) => {
    const existingOutpostsCount = QUERY_GetEntitiesCount(FILTER_ByVillageSize(GetFactionBases(horde), [BASE_SIZE_OUTPOST]))
    const plannedOutpostsCount = CountAllPlannedDelayedInvasionActions(horde, FACTION_ACTION_BUILD_NEW_OUTPOST)
    const totalOutpostCount = existingOutpostsCount + plannedOutpostsCount
    const maxAllowedOutpostCount = GetOutpostNumberRestriction(horde)

    OUTPUT_DebugLogInvasion(`[INV MANAGER] Horde ${horde}; Existing outposts: ${existingOutpostsCount}; Planned outposts: ${plannedOutpostsCount}; Total: ${totalOutpostCount}`)
    if (totalOutpostCount >= maxAllowedOutpostCount) {
        OUTPUT_DebugLogInvasion(`[INV MANAGER] There are already too many (>=${maxAllowedOutpostCount}) outposts in the world, can't place more`)
        return false
    } else {
        return true
    }
}

const GetClaimedAreasNumberRestriction = (horde) => {
    const order = HordeEntry.GetOrderByName(horde)
    if (order === -1) {
        return 0
    }

    return InvasionActive() ? invasionManagerSharedRestrictions.claimedAreasNumberRestriction[horde][order][GetInvasionPhase()] : 0
}

const CheckClaimedAreaNumberRestriction = (horde) => {
    const existingClaimedAreasCount = QUERY_GetEntitiesCount(GetHordeClaimedAreas(horde))
    const plannedClaimedAreasCount = CountFactionPlannedDelayedInvasionActions(horde, FACTION_ACTION_CLAIM_AREA)
    const totalClaimedAreaCount = existingClaimedAreasCount + plannedClaimedAreasCount
    const maxAllowedClaimedAreaCount = GetClaimedAreasNumberRestriction(horde)

    OUTPUT_DebugLogInvasion(`[INV MANAGER] Horde ${horde}; Existing claimed areas: ${existingClaimedAreasCount}; Planned claimed areas: ${plannedClaimedAreasCount}; Total claimed areas: ${totalClaimedAreaCount}`)
    if (totalClaimedAreaCount >= maxAllowedClaimedAreaCount) {
        OUTPUT_DebugLogInvasion(`[INV MANAGER] There are already too many (>=${maxAllowedClaimedAreaCount}) claimed areas in the world, can't place more`)
        return false
    } else {
        return true
    }
}
