/* eslint-disable @typescript-eslint/no-unused-vars */

const IsHordeInput = (input) => {
    return FACTION_PIGLINS.includes(input) || input.includes("horde_arrived_")
}

const IsMobAllianceInput = (input) => {
    return FACTION_MOB_ALLIANCES.includes(input) || input.includes("mob_alliance_occupation_started_")
}

// The input might be the name itself or the order
const GetHordeName = (hordeInput) => {
    if (FACTION_PIGLINS.includes(hordeInput)) {
        return hordeInput
    }

    if (hordeInput.includes("horde_arrived_")) {
        const hordeOrder = parseInt(hordeInput.substring(hordeInput.lastIndexOf("_") + 1))
        return HordeEntry.GetByArrivedOrder(hordeOrder)
    }

    return null
}

const GetMobAllianceName = (mobAllianceInput) => {
    if (FACTION_MOB_ALLIANCES.includes(mobAllianceInput)) {
        return mobAllianceInput
    }

    if (mobAllianceInput.includes("mob_alliance_occupation_started_")) {
        const mobAllianceOrder = parseInt(mobAllianceInput.substring(mobAllianceInput.lastIndexOf("_") + 1))
        return MobAllianceOccupation.GetByArrivedOrder(mobAllianceOrder)
    }

    return null
}

const IsAnyHordeArrived = () => {
    for (const horde of HORDE_ANY) {
        if (HordeEntry.IsEntered(horde)){
            return true
        }
    }

    return false
}

// DEBUG
// eslint-disable-next-line @typescript-eslint/camelcase
const LFC_Logi = (msg) => {
    Logi(`[LFC] ${msg}`)
}
