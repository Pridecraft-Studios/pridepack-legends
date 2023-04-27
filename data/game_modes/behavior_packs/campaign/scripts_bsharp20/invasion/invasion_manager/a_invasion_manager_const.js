const GLOBAL_RESTRICTION = "globalRestriction"
const ANY_GAP = -1
const ANY_CONCURRENT = -1
const NO_FUNCTION = null
const MAX_ACTION_GAP = 9999

const C_Build = (horde) => {
    return {
        eval: function() {
            return QUERY_GetEntitiesCount(GetFactionBases(horde)) < GetBaseNumberRestriction(horde) //keep building small bases if less than the maximum, not desired in this current iteration
        }
    }
}

const C_Upgrade = (horde) => {
    return {
        eval: function() {
            return QUERY_GetEntitiesCount(FILTER_ByVillageSize(GetFactionBases(horde), [BASE_SIZE_SMALL])) > 5 //keep upgrading if less than 6 small bases, a good fall back but I'm going to unhook for now.
        }
    }
}