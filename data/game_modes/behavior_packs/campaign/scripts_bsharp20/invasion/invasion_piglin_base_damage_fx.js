const PiglinBaseDamageFXConfig = {
    daysActive: 1
}

const _InitPiglinBaseDamageFX = () => {
    for (const horde of FACTION_PIGLINS_ALL) {
        LISTENFOR_VillagePlanned({
            snippet: "vp_damage_fx_setup_fpb_listener",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: horde
        })
    }
}

const _MarkBaseDamaged = (villageId, isDamaged) => {
    const baseEntity = GetVillageEntityFromID(villageId)
    SetVillageVariable(villageId, GV_VILLAGE_DAMAGED, isDamaged ? 1 : 0)
    isDamaged ? OUTPUT_MapSetKeyValue(baseEntity, MAP_KEY.PLAYER_DAMAGED_BASE, MAP_PLAYER_DAMAGED_BASE.DAMAGED) : OUTPUT_MapRemoveKey(baseEntity, MAP_KEY.PLAYER_DAMAGED_BASE)
}

const _IsBaseMarkedDamaged = (villageId) => {
    return GetVillageVariable(villageId, GV_VILLAGE_DAMAGED) === 1
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignActsEnabled, (ruleValue) => {
    if (ruleValue.value) {
        _InitPiglinBaseDamageFX()
    }
})

SNIPPET_VillagePlanned("vp_damage_fx_setup_fpb_listener", (villageId, _payload) => {
    LISTENFOR_VillageFinishedBuilding({
        snippet: "vfb_damage_fx_setup_ed_listener",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        villageId: villageId
    })
})

SNIPPET_VillageFinishedBuilding("vfb_damage_fx_setup_ed_listener", (villageId, _payload) => {
    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_set_fx_on_destroyed",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["buildable"],
        despawned: false
    })
})

SNIPPET_NonPopCappedEntityDestroyed("ed_set_fx_on_destroyed", (entityGroup, payload) => {
    const villageId = payload.ownerVillageId

    // Countdown is reset on the village
    VillageDaysSincePlayerDamage.Reset(villageId)

    if (_IsBaseMarkedDamaged(villageId)) {
        // Village was already marked as damaged, the logic is in place
        return
    }

    // Set the state & the map
    _MarkBaseDamaged(villageId, true)

    // Set up the update to happen every X day on the time of day closest to the initiation
    LISTENFOR_TimeOfDay({
        snippet: "tod_damage_fx_activeness_check",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        timeOfDayNumber: GetClosestTimeOfDay(QUERY_GetTimeOfDay()),
        payloadInt: villageId
    })
})

SNIPPET_TimeOfDay("tod_damage_fx_activeness_check", (payload) => {
    const villageId = payload.int

    // Increment days
    const days = VillageDaysSincePlayerDamage.Increment(villageId)

    // Deactivate if the days cap was reached
    if (days === PiglinBaseDamageFXConfig.daysActive) {
        // Village could be dead at this point
        if (IsVillageAlive(villageId)) {
            _MarkBaseDamaged(villageId, false)
        }

        // Remove the listener
        Once()
    }
})
