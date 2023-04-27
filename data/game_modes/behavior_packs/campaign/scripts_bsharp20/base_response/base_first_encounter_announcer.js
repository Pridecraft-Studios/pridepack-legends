SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignBasesEnabled, (rule) => {
    if (rule.value) {
        LISTENFOR_VillagePlanned({
            snippet: "vp_piglin_base_setup_first_encounter",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })
    }
})

SNIPPET_VillagePlanned("vp_piglin_base_setup_first_encounter", (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    if (!IsMediumOrGreater(size)) {
        return
    }

    if (QUERY_GetFactionNameFromVillageID(villageId) === FACTION_NAME_DBB) {
        return
    }

    Logi("@@@ vp_piglin_base_setup_first_encounter @@@")

    const boundsTv = OUTPUT_CreateVillageTriggerVolume(villageId, 80, [TAG_PLAYER], [], ALLIANCE_ENEMY)
    OUTPUT_AddTag(boundsTv, "first_base_encounter_trigger_flag")

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_player_entered_first_encounter_volume",
        ownerVillageId: villageId,
        triggerEntity: boundsTv
    })
})

SNIPPET_SpatialPartitionEntered("spe_player_entered_first_encounter_volume", (triggerVolume) => {
    Logi("@@@ spe_player_entered_first_encounter_volume @@@")
    const villageId = QUERY_GetVillageIDFromEntity(triggerVolume)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const faction = QUERY_GetFactionNameFromVillageID(villageId)
    const difficulty = QUERY_GameDifficulty()

    //Don't play these messages on normal or hard, players opting in to harder difficulties don't need a warning.
    if (difficulty === "Normal" || difficulty === "Hard") {
        return
    }

    if (!IsPlayerStrongEnoughForThisBase(faction, baseSize)) {
        const nearbyPlayers = FILTER_ByDistance(GetAllPlayers(), triggerVolume, 400)
        if (HasEntities(nearbyPlayers)) {
            ForEachEntities(nearbyPlayers, (player) => {
                if (DoPlayerBaseActionOnceEverySeconds("first_encounter_announcement", player, villageId, 30)) {
                    OUTPUT_AnnouncePlayer("piglin_base_nonsmall_first_encounter", [], player)
                }
            })
        } else {
            Loge("No players found near the base that was just encountered! Announcing to all.")
            OUTPUT_Announce("piglin_base_nonsmall_first_encounter", [])
        }
    }
})
