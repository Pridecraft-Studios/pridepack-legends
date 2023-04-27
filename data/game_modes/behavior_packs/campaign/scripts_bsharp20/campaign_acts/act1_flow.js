const markers = {
    piglinMarkers: "badger:onboarding_piglin_waypoint_marker",
    cageMarkers: "badger:onboarding_cage_waypoint_marker"
}
const act1Skips = {
    skipVillage1: "gv_skip_village_1"
}
const act1FlowVal = {
    misc: {
        gameIntroCinematic: "mst03_c00_opening",
        onboardingCompleteResource: "unlock_onboarding_act1_complete",
        act1FlowComplete: "gv_act1_onboarding_complete",
        successAudio: "onboarding_success",
        arrivalAudio: "onboarding_arrival",
        timeToStartOnboardingAfterIntroCine: 8,
        timeToStartPassiveOnboardingAfterIntroCine: 20,
        timeToShowTutorialHint: 30,
        firstVillageTag: "firstVillageUnderAttack",
        secondVillageTag: "secondVillageUnderAttack",
        thirdVillageTag: "thirdVillageUnderAttack",
        timeToTriggerSupportAndCavalryFMV: 10,
        failsafeAct1NISDistance: 90,
        skipAct1Flow: "gv_skip_act1_flow",
        villageCageTag: "villageCage",
        piglinsAtVillageTag: "piglinsAtVillage",
        remainingWoFUpgradesUnlock: "unlock_remaining_wof_upgrades",
        totalCagesNumber: 3,
        numOfPiglinsToSpawnMarkers: 6,
        piglinLootTableOverride: "act1",
        startingResourceWood: "wood",
        startingResourceStone: "stone",
        startingResourceSpawnerCost: "emerald",
        startingResourceWoodAmount: 250,
        startingResourceStoneAmount: 250,
        startingResourceSpawnerCostAmount: 50,
        timeToTriggerStartingResources: 20,
        startingResourcesVO: "onboarding_resources_granted",
        timeToSpawnCageMarkers: 6,
        noPoiNisDuringAct1: "gv_no_poi_nis_during_act_1",
        getLapisFromChestVO: "act1_player_ran_out_of_lapis",
        getLapisFromChestHint: "onboarding_act1_player_ran_out_of_lapis",
        getLapisFromChestEnabled: "gv_get_act1_lapis_from_chest_enabled",
        activeOnboardingNudge: "gv_active_onboarding_nudge",
        miscTutorials: {
            building: {
                tutorialKey: "player_built_structures",
                timeToNudgeAfterGathering: 45,
                timeToNudgeBeforeCarpenter: 45
            },
            hotbar: {
                tutorialKey: "player_changed_hotbar",
                tutorialHintUnlock: ""
            },
            fastTravel: {
                tutorialKey: "fast_travel",
                global: {
                    hasFastTravelled: "gv_has_fast_travelled"
                }
            },
            rebuildingVillages: {
                tutorialKey: ""
            },
            worldMap: {
                tutorialKey: "player_looked_at_map",
                delay: 50
            },
            compass: {
                tutorialKey: "player_used_compass",
                delay: 2
            },
            resourceCap: {
                tutorialKey: "player_resource_cap"
            },
            placedSpawner: {
                tutorialKey: ""
            },
            upgrading: {
                tutorialKey: "player_upgraded"
            },
            advancedDirect: {
                tutorialKey: "player_advanced_direct",
                vo: {
                    onTheWayToThreeCamps: "onboarding_advanced_direct_intro",
                    onTheWayToSecondSkirmish: "onboarding_advanced_direct_intro"
                },
                consts: {
                    firstVoDelay: 45,
                    secondVoDelay: 15,
                    tutorialDelay: 16
                }
            },
            sprinting: {
                tutorialKey: "player_sprinted",
                consts: {
                    tutorialDelay: 45
                }
            }
        },
        miscVO: {
            resources: {
                lapis: "onboarding_lapis"
            },
            structures: {
                tracker: "gv_can_play_structure_misc_vo",
                timers: {
                    timeUntilPlayedAgain: 30
                }
            },
            fastTravel: {
                secondReminder: "onboarding_second_skirmish_fasttravel",
                timers: {
                    timeToTellPlayerAboutFastTravel: 26,
                    timeToRemindPlayerAboutFastTravel: 40
                },
                tracker: "gv_has_fast_travelled"
            },
            secondSkirmish: {
                reaction: "onboarding_camp_5_arrival"
            }
        }
    },
    audio: {
        stingers: {
            freeVillage: "BAE_TODO",
            firstPiglinWave: "BAE_mus_stinger_village_attack_wave_first",
            subsequentWaves: "BAE_mus_stinger_village_attack_wave_new",
            outpostDestroyed: "BAE_mus_stinger_outpost_destroyed_act_1"
        },
        music: {
            firstSkirmishEmitter: "badger:music_combat_act1_base_skirmish_01",
            secondSkirmishEmitter: "badger:music_combat_act1_base_skirmish_02"
        },
        fountainStates: {
            occupied: "occupied",
            damaged: "damaged",
            incomingAttack: "incoming_attack",
            default: "default"
        }
    },
    gathering: {
        id: "gathering",
        tutorialKey: "",
        tutorialHintUnlock: "unlock_onboarding_gatheredresources_tut",
        onboardingCompleteResource: "unlock_onboarding_gatheredresources_complete",
        global: {
            stepComplete: "gv_onboarding_gathering_completed",
            isThisStepCurrentlyActive: "gv_onboarding_gathering_active"
        },
        consts: {
            timeToTriggerFirstVO: 6,
            timeToTriggerNudgeAfterVO: 5,
            timeToTriggerVOReminder: 31,
            timeToTriggerHint: 40,
            amountOfStoneNecessary: 60,
            amountOfWoodNecessary: 60,
            timeToTutorialNudge: 60
        },
        message: {
            onboardingNudge: "onboarding_resourcing_nudge",
            hint: ""
        },
        vo: {
            intro: "onboarding_gathering_1",
            reminder: "onboarding_gathering_2",
            complete: "onboarding_gathering_3"
        }
    },
    findVillageUnderAttack: {
        id: "findVillageUnderAttack",
        tutorialKey: "",
        tutorialHintUnlock: "",
        onboardingCompleteResource: "unlock_onboarding_find_village_under_attack",
        global: {
            stepComplete: "gv_onboarding_find_village_under_attack",
            isThisStepCurrentlyActive: "gv_onboarding_find_village_under_attack_active"
        },
        consts: {
            timeToTriggerFirstVO: 3,
            timeToTriggerNudgeAfterVO: 3,
            timeToTriggerVOReminder: 120,
            timeToTriggerHint: 50,
            timeToCinematic: 3,
            timeToGiveMeleeTutorialResource: 40
        },
        message: {
            onboardingNudge: "onboarding_find_village_under_attack_nudge",
            hint: ""
        },
        vo: {
            intro: "onboarding_find_piglins_1",
            reminder: "onboarding_find_piglins_2",
            preOccupiedVO: "onboarding_find_piglins_8",
            complete: ""
        },
        cinematic: "hrd00_c01_village_occupied"
    },
    firstVillageUnderAttack: {
        id: "firstVillageUnderAttack",
        tutorialKey: "",
        tutorialHintUnlock: "",
        onboardingCompleteResource: "unlock_onboarding_first_village_under_attack",
        global: {
            stepComplete: "gv_onboarding_first_village_under_attack",
            isThisStepCurrentlyActive: "gv_onboarding_first_village_under_attack_active",
            cagesBuilt: "gv_onboarding_village_cages_built",
            cagesOpened: "gv_onboarding_village_cages_opened",
            allCagesOpened: "gv_onboarding_first_village_all_cages_opened",
            piglinsSpawned: "gv_onboarding_first_village_piglins_spawned",
            piglinsKilled: "gv_onboarding_first_village_piglins_killed",
            allPiglinsKilled: "gv_onboarding_first_village_all_piglins_killed",
            numOfMobsSpawned: "gv_num_of_mobs_spawned_first_village"
        },
        consts: {
            timeToTriggerFirstVO: 2,
            timeToTriggerNudgeAfterVO: 1,
            timeToTriggerVOReminder: 5,
            timeToTriggerHint: 40,
            timeToSendPiglinsToAttackPlayers: 45,
            numberOfPiglinsToSpawnAtVillage: 12,
            numberOfPiglinsToSpawnAtCages: 4,
            numberOfPiglinsLeftForSuccess: 4,
            numberOfMobsToDemphasizeHud: 10
        },
        message: {
            onboardingNudge: "onboarding_first_village_under_attack_nudge",
            hint: ""
        },
        vo: {
            intro: "first_village_under_attack",
            reminder: "onboarding_first_village_reminder",
            complete: "onboarding_first_village_saved",
            hintKillRemainingPiglins: "",
            hintOpenRemainingCages: "onboarding_first_village_cage"
        },
        cinematics: {
            cagesOpened: "hrd00_c02_villagers_freed",
            cagesNotOpened: "hrd00_c01a_piglins_defeated"
        },
        miscReminders: {
            firstVillageBuildSpawnersVO: "placed_spawner_prompt",
            timeTofirstVillageBuildSpawnersVO: 20,
            hasPlayedFirstVillageBuildSpawnersVO: "gv_hasPlayedFirstVillageBuildSpawnersVO"
        },
        hudItem: ["mobs", "badger:spawner_wood_golem", "badger:spawner_stone_golem"]
    },
    repairFountain: {
        id: "repairFountain",
        tutorialKey: "",
        tutorialHintUnlock: "",
        onboardingCompleteResource: "unlock_onboarding_repair_fountain",
        global: {
            stepComplete: "gv_onboarding_repair_fountain_completed",
            isThisStepCurrentlyActive: "gv_onboarding_repair_fountainactive",
            playerStartedBuildingCarpenter: "gv_first_village_fountain_repaired"
        },
        consts: {
            timeToTriggerFirstVO: 3,
            timeToTriggerNudgeAfterVO: 7,
            timeToTriggerVOReminder: 31,
            timeToTriggerHint: 40
        },
        message: {
            onboardingNudge: "onboarding_repair_fountain_nudge",
            hint: "hint_repair_fountain"
        },
        vo: {
            intro: "onboarding_repair_fountain_prompt",
            reminder: "",
            complete: ""
        },
        cinematic: "hrd00_c07_fountain_restored",
        miscReminders: {
            firstVillageGatherResourcesVO: "village_post_destroyed",
            timeTofirstVillageGatherResourcesVO: 25,
            hasPlayedFirstVillageGatherResourcesVO: "gv_hasPlayedFirstVillageGatherResourcesVO"
        },
        hudItem: ["utility", "badger:zoner_regen_structures"]
    },
    findSecondVillage: {
        id: "findSecondVillage",
        tutorialKey: "",
        tutorialHintUnlock: "",
        onboardingCompleteResource: "unlock_onboarding_find_second_village",
        global: {
            stepComplete: "gv_onboarding_find_second_village_completed",
            isThisStepCurrentlyActive: "gv_onboarding_find_second_village_active"
        },
        consts: {
            timeToTriggerFirstVO: 2,
            timeToTriggerNudgeAfterVO: 3,
            timeToTriggerVOReminder: 51,
            timeToTriggerHint: 40,
            numberOfPiglinsToSpawnAtVillage: 20,
            timeToTriggerVillageIntroCine: 10,
            timeToTriggerVOAfterIntroCine: 4,
            numberOfPiglinsLeftForSuccess: 5
        },
        message: {
            onboardingNudge: "onboarding_find_second_village_nudge",
            hint: ""
        },
        vo: {
            intro: "onboarding_leave_first_village",
            reminder: "onboarding_find_piglins_6",
            complete: "onboarding_find_piglins_7"
        },
        villageIntroCine: "vil01_c02_village_intro_wof_fmv",
        hasIntroCinePlayed: "gv_has_played_second_village_intro"
    },
    freeSecondVillage: {
        id: "freeSecondVillage",
        tutorialKey: "",
        tutorialHintUnlock: "",
        onboardingCompleteResource: "unlock_onboarding_free_second_village",
        global: {
            stepComplete: "gv_onboarding_free_second_village_completed",
            isThisStepCurrentlyActive: "gv_onboarding_free_second_village_active",
            piglinsSpawned: "gv_onboarding_free_second_village_piglins_spawned",
            piglinsKilled: "gv_onboarding_free_second_village_piglins_killed",
            allPiglinsDefeated: "gv_all_piglins_defeated",
            fountainDisabled: "gv_fountain_disabled",
            playerHasStartedRepairingFountain: "gv_player_has_started_repairing_fountain",
            numOfMobsSpawned: "gv_num_of_mobs_spawned_second_village"
        },
        consts: {
            timeToTriggerFirstVO: 2,
            timeToTriggerNudgeAfterVO: 1,
            timeToTriggerVOReminder: 31,
            timeToTriggerHint: 40,
            timeToSendPiglinsToAttackPlayers: 45,
            fountainDestroyedReminderDelay: 45,
            numberOfMobsToDemphasizeHud: 10
        },
        message: {
            onboardingNudge: "onboarding_free_second_village_nudge",
            repairFountain: "onboarding_free_second_village_heal_fountain",
            hint: ""
        },
        vo: {
            intro: "",
            reminder: "onboarding_second_village_reminder",
            complete: "onboarding_second_village_saved",
            fountainDestroyedIntro: "onboarding_act1villageattackdestroyedfountainfailsafe_1",
            fountainDestroyedReminder: "onboarding_act1villageattackdestroyedfountainfailsafe_2",
            fountainDestroyedSuccess: "onboarding_act1villageattackdestroyedfountainfailsafe_3"
        },
        miscReminders: {
            secondVillageBuildSpawnersVO: "placed_spawner_prompt",
            timeTosecondVillageBuildSpawnersVO: 15,
            hasPlayedSecondVillageBuildSpawnersVO: "gv_hasPlayedSecondVillageBuildSpawnersVO",
            hasBuiltSpawners: "gv_hasBuiltSpawnersVO" //Need another one here in case the player is reminded in VG2 but doesn't place spawners so we need to remind them again at the barracks
        },
        cinematic: "hrd00_c03a_village_defended",
        hudItem: ["mobs", "badger:spawner_wood_golem", "badger:spawner_stone_golem"]
    },
    villageChest: {
        id: "villageChest",
        tutorialKey: "village_rewards",
        tutorialHintUnlock: "",
        onboardingCompleteResource: "",
        delayedTime: 2,
        global: {
            stepComplete: "gv_onboarding_village_chest_completed",
            isThisStepCurrentlyActive: "gv_onboarding_village_chest_active"
        },
        consts: {
            timeToTriggerFirstVO: 2,
            timeToTriggerNudgeAfterVO: 4,
            timeToTriggerVOReminder: 31,
            timeToTriggerHint: 40,
            timeToTriggerReturnToWofVO: 2,
            timeToTriggerNudgeAfterWellOfFateVO: 14,
            timeToTriggerOpenSongBookReminderVO: 31,
            timeToEnableInteraction: 7
        },
        message: {
            onboardingNudge: "onboarding_open_village_chest_nudge",
            hint: ""
        },
        vo: {
            intro: "",
            introPlaceholder: "",
            reminder: "onboarding_village_chest_reminder",
            complete: "onboarding_act1_chest"
        },
        cinematic: "hrd00_c08_chest",
        villageChestTag: "village_treasure_chest_interact"
    },
    buildDefesesInSecondVillage: {
        id: "buildDefesesInSecondVillage",
        tutorialKey: "",
        tutorialHintUnlock: "",
        onboardingCompleteResource: "unlock_onboarding_build_defenses_in_second_village",
        global: {
            stepComplete: "gv_onboarding_build_defenses_in_second_village_completed",
            isThisStepCurrentlyActive: "gv_onboarding_build_defenses_in_second_village_active",
            wallsBuilt: "gv_defenses_built_in_second_village_walls",
            towersBuilt: "gv_defenses_built_in_second_village_towers",
            gatesBuilt: "gv_defenses_built_in_second_village_gates",
            minimalDefensesBuilt: "gv_minimal_defenses_build",
            fountainRepaired: "gv_second_village_fountain_repaired"
        },
        consts: {
            timeToTriggerFirstVO: 2,
            timeToTriggerNudgeAfterVO: 8,
            timeToTriggerVOReminder: 31,
            timeToTriggerHint: 40,
            amountOfGatesNecessary: 1,
            amountOfWallsNecessary: 40,
            timeToStartFirstSkirmish: 120,
            thresholdsToPrelimenaryVO: [0.2, 0.4, 0.6, 0.8, 0.9],
            completionVOdelay: 4
        },
        message: {
            onboardingNudge: "onboarding_build_defenses_in_second_village_nudge",
            hint: ""
        },
        vo: {
            intro: "onboarding_build_defenses_prompt",
            reminder: "",
            complete: "onboarding_act1villageattackincomingtimer_3",
            reinforcement: "onboarding_build_defenses_reinforcement",
            prelimenaryVO: ["onboarding_act1villageattackincoming_2", "onboarding_act1villageattackincoming_3", "onboarding_act1villageattackincoming_4", "onboarding_act1villageattackincoming_5", "onboarding_act1villageattackincomingtimer_2"]
        },
        cinematic: "hrd00_c03_piglins_arrive",
        hudItem: ["utility", "badger:tower_arrow"]
    },
    firstSkirmish: {
        id: "firstSkirmish",
        tutorialKey: "",
        tutorialHintUnlock: "",
        onboardingCompleteResource: "unlock_onboarding_first_skirmish",
        villageTag: "first_skirmish_village",
        village: {
            piglinFactionName: FACTION_NAME_DBB,
            villageArchetype: "badger:piglin_dbb",
            baseSize: BASE_SIZE_ACT1_FIRST_SKIRMISH
        },
        global: {
            stepComplete: "gv_onboarding_first_skirmish_completed",
            isThisStepCurrentlyActive: "gv_onboarding_first_skirmish_active",
            hasUpdateMapControllers: "gv_has_updated_mar_controllers_first_skirmish",
            barracksBuilt: "gv_first_skirmish_barracks_built",
            barracksKilled: "gv_first_skirmish_barracks_killed",
            nudgeTracker: "gv_first_skirmish_nudge_tracker",
            firstSkirmishNudgesEnabled: "gv_first_skirmish_nudges_enabled",
            startedWhilePlayerWasAway: "gv_started_while_player_was_away",
            voTrackers: {
                almostDone: "gv_first_skirmish_vo_tracker_almostDone",
                leaveFirstTime: "gv_first_skirmish_vo_tracker_leaveFirstTime",
                reminderToReturnToVillage: "gv_first_skirmish_vo_tracker_reminderToReturnToVillage",
                autoComplete: "gv_first_skirmish_vo_tracker_autoComplete",
                returnToOccupiedVillage: "gv_first_skirmish_vo_tracker_returnToOccupiedVillage",
                playerDefeatsOccupyingPiglins: "gv_first_skirmish_vo_tracker_playerDefeatsOccupyingPiglins",
                playerClearsOccupation: "gv_first_skirmish_vo_tracker_playerClearsOccupation"
            },
            firstSkirmishSurgeVillageChest: "gv_first_skirmish_surge_village_chest"
        },
        consts: {
            timeToTriggerFirstVO: 1,
            timeToTriggerNudgeAfterVO: 4,
            timeToTriggerVOReminder: 120,
            timeToTriggerHint: 40,
            villageAttackDuration: 150,
            timeToReminderToReturnToVillage: 30
        },
        message: {
            onboardingNudge: "onboarding_first_skirmish_nudge",
            abandonedNudge: "onboarding_first_skirmish_abandoned_nudge",
            repairFountainNudge: "onboarding_first_skirmish_repiar_nudge",
            hint: ""
        },
        vo: {
            intro: "",
            reminder: "onboarding_first_skirmish_reminder",
            complete: "onboarding_act1villageattacksuccess_1",
            villageAttackStart: "onboarding_act1villageattackusecompass_1",
            almostDone: "onboarding_act1_village_attack_almost_done",
            leaveFirstTime: "onboarding_act1_village_attack_player_leaves_first_time",
            reminderToReturnToVillage: "onboarding_act1_village_attack_remind_player_to_return_to_village",
            autoComplete: "onboarding_act1_village_attack_autocompletes_while_player_is_away",
            returnToOccupiedVillage: "onboarding_act1_village_attack_player_returns_to_occupied_village",
            playerDefeatsOccupyingPiglins: "onboarding_act1_village_attack_player_defeats_occupation_piglins",
            playerClearsOccupation: "onboarding_act1_village_attack_player_clears_occupation"
        },
        cinematic: "hrd00_c04_barrack_destroyed",
        occupationClearedCinematic: "hrd00_c07_fountain_restored",
        miscReminders: {
            barracksBuildSpawnersVO: "onboarding_barracks_spawner_reminder",
            timeTobarracksVillageBuildSpawnersVO: 30
            //Barracks check the second village build spawners so no need for a "has" value here
        }
    },
    threePiglinCamps: {
        id: "threePiglinCamps",
        tutorialKey: "",
        tutorialHintUnlock: "",
        onboardingCompleteResource: "unlock_onboarding_three_piglin_camps",
        global: {
            stepComplete: "gv_onboarding_three_piglin_camps_completed",
            isThisStepCurrentlyActive: "gv_onboarding_three_piglin_camps_active",
            hasUpdateMapControllers: "gv_has_updated_mar_controllers_three_camps",
            campsDestroyed: "gv_piglin_camps_destroyed",
            campDestroyedVOToPlay: "gv_piglin_camp_vo_to_play",
            nextCampIsTheLast: "gv_next_camp_is_the_last",
            barracksTracker: "gv_three_camps_barracks_tracker",
            goToCampsReminder: "gv_go_to_camps_reminder",
            currentPlayersAtCamp: "gv_players_at_camp",
            reminderStopper: "gv_three_camps_reminder_stopper"
        },
        bases: {
            archetype: "badger:piglin_dbb_three_outposts",
            factionName: FACTION_NAME_DBB,
            sizes: [BASE_SIZE_ACT_1_A, BASE_SIZE_ACT_1_B, BASE_SIZE_ACT_1_C]
        },
        consts: {
            timeToTriggerFirstVO: 10,
            timeToTriggerNudgeAfterVO: 8,
            timeToTriggerVOReminder: 180,
            timeToTriggerHint: 40,
            postDetroyCampVODelay: 1,
            timeToPlayPeepCinematic: 12,
            timeGoToCampsReminder: 5 * 60
        },
        message: {
            onboardingNudge: "onboarding_three_piglin_camps_nudge_3",
            onboardingNudges: ["onboarding_three_piglin_camps_nudge_3", "onboarding_three_piglin_camps_nudge_2", "onboarding_three_piglin_camps_nudge_1"],
            hint: ""
        },
        vo: {
            intro: "onboarding_piglin_camps_prompt",
            reminder: "onboarding_piglin_camps_reminder",
            firstCampDestroyed: "onboarding_piglin_camp_destroyed_1",
            secondCampDestroyed: "onboarding_piglin_camp_destroyed_2",
            netheSpreaderCampDestroyedReaction: "onboarding_piglin_camp_destroyed_4",
            complete: "onboarding_piglin_camp_destroyed_3",
            lavaMoatGateBreached: "piglin_camp2_breach",
            goToCampsReminder1: "piglin_outpost_reminder_1",
            goToCampsReminder2: "piglin_outpost_reminder_2"
        },
        timers: {
            goToCampsReminderTimer: "go_to_camps_reminder_timer"
        },
        cinematic: {
            firstPeepCine: "mst03_c03a_creeper_fmv",
            creeperCoPeepCine: "mst03_c03b_creeper_and_co_fmv",
            cinematic1: "hrd00_c04_barrack_destroyed",
            cinematic2: "hrd00_c06_camp_destroyed"
        },
        hudItem: ["mobs", "badger:spawner_wood_golem", "badger:spawner_stone_golem"]
    },
    wofUpgrade: {
        id: "wofUpgrade",
        tutorialKey: "",
        tutorialHintUnlock: "",
        tutorialResource: "unlock_onboarding_welloffate_complete",
        primsarineToTriggerTutorialNudge: 25,
        atWellOfFateTutorialHintUnlock: "unlock_onboarding_welloffate_tut",
        onboardingCompleteResource: "unlock_onboarding_wof_upgrade",
        neededResourceToAllowUpgrade: "unlock_iron_tech",
        cinematic: "gol06_c00_cavalry_intro_fmv",
        upgradeStructureTag: "unlock_gather_uncommon",
        global: {
            stepComplete: "gv_onboarding_wof_upgrade_completed",
            isThisStepCurrentlyActive: "gv_onboarding_wof_upgrade_active",
            hasPlayerOpenedSongBook: "gv_onboarding_wof_player_opened_songbook",
            hasPlayedSongBookReminderVO: "gv_onboarding_has_played_song_book_reminder_vo",
            hasReturnedToWoF: "gv_has_returned_to_wof",
            hasAwardedThePlayerWithFurtherUnlocks: "gv_has_awarded_player_with_further_unlocks",
            hasPlayedNavigatedToUpgradePage: "gv_has_played_navigated_to_upgrade_page",
            hasPlacedUpgradeInHotbar: "gv_has_placed_upgrade_into_hotbar"
        },
        consts: {
            timeToTriggerFirstVO: 2,
            timeToTriggerNudgeAfterVO: 12,
            timeToTriggerVOReminder: 31,
            timeToTriggerHint: 40,
            timeToTriggerReturnToWofVO: 2,
            timeToTriggerNudgeAfterWellOfFateVO: 8,
            timeToTriggerOpenSongBookReminderVO: 120
        },
        message: {
            onboardingNudge: "onboarding_return_to_well_of_fate_nudge",
            atWellOfFateNudge: "onboarding_at_well_of_fate_nudge",
            buildIronUpgradeNudge: "onboarding_build_iron_upgrade_nudge",
            hint: ""
        },
        vo: {
            intro: "onboarding_return_wof_1",
            reminder: "onabording_return_wof_2",
            returnedToWoF: "onboarding_return_wof_4",
            hasOpenedSongBook: "main_songbook",
            navigatedToUpgradePage: "onboarding_songbook_tab",
            builtUpgradeStrucutre: "onboarding_upgrade_mossy",
            openSongbookReminder: "onboarding_songbook_nudge",
            ironRecipeUnlocked: "onboarding_upgrade_mossy",
            buildUpgradeStructureReminder: "onboarding_upgrade_1",
            complete: "onboarding_iron_recipe_unlocked",
            buildIronUpgrade: "onboarding_player_places_iron_improvmenet_in_hotbar"
        }
    },
    secondSkirmish: {
        id: "secondSkirmish",
        tutorialKey: "fast_travel",
        tutorialHintUnlock: "",
        onboardingCompleteResource: "unlock_onboarding_second_skirmish",
        village: {
            piglinFactionName: FACTION_NAME_DBB,
            villageArchetype: "badger:piglin_dbb_second_skirmish",
            baseSize: BASE_SIZE_ACT1_NON_PORTAL_ATTACK_BASE,
            placementSlot: "act1DBB"
        },
        global: {
            stepComplete: "gv_onboarding_second_skirmish_completed",
            isThisStepCurrentlyActive: "gv_onboarding_second_skirmish_active",
            hasUpdateMapControllers: "gv_has_updated_mar_controllers_second_skirmish",
            hasPlayedFirstWaveStinger: "gv_second_skirmish_has_played_first_wave_stinger",
            numOfCorePiglinStructuresDestroyed: "gv_num_of_core_piglin_structures_destroyed",
            barracksTracker: "gv_second_skirmish_barracks_tracker",
            hasUpdatedNudge: "gv_has_updated_nudge",
            hasUpdatedTelemetry: "gv_has_updated_telemetry",
            playerBuildingsResponseOnCooldown: "gv_react_to_player_building_cooldown",
            hasPlayedNightfallFmv: "gv_has_played_night_fall_fmv"
        },
        consts: {
            timeToTriggerFirstVO: 1,
            timeToTriggerNudgeAfterVO: 4,
            timeToTriggerVOReminder: 31,
            timeToTriggerHint: 40,
            timeToSecondSkirmish: 6,
            timeToSecondSkirmishFastTravelReminder: 15,
            timeToSecondSkirmishSecondNudge: 13,
            responseCooldown: 20,
            playerBuildingResponseCooldown: 20,
            celebration: {
                data: "celebration",
                duration: 0.8,
                range: 100.0,
                includeTags: ["mob"],
                excludeTags: ["piglin"]
            }
        },
        message: {
            onboardingNudge: "onboarding_second_skirmish_nudge",
            secondOnboardingNudge: "onboarding_second_skirmish_arrived_nudge",
            hint: ""
        },
        vo: {
            intro: "onboarding_second_skirmish_prompt",
            reminder: "",
            complete: ""
        },
        cinematic: "hrd00_c06_camp_destroyed"
    },
    destroyDBB: {
        id: "destroyDBB",
        tutorialKey: "",
        tutorialHintUnlock: "",
        onboardingCompleteResource: "",
        global: {
            stepComplete: "gv_onboarding_destroy_dbb_completed",
            isThisStepCurrentlyActive: "gv_onboarding_destroy_dbb_active",
            hasApproachedDbb: "gv_has_appraoched_dbb",
            playNightFall: "gv_play_nightfall_fmv"
        },
        consts: {
            timeToTriggerNudgeAfterVO: 15,
            timeToTriggerNightFallFMV: 6
        },
        message: {
            onboardingNudge: "onboarding_find_and_destroye_dbb",
            onboardingNudgeAfterOutpostNoApproach: "onboarding_destroy_dbb_after_outpost_built",
            onboardingNudgeApproachNoOutpost: "onboarding_destroy_dbb_no_outpost_built",
            onboardingNudgeApprachedBuiltOutpost: "onboarding_mobAlliance_lure_unlocked"
        }
    },
    respawn: {
        id: "respawn",
        vo: {
            intro: "onboarding_respawn_firsttime"
        },
        global: {
            hasPlayerRespawned: "gv_has_player_respawned"
        },
        consts: {
            timeToIntroVo: 13
        }
    },
    outpost: {
        id: "outpost",
        tutorialKey: "outposts",
        vo: {
            intro: "onboarding_outpost",
            respawn: "onboarding_respawn_reminder"
        },
        global: {
            hasBuiltAnOutpost: "gv_has_built_an_outpost",
            outpostNudgeIsActive: "gv_outpost_nudge_is_active"
        },
        consts: {
            outpostTag: "outpost",
            timeToTellPlayerAboutGivenResources: 10,
            timeToOutpostTutorial: 21
        },
        message: {
            onboardingNudge: "onboarding_build_outpost_dbb",
            onboardingAfterRespawnNudge: ""
        }
    }
}

const tutorialNudgeByPassTracker = {
    gatherTutorial: "gv_gather_tutorial",
    buildTutorial: "gv_build_tutorials"
}

const act1FailureTracker = {
    [act1FlowVal.freeSecondVillage.id]: {
        fountainHealthThresholds: [],
        fountainVO: ""
    },
    [act1FlowVal.firstSkirmish.id]: {
        fountainHealthThresholds: [0.75, 0.5, 0.25],
        fountainVO: "onboarding_act1villageattackfountaindamage_1",
        message: "onboarding_act1_first_skirmish_village_fountain_damaged",
        cooldown: 45,
        tracker: "gv_first_skirmish_failure_on_cooldown"
    },
    [act1FlowVal.secondSkirmish.id]: {
        fountainHealthThresholds: [0.75, 0.5, 0.25],
        fountainVO: "",
        message: "onboarding_act1_first_skirmish_village_fountain_damaged",
        cooldown: 45,
        tracker: "gv_second_skirmish_failure_on_cooldown"
    }
}

/*
* note these must be half of the width of the trigger volumes in:
    badger:spatial_trigger_act1_tower_camp respectively,
    badger:spatial_trigger_act1_base_first_threshold,
    badger:spatial_trigger_act1_base_gameplay_area

*/
const act1OutpostTriggerRadii = {
    [BASE_SIZE_ACT_1_A]: 37.5,
    [BASE_SIZE_ACT_1_B]: 80,
    [BASE_SIZE_ACT_1_C]: 100
}

const act1FlowIds = [act1FlowVal.findVillageUnderAttack.id, act1FlowVal.firstVillageUnderAttack.id, act1FlowVal.repairFountain.id, act1FlowVal.findSecondVillage.id, act1FlowVal.freeSecondVillage.id, act1FlowVal.villageChest.id, act1FlowVal.buildDefesesInSecondVillage.id, act1FlowVal.firstSkirmish.id, act1FlowVal.threePiglinCamps.id, act1FlowVal.wofUpgrade.id, act1FlowVal.secondSkirmish.id, act1FlowVal.destroyDBB.id]

const campaignTelemetryIdDictionary = {
    [act1FlowVal.findVillageUnderAttack.id]: TELEMETRY_ONBOARDING_CATEGORIES.FIND_VILLAGE_UNDER_ATTACK,
    [act1FlowVal.firstVillageUnderAttack.id]: TELEMETRY_ONBOARDING_CATEGORIES.FIRST_VILLAGE_UNDER_ATTACK,
    [act1FlowVal.repairFountain.id]: TELEMETRY_ONBOARDING_CATEGORIES.REPAIR_FOUNTAIN,
    [act1FlowVal.findSecondVillage.id]: TELEMETRY_ONBOARDING_CATEGORIES.FIND_SECOND_VILLAGE,
    [act1FlowVal.freeSecondVillage.id]: TELEMETRY_ONBOARDING_CATEGORIES.FREE_SECOND_VILLAGE,
    [act1FlowVal.buildDefesesInSecondVillage.id]: TELEMETRY_ONBOARDING_CATEGORIES.BUILD_DEFENSES_IN_SECOND_VILLAGE,
    [act1FlowVal.firstSkirmish.id]: TELEMETRY_ONBOARDING_CATEGORIES.FIRST_SKIRMISH,
    [act1FlowVal.threePiglinCamps.id]: TELEMETRY_ONBOARDING_CATEGORIES.THREE_PIGLIN_CAMPS,
    [act1FlowVal.wofUpgrade.id]: TELEMETRY_ONBOARDING_CATEGORIES.WOF_UPGRADE,
    [act1FlowVal.secondSkirmish.id]: TELEMETRY_ONBOARDING_CATEGORIES.SECOND_SKIRMISH,
    [act1FlowVal.destroyDBB.id]: TELEMETRY_ONBOARDING_CATEGORIES.DESTROY_DBB
}

const campaignFountainAudioStatesDictionary = {
    [act1FlowVal.findVillageUnderAttack.id]: "occupied",
    [act1FlowVal.firstVillageUnderAttack.id]: "occupied",
    [act1FlowVal.buildDefesesInSecondVillage.id]: "incoming_attack",
    [act1FlowVal.threePiglinCamps.id]: "incoming_attack",
    [act1FlowVal.secondSkirmish.id]: "occupied"
}

const campaignOnboardingNudgeTracker = {
    [act1FlowVal.findVillageUnderAttack.message.onboardingNudge]: 1,
    [act1FlowVal.firstVillageUnderAttack.message.onboardingNudge]: 2,
    [act1FlowVal.repairFountain.message.onboardingNudge]: 3,
    [act1FlowVal.findSecondVillage.message.onboardingNudge]: 4,
    [act1FlowVal.freeSecondVillage.message.onboardingNudge]: 5,
    [act1FlowVal.villageChest.message.onboardingNudge]: 6,
    [act1FlowVal.buildDefesesInSecondVillage.message.onboardingNudge]: 7,
    [act1FlowVal.firstSkirmish.message.onboardingNudge]: 8,
    [act1FlowVal.firstSkirmish.message.repairFountainNudge]: 9,
    [act1FlowVal.threePiglinCamps.message.onboardingNudge]: 10,
    [act1FlowVal.threePiglinCamps.message.onboardingNudges[0]]: 11,
    [act1FlowVal.threePiglinCamps.message.onboardingNudges[1]]: 12,
    [act1FlowVal.threePiglinCamps.message.onboardingNudges[2]]: 13,
    [act1FlowVal.wofUpgrade.message.onboardingNudge]: 14,
    [act1FlowVal.wofUpgrade.message.atWellOfFateNudge]: 15,
    [act1FlowVal.wofUpgrade.message.buildIronUpgradeNudge]: 16,
    [act1FlowVal.secondSkirmish.message.onboardingNudge]: 17,
    [act1FlowVal.secondSkirmish.message.secondOnboardingNudge]: 18,
    [act1FlowVal.outpost.message.onboardingNudge]: 19,
    [act1FlowVal.destroyDBB.message.onboardingNudge]: 20,
    [act1FlowVal.destroyDBB.message.onboardingNudgeAfterOutpostNoApproach]: 21,
    [act1FlowVal.destroyDBB.message.onboardingNudgeApproachNoOutpost]: 22,
    [act1FlowVal.destroyDBB.message.onboardingNudgeApprachedBuiltOutpost]: 23
}

const _SetupFailureCondition = () => {
    if (!IsCurrentAct(ACTS.ACT_1A)) return
    const secondVillage = _GetSecondVillageEntity()
    if (HasEntities(secondVillage)) {
        const currentStep = _GetCurrentOnboadingStep()
        const fountain = _GetSecondVillageFountain()
        const failureCheck = act1FailureTracker[currentStep]
        const secondVillageId = QUERY_GetVillageIDFromEntity(secondVillage)

        if (HasEntities(fountain)) {
            failureCheck.fountainHealthThresholds.forEach((threshold) => {
                LISTENFOR_HealthChanged({
                    snippet: "hc_fountain_failure_check",
                    ownerVillageId: secondVillageId,
                    entities: fountain,
                    normalizedThreshold: threshold,
                    triggerMode: HEALTH_TRIGGER_MODE.CROSS,
                    direction: HEALTH_DIRECTION.DAMAGE
                })
            })

            if (failureCheck.fountainVO !== "") {
                LISTENFOR_HealthChanged({
                    snippet: "hc_fountain_failure_check_vo",
                    ownerVillageId: secondVillageId,
                    entities: fountain,
                    direction: HEALTH_DIRECTION.DAMAGE
                })
            }

            if (act1FlowVal[currentStep].id === act1FlowVal.freeSecondVillage.id) {
                LISTENFOR_EntityDisabled({
                    snippet: "ed_fountain_free_second_village_fountain_disabled",
                    ownerVillageId: secondVillageId,
                    villageId: secondVillageId,
                    disabledEntity: fountain
                })
            } else if (act1FlowVal[currentStep].id === act1FlowVal.firstSkirmish.id) {
                LISTENFOR_EntityDisabled({
                    snippet: "ed_fountain_first_skirmish_fountain_disabled",
                    ownerVillageId: secondVillageId,
                    villageId: secondVillageId,
                    disabledEntity: fountain
                })
            }
        } else {
            if (act1FlowVal[currentStep].id === act1FlowVal.firstSkirmish.id) {
                IncrementGlobal(act1FlowVal.firstSkirmish.global.startedWhilePlayerWasAway)
                Logi("@@@@ Couldn't find fountain. Will Setup failure condition when the player returns @@@@")
            }
        }
    }
}

SNIPPET_HealthChanged("hc_fountain_failure_check", (entity) => {
    if (!IsCurrentAct(ACTS.ACT_1A)) {
        Once()
        return
    }
    const currentStep = _GetCurrentOnboadingStep()
    if (QUERY_GetGlobalVariable(act1FlowVal[currentStep].global.isThisStepCurrentlyActive) > 0) {
        const failureCheck = act1FailureTracker[currentStep]
        Logi("@@@@@ hc_fountain_failure_check @@@@@  " + QUERY_GetGlobalVariable(failureCheck.tracker))
        if (QUERY_GetGlobalVariable(failureCheck.tracker) === 0) {
            let closePlayers = FILTER_ByDistance(GetAllPlayers(), entity, 400)
            if (HasEntities(closePlayers)) {
                IncrementGlobal(failureCheck.tracker)
                while (HasEntities(closePlayers)) {
                    const player = RandomEntity(closePlayers)
                    OUTPUT_AnnouncePlayer(failureCheck.message, [], player)
                    closePlayers = OPER_Difference(closePlayers, player)
                }
                LISTENFOR_LocalTimer({
                    snippet: "lt_failure_hud_message",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    waitTime: failureCheck.cooldown
                })
            }
        }
    }
    Once()
})

SNIPPET_HealthChanged("hc_fountain_failure_check_vo", (entity) => {
    if (!IsCurrentAct(ACTS.ACT_1A)) {
        Once()
        return
    }
    const currentStep = _GetCurrentOnboadingStep()
    Logi("@@@ act1FlowVal[currentStep].id @@@" + act1FlowVal[currentStep].id)
    if (QUERY_GetGlobalVariable(act1FlowVal[currentStep].global.isThisStepCurrentlyActive) > 0) {
        const failureCheck = act1FailureTracker[currentStep]
        if (failureCheck !== undefined) {
            if (failureCheck.fountainVO !== "") {
                PlayPresentationActionToClosePlayers(failureCheck.fountainVO, entity)
            }
        }
    }
    Once()
})

SNIPPET_EntityDisabled("ed_fountain_first_skirmish_fountain_disabled", (_fountain) => {
    if (!IsCurrentAct(ACTS.ACT_1A)) {
        Once()
        return
    }
    const currentStep = _GetCurrentOnboadingStep()
    if (act1FlowVal[currentStep].id === act1FlowVal.firstSkirmish.id) {
        IncrementGlobal(act1FlowVal.firstSkirmish.global.nudgeTracker)
        UpdateFirstSkirmishNudge()
    } else {
        Once()
    }
})

SNIPPET_EntityDisabled("ed_fountain_free_second_village_fountain_disabled", (fountain) => {
    if (!IsCurrentAct(ACTS.ACT_1A)) {
        Once()
        return
    }
    const currentStep = _GetCurrentOnboadingStep()
    if (act1FlowVal[currentStep].id === act1FlowVal.freeSecondVillage.id) {
        IncrementGlobal(act1FlowVal.freeSecondVillage.global.fountainDisabled)
        const villageId = QUERY_GetVillageIDFromEntity(fountain)
        SetVillageAudioDefault(villageId, "occupied")
        const villageAttackAudioEntity = GetAudioEntityForBase(villageId, "invasion_attack_music_entity")
        OUTPUT_DestroyEntities(villageAttackAudioEntity)
    }
    Once()
})

SNIPPET_LocalTimer("lt_failure_hud_message", () => {
    const currentStep = _GetCurrentOnboadingStep()
    const failureCheck = act1FailureTracker[currentStep]
    if (failureCheck !== undefined) {
        OUTPUT_SetGlobalVariable(failureCheck.tracker, 0)
    }
})

const _ResetFountainAudioState = (villageId) => {
    Logi("!!!!  _ResetFountainAudioState !!!!")
    SetVillageAudioDefault(villageId, "default")
}

const _ResetFountainAudioStateForAllVillages = () => {
    let entities = FILTER_ByFactionName(QUERY_GetAllVillages(), CULTURE_NAME_VILLAGERS)
    while (HasEntities(entities)) {
        const ent = RandomEntity(entities)
        SetVillageAudioDefault(QUERY_GetVillageIDFromEntity(ent), "default")
        entities = OPER_Difference(entities, ent)
    }
}

const _GetOnboardingVillage = (currentOnboardingStep) => {
    switch (currentOnboardingStep) {
        case act1FlowVal.findVillageUnderAttack.id:
        case act1FlowVal.firstVillageUnderAttack.id:
        case act1FlowVal.repairFountain.id:
            return _GetFirstVillageEntity()
        case act1FlowVal.findSecondVillage.id:
        case act1FlowVal.freeSecondVillage.id:
        case act1FlowVal.villageChest.id:
        case act1FlowVal.buildDefesesInSecondVillage.id:
        case act1FlowVal.secondSkirmish.id:
        case act1FlowVal.firstSkirmish.id:
            return _GetSecondVillageEntity()
        case act1FlowVal.threePiglinCamps.id:
            return _GetThirdVillageEntity()
        default:
            Loge("No onboarding village found " + currentOnboardingStep)
    }
    return EMPTY_ENTITY_GROUP
}

const _UpdateFountainAudioState = () => {
    const currentOnboardingStep = _GetCurrentOnboadingStep()
    if (currentOnboardingStep !== undefined) {
        const state = campaignFountainAudioStatesDictionary[currentOnboardingStep]
        Logi("~~~~~ _UpdateFountainAudioState currentOnboaridngStep ~~~~ " + _GetCurrentOnboadingStep())
        if (state !== undefined) {
            if (state !== "") {
                Logi("~~~~~ _UpdateFountainAudioState state~~~~ " + state)
                const village = _GetOnboardingVillage(currentOnboardingStep)
                if (HasEntities(village)) {
                    SetVillageAudioDefault(QUERY_GetVillageIDFromEntity(village), state)
                }
            }
        }
    }
}

const _UpdateCurrentObjectiveAfterLoad = () => {
    let onboardingNudge = ""
    OUTPUT_AnnounceInterrupt(ONBOARDING_MESSAGE_PRIORITY)
    const currentOnboardingId = _GetCurrentOnboadingStep()
    OUTPUT_SetGlobalVariable(act1FlowVal.misc.activeOnboardingNudge, 0)
    if (currentOnboardingId !== undefined) {
        OUTPUT_UpdateHUDVisibility("hud_compass", true)
        Logi("~~~~~~~~~~~~~currentOnboardingId is defined~~~~~~~~~~~  " + currentOnboardingId)
        const currentOnboardingData = act1FlowVal[currentOnboardingId]
        onboardingNudge = currentOnboardingData.message.onboardingNudge
        //Reset unneeded icons
        _UpdateIconDistanceForFaction(CULTURE_NAME_VILLAGERS, 250, 0)
        _UpdateIconDistanceForFaction(FACTION_POI_ALL, 250, 0)
        _UpdateIconDistanceForFaction(FACTION_MOB_ALLIANCES, 0, 0)
        _UpdateFountainAudioState()

        const firstVillage = _GetFirstVillageEntity()
        const secondVillage = _GetSecondVillageEntity()
        //const thirdVillage = _GetThirdVillageEntity()
        switch (currentOnboardingId) {
            case act1FlowVal.findVillageUnderAttack.id:
            case act1FlowVal.firstVillageUnderAttack.id:
            case act1FlowVal.repairFountain.id:
                _UpdateIconDistanceForEntity(firstVillage, -1, 20)
                break
            case act1FlowVal.findSecondVillage.id:
                OUTPUT_SetGlobalVariable(act1FlowVal.findSecondVillage.hasIntroCinePlayed, 0)
                _UpdateIconDistanceForEntity(secondVillage, -1, 20)
                break
            case act1FlowVal.freeSecondVillage.id:
                if (QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.fountainDisabled) > 0 && QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.allPiglinsDefeated) > 0) {
                    onboardingNudge = act1FlowVal.freeSecondVillage.message.repairFountain
                }
                _UpdateIconDistanceForEntity(secondVillage, -1, 20)
            case act1FlowVal.villageChest.id:
            case act1FlowVal.buildDefesesInSecondVillage.id:
                _UpdateIconDistanceForEntity(secondVillage, -1, 20)
                break
            case act1FlowVal.firstSkirmish.id:
                _UpdateIconDistanceForEntity(secondVillage, -1, 20)
                onboardingNudge = UpdateFirstSkirmishNudge()
                break
            case act1FlowVal.threePiglinCamps.id:
                //_UpdateIconDistanceForEntity(thirdVillage, -1, 20)

                const campsDestroyedCount = QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.campsDestroyed)
                if (campsDestroyedCount < act1FlowVal.threePiglinCamps.message.onboardingNudges.length) {
                    onboardingNudge = act1FlowVal.threePiglinCamps.message.onboardingNudges[campsDestroyedCount]
                }
                break
            case act1FlowVal.wofUpgrade.id:
                const wellOfFateVillage = GetVillageEntityFromFaction(WELL_OF_FATE)
                _UpdateIconDistanceForEntity(wellOfFateVillage, -1, 20)
                if (QUERY_GetGlobalVariable(act1FlowVal.wofUpgrade.global.hasReturnedToWoF) === 0) {
                    OUTPUT_SetGlobalVariable(act1FlowVal.wofUpgrade.global.hasPlayerOpenedSongBook, 0)
                    OUTPUT_SetGlobalVariable(act1FlowVal.misc.miscVO.fastTravel.tracker, 0)
                    onboardingNudge = ""
                    _StartLinearOnboardingMessages(act1FlowVal.wofUpgrade)
                    LISTENFOR_LocalTimer({
                        snippet: "lt_fast_travel_onboarding",
                        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                        waitTime: act1FlowVal.misc.miscVO.fastTravel.timers.timeToTellPlayerAboutFastTravel
                    })
                    _GivePlayerNeedeResourcesToBuildUpgrade()
                } else {
                    const hotBarCheck = QUERY_GetGlobalVariable(act1FlowVal.wofUpgrade.global.hasPlacedUpgradeInHotbar)
                    OUTPUT_SetEmphasizedHUDItem("village", true)
                    onboardingNudge = hotBarCheck > 0 ? act1FlowVal.wofUpgrade.message.buildIronUpgradeNudge : act1FlowVal.wofUpgrade.message.atWellOfFateNudge
                    _GivePlayerNeedeResourcesToBuildUpgrade()
                }
                break
            case act1FlowVal.secondSkirmish.id:
                const secondSkirmish = FILTER_ByVillageSize(FILTER_ByFactionName(QUERY_GetAllVillages(), FACTION_NAME_DBB), BASE_SIZE_ACT1_NON_PORTAL_ATTACK_BASE)
                if (HasEntities(secondSkirmish)) {
                    _UpdateIconDistanceForEntity(secondSkirmish, -1, 20)
                }
                if (QUERY_GetGlobalVariable(act1FlowVal.secondSkirmish.global.hasUpdatedNudge) > 0) {
                    onboardingNudge = act1FlowVal.secondSkirmish.message.secondOnboardingNudge
                }
                break
            case act1FlowVal.destroyDBB.id:
                onboardingNudge = _GetOutpostOnboardingMessage()
                const finalSkirmish = FILTER_ByVillageSize(FILTER_ByFactionName(QUERY_GetAllVillages(), FACTION_NAME_DBB), BASE_SIZE_ACT1_NON_PORTAL_ATTACK_BASE)
                if (HasEntities(finalSkirmish)) {
                    if (QUERY_IsVillageDestroyed(finalSkirmish)) {
                        _CampaignAct1AEnd()
                    }
                }
                break
        }
    } else if (IsCurrentAct(ACTS.ACT_1B)) {
        OUTPUT_UpdateHUDVisibility("hud_compass", true)
        onboardingNudge = _GetOutpostOnboardingMessage()
    }
    if (onboardingNudge !== "") {
        LISTENFOR_LocalTimer({
            snippet: "lt_show_onboarding_message_after_load",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 6,
            payloadString: onboardingNudge
        })
    }
}

SNIPPET_LocalTimer("lt_show_onboarding_message_after_load", (payload) => {
    _ShowOnboardingMessage(payload.string)
    if (payload.string === act1FlowVal.findVillageUnderAttack.message.onboardingNudge) {
        _UpdateIconDistanceForEntity(_GetFirstVillageEntity(), -1, 20)
    }
})

const _CheckIfStepIsComplete = (flowStepData) => {
    if (QUERY_GetGlobalVariable(flowStepData.global.stepComplete) > 0 || QUERY_GetGlobalVariable(act1FlowVal.misc.skipAct1Flow) > 0) {
        return true
    }
    return false
}

const _CheckIfStepIsCompleteOrActive = (flowStepData) => {
    if (_CheckIfStepIsComplete(flowStepData) || QUERY_GetGlobalVariable(flowStepData.global.isThisStepCurrentlyActive) > 0) {
        return true
    }
    return false
}

const _SetOnboardingAsCurrentStep = (onboadingStepData) => {
    Logi(" _SetOnboardingAsCurrentStep = " + onboadingStepData.id)
    OUTPUT_SetGlobalVariable(onboadingStepData.global.isThisStepCurrentlyActive, 1)
}

const _MarkAct1StepAsComplete = (onboadingStepData, interruptOnboardingMessage = true) => {
    Logi(" _MarkAct1StepAsComplete = " + onboadingStepData.id)
    OUTPUT_SetGlobalVariable(onboadingStepData.global.isThisStepCurrentlyActive, 0)
    OUTPUT_SetGlobalVariable(onboadingStepData.global.stepComplete, 1)
    OUTPUT_TriggerTutorialBypass(onboadingStepData.tutorialKey)
    _GrantCompleteUnlockResource(onboadingStepData)
    if (interruptOnboardingMessage) {
        _InterruptOnboardingMessage(true)
    }
}

const _GetCurrentOnboadingStep = () => {
    let currentStepId = undefined
    act1FlowIds.forEach((act1OnboardingId) => {
        const onboardingData = act1FlowVal[act1OnboardingId]
        if (QUERY_GetGlobalVariable(onboardingData.global.isThisStepCurrentlyActive) > 0) {
            currentStepId = act1OnboardingId
        }
    })

    return currentStepId
}

const _TriggerAct1StepTutorialHint = (onboardingData) => {
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), onboardingData.tutorialKey, onboardingData.tutorialHintUnlock)
}

const _GrantCompleteUnlockResource = (onboardingData) => {
    if (onboardingData.onboardingCompleteResource !== "") {
        if (QUERY_GetCampaignResource(onboardingData.onboardingCompleteResource) === 0) {
            OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, onboardingData.onboardingCompleteResource, 1, false)
        }
    }
}

const _UnlockRemainingWoFUpgrades = () => {
    if (QUERY_GetCampaignResource(act1FlowVal.misc.remainingWoFUpgradesUnlock) === 0) {
        LISTENFOR_LocalTimer({
            snippet: "lt_unlock_remaining_wof_upgrades",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 10
        })
    } else {
        _CompletetWellOfFateUpgradeStep()
    }
}

SNIPPET_LocalTimer("lt_unlock_remaining_wof_upgrades", () => {
    if (DoOnce(act1FlowVal.wofUpgrade.global.hasAwardedThePlayerWithFurtherUnlocks)) {
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, act1FlowVal.misc.remainingWoFUpgradesUnlock, 1, false)
        _CompletetWellOfFateUpgradeStep()
    }
})

const AreWeShowingThisAct1NudgeForAllPlayers = (message) => {
    return QUERY_GetGlobalVariable(act1FlowVal.misc.activeOnboardingNudge) === campaignOnboardingNudgeTracker[message]
}

const _ShowOnboardingMessage = (message, delay = 2) => {
    if (message === "") {
        return
    }
    //We need to make sure the message doesn't interrupt itself (can happen when saving and loading)
    Logi("@@@ QUERY_GetGlobalVariable(act1FlowVal.misc.activeOnboardingNudge) @@@ " + QUERY_GetGlobalVariable(act1FlowVal.misc.activeOnboardingNudge) + " @@@ " + campaignOnboardingNudgeTracker[message])
    if (QUERY_GetGlobalVariable(act1FlowVal.misc.activeOnboardingNudge) !== campaignOnboardingNudgeTracker[message]) {
        OUTPUT_SetGlobalVariable(act1FlowVal.misc.activeOnboardingNudge, campaignOnboardingNudgeTracker[message])
        _InterruptOnboardingMessage(true)

        LISTENFOR_LocalTimer({
            snippet: "lt_show_onboarding_message",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: delay,
            payloadString: message
        })
    }
}

SNIPPET_LocalTimer("lt_show_onboarding_message", (payload) => {
    ShowOnboardingMessage(payload.string, true)
})

const _InterruptOnboardingMessage = () => {
    InterruptOnboardingMessage(true)
}

const _ArePlayersNearby = (entity, distance) => {
    const players = GetPlayers()

    const nearbyPlayers = FILTER_ByDistance(players, entity, distance)
    return HasEntities(nearbyPlayers)
}

const _GetFirstVillageEntity = () => {
    return FILTER_ByTagFilter(GetAllFriendlyVillages(), [act1FlowVal.misc.firstVillageTag], [])
}

const _GetSecondVillageEntity = () => {
    return FILTER_ByTagFilter(GetAllFriendlyVillages(), [act1FlowVal.misc.secondVillageTag], [])
}

const _GetThirdVillageEntity = () => {
    return FILTER_ByTagFilter(GetAllFriendlyVillages(), [act1FlowVal.misc.thirdVillageTag], [])
}

const _GetAllCurrentPiglinBases = () => {
    return FILTER_ByFactionName(QUERY_GetAllVillages(), FACTION_NAME_DBB)
}

const _GetCurrentCampsNudge = () => {
    const index = QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.campsDestroyed)
    if (index < act1FlowVal.threePiglinCamps.message.onboardingNudges.length) {
        return act1FlowVal.threePiglinCamps.message.onboardingNudges[index]
    }
    return ""
}

const _GetFirstVillageFountain = () => {
    const firstUnderAttackVillage = _GetFirstVillageEntity()
    const villageId = QUERY_GetVillageIDFromEntity(firstUnderAttackVillage)
    const fountain = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [TAG_VILLAGE_FOUNTAIN], [])
    return fountain
}

const _GetSecondVillageFountain = () => {
    const secondUnderAttackVillage = _GetSecondVillageEntity()
    const villageId = QUERY_GetVillageIDFromEntity(secondUnderAttackVillage)
    const fountain = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [TAG_VILLAGE_FOUNTAIN], [])
    return fountain
}

const _GetThirdVillageFountain = () => {
    const thirdUnderAttackVillage = _GetThirdVillageEntity()
    const villageId = QUERY_GetVillageIDFromEntity(thirdUnderAttackVillage)
    const fountain = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [TAG_VILLAGE_FOUNTAIN], [])
    return fountain
}

const _UpdateIconDistanceForFaction = (faction, value, priority) => {
    let entities = FILTER_ByFactionName(QUERY_GetAllVillages(), faction)
    Logi("~~~~~~ _UpdateIconDistanceForFaction ~~~~~~~ " + QUERY_GetEntitiesCount(entities))
    while (HasEntities(entities)) {
        const ent = RandomEntity(entities)
        OUTPUT_SetOverrideForCompassMaxRange(ent, value)
        OUTPUT_SetIconPriority(ent, priority)
        entities = OPER_Difference(entities, ent)
    }
}

const _UpdateIconDistanceForEntity = (ent, value, priority) => {
    if (HasEntities(ent)) {
        OUTPUT_SetOverrideForCompassMaxRange(ent, value)
        OUTPUT_SetIconPriority(ent, priority)
    }
}

const _ResetIconDistanceForFaction = (faction) => {
    let entities = FILTER_ByFactionName(QUERY_GetAllVillages(), faction)
    while (HasEntities(entities)) {
        const ent = RandomEntity(entities)
        if (QUERY_HasOverrideForCompassMaxRange(ent)) {
            OUTPUT_ClearOverrideForCompassMaxRange(ent)
            OUTPUT_SetIconPriority(ent, 0)
        }
        if (faction === CULTURE_NAME_VILLAGERS) {
            OUTPUT_MapSetKeyValue(ent, MAP_KEY.ACT1_VILLAGE_STATE, MAP_ICON_STATE.DEFAULT)
            OUTPUT_MapSetKeyValue(ent, MAP_KEY.STATE, MAP_ICON_STATE.DEFAULT)
        }
        entities = OPER_Difference(entities, ent)
    }
}

const _ResetIconDistanceForEntity = (ent) => {
    if (HasEntities(ent)) {
        if (QUERY_HasOverrideForCompassMaxRange(ent)) {
            OUTPUT_ClearOverrideForCompassMaxRange(ent)
            OUTPUT_SetIconPriority(ent, 0)
        }
    }
}

const _ModulateCompassIconForActiveVillage = (vid, finalStepId) => {
    LISTENFOR_PlayerEnteredVillage({
        snippet: "pev_entered_modulated_village",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        villageId: vid,
        payloadString: finalStepId
    })
}

const _SetVillagersBehaviorAct1 = (vid) => {
    if (IsCurrentAct(ACTS.ACT_1B)) {
        _HandleNonTrinityVillageBehaviors(vid)
    } else {
        let firstVillageId = -1
        let secondVillageId = -1
        let thirdVillageId = -1

        const firstVillageEntity = _GetFirstVillageEntity()
        const secondVillageEntity = _GetSecondVillageEntity()
        const thirdVillageEntity = _GetThirdVillageEntity()

        if (HasEntities(firstVillageEntity)) firstVillageId = QUERY_GetVillageIDFromEntity(firstVillageEntity)
        if (HasEntities(secondVillageEntity)) secondVillageId = QUERY_GetVillageIDFromEntity(secondVillageEntity)
        if (HasEntities(thirdVillageEntity)) thirdVillageId = QUERY_GetVillageIDFromEntity(thirdVillageEntity)

        if (vid === firstVillageId) {
            _HandleFirstVillageBehaviors(vid)
        } else if (vid === secondVillageId) {
            _HandleSecondVillageBehaviors(vid)
        } else if (vid === thirdVillageId) {
            _HandleThirdVillageBehaviors(vid)
        } else {
            _HandleNonTrinityVillageBehaviors(vid)
        }
    }
}

const _HandleFirstVillageBehaviors = (vid) => {
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(vid)
    const villagers = FILTER_ByTagFilter(villageEntities, ["villager"], ["illager"])
    const illagers = FILTER_ByTagFilter(villageEntities, ["illager"], ["villager"])

    let villagersBehavior = VILLAGE_BEHAVIOR.villager.scared
    let illagersBehavior = VILLAGE_BEHAVIOR.illager.scared

    if (QUERY_GetGlobalVariable(act1FlowVal.findVillageUnderAttack.global.isThisStepCurrentlyActive) > 0) {
        villagersBehavior = VILLAGE_BEHAVIOR.villager.heavyScared
        illagersBehavior = VILLAGE_BEHAVIOR.illager.heavyScared
    } else if (QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.isThisStepCurrentlyActive) > 0) {
        if (QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.allPiglinsKilled) === 0) {
            villagersBehavior = VILLAGE_BEHAVIOR.villager.heavyScared
            illagersBehavior = VILLAGE_BEHAVIOR.illager.heavyScared
        } else {
            villagersBehavior = VILLAGE_BEHAVIOR.villager.sad
            illagersBehavior = VILLAGE_BEHAVIOR.illager.sad
        }
    } else if (QUERY_GetGlobalVariable(act1FlowVal.repairFountain.global.isThisStepCurrentlyActive) > 0) {
        villagersBehavior = VILLAGE_BEHAVIOR.villager.sad
        illagersBehavior = VILLAGE_BEHAVIOR.illager.sad
    } else if (QUERY_GetGlobalVariable(act1FlowVal.repairFountain.global.stepComplete) > 0) {
        villagersBehavior = VILLAGE_BEHAVIOR.villager.act2
        illagersBehavior = VILLAGE_BEHAVIOR.illager.act2
    }

    if (HasEntities(villagers)) OUTPUT_SetBehavior(villagers, villagersBehavior)
    if (HasEntities(illagers)) OUTPUT_SetBehavior(illagers, illagersBehavior)

    if (QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.isThisStepCurrentlyActive) > 0) {
        //The villagers inside the cages need to stay heavy scared
        const villagersStillInCages = QUERY_GetEntitiesWithTags(VILLAGERS_ILLAGERS_INSIDE_CAGE_TAG)
        if (HasEntities(villagersStillInCages)) OUTPUT_SetBehavior(villagersStillInCages, VILLAGE_BEHAVIOR.villager.heavyScared)
    }
}

const _HandleSecondVillageBehaviors = (vid) => {
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(vid)
    const villagers = FILTER_ByTagFilter(villageEntities, ["villager"], ["illager"])
    const illagers = FILTER_ByTagFilter(villageEntities, ["illager"], ["villager"])

    let villagersBehavior = VILLAGE_BEHAVIOR.villager.scared
    let illagersBehavior = VILLAGE_BEHAVIOR.illager.scared

    if (QUERY_GetGlobalVariable(act1FlowVal.findSecondVillage.global.isThisStepCurrentlyActive) > 0 || QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.isThisStepCurrentlyActive) > 0) {
        if (QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.fountainDisabled) > 0 && QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.allPiglinsDefeated) > 0) {
            villagersBehavior = VILLAGE_BEHAVIOR.villager.sad
            illagersBehavior = VILLAGE_BEHAVIOR.illager.sad
        } else {
            villagersBehavior = VILLAGE_BEHAVIOR.villager.heavyScared
            illagersBehavior = VILLAGE_BEHAVIOR.illager.heavyScared
        }
    } else if (QUERY_GetGlobalVariable(act1FlowVal.buildDefesesInSecondVillage.global.isThisStepCurrentlyActive) > 0 || QUERY_GetGlobalVariable(act1FlowVal.villageChest.global.isThisStepCurrentlyActive) > 0) {
        villagersBehavior = VILLAGE_BEHAVIOR.villager.sad
        illagersBehavior = VILLAGE_BEHAVIOR.illager.sad
    } else if (QUERY_GetGlobalVariable(act1FlowVal.firstSkirmish.global.isThisStepCurrentlyActive) > 0) {
        villagersBehavior = VILLAGE_BEHAVIOR.villager.heavyScared
        illagersBehavior = VILLAGE_BEHAVIOR.illager.heavyScared
    } else if (QUERY_GetGlobalVariable(act1FlowVal.firstSkirmish.global.stepComplete) > 0) {
        villagersBehavior = VILLAGE_BEHAVIOR.villager.act2
        illagersBehavior = VILLAGE_BEHAVIOR.illager.act2
    }

    if (HasEntities(villagers)) OUTPUT_SetBehavior(villagers, villagersBehavior)
    if (HasEntities(illagers)) OUTPUT_SetBehavior(illagers, illagersBehavior)
}

const _HandleThirdVillageBehaviors = (vid) => {
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(vid)
    const villagers = FILTER_ByTagFilter(villageEntities, ["villager"], ["illager"])
    const illagers = FILTER_ByTagFilter(villageEntities, ["illager"], ["villager"])

    let villagersBehavior = VILLAGE_BEHAVIOR.villager.scared
    let illagersBehavior = VILLAGE_BEHAVIOR.illager.scared

    if (QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.stepComplete) > 0) {
        villagersBehavior = VILLAGE_BEHAVIOR.villager.act2
        illagersBehavior = VILLAGE_BEHAVIOR.illager.act2
    } else if (QUERY_GetGlobalVariable(act1FlowVal.destroyDBB.global.isThisStepCurrentlyActive) > 0) {
        villagersBehavior = VILLAGE_BEHAVIOR.villager.act1B
        illagersBehavior = VILLAGE_BEHAVIOR.illager.act1B
    }

    if (HasEntities(villagers)) OUTPUT_SetBehavior(villagers, villagersBehavior)
    if (HasEntities(illagers)) OUTPUT_SetBehavior(illagers, illagersBehavior)
}

const _HandleNonTrinityVillageBehaviors = (vid) => {
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(vid)
    const villagers = FILTER_ByTagFilter(villageEntities, ["villager"], ["illager"])
    const illagers = FILTER_ByTagFilter(villageEntities, ["illager"], ["villager"])

    let villagersBehavior = VILLAGE_BEHAVIOR.villager.scared
    let illagersBehavior = VILLAGE_BEHAVIOR.illager.scared

    if (IsCurrentAct(ACTS.ACT_1B)) {
        villagersBehavior = VILLAGE_BEHAVIOR.villager.act1B
        illagersBehavior = VILLAGE_BEHAVIOR.illager.act1B
    }

    if (HasEntities(villagers)) OUTPUT_SetBehavior(villagers, villagersBehavior)
    if (HasEntities(illagers)) OUTPUT_SetBehavior(illagers, illagersBehavior)
}

SNIPPET_PlayerEnteredVillage("pev_entered_modulated_village", (villageId, _playerCount, payload) => {
    Logi("~~~ pev_entered_modulated_village ~~~")
    const relatedStep = act1FlowVal[payload.string]
    if (!_CheckIfStepIsComplete(relatedStep)) {
        //const villageEnt = GetVillageEntityFromID(villageId)
        //OUTPUT_SetOverrideForCompassMaxRange(villageEnt, 10)
        if (relatedStep.id === act1FlowVal.threePiglinCamps.id || relatedStep.id === act1FlowVal.secondSkirmish.id) {
            if (QUERY_GetGlobalVariable(act1FlowVal.misc.getLapisFromChestEnabled) > 0) {
                const fountain = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [TAG_VILLAGE_FOUNTAIN], [])
                const chests = QUERY_GetEntitiesWithTags(act1FlowVal.villageChest.villageChestTag)
                if (HasEntities(chests)) {
                    const villageChest = FILTER_ByClosest(chests, fountain, 1)
                    OUTPUT_RemoveVisualState(villageChest, "open_chest")
                }
            }
        }
    } else {
        Once()
    }
    _UpdateFountainAudioState()
})

const _SpawnCagesAtFirstVillage = () => {
    const firstUnderAttackVillage = _GetFirstVillageEntity()
    const villageId = QUERY_GetVillageIDFromEntity(firstUnderAttackVillage)
    const cages = BuildableCard("mobCage", 3)
    DECK_MultiplyByMultipleRules(cages, [PlacementPreferenceCard(PLACEMENT_RANDOM), ZoneFilterCard("villageCageZone"), TagCard("villageCage")])
    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, cages)
}

const _DisableFirstVillageFountain = () => {
    OUTPUT_DamageEntitiesByPercentage(_GetFirstVillageFountain(), 100)
}

const _EnableFirstVillageFountain = () => {
    const fountain = _GetFirstVillageFountain()
    if (QUERY_CurrentHealth(fountain) / QUERY_MaxHealth(fountain) < 0.05) {
        OUTPUT_SetHealthPercent(fountain, 5)
    }
}

const _TriggerAct1Celebration = (centralEntity) => {
    if (HasEntities(centralEntity)) {
        TriggerCelebration(centralEntity, CELEBRATION_NAMES.VILLAGER)
        TriggerCelebration(centralEntity, CELEBRATION_NAMES.MOBS)
    }
}

const _TriggerFirstSecondVillageIntroCine = () => {
    Logi("~~~~~~~_TriggerFirstSecondVillageIntroCine~~~~~")
    if (DoOnce(act1FlowVal.findSecondVillage.hasIntroCinePlayed)) {
        LISTENFOR_CinematicFinished({
            snippet: "cf_second_village_intro",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: act1FlowVal.findSecondVillage.villageIntroCine
        })
        OUTPUT_TriggerCinematic(act1FlowVal.findSecondVillage.villageIntroCine, [])
    }
}

SNIPPET_CinematicFinished("cf_second_village_intro", () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.isThisStepCurrentlyActive) === 0 || QUERY_GetGlobalVariable(act1FlowVal.findSecondVillage.global.isThisStepCurrentlyActive) > 0) {
        Logi("~~~~~~~~~ pev_second_village_act1_flow ~~~~~~~ " + QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.isThisStepCurrentlyActive) + " ~~~~ " + QUERY_GetGlobalVariable(act1FlowVal.findSecondVillage.global.isThisStepCurrentlyActive))
        IncrementGlobal(act1FlowVal.freeSecondVillage.global.isThisStepCurrentlyActive)
        _CompleteFindSecondVillageStep()
        _SetupSecondVillageAttack()
        InterruptOnboardingMessage(true)
        _TriggerCompletionVO(act1FlowVal.findSecondVillage)
        _StartFreeSecondVillageOnboarding()
    }
    Once()
})

///////// Linear Messages
const _StartLinearOnboardingMessages = (onboardingStepData) => {
    if (QUERY_GetGlobalVariable(act1Skips.skipVillage1) === 0) {
        _UpdateFountainAudioState()
        LISTENFOR_LocalTimer({
            snippet: "lt_campaign_onboarding_first_vo",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: onboardingStepData.consts.timeToTriggerFirstVO,
            payloadString: onboardingStepData.id
        })
        Logi("_StartLinearOnboardingMessages  = " + onboardingStepData.id)
    }
}

SNIPPET_LocalTimer("lt_campaign_onboarding_first_vo", (payload) => {
    if (QUERY_GetGlobalVariable(act1Skips.skipVillage1) === 0) {
        const onboardingStepData = act1FlowVal[payload.string]
        if (_CheckIfStepIsComplete(onboardingStepData)) {
            return
        }
        Logi(" lt_campaign_onboarding_first_vo = " + payload.string)
        Logi("Local Timer Fired")
        if (onboardingStepData.vo.intro !== "") {
            PlayPresentationActionToAll(onboardingStepData.vo.intro)
        }

        if (QUERY_GetGlobalVariable(act1FlowVal.findVillageUnderAttack.global.isThisStepCurrentlyActive) > 0) {
            LISTENFOR_LocalTimer({
                snippet: "lt_campaign_onboarding_reward_starting_resources",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                waitTime: act1FlowVal.misc.timeToTriggerStartingResources
            })
        }

        LISTENFOR_LocalTimer({
            snippet: "lt_campaign_onboarding_nudge_message",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: onboardingStepData.consts.timeToTriggerNudgeAfterVO,
            payloadString: onboardingStepData.id
        })
    }
})

SNIPPET_LocalTimer("lt_campaign_onboarding_reward_starting_resources", () => {
    //VO for resource granting goes here
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, act1FlowVal.misc.startingResourceWood, act1FlowVal.misc.startingResourceWoodAmount, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, act1FlowVal.misc.startingResourceStone, act1FlowVal.misc.startingResourceStoneAmount, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_golemstone", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_golemwood", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, act1FlowVal.misc.startingResourceSpawnerCost, act1FlowVal.misc.startingResourceSpawnerCostAmount, false)
    PlayPresentationActionToAll(act1FlowVal.misc.startingResourcesVO)

    OUTPUT_SetGlobalVariable(tutorialNudgeByPassTracker.gatherTutorial, 0)
    LISTENFOR_ResourcesChanged({
        snippet: "rc_gathering_tutorial_nudge_bypass",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        resourceName: "wood"
    })
    LISTENFOR_ResourcesChanged({
        snippet: "rc_gathering_tutorial_nudge_bypass",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        resourceName: "stone"
    })
})

SNIPPET_LocalTimer("lt_campaign_onboarding_nudge_message", (payload) => {
    const onboardingStepData = act1FlowVal[payload.string]
    if (_CheckIfStepIsComplete(onboardingStepData)) {
        return
    }
    Logi(" lt_campaign_onboarding_nudge_message = " + payload.string)
    _ShowOnboardingMessage(onboardingStepData.message.onboardingNudge)
    if (campaignTelemetryIdDictionary[onboardingStepData.id] !== undefined) {
        OUTPUT_TelemetryOnboardingStart(campaignTelemetryIdDictionary[onboardingStepData.id])
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_campaign_onboarding_reminder",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: onboardingStepData.consts.timeToTriggerVOReminder,
        payloadString: onboardingStepData.id
    })

    if (onboardingStepData.tutorialKey !== "") {
        LISTENFOR_LocalTimer({
            snippet: "lt_onboarding_tutorial_hint",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: act1FlowVal.misc.timeToShowTutorialHint,
            payloadString: onboardingStepData.id
        })
    }
})

SNIPPET_LocalTimer("lt_campaign_onboarding_reminder", (payload) => {
    const onboardingStepData = act1FlowVal[payload.string]
    if (_CheckIfStepIsComplete(onboardingStepData)) {
        return
    }

    if (onboardingStepData.vo.reminder !== "") {
        if (onboardingStepData.id !== act1FlowVal.firstSkirmish.id) {
            if (onboardingStepData.id === act1FlowVal.wofUpgrade.id && QUERY_GetGlobalVariable(act1FlowVal.wofUpgrade.global.hasReturnedToWoF) > 0) {
                //Don't remind the player to return to the WoF if they've already returned
                return
            }
            if (onboardingStepData.id === act1FlowVal.threePiglinCamps.id && QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.reminderStopper) > 0) {
                return
            }
            PlayPresentationActionToAll(onboardingStepData.vo.reminder)
        }
    } else if (onboardingStepData.vo.reminderPlaceholder !== undefined && onboardingStepData.vo.reminderPlaceholder !== "") {
        OUTPUT_Announce(onboardingStepData.vo.reminderPlaceholder, [])
    }
})

SNIPPET_LocalTimer("lt_onboarding_tutorial_hint", (payload) => {
    const onboardingStepData = act1FlowVal[payload.string]
    if (_CheckIfStepIsComplete(onboardingStepData)) {
        return
    }

    _TriggerAct1StepTutorialHint(onboardingStepData)
})

const _TriggerCompletionVO = (onboardingStepData) => {
    if (onboardingStepData.vo.complete !== "") {
        Logi("_TriggerCompletionVO For = " + onboardingStepData.id)
        // if you want to delay the completion vo from playing, add this field to the onoardingStepData with a delay value
        if (onboardingStepData.delayedTime) {
            PlayDelayedPresentationToAll(onboardingStepData.vo.complete, onboardingStepData.delayedTime)
        } else {
            PlayPresentationActionToAll(onboardingStepData.vo.complete)
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignActsEnabled, (ruleValue) => {
    if (ruleValue.value) {
        //Start the onboarding
        LISTENFOR_CinematicFinished({
            snippet: "cf_start_act1_flow",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: act1FlowVal.misc.gameIntroCinematic
        })

        //HANDLE SAVE/LOAD ANNOUNCEMENTS
        LISTENFOR_PlayerConnected({
            snippet: "pc_load_current_onboarding_announcements",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        //Respawn
        LISTENFOR_EntitySpawned({
            snippet: "es_player_spawn",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: ["player"]
        })
        //TUTORIAL NUDGEs

        LISTENFOR_PlayerFastTravelled({
            snippet: "ft_onboarding_fast_travel",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_BuildingStart({
            snippet: "bs_wof_upgrade_iron_tech",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: [act1FlowVal.wofUpgrade.upgradeStructureTag]
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_wof_upgrade_iron_tech",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: [act1FlowVal.wofUpgrade.upgradeStructureTag]
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_outpost_act1",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: [act1FlowVal.outpost.consts.outpostTag]
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_skip_to_camps",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "skip_to_camps"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_skip_to_second_skirmish",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "skip_to_second_skirmish"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_place_camps",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "place_camps"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_skip_to_wof_upgrade",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "skip_to_wof_upgrade"
        })

        //FOR BEN C ONLY
        LISTENFOR_ExternalEvent({
            snippet: "ee_play_camps_intro",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "play_camps_intro"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_unlock_advanced_direct",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "unlock_advanced_direct"
        })

        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_act1_flow_act2_started",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: ACTS.ACT_2
        })

        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_act1_flow_act1b_started",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: ACTS.ACT_1B
        })

        //Cinematic Events
        LISTENFOR_CinematicEvent({
            snippet: "ce_spawn_cages_at_first_village",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "spawn_cages_at_first_village"
        })

        LISTENFOR_CinematicEvent({
            snippet: "ce_disable_fountain_at_first_village",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "disable_fountain_at_first_village"
        })

        LISTENFOR_CinematicEvent({
            snippet: "ce_enable_fountain_at_first_village",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "enable_fountain_at_first_village"
        })
    }
})

SNIPPET_LocalTimer("lt_misc_vo_structures", () => {
    Logi("~~~~~ lt_misc_vo_structures ~~~~")
    OUTPUT_SetGlobalVariable(act1FlowVal.misc.miscVO.structures.tracker, 0)
})

SNIPPET_EntitySpawned("es_player_spawn", (entity) => {
    if (IsCurrentAct(ACTS.ACT3_A)) {
        return
    }
    const playerId = QUERY_GetUserId(entity)
    const currentNumOfRespawns = GetPlayerVariable(playerId, act1FlowVal.respawn.global.hasPlayerRespawned) + 1
    SetPlayerVariable(playerId, act1FlowVal.respawn.global.hasPlayerRespawned, currentNumOfRespawns)
    let playMessage = false
    //2 because the first time the player spawns counts. Loading a save doesn't count.
    if (!IsCurrentAct(ACTS.ACT_1A) && QUERY_GetGlobalVariable(act1FlowVal.outpost.global.hasBuiltAnOutpost) === 0) {
        LISTENFOR_LocalTimer({
            snippet: "lt_outpost_tutorial_respawn",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 20
        })

        playMessage = true
    } else if (currentNumOfRespawns === 2 || currentNumOfRespawns === 3) {
        SetPlayerVariable(playerId, act1FlowVal.respawn.global.hasPlayerRespawned, 4)

        playMessage = true
    } else {
        Once()
    }
    if (playMessage) {
        OUTPUT_AddTag(entity, playerId + "_has_respawned")
        LISTENFOR_LocalTimer({
            snippet: "lt_play_respawn_vo",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: act1FlowVal.respawn.consts.timeToIntroVo,
            payloadString: playerId,
            payloadInt: currentNumOfRespawns
        })
    }
})

SNIPPET_LocalTimer("lt_outpost_tutorial_respawn", () => {
    if (IsCurrentAct(ACTS.ACT3_A)) return
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), act1FlowVal.outpost.tutorialKey, "", false, false, false)
})

SNIPPET_LocalTimer("lt_play_respawn_vo", (payload) => {
    if (IsCurrentAct(ACTS.ACT3_A)) return
    const allPlayers = QUERY_GetAlivePlayers()
    if (HasEntities(allPlayers)) {
        const respawningPlayerId = payload.string
        const respawningPlayer = FILTER_ByTagFilter(allPlayers, [respawningPlayerId + "_has_respawned"], [])
        if (HasEntities(respawningPlayer)) {
            let message = ""
            const currentNumOfRespawns = payload.int
            if (!IsCurrentAct(ACTS.ACT_1A) && QUERY_GetGlobalVariable(act1FlowVal.outpost.global.hasBuiltAnOutpost) === 0) {
                message = act1FlowVal.outpost.vo.respawn
            } else if (currentNumOfRespawns === 2 || currentNumOfRespawns === 3) {
                message = act1FlowVal.respawn.vo.intro
            }
            if (message !== "") {
                PlayPresentationActionToPlayers(message, respawningPlayer)
            }
            OUTPUT_RemoveTag(respawningPlayer, respawningPlayerId + "_has_respawned")
        }
    }
})

SNIPPET_LocalTimer("lt_gathering_tutorial_nudge", () => {
    if (DoOnce(tutorialNudgeByPassTracker.gatherTutorial)) {
        TriggerTutorialForSpecificPlayers(GetAllPlayers(), act1FlowVal.gathering.tutorialKey, act1FlowVal.gathering.tutorialHintUnlock)
    }
})
SNIPPET_ResourcesChanged("rc_gathering_tutorial_nudge_bypass", (_resourceName, _teamID, _previousAmount, _currentAmount) => {
    Logi("~~~~~~~rc_gathering_tutorial_nudge_bypass~~~~~~")
    IncrementGlobal(tutorialNudgeByPassTracker.gatherTutorial)
    OUTPUT_TriggerTutorialBypass(act1FlowVal.gathering.tutorialKey)
    Once()
    //miscTutorials
})

SNIPPET_LocalTimer("lt_build_tutorial_nudge", (payload) => {
    if (QUERY_GetGlobalVariable(tutorialNudgeByPassTracker.buildTutorial) === payload.int) {
        Logi("~~~~~ Building nudge ~~~~~")
        IncrementGlobal(tutorialNudgeByPassTracker.buildTutorial)
        TriggerTutorialForSpecificPlayers(GetAllPlayers(), act1FlowVal.misc.miscTutorials.building.tutorialKey)
    }
})

SNIPPET_CinematicFinished("cf_start_act1_flow", (_payload) => {
    Logi("cf_start_act1_flow")
    OUTPUT_SetGlobalVariable(act1FlowVal.misc.noPoiNisDuringAct1, 1)
    _SetOnboardingAsCurrentStep(act1FlowVal.findVillageUnderAttack)
    const wof = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), [WELL_OF_FATE])
    const villageId = QUERY_GetVillageIDFromEntity(wof)
    LISTENFOR_LocalTimer({
        snippet: "lt_start_act1_flow_after_intro_cine",
        ownerVillageId: villageId,
        waitTime: act1FlowVal.misc.timeToStartOnboardingAfterIntroCine
    })
    LISTENFOR_LocalTimer({
        snippet: "lt_reward_act_1_started_resource",
        ownerVillageId: villageId,
        waitTime: act1FlowVal.misc.timeToStartPassiveOnboardingAfterIntroCine
    })

    TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_START)
})

const BeginAct1 = () => {
    if (!DoOnce("begin_act_1")) {
        return
    }
    _FindAndTagAct1Villages()
    _PrepareFirstVillageUnderAttack()
    _StartFindVillageUnderAttack()

    OUTPUT_UpdateHUDVisibility("hud_objective_health_bars", false)
}

SNIPPET_LocalTimer("lt_start_act1_flow_after_intro_cine", () => {
    BeginAct1()
})

SNIPPET_LocalTimer("lt_reward_act_1_started_resource", () => {
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_onboarding_act1_started", 1, false)
    Logi("Act 1 Onboarding Resource Granted")
})

SNIPPET_CinematicEvent("ce_spawn_cages_at_first_village", () => {
    _SpawnCagesAtFirstVillage()
})

SNIPPET_CinematicEvent("ce_disable_fountain_at_first_village", () => {
    _DisableFirstVillageFountain()
})

SNIPPET_CinematicEvent("ce_enable_fountain_at_first_village", () => {
    _EnableFirstVillageFountain()
})
const _FindAndTagAct1Villages = () => {
    const allVillages = GetAllFriendlyVillages()
    const wof = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), [WELL_OF_FATE])
    if (HasEntities(allVillages) && HasEntities(wof)) {
        Logi("@@@ _FindAndTagAct1Villages @@@")
        const firstVillage = FILTER_ByClosest(allVillages, wof, 1)
        if (!QUERY_HasTags(firstVillage, [act1FlowVal.misc.firstVillageTag])) {
            OUTPUT_AddTag(firstVillage, act1FlowVal.misc.firstVillageTag)
        }

        const secondClosestVillage = FILTER_ByClosest(OPER_Difference(allVillages, firstVillage), firstVillage, 1)
        if (!QUERY_HasTags(secondClosestVillage, [act1FlowVal.misc.secondVillageTag])) {
            OUTPUT_AddTag(secondClosestVillage, act1FlowVal.misc.secondVillageTag)
        }
    } else {
        Logi("@@@@ HasEntities(allVillages) && HasEntities(wof) @@@@@")
    }
}

const _FindAndTagThirdVillage = () => {
    const allVillages = GetAllFriendlyVillages()
    const isThereAThirdVillage = FILTER_ByTagFilter(allVillages, [act1FlowVal.misc.thirdVillageTag], [])
    if (HasEntities(isThereAThirdVillage)) {
        return
    }
    //Pick the third village so it's not close to any player to ensure they don't see the outposts generating
    let allPossibleThirdVillages = FILTER_ByTagFilter(allVillages, [], [act1FlowVal.misc.firstVillageTag, act1FlowVal.misc.secondVillageTag])
    const allPlayers = GetAllPlayers()
    const distance = 250
    ForEachEntities(allPlayers, (player) => {
        const villagesCloseToPlayers = FILTER_ByDistance(allPossibleThirdVillages, player, distance)
        if (HasEntities(villagesCloseToPlayers)) {
            allPossibleThirdVillages = OPER_Difference(allPossibleThirdVillages, villagesCloseToPlayers)
        }
    })
    //Then get the closest village out of all the possible villages
    if (HasEntities(allPossibleThirdVillages)) {
        const thirdVillage = FILTER_ByClosest(allPossibleThirdVillages, _GetSecondVillageEntity(), 1)
        if (HasEntities(thirdVillage)) {
            if (!QUERY_HasTags(thirdVillage, [act1FlowVal.misc.thirdVillageTag])) {
                OUTPUT_AddTag(thirdVillage, act1FlowVal.misc.thirdVillageTag)
            }
        }
    } else {
        //All villages have players near them. Pick the closest
        allPossibleThirdVillages = FILTER_ByTagFilter(allVillages, [], [act1FlowVal.misc.firstVillageTag, act1FlowVal.misc.secondVillageTag])
        const thirdVillage = FILTER_ByClosest(allPossibleThirdVillages, _GetSecondVillageEntity(), 1)
        if (HasEntities(thirdVillage)) {
            if (!QUERY_HasTags(thirdVillage, [act1FlowVal.misc.thirdVillageTag])) {
                OUTPUT_AddTag(thirdVillage, act1FlowVal.misc.thirdVillageTag)
            }
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const _PrepareFirstVillageUnderAttack = () => {
    const firstVillage = _GetFirstVillageEntity()
    OUTPUT_MapSetKeyValue(firstVillage, MAP_KEY.ACT1_VILLAGE_STATE, MAP_ICON_STATE.UNDER_ATTACK)
    OUTPUT_MapSetKeyValue(firstVillage, MAP_KEY.STATE, MAP_ICON_STATE.DISABLED_ACT1)

    EmptyAllVillageChests()

    Logi("~~~~ _PrepareFirstVillageUnderAttack ~~~~")

    _UpdateIconDistanceForFaction(CULTURE_NAME_VILLAGERS, 250, 0)
    _UpdateIconDistanceForFaction(FACTION_MOB_ALLIANCES, 0, 0)
    _UpdateIconDistanceForEntity(firstVillage, -1, 20)
    _ResetFountainAudioStateForAllVillages()

    const villageId = QUERY_GetVillageIDFromEntity(firstVillage)

    const cageDeck = DECK_Empty()
    Logi("~~~~~~ Does this get called?~~~~~")
    const cages = BuildableCard("mobCage", act1FlowVal.misc.totalCagesNumber)
    DECK_MultiplyByMultipleRules(cages, [PlacementPreferenceCard(PLACEMENT_RANDOM), ZoneFilterCard("villageCageZone"), TagCard("villageCage")])
    DECK_PutOnBottomOf(cages, cageDeck)
    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, cageDeck)

    LISTENFOR_BuildingComplete({
        snippet: "bc_onboarding_first_village_cage",
        ownerVillageId: villageId,
        includeTags: [act1FlowVal.misc.villageCageTag],
        villageId: villageId
    })

    LISTENFOR_PlayerInteracted({
        snippet: "pi_onboarding_cage",
        ownerVillageId: villageId,
        includeTags: [act1FlowVal.misc.villageCageTag],
        villageId: villageId
    })

    LISTENFOR_CinematicFinished({
        snippet: "cf_find_first_village_under_attack_cinematic",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: act1FlowVal.findVillageUnderAttack.cinematic
    })
}

SNIPPET_CinematicFinished("cf_find_first_village_under_attack_cinematic", (_payload) => {
    _CompleteFindVillageUnderAttackStep()

    // Melee Tutorial Resource grant Timer
    LISTENFOR_LocalTimer({
        snippet: "lt_campaign_onboarding_melee_tutorial_resource",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.findVillageUnderAttack.consts.timeToGiveMeleeTutorialResource
    })
    Once()
})

SNIPPET_LocalTimer("lt_campaign_onboarding_melee_tutorial_resource", () => {
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_onboarding_act1_melee_tut_start", 1, false)
})

const _FirstVillageUnderAttackBeatCompleted = () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.repairFountain.global.playerStartedBuildingCarpenter) > 0) {
        _CompleteFirstVillageUnderAttackStep(true)
        Logi("act1FlowVal.repairFountain.global.playerStartedBuildingCarpenter Skip Fountain Beat")
        return
    }

    const firstUnderAttackVillage = _GetFirstVillageEntity()
    const villageId = QUERY_GetVillageIDFromEntity(firstUnderAttackVillage)
    const villageFountain = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [TAG_VILLAGE_FOUNTAIN], [])
    const closestPlayer = GetClosestPlayer(villageFountain)

    if (HasEntities(closestPlayer)) {
        InterruptOnboardingMessage(true)
        TriggerCelebration(firstUnderAttackVillage, CELEBRATION_NAMES.MOBS)
    } else {
        Loge("ERROR - Could not Find any player close to the First Village Under Attack - Cinematic didn't played")
        //FALLBACK COMPLETE WITHOUT PLAYING THE CINEMATIC
        _CompleteFirstVillageUnderAttackStep()
    }
}

const _CheckIfFirstVillageUnderAttackIsComplete = () => {
    const werePiglinsSpawned = QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.piglinsSpawned) > 0
    if (QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.allCagesOpened) > 0 && QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.allPiglinsKilled) === 0) {
        if (act1FlowVal.firstVillageUnderAttack.vo.hintKillRemainingPiglins !== "") {
            PlayPresentationActionToAll(act1FlowVal.firstVillageUnderAttack.vo.hintKillRemainingPiglins)
        }
    } else if (QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.allPiglinsKilled) > 0) {
        const firstVillageFountain = _GetFirstVillageFountain()
        if (HasEntities(firstVillageFountain)) {
            const player = GetClosestPlayer(firstVillageFountain)

            const villageId = QUERY_GetVillageIDFromEntity(_GetFirstVillageEntity())
            LISTENFOR_CinematicStarted({
                snippet: "cs_first_village_piglins_fear",
                ownerVillageId: villageId,
                cinematicName: act1FlowVal.firstVillageUnderAttack.cinematics.cagesNotOpened
            })

            LISTENFOR_CinematicFinished({
                snippet: "cf_first_village_under_attack_complete_cinematic_patched",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                cinematicName: act1FlowVal.firstVillageUnderAttack.cinematics.cagesOpened
            })

            OUTPUT_TriggerCinematic(act1FlowVal.firstVillageUnderAttack.cinematics.cagesNotOpened, [firstVillageFountain, player])

            const remainingPiglins = QUERY_GetEntitiesWithTags([act1FlowVal.misc.piglinsAtVillageTag])
            if (HasEntities(remainingPiglins)) {
                DelayedDestroy(remainingPiglins, 1, villageId)
            }
        }
    } else if (!werePiglinsSpawned && QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.allCagesOpened) > 0) {
        _FirstVillageUnderAttackBeatCompleted()
    }
}

SNIPPET_CinematicStarted("cs_first_village_piglins_fear", (payload) => {
    _OpenCages(payload.ownerVillageId)
    IncrementGlobal(act1FlowVal.firstVillageUnderAttack.global.allCagesOpened)
    Once()
})
/*const _SpawnWayPointMarkerOnRemainingCages = () => {
    LISTENFOR_LocalTimer({
        snippet: "lt_spawn_cage_markers",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.misc.timeToSpawnCageMarkers
    })
}*/

const _OpenCages = (villagId) => {
    let allCages = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villagId), ["villageCage"], [])
    while (HasEntities(allCages)) {
        const cage = RandomEntity(allCages)
        OUTPUT_TriggerPresentationEvent(cage, "open_gate")
        OUTPUT_SetInteractionState(cage, false)
        DelayedDestroy(cage, 2.7, villagId)
        allCages = OPER_Difference(allCages, cage)
    }
}

/*SNIPPET_LocalTimer("lt_spawn_cage_markers", () => {
    let cages = QUERY_GetEntitiesWithTags(act1FlowVal.misc.villageCageTag)

    while (HasEntities(cages)) {
        const cage = RandomEntity(cages)
        Logi("~~~~~~ add waypoint to cages ~~~~~")
        OUTPUT_AddWaypointIconByExistingEntityArchetype(markers.cageMarkers, cage)
        cages = OPER_Difference(cages, cage)
    }
})*/

SNIPPET_CinematicFinished("cf_first_village_under_attack_complete_cinematic_patched", (_payload) => {
    _FirstVillageUnderAttackBeatCompleted()
    _CompleteFirstVillageUnderAttackStep()
    Once()
})

SNIPPET_SpatialPartitionEntered("spe_first_village_under_attack_preparation", (triggerEntity, _intruderEntity, _payload) => {
    if (QUERY_GetGlobalVariable(act1Skips.skipVillage1) === 0) {
        const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)

        let runts = SpawnEntitiesInVillage("badger:piglin_runt", act1FlowVal.firstVillageUnderAttack.consts.numberOfPiglinsToSpawnAtVillage, TEAM_ORANGE, villageId, 20, 35)
        OUTPUT_SetVillagePersistentEntities(runts, villageId)
        OUTPUT_SetLootTableOverride(runts, act1FlowVal.misc.piglinLootTableOverride)

        const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)

        let villageCages = FILTER_ByTagFilter(villageEntities, ["villageCage"], []) // <-- get all the cages
        while (HasEntities(villageCages)) {
            const cage = RandomEntity(villageCages) // <-- grab a single cage to leash piglins to.
            const cageRunts = SpawnEntitiesInVillage("badger:piglin_runt", act1FlowVal.firstVillageUnderAttack.consts.numberOfPiglinsToSpawnAtCages, TEAM_ORANGE, villageId, 20, 35)
            OUTPUT_SetLeash(cageRunts, cage, 20, 10)
            OUTPUT_SetLootTableOverride(cageRunts, act1FlowVal.misc.piglinLootTableOverride)
            OUTPUT_SetVillagePersistentEntities(cageRunts, villageId)

            villageCages = OPER_Difference(villageCages, cage) // <-- remove the cage we just handled and loop.
            runts = OPER_Union(cageRunts, runts)
        }

        OUTPUT_AddTag(runts, act1FlowVal.misc.piglinsAtVillageTag)
        const runtCount = QUERY_GetEntitiesCount(runts) - act1FlowVal.firstVillageUnderAttack.consts.numberOfPiglinsLeftForSuccess

        OUTPUT_SetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.piglinsSpawned, runtCount)
        Logi("Number of piglins spawned:" + runtCount)

        OUTPUT_SetupDestroyEntitiesObjective(villageId, runts, runtCount, FACTION_NAME_DBB)

        LISTENFOR_InvasionDestroyEntitiesObjective({
            snippet: "deo_piglins_invading_first_village",
            ownerVillageId: villageId,
            villageId: villageId
        })
    }
    OUTPUT_DespawnEntities(triggerEntity)
    Once()
})

SNIPPET_SpatialPartitionEntered("spe_first_village_cinematic", (triggerEntity, _intruderEntity, _payload) => {
    Logi("@@@ spe_first_village_cinematic @@@ " + QUERY_GetGlobalVariable(act1Skips.skipVillage1))
    if (QUERY_GetGlobalVariable(act1Skips.skipVillage1) === 0) {
        InterruptOnboardingMessage(true)
        const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
        const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
        const villageFountain = FILTER_ByTagFilter(villageEntities, [TAG_VILLAGE_FOUNTAIN], [])
        const houses = FILTER_ByTagFilter(villageEntities, ["house"], [])
        PlayPresentationActionToAll(act1FlowVal.findVillageUnderAttack.vo.preOccupiedVO)

        OUTPUT_SetDisableByHealthCinematicState(villageFountain, false)
        OUTPUT_DamageEntitiesByPercentage(villageFountain, 100)
        OUTPUT_DamageEntitiesByPercentage(houses, 30)
        LISTENFOR_LocalTimer({
            snippet: "lt_first_village_cinematic",
            ownerVillageId: villageId,
            waitTime: act1FlowVal.findVillageUnderAttack.consts.timeToCinematic
        })

        LISTENFOR_LocalTimer({
            snippet: "lt_to_send_piglins_to_attack_players_village_1",
            ownerVillageId: villageId,
            waitTime: act1FlowVal.firstVillageUnderAttack.consts.timeToSendPiglinsToAttackPlayers,
            payloadInt: villageId
        })
    }
    Once()
    OUTPUT_DespawnEntities(triggerEntity)
})

SNIPPET_LocalTimer("lt_first_village_cinematic", () => {
    const firstVillage = _GetFirstVillageEntity()
    if (HasEntities(firstVillage)) {
        const villageId = QUERY_GetVillageIDFromEntity(firstVillage)
        const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
        const villageFountain = FILTER_ByTagFilter(villageEntities, [TAG_VILLAGE_FOUNTAIN], [])
        const largeHouse = FILTER_ByTagFilter(villageEntities, ["largeHouse"], [])
        if (HasEntities(villageFountain) && HasEntities(largeHouse)) {
            const cinematicEntities = OPER_Append(OPER_Append(villageFountain, largeHouse), GetClosestPlayer(villageFountain))
            OUTPUT_TriggerCinematic(act1FlowVal.findVillageUnderAttack.cinematic, cinematicEntities)
        } else {
            _CompleteFindVillageUnderAttackStep()
            // Melee Tutorial Resource grant Timer
            LISTENFOR_LocalTimer({
                snippet: "lt_campaign_onboarding_melee_tutorial_resource",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                waitTime: act1FlowVal.findVillageUnderAttack.consts.timeToGiveMeleeTutorialResource
            })
        }
    } else {
        _CompleteFindVillageUnderAttackStep()
        // Melee Tutorial Resource grant Timer
        LISTENFOR_LocalTimer({
            snippet: "lt_campaign_onboarding_melee_tutorial_resource",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: act1FlowVal.findVillageUnderAttack.consts.timeToGiveMeleeTutorialResource
        })
    }
})

SNIPPET_LocalTimer("lt_to_send_piglins_to_attack_players_village_1", (payload) => {
    const remainingPiglins = QUERY_GetEntitiesWithTags([act1FlowVal.misc.piglinsAtVillageTag])
    if (HasEntities(remainingPiglins)) {
        const villageFountain = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(payload.int), [TAG_VILLAGE_FOUNTAIN], [])
        const closestPlayer = GetClosestPlayer(villageFountain)
        if (HasEntities(closestPlayer)) {
            const houses = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(payload.int), ["house"], [])
            OUTPUT_AddTag(houses, "donotattack")

            Logi("lt_to_send_piglins_to_attack_players_village_1")
            //OUTPUT_MoveAttackEntity(remainingPiglins, closestPlayer, CALLBACK_NONE)
        }
    }
})

SNIPPET_SpatialPartitionEntered("spe_piglins_invading_first_village", (triggerEntity, intruderEntity, _payload) => {
    if (QUERY_GetGlobalVariable(act1Skips.skipVillage1) === 0) {
        if (_CheckIfStepIsComplete(act1FlowVal.firstVillageUnderAttack)) {
            OUTPUT_DespawnEntities(triggerEntity)
            Once()
        }
        const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)

        const cages = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [act1FlowVal.misc.villageCageTag], [])
        if (HasEntities(cages)) {
            const closestCage = FILTER_ByClosest(cages, intruderEntity, 1)
            OUTPUT_AddTether(closestCage, intruderEntity, 10)
            OUTPUT_MovePosition(intruderEntity, closestCage, 6, CALLBACK_NONE)
        }

        Logi("~~~~~spe_piglins_invading_first_village~~~~~")
    }
})

SNIPPET_InvasionDestroyEntitiesObjective("deo_piglins_invading_first_village", (villageId, _destroyedEntity, _numberRemaining) => {
    if (QUERY_GetGlobalVariable(act1Skips.skipVillage1) === 0) {
        IncrementGlobal(act1FlowVal.firstVillageUnderAttack.global.piglinsKilled)
        Logi(" ead_piglins_invading_first_village " + QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.piglinsKilled))
        const diff = QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.piglinsSpawned) - QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.piglinsKilled)
        Logi(" ~~~~~~ diff ~~~~~ " + diff)
        if (diff === act1FlowVal.misc.numOfPiglinsToSpawnMarkers) {
            let remainingPiglins = FILTER_ByHealthPercentage(QUERY_GetEntitiesWithTags(act1FlowVal.misc.piglinsAtVillageTag), 0, true)
            while (HasEntities(remainingPiglins)) {
                const pig = RandomEntity(remainingPiglins)
                if (!QUERY_DoesEntityHaveAwaypointIcon(pig)) {
                    OUTPUT_AddWaypointIconByExistingEntityArchetype(markers.piglinMarkers, pig)
                }
                remainingPiglins = OPER_Difference(remainingPiglins, pig)
            }
        } else if (diff <= 0 && QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.allPiglinsKilled) === 0) {
            OUTPUT_RemoveDestroyEntitiesObjective(villageId)
            IncrementGlobal(act1FlowVal.firstVillageUnderAttack.global.allPiglinsKilled)
            _CheckIfFirstVillageUnderAttackIsComplete()
            SetVillageAudioDefault(villageId, act1FlowVal.audio.fountainStates.damaged)
            Once()
        }
    } else {
        Once()
    }
})

SNIPPET_BuildingComplete("bc_onboarding_first_village_cage", (buildingCompleteEG, payload) => {
    IncrementGlobal(act1FlowVal.firstVillageUnderAttack.global.cagesBuilt)
    OUTPUT_SetBarracksSpawnTypes(buildingCompleteEG, ["badger:villager_illager_culture01", "badger:villager_culture01"])
    OUTPUT_SetBarracksSpawnCap(buildingCompleteEG, 5)
    const villageId = payload.ownerVillageId
    LISTENFOR_BuildableSpawnerSpawned({
        snippet: "bss_onboarding_first_village_cage",
        ownerVillageId: villageId,
        buildableSpawner: buildingCompleteEG
    })

    //When all cages were built, time to init the spatial partitions (piglin spawning relies on cages being built)
    if (QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.cagesBuilt) === act1FlowVal.misc.totalCagesNumber) {
        const villageEntity = GetVillageEntityFromID(villageId)
        const firstVillageUnderAttackPreparationTV = SpawnTriggerVolume(villageEntity, villageEntity, "badger:spatial_trigger_generic_large", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
        LISTENFOR_SpatialPartitionEntered({
            snippet: "spe_first_village_under_attack_preparation",
            ownerVillageId: villageId,
            triggerEntity: firstVillageUnderAttackPreparationTV
        })

        const villageBoundaryVolume = SpawnTriggerVolume(villageEntity, villageEntity, "badger:spatial_trigger_village_generic_small", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
        LISTENFOR_SpatialPartitionEntered({
            snippet: "spe_first_village_cinematic",
            triggerEntity: villageBoundaryVolume,
            ownerVillageId: villageId
        })

        const piglinsInvadingFirstVillageTV = SpawnTriggerVolume(villageEntity, villageEntity, "badger:spatial_trigger_village_generic", TEAM_WILD, villageId, true, ["piglin", "mob"], [], ALLIANCE_ENEMY)
        LISTENFOR_SpatialPartitionEntered({
            snippet: "spe_piglins_invading_first_village",
            ownerVillageId: villageId,
            triggerEntity: piglinsInvadingFirstVillageTV
        })
    }
})

SNIPPET_BuildableSpawnerSpawned("bss_onboarding_first_village_cage", (_spawner, newEntity, _payload) => {
    OUTPUT_AddTag(newEntity, "donotattack")
    OUTPUT_AddTag(newEntity, VILLAGERS_ILLAGERS_INSIDE_CAGE_TAG)
    OUTPUT_SetBehavior(newEntity, VILLAGE_BEHAVIOR.villager.heavyScared)
})
SNIPPET_PlayerInteracted("pi_onboarding_cage", (_playerEntity, interactedEntity, payload) => {
    OUTPUT_TriggerPresentationEvent(interactedEntity, "open_gate")
    OUTPUT_SetInteractionState(interactedEntity, false)
    DelayedDestroy(interactedEntity, 2.7, payload.ownerVillageId)

    const villageEntities = QUERY_GetEntitiesOwnedByVillage(payload.ownerVillageId)

    IncrementGlobal(act1FlowVal.firstVillageUnderAttack.global.cagesOpened)

    const totalCagesBuilt = QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.cagesBuilt)
    const cageDestroyed = QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.cagesOpened)
    if (cageDestroyed === totalCagesBuilt) {
        IncrementGlobal(act1FlowVal.firstVillageUnderAttack.global.allCagesOpened)
        _CheckIfFirstVillageUnderAttackIsComplete()
    }
    const villagersCloseToOpenedCage = FILTER_ByDistance(villageEntities, interactedEntity, 6)
    const remainingPiglins = QUERY_GetEntitiesWithTags([act1FlowVal.misc.piglinsAtVillageTag])
    if (HasEntities(remainingPiglins)) {
        const closestPlayer = GetClosestPlayer(interactedEntity)
        if (HasEntities(closestPlayer)) {
            Logi("Send Piglins To Attack Players That Opened the Cage")
            OUTPUT_MoveAttackEntity(remainingPiglins, closestPlayer, CALLBACK_NONE)
        }
    } else {
        //Only if there are no piglins around, reset the caged villagers' behavior to sad
        if (HasEntities(villagersCloseToOpenedCage)) OUTPUT_SetBehavior(villagersCloseToOpenedCage, VILLAGE_BEHAVIOR.villager.sad)
    }

    if (HasEntities(villagersCloseToOpenedCage)) {
        OUTPUT_RemoveTag(villagersCloseToOpenedCage, "donotattack")
        OUTPUT_RemoveTag(villagersCloseToOpenedCage, VILLAGERS_ILLAGERS_INSIDE_CAGE_TAG)
    }
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ========================= FIND VILLAGE UNDER ATTACK ONBOARDING =========================
const _StartFindVillageUnderAttack = () => {
    if (_CheckIfStepIsComplete(act1FlowVal.findVillageUnderAttack)) {
        return
    }

    if (!IsCurrentAct(ACTS.ACT_1A)) {
        return
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_wmap_tutorial",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.misc.miscTutorials.worldMap.delay
    })

    LISTENFOR_LocalTimer({
        snippet: "lt_compass_reveal",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.misc.miscTutorials.compass.delay
    })

    const firstUnderAttackVillage = _GetFirstVillageEntity()
    const villageID = QUERY_GetVillageIDFromEntity(firstUnderAttackVillage)
    _ModulateCompassIconForActiveVillage(villageID, act1FlowVal.repairFountain.id)

    _StartLinearOnboardingMessages(act1FlowVal.findVillageUnderAttack)
}

SNIPPET_LocalTimer("lt_wmap_tutorial", () => {
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), act1FlowVal.misc.miscTutorials.worldMap.tutorialKey)
})

SNIPPET_LocalTimer("lt_compass_reveal", () => {
    OUTPUT_UpdateHUDVisibility("hud_compass", true)
})

const _CompleteFindVillageUnderAttackStep = () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.findVillageUnderAttack.global.isThisStepCurrentlyActive) > 0) {
        PlayPresentationActionToAll(act1FlowVal.misc.successAudio)
        _TriggerCompletionVO(act1FlowVal.findVillageUnderAttack)
        _StartFirstVillageUnderAttack()
        TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_VILLAGE1ARRIVE)
    }
    _MarkAct1StepAsComplete(act1FlowVal.findVillageUnderAttack)
    OUTPUT_UpdateHUDVisibility("hud_objective_health_bars", true)
}

// ========================= FIRST VILLAGE UNDER ATTACK ONBOARDING =========================
const _StartFirstVillageUnderAttack = () => {
    if (_CheckIfStepIsCompleteOrActive(act1FlowVal.firstVillageUnderAttack)) {
        return
    }

    if (!IsCurrentAct(ACTS.ACT_1A)) {
        return
    }
    Logi("_StartFirstVillageUnderAttack")

    _SetOnboardingAsCurrentStep(act1FlowVal.firstVillageUnderAttack)
    _StartLinearOnboardingMessages(act1FlowVal.firstVillageUnderAttack)

    const firstUnderAttackVillage = _GetFirstVillageEntity()
    const firstUnderAttackVillageId = QUERY_GetVillageIDFromEntity(firstUnderAttackVillage)
    const firstUnderAttackVillageFountain = GetVillageFountain(firstUnderAttackVillageId)
    const mobsCount = QUERY_GetEntitiesCount(QUERY_GetEntitiesWithTags(["wood golem"])) + QUERY_GetEntitiesCount(QUERY_GetEntitiesWithTags(["stone_golem"]))

    if (mobsCount < act1FlowVal.firstVillageUnderAttack.consts.numberOfMobsToDemphasizeHud) {
        EmphasizeHUDItem(act1FlowVal.firstVillageUnderAttack.hudItem)

        LISTENFOR_EntitySpawned({
            snippet: "es_spawned_mobs_first_village",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: ["wood golem"]
        })
        LISTENFOR_EntitySpawned({
            snippet: "es_spawned_mobs_first_village",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: ["stone_golem"]
        })
    }

    LISTENFOR_BuildingStart({
        snippet: "bs_first_village_carpenter",
        ownerVillageId: firstUnderAttackVillageId,
        includeTags: ["carpenter"],
        villageId: firstUnderAttackVillageId
    })

    LISTENFOR_ResourcesChanged({
        snippet: "rc_emerald",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        resourceName: "emerald"
    })

    LISTENFOR_LocalTimer({
        snippet: "lt_play_first_village_spawners_VO",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.firstVillageUnderAttack.miscReminders.timeTofirstVillageBuildSpawnersVO
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_golem_spawner_first_village",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["onboardinggolemspawner"]
    })
    /*const closestPlayer = GetClosestPlayer(firstUnderAttackVillage)
    if (HasEntities(closestPlayer)) {
        const piglins = FILTER_ByClosest(QUERY_GetEntitiesWithTags(["piglin", "mob"]), closestPlayer, 4)
        if (HasEntities(piglins)) {
            OUTPUT_MoveAttackEntity(piglins, closestPlayer, CALLBACK_NONE)
        }
    }*/

    //SetupAudioEntityForBase(firstUnderAttackVillageId, act1FlowVal.misc.act1VillageAttacksMusicEntity)
}

SNIPPET_EntitySpawned("es_spawned_mobs_first_village", (_playerMob) => {
    if (QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.isThisStepCurrentlyActive) <= 0) {
        Once()
        return
    }

    if (IncrementGlobal(act1FlowVal.firstVillageUnderAttack.global.numOfMobsSpawned) >= act1FlowVal.firstVillageUnderAttack.consts.numberOfMobsToDemphasizeHud) {
        DeEmphasizeHUDItem(act1FlowVal.firstVillageUnderAttack.hudItem)
        Once()
    }
})

SNIPPET_BuildingStart("bs_first_village_carpenter", () => {
    Logi("@@@ bs_first_village_carpenter @@@")
    IncrementGlobal(act1FlowVal.repairFountain.global.playerStartedBuildingCarpenter)
    TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_VILLAGE1BUILDCARPENTERHUT)
    Once()
})

SNIPPET_ResourcesChanged("rc_emerald", (_resourceName, _teamID, _previousAmount, _currentAmount) => {
    PlayPresentationActionToAll(act1FlowVal.misc.miscVO.resources.lapis)
    Once()
})

SNIPPET_LocalTimer("lt_play_first_village_spawners_VO", () => {
    Logi("~~~~~ lt_play_first_village_spawners_VO ~~~~~")
    if (QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.isThisStepCurrentlyActive) > 0) {
        if (DoOnce(act1FlowVal.firstVillageUnderAttack.miscReminders.hasPlayedFirstVillageBuildSpawnersVO)) {
            PlayPresentationActionToAll(act1FlowVal.firstVillageUnderAttack.miscReminders.firstVillageBuildSpawnersVO)
        }
    }
})

SNIPPET_BuildingComplete("bc_golem_spawner_first_village", (_spawner, _spawnedUnit) => {
    Logi("~~~~~ Spawned golem first village no VO ~~~~")
    IncrementGlobal(act1FlowVal.firstVillageUnderAttack.miscReminders.hasPlayedFirstVillageBuildSpawnersVO)
    Once()
})

const _CompleteFirstVillageUnderAttackStep = (skipCompletionVO = false) => {
    const firstUnderAttackVillage = _GetFirstVillageEntity()
    DeEmphasizeHUDItem(act1FlowVal.firstVillageUnderAttack.hudItem)
    if (HasEntities(firstUnderAttackVillage)) {
        const villageId = QUERY_GetVillageIDFromEntity(firstUnderAttackVillage)
        if (QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.isThisStepCurrentlyActive) > 0) {
            const remainingPiglins = QUERY_GetEntitiesWithTags([act1FlowVal.misc.piglinsAtVillageTag])
            if (HasEntities(remainingPiglins)) {
                DelayedDestroy(remainingPiglins, 1, villageId)
            }
            OUTPUT_MapSetKeyValue(firstUnderAttackVillage, MAP_KEY.ACT1_VILLAGE_STATE, MAP_ICON_STATE.DEFAULT)
            PlayPresentationActionToAll(act1FlowVal.misc.successAudio)
            PlayStingerToClosePlayers(act1FlowVal.audio.stingers.freeVillage, firstUnderAttackVillage)
            if (!skipCompletionVO) {
                _TriggerCompletionVO(act1FlowVal.firstVillageUnderAttack)
                Logi("Play _CompleteFirstVillageUnderAttackStep VO")
            }

            const villageEntities = QUERY_GetEntitiesOwnedByVillage(QUERY_GetVillageIDFromEntity(firstUnderAttackVillage))
            const houses = FILTER_ByTagFilter(villageEntities, ["house"], [])
            OUTPUT_RemoveTag(houses, "donotattack")

            _StartRepairFountainOnboarding()
            TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_VILLAGE1CLEARED)
        }
    }
    Logi("_CompleteFirstVillageUnderAttackStep")
    _MarkAct1StepAsComplete(act1FlowVal.firstVillageUnderAttack)
}

// ========================= REPAIR VILLAGE ONBOARDING =========================
const _StartRepairFountainOnboarding = () => {
    if (_CheckIfStepIsCompleteOrActive(act1FlowVal.repairFountain)) {
        return
    }

    if (!IsCurrentAct(ACTS.ACT_1A)) {
        return
    }

    _SetOnboardingAsCurrentStep(act1FlowVal.repairFountain)
    const firstUnderAttackVillage = _GetFirstVillageEntity()
    const firstUnderAttackVillageId = QUERY_GetVillageIDFromEntity(firstUnderAttackVillage)
    const firstUnderAttackVillageFountain = GetVillageFountain(firstUnderAttackVillageId)
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(firstUnderAttackVillageId)

    if (QUERY_GetGlobalVariable(act1FlowVal.repairFountain.global.playerStartedBuildingCarpenter) > 0) {
        if (!QUERY_IsEntityDisabled(firstUnderAttackVillageFountain)) {
            _TriggerFountainRepairedCinematic(firstUnderAttackVillageFountain)
            return
        }
    }
    Logi("_StartRepairFountainOnboarding")

    EmphasizeHUDItem(act1FlowVal.repairFountain.hudItem)

    const genericMarker = FILTER_ByTagFilter(villageEntities, ["onboarding_generic_marker"], [])
    if (HasEntities(genericMarker)) {
        SpawnEntitiesAt(genericMarker, "badger:fx_attractor_onbording", 1, TEAM_BLUE)
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_play_first_village_gather_VO",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.repairFountain.miscReminders.timeTofirstVillageGatherResourcesVO
    })

    LISTENFOR_LocalTimer({
        snippet: "lt_build_tutorial_nudge",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.misc.miscTutorials.building.timeToNudgeBeforeCarpenter,
        payloadInt: 0
    })
    LISTENFOR_ResourcesChanged({
        snippet: "rc_gathering_repair_fountain",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        resourceName: "wood"
    })

    LISTENFOR_ResourcesChanged({
        snippet: "rc_gathering_repair_fountain",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        resourceName: "stone"
    })

    LISTENFOR_EntityEnabled({
        snippet: "ee_repair_fountain_onboarding_patched",
        ownerVillageId: firstUnderAttackVillageId,
        enabledEntity: firstUnderAttackVillageFountain,
        villageId: firstUnderAttackVillageId
    })

    //REMOVE THIS IF WE FIX SNIPPET_HealthChanged

    _StartLinearOnboardingMessages(act1FlowVal.repairFountain)
    /*
    LISTENFOR_HealthChanged({
        snippet: "hc_first_village_fountain_healing",
        ownerVillageId: firstUnderAttackVillageId,
        entities: firstUnderAttackVillageFountain
    })
    */
}

SNIPPET_LocalTimer("lt_play_first_village_gather_VO", () => {
    Logi("~~~~~ lt_play_first_village_gather_VO ~~~~~")
    if (DoOnce(act1FlowVal.repairFountain.miscReminders.hasPlayedFirstVillageGatherResourcesVO)) {
        PlayPresentationActionToAll(act1FlowVal.repairFountain.miscReminders.firstVillageGatherResourcesVO)
    }
    if (QUERY_GetGlobalVariable(tutorialNudgeByPassTracker.gatherTutorial) === 0) {
        TriggerTutorialForSpecificPlayers(GetAllPlayers(), act1FlowVal.gathering.tutorialKey, act1FlowVal.gathering.tutorialHintUnlock)
    }
})

SNIPPET_ResourcesChanged("rc_gathering_repair_fountain", (_resourceName, _teamID, _previousAmount, _currentAmount) => {
    IncrementGlobal(act1FlowVal.repairFountain.miscReminders.hasPlayedFirstVillageGatherResourcesVO)
    Logi("~~~~~ Gathered resources no VO ~~~~")
    Once()
})

const _TriggerFountainRepairedCinematic = (fountainEntity) => {
    Logi("@@@ _TriggerFountainRepairedCinematic @@@")
    const closestPlayer = GetClosestPlayer(fountainEntity)
    _ResetFountainAudioState(QUERY_GetVillageIDFromEntity(fountainEntity))
    DeEmphasizeHUDItem(act1FlowVal.repairFountain.hudItem)
    const attractorFX = QUERY_GetEntitiesWithTags("attractorOnboarding")
    if (HasEntities(attractorFX)) OUTPUT_DespawnEntities(attractorFX)
    if (HasEntities(closestPlayer)) {
        InterruptOnboardingMessage(true)
        LISTENFOR_CinematicFinished({
            snippet: "cf_first_village_repair_fountain_cinematic",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: act1FlowVal.repairFountain.cinematic
        })
        OUTPUT_TriggerCinematic(act1FlowVal.repairFountain.cinematic, OPER_Append(fountainEntity, closestPlayer))
        IncrementGlobal(tutorialNudgeByPassTracker.buildTutorial)
        OUTPUT_SetDisableByHealthCinematicState(fountainEntity, true) // return to default cinematic
    } else {
        Loge("ERROR - Could not Find any player close to the First Village Under Attack - Fountain Repair - Cinematic didn't played")
        LISTENFOR_LocalTimer({
            snippet: "lt_delay_until_second_village_start",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 1
        })
    }
}

SNIPPET_EntityEnabled("ee_repair_fountain_onboarding_patched", (fountainEntity) => {
    Logi("@@@ ee_repair_fountain_onboarding @@@")
    if (!QUERY_HasTags(fountainEntity, [TAG_VILLAGE_FOUNTAIN])) {
        return
    }
    if (_GetCurrentOnboadingStep() !== act1FlowVal.repairFountain.id) {
        Logi("Not Repair Fountain Step - Mark As Complete")
        return
    }
    Logi("ee_repair_fountain_onboarding")
    _TriggerFountainRepairedCinematic(fountainEntity)
    Once()
})

SNIPPET_CinematicFinished("cf_first_village_repair_fountain_cinematic", (_payload) => {
    LISTENFOR_LocalTimer({
        snippet: "lt_delay_until_second_village_start",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 1
    })
    Once()
})

SNIPPET_LocalTimer("lt_delay_until_second_village_start", () => {
    _CompleteRepairFountainStep()
})

const _CompleteRepairFountainStep = () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.repairFountain.global.isThisStepCurrentlyActive) > 0) {
        const firstUnderAttackVillage = _GetFirstVillageEntity()
        if (HasEntities(firstUnderAttackVillage)) {
            const villageId = QUERY_GetVillageIDFromEntity(firstUnderAttackVillage)
            SetVillageTemporaryBehavior(villageId, VILLAGE_TEMP_BEHAVIOR_STATE.HEAVY_CHEER, 30)
            OUTPUT_MapSetKeyValue(firstUnderAttackVillage, MAP_KEY.ACT1_VILLAGE_STATE, MAP_ICON_STATE.DEFAULT)
            OUTPUT_MapSetKeyValue(firstUnderAttackVillage, MAP_KEY.STATE, MAP_ICON_STATE.DEFAULT)
            PlayPresentationActionToAll(act1FlowVal.misc.successAudio)
            _TriggerCompletionVO(act1FlowVal.repairFountain)
            _StartFindSecondVillageOnboarding()

            _ResetIconDistanceForEntity(firstUnderAttackVillage)
            Logi("_CompleteRepairFountainStep!")
            OUTPUT_SetFastTravelEnabled(villageId, true)
            OUTPUT_MapSetKeyValue(firstUnderAttackVillage, MAP_KEY.FAST_TRAVEL, MAP_FAST_TRAVEL.ENABLED)
            //Set villager behviour Cheer 12 seconds then Neutral
            SetVillageTemporaryBehavior(villageId, VILLAGE_TEMP_BEHAVIOR_STATE.CHEER, 12)
        }
    }
    _MarkAct1StepAsComplete(act1FlowVal.repairFountain)
}

// ========================= FIND SECOND VILLAGE ONBOARDING =========================
const _StartFindSecondVillageOnboarding = () => {
    if (_CheckIfStepIsCompleteOrActive(act1FlowVal.findSecondVillage)) {
        return
    }

    Logi("_StartFindSecondVillageOnboarding")

    TriggerTutorialForSpecificPlayers(GetAllPlayers(), act1FlowVal.misc.miscTutorials.rebuildingVillages.tutorialKey)
    const secondVillage = _GetSecondVillageEntity()

    const villageId = QUERY_GetVillageIDFromEntity(secondVillage)
    _SetOnboardingAsCurrentStep(act1FlowVal.findSecondVillage)
    _StartLinearOnboardingMessages(act1FlowVal.findSecondVillage)

    OUTPUT_MapSetKeyValue(secondVillage, MAP_KEY.ACT1_VILLAGE_STATE, MAP_ICON_STATE.TARGETED)
    OUTPUT_MapRemoveKey(secondVillage, MAP_KEY.STATE)
    _UpdateIconDistanceForEntity(secondVillage, -1, 20)

    const villageBoundaryVolume = SpawnTriggerVolume(secondVillage, secondVillage, "badger:spatial_trigger_village_generic_small", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_second_village_cinematic",
        triggerEntity: villageBoundaryVolume,
        ownerVillageId: villageId
    })
    LISTENFOR_LocalTimer({
        snippet: "lt_sprinting_tutorial",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.misc.miscTutorials.sprinting.consts.tutorialDelay
    })
}

SNIPPET_LocalTimer("lt_sprinting_tutorial", () => {
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), act1FlowVal.misc.miscTutorials.sprinting.tutorialKey)
})

const _CompleteFindSecondVillageStep = () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.findSecondVillage.global.isThisStepCurrentlyActive) > 0) {
        _MarkAct1StepAsComplete(act1FlowVal.findSecondVillage)
        TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_VILLAGE2ARRIVE)
    }
}

SNIPPET_SpatialPartitionEntered("spe_second_village_cinematic", (triggerEntity, _intruderEntity, _payload) => {
    if (QUERY_GetGlobalVariable(act1Skips.skipVillage1) === 0) {
        _TriggerFirstSecondVillageIntroCine()
        const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
        SetupAudioEntityForBase(villageId, "badger:music_combat_obstacle_village_small_1", false)
        SetAudioPhaseForBase(villageId, INVASION_ATTACK_AUDIO.PHASES.ENDING, "invasion_attack_music_entity")
    }
    OUTPUT_DespawnEntities(triggerEntity)
    Once()
})

// ========================= FREE SECOND VILLAGE ONBOARDING =========================
const _SetupSecondVillageAttack = () => {
    Logi("~~~~ _SetupSecondVillageAttack ~~~~")
    const secondVillageUnderAttack = _GetSecondVillageEntity()
    const secondVillageUnderAttackVillageId = QUERY_GetVillageIDFromEntity(secondVillageUnderAttack)

    const grunter = SpawnEntitiesInVillage("badger:piglin_grunter", act1FlowVal.findSecondVillage.consts.numberOfPiglinsToSpawnAtVillage, TEAM_ORANGE, secondVillageUnderAttackVillageId, 20, 35)
    OUTPUT_SetVillagePersistentEntities(grunter, secondVillageUnderAttackVillageId)
    OUTPUT_AddTag(grunter, act1FlowVal.misc.piglinsAtVillageTag)
    OUTPUT_SetVillagePersistentEntities(grunter, secondVillageUnderAttackVillageId)
    OUTPUT_SetLootTableOverride(grunter, act1FlowVal.misc.piglinLootTableOverride)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_onboarding_hotbar_tut", 1, false)

    const grunterCount = QUERY_GetEntitiesCount(grunter) - act1FlowVal.findSecondVillage.consts.numberOfPiglinsLeftForSuccess
    OUTPUT_SetGlobalVariable(act1FlowVal.freeSecondVillage.global.piglinsSpawned, grunterCount)

    OUTPUT_SetupDestroyEntitiesObjective(secondVillageUnderAttackVillageId, grunter, grunterCount, FACTION_NAME_DBB)

    LISTENFOR_InvasionDestroyEntitiesObjective({
        snippet: "deo_piglins_invading_second_village",
        ownerVillageId: secondVillageUnderAttackVillageId,
        villageId: secondVillageUnderAttackVillageId
    })

    const piglinsInvadingSecondVillageTV = SpawnTriggerVolume(secondVillageUnderAttack, secondVillageUnderAttack, "badger:spatial_trigger_village_generic", TEAM_WILD, secondVillageUnderAttackVillageId, true, ["piglin", "mob"], [], ALLIANCE_ENEMY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_piglins_invading_second_village",
        ownerVillageId: secondVillageUnderAttackVillageId,
        triggerEntity: piglinsInvadingSecondVillageTV
    })

    LISTENFOR_LocalTimer({
        snippet: "lt_play_second_village_spawners_VO",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.freeSecondVillage.miscReminders.timeTosecondVillageBuildSpawnersVO
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_golem_spawner_second_village",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["onboardinggolemspawner"]
    })

    OUTPUT_DamageEntitiesByPercentage(_GetSecondVillageFountain(), 5)
}

SNIPPET_LocalTimer("lt_play_second_village_spawners_VO", () => {
    Logi("~~~~~ lt_play_second_village_spawners_VO ~~~~~")
    const golems = QUERY_GetEntitiesWithTags("golem")
    const secondVillageFountain = _GetSecondVillageFountain()
    if (HasEntities(secondVillageFountain)) {
        const closestPlayerToFountain = GetClosestPlayer(secondVillageFountain)
        const golemsNearThePlayer = FILTER_ByDistance(golems, closestPlayerToFountain, 300)
        const hasMobs = QUERY_GetEntitiesCount(golemsNearThePlayer) > 0
        if (!hasMobs && QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.miscReminders.hasPlayedSecondVillageBuildSpawnersVO) === 0 && QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.miscReminders.hasBuiltSpawners) === 0) {
            Logi("Changed Hotbar Tutorial Resource sent")
            IncrementGlobal(act1FlowVal.freeSecondVillage.miscReminders.hasPlayedSecondVillageBuildSpawnersVO)
            PlayPresentationActionToAll(act1FlowVal.freeSecondVillage.miscReminders.secondVillageBuildSpawnersVO)
        }
    }
})

SNIPPET_BuildingComplete("bc_golem_spawner_second_village", (_spawner, _spawnedUnit) => {
    Logi("~~~~~ Spawned golem second village no VO ~~~~")
    IncrementGlobal(act1FlowVal.freeSecondVillage.miscReminders.hasBuiltSpawners)
    Once()
})

const _ChangeInteractionStateOfVillageChest = (fountain, interactionState) => {
    const chests = QUERY_GetEntitiesWithTags(act1FlowVal.villageChest.villageChestTag)
    const villageChest = FILTER_ByClosest(chests, fountain, 1)
    if (HasEntities(villageChest)) {
        OUTPUT_SetInteractionState(villageChest, interactionState)
    }
}

const _StartFreeSecondVillageOnboarding = () => {
    if (_CheckIfStepIsComplete(act1FlowVal.freeSecondVillage)) {
        return
    }

    Logi("_StartFreeSecondVillageOnboarding")

    _SetOnboardingAsCurrentStep(act1FlowVal.freeSecondVillage)
    _StartLinearOnboardingMessages(act1FlowVal.freeSecondVillage)
    _SetupFailureCondition()

    const secondVillageUnderAttack = _GetSecondVillageEntity()
    const secondVillageUnderAttackVillageId = QUERY_GetVillageIDFromEntity(secondVillageUnderAttack)
    const secondVillageFountain = _GetSecondVillageFountain()
    const mobsCount = QUERY_GetEntitiesCount(QUERY_GetEntitiesWithTags(["wood golem"])) + QUERY_GetEntitiesCount(QUERY_GetEntitiesWithTags(["stone_golem"]))

    _ChangeInteractionStateOfVillageChest(secondVillageFountain, false)

    if (mobsCount < act1FlowVal.freeSecondVillage.consts.numberOfMobsToDemphasizeHud) {
        EmphasizeHUDItem(act1FlowVal.freeSecondVillage.hudItem)

        LISTENFOR_EntitySpawned({
            snippet: "es_spawned_mobs_second_village",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: ["wood golem"]
        })
        LISTENFOR_EntitySpawned({
            snippet: "es_spawned_mobs_second_village",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: ["stone_golem"]
        })
    }

    _ModulateCompassIconForActiveVillage(secondVillageUnderAttackVillageId, act1FlowVal.firstSkirmish.id)

    LISTENFOR_HealthChanged({
        snippet: "hc_second_village_fountain_damaged",
        ownerVillageId: secondVillageUnderAttackVillageId,
        entities: secondVillageFountain,
        normalizedThreshold: 0.1,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE
    })

    LISTENFOR_LocalTimer({
        snippet: "lt_to_send_piglins_to_attack_players_village_2",
        ownerVillageId: secondVillageUnderAttackVillageId,
        waitTime: act1FlowVal.freeSecondVillage.consts.timeToSendPiglinsToAttackPlayers,
        payloadInt: secondVillageUnderAttackVillageId
    })
}
SNIPPET_EntitySpawned("es_spawned_mobs_second_village", (_playerMob) => {
    if (QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.isThisStepCurrentlyActive) <= 0) {
        Once()
        return
    }

    if (IncrementGlobal(act1FlowVal.freeSecondVillage.global.numOfMobsSpawned) >= act1FlowVal.freeSecondVillage.consts.numberOfMobsToDemphasizeHud) {
        DeEmphasizeHUDItem(act1FlowVal.freeSecondVillage.hudItem)
        Once()
    }
})

SNIPPET_HealthChanged("hc_second_village_fountain_damaged", (fountain) => {
    if (IsCurrentAct(ACTS.ACT_1A)) {
        const villageId = QUERY_GetVillageIDFromEntity(fountain)
        SetVillageVariable(villageId, "second_village_fountain_destroyed", 1)
        SetVillageAudioDefault(villageId, "damaged")
    } else {
        Once()
    }
})

SNIPPET_SpatialPartitionEntered("spe_piglins_invading_second_village", (triggerEntity, intruderEntity, _payload) => {
    Logi("spe_piglins_invading_second_village")

    if (_CheckIfStepIsComplete(act1FlowVal.freeSecondVillage)) {
        OUTPUT_DespawnEntities(triggerEntity)
        Once()
    }
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    const villageFountain = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [TAG_VILLAGE_FOUNTAIN], [])
    if (HasEntities(villageFountain)) {
        OUTPUT_AddTether(villageFountain, intruderEntity, 6)
    }
})

SNIPPET_InvasionDestroyEntitiesObjective("deo_piglins_invading_second_village", (villageId, _destroyedEntity, _numberRemaining) => {
    if (QUERY_GetGlobalVariable(act1Skips.skipVillage1) === 0) {
        IncrementGlobal(act1FlowVal.freeSecondVillage.global.piglinsKilled)
        Logi(" deo_piglins_invading_second_village " + QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.piglinsKilled))

        Logi(" ead_piglins_invading_first_village " + QUERY_GetGlobalVariable(act1FlowVal.firstVillageUnderAttack.global.piglinsKilled))
        const diff = QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.piglinsSpawned) - QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.piglinsKilled)

        if (diff === act1FlowVal.misc.numOfPiglinsToSpawnMarkers) {
            let remainingPiglins = FILTER_ByHealthPercentage(QUERY_GetEntitiesWithTags(act1FlowVal.misc.piglinsAtVillageTag), 0, true)
            while (HasEntities(remainingPiglins)) {
                const pig = RandomEntity(remainingPiglins)
                if (!QUERY_DoesEntityHaveAwaypointIcon(pig)) {
                    OUTPUT_AddWaypointIconByExistingEntityArchetype(markers.piglinMarkers, pig)
                }
                remainingPiglins = OPER_Difference(remainingPiglins, pig)
            }
        } else if (diff <= 0 && QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.allPiglinsDefeated) === 0) {
            OUTPUT_RemoveDestroyEntitiesObjective(villageId)

            IncrementGlobal(act1FlowVal.freeSecondVillage.global.allPiglinsDefeated)
            const secondVillageFountain = _GetSecondVillageFountain()
            const player = GetClosestPlayer(secondVillageFountain)
            OUTPUT_TriggerCinematic(act1FlowVal.freeSecondVillage.cinematic, [secondVillageFountain, player])

            const remainingPiglins = QUERY_GetEntitiesWithTags([act1FlowVal.misc.piglinsAtVillageTag])
            if (HasEntities(remainingPiglins)) {
                DelayedDestroy(remainingPiglins, 1, villageId)
            }
            LISTENFOR_CinematicFinished({
                snippet: "cf_second_village_piglins_fear",
                ownerVillageId: villageId,
                cinematicName: act1FlowVal.freeSecondVillage.cinematic
            })

            if (QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.fountainDisabled) === 0) {
                SetVillageAudioDefault(villageId, act1FlowVal.audio.fountainStates.default)
            } else {
                SetVillageAudioDefault(villageId, act1FlowVal.audio.fountainStates.damaged)
            }

            Once()
        }
    } else {
        Once()
    }
})

SNIPPET_CinematicFinished("cf_second_village_piglins_fear", (_payload) => {
    if (QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.fountainDisabled) === 0) {
        _CompleteFreeSecondVillageStep()
    } else {
        const villageFountain = _GetSecondVillageFountain()
        if (!QUERY_IsEntityDisabled(villageFountain)) {
            _CompleteFreeSecondVillageStep()
            return
        }
        PlayPresentationActionToAll(act1FlowVal.freeSecondVillage.vo.fountainDestroyedIntro)
        OUTPUT_AnnounceInterrupt(ONBOARDING_MESSAGE_PRIORITY)
        OUTPUT_Announce(act1FlowVal.freeSecondVillage.message.repairFountain, [])
        const villageId = QUERY_GetVillageIDFromEntity(_GetSecondVillageEntity())

        const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
        const genericMarker = FILTER_ByTagFilter(villageEntities, ["onboarding_generic_marker"], [])
        if (HasEntities(genericMarker)) {
            SpawnEntitiesAt(genericMarker, "badger:fx_attractor_onbording", 1, TEAM_BLUE)
        }
        DeEmphasizeHUDItem(act1FlowVal.freeSecondVillage.hudItem)
        EmphasizeHUDItem(act1FlowVal.repairFountain.hudItem)

        LISTENFOR_LocalTimer({
            snippet: "lt_reminder_to_fix_fountain_second_village",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: act1FlowVal.freeSecondVillage.consts.fountainDestroyedReminderDelay
        })
        LISTENFOR_BuildingStart({
            snippet: "bs_carpenter_second_village",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: ["carpenter"]
        })
        LISTENFOR_EntityEnabled({
            snippet: "ee_repair_fountain_second_village",
            ownerVillageId: villageId,
            enabledEntity: villageFountain,
            villageId: villageId
        })
    }
    Once()
})

SNIPPET_BuildingStart("bs_carpenter_second_village", () => {
    IncrementGlobal(act1FlowVal.freeSecondVillage.global.playerHasStartedRepairingFountain)
    DeEmphasizeHUDItem(act1FlowVal.repairFountain.hudItem)
    Once()
})

SNIPPET_LocalTimer("lt_reminder_to_fix_fountain_second_village", () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.playerHasStartedRepairingFountain) === 0) {
        PlayPresentationActionToAll(act1FlowVal.freeSecondVillage.vo.fountainDestroyedReminder)
    }
})

SNIPPET_EntityEnabled("ee_repair_fountain_second_village", (fountainEntity) => {
    PlayPresentationActionToAll(act1FlowVal.freeSecondVillage.vo.fountainDestroyedSuccess)
    const attractorFX = QUERY_GetEntitiesWithTags("attractorOnboarding")
    if (HasEntities(attractorFX)) OUTPUT_DespawnEntities(attractorFX)
    _CompleteFreeSecondVillageStep()
    SetVillageAudioDefault(QUERY_GetVillageIDFromEntity(fountainEntity), "default")

    Once()
})

SNIPPET_LocalTimer("lt_to_send_piglins_to_attack_players_village_2", (payload) => {
    const remainingPiglins = QUERY_GetEntitiesWithTags([act1FlowVal.misc.piglinsAtVillageTag])
    if (HasEntities(remainingPiglins)) {
        const villageFountain = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(payload.int), [TAG_VILLAGE_FOUNTAIN], [])
        const closestPlayer = GetClosestPlayer(villageFountain)
        if (HasEntities(closestPlayer)) {
            const houses = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(payload.int), ["house"], [])
            OUTPUT_AddTag(houses, "donotattack")

            Logi("lt_to_send_piglins_to_attack_players_village_2")
            //OUTPUT_MoveAttackEntity(remainingPiglins, closestPlayer, CALLBACK_NONE)
        }
    }
})

const _CompleteFreeSecondVillageStep = () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.isThisStepCurrentlyActive) > 0) {
        DeEmphasizeHUDItem(act1FlowVal.freeSecondVillage.hudItem)
        const secondVillageUnderAttack = _GetSecondVillageEntity()
        if (HasEntities(secondVillageUnderAttack)) {
            const villageId = QUERY_GetVillageIDFromEntity(secondVillageUnderAttack)
            OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.ACT1_VILLAGE_STATE, MAP_ICON_STATE.DEFAULT)
            OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.STATE, MAP_ICON_STATE.DEFAULT)
            TriggerCelebration(secondVillageUnderAttack, CELEBRATION_NAMES.MOBS)
            PlayPresentationActionToAll(act1FlowVal.misc.successAudio)
            PlayStingerToClosePlayers(act1FlowVal.audio.stingers.freeVillage, secondVillageUnderAttack)
            _TriggerCompletionVO(act1FlowVal.freeSecondVillage)
            if (GetVillageVariable(villageId, "second_village_fountain_destroyed") === 0) {
                _ResetFountainAudioState(villageId)
            }
            const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
            const houses = FILTER_ByTagFilter(villageEntities, ["house"], [])
            OUTPUT_RemoveTag(houses, "donotattack")

            _StartVillageChestOnboarding()
            TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_VILLAGE2SAVED)
            const villageAttackAudioEntity = GetAudioEntityForBase(villageId, "invasion_attack_music_entity")
            OUTPUT_DestroyEntities(villageAttackAudioEntity)
            OUTPUT_SetFastTravelEnabled(villageId, true)
            OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.FAST_TRAVEL, MAP_FAST_TRAVEL.ENABLED)
            //Set villager behviour Cheer 12 seconds then Neutral
            SetVillageTemporaryBehavior(villageId, VILLAGE_TEMP_BEHAVIOR_STATE.CHEER, 12)
        }
    }
    _MarkAct1StepAsComplete(act1FlowVal.freeSecondVillage)
}

// ========================= OPEN VILLAGE CHEST ONBOARDING =========================
const _StartVillageChestOnboarding = () => {
    if (_CheckIfStepIsCompleteOrActive(act1FlowVal.villageChest)) {
        return
    }

    Logi("_StartVillageChestOnboarding")

    _SetOnboardingAsCurrentStep(act1FlowVal.villageChest)
    _StartLinearOnboardingMessages(act1FlowVal.villageChest)

    const villageId = QUERY_GetVillageIDFromEntity(_GetSecondVillageEntity())

    OUTPUT_ServerMapSetKeyValue(MAP_KEY.VILLAGE_RESOURCE_VISIBILITY, MAP_VISIBILITY.VISIBLE)

    LISTENFOR_LocalTimer({
        snippet: "lt_enable_village_chest_interaction",
        ownerVillageId: villageId,
        waitTime: act1FlowVal.villageChest.consts.timeToEnableInteraction
    })

    LISTENFOR_PlayerEnteredVillage({
        snippet: "pev_enter_second_village_for_chest",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        villageId: villageId,
        threshold: 1
    })
}

SNIPPET_LocalTimer("lt_enable_village_chest_interaction", () => {
    const chests = QUERY_GetEntitiesWithTags(act1FlowVal.villageChest.villageChestTag)
    const villageChest = FILTER_ByClosest(chests, _GetSecondVillageFountain(), 1)
    if (HasEntities(villageChest)) {
        OUTPUT_AddTag(villageChest, "secondVillageChest")
        SpawnEntitiesAt(villageChest, "badger:fx_attractor_onbording", 1, TEAM_BLUE)
        OUTPUT_RemoveVisualState(villageChest, "open_chest")
        OUTPUT_SetInteractionState(villageChest, true)
    }
})

SNIPPET_PlayerEnteredVillage("pev_enter_second_village_for_chest", (_villageId, _playerCount, _payload) => {
    Logi("~~~ pev_enter_second_village_for_chest ~~~")
    if (!_CheckIfStepIsComplete(act1FlowVal.villageChest)) {
        const villageChest = QUERY_GetEntitiesWithTags(["secondVillageChest"])
        if (HasEntities(villageChest)) {
            OUTPUT_RemoveVisualState(villageChest, "open_chest")
        } else {
            Once()
        }
    } else {
        Once()
    }
})

const FinishVillageChestStep = () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.villageChest.global.isThisStepCurrentlyActive) > 0) {
        const secondVillageId = QUERY_GetVillageIDFromEntity(_GetSecondVillageEntity())
        SetVillageTemporaryBehavior(secondVillageId, VILLAGE_TEMP_BEHAVIOR_STATE.CHEER, 5)
        _TriggerCompletionVO(act1FlowVal.villageChest)
        _MarkAct1StepAsComplete(act1FlowVal.villageChest)
        _StartBuildDefensesInSecondVillageStep()
        _StartBuildDefensesAndFountainRepairedTrackers()

        TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_VILLAGE2OPENCHEST)

        const attractorFX = QUERY_GetEntitiesWithTags("attractorOnboarding")
        if (HasEntities(attractorFX)) OUTPUT_DespawnEntities(attractorFX)
    }
}
// ========================= BUILD DEFENSES IN VILLAGE ONBOARDING =========================
const _StartBuildDefensesInSecondVillageStep = () => {
    if (_CheckIfStepIsCompleteOrActive(act1FlowVal.buildDefesesInSecondVillage)) {
        return
    }

    Logi("_StartBuildDefensesInSecondVillageStep")
    _SetOnboardingAsCurrentStep(act1FlowVal.buildDefesesInSecondVillage)

    /*if (_CheckIfBuildDefenseBeatIsComplete()) {
        return
    }*/

    _StartLinearOnboardingMessages(act1FlowVal.buildDefesesInSecondVillage)

    EmphasizeHUDItem(act1FlowVal.buildDefesesInSecondVillage.hudItem)
}

const _StartBuildDefensesAndFountainRepairedTrackers = () => {
    const secondVillageUnderAttack = _GetSecondVillageEntity()
    const secondVillageUnderAttackVillageId = QUERY_GetVillageIDFromEntity(secondVillageUnderAttack)

    OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.ACT1_VILLAGE_STATE, MAP_ICON_STATE.TARGTED_VA_ACT1)
    OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.ATTACKING_FACTION, FACTION_NAME_ATTACK)
    OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.STRENGTH, `1`)

    LISTENFOR_BuildingComplete({
        snippet: "bc_second_village_defenses",
        ownerVillageId: secondVillageUnderAttackVillageId,
        includeTags: ["wall"],
        villageId: secondVillageUnderAttackVillageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_second_village_defenses",
        ownerVillageId: secondVillageUnderAttackVillageId,
        includeTags: ["gate"],
        villageId: secondVillageUnderAttackVillageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_second_village_defenses",
        ownerVillageId: secondVillageUnderAttackVillageId,
        includeTags: ["tower"],
        villageId: secondVillageUnderAttackVillageId
    })

    LISTENFOR_LocalTimer({
        snippet: "lt_to_spawn_act1_skirmish",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.buildDefesesInSecondVillage.consts.timeToStartFirstSkirmish
    })

    for (let i = 0; i < act1FlowVal.buildDefesesInSecondVillage.consts.thresholdsToPrelimenaryVO.length; i++) {
        const waitTime = act1FlowVal.buildDefesesInSecondVillage.consts.timeToStartFirstSkirmish * act1FlowVal.buildDefesesInSecondVillage.consts.thresholdsToPrelimenaryVO[i]
        LISTENFOR_LocalTimer({
            snippet: "lt_build_defenses_prelimenary",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: waitTime,
            payloadInt: i
        })
    }
}

SNIPPET_LocalTimer("lt_build_defenses_prelimenary", (payload) => {
    const vo = act1FlowVal.buildDefesesInSecondVillage.vo.prelimenaryVO[payload.int]
    if (vo !== undefined) {
        Logi("@@@ lt_build_defenses_prelimenary @@@ " + payload.int)
        if (vo !== "") {
            PlayPresentationActionToAll(vo)
        }
    }
})

SNIPPET_BuildingComplete("bc_second_village_defenses", (buildingCompleteEG, payload) => {
    if (_CheckIfStepIsComplete(act1FlowVal.buildDefesesInSecondVillage)) {
        Once()
    } else if (QUERY_GetGlobalVariable(act1FlowVal.buildDefesesInSecondVillage.global.isThisStepCurrentlyActive) > 0) {
        SetVillageTemporaryBehavior(payload.ownerVillageId, VILLAGE_TEMP_BEHAVIOR_STATE.CHEER, 5)
    }
})
SNIPPET_LocalTimer("lt_to_spawn_act1_skirmish", (_payload) => {
    _CompleteBuildDefensesInSecondVillageStep()

    LISTENFOR_LocalTimer({
        snippet: "lt_delay_for_completion_vo_before_first_skirmish",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.buildDefesesInSecondVillage.consts.completionVOdelay
    })
})

const _CompleteBuildDefensesInSecondVillageStep = () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.buildDefesesInSecondVillage.global.isThisStepCurrentlyActive) > 0) {
        Logi("_CompleteBuildDefensesInSecondVillageStep")
        PlayPresentationActionToAll(act1FlowVal.misc.successAudio)
        _TriggerCompletionVO(act1FlowVal.buildDefesesInSecondVillage)
        const secondVillageUnderAttack = _GetSecondVillageEntity()
        if (HasEntities(secondVillageUnderAttack)) {
            OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.STATE, MAP_ICON_STATE.DEFAULT)
        }
        _MarkAct1StepAsComplete(act1FlowVal.buildDefesesInSecondVillage)
        DeEmphasizeHUDItem(act1FlowVal.buildDefesesInSecondVillage.hudItem)
    }
}

SNIPPET_LocalTimer("lt_delay_for_completion_vo_before_first_skirmish", (_payload) => {
    _StartAct1FirstSkirmish()
})

// ========================= First Skirmish =========================

const IsThisAct1VillageAttack = (villageId) => {
    return GetVillageVariable(villageId, "first_skirmish") > 0
}

const Act1VillageAttackIntroCinematic = () => {
    const centralStructure = _GetSecondVillageFountain()
    const closestPlayer = GetClosestPlayer(centralStructure)
    LISTENFOR_CinematicFinished({
        snippet: "cf_village_attack_starts",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: act1FlowVal.buildDefesesInSecondVillage.cinematic
    })
    OUTPUT_TriggerCinematic(act1FlowVal.buildDefesesInSecondVillage.cinematic, [centralStructure, closestPlayer])
}

SNIPPET_CinematicFinished("cf_village_attack_starts", () => {
    PlayPresentationActionToAll(act1FlowVal.firstSkirmish.vo.villageAttackStart)
    Once()
})

const HandlePlayerEnteredVillageDuringAct1VillageAttack = (playerEntity) => {
    if (QUERY_GetGlobalVariable(act1FlowVal.firstSkirmish.global.firstSkirmishNudgesEnabled) === 0) {
        return
    }
    if (AreWeShowingThisAct1NudgeForAllPlayers(act1FlowVal.firstSkirmish.message.repairFountainNudge)) {
        UpdateFirstSkirmishNudge(playerEntity, false)
        Logi("@@@ ENTERRRRR @@@")
        if (DoOnce(act1FlowVal.firstSkirmish.global.voTrackers.returnToOccupiedVillage)) {
            const villageId = QUERY_GetVillageIDFromEntity(_GetSecondVillageEntity())
            const players = OPER_Union(playerEntity, GetPlayersInsideAVillage(villageId))
            PlayPresentationActionToPlayers(act1FlowVal.firstSkirmish.vo.returnToOccupiedVillage, players)
        }
    }
}

const HandlePlayerDefeatsAllPiglinsAfterOccupation = () => {
    if (DoOnce(act1FlowVal.firstSkirmish.global.voTrackers.playerDefeatsOccupyingPiglins)) {
        const villageId = QUERY_GetVillageIDFromEntity(_GetSecondVillageEntity())
        PlayPresentationActionToPlayersInsideAVillage(act1FlowVal.firstSkirmish.vo.playerDefeatsOccupyingPiglins, villageId)
    }
}

const HandlePlayerClearsOccupation = (villageId) => {
    if (DoOnce(act1FlowVal.firstSkirmish.global.voTrackers.playerClearsOccupation)) {
        PlayPresentationActionToPlayersInsideAVillage(act1FlowVal.firstSkirmish.vo.playerClearsOccupation, villageId)
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_end_first_skirmish_after_occupation",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 10
    })
}

SNIPPET_LocalTimer("lt_end_first_skirmish_after_occupation", () => {
    EndAct1VillageAttack(QUERY_GetVillageIDFromEntity(_GetSecondVillageEntity()))
})

const HandleAct1VillageAttackEndedWhilePlayerWasAway = () => {
    Logi("@@@ HandleAct1VillageAttackEndedWhilePlayerWasAway @@@")
    if (QUERY_GetGlobalVariable(act1FlowVal.firstSkirmish.global.isThisStepCurrentlyActive) > 0) {
        const villageId = QUERY_GetVillageIDFromEntity(_GetSecondVillageEntity())
        if (IsThisAct1VillageAttack(villageId)) {
            Logi("@@@ INNN @@@")
            PlayPresentationActionToPlayersOutsideAVillage(act1FlowVal.firstSkirmish.vo.autoComplete, villageId)
        }
    }
}

const HandlePlayerExitedVillageDuringAct1VillageAttack = (playerEntity) => {
    if (QUERY_GetGlobalVariable(act1FlowVal.firstSkirmish.global.firstSkirmishNudgesEnabled) === 0) {
        return
    }
    //The check here prevents the spatial trigger from triggering immediately after it's created for players already inside the village
    //This will prevent the nudge from playing when players enter the trigger until the main nudge has been updated for all players
    //Otherwise, "onboarding_first_skirmish_nudge" will trigger twice for those already inside the village
    if (AreWeShowingThisAct1NudgeForAllPlayers(act1FlowVal.firstSkirmish.message.onboardingNudge) || AreWeShowingThisAct1NudgeForAllPlayers(act1FlowVal.firstSkirmish.message.repairFountainNudge)) {
        UpdateFirstSkirmishNudge(playerEntity, true)
        if (DoOnce(act1FlowVal.firstSkirmish.global.voTrackers.leaveFirstTime)) {
            //PlayPresentationActionToPlayers(act1FlowVal.firstSkirmish.vo.leaveFirstTime, playerEntity)
        }
        LISTENFOR_LocalTimer({
            snippet: "lt_play_reminder_to_return_to_village",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: act1FlowVal.firstSkirmish.consts.timeToReminderToReturnToVillage
        })
    }
}

SNIPPET_LocalTimer("lt_play_reminder_to_return_to_village", () => {
    if (DoOnce(act1FlowVal.firstSkirmish.global.voTrackers.reminderToReturnToVillage)) {
        Logi("@@@ lt_play_reminder_to_return_to_village @@@")
        const villageEnt = _GetSecondVillageEntity()
        const villageId = QUERY_GetVillageIDFromEntity(villageEnt)
        PlayPresentationActionToPlayersOutsideAVillage(act1FlowVal.firstSkirmish.vo.reminderToReturnToVillage, villageId)
    }
})

const EndAct1VillageAttack = (secondVillageId) => {
    const warningMessageTV = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(secondVillageId), ["warning_message_tv"], [])
    if (HasEntities(warningMessageTV)) {
        OUTPUT_DespawnEntities(warningMessageTV)
    }
    const secondVillageUnderAttack = GetVillageEntityFromID(secondVillageId)
    OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.ACT1_VILLAGE_STATE, MAP_ICON_STATE.DEFAULT)
    OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.STATE, MAP_ICON_STATE.DEFAULT)
    OUTPUT_MapRemoveKey(secondVillageUnderAttack, MAP_KEY.INVASION_ACTIVE)
    OUTPUT_AnnounceInterrupt(ONBOARDING_MESSAGE_PRIORITY)
    _TriggerAct1Celebration(secondVillageUnderAttack)
    SetVillageTemporaryBehavior(secondVillageId, VILLAGE_TEMP_BEHAVIOR_STATE.HEAVY_CHEER, 15)
    TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_VILLAGE2DEFENDED)
    _CompleteFirstSkirmishStep()
    _StartThreePiglinCampsOnboarding()

    const fountain = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(secondVillageId), [TAG_VILLAGE_FOUNTAIN], [])
    const chests = QUERY_GetEntitiesWithTags(act1FlowVal.villageChest.villageChestTag)
    if (HasEntities(chests)) {
        const villageChest = FILTER_ByClosest(chests, fountain, 1)
        OUTPUT_RemoveVisualState(villageChest, "open_chest")
        IncrementGlobal(act1FlowVal.firstSkirmish.global.firstSkirmishSurgeVillageChest)
    }
}
const UpdateFirstSkirmishNudge = (playerEntity = undefined, abandoned = false) => {
    const tracker = QUERY_GetGlobalVariable(act1FlowVal.firstSkirmish.global.nudgeTracker)
    const message = tracker === 0 ? act1FlowVal.firstSkirmish.message.onboardingNudge : act1FlowVal.firstSkirmish.message.repairFountainNudge
    if (playerEntity === undefined) {
        _ShowOnboardingMessage(message)
    } else if (abandoned) {
        OUTPUT_AnnounceInterruptPlayer(ONBOARDING_MESSAGE_PRIORITY, playerEntity)
        OUTPUT_AnnouncePlayer(act1FlowVal.firstSkirmish.message.abandonedNudge, [], playerEntity)
    } else {
        OUTPUT_AnnounceInterruptPlayer(ONBOARDING_MESSAGE_PRIORITY, playerEntity)
        OUTPUT_AnnouncePlayer(message, [], playerEntity)
    }
    return message
}

const _StartAct1FirstSkirmish = () => {
    if (_CheckIfStepIsCompleteOrActive(act1FlowVal.firstSkirmish)) {
        return
    }

    Logi("_StartAct1FirstSkirmish")

    _SetOnboardingAsCurrentStep(act1FlowVal.firstSkirmish)
    _StartLinearOnboardingMessages(act1FlowVal.firstSkirmish)
    _SetupFailureCondition()

    const secondVillageUnderAttack = _GetSecondVillageEntity()
    const villageId = QUERY_GetVillageIDFromEntity(secondVillageUnderAttack)

    LISTENFOR_LocalTimer({
        snippet: "lt_play_first_skirmish_spawners_VO",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.firstSkirmish.miscReminders.timeTobarracksVillageBuildSpawnersVO
    })
    LISTENFOR_LocalTimer({
        snippet: "lt_enable_first_skirmish_hud_messages",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 2
    })

    LISTENFOR_PlayerEnteredVillage({
        snippet: "pev_first_skirmish",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        villageId: villageId,
        threshold: 1
    })

    SetVillageVariable(villageId, "first_skirmish", 1)
    OUTPUT_StartInvasionAttackV2TimeOverride(villageId, FACTION_NAME_DBB, 1, act1FlowVal.firstSkirmish.consts.villageAttackDuration)
    OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.ACT1_VILLAGE_STATE, MAP_ICON_STATE.DEFAULT)
    OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.INVASION_ACTIVE, MAP_INVASION_ACTIVE.IS_UNDER_ATTACK)
    OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.ATTACKING_FACTION, FACTION_NAME_ATTACK)
    OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.STRENGTH, `1`)

    LISTENFOR_LocalTimer({
        snippet: "lt_village_attack_almost_done",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.firstSkirmish.consts.villageAttackDuration / 2.0
    })
}

SNIPPET_PlayerEnteredVillage("pev_first_skirmish", (villageId, _playerCount, _payload) => {
    if (_CheckIfStepIsComplete(act1FlowVal.firstSkirmish)) {
        Once()
        return
    }
    if (QUERY_GetGlobalVariable(act1FlowVal.firstSkirmish.global.startedWhilePlayerWasAway) > 0) {
        _SetupFailureCondition()
    }

    //If the player leaves the village a few seconds before the attack ends --> The player's defenses defeat the piglins while the player is leaving -->
    //The NIS won't be able to play --> EndAct1VillageAttack will not be called --> Progression blocked
    //So here we check for when the player enters the village, if the attack is over and the step is still active, play the NIS.
    //The CF listener is in invasion_attacks_v2
    //FILTER_InvasionParticipant will return the village entity only if it's under attack or occupied
    const IsTheVillageUnderAttack = HasEntities(FILTER_InvasionParticipant(GetVillageEntityFromID(villageId), true))
    if (!IsTheVillageUnderAttack && QUERY_GetGlobalVariable(act1FlowVal.firstSkirmish.global.isThisStepCurrentlyActive) > 0) {
        const firstCandidate = FILTER_ByVillageID(QUERY_GetEntitiesWithTagFilter([TAG_VILLAGE_FOUNTAIN], []), villageId)
        const defenseSuccess = !QUERY_IsEntityDisabled(firstCandidate)
        if (defenseSuccess) {
            //Need to delay this a bit in case the player enters the village just as their defenses defeat the piglins which can cause the NIS to play twice (once for the success and once for entering the village after a success)
            //The delay prevents the race condition
            LISTENFOR_LocalTimer({
                snippet: "lt_village_attack_done_player_entered_village",
                ownerVillageId: villageId,
                waitTime: 4
            })
        }
        Once()
    }
})

SNIPPET_LocalTimer("lt_village_attack_done_player_entered_village", (payload) => {
    Logi("### lt_village_attack_done_player_entered_village ###")
    const villageId = payload.ownerVillageId
    if (GetVillageVariable(villageId, "vil01_c05_defended") === 0) {
        const firstCandidate = FILTER_ByVillageID(QUERY_GetEntitiesWithTagFilter([TAG_VILLAGE_FOUNTAIN], []), villageId)
        const player = GetClosestPlayer(firstCandidate)
        const cineId = "vil01_c05_defended"
        const remainingPiglins = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), TAGS_PIGLIN_MOB, [])
        if (HasEntities(remainingPiglins)) {
            OUTPUT_ApplyStatusEffectWithSource(remainingPiglins, firstCandidate, STATUS_EFFECT.FEARED, 200)
            OUTPUT_RemoveLeash(remainingPiglins)
        }
        LISTENFOR_CinematicFinished({
            snippet: "cf_village_defended",
            ownerVillageId: villageId,
            cinematicName: cineId,
            payloadEntities: remainingPiglins
        })
        OUTPUT_TriggerCinematic(cineId, [firstCandidate, player])
        SetVillageVariable(villageId, "vil01_c05_defended", 1)
    }
})

SNIPPET_LocalTimer("lt_village_attack_almost_done", (_payload) => {
    if (QUERY_GetGlobalVariable(act1FlowVal.firstSkirmish.global.isThisStepCurrentlyActive) > 0) {
        if (DoOnce(act1FlowVal.firstSkirmish.global.voTrackers.almostDone)) {
            const villageEnt = _GetSecondVillageFountain()
            //This is the only one that needs to happen exclusively to players inside the village
            //So if this is a single player session and the player is outside, we can't play this (it returns all player in case of village suspension)
            if (HasEntities(villageEnt)) {
                const villageId = QUERY_GetVillageIDFromEntity(villageEnt)
                PlayPresentationActionToPlayersInsideAVillage(act1FlowVal.firstSkirmish.vo.almostDone, villageId)
            }
        }
    }
})

SNIPPET_LocalTimer("lt_play_first_skirmish_spawners_VO", () => {
    Logi("~~~~~ lt_play_first_skirmish_spawners_VO ~~~~~")
    if (QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.miscReminders.hasBuiltSpawners) === 0) {
        //PlayPresentationActionToAll(act1FlowVal.freeSecondVillage.miscReminders.secondVillageBuildSpawnersVO)
        //TriggerTutorialForSpecificPlayers(GetAllPlayers(), act1FlowVal.misc.miscTutorials.placedSpawner.tutorialKey)
    }
})

SNIPPET_LocalTimer("lt_enable_first_skirmish_hud_messages", () => {
    Logi("~~~~~ lt_enable_first_skirmish_hud_messages ~~~~~")
    IncrementGlobal(act1FlowVal.firstSkirmish.global.firstSkirmishNudgesEnabled)
})

const _CompleteFirstSkirmishStep = () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.firstSkirmish.global.isThisStepCurrentlyActive) > 0) {
        PlayPresentationActionToAll(act1FlowVal.misc.successAudio)
        _TriggerCompletionVO(act1FlowVal.firstSkirmish)

        const secondVillageUnderAttack = _GetSecondVillageEntity()
        if (HasEntities(secondVillageUnderAttack)) _TriggerAct1Celebration(secondVillageUnderAttack)
        _ResetFountainAudioState(QUERY_GetVillageIDFromEntity(secondVillageUnderAttack))
    }
    _MarkAct1StepAsComplete(act1FlowVal.firstSkirmish)
}

// ========================= START THREE PIGLIN CAMPS ONBOARDING =========================
const _StartThreePiglinCampsOnboarding = () => {
    if (_CheckIfStepIsCompleteOrActive(act1FlowVal.threePiglinCamps)) {
        return
    }

    Logi("_StartThreePiglinBasesOnboarding")
    _FindAndTagThirdVillage()
    _ResetIconDistanceForEntity(_GetSecondVillageEntity())
    const thirdVillage = _GetThirdVillageEntity()
    const villageId = QUERY_GetVillageIDFromEntity(thirdVillage)
    _ModulateCompassIconForActiveVillage(villageId, act1FlowVal.threePiglinCamps.id)

    _SetOnboardingAsCurrentStep(act1FlowVal.threePiglinCamps)
    _StartLinearOnboardingMessages(act1FlowVal.threePiglinCamps)

    const placementSlotName = GetCampPlatementSlotFromVillage(thirdVillage)
    if (placementSlotName === "") {
        Loge("CRITICAL ERROR - CANNOT SPAWN THE THREE PIGLIN CAMPS - ACT1 FLOW WILL BREAK")
        return
    }
    //_UpdateIconDistanceForEntity(thirdVillage, -1, 20)
    const allAliveVillages = QUERY_GetAllAliveVillages()
    const pois = FILTER_ByFactionName(allAliveVillages, FACTION_POI_ALL)
    act1FlowVal.threePiglinCamps.bases.sizes.forEach((baseSize) => {
        OUTPUT_PlacementStart()
        OUTPUT_PlacementSlotTag(placementSlotName)
        const otherPiglinOutposts = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_NAME_DBB)
        Logi("### otherPiglinOutposts ### " + QUERY_GetEntitiesCount(otherPiglinOutposts))
        OUTPUT_PlacementAddExcludeProximityRule(allAliveVillages, 150, BSHARP_PLACEMENT.requireAll)
        OUTPUT_PlacementAddExcludeProximityRule(otherPiglinOutposts, 180, BSHARP_PLACEMENT.requireAll)
        OUTPUT_PlacementAddExcludeProximityRule(pois, 150, BSHARP_PLACEMENT.requireAll)
        OUTPUT_PlacementAddExcludeOceanProximityRule(50)
        if (OUTPUT_PlacementExecute()) {
            LISTENFOR_VillageGenerated({
                snippet: "vg_act_1_three_bases",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                factionName: act1FlowVal.threePiglinCamps.bases.factionName,
                villageSize: baseSize
            })
            Logi(`Sucessfuly placed piglin skirmish base ${baseSize}`)
            OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.OB_BIOME, GetStampTextureForFaction(act1FlowVal.threePiglinCamps.bases.factionName, baseSize), false)
            OUTPUT_SpawnVillage(QUERY_PlacementResultPosition(), act1FlowVal.threePiglinCamps.bases.archetype, baseSize, act1FlowVal.threePiglinCamps.bases.factionName, TEAM_ORANGE)
        } else {
            Loge(`Failed to place piglin skirmish base. Gonna try tiers ${baseSize}`)
            if (!_TryRunThreeOutpostsPlacementTiers(baseSize)) {
                Logi("@@@@ couldn't place it even with tiers")
                IncrementGlobal(act1FlowVal.threePiglinCamps.global.campsDestroyed)
            }
        }
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_three_camp_barracks",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["barracks"]
    })

    LISTENFOR_ResourcesChanged({
        snippet: "rc_emerald_three_camps",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        resourceName: "emerald"
    })

    LISTENFOR_Timer({
        snippet: "t_go_to_camps_reminder",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        timerName: act1FlowVal.threePiglinCamps.timers.goToCampsReminderTimer,
        threshold: 0
    })
    OUTPUT_SetNamedTimer(act1FlowVal.threePiglinCamps.timers.goToCampsReminderTimer, act1FlowVal.threePiglinCamps.consts.timeGoToCampsReminder)
}

SNIPPET_Timer("t_go_to_camps_reminder", () => {
    const goToCampsReminder = IncrementGlobal(act1FlowVal.threePiglinCamps.global.goToCampsReminder)
    if (goToCampsReminder > 2) {
        return
    }
    Logv("~~~~~~ t_go_to_camps_reminder Triggering go to camps reminder ~~~~~~")

    const voTutorial = goToCampsReminder <= 1 ? act1FlowVal.threePiglinCamps.vo.goToCampsReminder1 : act1FlowVal.threePiglinCamps.vo.goToCampsReminder2
    PlayPresentationActionToAll(voTutorial)

    // Set the timer again to ping a second time
    if (goToCampsReminder <= 1) {
        OUTPUT_SetNamedTimer(act1FlowVal.threePiglinCamps.timers.goToCampsReminderTimer, act1FlowVal.threePiglinCamps.consts.timeGoToCampsReminder)
    }
})

const _TellThePlayerAboutLapisInChest = (fountain) => {
    PlayPresentationActionToAll(act1FlowVal.misc.getLapisFromChestVO)

    OUTPUT_SetGlobalVariable(act1FlowVal.misc.getLapisFromChestEnabled, 1)
    const chests = QUERY_GetEntitiesWithTags(act1FlowVal.villageChest.villageChestTag)
    if (HasEntities(chests)) {
        const villageChest = FILTER_ByClosest(chests, fountain, 1)
        OUTPUT_RemoveVisualState(villageChest, "open_chest")
    }
    LISTENFOR_LocalTimer({
        snippet: "lt_out_of_lapis_hint",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 5
    })
}

SNIPPET_ResourcesChanged("rc_emerald_three_camps", (_resourceName, _teamID, _previousAmount, currentAmount) => {
    if (QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.isThisStepCurrentlyActive) > 0) {
        if (currentAmount <= 0) {
            if (QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.barracksTracker) <= 0) {
                _TellThePlayerAboutLapisInChest(_GetSecondVillageFountain())
            }
        }
    } else if (QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.stepComplete) > 0) {
        Once()
    }
})

SNIPPET_LocalTimer("lt_out_of_lapis_hint", () => {
    Logi("lt_out_of_lapis_hint")
    OUTPUT_Announce(act1FlowVal.misc.getLapisFromChestHint, [])
})

SNIPPET_NonPopCappedEntityDestroyed("ed_three_camp_barracks", (_entity, _payload) => {
    if (QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.isThisStepCurrentlyActive) > 0) {
        DecrementGlobal(act1FlowVal.threePiglinCamps.global.barracksTracker)
    } else if (QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.stepComplete) > 0) {
        Once()
    }
})
SNIPPET_VillageGenerated("vg_act_1_three_bases", (villageId, _payload) => {
    const villageEntity = GetVillageEntityFromID(villageId)

    Logi("@@@@@ vg_act_1_three_bases @@@@@@ " + villageId)

    //OUTPUT_AddWaypointIconByExistingEntityArchetype("badger:waypoint_marker_piglin_dark_beacon_base_dbb_small", villageEntity)
    OUTPUT_SetOverrideForCompassMaxRange(villageEntity, -1)
    OUTPUT_SetIconPriority(villageEntity, 5)

    LISTENFOR_BuildingComplete({
        snippet: "bc_three_camps_heart",
        ownerVillageId: villageId,
        includeTags: ["heartBuildable"],
        villageId: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_three_camps_barracks",
        ownerVillageId: villageId,
        includeTags: ["barracks"],
        villageId: villageId
    })

    LISTENFOR_VillageDestroyed({
        snippet: "vd_three_camps_village_destroyed",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        villageId: villageId,
        despawned: false
    })

    LISTENFOR_HealthChanged({
        snippet: "hc_outpost_damaged",
        ownerVillageId: villageId,
        villageId: villageId,
        direction: HEALTH_DIRECTION.DAMAGE
    })

    LISTENFOR_PlayerEnteredVillage({
        snippet: "pev_three_outposts",
        ownerVillageId: villageId,
        villageId: villageId,
        threshold: 1
    })

    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.ONBOARDING, MAP_ONBOARDING.ENABLED)
})

SNIPPET_HealthChanged("hc_outpost_damaged", () => {
    if (DoOnce("gv_" + FunnelSteps.ACT1_DAMAGEANYPIGLINOUTPOST.key)) {
        TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_DAMAGEANYPIGLINOUTPOST)
    }
    Once()
})

SNIPPET_BuildingComplete("bc_three_camps_heart", (buildingCompleteEG, _payload) => {
    //set heart entities as deferred deaths for cinematic purposes on the first and third base
    if (QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.isThisStepCurrentlyActive) > 0) {
        const villageId = QUERY_GetVillageIDFromEntity(buildingCompleteEG)
        DeltaVillageVariable(villageId, "three_camps_hearts", 1)
        OUTPUT_SetDeferredDeath(buildingCompleteEG, true)
        Logi("@@@@@ dd heart listener set @@@@@@ ")
        LISTENFOR_DeferredDeath({
            snippet: "dd_heart_destroyed",
            ownerVillageId: villageId,
            villageId: villageId,
            entities: buildingCompleteEG
        })
    }
})

SNIPPET_BuildingComplete("bc_three_camps_barracks", (buildingCompleteEG, _payload) => {
    Logi("bc_three_camps_barracks")
    IncrementGlobal(act1FlowVal.threePiglinCamps.global.barracksTracker)
    OUTPUT_SetSpawnerAddLootOverride(buildingCompleteEG, act1FlowVal.misc.piglinLootTableOverride)
})

SNIPPET_PlayerEnteredVillage("pev_three_outposts", (villageId, _playerCount, _payload) => {
    Logi("~~~~~~ pev_three_outposts ~~~~~")
    DoOnce(act1FlowVal.threePiglinCamps.global.reminderStopper)
    LISTENFOR_HealthChanged({
        snippet: "hc_three_outposts_strucutre_damaged",
        ownerVillageId: villageId,
        includeTags: ["piglinStructure"],
        normalizedThreshold: 0.99,
        triggerMode: HEALTH_TRIGGER_MODE.BELOW,
        direction: HEALTH_DIRECTION.DAMAGE
    })

    Once()
})

SNIPPET_HealthChanged("hc_three_outposts_strucutre_damaged", (structure) => {
    Logi("@@@ hc_three_outposts_strucutre_damaged @@@@")
    const villageId = QUERY_GetVillageIDFromEntity(structure)
    LISTENFOR_LocalTimer({
        snippet: "lt_three_outposts_response_cooldown",
        ownerVillageId: villageId,
        waitTime: 20,
        payloadInt: villageId
    })
    GatherNearestUnitsAndSendToLocation(["piglin", "mob"], [""], villageId, structure, 75, "", "")
    Once()
})

SNIPPET_LocalTimer("lt_three_outposts_response_cooldown", (payload) => {
    LISTENFOR_HealthChanged({
        snippet: "hc_three_outposts_strucutre_damaged",
        ownerVillageId: payload.int,
        includeTags: ["piglinStructure"],
        normalizedThreshold: 0.99,
        triggerMode: HEALTH_TRIGGER_MODE.BELOW,
        direction: HEALTH_DIRECTION.DAMAGE
    })
})

SNIPPET_VillageDestroyed("vd_three_camps_village_destroyed", (villageId, _payload) => {
    //For /ad
    Logi("@@@@ vd_three_camps_village_destroyed @@@@")
    _DefeatOneCamp(villageId)
    Once()
})

const _DefeatOneCamp = (villageId) => {
    const villageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.VISIBILITY, MAP_VISIBILITY.HIDDEN)
    Logi("@@@@  _DefeatOneCamp @@@@")
    OUTPUT_SetIconOff(villageEntity)
    const aliveCamps = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_NAME_DBB)
    const aliveCampsCount = QUERY_GetEntitiesCount(aliveCamps)

    OUTPUT_AnnounceInterrupt(ONBOARDING_MESSAGE_PRIORITY)
    DeEmphasizeHUDItem(act1FlowVal.threePiglinCamps.hudItem)

    Logi("@@@@ aliveCampsCount @@@@ " + aliveCampsCount)

    if (aliveCampsCount === 0) {
        TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_PIGLINOUTPOST3DEFEATED)
        _PlayDestructionCampVO(0, 7, villageId)
        LISTENFOR_LocalTimer({
            snippet: "lt_force_play_three_camps_fmv",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: act1FlowVal.threePiglinCamps.consts.timeToPlayPeepCinematic,
            payloadString: act1FlowVal.threePiglinCamps.cinematic.creeperCoPeepCine,
            payloadInt: villageId
        })

        _TriggerAct1Celebration(villageEntity)
    } else if (aliveCampsCount === 1) {
        OUTPUT_SetGlobalVariable(act1FlowVal.threePiglinCamps.global.campsDestroyed, 2)
        TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_PIGLINOUTPOST2DEFEATED)
        PlayStingerToClosePlayers(act1FlowVal.audio.stingers.outpostDestroyed, villageEntity)
        _PlayDestructionCampVO(0, 7, villageId)
        LISTENFOR_LocalTimer({
            snippet: "lt_update_three_camps_nudge",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 10
        })
    } else if (aliveCampsCount === 2) {
        OUTPUT_SetGlobalVariable(act1FlowVal.threePiglinCamps.global.campsDestroyed, 1)
        TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_PIGLINOUTPOST1DEFEATED)
        PlayStingerToClosePlayers(act1FlowVal.audio.stingers.outpostDestroyed, villageEntity)
        _TriggerAct1Celebration(villageEntity)
        _PlayDestructionCampVO(0, 7, villageId)
        LISTENFOR_LocalTimer({
            snippet: "lt_force_play_three_camps_fmv",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: act1FlowVal.threePiglinCamps.consts.timeToPlayPeepCinematic,
            payloadString: act1FlowVal.threePiglinCamps.cinematic.firstPeepCine,
            payloadInt: villageId
        })
    }
}

SNIPPET_LocalTimer("lt_force_play_three_camps_fmv", (payload) => {
    if (DoOnce("gv_" + payload.string + "_played")) {
        TriggerCinematicAndListenForFinish(payload.string, GetVillageEntityFromID(payload.int))
    }
})

const SpawnAct1OutpostTriggerVolume = (villageEntity, villageId, baseSize) => {
    switch (baseSize) {
        case BASE_SIZE_ACT_1_A:
            return SpawnTriggerVolume(villageEntity, undefined, "badger:spatial_trigger_act1_tower_camp", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
        case BASE_SIZE_ACT_1_B:
            return SpawnTriggerVolume(villageEntity, undefined, "badger:spatial_trigger_act1_base_first_threshold", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
        case BASE_SIZE_ACT_1_C:
            return SpawnTriggerVolume(villageEntity, undefined, "badger:spatial_trigger_act1_base_gameplay_area", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
        default:
            Loge("act 1 outpost has incorrect base size")
    }
}

SNIPPET_DeferredDeath("dd_heart_destroyed", (entity) => {
    const villageId = QUERY_GetVillageIDFromEntity(entity)
    const heartsCount = DeltaVillageVariable(villageId, "three_camps_hearts", -1)
    Logi("@@@@ dd_heart_destroyed @@@@ " + heartsCount)
    if (heartsCount === 0) {
        const villageEntity = GetVillageEntityFromID(villageId)
        const closestPlayer = GetClosestPlayer(entity)
        _TriggerAct1Celebration(villageEntity)
        if (HasEntities(closestPlayer)) {
            if (QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.campsDestroyed) === 2) {
                OUTPUT_TriggerCinematic(act1FlowVal.threePiglinCamps.cinematic.cinematic2, entity)
            } else {
                OUTPUT_DestroyEntities(entity)
            }
        } else {
            LISTENFOR_LocalTimer({
                snippet: "lt_postPiglinCampDestroyedDelayedVO",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                waitTime: act1FlowVal.threePiglinCamps.consts.postDetroyCampVODelay,
                payloadInt: villageId
            })
            OUTPUT_DestroyEntities(entity)
        }
        Once()
    } else {
        OUTPUT_DestroyEntities(entity)
    }
})

SNIPPET_LocalTimer("lt_update_three_camps_nudge", () => {
    const message = _GetCurrentCampsNudge()
    if (message !== "") {
        _ShowOnboardingMessage(message)
    }
})

SNIPPET_CinematicFinished(`cf_${act1FlowVal.threePiglinCamps.cinematic.firstPeepCine}`, (payload) => {
    _FinishMobPeep1(payload.int)
    Once()
})

SNIPPET_CinematicFinished(`cf_${act1FlowVal.threePiglinCamps.cinematic.creeperCoPeepCine}`, (payload) => {
    _FinishMobPeep2(payload.int)
    Once()
})

const _FinishMobPeep1 = (_villageId) => {
    LISTENFOR_LocalTimer({
        snippet: "lt_update_three_camps_nudge",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 3
    })
}

const _FinishMobPeep2 = (_villageId) => {
    _CompleteThreePiglinCampsStep()
    //If the player has already done the upgrade beat out of order, then don't play the golem NIS
    if (!_CheckIfStepIsComplete(act1FlowVal.wofUpgrade)) {
        LISTENFOR_LocalTimer({
            snippet: "lt_start_well_of_fate_onboarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 1
        })
    } else {
        _StartSecondSkirmishOnboarding()
    }
}
SNIPPET_LocalTimer("lt_start_well_of_fate_onboarding", () => {
    _StartWellOfFateUpgradeOnboarding()
})

const _PlayDestructionCampVO = (override = 0, delay = 0, villageId = -1) => {
    IncrementGlobal(act1FlowVal.threePiglinCamps.global.campDestroyedVOToPlay)
    let voToPlay = 0
    if (override === 0) {
        voToPlay = QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.campDestroyedVOToPlay)
    } else {
        voToPlay = override
    }
    Logi("_PlayDestructionCampVO = " + voToPlay)
    let line = ""
    if (voToPlay === 1) {
        line = act1FlowVal.threePiglinCamps.vo.firstCampDestroyed
    } else if (voToPlay === 2) {
        line = act1FlowVal.threePiglinCamps.vo.secondCampDestroyed
    } else if (voToPlay === 3) {
        line = act1FlowVal.threePiglinCamps.vo.complete
    }

    if (delay > 0) {
        if (villageId !== undefined) {
            const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
            if (baseSize === BASE_SIZE_ACT_1_A) {
                line = act1FlowVal.threePiglinCamps.vo.netheSpreaderCampDestroyedReaction
            }
        }
        LISTENFOR_LocalTimer({
            snippet: "lt_delayed_destruction_vo",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: delay,
            payloadString: line,
            payloadInt: villageId
        })

        return
    }
    Logi("YOU SHOULD BE HEARING ----- " + line + " -----")
    if (villageId === -1) {
        PlayPresentationActionToAll(line)
    } else {
        const villagEnt = FILTER_ByVillageID(QUERY_GetAllVillages(), villageId)

        if (HasEntities(villagEnt)) {
            PlayPresentationActionToClosePlayers(line, villagEnt, 100)
        } else {
            PlayPresentationActionToAll(line)
        }
    }
}

SNIPPET_LocalTimer("lt_delayed_destruction_vo", (payload) => {
    Logi("(DELAYED) YOU SHOULD BE HEARING ----- " + payload.string + " -----")
    const line = payload.string
    const villageId = payload.int
    if (villageId === -1 && villageId !== undefined) {
        PlayPresentationActionToAll(line)
    } else {
        const villagEnt = FILTER_ByVillageID(QUERY_GetAllVillages(), villageId)
        if (HasEntities(villagEnt)) {
            PlayPresentationActionToClosePlayers(line, villagEnt, 100)
        } else {
            PlayPresentationActionToAll(line)
        }
    }
})

SNIPPET_LocalTimer("lt_postPiglinCampDestroyedDelayedVO", (payload) => {
    Logi("lt_postPiglinCampDestroyedDelayedVO")
    if (QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.campsDestroyed) === 2) {
        _PlayDestructionCampVO()
        PlayStingerToClosePlayers(act1FlowVal.audio.stingers.outpostDestroyed, GetVillageEntityFromID(payload.int))
    }
})

const _CompleteThreePiglinCampsStep = () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.isThisStepCurrentlyActive) > 0) {
        Logi("~~~~~~ _CompleteThreePiglinCampsStep ~~~~~")
        PlayPresentationActionToAll(act1FlowVal.misc.successAudio)
        _ResetFountainAudioState(QUERY_GetVillageIDFromEntity(_GetThirdVillageEntity()))

        if (QUERY_GetGlobalVariable(act1FlowVal.misc.getLapisFromChestEnabled) > 0) {
            OUTPUT_SetGlobalVariable(act1FlowVal.misc.getLapisFromChestEnabled, 0)

            const chests = QUERY_GetEntitiesWithTags(act1FlowVal.villageChest.villageChestTag)
            const villageChest = FILTER_ByClosest(chests, _GetThirdVillageFountain(), 1)
            OUTPUT_AddVisualState(villageChest, "open_chest")
        }

        const thirdVillage = _GetThirdVillageEntity()

        OUTPUT_MapSetKeyValue(thirdVillage, MAP_KEY.ACT1_VILLAGE_STATE, MAP_ICON_STATE.DEFAULT)
        OUTPUT_MapSetKeyValue(thirdVillage, MAP_KEY.STATE, MAP_ICON_STATE.DEFAULT)
    }
    _MarkAct1StepAsComplete(act1FlowVal.threePiglinCamps)
    _SetOnboardingAsCurrentStep(act1FlowVal.wofUpgrade) // Setting this now to make sure the compass is updated if the player exits the game immediately after defeating the final Outpost
}
// ========================= WOF UPGRADE ONBOARDING =========================
const _StartWellOfFateUpgradeOnboarding = () => {
    if (_CheckIfStepIsComplete(act1FlowVal.wofUpgrade)) {
        _StartSecondSkirmishOnboarding()
        return
    }
    Logi("_StartWellOfFateUpgradeOnboarding")

    LISTENFOR_LocalTimer({
        snippet: "lt_fast_travel_onboarding",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.misc.miscVO.fastTravel.timers.timeToTellPlayerAboutFastTravel
    })

    _StartLinearOnboardingMessages(act1FlowVal.wofUpgrade)

    const wellOfFateVillage = GetVillageEntityFromFaction(WELL_OF_FATE)
    _UpdateIconDistanceForEntity(wellOfFateVillage, -1, 20)
    const villageId = QUERY_GetVillageIDFromEntity(wellOfFateVillage)
    _ModulateCompassIconForActiveVillage(villageId, act1FlowVal.wofUpgrade.id)

    LISTENFOR_PlayerExitedVillage({
        snippet: "pev_exited_modulated_wof",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        villageId: villageId
    })

    Logi("WELL OF FATE VILLAGE FOUND  = " + HasEntities(wellOfFateVillage))
    const wellOfFatePlayerGreetingsTV = SpawnTriggerVolume(wellOfFateVillage, wellOfFateVillage, "badger:spatial_trigger_well_of_fate_player_enters", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_wof_upgrade_player_returns_onboarding",
        ownerVillageId: villageId,
        triggerEntity: wellOfFatePlayerGreetingsTV
    })

    const wellOfFateSpawnGolems = SpawnTriggerVolume(wellOfFateVillage, wellOfFateVillage, "badger:spatial_trigger_generic_large", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_spawn_mossy_and_grindstone_golems",
        ownerVillageId: villageId,
        triggerEntity: wellOfFateSpawnGolems
    })

    _GivePlayerNeedeResourcesToBuildUpgrade()
}

const _GivePlayerNeedeResourcesToBuildUpgrade = () => {
    const amountOfPrismarine = QUERY_GetCampaignResource("xp_common")
    const amountOfStone = QUERY_GetCampaignResource("stone")
    if (amountOfPrismarine < 100) {
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "xp_common", 100 - amountOfPrismarine, false)
    }
    if (amountOfStone < 100) {
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "stone", 100 - amountOfStone, false)
    }
}

SNIPPET_PlayerExitedVillage("pev_exited_modulated_wof", (_villageId, _payload) => {
    Logi("~~~ pev_exited_modulated_wof ~~~  ")
    if (QUERY_GetGlobalVariable(act1FlowVal.wofUpgrade.global.stepComplete) === 0) {
        //const villageEnt = GetVillageEntityFromID(villageId)
        //OUTPUT_SetOverrideForCompassMaxRange(villageEnt, -1)
        if (QUERY_GetGlobalVariable(act1FlowVal.wofUpgrade.global.hasReturnedToWoF) > 0) {
            if (DoOnce(act1FlowVal.wofUpgrade.global.hasPlayedSongBookReminderVO)) {
                Logi("~~~~~~ Playing wof upgrade reminder on exit ~~~~~~")
                PlayPresentationActionToAll(act1FlowVal.wofUpgrade.vo.openSongbookReminder)
            }
        }
    } else {
        Once()
    }
})

SNIPPET_LocalTimer("lt_fast_travel_onboarding", () => {
    if (DoOnce(act1FlowVal.misc.miscVO.fastTravel.tracker)) {
        TriggerTutorialForSpecificPlayers(GetAllPlayers(), act1FlowVal.misc.miscTutorials.fastTravel.tutorialKey)
    }
})

SNIPPET_PlayerFastTravelled("ft_onboarding_fast_travel", () => {
    OUTPUT_SetGlobalVariable(act1FlowVal.misc.miscVO.fastTravel.tracker, 2)
    Once()
})

SNIPPET_SpatialPartitionEntered("spe_wof_upgrade_player_returns_onboarding", (triggerEntity, _enteringEntity, _payload) => {
    const fastTravelAttractors = QUERY_GetEntitiesWithTags("attractorOnboarding")
    if (HasEntities(fastTravelAttractors)) OUTPUT_DespawnEntities(fastTravelAttractors)
    if (_CheckIfStepIsComplete(act1FlowVal.wofUpgrade)) {
        OUTPUT_DespawnEntities(triggerEntity)
        Once()
        return
    }

    IncrementGlobal(act1FlowVal.wofUpgrade.global.hasReturnedToWoF)
    LISTENFOR_CinematicFinished({
        snippet: "cf_support_and_cavalry_golem",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: act1FlowVal.wofUpgrade.cinematic
    })

    InterruptOnboardingMessage(true)
    OUTPUT_TriggerCinematic(act1FlowVal.wofUpgrade.cinematic, [])

    OUTPUT_DespawnEntities(triggerEntity)
    Once()
})

SNIPPET_CinematicFinished("cf_support_and_cavalry_golem", () => {
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, act1FlowVal.wofUpgrade.neededResourceToAllowUpgrade, 1, false)
    LISTENFOR_LocalTimer({
        snippet: "lt_play_wof_upgrade_return_onboarding_vo",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.wofUpgrade.consts.timeToTriggerReturnToWofVO
    })

    TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_ARRIVEWELLOFFATE)

    LISTENFOR_HudEvent({
        snippet: "he_wof_recipe_book_opened",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: HUD_EVENT_NAME.SONGBOOK_OPENED
    })

    LISTENFOR_HudEvent({
        snippet: "he_wof_navigated_to_upgrade_page",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: HUD_EVENT_NAME.DYNAMIC.SONGBOOK_TAB_CHANGED + "village"
    })

    LISTENFOR_HudEvent({
        snippet: "he_wof_navigated_to_a_different_page",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: HUD_EVENT_NAME.DYNAMIC.SONGBOOK_TAB_CHANGED + "mobs"
    })

    LISTENFOR_HudEvent({
        snippet: "he_wof_navigated_to_a_different_page",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: HUD_EVENT_NAME.DYNAMIC.SONGBOOK_TAB_CHANGED + "resourcing"
    })

    LISTENFOR_HudEvent({
        snippet: "he_wof_navigated_to_a_different_page",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: HUD_EVENT_NAME.DYNAMIC.SONGBOOK_TAB_CHANGED + "utility"
    })

    LISTENFOR_HudEvent({
        snippet: "he_wof_navigated_to_a_different_page",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: HUD_EVENT_NAME.DYNAMIC.SONGBOOK_TAB_CHANGED + "journal"
    })

    LISTENFOR_HudEvent({
        snippet: "he_wof_picked_upgrade",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: HUD_EVENT_NAME.DYNAMIC.CUSTOMIZED_HOTBAR + "badger:unlock_gather_uncommon"
    })
    Once()
})

SNIPPET_HudEvent("he_wof_recipe_book_opened", (_eventName, _payload) => {
    Logi("~~~~~~~~ he_wof_recipe_book_opened ~~~~~~~~")
    if (DoOnce(act1FlowVal.wofUpgrade.global.hasPlayerOpenedSongBook)) {
        TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_OPENSONGBOOK)
        PlayPresentationActionToAll(act1FlowVal.wofUpgrade.vo.hasOpenedSongBook)
    }
    OUTPUT_SetEmphasizedHUDItem("songbookTabvillage", true)
    Once()
})

SNIPPET_HudEvent("he_wof_picked_upgrade", (_eventName, _payload) => {
    Logi("~~~~~~~~ Added Gather Iron Upgrade to Hotbar ~~~~~~~~")
    PlayPresentationActionToAll(act1FlowVal.wofUpgrade.vo.buildIronUpgrade)
    IncrementGlobal(act1FlowVal.wofUpgrade.global.hasPlacedUpgradeInHotbar)
    _ShowOnboardingMessage(act1FlowVal.wofUpgrade.message.buildIronUpgradeNudge)
    OUTPUT_SetEmphasizedHUDItem("songbookCustomizeHotbarPrompt", false)
    OUTPUT_SetEmphasizedHUDItem("songbookTabvillage", false)
    OUTPUT_SetEmphasizedHUDItem("village", true)
    const attractorFX = QUERY_GetEntitiesWithTags("well_of_fate_pylon")
    SpawnEntitiesAt(attractorFX, "badger:fx_attractor_onbording", 1, TEAM_BLUE)
    TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_CUSTOMIZEHOTBAR)
    Once()
})

SNIPPET_HudEvent("he_wof_navigated_to_upgrade_page", (_eventName, _payload) => {
    Logi("~~~~~~~~ he_wof_navigated_to_upgrade_page ~~~~~~~~")
    if (QUERY_GetGlobalVariable(act1FlowVal.wofUpgrade.global.isThisStepCurrentlyActive) > 0) {
        if (DoOnce(act1FlowVal.wofUpgrade.global.hasPlayedNavigatedToUpgradePage)) {
            PlayPresentationActionToAll(act1FlowVal.wofUpgrade.vo.navigatedToUpgradePage)
            TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_SONGBOOKTABOFINTEREST)
        }
        OUTPUT_SetEmphasizedHUDItem("songbookCustomizeHotbarPrompt", true)
    } else {
        Once()
    }
})

SNIPPET_HudEvent("he_wof_navigated_to_a_different_page", (_eventName, _payload) => {
    if (QUERY_GetGlobalVariable(act1FlowVal.wofUpgrade.global.isThisStepCurrentlyActive) > 0) {
        OUTPUT_SetEmphasizedHUDItem("songbookCustomizeHotbarPrompt", false)
    } else {
        Once()
    }
})

SNIPPET_SpatialPartitionEntered("spe_spawn_mossy_and_grindstone_golems", (triggerEntity, enteringEntity, _payload) => {
    if (_CheckIfStepIsComplete(act1FlowVal.wofUpgrade)) {
        OUTPUT_DespawnEntities(triggerEntity)
        Once()
        return
    }
    const closestPylon = RandomUpToCount(QUERY_GetEntitiesWithTags(["well_of_fate_pylon"]), 2)
    const cavalry = SpawnEntitiesAt(closestPylon, "badger:mob_golem_cavalry", 2, TEAM_BLUE)
    const mossy = SpawnEntitiesAt(closestPylon, "badger:mob_golem_support", 2, TEAM_BLUE)

    OUTPUT_MovePosition(cavalry, enteringEntity, 5, CALLBACK_NONE)
    OUTPUT_MovePosition(mossy, enteringEntity, 5, CALLBACK_NONE)

    Once()
    OUTPUT_DespawnEntities(triggerEntity)
})

SNIPPET_LocalTimer("lt_play_wof_upgrade_return_onboarding_vo", () => {
    if (_CheckIfStepIsComplete(act1FlowVal.wofUpgrade)) {
        return
    }

    PlayPresentationActionToAll(act1FlowVal.wofUpgrade.vo.returnedToWoF)

    LISTENFOR_LocalTimer({
        snippet: "lt_wof_upgrade_return_nudge",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.wofUpgrade.consts.timeToTriggerNudgeAfterWellOfFateVO
    })
})

SNIPPET_LocalTimer("lt_wof_upgrade_return_nudge", () => {
    if (_CheckIfStepIsComplete(act1FlowVal.wofUpgrade)) {
        return
    }

    _ShowOnboardingMessage(act1FlowVal.wofUpgrade.message.atWellOfFateNudge)

    LISTENFOR_LocalTimer({
        snippet: "lt_wof_upgrade_reminder_vo",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.wofUpgrade.consts.timeToTriggerOpenSongBookReminderVO
    })

    LISTENFOR_LocalTimer({
        snippet: "lt_wof_upgrade_tutorial_hint",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.misc.timeToShowTutorialHint
    })
})

SNIPPET_LocalTimer("lt_wof_upgrade_reminder_vo", () => {
    Logi("~~~~~lt_wof_upgrade_reminder_vo~~~~")
    if (_CheckIfStepIsComplete(act1FlowVal.wofUpgrade)) {
        return
    }

    if (QUERY_GetGlobalVariable(act1FlowVal.wofUpgrade.global.hasPlayerOpenedSongBook) > 0) {
        return
    }

    if (DoOnce(act1FlowVal.wofUpgrade.global.hasPlayedSongBookReminderVO)) {
        Logi("~~~~~~ playing wof upgrade reminder on a timer ~~~~~~")
        PlayPresentationActionToAll(act1FlowVal.wofUpgrade.vo.openSongbookReminder)
    }
})

SNIPPET_LocalTimer("lt_wof_upgrade_tutorial_hint", () => {
    if (_CheckIfStepIsComplete(act1FlowVal.wofUpgrade)) {
        return
    }
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), act1FlowVal.misc.miscTutorials.upgrading.tutorialKey, "", false, true, true)
})

SNIPPET_BuildingStart("bs_wof_upgrade_iron_tech", () => {
    IncrementGlobal(act1FlowVal.wofUpgrade.global.hasPlayedSongBookReminderVO)
    OUTPUT_SetEmphasizedHUDItem("village", false)
    Once()
})

SNIPPET_BuildingComplete("bc_wof_upgrade_iron_tech", () => {
    Logi("~~~~~~~bc_wof_upgrade_iron_tech~~~~~~")
    OUTPUT_AddOrRemoveResource(GetAllPlayers(), act1FlowVal.wofUpgrade.tutorialResource, 1, false)
    UnlockJournalEntry(JOURNAL_UNLOCKS.CAVALRY_GOLEM)
    InterruptOnboardingMessage(true)
    PlayPresentationActionToAll(act1FlowVal.wofUpgrade.vo.builtUpgradeStrucutre)
    const attractorFX = QUERY_GetEntitiesWithTags("attractorOnboarding")
    if (HasEntities(attractorFX)) OUTPUT_DespawnEntities(attractorFX)

    LISTENFOR_LocalTimer({
        snippet: "lt_unlock_mossy_golem_journal",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 2
    })
    _UnlockRemainingWoFUpgrades()

    TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_BUILDUPGRADEGATHERIRON)
    Once() //don't play this beyond the first time
})

SNIPPET_LocalTimer("lt_unlock_mossy_golem_journal", () => {
    UnlockJournalEntry(JOURNAL_UNLOCKS.SUPPORT_GOLEM)
})

const _CompletetWellOfFateUpgradeStep = () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.wofUpgrade.global.isThisStepCurrentlyActive) > 0) {
        PlayPresentationActionToAll(act1FlowVal.misc.successAudio)
        _TriggerCompletionVO(act1FlowVal.wofUpgrade)
        Logi("_CompletetWellOfFateUpgradeStep")
        LISTENFOR_LocalTimer({
            snippet: "lt_start_second_skirmish",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: act1FlowVal.secondSkirmish.consts.timeToSecondSkirmish
        })
        _MarkAct1StepAsComplete(act1FlowVal.wofUpgrade)
    } else {
        //When skipping
        _MarkAct1StepAsComplete(act1FlowVal.wofUpgrade, false)
    }

    LISTENFOR_ResourcesChanged({
        snippet: "rc_reached_cap",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        resourceName: "wood"
    })

    LISTENFOR_ResourcesChanged({
        snippet: "rc_reached_cap",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        resourceName: "stone"
    })
}

SNIPPET_ResourcesChanged("rc_reached_cap", (resourceName, _teamID, _previousAmount, currentAmount) => {
    Logi("### rc_reached_cap ###")
    if (currentAmount >= QUERY_GetTeamResourceMax(TEAM_BLUE, resourceName)) {
        TriggerTutorialForSpecificPlayers(GetAllPlayers(), act1FlowVal.misc.miscTutorials.resourceCap.tutorialKey)
        Once()
    }
})

SNIPPET_LocalTimer("lt_start_second_skirmish", () => {
    _StartSecondSkirmishOnboarding()
})

// ========================= THREE OUTPOSTS PLACEMENT =========================

const _TryRunThreeOutpostsPlacementTiers = (baseSize) => {
    const mainPlacementTiers = [
        { friendlyVillagesMin: 300, friendlyVillagesMax: 400 },
        { friendlyVillagesMin: 300, friendlyVillagesMax: 410 },
        { friendlyVillagesMin: 300, friendlyVillagesMax: 420 },
        { friendlyVillagesMin: 300, friendlyVillagesMax: 430 },
        { friendlyVillagesMin: 300, friendlyVillagesMax: 440 },
        { friendlyVillagesMin: 300, friendlyVillagesMax: 450 },
        { friendlyVillagesMin: 300, friendlyVillagesMax: 460 },
        { friendlyVillagesMin: 300, friendlyVillagesMax: 470 },
        { friendlyVillagesMin: 300, friendlyVillagesMax: 480 },
        { friendlyVillagesMin: 300, friendlyVillagesMax: 490 },
        { friendlyVillagesMin: 300, friendlyVillagesMax: 500 },
        { friendlyVillagesMin: 300, friendlyVillagesMax: 510 },
        { friendlyVillagesMin: 300, friendlyVillagesMax: 520 },
        { friendlyVillagesMin: 300, friendlyVillagesMax: 530 },
        { friendlyVillagesMin: 300, friendlyVillagesMax: 540 }
    ]

    const secondaryPlacementTiers = [
        { ocean: 50, otherPiglinOutpostsMin: 200 },
        { ocean: 60, otherPiglinOutpostsMin: 220 },
        { ocean: 70, otherPiglinOutpostsMin: 240 },
        { ocean: 80, otherPiglinOutpostsMin: 260 },
        { ocean: 90, otherPiglinOutpostsMin: 280 },
        { ocean: 100, otherPiglinOutpostsMin: 300 }
    ]

    const maDistanceMin = 350
    const minDistanceToPlayers = 150
    const poiMin = 200

    const friendlyVillages = _GetThirdVillageEntity()
    const otherPiglinOutposts = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_NAME_DBB)
    const homesteads = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), [MOB_ALLIANCE_NAME_CREEPER, MOB_ALLIANCE_NAME_SKELETON, MOB_ALLIANCE_NAME_ZOMBIE])
    const pois = FILTER_ByFactionName(QUERY_GetAllVillages(), FACTION_POI_ALL)

    for (let i = 0; i < mainPlacementTiers.length; i++) {
        const mainPlacement = mainPlacementTiers[i]

        for (let j = 0; j < secondaryPlacementTiers.length; j++) {
            const secondaryPlacement = secondaryPlacementTiers[j]
            OUTPUT_PlacementStart()

            OUTPUT_PlacementSlotTag(SLOT.BASE)

            // Avoid placing them nearby friendy villages
            OUTPUT_PlacementSetPrimaryProximityRule(friendlyVillages, mainPlacement.friendlyVillagesMin, mainPlacement.friendlyVillagesMax)
            OUTPUT_PlacementAddExcludeProximityRule(otherPiglinOutposts, secondaryPlacement.otherPiglinOutpostsMin, BSHARP_PLACEMENT.requireAll)
            OUTPUT_PlacementAddExcludeProximityRule(homesteads, maDistanceMin, BSHARP_PLACEMENT.requireAll)
            OUTPUT_PlacementAddExcludeProximityRule(pois, poiMin, BSHARP_PLACEMENT.requireAll)
            OUTPUT_PlacementAddExcludeOceanProximityRule(secondaryPlacement.ocean)
            OUTPUT_PlacementAddExcludeProximityRule(GetPlayers(), minDistanceToPlayers, BSHARP_PLACEMENT.requireAll)

            if (!OUTPUT_PlacementExecute()) {
                continue
            }

            LISTENFOR_VillageGenerated({
                snippet: "vg_act_1_three_bases",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                factionName: act1FlowVal.threePiglinCamps.bases.factionName,
                villageSize: baseSize
            })

            Logi("@@@@ Placed Three Outposts after " + i + 1 + " tries @@@@ " + j + 1)

            OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.OB_BIOME, GetStampTextureForFaction(act1FlowVal.threePiglinCamps.bases.factionName, baseSize), false)
            OUTPUT_SpawnVillage(QUERY_PlacementResultPosition(), act1FlowVal.threePiglinCamps.bases.archetype, baseSize, act1FlowVal.threePiglinCamps.bases.factionName, TEAM_ORANGE)
            return true
        }
    }
    Logi("@@@@ The placement tiers for the Three Outposts loop has failed. @@@@")
    return false
}

// ========================= SECOND SKIRMISH PLACEMENT =========================

const _TryRunSecondSkirmishPlacementTiers = () => {
    const placementTiers = [
        { playersMin: 500, wofMin: 450, wofMax: 1000, friendlyVillagesMin: 350, poiMin: 300, maMin: 300 },
        { playersMin: 500, wofMin: 450, wofMax: 1000, friendlyVillagesMin: 350, poiMin: 350, maMin: 350 },
        { playersMin: 500, wofMin: 500, wofMax: 1500, friendlyVillagesMin: 350, poiMin: 400, maMin: 400 },
        { playersMin: 500, wofMin: 550, wofMax: 1500, friendlyVillagesMin: 350, poiMin: 450, maMin: 450 },
        { playersMin: 500, wofMin: 550, wofMax: 2000, friendlyVillagesMin: 350, poiMin: 500, maMin: 500 },
        { playersMin: 500, wofMin: 550, wofMax: 2000, friendlyVillagesMin: 350, poiMin: 550, maMin: 550 }
    ]

    const friendlyVillages = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), [CULTURE_NAME_VILLAGERS])
    const homesteads = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), [MOB_ALLIANCE_NAME_CREEPER, MOB_ALLIANCE_NAME_SKELETON, MOB_ALLIANCE_NAME_ZOMBIE])
    const wof = GetVillageEntityFromFaction(WELL_OF_FATE)
    const pois = FILTER_ByFactionName(QUERY_GetAllVillages(), FACTION_POI_ALL)

    for (let i = 0; i < placementTiers.length; i++) {
        const placement = placementTiers[i]

        OUTPUT_PlacementStart()

        OUTPUT_PlacementSlotTag(SLOT.BASE)

        // Avoid placing them nearby friendy villages
        OUTPUT_PlacementSetPrimaryProximityRule(wof, placement.wofMin, placement.wofMax)
        OUTPUT_PlacementAddExcludeProximityRule(friendlyVillages, placement.friendlyVillagesMin, BSHARP_PLACEMENT.requireAll)
        OUTPUT_PlacementAddExcludeProximityRule(homesteads, placement.maMin, BSHARP_PLACEMENT.requireAll)
        OUTPUT_PlacementAddExcludeProximityRule(pois, placement.poiMin, BSHARP_PLACEMENT.requireAll)
        OUTPUT_PlacementAddExcludeOceanProximityRule(400)
        // Exclude player
        OUTPUT_PlacementAddExcludeProximityRule(GetPlayers(), placement.playersMin, BSHARP_PLACEMENT.requireAll)

        if (!OUTPUT_PlacementExecute()) {
            continue
        }
        Logi("@@@@ Placed Second Skirmish after " + i + 1 + " tries @@@@")

        OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.OB_BIOME, GetStampTextureForFaction(act1FlowVal.secondSkirmish.village.piglinFactionName, act1FlowVal.secondSkirmish.village.baseSize), false)
        OUTPUT_SpawnVillage(QUERY_PlacementResultPosition(), act1FlowVal.secondSkirmish.village.villageArchetype, act1FlowVal.secondSkirmish.village.baseSize, act1FlowVal.secondSkirmish.village.piglinFactionName, TEAM_ORANGE)
        return true
    }

    Logi("@@@@ The placement tier for the Second Skirmish loop has failed. Falling back to the final tier @@@@")

    OUTPUT_PlacementStart()

    OUTPUT_PlacementSlotTag(SLOT.BASE)

    // Avoid placing them nearby friendy villages
    OUTPUT_PlacementAddExcludeProximityRule(friendlyVillages, 350, BSHARP_PLACEMENT.requireAll)
    OUTPUT_PlacementAddExcludeProximityRule(homesteads, 550, BSHARP_PLACEMENT.requireAll)
    OUTPUT_PlacementAddExcludeProximityRule(pois, 550, BSHARP_PLACEMENT.requireAll)
    OUTPUT_PlacementAddExcludeOceanProximityRule(400)
    // Exclude player
    OUTPUT_PlacementAddExcludeProximityRule(GetPlayers(), 500, BSHARP_PLACEMENT.requireAll)

    if (!OUTPUT_PlacementExecute()) {
        return false
    }
    Logi("@@@@ Placed the Second Skirmish with the final tier @@@@")

    OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.OB_BIOME, GetStampTextureForFaction(act1FlowVal.secondSkirmish.village.piglinFactionName, act1FlowVal.secondSkirmish.village.baseSize), false)
    OUTPUT_SpawnVillage(QUERY_PlacementResultPosition(), act1FlowVal.secondSkirmish.village.villageArchetype, act1FlowVal.secondSkirmish.village.baseSize, act1FlowVal.secondSkirmish.village.piglinFactionName, TEAM_ORANGE)
    return true
}

const _GetPlacementSlotNameForSecondSkirmish = (_villageEntity) => {
    const placementSlotName = "act1SecondSkirmishSlotForest"
    return placementSlotName
}

const _StartSecondSkirmishOnboarding = () => {
    if (_CheckIfStepIsCompleteOrActive(act1FlowVal.secondSkirmish)) {
        return
    }

    Logi("_StartSecondSkirmishOnboarding")

    OUTPUT_SetGlobalVariable(act1FlowVal.misc.noPoiNisDuringAct1, 0)

    const wellOfFateVillage = GetVillageEntityFromFaction(WELL_OF_FATE)
    _ResetIconDistanceForEntity(wellOfFateVillage)

    _SetOnboardingAsCurrentStep(act1FlowVal.secondSkirmish)
    _StartLinearOnboardingMessages(act1FlowVal.secondSkirmish)

    LISTENFOR_VillageGenerated({
        snippet: "vg_act_1_second_skirmish",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: act1FlowVal.secondSkirmish.village.piglinFactionName,
        villageSize: act1FlowVal.secondSkirmish.village.baseSize
    })
    const secondVillageUnderAttack = _GetSecondVillageEntity()
    const placementSlotName = _GetPlacementSlotNameForSecondSkirmish(secondVillageUnderAttack)
    OUTPUT_PlacementStart()
    OUTPUT_PlacementSlotTag(placementSlotName)
    OUTPUT_PlacementAddExcludeOceanProximityRule(400)
    if (OUTPUT_PlacementExecute()) {
        Logi("@@@@@ Second Skirmish Placement successful @@@@@ ")
        OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.OB_BIOME, GetStampTextureForFaction(act1FlowVal.secondSkirmish.village.piglinFactionName, act1FlowVal.secondSkirmish.village.baseSize), false)
        OUTPUT_SpawnVillage(QUERY_PlacementResultPosition(), act1FlowVal.secondSkirmish.village.villageArchetype, act1FlowVal.secondSkirmish.village.baseSize, act1FlowVal.secondSkirmish.village.piglinFactionName, TEAM_ORANGE)
    } else {
        Loge("@@@@@@ Couldn't place Second Skirmish. Trying again with placement tiers @@@@@@")
        if (!_TryRunSecondSkirmishPlacementTiers()) {
            Logi("@@@@ couldn't place it even with tiers")
            return
        }
    }
}
SNIPPET_VillageGenerated("vg_act_1_second_skirmish", (villageId, _payload) => {
    const villageEntity = GetVillageEntityFromID(villageId)
    LISTENFOR_VillageFinishedBuilding({
        snippet: "vfb_act_1_second_skirmish_built",
        ownerVillageId: villageId,
        villageId: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_second_skirmish_hearts",
        ownerVillageId: villageId,
        includeTags: ["heartBuildable"]
    })
    const secondNudgeVolume = SpawnTriggerVolume(villageEntity, villageEntity, "badger:spatial_trigger_generic_large", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_second_skirmish_second_nudge",
        ownerVillageId: villageId,
        triggerEntity: secondNudgeVolume
    })
    LISTENFOR_PlayerEnteredVillage({
        snippet: "pev_second_skirmish",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        villageId: villageId,
        threshold: 1
    })

    const secondSkirmishBuildingAwareness = SpawnTriggerVolume(villageEntity, villageEntity, "badger:spatial_trigger_generic_large", TEAM_ORANGE, villageId, true, ["buildable"], [], ALLIANCE_ENEMY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_second_skirmish_react_to_player_building",
        ownerVillageId: villageId,
        triggerEntity: secondSkirmishBuildingAwareness
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_second_skirmish_barracks",
        ownerVillageId: villageId,
        includeTags: ["barracks"],
        villageId: villageId
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_second_skirmish",
        ownerVillageId: villageId,
        includeTags: ["heartBuildable"],
        villageId: villageId,
        factionName: FACTION_NAME_DBB
    })

    LISTENFOR_VillageDestroyed({
        snippet: "vd_second_skirmish_village",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        villageId: villageId,
        despawned: false
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_second_skirmish_barracks",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["barracks"]
    })

    LISTENFOR_ResourcesChanged({
        snippet: "rc_emerald_second_skirmish",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        resourceName: "emerald"
    })

    LISTENFOR_HealthChanged({
        snippet: "hc_second_skirmish_piglin_structure_damaged",
        ownerVillageId: villageId,
        includeTags: ["piglinStructure"],
        normalizedThreshold: 0.99,
        triggerMode: HEALTH_TRIGGER_MODE.BELOW,
        direction: HEALTH_DIRECTION.DAMAGE
    })
    Logi("~~~~~vg_act_1_second_skirmish vg_act_1_second_skirmish~~~~")

    SetupMobCages(villageId, act1FlowVal.misc.villageCageTag)
    Once()
})

SNIPPET_SpatialPartitionEntered("spe_second_skirmish_react_to_player_building", (triggerEntity, intruderEntity, _payload) => {
    Logi("@@@@ spe_second_skirmish_react_to_player_building @@@@")
    if (DoOnce(act1FlowVal.secondSkirmish.global.playerBuildingsResponseOnCooldown)) {
        const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
        LISTENFOR_LocalTimer({
            snippet: "lt_second_skirmish_building_response_cooldown",
            ownerVillageId: villageId,
            waitTime: act1FlowVal.secondSkirmish.consts.responseCooldown
        })
        GatherNearestUnitsAndSendToLocation(["piglin", "mob"], [""], villageId, intruderEntity, 25, "", "")
    }
})

SNIPPET_LocalTimer("lt_second_skirmish_building_response_cooldown", () => {
    OUTPUT_SetGlobalVariable(act1FlowVal.secondSkirmish.global.playerBuildingsResponseOnCooldown, 0)
})

SNIPPET_HealthChanged("hc_second_skirmish_piglin_structure_damaged", (structure) => {
    Logi("@@@ hc_second_skirmish_piglin_structure_damaged @@@@")
    const villageId = QUERY_GetVillageIDFromEntity(structure)
    LISTENFOR_LocalTimer({
        snippet: "lt_second_skirmish_response_cooldown",
        ownerVillageId: villageId,
        waitTime: act1FlowVal.secondSkirmish.consts.responseCooldown,
        payloadInt: villageId
    })
    GatherNearestUnitsAndSendToLocation(["piglin", "mob"], [""], villageId, structure, 75, "", "")
    Once()
})

SNIPPET_LocalTimer("lt_second_skirmish_response_cooldown", (payload) => {
    LISTENFOR_HealthChanged({
        snippet: "hc_second_skirmish_piglin_structure_damaged",
        ownerVillageId: payload.int,
        includeTags: ["piglinStructure"],
        normalizedThreshold: 0.99,
        triggerMode: HEALTH_TRIGGER_MODE.BELOW,
        direction: HEALTH_DIRECTION.DAMAGE
    })
})

SNIPPET_ResourcesChanged("rc_emerald_second_skirmish", (_resourceName, _teamID, _previousAmount, currentAmount) => {
    Logi("~~~~~~ rc_emerald_second_skirmish ~~~~~")

    if (QUERY_GetGlobalVariable(act1FlowVal.secondSkirmish.global.isThisStepCurrentlyActive) > 0) {
        if (currentAmount <= 0) {
            if (QUERY_GetGlobalVariable(act1FlowVal.secondSkirmish.global.barracksTracker) <= 0) {
                _TellThePlayerAboutLapisInChest(_GetSecondVillageFountain())
            }
        }
    } else if (QUERY_GetGlobalVariable(act1FlowVal.secondSkirmish.global.stepComplete) > 0) {
        Once()
    }
})

SNIPPET_NonPopCappedEntityDestroyed("ed_second_skirmish_barracks", (_entity, _payload) => {
    if (QUERY_GetGlobalVariable(act1FlowVal.secondSkirmish.global.isThisStepCurrentlyActive) > 0) {
        DecrementGlobal(act1FlowVal.secondSkirmish.global.barracksTracker)
    } else if (QUERY_GetGlobalVariable(act1FlowVal.secondSkirmish.global.stepComplete) > 0) {
        Once()
    }
})

SNIPPET_BuildingComplete("bc_second_skirmish_hearts", (buildingCompleteEG, _payload) => {
    Logi("bc_second_skirmish_hearts")
    const villageId = QUERY_GetVillageIDFromEntity(buildingCompleteEG)
    const delta = DeltaVillageVariable(villageId, "second_skirmish", 1)
    Logi("@@@@ bc_second_skirmish_hearts @@@@ " + villageId + " Delta: " + delta)
})

SNIPPET_VillageFinishedBuilding("vfb_act_1_second_skirmish_built", (villageId) => {
    const villageEntity = GetVillageEntityFromID(villageId)
    SpawnEntitiesAt(villageEntity, act1FlowVal.audio.music.secondSkirmishEmitter, 1, TEAM_ORANGE, villageId)
    //OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.SIZE, MAP_BASE_SIZE.ACT1_A)
    //OUTPUT_AddWaypointIconByExistingEntityArchetype("badger:waypoint_marker_piglin_dark_beacon_base_dbb_small", villageEntity)
    _UpdateIconDistanceForEntity(villageEntity, -1, 20)
    const m = SpawnEntitiesAt(GetVillageEntityFromID(villageId), "badger:piglin_medic", 2, TEAM_ORANGE, villageId)
    OUTPUT_SetLootTableOverride(m, act1FlowVal.misc.piglinLootTableOverride)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.ONBOARDING, MAP_ONBOARDING.ENABLED)
})

SNIPPET_NonPopCappedEntityDestroyed("ed_second_skirmish", (_entity, payload) => {
    if (QUERY_GetGlobalVariable(act1FlowVal.secondSkirmish.global.isThisStepCurrentlyActive) > 0) {
        const villageId = payload.ownerVillageId
        IncrementGlobal(act1FlowVal.secondSkirmish.global.numOfCorePiglinStructuresDestroyed)
        const value = QUERY_GetGlobalVariable(act1FlowVal.secondSkirmish.global.numOfCorePiglinStructuresDestroyed)

        if (value === 1) {
            TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_OUTPOST4DESTROYONESTRUCTURE)
        }
        //Only start listening to hc when we have one heartBuildable left --> This is to avoid a race condition where two or more buildings get damaged simultaneously
        const heartsCount = DeltaVillageVariable(villageId, "second_skirmish", -1)
        Logi("@@@@ ed_second_skirmish @@@@ " + heartsCount)
        if (heartsCount === 1) {
            Logi("~~~~~ Start listening for HC in second skirmish ~~~~~")
            LISTENFOR_HealthChanged({
                snippet: "hc_second_skirmish_barrack_damaged",
                ownerVillageId: villageId,
                villageId: villageId,
                includeTags: ["heartBuildable"],
                normalizedThreshold: 0.15,
                triggerMode: HEALTH_TRIGGER_MODE.CROSS,
                direction: HEALTH_DIRECTION.DAMAGE
            })
        }
    } else if (QUERY_GetGlobalVariable(act1FlowVal.secondSkirmish.global.stepComplete) > 0) {
        Once()
    }
})

SNIPPET_SpatialPartitionEntered("spe_second_skirmish_second_nudge", (triggerEntity, _intruderEntity, _payload) => {
    PlayPresentationActionToAll(act1FlowVal.misc.miscTutorials.advancedDirect.vo.onTheWayToSecondSkirmish)

    LISTENFOR_LocalTimer({
        snippet: "lt_add_first_vo_patched",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.misc.miscTutorials.advancedDirect.consts.firstVoDelay
    })

    if (DoOnce(act1FlowVal.secondSkirmish.global.hasUpdatedNudge)) {
        _ShowOnboardingMessage(act1FlowVal.secondSkirmish.message.secondOnboardingNudge, act1FlowVal.secondSkirmish.consts.timeToSecondSkirmishSecondNudge)
    }
    OUTPUT_DespawnEntities(triggerEntity)
})

SNIPPET_LocalTimer("lt_add_first_vo_patched", () => {
    PlayPresentationActionToAll(act1FlowVal.misc.miscVO.secondSkirmish.reaction)
})

SNIPPET_PlayerEnteredVillage("pev_second_skirmish", (villageId, _playerCount, _payload) => {
    Logi("~~~~~~ pev_second_skirmish ~~~~~")
    const player = GetClosestPlayer(GetVillageEntityFromID(villageId))
    GatherNearestUnitsAndSendToLocation(["piglin", "mob"], [""], villageId, player, 50, "", "")

    if (DoOnce(act1FlowVal.secondSkirmish.global.hasUpdatedTelemetry)) {
        TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_OUTPOST4ARRIVE)
    }

    Once()
})

SNIPPET_VillageDestroyed("vd_second_skirmish_village", (villageId, _payload) => {
    const villageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.VISIBILITY, MAP_VISIBILITY.HIDDEN)

    if (QUERY_DoesEntityHaveAwaypointIcon(villageEntity)) {
        OUTPUT_RemoveWaypointIcon(villageEntity)
    }
    _CompleteSecondSkirmishStep()

    TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_OUTPOST4DEFEATED)
    //In case the dev destroys the base with /ad we still want the DBB to spawn
    LISTENFOR_LocalTimer({
        snippet: "lt_spawn_dbb_for_ad_debug",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 5
    })
    TriggerCelebration(villageEntity, CELEBRATION_NAMES.MOBS, act1FlowVal.secondSkirmish.consts.celebration)

    Logi("####################### SECOND SKIRMISH VILLAGE DESTROYED #############################")
    Once()
})

SNIPPET_LocalTimer("lt_spawn_dbb_for_ad_debug", () => {
    if (DoOnce(act1FlowVal.secondSkirmish.global.hasPlayedNightfallFmv)) {
        _TriggerNightFallFMV()

        const secondVillageUnderAttack = _GetSecondVillageEntity()
        if (HasEntities(secondVillageUnderAttack)) {
            OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.ACT1_VILLAGE_STATE, MAP_ICON_STATE.DEFAULT)
            OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.STATE, MAP_ICON_STATE.DEFAULT)
        }
    }
})

SNIPPET_BuildingComplete("bc_second_skirmish_barracks", (buildingCompleteEG, _payload) => {
    if (QUERY_GetGlobalVariable(act1FlowVal.secondSkirmish.global.isThisStepCurrentlyActive) > 0) {
        Logi("bc_second_skirmish_barracks")
        const villageId = QUERY_GetVillageIDFromEntity(buildingCompleteEG)
        IncrementGlobal(act1FlowVal.secondSkirmish.global.barracksTracker)

        LISTENFOR_BuildableSpawnerSpawned({
            snippet: "bss_second_skirmish_barracks_piglins",
            ownerVillageId: villageId,
            buildableSpawner: buildingCompleteEG
        })
    } else if (QUERY_GetGlobalVariable(act1FlowVal.secondSkirmish.global.stepComplete) > 0) {
        Once()
    }
})

SNIPPET_BuildableSpawnerSpawned("bss_second_skirmish_barracks_piglins", (spawner, _newEntity) => {
    if (DoOnce(act1FlowVal.secondSkirmish.global.hasPlayedFirstWaveStinger)) {
        OUTPUT_SendPositionalAudio(act1FlowVal.audio.stingers.firstPiglinWave, spawner)
        Once()
    }
})

SNIPPET_HealthChanged("hc_second_skirmish_barrack_damaged", (barracks) => {
    Logi("@@@@@ hc_second_skirmish_barrack_damaged @@@@@")
    const villageId = QUERY_GetVillageIDFromEntity(barracks)
    InterruptOnboardingMessage(true)

    //In case the player damages the piglin structures to 0.1 of their health w/o actually destroying them
    const remainingPiglins = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["piglin"], [])
    if (HasEntities(remainingPiglins)) {
        OUTPUT_DamageEntities(remainingPiglins, 500)
    }

    if (DoOnce(act1FlowVal.secondSkirmish.global.hasPlayedNightfallFmv)) {
        _TriggerNightFallFMV()

        const secondVillageUnderAttack = _GetSecondVillageEntity()
        OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.ACT1_VILLAGE_STATE, MAP_ICON_STATE.DEFAULT)
        OUTPUT_MapSetKeyValue(secondVillageUnderAttack, MAP_KEY.STATE, MAP_ICON_STATE.DEFAULT)
    }
    Once()
})

const _TriggerNightFallFMV = () => {
    if (DoOnce(act1FlowVal.destroyDBB.global.playNightFall)) {
        LISTENFOR_LocalTimer({
            snippet: "lt_act_1_end",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: act1FlowVal.destroyDBB.consts.timeToTriggerNightFallFMV
        })
    }
}

SNIPPET_LocalTimer("lt_act_1_end", () => {
    // eslint-disable-next-line no-undef
    _CampaignAct1AEnd() //campaign_acts function
})
const _CompleteSecondSkirmishStep = () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.secondSkirmish.global.isThisStepCurrentlyActive) > 0) {
        PlayPresentationActionToAll(act1FlowVal.misc.successAudio)
        _TriggerCompletionVO(act1FlowVal.secondSkirmish)

        const secondVillageUnderAttack = _GetSecondVillageEntity()
        if (HasEntities(secondVillageUnderAttack)) {
            _ResetFountainAudioState(QUERY_GetVillageIDFromEntity(secondVillageUnderAttack))
        }

        if (QUERY_GetGlobalVariable(act1FlowVal.misc.getLapisFromChestEnabled) > 0) {
            OUTPUT_SetGlobalVariable(act1FlowVal.misc.getLapisFromChestEnabled, 0)

            const chests = QUERY_GetEntitiesWithTags(act1FlowVal.villageChest.villageChestTag)
            const villageChest = FILTER_ByClosest(chests, _GetSecondVillageFountain(), 1)
            OUTPUT_AddVisualState(villageChest, "open_chest")
        }
    }
    _MarkAct1StepAsComplete(act1FlowVal.secondSkirmish)
}

// ========================= DBB ONBOARDING =========================
const _StartDestroyDBBOnboarding = () => {
    Logi("_StartDestroyDBBOnboarding")
    //_ClearPiglinIcons()
    _ResetIconDistanceForFaction(CULTURE_NAME_VILLAGERS)
    _ResetIconDistanceForFaction(FACTION_POI_ALL)
    _ResetIconDistanceForFaction(FACTION_MOB_ALLIANCES)
    _InterruptOnboardingMessage(true)
    _SetOnboardingAsCurrentStep(act1FlowVal.destroyDBB)

    LISTENFOR_LocalTimer({
        snippet: "lt_send_player_to_final_base",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: act1FlowVal.destroyDBB.consts.timeToTriggerNudgeAfterVO
    })

    LISTENFOR_VillageDestroyed({
        snippet: "vd_final_dbb",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        despawned: false
    })

    LISTENFOR_PlayerEnteredVillage({
        snippet: "telemetry_player_entered_dbb",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: FACTION_NAME_DBB
    })
}

SNIPPET_PlayerEnteredVillage("telemetry_player_entered_dbb", () => {
    TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_ARRIVEDBB)
    Once()
})

SNIPPET_LocalTimer("lt_send_player_to_final_base", () => {
    if (IsCurrentAct(ACTS.ACT_2)) {
        Logi("##### lt_send_player_to_final_base ######")
        return
    }
    _ShowOnboardingMessage(_GetOutpostOnboardingMessage())
    _RemoveAct1RemainingTags()
})

SNIPPET_VillageDestroyed("vd_final_dbb", (villageId, _payload) => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_2) > 0) {
        return
    }
    if (QUERY_GetFactionSizeFromVillageID(villageId) === BASE_SIZE_DARK_BEACON) {
        _CompleteDestroyDBBStep()
        Once()
    }
})

// ========================= Outpost ONBOARDING =========================

const _GetOutpostOnboardingMessage = () => {
    if (!IsCurrentAct(ACTS.ACT_1B)) {
        return ""
    }
    if (QUERY_GetGlobalVariable(act1FlowVal.outpost.global.outpostNudgeIsActive) > 0) {
        //Triggered outpost nudge, haven't built an Outpost, haven't appraoched DBB
        return act1FlowVal.outpost.message.onboardingNudge
    } else if (QUERY_GetGlobalVariable(act1FlowVal.outpost.global.hasBuiltAnOutpost) === 0 && QUERY_GetGlobalVariable(act1FlowVal.destroyDBB.global.hasApproachedDbb) === 0) {
        //Still on the way to the DBB
        return act1FlowVal.destroyDBB.message.onboardingNudge
    } else if (QUERY_GetGlobalVariable(act1FlowVal.outpost.global.hasBuiltAnOutpost) > 0 && QUERY_GetGlobalVariable(act1FlowVal.destroyDBB.global.hasApproachedDbb) === 0) {
        //Got the Outpost nudge. Built Outpost. Haven't approached DBB yet
        Logi("~~~~~ QUERY_GetGlobalVariable(act1FlowVal.outpost.global.hasBuiltAnOutpost) > 0  ~~~~")
        return act1FlowVal.destroyDBB.message.onboardingNudgeAfterOutpostNoApproach
    } else if (QUERY_GetGlobalVariable(act1FlowVal.outpost.global.hasBuiltAnOutpost) === 0 && QUERY_GetGlobalVariable(act1FlowVal.destroyDBB.global.hasApproachedDbb) > 0) {
        //No outpost DBB nudge
        return act1FlowVal.destroyDBB.message.onboardingNudgeApproachNoOutpost
    } else {
        //Approached DBB and built outpost
        return act1FlowVal.destroyDBB.message.onboardingNudgeApprachedBuiltOutpost
    }
}

const _StartOutpostOnboarding = (_villageId) => {
    if (!IsCurrentAct(ACTS.ACT_1B)) return
    OUTPUT_CreatePlayerProximityObserver("outpost_dbb_observer", ALLIANCE_ENEMY, ["dbbRallyPoint"], [], 500)

    LISTENFOR_EntityEnteredPlayerProximity({
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        observerName: "outpost_dbb_observer",
        snippet: "pp_close_to_dbb"
    })
}

SNIPPET_EntityEnteredPlayerProximity("pp_close_to_dbb", (_approachingEntity, _playerEntity) => {
    Logi("~~~~ pp_close_to_dbb ~~~~")
    if (QUERY_GetGlobalVariable(act1FlowVal.outpost.global.hasBuiltAnOutpost) === 0) {
        IncrementGlobal(act1FlowVal.outpost.global.outpostNudgeIsActive)
        _ShowOnboardingMessage(_GetOutpostOnboardingMessage())
        PlayPresentationActionToAll(act1FlowVal.outpost.vo.intro)

        LISTENFOR_LocalTimer({
            snippet: "lt_trigger_outpost_tutorial",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: act1FlowVal.outpost.consts.timeToOutpostTutorial
        })

        LISTENFOR_LocalTimer({
            snippet: "lt_hosts_give_player_iron_for_outpost",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: act1FlowVal.outpost.consts.timeToTellPlayerAboutGivenResources
        })
    }
    Once()
})

SNIPPET_LocalTimer("lt_trigger_outpost_tutorial", () => {
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), act1FlowVal.outpost.tutorialKey)
})

SNIPPET_BuildingComplete("bc_outpost_act1", () => {
    if (IsCurrentAct(ACTS.ACT_1B)) {
        Logi("~~~~~~~bc_outpost_act1~~~~~~")
        IncrementGlobal(act1FlowVal.outpost.global.hasBuiltAnOutpost)
        if (QUERY_GetGlobalVariable(act1FlowVal.outpost.global.outpostNudgeIsActive) > 0 || QUERY_GetGlobalVariable(act1FlowVal.destroyDBB.global.hasApproachedDbb) > 0) {
            OUTPUT_SetGlobalVariable(act1FlowVal.outpost.global.outpostNudgeIsActive, 0)
            _ShowOnboardingMessage(_GetOutpostOnboardingMessage())
        }
    }
    Once()
})

SNIPPET_LocalTimer("lt_hosts_give_player_iron_for_outpost", () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.outpost.global.hasBuiltAnOutpost) === 0) {
        const allPlayers = GetAllPlayers()
        if (HasEntities(allPlayers)) {
            const currentWood = QUERY_GetCampaignResource("wood")
            const currentStone = QUERY_GetCampaignResource("stone")
            const currentIron = QUERY_GetCampaignResource("iron")
            const currentPrismarine = QUERY_GetCampaignResource("xp_common")

            if (currentWood < 250) {
                OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "wood", 250 - currentWood, false)
            }
            if (currentStone < 250) {
                OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "stone", 250 - currentStone, false)
            }
            if (currentIron < 75) {
                OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "iron", 75 - currentIron, false)
            }
            if (currentPrismarine < 50) {
                OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "xp_common", 50 - currentPrismarine, false)
            }
        }
    }
})

const _CompleteDestroyDBBStep = () => {
    if (QUERY_GetGlobalVariable(act1FlowVal.destroyDBB.global.isThisStepCurrentlyActive) > 0) {
        PlayPresentationActionToAll(act1FlowVal.misc.successAudio)
    }
    _MarkAct1StepAsComplete(act1FlowVal.destroyDBB)
    IncrementGlobal(act1FlowVal.misc.act1FlowComplete)
}

// ============================================================================== MISC ==============================================================================
SNIPPET_PlayerConnected("pc_load_current_onboarding_announcements", (_playerEntity, _isReconnecting, _payload) => {
    Logi(" ~~~~~~~~~~~~~pc_load_current_onboarding_announcements~~~~~~~~~~~~~ ")
    const allPlayers = GetAllPlayers()
    const weHaveMoreThanOnePlayer = QUERY_GetEntitiesCount(allPlayers) > 1
    Logi("~~~~~~How Many Players We Have:~~~~~~" + QUERY_GetEntitiesCount(allPlayers))
    if (weHaveMoreThanOnePlayer) {
        Logi("~~~~~ActivateSharedResourceTutorialTimer~~~~~")
        LISTENFOR_LocalTimer({
            snippet: "pc_trigger_shared_resource_tutorial",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 360
        })
    }
    if (!IsCurrentAct(ACTS.ACT_1A) && !IsCurrentAct(ACTS.ACT_1B)) {
        OUTPUT_UpdateHUDVisibility("hud_compass", true)
        return
    }
    _UpdateCurrentObjectiveAfterLoad()

    const firstVillage = _GetFirstVillageEntity()
    const secondVillage = _GetSecondVillageEntity()
    if (_CheckIfStepIsCompleteOrActive(act1FlowVal.villageChest)) {
        return
    }
    if (HasEntities(firstVillage)) {
        if (!_CheckIfStepIsComplete(act1FlowVal.firstVillageUnderAttack)) {
            const firstVillageId = QUERY_GetVillageIDFromEntity(firstVillage)
            OUTPUT_SetFastTravelEnabled(firstVillageId, false)
            OUTPUT_MapSetKeyValue(firstVillage, MAP_KEY.FAST_TRAVEL, MAP_FAST_TRAVEL.DISABLED)
        }
    }
    if (HasEntities(secondVillage)) {
        if (!_CheckIfStepIsComplete(act1FlowVal.freeSecondVillage)) {
            const secondVillageId = QUERY_GetVillageIDFromEntity(secondVillage)
            OUTPUT_SetFastTravelEnabled(secondVillageId, false)
            OUTPUT_MapSetKeyValue(secondVillage, MAP_KEY.FAST_TRAVEL, MAP_FAST_TRAVEL.DISABLED)
        }
    }
})

// Triggers Shared Resources Tutorial Unlock and Tutorial Nudge for players that haven't seen it
SNIPPET_LocalTimer("pc_trigger_shared_resource_tutorial", (_payload) => {
    Logi("~~~~~TriggerSharedResourceTutorial~~~~~")
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_onboarding_sharedresources_tut", 1, false)
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), "player_shared_resources")
})

// ============================================================================== DEBUG ==============================================================================
const _SkipCompleteUpToThreeCamps = () => {
    const currentOnboardingId = _GetCurrentOnboadingStep()
    if (currentOnboardingId !== undefined) {
        const currentOnboardingData = act1FlowVal[currentOnboardingId]
        _MarkAct1StepAsComplete(currentOnboardingData)
    }

    _CompleteFindVillageUnderAttackStep()
    _CompleteFirstVillageUnderAttackStep()
    _CompleteRepairFountainStep()
    _CompleteFindSecondVillageStep()
    _CompleteFreeSecondVillageStep()
    _CompleteBuildDefensesInSecondVillageStep()
    _CompleteFirstSkirmishStep()

    const firstUnderAttackVillage = _GetFirstVillageEntity()
    if (HasEntities(firstUnderAttackVillage)) {
        OUTPUT_MapSetKeyValue(firstUnderAttackVillage, MAP_KEY.ACT1_VILLAGE_STATE, MAP_ICON_STATE.DEFAULT)
        OUTPUT_MapSetKeyValue(firstUnderAttackVillage, MAP_KEY.STATE, MAP_ICON_STATE.DEFAULT)
    }
}

const _CompleteAct1FlowButDBB = () => {
    const firstUnderAttackVillage = _GetFirstVillageEntity()
    if (HasEntities(firstUnderAttackVillage)) {
        OUTPUT_MapSetKeyValue(firstUnderAttackVillage, MAP_KEY.ACT1_VILLAGE_STATE, MAP_ICON_STATE.DEFAULT)
        OUTPUT_MapSetKeyValue(firstUnderAttackVillage, MAP_KEY.STATE, MAP_ICON_STATE.DEFAULT)
    }
}

const _SetMapVillagesUnhurt = () => {
    // Changing the states of villager villages back to normal
    let entities = FILTER_ByFactionName(QUERY_GetAllVillages(), CULTURE_NAME_VILLAGERS)
    while (HasEntities(entities)) {
        const village = RandomEntity(entities)
        OUTPUT_MapSetKeyValue(village, MAP_KEY.STATE, MAP_ICON_STATE.UNHURT)
        entities = OPER_Difference(entities, village)
    }
}

const _SkipToAct2 = () => {
    if (!IsCurrentAct(ACTS.ACT_1A) && !IsCurrentAct(ACTS.ACT_1B)) {
        return
    }
    Logi("~~~~~~ _SkipToAct2 ~~~~")
    _SkipVillage1Clean()
    _SkipWoFUpgradeClean()
    _ResetIconsForEveryone()
    _RemoveAct1RemainingTags()
    _BypassTutorials()
    _UpdateFlags()
    _SetMapVillagesUnhurt()
}

const _UpdateFlags = () => {
    act1FlowIds.forEach((act1OnboardingId) => {
        const onboardingData = act1FlowVal[act1OnboardingId]
        _MarkAct1StepAsComplete(onboardingData)
    })

    IncrementGlobal(act1FlowVal.misc.act1FlowComplete)
    //IncrementGlobal("gv_skip_onboarding")
    IncrementGlobal(ONBOARDING_GLOBALS.INITIAL_ONBOARDING_COMPLETE)
    IncrementGlobal("visitedWellOfFateInAct2")
    OUTPUT_SetGlobalVariable(act1FlowVal.misc.noPoiNisDuringAct1, 0)
    OUTPUT_UpdateHUDVisibility("hud_compass", true)
}
const _SkipVillage1Clean = () => {
    IncrementGlobal(act1Skips.skipVillage1) // <-- Removes cinematic and piglins spawning

    //Village 1
    const firstVillage = _GetFirstVillageEntity()
    if (HasEntities(firstVillage)) {
        const firstVillageId = QUERY_GetVillageIDFromEntity(firstVillage)

        LISTENFOR_PlayerEnteredVillage({
            snippet: "pev_entered_first_village_skip_clean",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            villageId: firstVillageId
        })
    }
    //Village 2

    const secondVillage = _GetSecondVillageEntity()
    if (HasEntities(secondVillage)) {
        const secondVillageId = QUERY_GetVillageIDFromEntity(secondVillage)

        LISTENFOR_PlayerEnteredVillage({
            snippet: "pev_entered_second_village_skip_clean",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            villageId: secondVillageId
        })
    }
}

SNIPPET_PlayerEnteredVillage("pev_entered_first_village_skip_clean", (villageId, _playerCount, _payload) => {
    if (QUERY_IsVillageOccupied(villageId)) {
        Once()
        return
    }
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const firstVillageFountain = FILTER_ByTagFilter(villageEntities, [TAG_VILLAGE_FOUNTAIN], [])
    //Heal fountain
    OUTPUT_SetHealthPercent(firstVillageFountain, 100)

    let villageCages = FILTER_ByTagFilter(villageEntities, [act1FlowVal.misc.villageCageTag], [])
    while (HasEntities(villageCages)) {
        const cage = RandomEntity(villageCages) // <-- grab a single cage to leash piglins to.
        villageCages = OPER_Difference(villageCages, cage) // <-- remove the cage we just handled and loop.
        OUTPUT_TriggerPresentationEvent(cage, "open_gate")
        OUTPUT_SetInteractionState(cage, false)
        DelayedDestroy(cage, 0.5, villageId)
    }

    const remainingPiglins = QUERY_GetEntitiesWithTags([act1FlowVal.misc.piglinsAtVillageTag])
    if (HasEntities(remainingPiglins)) {
        OUTPUT_DamageEntities(remainingPiglins, 500)
    }
    const villagers = FILTER_ByDistance(villageEntities, firstVillageFountain, 300)
    if (HasEntities(villagers)) {
        OUTPUT_RemoveTag(villagers, "donotattack")
        OUTPUT_RemoveTag(villagers, VILLAGERS_ILLAGERS_INSIDE_CAGE_TAG)
    }
    Once()
})

SNIPPET_PlayerEnteredVillage("pev_entered_second_village_skip_clean", (villageId, _playerCount, _payload) => {
    if (QUERY_IsVillageOccupied(villageId)) {
        Once()
        return
    }
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const secondVillageFountain = FILTER_ByTagFilter(villageEntities, [TAG_VILLAGE_FOUNTAIN], [])
    //Heal fountain
    OUTPUT_SetHealthPercent(secondVillageFountain, 100)

    const remainingPiglins = QUERY_GetEntitiesWithTags([act1FlowVal.misc.piglinsAtVillageTag])
    if (HasEntities(remainingPiglins)) {
        OUTPUT_DamageEntities(remainingPiglins, 500)
    }

    const villagers = FILTER_ByDistance(villageEntities, secondVillageFountain, 300)
    if (HasEntities(villagers)) {
        OUTPUT_RemoveTag(villagers, "donotattack")
        OUTPUT_RemoveTag(villagers, VILLAGERS_ILLAGERS_INSIDE_CAGE_TAG)
    }
    Once()
})

const _SkipWoFUpgradeClean = () => {
    const players = GetPlayers()
    if (HasEntities(players)) {
        const randomPlayer = RandomEntity(GetPlayers())
        OUTPUT_SetResourceCap(randomPlayer, "iron", 125)
    }
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, act1FlowVal.misc.remainingWoFUpgradesUnlock, 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, act1FlowVal.wofUpgrade.neededResourceToAllowUpgrade, 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "gather_uncommon_resource", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "ui_tracking_gather_uncommon", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "iron", 25, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_support", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_golemcavalry", 1, false)

    UnlockJournalEntry(JOURNAL_UNLOCKS.SUPPORT_GOLEM)
    UnlockJournalEntry(JOURNAL_UNLOCKS.CAVALRY_GOLEM)
}

const _ResetIconsForEveryone = () => {
    _ResetIconDistanceForFaction(CULTURE_NAME_VILLAGERS)
    _ResetIconDistanceForFaction(FACTION_POI_ALL)
    _ResetIconDistanceForFaction(FACTION_MOB_ALLIANCES)
}

const _RemoveAct1RemainingTags = () => {
    //Remove tag
    const firstVillage = _GetFirstVillageEntity()
    if (HasEntities(firstVillage)) OUTPUT_RemoveTag(firstVillage, act1FlowVal.misc.firstVillageTag)

    const secondVillage = _GetSecondVillageEntity()
    if (HasEntities(secondVillage)) OUTPUT_RemoveTag(secondVillage, act1FlowVal.misc.secondVillageTag)

    const thirdVillage = _GetThirdVillageEntity()
    if (HasEntities(thirdVillage)) OUTPUT_RemoveTag(thirdVillage, act1FlowVal.misc.thirdVillageTag)
}
const _BypassTutorials = () => {
    act1FlowIds.forEach((act1OnboardingId) => {
        const onboardingData = act1FlowVal[act1OnboardingId]
        if (onboardingData.tutorialKey !== "") {
            OUTPUT_TriggerTutorialBypass(onboardingData.tutorialKey)
        }
    })
}

SNIPPET_GlobalVariableChanged("gvc_act1_flow_act2_started", (oldValue, newValue, _payload) => {
    if (oldValue === 0 && newValue === 1) {
        Logi("!gvc_act1_flow_act2_started!")
        IncrementGlobal(act1FlowVal.misc.skipAct1Flow)
        TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_COMPLETE)
        _CompleteAct1FlowButDBB()
        _CompleteDestroyDBBStep()

        Once()
    }
})

SNIPPET_GlobalVariableChanged("gvc_act1_flow_act1b_started", (oldValue, newValue, _payload) => {
    if (oldValue === 0 && newValue === 1) {
        Logi("!gvc_act1_flow_act1b_started!")

        _CompleteAct1FlowButDBB()
        _StartDestroyDBBOnboarding()

        Once()
    }
})

SNIPPET_ExternalEvent("ee_place_camps", () => {
    _StartThreePiglinCampsOnboarding()
})

SNIPPET_ExternalEvent("ee_unlock_advanced_direct", () => {
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "battle_view_unlock", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "advanced_direct_unlock", 1, false)
})

//FOR BEN C ONLY
SNIPPET_ExternalEvent("ee_play_camps_intro", () => {
    const campA = FILTER_ByVillageSize(FILTER_ByFactionName(QUERY_GetAllVillages(), FACTION_NAME_DBB), BASE_SIZE_ACT_1_A)
    const campB = FILTER_ByVillageSize(FILTER_ByFactionName(QUERY_GetAllVillages(), FACTION_NAME_DBB), BASE_SIZE_ACT_1_B)
    const campC = FILTER_ByVillageSize(FILTER_ByFactionName(QUERY_GetAllVillages(), FACTION_NAME_DBB), BASE_SIZE_ACT_1_C)
    OUTPUT_AddTag(campA, "camp01")
    OUTPUT_AddTag(campB, "camp02")
    OUTPUT_AddTag(campC, "camp03")
    const player = GetPlayers()
    OUTPUT_TriggerCinematic("hrd00_c05_camp_intro", [player])
})

SNIPPET_ExternalEvent("ee_skip_to_camps", () => {
    if (!IsCurrentAct(ACTS.ACT_1A)) {
        Loge("Cannot Skip if you are not in Act1 A!")
        return
    }
    _SkipCompleteUpToThreeCamps()
    _StartThreePiglinCampsOnboarding()
})

SNIPPET_ExternalEvent("ee_skip_to_wof_upgrade", () => {
    if (!IsCurrentAct(ACTS.ACT_1A)) {
        Loge("Cannot Skip if you are not in Act1 A!")
        return
    }
    _SkipCompleteUpToThreeCamps()
    _StartWellOfFateUpgradeOnboarding()
})

SNIPPET_ExternalEvent("ee_skip_to_second_skirmish", () => {
    if (!IsCurrentAct(ACTS.ACT_1A)) {
        Loge("Cannot Skip if you are not in Act1 A!")
        return
    }
    _SkipCompleteUpToThreeCamps()
    _CompletetWellOfFateUpgradeStep()
    _StartSecondSkirmishOnboarding()
})
