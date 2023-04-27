/* This is general file for Day Zero Patches

If your change requires a patch in order to support older save games, you can use SNIPPET_ProcessPatch which all run on bootstrap
(DO NOT unindent these examples)

    SNIPPET_ProcessPatch("pgv_day_zero_example", 1, () => {
    })

All snippets with version 1 will run before all snippet with version 2, ie. 
    SNIPPET_ProcessPatch("pgv_day_zero_example1", 1, () => {
    })
    SNIPPET_ProcessPatch("pgv_day_zero_example2", 2, () => {
    })
    SNIPPET_ProcessPatch("pgv_day_zero_example3", 1, () => {
    })

run order will be pgv_day_zero_example1, pgv_day_zero_example3, pgv_day_zero_example2

For now, we will use version 1 to refer to all day zero patches and will increment the number for subsequent patches. 
If we run into an issue where we need a certain day 0 patch to run before another one, we can figure that out then, but
as of pgv_removeVillagerVillageBuildingCompletedListener, there are no dependencies between patches.
*/

SNIPPET_ProcessPatch("pgv_removeThwarting", 1, () => {
    OUTPUT_RemoveListeners("vd_thwart_intentions")
    OUTPUT_RemoveListeners("vd_cancel_horde_intentions")
    OUTPUT_RemoveListeners("lt_delayed_thwarting_vo")
})

SNIPPET_ProcessPatch("pgv_removeVillageUpgradeCinematics", 1, () => {
    OUTPUT_RemoveListeners("bc_upgrade_structures_players")
    OUTPUT_RemoveListeners("spe_upgrade_built_cin")
})

SNIPPET_ProcessPatch("pgv_removeDbbListeners", 1, () => {
    OUTPUT_RemoveListeners("lt_nether_spreaders_camp_destroyed")
    OUTPUT_RemoveListeners("vd_act1_first_base_destroyed")
})

SNIPPET_ProcessPatch("pgv_removeAct1Listeners", 1, () => {
    OUTPUT_RemoveListeners("pe_camp_destroyed_and_left")
})

SNIPPET_ProcessPatch("pgv_updateAct1Telemetry", 1, () => {
    const outposts = GetAliveVillages(FACTION_PIGLINS, [BASE_SIZE_ACT_1_A, BASE_SIZE_ACT_1_B, BASE_SIZE_ACT_1_C])

    if (HasEntities(outposts)) {
        ForEachEntities(outposts, (outpost) => {
            const villageId = QUERY_GetVillageIDFromEntity(outpost)
            LISTENFOR_HealthChanged({
                snippet: "hc_outpost_damaged",
                ownerVillageId: villageId,
                villageId: villageId,
                direction: HEALTH_DIRECTION.DAMAGE
            })
        })
    }
})

SNIPPET_ProcessPatch("pgv_act1Listeners", 1, () => {
    OUTPUT_RemoveListeners("bss_three_camps_barracks_piglins")
    OUTPUT_RemoveListeners("cf_first_village_piglins_fear")
    OUTPUT_RemoveListeners("lt_tell_players_outside_village_attack_has_ended")
    OUTPUT_RemoveListeners("ee_repair_fountain_onboarding")
    OUTPUT_RemoveListeners("lt_add_first_vo")
    OUTPUT_RemoveListeners("lt_add_tutorial")
    OUTPUT_RemoveListeners("cf_first_village_under_attack_complete_cinematic")

    const outposts = GetAliveVillages(FACTION_PIGLINS, [BASE_SIZE_ACT_1_A, BASE_SIZE_ACT_1_B, BASE_SIZE_ACT_1_C])

    if (HasEntities(outposts)) {
        ForEachEntities(outposts, (outpost) => {
            const villageId = QUERY_GetVillageIDFromEntity(outpost)
            LISTENFOR_PlayerEnteredVillage({
                snippet: "pev_three_outposts",
                ownerVillageId: villageId,
                villageId: villageId,
                threshold: 1
            })
        })
    }
})

SNIPPET_ProcessPatch("pgv_act1VillageChestListener", 1, () => {
    const villageEnt = FILTER_ByTagFilter(GetAllFriendlyVillages(), ["secondVillageUnderAttack"], [])
    if (HasEntities(villageEnt)) {
        const villageId = QUERY_GetVillageIDFromEntity(villageEnt)
        LISTENFOR_PlayerEnteredVillage({
            snippet: "pev_enter_second_village_for_chest",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            villageId: villageId,
            threshold: 1
        })
    }
})

SNIPPET_ProcessPatch("pvg_act1RemoveBattleViewListener", 1, () => {
    OUTPUT_RemoveListeners("lt_add_tutorial_patched")
})

SNIPPET_ProcessPatch("pgv_updateBaseUpgradeVO", 1, () => {
    if (GetGameRuleVariable(GAME_RULE_NAMES.invasionEnabled)) {
        OUTPUT_RemoveListeners("vu_update_map_values")

        LISTENFOR_VillageUpgraded({
            snippet: "vu_invasion_base_upgraded",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })
    }
})

SNIPPET_ProcessPatch("pgv_updateBaseDestroyedCounters", 1, () => {
    // Retroactively set the snapshot act 2 started counters to 0
    const newCounterSizes = [BASE_SIZE_PIGLIN_CREEPER, BASE_SIZE_PIGLIN_SKELETON, BASE_SIZE_PIGLIN_ZOMBIE, BASE_SIZE_BOSS]
    for (const horde of FACTION_PIGLINS) {
        for (const size of newCounterSizes) {
            SNAPSHOT_Act2Started().PatchSet(HordeBasesDestroyedCounter, 0, horde, size)
        }
    }

    // Mob alliance occupation bases
    if (IsOccupationBeatOver("zombie")) {
        HordeBasesDestroyedCounter.Increment(FACTION_NAME_OBSTACLE, BASE_SIZE_PIGLIN_ZOMBIE)
    }

    if (IsOccupationBeatOver("skeleton")) {
        HordeBasesDestroyedCounter.Increment(FACTION_NAME_ATTACK, BASE_SIZE_PIGLIN_SKELETON)
    }

    if (IsOccupationBeatOver("creeper")) {
        HordeBasesDestroyedCounter.Increment(FACTION_NAME_DEFEND, BASE_SIZE_PIGLIN_CREEPER)
    }

    // Boss bases
    if (QUERY_GetGlobalVariable("magmaBossKilled")) {
        HordeBasesDestroyedCounter.Increment(FACTION_NAME_DEFEND, BASE_SIZE_BOSS)
    }

    if (QUERY_GetGlobalVariable("obstacleBossKilled")) {
        HordeBasesDestroyedCounter.Increment(FACTION_NAME_OBSTACLE, BASE_SIZE_BOSS)
    }
})

SNIPPET_ProcessPatch("pgv_armedVillagersOnboarding", 1, () => {
    OUTPUT_RemoveListeners("gvc_armed_villagers_onbarding")
})

SNIPPET_ProcessPatch("pgv_setCampaignActMapKey", 1, () => {
    if (QUERY_GetGlobalVariable(GV_STARTED_EPILOGUE) > 0) {
        OUTPUT_ServerMapSetKeyValue(MAP_KEY.CAMPAIGN_ACT, CAMPAIGN_ACT.EPILOGUE)
    } else if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) > 0) {
        OUTPUT_ServerMapSetKeyValue(MAP_KEY.CAMPAIGN_ACT, CAMPAIGN_ACT.ACT_3)
    } else if (QUERY_GetGlobalVariable(GV_STARTED_ACT_2) > 0) {
        OUTPUT_ServerMapSetKeyValue(MAP_KEY.CAMPAIGN_ACT, CAMPAIGN_ACT.ACT_2)
    } else if (QUERY_GetGlobalVariable(GV_STARTED_ACT_1_B) > 0) {
        OUTPUT_ServerMapSetKeyValue(MAP_KEY.CAMPAIGN_ACT, CAMPAIGN_ACT.ACT_1B)
    } else {
        OUTPUT_ServerMapSetKeyValue(MAP_KEY.CAMPAIGN_ACT, CAMPAIGN_ACT.ACT_1A)
    }
})

SNIPPET_ProcessPatch("pgv_d0UpdatePortal40PercentHPAudioTrigger001", 1, () => {
    const DBB = GetAliveVillages(FACTION_NAME_DBB, [BASE_SIZE_DARK_BEACON])
    const attackVillages = GetAliveVillages(FACTION_NAME_ATTACK, [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE])

    if (HasEntities(DBB)) {
        const villageId = QUERY_GetVillageIDFromEntity(DBB)
        BASE_InitPiglinStructureDamagedResponse(villageId, [{ snippetName: "sd_dbb_portal_damaged_40", debounceTimer: 60, healthThreshold: dbbVal.portalHealthThreshold.fourty, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] }])
    }

    if (HasEntities(attackVillages)) {
        ForEachEntities(attackVillages, (village) => {
            const villageId = QUERY_GetVillageIDFromEntity(village)
            const piglinPortalDamagedResponseTimer = _GetAttackResponseTimer(villageId, attackResponse.portalDamaged)

            BASE_InitPiglinStructureDamagedResponse(villageId, [{ snippetName: "snippet_attack_portal_damaged_40", debounceTimer: piglinPortalDamagedResponseTimer, healthThreshold: 0.4, includeTags: ["portal_piglin"] }])
        })
    }
})

SNIPPET_ProcessPatch("pgv_updateWellhouseTutorial", 1, () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.destroyDBB.global.isThisStepCurrentlyActive) > 0) {
        const currentPrismarine = QUERY_GetCampaignResource("xp_common")
        if (currentPrismarine < 50) {
            OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "xp_common", 50 - currentPrismarine, false)
        }
    }
})

SNIPPET_ProcessPatch("pgv_delayAct2VillageChestRefills", 1, () => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_2) > 0) {
        LISTENFOR_TimeOfDay({
            snippet: "tod_init_village_chest_refill",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            timeOfDayNumber: TIME_NOON
        })
    }
})

SNIPPET_ProcessPatch("pgv_setupBuildingStatesForMobHomesteads", 1, () => {
    const villages = GetAliveVillages([MOB_ALLIANCE_NAME_CREEPER, MOB_ALLIANCE_NAME_SKELETON, MOB_ALLIANCE_NAME_ZOMBIE])

    if (HasEntities(villages)) {
        ForEachEntities(villages, (village) => {
            const villageId = QUERY_GetVillageIDFromEntity(village)
            LISTENFOR_EntityEnabled({
                snippet: "ee_enable_mob_alliance_spawner",
                ownerVillageId: villageId
            })

            LISTENFOR_EntityDisabled({
                snippet: "ee_disable_mob_alliance_spawner",
                ownerVillageId: villageId
            })
        })
    }
})

SNIPPET_ProcessPatch("pgv_removeCloseToCageTriggersAtHomesteadOccupation", 1, () => {
    OUTPUT_DeleteListenerTriggerVolumes("spe_player_or_mobs_close_to_cage")
    OUTPUT_DeleteListenerTriggerVolumes("spe_piglins_close_to_cage")
    OUTPUT_RemoveListeners("spe_player_or_mobs_close_to_cage")
    OUTPUT_RemoveListeners("spe_piglins_close_to_cage")
})

SNIPPET_ProcessPatch("pgv_removeVillagerVillageBuildingCompletedListener", 1, () => {
    OUTPUT_RemoveListeners("bc_village_house")
})

SNIPPET_ProcessPatch("pgv_updateOutpostMusicEmitters", 1, () => {
    const attackOutposts = GetAliveVillages([FACTION_NAME_ATTACK], [BASE_SIZE_OUTPOST])
    ForEachEntities(attackOutposts, (outpost) => {
        const villageId = QUERY_GetVillageIDFromEntity(outpost)
        SetAudioPhaseForBase(villageId, attackVal.audioPerPhaseArray[0])
    })

    const obstOutposts = GetAliveVillages([FACTION_NAME_OBSTACLE], [BASE_SIZE_OUTPOST])
    ForEachEntities(obstOutposts, (outpost) => {
        const villageId = QUERY_GetVillageIDFromEntity(outpost)
        SetAudioPhaseForBase(villageId, obstacleVal.audioPerPhaseArray[0])
    })

    const defendOutposts = GetAliveVillages([FACTION_NAME_DEFEND], [BASE_SIZE_OUTPOST])
    ForEachEntities(defendOutposts, (outpost) => {
        const villageId = QUERY_GetVillageIDFromEntity(outpost)
        SetAudioPhaseForBase(villageId, defendVal.audioPerPhaseArray[0])
    })
})

SNIPPET_ProcessPatch("pgv_homestead_add_occupying_mobs_trigger", 1, () => {
    const occupationBases = [
        { mobId: "creeper", factionId: MOB_ALLIANCE_NAME_CREEPER },
        { mobId: "zombie", factionId: MOB_ALLIANCE_NAME_ZOMBIE },
        { mobId: "skeleton", factionId: MOB_ALLIANCE_NAME_SKELETON }
    ]
    occupationBases.forEach((data) => {
        const homesteads = GetAliveVillages([data.factionId])
        if (!HasEntities(homesteads)) {
            return
        }
        const villageId = QUERY_GetVillageIDFromEntity(RandomEntity(homesteads))
        const playerApproachedTV = OUTPUT_CreateVillageTriggerVolume(villageId, maOccupationVal.common.beforeOccupationSpawnDummyPiglinsVicinityPadding, ["player"], [], ALLIANCE_FRIENDLY)

        LISTENFOR_PresenceEntered({
            snippet: "pe_player_approached_mob_alliance_homestead_before_invasion",
            ownerVillageId: villageId,
            triggerEntity: playerApproachedTV,
            payloadString: data.mobId
        })

        LISTENFOR_PresenceExited({
            snippet: "pex_player_left_mob_alliance_homestead_before_invasion",
            ownerVillageId: villageId,
            triggerEntity: playerApproachedTV,
            payloadString: data.mobId
        })

        LISTENFOR_InfluenceLureChanged({
            snippet: "ilc_homestead_mob_lured",
            ownerVillageId: villageId,
            includeTags: [data.mobId]
        })
    })
})

SNIPPET_ProcessPatch("pgv_dbbFactionRallyPointRecuitments", 1, () => {
    const piglinBases = GetAliveVillages(FACTION_NAME_DBB, BASE_SIZE_DARK_BEACON)
    if (HasEntities(piglinBases)) {
        piglinBases.forEach((village) => {
            const villageId = QUERY_GetVillageIDFromEntity(village)
            const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
            if (HasEntities(villageEntities)) {
                const fighterBarracks = FILTER_ByTagFilter(villageEntities, [BARRACKS_NAME_FIGHTER], [])
                const disruptorBarracks = FILTER_ByTagFilter(villageEntities, [BARRACKS_NAME_DISRUPTOR], [])
                const siegerBarracks = FILTER_ByTagFilter(villageEntities, [BARRACKS_NAME_SIEGER], [])

                if (HasEntities(fighterBarracks)) {
                    ForEachEntities(fighterBarracks, (fbarracks) => {
                        RecruitSpawnedComposition(villageId, dbbVal.piglinRallyPoints["attack"], fbarracks, dbbAI.offensive)
                    })
                }
                if (HasEntities(disruptorBarracks)) {
                    ForEachEntities(disruptorBarracks, (dbarracks) => {
                        RecruitSpawnedComposition(villageId, dbbVal.piglinRallyPoints["defend"], dbarracks, dbbAI.defensive)
                    })
                }
                if (HasEntities(siegerBarracks)) {
                    ForEachEntities(siegerBarracks, (sbarracks) => {
                        RecruitSpawnedComposition(villageId, dbbVal.piglinRallyPoints["siege"], sbarracks, dbbAI.siege)
                    })
                }
            }
            CreateCompositionRallyPoints(villageId, dbbVal.piglinRallyPoints)
            SetVillageVariable(villageId, "composition_listeners", 1)
        })
    }
})

SNIPPET_ProcessPatch("pgv_attackFactionRallyPointSeigeRecuitments", 1, () => {
    const piglinBases = GetAliveVillages(FACTION_NAME_ATTACK, BASE_SIZE_ALL_PORTALS)
    if (HasEntities(piglinBases)) {
        piglinBases.forEach((village) => {
            const villageId = QUERY_GetVillageIDFromEntity(village)
            const variationData = _GetAttackVariationData(villageId)
            const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
            if (HasEntities(villageEntities)) {
                const siege0Barracks = FILTER_ByTagFilter(villageEntities, ["attackAISiege0"], ["attackAISiege"])
                const siege1Barracks = FILTER_ByTagFilter(villageEntities, ["attackAISiege1"], ["attackAISiege"])
                const siege0RallyPoints = FILTER_ByTagFilter(villageEntities, ["attackSiegeRally0"], ["attackSiegeRally"])
                const siege1RallyPoints = FILTER_ByTagFilter(villageEntities, ["attackSiegeRally1"], ["attackSiegeRally"])
                if (HasEntities(siege0Barracks)) {
                    OUTPUT_AddTag(siege0Barracks, "attackAISiege")
                    ForEachEntities(siege0Barracks, (barracks0) => {
                        RecruitSpawnedComposition(villageId, variationData.piglinRallyPoints["attackSiege"], barracks0, attackHordeAI.siege)
                    })
                }
                if (HasEntities(siege1Barracks)) {
                    OUTPUT_AddTag(siege1Barracks, "attackAISiege")
                    ForEachEntities(siege1Barracks, (barracks1) => {
                        RecruitSpawnedComposition(villageId, variationData.piglinRallyPoints["attackSiege"], barracks1, attackHordeAI.siege)
                    })
                }
                if (HasEntities(siege0RallyPoints)) {
                    OUTPUT_AddTag(siege0RallyPoints, "attackSiegeRally")
                }
                if (HasEntities(siege1RallyPoints)) {
                    OUTPUT_AddTag(siege1RallyPoints, "attackSiegeRally")
                }
            }
            CreateCompositionRallyPoints(villageId, variationData.piglinRallyPoints)
            SetVillageVariable(villageId, "composition_listeners", 1)
        })
    }
})

SNIPPET_ProcessPatch("pgv_occupationBaseRallyPointCompositions", 1, () => {
    {
        const mobId = "skeleton"
        const piglinFaction = maOccupationVal[mobId].piglinFactionName
        const baseData = occupationBaseData[piglinFaction]
        const piglinBases = GetAliveVillages(FACTION_NAME_ATTACK, BASE_SIZE_PIGLIN_SKELETON)
        if (HasEntities(piglinBases)) {
            piglinBases.forEach((village) => {
                const villageId = QUERY_GetVillageIDFromEntity(village)
                CreateCompositionRallyPoints(villageId, baseData.piglinRallyPoints)
                SetVillageVariable(villageId, "composition_listeners", 1)
            })
        }
    }

    {
        const mobId = "zombie"
        const piglinFaction = maOccupationVal[mobId].piglinFactionName
        const baseData = occupationBaseData[piglinFaction]
        const piglinBases = GetAliveVillages(FACTION_NAME_OBSTACLE, BASE_SIZE_PIGLIN_ZOMBIE)
        if (HasEntities(piglinBases)) {
            piglinBases.forEach((village) => {
                const villageId = QUERY_GetVillageIDFromEntity(village)
                CreateCompositionRallyPoints(villageId, baseData.piglinRallyPoints)
                SetVillageVariable(villageId, "composition_listeners", 1)
            })
        }
    }
})

SNIPPET_ProcessPatch("pgv_attackObstacleRallyPointTimers", 1, () => {
    const piglinBases = GetAliveVillages(FACTION_NAME_OBSTACLE, BASE_SIZE_ALL_PORTALS_AND_BOSS)
    if (HasEntities(piglinBases)) {
        piglinBases.forEach((village) => {
            const villageId = QUERY_GetVillageIDFromEntity(village)
            const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)
            const villageFlavour = GetVillageFlavour(villageId)
            if (obstacleVal.rallypoints.hasOwnProperty(villageSize)) {
                CreateCompositionRallyPoints(villageId, obstacleVal.rallypoints[villageSize][villageFlavour])
                SetVillageVariable(villageId, "composition_listeners", 1)
            }
            const rallyPoints = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["obstacleRallyPoint"], [])
            OUTPUT_AddTag(rallyPoints, "doNotDivideRally")
        })
    }
})

SNIPPET_ProcessPatch("pgv_removeOldRallypointTriggerVolumes", 1, () => {
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_attackDefend")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_attackSiege")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_attackSiege0")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_attackSiege1")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_attackPatrol")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_obstacleGuard")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_obstacleGuard1")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_obstacleSiege1")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_obstacleAssault")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_obstacleAssault1")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_finalDefendRally")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_dbbAttack")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_dbbSiege")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_dbbDefend")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_defendHordeSiege0")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_defendHordeSiege1")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_defendHordeDefend0")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_defendHordeDefend1")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_defendHordeUnique0")
    OUTPUT_DeleteListenerTriggerVolumes("spe_control_group_composition_handler_defendHordeUnique1")

    OUTPUT_RemoveListeners("spe_control_group_composition_handler_attackDefend")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_attackSiege")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_attackSiege0")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_attackSiege1")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_attackPatrol")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_obstacleGuard")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_obstacleGuard1")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_obstacleSiege")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_obstacleSiege1")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_obstacleAssault")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_obstacleAssault1")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_finalDefendRally")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_dbbAttack")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_dbbSiege")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_dbbDefend")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_defendHordeSiege0")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_defendHordeSiege1")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_defendHordeDefend0")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_defendHordeDefend1")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_defendHordeUnique0")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_defendHordeUnique1")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_siege")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_attack")
    OUTPUT_RemoveListeners("spe_control_group_composition_handler_defend")
    OUTPUT_RemoveListeners("bc_attack_siege0_barracks")
    OUTPUT_RemoveListeners("bc_attack_siege1_barracks")
})

SNIPPET_ProcessPatch("pgv_updateTriggerVolumePiglinMobFilters", 1, () => {
    // update all trigger volumes looking for "piglin" to "piglin" & "mob" (excluding buildables)
    OUTPUT_PatchTriggerVolumeIncludeFilter(["piglin", TAG_MOB], ["piglin"], [TAG_BUILDABLE], [], [], ALLIANCE_PATCH_ALL)
})

SNIPPET_ProcessPatch("pgv_finalBaseBastionAiUpdate", 1, () => {
    const finalBase = GetAliveVillages(FACTION_NAME_WOF, [BASE_SIZE_PIGLIN_WOF])
    if (HasEntities(finalBase)) {
        _InitializeAllBastionAIEntities()

        const bossHog = QUERY_GetEntitiesWithTagFilter(["finalBoss"], [])
        const villageId = QUERY_GetVillageIDFromEntity(finalBase)
        if (HasEntities(bossHog)) {
            LISTENFOR_HealthChanged({
                snippet: "hc_boss_hog_damaged_scripted_response",
                ownerVillageId: villageId,
                entities: bossHog,
                normalizedThreshold: 0.99,
                triggerMode: HEALTH_TRIGGER_MODE.CROSS,
                direction: HEALTH_DIRECTION.DAMAGE
            })
        }
    }
})

SNIPPET_ProcessPatch("pgv_attackBossOccupationSpawnAtVillageWithPlayerInside", 1, () => {
    //In a patch-less build, a player waits for night to arrive at a village targeted for occupation by the boss
    //After it arrives, the player exits, installs the patch and loads the save
    const villages = FILTER_ByVillageSize(FILTER_ByFactionName(QUERY_GetAllVillages(), CULTURE_NAME_VILLAGERS), ["small"])
    ForEachEntities(villages, (village) => {
        const villageId = QUERY_GetVillageIDFromEntity(village)
        if (GetVillageVariable(villageId, "boss_occupation_active") > 0) {
            const occupationTriggerVolume = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [occupationValCommon.vicinityTvTag], [])
            if (HasEntities(occupationTriggerVolume)) {
                const players = FILTER_ByTagFilter(QUERY_GetIntruders(occupationTriggerVolume), ["player"], [])
                if (HasEntities(players)) {
                    _SpawnAttackHordeBossIfNeededForOccupation(villageId)
                }
            }
            SetVillageVariable(villageId, "spawned_boss_while_player_was_inside_the_village", 1)
            return
        }
    })
})

SNIPPET_ProcessPatch("pgv_removeAct1SecondSkirmishBase", 1, () => {
    OUTPUT_RemoveListeners("cf_act1_first_skirmish_destroyed")
})

SNIPPET_ProcessPatch("pgv_finalBaseBossLeash", 1, () => {
    if (QUERY_GetGlobalVariable(wofVal.global.siegeBossPlayed) > 0 && QUERY_GetGlobalVariable(wofVal.global.hasAppliedPatchLeash) === 0 && QUERY_GetGlobalVariable(wofVal.global.hasLeashedFinalBoss) === 0) {
        const boss = QUERY_GetEntitiesWithTags("finalBoss")
        if (HasEntities(boss)) {
            const wofLeash = QUERY_GetEntitiesWithTags([TAG_WELL_OF_FATE])
            if (HasEntities(wofLeash)) {
                if (QUERY_HasLeash(boss)) {
                    OUTPUT_RemoveLeash(boss)
                    OUTPUT_SetLeash(boss, wofLeash, 90, 30)
                } else {
                    OUTPUT_SetLeash(boss, wofLeash, 90, 30)
                }
                IncrementGlobal(wofVal.global.hasAppliedPatchLeash)
                IncrementGlobal(wofVal.global.hasLeashedFinalBoss)
            }
        } else {
            const allAliveVillages = QUERY_GetAllAliveVillages()
            const finalBase = FILTER_ByFactionName(allAliveVillages, [FACTION_NAME_WOF, WELL_OF_FATE])
            if (HasEntities(finalBase)) {
                ForEachEntities(finalBase, (village) => {
                    const villageId = QUERY_GetVillageIDFromEntity(village)
                    LISTENFOR_PlayerEnteredVillage({
                        snippet: "pev_player_entered_final_base_patch",
                        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                        villageId: villageId
                    })
                })
            }
        }
    }
})

SNIPPET_ProcessPatch("pgv_obstacleBaseWallStingerPatch", 1, () => {
    const allObstacleVillages = GetAliveVillages(FACTION_NAME_OBSTACLE, [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE, BASE_SIZE_BOSS])
    if (HasEntities(allObstacleVillages)) {
        ForEachEntities(allObstacleVillages, (village) => {
            const villageId = QUERY_GetVillageIDFromEntity(village)
            LISTENFOR_NonPopCappedEntityDestroyed({
                snippet: "ed_obstacle_wall_destroyed",
                ownerVillageId: villageId,
                includeTags: ["pigGate", "piglin_wall"],
                villageId: villageId,
                despawned: false
            })
        })
    }
})

SNIPPET_ProcessPatch("pgv_patchThePatches", 1, () => {
    OUTPUT_RemoveListeners("pc_player_loaded_in_dbb_base_patch")
    OUTPUT_RemoveListeners("pc_player_loaded_in_attack_base_patch")
    OUTPUT_RemoveListeners("pc_player_loaded_in_obstacle_base_patch")
    OUTPUT_RemoveListeners("pc_player_loaded_in_occupation_attack_base_patch")
    OUTPUT_RemoveListeners("pc_player_loaded_in_occupation_obstacle_base_patch")
    OUTPUT_RemoveListeners("pc_player_loaded_in_occupation_base_patch_barracks")
})

SNIPPET_ProcessPatch("pgv_stingerAndVOForDefend34", 1, () => {
    const allDefendVillages = GetAliveVillages(FACTION_NAME_DEFEND, [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE, BASE_SIZE_BOSS])
    if (HasEntities(allDefendVillages)) {
        ForEachEntities(allDefendVillages, (village) => {
            const villageId = QUERY_GetVillageIDFromEntity(village)
            BASE_InitPiglinStructureDamagedResponse(villageId, [{ snippetName: "hc_defend_portal_flood_stinger", healthThreshold: 0.34, includeTags: ["portal_piglin"] }])
        })
    }
})

SNIPPET_ProcessPatch("pgv_fixVillageAudioForPlannedAttack", 1, () => {
    const villages = GetAliveVillages(CULTURE_NAME_VILLAGERS)
    if (HasEntities(villages)) {
        ForEachEntities(villages, (village) => {
            const villageId = QUERY_GetVillageIDFromEntity(village)
            if (IsTargetOfDelayedInvasionAttack(villageId)) {
                const fountain = GetVillageCentralStructures(villageId)
                OUTPUT_SetEmitterState(fountain, "incoming_attack")
            }
        })
    }
})

SNIPPET_ProcessPatch("pgv_removeInvincibleHomesteadPiglins", 1, () => {
    const homesteads = [
        { mobId: "creeper", factionId: MOB_ALLIANCE_NAME_CREEPER },
        { mobId: "skeleton", factionId: MOB_ALLIANCE_NAME_SKELETON },
        { mobId: "zombie", factionId: MOB_ALLIANCE_NAME_ZOMBIE }
    ]
    homesteads.forEach((data) => {
        const village = GetAliveVillages(data.factionId)
        if (HasEntities(village)) {
            const mobId = data.mobId
            const villageId = QUERY_GetVillageIDFromEntity(village)
            if (QUERY_GetGlobalVariable(GetMobAllianceData(mobId).global.mobAllianceCompleted) === 0 && QUERY_GetGlobalVariable(GetMobAllianceData(mobId).global.soItBegins) >= 1 && QUERY_GetGlobalVariable(GetMobAllianceData(mobId).global.mobAlliancePiglinInvasionStarted) >= 1) {
                const persistentDummyPiglins = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [`dummy_occupation_piglin_${mobId}`], [])
                if (HasEntities(persistentDummyPiglins)) {
                    OUTPUT_DestroyEntities(persistentDummyPiglins)
                }
            }
        }
    })
})

SNIPPET_ProcessPatch("pgv_spawnTheMissingOutposts", 1, () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.isThisStepCurrentlyActive) > 0) {
        const camps = FILTER_ByFactionName(QUERY_GetAllVillages(), FACTION_NAME_DBB)
        const campsCount = QUERY_GetEntitiesCount(camps)

        if (campsCount === 3) {
            return
        }

        const baseA = FILTER_ByVillageSize(camps, BASE_SIZE_ACT_1_A)
        const baseB = FILTER_ByVillageSize(camps, BASE_SIZE_ACT_1_B)
        const baseC = FILTER_ByVillageSize(camps, BASE_SIZE_ACT_1_C)

        if (!HasEntities(baseA)) {
            _TryRunThreeOutpostsPlacementTiers(BASE_SIZE_ACT_1_A)
        }
        if (!HasEntities(baseB)) {
            _TryRunThreeOutpostsPlacementTiers(BASE_SIZE_ACT_1_B)
        }
        if (!HasEntities(baseC)) {
            _TryRunThreeOutpostsPlacementTiers(BASE_SIZE_ACT_1_C)
        }
    }
})

SNIPPET_ProcessPatch("pgv_destroyPortalLessBases", 1, () => {
    let villageEntities = EMPTY_ENTITY_GROUP
    const allPiglinVillages = GetAliveVillages([FACTION_NAME_ATTACK, FACTION_NAME_DEFEND, FACTION_NAME_OBSTACLE], [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE])
    if (HasEntities(allPiglinVillages)) {
        ForEachEntities(allPiglinVillages, (village) => {
            const villageId = QUERY_GetVillageIDFromEntity(village)
            const portal = GetVillagePortal(villageId)
            if (!HasEntities(portal)) {
                villageEntities = OPER_Append(villageEntities, village)
            }
        })
    }
    if (HasEntities(villageEntities)) {
        OUTPUT_DestroyVillageEntities(villageEntities)
    }
})

SNIPPET_ProcessPatch("pgv_fixVillageHealthChangedSnippets", 1, () => {
    OUTPUT_RemoveListeners("hc_apply_damaged_state")
    OUTPUT_RemoveListeners("npc_apply_damaged_state")

    const villages = GetAliveVillages([MOB_ALLIANCE_NAME_CREEPER, MOB_ALLIANCE_NAME_ZOMBIE, MOB_ALLIANCE_NAME_SKELETON, CULTURE_NAME_VILLAGERS])
    ForEachEntities(villages, (village) => {
        const villageId = QUERY_GetVillageIDFromEntity(village)
        LISTENFOR_HealthChanged({
            snippet: "hc_apply_damaged_state",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: ["buildable_structure"],
            excludeTags: [],
            normalizedThreshold: 0.999,
            triggerMode: HEALTH_TRIGGER_MODE.CROSS
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "npc_apply_damaged_state",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: ["buildable_structure"],
            excludeTags: [],
            despawned: false
        })
    })
})

SNIPPET_ProcessPatch("pgv_removeIntentionsFromDeadBases", 1, () => {
    // Dead bases shouldn't still be performing invasion actions. Scan through dead bases
    // and remove any action they were planning.
    const deadBases = GetDeadVillages(FACTION_PIGLINS, BASE_SIZE_ALL_PORTALS)
    OUTPUT_ThwartDelayedInvasionActions(deadBases, "")
})

SNIPPET_ProcessPatch("pgv_removeExtraBasesPostBoss", 1, () => {
    // If a horde's boss has already arrived, we want to remove any extra s/m/l bases
    // that may have been made from dead bases w/ lingering invasion intentions.
    FACTION_PIGLINS.forEach((faction) => {
        if (QUERY_GetGlobalVariable(`${BOSS_BASE_VALS.globals.bossArrived}_${faction}`)) {
            const aliveBases = GetAliveVillages(faction, BASE_SIZE_ALL_PORTALS)

            OUTPUT_SetIconOff(aliveBases)
            OUTPUT_ThwartDelayedInvasionActions(aliveBases, "")
            OUTPUT_DespawnVillageEntities(aliveBases)
        }
    })
})

SNIPPET_ProcessPatch("pgv_progressToAct3", 1, () => {
    // Checking to see if we haven't made it to Act 3 despite defeating all the bosses.
    // If so, then we want to complete the transition so the game isn't locked at the end of Act 2.
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) === 0 && CheckIfAct2IsOver()) {
        // This timer naturally handles the transition to act 3. If the game was saved while this
        // is counting down, we can just skip the timer.
        OUTPUT_RemoveListeners("lt_post_portal_death_boss_subsequent_action")

        // We still want to wait for all the players to be in the game so we can move them away from the
        // WoF at the start of Act 3.
        LISTENFOR_PlayersReady({
            snippet: "pr_start_act3_after_patch",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })
    }
})

SNIPPET_PlayersReady("pr_start_act3_after_patch", () => {
    // Since this function triggers a cinematic which will prevent saving, we can assume that the
    // transition to act 3 starts here if a save is loaded that didn't make it to act 3, but should have.
    CampaignAct2End()
    Once()
})

SNIPPET_ProcessPatch("pgv_placement_adjustments", 1, () => {
    // Set up a maximum village texture stamp for all small and medium ALIVE bases
    const act2SmallMediumBases = FILTER_ByVillageSize(FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_PIGLINS), [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM])
    ForEachEntities(act2SmallMediumBases, (villageEntity) => {
        const factionName = QUERY_GetFactionNameFromEntity(villageEntity)
        OUTPUT_PlacementEntitySetMaximumVillageTextureStamp(villageEntity, GetStampTextureForFaction(factionName, BASE_SIZE_LARGE))
    })

    // Spawn boss bases if they haven't spawned yet

    // Defend horde
    if (QUERY_GetGlobalVariable(`${BOSS_BASE_VALS.globals.bossArrived}_${FACTION_NAME_DEFEND}`) > 0 && QUERY_GetGlobalVariable("magmaBossKilled") === 0) {
        const bossBase = FILTER_ByVillageSize(FILTER_ByFactionName(QUERY_GetAllAliveVillages(), [FACTION_NAME_DEFEND]), [BASE_SIZE_BOSS])
        if (!HasEntities(bossBase)) {
            // If we're here, it means that the boss arrived, but hasn't been killed AND there is no base
            // This is only possible if the placement failed
            // -> place the base with new rules
            PlacePiglinBase(FACTION_NAME_DEFEND, BASE_SIZE_BOSS)
        }
    }

    // Obstacle horde
    if (QUERY_GetGlobalVariable(`${BOSS_BASE_VALS.globals.bossArrived}_${FACTION_NAME_OBSTACLE}`) > 0 && QUERY_GetGlobalVariable("obstacleBossKilled") === 0) {
        const bossBase = FILTER_ByVillageSize(FILTER_ByFactionName(QUERY_GetAllAliveVillages(), [FACTION_NAME_OBSTACLE]), [BASE_SIZE_BOSS])
        if (!HasEntities(bossBase)) {
            // If we're here, it means that the boss arrived, but hasn't been killed AND there is no base
            // This is only possible if the placement failed
            // -> place the base with new rules
            PlacePiglinBase(FACTION_NAME_OBSTACLE, BASE_SIZE_BOSS)
        }
    }
})