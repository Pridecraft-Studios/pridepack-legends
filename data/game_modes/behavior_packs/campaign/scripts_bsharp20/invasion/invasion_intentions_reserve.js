const RESERVE_TAG = "invasion_reserved"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ReserveVillage = (villageEntity) => {
    OUTPUT_AddTag(villageEntity, RESERVE_TAG)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UnreserveVillage = (villageEntity) => {
    if (QUERY_HasTags(villageEntity, [RESERVE_TAG]) === false) {
        Logw("Attempting to unreserve a village that wasn't reserved! Village id: " + villageEntity)
        return
    }

    OUTPUT_RemoveTag(villageEntity, RESERVE_TAG)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UnreserveAllVillages = () => {
    OUTPUT_DebugLogInvasion("Unreserving all villages...")
    const allReservedVillages = FILTER_ByTagFilter(QUERY_GetAllAliveVillages(), [RESERVE_TAG], [])
    OUTPUT_RemoveTag(allReservedVillages, RESERVE_TAG)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetUnreservedFactionBases = (faction) => {
    return FILTER_InvasionParticipant(FILTER_ByTagFilter(FILTER_ByVillageSize(GetFactionBases(faction), ALLOWED_INVASION_BASE_SIZES), [], [RESERVE_TAG]), false)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetUnreservedBasesAll = () => {
    return FILTER_InvasionParticipant(FILTER_ByTagFilter(FILTER_ByVillageSize(GetAllInvasionBases(), ALLOWED_INVASION_BASE_SIZES), [], [RESERVE_TAG]), false)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetReservedFactionBases = (faction) => {
    return FILTER_ByVillageSize(OPER_Union(FILTER_InvasionParticipant(GetFactionBases(faction), true), FILTER_ByTagFilter(GetFactionBases(faction), [RESERVE_TAG], [])), ALLOWED_INVASION_BASE_SIZES)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetUnreservedFriendlyVillages = () => {
    return FILTER_InvasionParticipant(FILTER_ByTagFilter(GetAllFriendlyVillages(), [], [RESERVE_TAG, TAG_INACTIVE_VILLAGE]), false)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetUnreservedMobAllianceVillages = () => {
    return FILTER_InvasionParticipant(FILTER_ByTagFilter(GetAllMobAllianceVillages(), [TAG_MOB_ALLIANCE_ALLIED], [RESERVE_TAG, TAG_INACTIVE_VILLAGE]), false)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetUnreservedTargetsAll = () => {
    const villagers = GetUnreservedFriendlyVillages()
    const mobAlliances = GetUnreservedMobAllianceVillages()
    return OPER_Union(villagers, mobAlliances)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetReservedFriendlyVillages = () => {
    return OPER_Union(FILTER_InvasionParticipant(GetAllFriendlyVillages(), true), FILTER_ByTagFilter(GetAllFriendlyVillages(), [RESERVE_TAG, TAG_INACTIVE_VILLAGE], []))
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetUnreservedAll = () => {
    return FILTER_InvasionParticipant(FILTER_ByTagFilter(QUERY_GetAllAliveVillages(), [], [RESERVE_TAG]), false)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetOccupiedFriendlyVillages = () => {
    return FILTER_InvasionParticipant(FILTER_ByTagFilter(GetAllFriendlyVillages(), [TAG_INACTIVE_VILLAGE], []), true)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetOccupiedMobAllianceVillages = () => {
    return FILTER_InvasionParticipant(FILTER_ByTagFilter(GetAllMobAllianceVillages(), [TAG_INACTIVE_VILLAGE], []), true)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetOccupiedAll = () => {
    return OPER_Union(GetOccupiedFriendlyVillages(), GetOccupiedMobAllianceVillages())
}
