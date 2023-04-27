const defendUnitCompositions = {
    grunters: {
        units: [{ amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER }],
        delayUntilSentOut: 15
    },
    pyroMD: {
        units: [
            { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 2, unit: PIGLIN_ARCHETYPE.MEDIC }
        ],
        delayUntilSentOut: 15
    },
    fireRain: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
        ],
        delayUntilSentOut: 15
    },
    runts: {
        units: [{ amount: 8, unit: PIGLIN_ARCHETYPE.RUNT }],
        delayUntilSentOut: 15
    },
    maceMD: {
        units: [
            { amount: 6, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
        ],
        delayUntilSentOut: 15
    },
    heavyMetal: {
        units: [
            { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
        ],
        delayUntilSentOut: 15
    },
    bruisers: {
        units: [{ amount: 2, unit: PIGLIN_ARCHETYPE.BRUISER }],
        delayUntilSentOut: 15
    },
    bobTheBruisers: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER },
            { amount: 2, unit: PIGLIN_ARCHETYPE.BRUISER }
        ],
        delayUntilSentOut: 15
    },
    maceAndSlice: {
        units: [
            { amount: 6, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 2, unit: PIGLIN_ARCHETYPE.BRUISER }
        ],
        delayUntilSentOut: 15
    },
    bruisersMD: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.BRUISER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC },
            { amount: 3, unit: PIGLIN_ARCHETYPE.RUNT }
        ],
        delayUntilSentOut: 15
    },
    despicableRunts: {
        units: [
            { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PORTAL_GUARD }
        ],
        delayUntilSentOut: 15
    },
    heavyHitter: {
        units: [{ amount: 1, unit: PIGLIN_ARCHETYPE.PORTAL_GUARD }],
        delayUntilSentOut: 15
    },
    bobTheBruisersEnhanced: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER },
            { amount: 2, unit: PIGLIN_ARCHETYPE.BRUISER }
        ],
        delayUntilSentOut: 15
    },
    gruntRunts: {
        units: [
            { amount: 3, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 3, unit: PIGLIN_ARCHETYPE.GRUNTER }
        ],
        delayUntilSentOut: 15
    },
    despicableRuntsMD: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PORTAL_GUARD },
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
        ],
        delayUntilSentOut: 15
    },
    healyBruisers: {
        units: [
            { amount: 3, unit: PIGLIN_ARCHETYPE.BRUISER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
        ],
        delayUntilSentOut: 15
    }
}

/* 
    To alter where an encounter is located in a base:
        * Add a tag to building(s) that should have the encounter
        * Set buildableTag to be the same tag
*/
const defendDiscreteEncounters = {
    downtownRush: {
        unitComposition: defendUnitCompositions.fireRain,
        buildableTag: "pigRangeUp",
        leashDistance: 15,
        returnDistance: 10
    },
    foundation: {
        unitComposition: defendUnitCompositions.bruisersMD,
        buildableTag: "pigGate",
        leashDistance: 15,
        returnDistance: 10
    },
    magmaFoundation: {
        unitComposition: defendUnitCompositions.gruntRunts,
        buildableTag: "pigMagmaTower",
        leashDistance: 15,
        returnDistance: 10
    },
    healerHouse: {
        unitComposition: defendUnitCompositions.maceMD,
        buildableTag: "pigCarpenter",
        leashDistance: 15,
        returnDistance: 10
    },
    runtsStandGround: {
        unitComposition: defendUnitCompositions.runts,
        buildableTag: "pigTower",
        leashDistance: 15,
        returnDistance: 10
    },
    gruntersStandGround: {
        unitComposition: defendUnitCompositions.grunters,
        buildableTag: "pigTower",
        leashDistance: 15,
        returnDistance: 10
    },
    rangeRangers: {
        unitComposition: defendUnitCompositions.despicableRuntsMD,
        buildableTag: "pigRangeUp",
        leashDistance: 15,
        returnDistance: 10
    },
    bruisedMagma: {
        unitComposition: defendUnitCompositions.bruisers,
        buildableTag: "pigMagmaTower",
        leashDistance: 15,
        returnDistance: 10
    },
    bruisedArrow: {
        unitComposition: defendUnitCompositions.bruisers,
        buildableTag: "pigTower",
        leashDistance: 15,
        returnDistance: 10
    },
    grunterSpread: {
        unitComposition: defendUnitCompositions.pyroMD,
        buildableTag: "pigSpreader",
        leashDistance: 15,
        returnDistance: 10
    },
    runtSpread: {
        unitComposition: defendUnitCompositions.runts,
        buildableTag: "pigSpreader",
        leashDistance: 15,
        returnDistance: 10
    }
}

const defendDiscreteEncounterVariations = {
    [BASE_SIZE_OUTPOST]: {
        [VILLAGE_VARIATION_A]: {
            ["de0"]: { type: defendDiscreteEncounters.runtSpread, amount: 2 }
        },
        [VILLAGE_VARIATION_B]: {
            ["de0"]: { type: defendDiscreteEncounters.bruisedMagma, amount: 1 },
            ["de1"]: { type: defendDiscreteEncounters.grunterSpread, amount: 1 }
        },
        [VILLAGE_VARIATION_C]: {
            ["de1"]: { type: defendDiscreteEncounters.bruisedArrow, amount: 2 }
        }
    },
    [BASE_SIZE_SMALL]: {
        [VILLAGE_VARIATION_A]: {
            ["de0"]: { type: defendDiscreteEncounters.grunterSpread, amount: 4 }
        },
        [VILLAGE_VARIATION_B]: {
            ["de0"]: { type: defendDiscreteEncounters.runtsStandGround, amount: 4 }
        }
    },
    [BASE_SIZE_MEDIUM]: {
        [VILLAGE_VARIATION_A]: {
            ["de0"]: { type: defendDiscreteEncounters.downtownRush, amount: 1 },
            ["de1"]: { type: defendDiscreteEncounters.bruisedMagma, amount: 2 },
            ["de2"]: { type: defendDiscreteEncounters.gruntersStandGround, amount: 3 }
        },
        [VILLAGE_VARIATION_B]: {
            ["de0"]: { type: defendDiscreteEncounters.foundation, amount: 3 },
            ["de1"]: { type: defendDiscreteEncounters.runtSpread, amount: 3 }
        }
    },
    [BASE_SIZE_LARGE]: {
        [VILLAGE_VARIATION_A]: {
            ["de0"]: { type: defendDiscreteEncounters.rangeRangers, amount: 1 },
            ["de1"]: { type: defendDiscreteEncounters.magmaFoundation, amount: 4 },
            ["de2"]: { type: defendDiscreteEncounters.healerHouse, amount: 1 },
            ["de3"]: { type: defendDiscreteEncounters.downtownRush, amount: 2 }
        }
    },
    [BASE_SIZE_BOSS]: {
        [VILLAGE_VARIATION_DEFAULT]: {
            ["de0"]: { type: defendDiscreteEncounters.rangeRangers, amount: 1 },
            ["de1"]: { type: defendDiscreteEncounters.bruisedMagma, amount: 3 },
            ["de2"]: { type: defendDiscreteEncounters.healerHouse, amount: 1 },
            ["de3"]: { type: defendDiscreteEncounters.downtownRush, amount: 2 },
            ["de4"]: { type: defendDiscreteEncounters.grunterSpread, amount: 2 }
        }
    }
}

const defendRallyPointVariations = {
    [BASE_SIZE_SMALL]: {
        [VILLAGE_VARIATION_A]: {
            [DEFEND_DEFEND_AI.CG_0]: {
                controlGroupTag: DEFEND_DEFEND_AI.CG_0,
                composition: defendUnitCompositions.grunters,
                ais: [[DEFEND_DEFEND_AI.TAG, 100]],
                positionTags: [DEFEND_DEFEND_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_SIEGE_AI.CG_0]: {
                controlGroupTag: DEFEND_SIEGE_AI.CG_0,
                composition: defendUnitCompositions.pyroMD,
                ais: [[DEFEND_SIEGE_AI.TAG, 100]],
                positionTags: [DEFEND_SIEGE_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_UNIQUE_AI.CG_0]: {
                controlGroupTag: DEFEND_UNIQUE_AI.CG_0,
                composition: defendUnitCompositions.fireRain,
                ais: [[DEFEND_UNIQUE_AI.TAG, 100]],
                positionTags: [DEFEND_UNIQUE_AI.RALLY_POINT],
                positionTagExcludes: []
            }
        },
        [VILLAGE_VARIATION_B]: {
            [DEFEND_DEFEND_AI.CG_0]: {
                controlGroupTag: DEFEND_DEFEND_AI.CG_0,
                composition: defendUnitCompositions.runts,
                ais: [[DEFEND_DEFEND_AI.TAG, 100]],
                positionTags: [DEFEND_DEFEND_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_SIEGE_AI.CG_0]: {
                controlGroupTag: DEFEND_SIEGE_AI.CG_0,
                composition: defendUnitCompositions.maceMD,
                ais: [[DEFEND_SIEGE_AI.TAG, 100]],
                positionTags: [DEFEND_SIEGE_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_UNIQUE_AI.CG_0]: {
                controlGroupTag: DEFEND_UNIQUE_AI.CG_0,
                composition: defendUnitCompositions.heavyMetal,
                ais: [[DEFEND_UNIQUE_AI.TAG, 100]],
                positionTags: [DEFEND_UNIQUE_AI.RALLY_POINT],
                positionTagExcludes: []
            }
        }
    },
    [BASE_SIZE_MEDIUM]: {
        [VILLAGE_VARIATION_A]: {
            [DEFEND_DEFEND_AI.CG_0]: {
                controlGroupTag: DEFEND_DEFEND_AI.CG_0,
                composition: defendUnitCompositions.pyroMD,
                ais: [[DEFEND_DEFEND_AI.TAG, 100]],
                positionTags: [DEFEND_DEFEND_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_SIEGE_AI.CG_0]: {
                controlGroupTag: DEFEND_SIEGE_AI.CG_0,
                composition: defendUnitCompositions.bruisers,
                ais: [[DEFEND_SIEGE_AI.TAG, 100]],
                positionTags: [DEFEND_SIEGE_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_UNIQUE_AI.CG_0]: {
                controlGroupTag: DEFEND_UNIQUE_AI.CG_0,
                composition: defendUnitCompositions.bobTheBruisers,
                ais: [[DEFEND_UNIQUE_AI.TAG, 100]],
                positionTags: [DEFEND_UNIQUE_AI.RALLY_POINT],
                positionTagExcludes: []
            }
        },
        [VILLAGE_VARIATION_B]: {
            [DEFEND_DEFEND_AI.CG_0]: {
                controlGroupTag: DEFEND_DEFEND_AI.CG_0,
                composition: defendUnitCompositions.maceAndSlice,
                ais: [[DEFEND_DEFEND_AI.TAG, 100]],
                positionTags: [DEFEND_DEFEND_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_SIEGE_AI.CG_0]: {
                controlGroupTag: DEFEND_SIEGE_AI.CG_0,
                composition: defendUnitCompositions.healyBruisers,
                ais: [[DEFEND_SIEGE_AI.TAG, 100]],
                positionTags: [DEFEND_SIEGE_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_UNIQUE_AI.CG_0]: {
                controlGroupTag: DEFEND_UNIQUE_AI.CG_0,
                composition: defendUnitCompositions.despicableRunts,
                ais: [[DEFEND_UNIQUE_AI.TAG, 100]],
                positionTags: [DEFEND_UNIQUE_AI.RALLY_POINT],
                positionTagExcludes: []
            }
        }
    },
    [BASE_SIZE_LARGE]: {
        [VILLAGE_VARIATION_A]: {
            [DEFEND_DEFEND_AI.CG_0]: {
                controlGroupTag: DEFEND_DEFEND_AI.CG_0,
                composition: defendUnitCompositions.heavyHitter,
                ais: [[DEFEND_DEFEND_AI.TAG, 100]],
                positionTags: [DEFEND_DEFEND_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_SIEGE_AI.CG_0]: {
                controlGroupTag: DEFEND_SIEGE_AI.CG_0,
                composition: defendUnitCompositions.gruntRunts,
                ais: [[DEFEND_SIEGE_AI.TAG, 100]],
                positionTags: [DEFEND_SIEGE_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_SIEGE_AI.CG_1]: {
                controlGroupTag: DEFEND_SIEGE_AI.CG_0,
                composition: defendUnitCompositions.bobTheBruisersEnhanced,
                ais: [[DEFEND_SIEGE_AI.TAG, 100]],
                positionTags: [DEFEND_SIEGE_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_UNIQUE_AI.CG_0]: {
                controlGroupTag: DEFEND_UNIQUE_AI.CG_0,
                composition: defendUnitCompositions.despicableRuntsMD,
                ais: [[DEFEND_UNIQUE_AI.TAG, 100]],
                positionTags: [DEFEND_UNIQUE_AI.RALLY_POINT],
                positionTagExcludes: []
            }
        }
    },
    [BASE_SIZE_BOSS]: {
        [VILLAGE_VARIATION_DEFAULT]: {
            [DEFEND_DEFEND_AI.CG_0]: {
                controlGroupTag: DEFEND_DEFEND_AI.CG_0,
                composition: defendUnitCompositions.heavyHitter,
                ais: [[DEFEND_DEFEND_AI.TAG, 100]],
                positionTags: [DEFEND_DEFEND_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_SIEGE_AI.CG_0]: {
                controlGroupTag: DEFEND_SIEGE_AI.CG_0,
                composition: defendUnitCompositions.gruntRunts,
                ais: [[DEFEND_SIEGE_AI.TAG, 100]],
                positionTags: [DEFEND_SIEGE_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_SIEGE_AI.CG_1]: {
                controlGroupTag: DEFEND_SIEGE_AI.CG_0,
                composition: defendUnitCompositions.bobTheBruisersEnhanced,
                ais: [[DEFEND_SIEGE_AI.TAG, 100]],
                positionTags: [DEFEND_SIEGE_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_UNIQUE_AI.CG_0]: {
                controlGroupTag: DEFEND_UNIQUE_AI.CG_0,
                composition: defendUnitCompositions.despicableRuntsMD,
                ais: [[DEFEND_UNIQUE_AI.TAG, 100]],
                positionTags: [DEFEND_UNIQUE_AI.RALLY_POINT],
                positionTagExcludes: []
            }
        }
    }
}

const defendVal = {
    aiConfig: {
        [DEFEND_UNIQUE_AI.TAG]: {
            controllerArchetype: "badger:ai_entity_defend_offensive",
            controllerTag: "defendHordeUniqueAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["defendHordeUniqueAiRally"],
            reinforcementControlGroupTag: "defendHordeUnique0",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        },
        [DEFEND_SIEGE_AI.TAG]: {
            controllerArchetype: "badger:ai_entity_defend_siege",
            controllerTag: "defendHordeSiegeAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["defendHordeSiegeAiRally"],
            reinforcementControlGroupTag: "defendHordeSiege0",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        },
        [DEFEND_DEFEND_AI.TAG]: {
            controllerArchetype: "badger:ai_entity_defend_defensive",
            controllerTag: "defendHordeDefendAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["defendHordeDefendAiRally"],
            reinforcementControlGroupTag: "defendHordeDefend0",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        }
    },
    audioPerPhaseArray: ["initial_defense", "phase1_defense", "phase2_defense", "phase3_defense", "phase4_defense"],
    audioPerBossPhaseArray: ["initial", "phase1", "phase2", "phase3", "phase4"],
    escalation: {
        outerWallDestroyed: "defendOuterWallDestroyed",
        innerWallDestroyed: "defendInnerWallDestroyed",
        innerKeep: "innerKeep",
        playerCloseToBase: "playerCloseToBase"
    },
    message: {
        escalationPhase2: "piglin_defend_escalation1",
        escalationPhase3: "piglin_defend_escalation2",
        escalationPhase4: "piglin_defend_escalation3",
        massRebuildIsHappening: "piglin_defend_mass_rebuild"
    },
    global: {
        hasVisited: "defend_faction_has_been_visted",
        lavaSprayerTacticPresented: "defend_lava_sprayer_tactic_presented",
        basesDestroyed: "defend_bases_destroyed",
        largeBasesDestroyed: "defend_large_bases_destroyed",
        bossIntroPresented: "defend_boss_intro_presented",
        bossSpawned: "defend_boss_spawned",
        hasVisitedCoilBase: "defend_faction_has_visited_coil_base",
        doPortalGuardSpawnCallbackOnce: "defend_do_portal_guard_spawn_callback_once",
        doBruiserSpawnCallbackOnce: "defend_do_bruiser_spawn_callback_once",
        baseAudioPhase: "defend_base_audio_phase",
        anyBasesKilled: "defend_any_bases_killed",
        destroyedBuildingsCount: "defendMassRebuildBuildingsDestroyedCount",
        engineerBuildTimerDelay: "engineerBuildTimerDelay",
        pathOptions: "defend_path_options"
    },
    village: {
        towersDestroyed: "towers_Destroyed"
    },
    raidingPartyVars: {
        cageTag: "defend_raiding_party_cage",
        cageAmount: 2
    },
    cinematic: {
        firstTimeNonShieldBaseIntro: "hrd01_c51_portal",
        shieldIntro: "hrd01_c50a_shield_intro",
        bossDead: "hrd01_c05_defend_boss_death",
        bossIntro: "hrd01_c05_defend_boss_arrives"
    },
    VO: {
        postIntroVO: "defense_intro",
        postShieldIntroVO: "base_attack_lava_post_nis",
        postBossSpawnVO: "defense_boss_overworld",
        postBossDeath: "defense_boss_death_initial",
        postBossDeathDelayedReaction: "defense_boss_death_subsequent",
        bigUnit: ["piglin_big_unit_defend_1", "piglin_big_unit_defend_2", "piglin_big_unit_defend_3"],
        wallDestroyed: ["piglin_defend_escalation_2", "piglin_defend_escalation_3"]
    },
    consts: {
        timeUntilBigUnit: 5,
        timeUntilWallDestroyed: 3,
        smallSizeVODistance: 250,
        mediumSizeVODistance: 270,
        largeSizeVODistance: 400,
        bossSizeVODistance: 600
    },
    music: {
        [BASE_SIZE_OUTPOST]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_defend_outpost_1",
            [VILLAGE_VARIATION_B]: "badger:music_combat_defend_outpost_2",
            [VILLAGE_VARIATION_C]: "badger:music_combat_defend_outpost_3"
        },
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_defend_base_small_1",
            [VILLAGE_VARIATION_B]: "badger:music_combat_defend_base_small_2"
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_defend_base_medium_1",
            [VILLAGE_VARIATION_B]: "badger:music_combat_defend_base_medium_2"
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_defend_base_large_1"
        },
        [BASE_SIZE_BOSS]: {
            [VILLAGE_VARIATION_DEFAULT]: "badger:music_combat_defend_base_boss_1"
        }
    },
    barracks: {
        [BARRACKS_NAME_SIEGER]: SiegerBarracksConfig_DefendFaction_Variations,
        [BARRACKS_NAME_FIGHTER]: FighterBarracksConfig_DefendFaction_Variations
    },
    baseSetup: {
        reescalationSnippet: "spe_defend_gameplay",
        [BASE_SIZE_SMALL]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_defend_base_small",
            reescalation: true,
            snippets: [
                { snippet: "spe_defend_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB },
                { snippet: "spe_piglin_base_onboarding", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER, gv: ONBOARDING_GLOBALS.ONBOARDING_ENABLED }
            ]
        },
        [BASE_SIZE_MEDIUM]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_defend_base_medium",
            reescalation: true,
            snippets: [
                { snippet: "spe_defend_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB },
                { snippet: "spe_piglin_base_onboarding", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER, gv: ONBOARDING_GLOBALS.ONBOARDING_ENABLED }
            ]
        },
        [BASE_SIZE_LARGE]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_defend_base_large",
            reescalation: true,
            snippets: [
                { snippet: "spe_defend_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB },
                { snippet: "spe_piglin_base_onboarding", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER, gv: ONBOARDING_GLOBALS.ONBOARDING_ENABLED }
            ]
        },
        [BASE_SIZE_BOSS]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_defend_base_large",
            reescalation: true,
            snippets: [
                { snippet: "spe_defend_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB },
                { snippet: "spe_piglin_base_onboarding", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER, gv: ONBOARDING_GLOBALS.ONBOARDING_ENABLED }
            ]
        },
        [BASE_SIZE_OUTPOST]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_defend_base_outpost",
            snippets: [{ snippet: "spe_defend_outpost", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB }]
        }
    },
    amountOfDefendFactionLargeBases: 1,
    villageAngerRadius: 160,
    insideInnerWallsRadius: 60,
    /*
    --------------------------------
    ----- VILLAGE COMPOSITIONS -----  
    --------------------------------
    */
    villageComposition: {
        /*
        ===================
        ===== OUTPOST =====  
        ===================
        */
        frontlineA: {
            [VILLAGE_VARIATION_A]: {},
            [VILLAGE_VARIATION_B]: {},
            [VILLAGE_VARIATION_C]: {}
        },
        /*
        =================
        ===== SMALL =====  
        =================
        */
        small: {
            portalHpHigh: {
                gatherPercentage: 100,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 60],
                    ["siegeAi", 40]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 3, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 3, unit: "badger:piglin_runt" }
                }
            },
            portalHpMed: {
                gatherPercentage: 100,
                aiDistribution: [
                    ["attackAi", 10],
                    ["defendAi", 60],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 5, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 5, unit: "badger:piglin_runt" }
                }
            },
            portalHpLow: {
                gatherPercentage: 100,
                aiDistribution: [
                    ["attackAi", 20],
                    ["defendAi", 60],
                    ["siegeAi", 20]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 7, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 7, unit: "badger:piglin_runt" }
                }
            },
            phase2: {
                gatherPercentage: 50,
                aiDistribution: [
                    ["attackAi", 10],
                    ["defendAi", 40],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 3, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 1, unit: "badger:piglin_bruiser" }
                }
            },
            phase3: {
                gatherPercentage: 75,
                aiDistribution: [
                    ["attackAi", 10],
                    ["defendAi", 40],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 3, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 1, unit: "badger:piglin_bruiser" }
                }
            },
            phase4: {
                gatherPercentage: 90,
                aiDistribution: [
                    ["attackAi", 10],
                    ["defendAi", 60],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 3, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 3, unit: "badger:piglin_runt" }
                }
            },
            tier2StructureDamaged: {
                gatherPercentage: 30,
                aiDistribution: [
                    ["attackAi", 20],
                    ["defendAi", 0],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 2, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 2, unit: "badger:piglin_runt" }
                }
            },
            tier3StructureDamaged: {
                gatherPercentage: 60,
                aiDistribution: [
                    ["attackAi", 15],
                    ["defendAi", 0],
                    ["siegeAi", 45]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 2, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 2, unit: "badger:piglin_runt" }
                }
            },
            wallDamaged: {
                gatherPercentage: 0,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 0],
                    ["siegeAi", 0]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 2, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 2, unit: "badger:piglin_runt" }
                }
            },
            tier2StructureDestroyed: {
                gatherPercentage: 30,
                aiDistribution: [
                    ["attackAi", 40],
                    ["defendAi", 0],
                    ["siegeAi", 25]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 3, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 3, unit: "badger:piglin_runt" }
                }
            },
            tier3StructureDestroyed: {
                gatherPercentage: 60,
                aiDistribution: [
                    ["attackAi", 45],
                    ["defendAi", 5],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 5, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 5, unit: "badger:piglin_runt" }
                }
            },
            playerStructureBuilt: {
                gatherPercentage: 20,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 0],
                    ["siegeAi", 60]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 5, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 5, unit: "badger:piglin_runt" }
                }
            }
        },
        /*
        ==================
        ===== MEDIUM =====  
        ==================
        */
        medium: {
            portalHpHigh: {
                gatherPercentage: 100,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 60],
                    ["siegeAi", 40]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 5, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 5, unit: "badger:piglin_runt" }
                }
            },
            portalHpMed: {
                gatherPercentage: 90,
                aiDistribution: [
                    ["attackAi", 10],
                    ["defendAi", 60],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 7, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 7, unit: "badger:piglin_runt" }
                }
            },
            portalHpLow: {
                gatherPercentage: 70,
                aiDistribution: [
                    ["attackAi", 20],
                    ["defendAi", 60],
                    ["siegeAi", 20]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 7, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 7, unit: "badger:piglin_runt" }
                }
            },
            phase2: {
                gatherPercentage: 50,
                aiDistribution: [
                    ["attackAi", 10],
                    ["defendAi", 40],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 3, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 1, unit: "badger:piglin_bruiser" }
                }
            },
            phase3: {
                gatherPercentage: 75,
                aiDistribution: [
                    ["attackAi", 10],
                    ["defendAi", 40],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 3, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 1, unit: "badger:piglin_portal_guard" }
                }
            },
            phase4: {
                gatherPercentage: 90,
                aiDistribution: [
                    ["attackAi", 10],
                    ["defendAi", 60],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 3, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 1, unit: "badger:piglin_portal_guard" }
                }
            },
            tier2StructureDamaged: {
                gatherPercentage: 30,
                aiDistribution: [
                    ["attackAi", 20],
                    ["defendAi", 0],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 2, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 2, unit: "badger:piglin_runt" }
                }
            },
            tier3StructureDamaged: {
                gatherPercentage: 60,
                aiDistribution: [
                    ["attackAi", 15],
                    ["defendAi", 0],
                    ["siegeAi", 45]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 2, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 2, unit: "badger:piglin_runt" }
                }
            },
            wallDamaged: {
                gatherPercentage: 0,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 0],
                    ["siegeAi", 0]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 2, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 2, unit: "badger:piglin_runt" }
                }
            },
            tier2StructureDestroyed: {
                gatherPercentage: 30,
                aiDistribution: [
                    ["attackAi", 40],
                    ["defendAi", 0],
                    ["siegeAi", 25]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 3, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 3, unit: "badger:piglin_runt" }
                }
            },
            tier3StructureDestroyed: {
                gatherPercentage: 60,
                aiDistribution: [
                    ["attackAi", 45],
                    ["defendAi", 5],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 5, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 5, unit: "badger:piglin_runt" }
                }
            },
            playerStructureBuilt: {
                gatherPercentage: 20,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 0],
                    ["siegeAi", 60]
                ],
                spawnedUnits: {
                    villageVariationA: { amount: 5, unit: "badger:piglin_grunter" },
                    villageVariationB: { amount: 5, unit: "badger:piglin_runt" }
                }
            }
        },
        /*
        =================
        ===== LARGE =====  
        =================
        */
        large: {
            portalHpHigh: {
                gatherPercentage: 100,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 60],
                    ["siegeAi", 40]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 3, unit: "badger:piglin_runt" },
                        { amount: 1, unit: "badger:piglin_bruiser" }
                    ]
                }
            },
            portalHpMed: {
                gatherPercentage: 90,
                aiDistribution: [
                    ["attackAi", 10],
                    ["defendAi", 60],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 5, unit: "badger:piglin_runt" },
                        { amount: 1, unit: "badger:piglin_bruiser" }
                    ]
                }
            },
            portalHpLow: {
                gatherPercentage: 70,
                aiDistribution: [
                    ["attackAi", 20],
                    ["defendAi", 60],
                    ["siegeAi", 20]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 7, unit: "badger:piglin_runt" },
                        { amount: 1, unit: "badger:piglin_bruiser" }
                    ]
                }
            },
            phase1PG: {
                gatherPercentage: 100,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 100],
                    ["siegeAi", 0]
                ],
                spawnedUnits: {
                    villageVariationA: [{ amount: 1, unit: "badger:piglin_portal_guard" }]
                }
            },
            phase2: {
                gatherPercentage: 50,
                aiDistribution: [
                    ["attackAi", 10],
                    ["defendAi", 40],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: [{ amount: 3, unit: "badger:piglin_grunter" }]
                }
            },
            phase2PG: {
                gatherPercentage: 40,
                aiDistribution: [
                    ["attackAi", 25],
                    ["defendAi", 75],
                    ["siegeAi", 0]
                ],
                spawnedUnits: {
                    villageVariationA: [{ amount: 1, unit: "badger:piglin_portal_guard" }]
                }
            },
            phase3: {
                gatherPercentage: 75,
                aiDistribution: [
                    ["attackAi", 10],
                    ["defendAi", 40],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: [{ amount: 3, unit: "badger:piglin_grunter" }]
                }
            },
            phase3PG: {
                gatherPercentage: 40,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 100],
                    ["siegeAi", 0]
                ],
                spawnedUnits: {
                    villageVariationA: [{ amount: 1, unit: "badger:piglin_portal_guard" }]
                }
            },
            phase4: {
                gatherPercentage: 90,
                aiDistribution: [
                    ["attackAi", 10],
                    ["defendAi", 60],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: [{ amount: 5, unit: "badger:piglin_grunter" }]
                }
            },
            phase4PG: {
                gatherPercentage: 40,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 100],
                    ["siegeAi", 0]
                ],
                spawnedUnits: {
                    villageVariationA: [{ amount: 1, unit: "badger:piglin_portal_guard" }]
                }
            },
            tier2StructureDamaged: {
                gatherPercentage: 30,
                aiDistribution: [
                    ["attackAi", 20],
                    ["defendAi", 0],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: [{ amount: 3, unit: "badger:piglin_runt" }]
                }
            },
            tier3StructureDamaged: {
                gatherPercentage: 60,
                aiDistribution: [
                    ["attackAi", 15],
                    ["defendAi", 0],
                    ["siegeAi", 45]
                ],
                spawnedUnits: {
                    villageVariationA: [{ amount: 3, unit: "badger:piglin_runt" }]
                }
            },
            wallDamaged: {
                gatherPercentage: 0,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 0],
                    ["siegeAi", 0]
                ],
                spawnedUnits: {
                    villageVariationA: [{ amount: 3, unit: "badger:piglin_runt" }]
                }
            },
            tier2StructureDestroyed: {
                gatherPercentage: 30,
                aiDistribution: [
                    ["attackAi", 40],
                    ["defendAi", 0],
                    ["siegeAi", 25]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 3, unit: "badger:piglin_grunter" },
                        { amount: 1, unit: "badger:piglin_bruiser" }
                    ]
                }
            },
            tier3StructureDestroyed: {
                gatherPercentage: 60,
                aiDistribution: [
                    ["attackAi", 45],
                    ["defendAi", 5],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 3, unit: "badger:piglin_grunter" },
                        { amount: 1, unit: "badger:piglin_bruiser" },
                        { amount: 1, unit: "badger:piglin_engineer" }
                    ]
                }
            },
            playerStructureBuilt: {
                gatherPercentage: 20,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 0],
                    ["siegeAi", 60]
                ],
                spawnedUnits: {
                    villageVariationA: [{ amount: 3, unit: "badger:piglin_runt" }]
                }
            }
        },
        /*
        =================
        ===== BOSS =====  
        =================
        */
        boss: {
            [VILLAGE_VARIATION_DEFAULT]: {}
        }
    }
}

const defBattleRepairsVal = {
    responseCountVariable: "vv_response_battle_repair_count",
    responseLimit: {
        [BASE_SIZE_SMALL]: 1,
        [BASE_SIZE_MEDIUM]: 2,
        [BASE_SIZE_LARGE]: 3
    },
    buildingTag: "defendBattleRepairBuilding", // this is the card tag and the actual tag
    squadConfigs: {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: {
                // Pyro MD
                engineerCount: 1,
                units: [Unit("badger:piglin_grunter", 5), Unit("badger:piglin_medic", 1)]
            },
            [VILLAGE_VARIATION_B]: {
                // Mace MD
                engineerCount: 1,
                units: [Unit("badger:piglin_runt", 5), Unit("badger:piglin_medic", 1)]
            }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: {
                // Pyro MD
                engineerCount: 1,
                units: [Unit("badger:piglin_grunter", 7), Unit("badger:piglin_medic", 1)]
            },
            [VILLAGE_VARIATION_B]: {
                // Mace MD
                engineerCount: 1,
                units: [Unit("badger:piglin_runt", 7), Unit("badger:piglin_medic", 1)]
            }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: {
                // Runt Grunt
                engineerCount: 1,
                units: [Unit("badger:piglin_grunter", 3), Unit("badger:piglin_runt", 3)]
            }
        }
    },
    buildConfigs: {
        innerKeepWall: {
            buildCards: () => {
                return BuildableCard("piglinTower")
            },
            placementRules: () => {
                return [ZoneFilterCard("defInnerKeepWall"), PlacementPreferenceCard("placeCloseToWalls"), PlacementPreferenceCard("towardsEnemies"), TagCard("defendBattleRepairBuilding")]
            }
        },
        outterKeepWall: {
            buildCards: () => {
                return BuildableCard("piglinTower")
            },
            placementRules: () => {
                return [ZoneFilterCard("defOuterWalls"), PlacementPreferenceCard("placeCloseToWalls"), PlacementPreferenceCard("towardsEnemies"), TagCard("defendBattleRepairBuilding")]
            }
        }
    }
}

const GetDefendAIConfig = () => defendVal.aiConfig

const GetDefendDiscreteEncountersData = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)
    const data = GetChild(defendDiscreteEncounterVariations, size, flavour)
    if (data === undefined) {
    }
    return data
}

const GetDefendRallyPoints = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)
    const data = GetChild(defendRallyPointVariations, size, flavour)
    if (data === undefined) {
    }
    return data
}

const _CheckIfDefendFactionIsDefeated = () => {
    if (IsPiglinFactionDefeated(FACTION_NAME_DEFEND)) {
        GV_ROAMING_PIGLIN_DEFEND_FACTION_SPAWNERS.forEach((roamingGV) => {
            OUTPUT_SetGlobalVariable(roamingGV, 1)
        })

        // Correct horde decks since one horde just went out of action
        ReplenishNightOutpostHordeDeck()
    }
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignBasesEnabled, (rule) => {
    if (rule.value) {
        OUTPUT_SetGlobalVariable(defendVal.global.engineerBuildTimerDelay, 5)

        LISTENFOR_VillageGenerated({
            snippet: "vg_defend",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_DEFEND
        })

        LISTENFOR_VillageGenerated({
            snippet: "vg_defend_responses",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_DEFEND
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_defend_portal_on",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "defend_portal_on"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_defend_portal_off",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "defend_portal_off"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_defend_phase_engineer",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "forcephaseengineer"
        })
    }
})

SNIPPET_ExternalEvent("ee_defend_portal_on", () => {
    const introVar = defendVal.cinematic.shieldIntro
    const player = RandomEntity(GetPlayers())
    const portal = FILTER_ByDistance(QUERY_GetEntitiesWithTags("portal_piglin"), player, 500)
    const villageId = QUERY_GetVillageIDFromEntity(portal)

    LISTENFOR_CinematicEvent({
        snippet: "ce_defend_portal_shield_on",
        ownerVillageId: villageId,
        eventName: "portal_shield_on"
    })

    OUTPUT_TriggerCinematic(introVar, [player])
})

SNIPPET_ExternalEvent("ee_defend_portal_off", () => {
    const introVar = defendVal.cinematic.shieldDown
    const player = RandomEntity(GetPlayers())
    const portal = FILTER_ByDistance(QUERY_GetEntitiesWithTags("portal_piglin"), player, 500)
    const piglinStructure = RandomEntity(QUERY_GetEntitiesWithTags("piglin"))
    const villageId = QUERY_GetVillageIDFromEntity(portal)

    LISTENFOR_CinematicEvent({
        snippet: "ce_defend_portal_shield_off",
        ownerVillageId: villageId,
        eventName: "portal_shield_off"
    })

    OUTPUT_TriggerCinematic(introVar, [piglinStructure, portal])
})

SNIPPET_ExternalEvent("ee_defend_phase_engineer", () => {
    let villages = QUERY_GetAllAliveVillages()
    villages = FILTER_ByVillageSize(villages, BASE_SIZE_BOSS)

    const vid = QUERY_GetVillageIDFromEntity(villages)
    _MagmaBossActivatePhaseEngineers(vid)
})

SNIPPET_VillageDestroyed("vd_magma_boss_base_destroyed", (villageId) => {
    _onDefendBossBaseDefeated(villageId)
})

const _onDefendBossBaseDefeated = (villageId) => {
    if (DoOnce("magmaBossKilled")) {
        UnlockJournalEntry(JOURNAL_UNLOCKS.HORDE_DEFEND_BOSS)

        const villageEntity = GetVillageEntityFromID(villageId)
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.BOSS, MAP_BOSS.DEFEATED)

        _CheckIfDefendFactionIsDefeated()

        TelemetrySendBossKilled(GetAllPlayers(), "DefendBoss") //telemetry achievement event for killing boss
        TelemetrySendKeyActionCompletedServerEvent(BOSS_BASE_VALS.telemetry.defendBossDefeat)

        LISTENFOR_LocalTimer({
            snippet: "lt_post_portal_death_boss_action",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 5,
            payloadString: defendVal.VO.postBossDeath
        })
    }
}

SNIPPET_CinematicStarted("cs_defend_boss_dead", (payload) => {
    const bossPortal = GetVillagePortal(payload.ownerVillageId)
    //make portal vulnerable
    SetPortalInvulnerable(payload.ownerVillageId, false)
    //set portal health to 5%
    OUTPUT_SetHealthPercent(bossPortal, 5)
    Once()
})

SNIPPET_BuildingComplete("bc_defend_portal", (portalEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(portalEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    //portal destruction cineamtics for mob alliances also play from here
    LISTENFOR_DeferredDeath({
        snippet: "dd_defend_portal_destruction",
        ownerVillageId: villageId,
        villageId: villageId,
        entities: portalEntity
    })

    if (baseSize !== BASE_SIZE_SMALL && baseSize !== BASE_SIZE_MEDIUM && baseSize !== BASE_SIZE_LARGE && baseSize !== BASE_SIZE_BOSS) {
        return
    }

    OUTPUT_SetObjectiveHealthBarVisible(portalEntity, false)

    if (baseSize !== BASE_SIZE_BOSS) {
        SetupRespawningEngineers(villageId, 1, 30)
    }

    if (baseSize !== BASE_SIZE_BOSS) {
        SetAudioPhaseForBase(villageId, defendVal.audioPerPhaseArray[0])
    } else if (baseSize === BASE_SIZE_BOSS) {
        SetAudioPhaseForBase(villageId, defendVal.audioPerBossPhaseArray[0])
    }

    //INNER KEEP TRIGGER VOLUME
    const defenseInnerKeepTV = SpawnTriggerVolumeWithMultipleTagsets(portalEntity, portalEntity, "badger:spatial_trigger_defense_inner", TEAM_ORANGE, villageId, true, TAGSET_PLAYER_OR_MOB)

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_defend_player_enter_inner_keep",
        ownerVillageId: villageId,
        triggerEntity: defenseInnerKeepTV
    })

    LISTENFOR_SpatialPartitionExited({
        snippet: "spe_defend_player_exit_inner_keep",
        ownerVillageId: villageId,
        triggerEntity: defenseInnerKeepTV
    })

    //LISTEN FOR DEFEND Faction DESTRUCTION
    LISTENFOR_VillageDestroyed({
        snippet: "vd_defend_faction_portal",
        ownerVillageId: villageId,
        villageId: villageId,
        payloadEntities: defenseInnerKeepTV, // clean this on portal desruction
        despawned: false
    })

    BASE_InitPiglinStructureDamagedResponse(villageId, [
        { snippetName: "hc_defend_portal_hp_high", healthThreshold: 0.99, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_hp_high", healthThreshold: 0.89, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_hp_mid", healthThreshold: 0.79, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_hp_mid", healthThreshold: 0.69, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_hp_mid", healthThreshold: 0.59, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_hp_low", healthThreshold: 0.49, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_hp_low", healthThreshold: 0.39, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_flood_stinger", healthThreshold: 0.34, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_extreme", healthThreshold: 0.34, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_extreme", healthThreshold: 0.24, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_extreme", healthThreshold: 0.14, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_extreme", healthThreshold: 0.09, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_extreme", healthThreshold: 0.05, includeTags: ["portal_piglin"] }
    ])

    //set up proper distance checks based on base size

    BASE_InitPiglinStructureDestroyedResponse(villageId, [
        //goldmine / nether spreader destroyed squad
        { snippetName: "ed_defend_tier_1_piglin_structure_destroyed_squad", debounceTimer: 60.0, distanceCheck: 250, includeTags: ["pigGoldMine"] },
        { snippetName: "ed_defend_tier_1_piglin_structure_destroyed_squad", debounceTimer: 60.0, distanceCheck: 250, includeTags: ["pigSpreader"] },
        //barracks / arrow tower destroyed squad
        { snippetName: "ed_defend_tier_2_piglin_structure_destroyed_squad", debounceTimer: 60.0, distanceCheck: 250, includeTags: ["barracks"] },
        { snippetName: "ed_defend_tier_2_piglin_structure_destroyed_squad", debounceTimer: 60.0, distanceCheck: 250, includeTags: ["pigTower"] },
        //-----tier 3 piglin structure destroyed responses-----
        //magma tower destroyed squad
        { snippetName: "ed_defend_magma_tower_barracks_squad", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigMagmaTower"] },
        //regenerator destroyed squad
        { snippetName: "ed_defend_building_regenerator_destroyed", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigCarpenter"] },
        //range extender destroyed squad
        { snippetName: "ed_defend_range_extender_destroyed", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigRangeUp"] },
        //general wall breach squad
        { snippetName: "ed_defend_wall_breach", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["piglin_wall_outer"] },
        { snippetName: "ed_defend_wall_breach", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigTower"] },
        { snippetName: "ed_defend_wall_breach", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigGate"] },
        { snippetName: "ed_defend_wall_breach", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["piglin_wall_inner"] },
        { snippetName: "ed_defend_wall_breach", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigTowerInner"] },
        { snippetName: "ed_defend_wall_breach", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigGateInner"] },
        //phase 2 wall check
        { snippetName: "ed_defend_phase_trigger_wall_destruction", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["piglin_wall_outer"], excludeTags: ["piglin_wall_inner"] },
        { snippetName: "ed_defend_phase_trigger_wall_destruction", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigTowerOuter"], excludeTags: ["pigTowerInner"] },
        { snippetName: "ed_defend_phase_trigger_wall_destruction", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigGateOuter"], excludeTags: ["pigGateInner"] },
        //phase 3 wall check
        { snippetName: "ed_defend_phase_trigger_wall_destruction_inner", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["piglin_wall_inner"], excludeTags: ["piglin_wall_outer"] },
        { snippetName: "ed_defend_phase_trigger_wall_destruction_inner", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigTowerInner"], excludeTags: ["pigTowerOuter"] },
        { snippetName: "ed_defend_phase_trigger_wall_destruction_inner", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigGateInner"], excludeTags: ["pigGateOuter"] },
        //battle repairs
        { snippetName: "ed_defend_battle_repairs_inner", debounceTimer: 15, distanceCheck: 250, includeTags: ["piglin_wall_inner"], excludeTags: [] },
        { snippetName: "ed_defend_battle_repairs_outer", debounceTimer: 15, distanceCheck: 250, includeTags: ["piglin_wall_outer"], excludeTags: [] }
    ])

    BASE_InitPiglinStructureDamagedResponse(villageId, [
        //goldmine / nether spreader damaged squad
        { snippetName: "sd_defend_tier_1_piglin_structure_damaged_squad", debounceTimer: 120.0, includeTags: ["pigGoldMine"] },
        { snippetName: "sd_defend_tier_1_piglin_structure_damaged_squad", debounceTimer: 120.0, includeTags: ["pigSpreader"] },
        //barracks / arrow tower damaged squad
        { snippetName: "sd_defend_tier_2_piglin_structure_damaged_squad", debounceTimer: 120.0, includeTags: ["barracks"] },
        { snippetName: "sd_defend_tier_2_piglin_structure_damaged_squad", debounceTimer: 120.0, includeTags: ["pigTower"] },
        //-----tier 3 piglin structure destroyed responses-----
        //magma tower damaged squad
        { snippetName: "sd_defend_magma_tower_barracks_squad", debounceTimer: 120.0, includeTags: ["pigMagmaTower"] },
        //regenerator damaged squad
        { snippetName: "sd_defend_building_regenerator_damaged", debounceTimer: 120.0, includeTags: ["pigCarpenter"] },
        //range extender damaged squad
        { snippetName: "sd_defend_range_extender_damaged", debounceTimer: 120.0, includeTags: ["pigRangeUp"] },
        //general wall damaged squad
        { snippetName: "sd_defend_wall_breach", debounceTimer: 120.0, includeTags: ["piglin_wall_outer"] },
        { snippetName: "sd_defend_wall_breach", debounceTimer: 120.0, includeTags: ["pigGate"] },
        { snippetName: "sd_defend_wall_breach", debounceTimer: 120.0, includeTags: ["piglin_wall_inner"] },
        { snippetName: "sd_defend_wall_breach", debounceTimer: 120.0, includeTags: ["pigGateInner"] }
    ])

    BASE_InitPlayerBuiltStructureResponse(villageId, [
        //tier 1 player structure built squad // tower // wall // gate // freeze trap
        { snippetName: "pb_defend_tier_1_structure_squad", debounceTimer: 120.0, distanceCheck: 350, includeTags: ["tier1PlayerStructure"], excludeTags: ["playerBridge"] },
        //tier 2 player structure built squad // spawner // Crows nest // War drums
        { snippetName: "pb_defend_tier_2_structure_squad", debounceTimer: 120.0, distanceCheck: 350, includeTags: ["tier2PlayerStructure"], excludeTags: ["playerBridge"] },
        //tier 3 player structure built squad // RSL // Kaboomery // Outpost // mason // carpenter // POI towers
        { snippetName: "pb_defend_tier_3_structure_squad", debounceTimer: 120.0, distanceCheck: 350, includeTags: ["tier3PlayerStructure"], excludeTags: ["playerBridge"] },
        //bridge squad
        { snippetName: "pb_defend_bridge_squad", debounceTimer: 120.0, distanceCheck: 350, includeTags: ["buildable_structure", "playerBridge"] }
    ])

    if (baseSize === BASE_SIZE_BOSS) {
        SetupPortalInvulnerabilityVO(villageId)
    }
})

SNIPPET_DeferredDeath("dd_defend_portal_destruction", (entity, _payload) => {
    PlayPortalDestructionCine(entity, FACTION_NAME_DEFEND)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("hc_defend_portal_hp_high", (villageId, _portal) => {
    Once()
    const spawnLocation = GetVillagePortalSpawnLocation(villageId)
    const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)

    if (!IsBossVillage(villageId)) {
        SpawnVillageVariationUnits(villageId, defendVal.villageComposition[villageSize].portalHpHigh.spawnedUnits, spawnLocation)
    }

    Once()
})

BASE_DeclarePiglinStructureDamagedResponseHandler("hc_defend_portal_hp_mid", (villageId, _portal) => {
    Once()
    const spawnLocation = GetVillagePortalSpawnLocation(villageId)
    const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)

    if (!IsBossVillage(villageId)) {
        SpawnVillageVariationUnits(villageId, defendVal.villageComposition[villageSize].portalHpMed.spawnedUnits, spawnLocation)
    }

    Once()
})

BASE_DeclarePiglinStructureDamagedResponseHandler("hc_defend_portal_hp_low", (villageId, _portal) => {
    Once()
    const spawnLocation = GetVillagePortalSpawnLocation(villageId)
    const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)

    if (!IsBossVillage(villageId)) {
        SpawnVillageVariationUnits(villageId, defendVal.villageComposition[villageSize].portalHpLow.spawnedUnits, spawnLocation)
    }

    Once()
})

BASE_DeclarePiglinStructureDamagedResponseHandler("hc_defend_portal_flood_stinger", (villageId, portal) => {
    Once()

    _playDefendTargetStinger(portal)

    LISTENFOR_LocalTimer({
        snippet: "lt_delayed_vo_defend_portal",
        ownerVillageId: villageId,
        waitTime: 2,
        payloadInt: villageId
    })

    Once()
})

SNIPPET_LocalTimer("lt_delayed_vo_defend_portal", (payload) => {
    PlayCommonPortalHealthGroup2VO(payload.int)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("hc_defend_portal_extreme", (villageId, portal) => {
    const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)

    SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, defendVal.barracks, 42)

    const spawnLocation = GetVillagePortalSpawnLocation(villageId)
    if (!IsBossVillage(villageId)) {
        SpawnVillageVariationUnits(villageId, defendVal.villageComposition[villageSize].portalHpLow.spawnedUnits, spawnLocation)
    }

    let target = portal
    const intrudingEntities = QUERY_GetEntitiesWithTags([defendVal.escalation.innerKeep])
    if (HasEntities(intrudingEntities)) {
        target = FILTER_ByClosest(intrudingEntities, portal, 1)
    }
    GatherNearestUnitsAndSendToLocation(TAGS_PIGLIN_MOB, [], villageId, target, 100, "", "")
})

//Experimental Prototype Setup
SNIPPET_BuildingComplete("bc_defend_sub_structures_count", (crystalEntity, payload) => {
    const villageId = payload.ownerVillageId
    const substructures = GetVillageVariable(villageId, "remaining_sub_structures") + 1
    SetVillageVariable(villageId, "remaining_sub_structures", substructures)
})

SNIPPET_NonPopCappedEntityDestroyed("ed_defend_sub_structures", (entity, payload) => {
    const villageId = payload.ownerVillageId
    const substructures = DeltaVillageVariable(villageId, "remaining_sub_structures", -1)
    if (substructures === 0) {
        SetPortalInvulnerable(villageId, false)
    }
})

//fighter barracks built
SNIPPET_BuildingComplete("bc_defend_fighter_barracks", (spawner, _payload) => {
    SetBarracksConfigForVillageVariation(spawner, FighterBarracksConfig_DefendFaction_Variations)
})

//sieger barracks built
SNIPPET_BuildingComplete("bc_defend_sieger_barracks", (spawner, _payload) => {
    SetBarracksConfigForVillageVariation(spawner, SiegerBarracksConfig_DefendFaction_Variations)
})

SNIPPET_VillageDestroyed("vd_defend_faction_portal", (villageId, payload) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    _CheckIfDefendFactionIsDefeated()

    const triggerVolumesToClean = payload.entities
    OUTPUT_DespawnEntities(triggerVolumesToClean)

    //Music: Stop combat music
    const portalAudioEntity = FILTER_ByVillageID(QUERY_GetEntitiesWithTags(["portalAudioTag"]), villageId)
    OUTPUT_SetGlobalVariable(defendVal.global.baseAudioPhase, 0)
    OUTPUT_TriggerPresentationEvent(portalAudioEntity, "on_piglin_combat_stop")

    IncrementGlobal(defendVal.global.basesDestroyed)
    if (baseSize === BASE_SIZE_LARGE) {
        IncrementGlobal(defendVal.global.largeBasesDestroyed)
    }

    OUTPUT_SetGlobalVariable(defendVal.global.anyBasesKilled, 1)

    // Cinematics
    SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, defendVal.barracks, 0)
})

const _DeckShuffleDefend = (deck) => {
    DECK_ShuffleGroup(deck, RANDOM_GROUP_DEFEND_HORDE)
}

//Frontline A
const _DefendBuildFrontlineA = (villageId) => {
    const difficulty = GetOutpostDifficultyFromPhase()
    const baseDeck = DECK_Empty()
    const flaVar = GetVillageFlavour(villageId)
    SetupBasicVillageClearingCards(baseDeck)

    //center zone
    const centerZone1 = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(centerZone1, [ZoneTagCard("defInnerKeep"), ZoneTagCard("defPathStart"), ZoneHeightChangeCard("def6Height")])

    const centerZone2 = ZonesCard("addZone", 2)
    DECK_MultiplyByMultipleRules(centerZone2, [ZoneTagCard("defInnerKeep"), ZoneTagCard("defPathStart"), ZoneHeightChangeCard("def6Height")])

    //ring for crates / spreaders / towers
    const lavaZone = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(lavaZone, [ZoneTagCard("lava_option"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneHeightChangeCard("def1HeightDown")])
    const lavaZoneSecond = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(lavaZoneSecond, [ZoneTagCard("lava_option"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneHeightChangeCard("def1HeightDown")])
    const innerZones = ZonesCard("addZone", 5)
    DECK_MultiplyByMultipleRules(innerZones, [ZoneTagCard("defMidKeep"), ZoneTagCard("defOuterLayerOfZones"), ZoneHeightChangeCard("def2Height")])
    const outerZones = ZonesCard("addZone", 5)
    DECK_MultiplyByMultipleRules(outerZones, [ZoneTagCard("defOuterWalls"), ZoneHeightChangeCard("def3Height")])

    //zones
    DECK_PutOnBottomOf(lavaZone, baseDeck)
    DECK_PutOnBottomOf(centerZone1, baseDeck)
    DECK_PutOnBottomOf(lavaZoneSecond, baseDeck)
    const lavaPool = MoatCard("defendLavaPool")
    DECK_PutOnBottomOf(lavaPool, baseDeck)
    DECK_PutOnBottomOf(centerZone2, baseDeck)
    DECK_PutOnBottomOf(innerZones, baseDeck)
    DECK_PutOnBottomOf(outerZones, baseDeck)

    //paths
    const outpostPathStartRules = [ZoneFilterCard("defPathStart"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
    const outpostPathEndRules = [ZoneFilterCard("defOuterLayerOfZones")]

    CreatePathRequestOnBottomOf("defend_district_path", outpostPathStartRules, outpostPathEndRules, baseDeck)

    //common structures
    const centerDeck = DECK_Empty()
    if (difficulty >= 1) {
        if (flaVar === VILLAGE_VARIATION_A) {
            DECK_PutOnBottomOf(BuildableCard("addSiegerBarracks", 1), centerDeck)
        }
        if (flaVar === VILLAGE_VARIATION_B) {
            DECK_PutOnBottomOf(BuildableCard("lavaSprayerTower", 1), centerDeck)
        }
        if (flaVar === VILLAGE_VARIATION_C) {
            DECK_PutOnBottomOf(BuildableCard("addFighterBarracks", 1), centerDeck)
        }
    }

    DECK_MultiplyByMultipleRules(centerDeck, [ZoneFilterCard("defInnerKeep"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeRandomly")])

    const cageDeck = DECK_Empty()
    //Cages for raiding parties
    if (IsPiglinRaidingParty(villageId)) {
        const cages = BuildableCard("mobCage", defendVal.raidingPartyVars.cageAmount)
        DECK_PutOnBottomOf(cages, cageDeck)
        DECK_MultiplyByMultipleRules(cageDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), TagCard(defendVal.raidingPartyVars.cageTag)])
    }

    //buildings
    const layer1Deck = DECK_Empty()
    if (flaVar === VILLAGE_VARIATION_A) {
        if (difficulty >= 1) {
            DECK_PutOnBottomOf(BuildableCard("addFighterBarracks", 1), layer1Deck)
        }
        if (difficulty >= 2) {
            DECK_PutOnBottomOf(BuildableCard("addSiegerBarracks", 1), layer1Deck)
        }
        if (difficulty === 3) {
            DECK_PutOnBottomOf(BuildableCard("addFighterBarracks", 1), layer1Deck)
        }
        DECK_MultiplyByMultipleRules(layer1Deck, [ZoneFilterCard("defMidKeep"), HeartCard(), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeRandomly")])
        _DeckShuffleDefend(layer1Deck)
    }
    if (flaVar === VILLAGE_VARIATION_B) {
        if (difficulty >= 1) {
            DECK_PutOnBottomOf(BuildableCard("netherSpreader", 1), layer1Deck)
            DECK_PutOnBottomOf(BuildableCard("addSiegerBarracks", 1), layer1Deck)
        }
        if (difficulty >= 2) {
            DECK_PutOnBottomOf(BuildableCard("addSiegerBarracks", 1), layer1Deck)
        }
        if (difficulty === 3) {
            DECK_PutOnBottomOf(BuildableCard("lavaSprayerTower", 1), layer1Deck)
        }
        DECK_MultiplyByMultipleRules(layer1Deck, [ZoneFilterCard("defMidKeep"), HeartCard(), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeRandomly")])
        _DeckShuffleDefend(layer1Deck)
    }
    if (flaVar === VILLAGE_VARIATION_C) {
        if (difficulty >= 1) {
            DECK_PutOnBottomOf(BuildableCard("piglinTower", 2), layer1Deck)
        }
        if (difficulty >= 2) {
            DECK_PutOnBottomOf(BuildableCard("piglinTower", 1), layer1Deck)
        }
        if (difficulty === 3) {
            DECK_PutOnBottomOf(BuildableCard("addFighterBarracks", 1), layer1Deck)
        }
        DECK_MultiplyByMultipleRules(layer1Deck, [ZoneFilterCard("defMidKeep"), HeartCard(), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeRandomly")])
        _DeckShuffleDefend(layer1Deck)
    }

    const outerLayerDeck = DECK_Empty()
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 2), outerLayerDeck)
    DECK_PutOnBottomOf(BuildableCard("goldMine", 2), outerLayerDeck)
    DECK_MultiplyByMultipleRules(outerLayerDeck, [ZoneFilterCard("defOuterWalls"), HeartCard(), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeRandomly")])

    DECK_PutOnBottomOf(centerDeck, baseDeck)
    DECK_PutOnBottomOf(cageDeck, baseDeck)
    DECK_PutOnBottomOf(layer1Deck, baseDeck)
    DECK_PutOnBottomOf(outerLayerDeck, baseDeck)

    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
}

const _DefendBuildBossBase = (villageId) => {
    // BUILDS =======================================================================================================================================================
    const baseDeck = DECK_Empty()
    SetupBasicVillageClearingCards(baseDeck)
    let firstZone = DECK_Empty()
    let portal = null

    //-----------------------------setup all the zones preferences-------------------------//
    //center zone w/ height modifiers
    portal = BuildableCard("defendPortalLarge")
    firstZone = ZonesCard("defCenterZone", 1) //center zone Large
    DECK_MultiplyBySingle(firstZone, ZoneHeightChangeCard("def16Height"))
    DECK_MultiplyBySingle(portal, ZoneHeightChangeCard("def16Height"))
    //portal modifiers and placement
    DECK_MultiplyBySingle(portal, PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START))
    DECK_MultiplyBySingle(portal, ZoneFilterCard("placeInsideVillageAlways"))
    DECK_MultiplyBySingle(portal, ZoneFilterCard("defInnerKeepWall"))
    DECK_MultiplyBySingle(portal, ForceBuildingPlacementCard("forceBuildingPlacement"))

    DECK_MultiplyByMultipleRules(firstZone, [ZoneTagCard("defInnerKeepWallTag"), ZoneTagCard("defBossZone")])

    let keepLOZ = DECK_Empty()
    let keepMidLOZ = DECK_Empty()
    //inner layer of zones w/ height modifiers
    keepLOZ = LayerOfZonesCard("defAddLayerOfZones", 1)
    DECK_MultiplyBySingle(keepLOZ, ZoneHeightChangeCard("def16Height"))
    DECK_MultiplyByMultipleRules(keepLOZ, [ZoneTagCard("defInnerKeepWallTag"), ZoneTagCard("defBossZone")])

    keepMidLOZ = ZonesCard("add1Zone", 11)
    DECK_MultiplyBySingle(keepMidLOZ, ZoneHeightChangeCard("def16Height"))
    DECK_MultiplyByMultipleRules(keepMidLOZ, [ZoneTagCard("defInnerKeepWallTag"), ZoneTagCard("defBossZone")])

    //set up shape for each size w/ height modifiers
    const keepShapeZones = LayerOfZonesCard("defAddLayerOfZones", 2)
    DECK_MultiplyBySingle(keepShapeZones, ZoneTagCard("defBossZone"))
    DECK_MultiplyBySingle(keepShapeZones, ZoneHeightChangeCard("def16Height"))
    DECK_MultiplyBySingle(keepShapeZones, ZoneTagCard("defInnerKeepWallTag"))

    //setup between walls zones
    const betweenWallsZones = LayerOfZonesCard("addLayerOfZones", 2)
    DECK_MultiplyBySingle(betweenWallsZones, ZoneTagCard("defBetweenWallsTag"))
    DECK_MultiplyBySingle(betweenWallsZones, ZoneTagCard("defOuterWalls"))
    DECK_MultiplyBySingle(betweenWallsZones, ZoneHeightChangeCard("def7Height"))

    const defOutsideWalls2 = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(defOutsideWalls2, [ZoneTagCard("defOutsideWallsTag"), ZoneTagCard("defOutskirtsPathZone")])

    const defOutsideWalls3 = LayerOfZonesCard("addLayerOfZones", 3)
    DECK_MultiplyBySingle(defOutsideWalls2, ZoneTagCard("defOutskirtsPathZone"))

    //-------------------------------paths preferences----------------------------------//

    const northPathStartRulesBossVar = [ZoneFilterCard("defInnerKeepWall"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
    const northPathEndRulesBossVar = [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush48")]

    const southPathStartRulesBossVar = [ZoneFilterCard("defInnerKeepWall"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
    const southPathEndRulesBossVar = [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush48")]

    const westPathStartRulesBossVarBetween = [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")]
    const westPathEndRulesBossVarBetween = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")]

    const eastPathStartRulesBossVarBetween = [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")]
    const eastPathEndRulesBossVarBetween = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")]

    //wall preferences
    let innerWalls = DECK_Empty()
    let outerWalls = DECK_Empty()

    //play inner walls
    innerWalls = WallsCard("defInnerWalls")
    DECK_MultiplyBySingle(innerWalls, ZoneFilterCard("defInnerKeepWall"))

    outerWalls = WallsCard("defTowerWallLight")
    DECK_MultiplyBySingle(outerWalls, ZoneFilterCard("defOuterWalls"))

    //--------------------------structure decks preferences-----------------------------//
    //outsideKeepWall deck
    const outsideKeepWall = DECK_Empty()
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 6), outsideKeepWall)
    DECK_PutOnBottomOf(BuildableCard("goldMine", 6), outsideKeepWall)
    DECK_MultiplyBySingle(outsideKeepWall, ZoneFilterCard("defBetweenWalls"))
    DECK_MultiplyBySingle(outsideKeepWall, ZoneFilterCard("placeInsideVillageAlways"))
    _DeckShuffleDefend(outsideKeepWall)

    const northRallyPointStructure = BuildableCard("defendRallyPoint", 1)
    DECK_MultiplyByMultipleRules(northRallyPointStructure, [ZoneFilterCard("defBetweenWalls"), TagCard("defendHordeDefendAiRally"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), PlacementPreferenceCard("closeToGate"), ZoneFilterCard("placeInsideVillageAlways"), ForceBuildingPlacementCard("forceBuildingPlacement")])

    const southRallyPointStructure = BuildableCard("defendRallyPoint", 1)
    DECK_MultiplyByMultipleRules(southRallyPointStructure, [ZoneFilterCard("defBetweenWalls"), TagCard("defendHordeUniqueAiRally"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), PlacementPreferenceCard("closeToGate"), ZoneFilterCard("placeInsideVillageAlways"), ForceBuildingPlacementCard("forceBuildingPlacement")])

    const northKeepWallLavaSprayerStructure = BuildableCard("lavaSprayerTower", 1)
    DECK_MultiplyByMultipleRules(northKeepWallLavaSprayerStructure, [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), PlacementPreferenceCard("closeToGate"), ForceBuildingPlacementCard("forceBuildingPlacement")])

    const southKeepWallLavaSprayerStructure = BuildableCard("lavaSprayerTower", 1)
    DECK_MultiplyByMultipleRules(southKeepWallLavaSprayerStructure, [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), PlacementPreferenceCard("closeToGate"), ForceBuildingPlacementCard("forceBuildingPlacement")])

    const regeneratorStructure = BuildableCard("buildingRegenerator", 1)
    DECK_MultiplyByMultipleRules(regeneratorStructure, [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")])

    const rangeExtenderStructure = BuildableCard("rangeExtender", 1)
    DECK_MultiplyByMultipleRules(rangeExtenderStructure, [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    const northKeepWallFighterStructure = BuildableCard("addFighterBarracks", 2)
    DECK_MultiplyByMultipleRules(northKeepWallFighterStructure, [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), TagCard("barracksdefendHordeUnique0"), TagCard("barracksdefendHordeDefend0")])

    const sourthKeepWallFighterStructure = BuildableCard("addFighterBarracks", 1)
    DECK_MultiplyByMultipleRules(sourthKeepWallFighterStructure, [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), TagCard("barracksdefendHordeUnique0"), TagCard("barracksdefendHordeDefend0")])

    const eastKeepWallSiegerStructure = BuildableCard("addSiegerBarracks", 2)
    DECK_MultiplyByMultipleRules(eastKeepWallSiegerStructure, [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), TagCard("barracksdefendHordeUnique0"), TagCard("barracksdefendHordeSiege0")])

    const westKeepWallSiegerStructure = BuildableCard("addSiegerBarracks", 2)
    DECK_MultiplyByMultipleRules(westKeepWallSiegerStructure, [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), TagCard("barracksdefendHordeSiege0"), TagCard("barracksdefendHordeDefend0")])

    //insideOuterWall deck
    const insideOuterWall = DECK_Empty()
    DECK_PutOnBottomOf(BuildableCard("lavaSprayerTower", 4), insideOuterWall)
    DECK_PutOnBottomOf(BuildableCard("piglinTower", 10), insideOuterWall)
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 6), insideOuterWall)
    DECK_PutOnBottomOf(BuildableCard("goldMine", 6), insideOuterWall)
    DECK_MultiplyBySingle(insideOuterWall, PlacementPreferenceCard("placeCloseToWalls"))
    DECK_MultiplyBySingle(insideOuterWall, ZoneFilterCard("defBetweenWalls"))
    DECK_MultiplyBySingle(insideOuterWall, ZoneFilterCard("placeInsideVillageAlways"))
    _DeckShuffleDefend(insideOuterWall)

    const eastRallyPointStructure = BuildableCard("defendRallyPoint", 1)
    DECK_MultiplyByMultipleRules(eastRallyPointStructure, [ZoneFilterCard("defBetweenWalls"), TagCard("defendHordeSiegeAiRally"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), PlacementPreferenceCard("closeToAnyGate"), ZoneFilterCard("placeInsideVillageAlways")])

    const westRallyPointStructure = BuildableCard("defendRallyPoint", 1)
    DECK_MultiplyByMultipleRules(westRallyPointStructure, [ZoneFilterCard("defBetweenWalls"), TagCard("defendHordeSiegeAiRally"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), PlacementPreferenceCard("closeToAnyGate"), ZoneFilterCard("placeInsideVillageAlways")])

    const northInsideOuterWallSiegerStructure = BuildableCard("addSiegerBarracks", 1)
    DECK_MultiplyByMultipleRules(northInsideOuterWallSiegerStructure, [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways"), TagCard("barracksdefendHordeSiege0"), TagCard("barracksdefendHordeDefend0")])

    const southInsideOuterWallSiegerStructure = BuildableCard("addSiegerBarracks", 2)
    DECK_MultiplyByMultipleRules(southInsideOuterWallSiegerStructure, [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways"), TagCard("barracksdefendHordeUnique0"), TagCard("barracksdefendHordeSiege0")])

    const eastInsideOuterWallFighterStructure = BuildableCard("addFighterBarracks", 1)
    DECK_MultiplyByMultipleRules(eastInsideOuterWallFighterStructure, [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways"), TagCard("barracksdefendHordeUnique0"), TagCard("barracksdefendHordeDefend0")])

    const westInsideOuterWallFighterStructure = BuildableCard("addFighterBarracks", 1)
    DECK_MultiplyByMultipleRules(westInsideOuterWallFighterStructure, [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways"), TagCard("barracksdefendHordeUnique0"), TagCard("barracksdefendHordeDefend0")])

    //outsideOuterWall deck
    const outsideOuterWall = DECK_Empty()
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 10), outsideOuterWall)
    DECK_MultiplyBySingle(outsideOuterWall, ZoneFilterCard("defOutsideWalls"))
    DECK_MultiplyBySingle(outsideOuterWall, PlacementPreferenceCard("placeCloseToWalls"))
    DECK_MultiplyBySingle(outsideOuterWall, ZoneFilterCard("placeInsideVillageAlways"))
    _DeckShuffleDefend(outsideOuterWall)

    const eastOuterSiegerBarrackStructure = BuildableCard("addSiegerBarracks", 1)
    DECK_MultiplyByMultipleRules(eastOuterSiegerBarrackStructure, [ZoneFilterCard("defOutsideWalls"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways"), TagCard("barracksdefendHordeSiege0"), TagCard("barracksdefendHordeSiege1")])

    const westOuterSiegerBarrackStructure = BuildableCard("addSiegerBarracks", 1)
    DECK_MultiplyByMultipleRules(westOuterSiegerBarrackStructure, [ZoneFilterCard("defOutsideWalls"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways"), TagCard("barracksdefendHordeSiege0"), TagCard("barracksdefendHordeSiege1")])

    const eastOuterFighterBarrackStructure = BuildableCard("addFighterBarracks", 1)
    DECK_MultiplyByMultipleRules(eastOuterFighterBarrackStructure, [ZoneFilterCard("defOutsideWalls"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways"), TagCard("barracksdefendHordeSiege0"), TagCard("barracksdefendHordeDefend0")])

    const westOuterFighterBarrackStructure = BuildableCard("addFighterBarracks", 1)
    DECK_MultiplyByMultipleRules(westOuterFighterBarrackStructure, [ZoneFilterCard("defOutsideWalls"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways"), TagCard("barracksdefendHordeSiege0"), TagCard("barracksdefendHordeUnique0")])

    const northOuterPiglinTowerStructure = BuildableCard("piglinTower", 2)
    DECK_MultiplyByMultipleRules(northOuterPiglinTowerStructure, [ZoneFilterCard("defOutsideWalls"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")])

    const southOuterPiglinTowerStructure = BuildableCard("piglinTower", 2)
    DECK_MultiplyByMultipleRules(southOuterPiglinTowerStructure, [ZoneFilterCard("defOutsideWalls"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")])

    const eastOuterPiglinTowerStructure = BuildableCard("piglinTower", 2)
    DECK_MultiplyByMultipleRules(eastOuterPiglinTowerStructure, [ZoneFilterCard("defOutsideWalls"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")])

    const westOuterPiglinTowerStructure = BuildableCard("piglinTower", 2)
    DECK_MultiplyByMultipleRules(westOuterPiglinTowerStructure, [ZoneFilterCard("defOutsideWalls"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")])

    //-------------------ACTUAL ORDER OF BASE PLACMENT IS HERE--------------------------//
    //play zones
    DECK_PutOnBottomOf(firstZone, baseDeck)
    DECK_PutOnBottomOf(keepLOZ, baseDeck)
    DECK_PutOnBottomOf(keepMidLOZ, baseDeck)
    const innerLavaMoat = MoatCard("defBossMoat")
    DECK_MultiplyByMultipleRules(innerLavaMoat, [ZoneTagCard("defInnerKeepWallTag"), ZoneTagCard("defBossZone")])
    DECK_PutOnBottomOf(innerLavaMoat, baseDeck)
    DECK_PutOnBottomOf(keepShapeZones, baseDeck)
    DECK_PutOnBottomOf(betweenWallsZones, baseDeck)
    DECK_PutOnBottomOf(defOutsideWalls2, baseDeck)
    DECK_PutOnBottomOf(defOutsideWalls3, baseDeck)

    //play weathering
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    //play paths
    CreatePathRequestOnBottomOf("defend_district_path", northPathStartRulesBossVar, northPathEndRulesBossVar, baseDeck)
    CreatePathRequestOnBottomOf("defend_district_path", southPathStartRulesBossVar, southPathEndRulesBossVar, baseDeck)

    CreatePathRequestOnBottomOf("defend_district_path", westPathStartRulesBossVarBetween, westPathEndRulesBossVarBetween, baseDeck)
    CreatePathRequestOnBottomOf("defend_district_path", eastPathStartRulesBossVarBetween, eastPathEndRulesBossVarBetween, baseDeck)

    //play walls
    DECK_PutOnBottomOf(innerWalls, baseDeck)
    DECK_PutOnBottomOf(outerWalls, baseDeck)

    //play structures
    if (portal !== null) {
        DECK_PutOnBottomOf(portal, baseDeck)
    }

    DECK_PutOnBottomOf(northRallyPointStructure, baseDeck)
    DECK_PutOnBottomOf(southRallyPointStructure, baseDeck)
    DECK_PutOnBottomOf(regeneratorStructure, baseDeck)
    DECK_PutOnBottomOf(rangeExtenderStructure, baseDeck)
    DECK_PutOnBottomOf(northKeepWallLavaSprayerStructure, baseDeck)
    DECK_PutOnBottomOf(southKeepWallLavaSprayerStructure, baseDeck)
    DECK_PutOnBottomOf(northKeepWallFighterStructure, baseDeck)
    DECK_PutOnBottomOf(sourthKeepWallFighterStructure, baseDeck)
    DECK_PutOnBottomOf(eastKeepWallSiegerStructure, baseDeck)
    DECK_PutOnBottomOf(westKeepWallSiegerStructure, baseDeck)

    DECK_PutOnBottomOf(outsideKeepWall, baseDeck)

    DECK_PutOnBottomOf(eastRallyPointStructure, baseDeck)
    DECK_PutOnBottomOf(westRallyPointStructure, baseDeck)
    DECK_PutOnBottomOf(northInsideOuterWallSiegerStructure, baseDeck)
    DECK_PutOnBottomOf(southInsideOuterWallSiegerStructure, baseDeck)
    DECK_PutOnBottomOf(eastInsideOuterWallFighterStructure, baseDeck)
    DECK_PutOnBottomOf(westInsideOuterWallFighterStructure, baseDeck)

    DECK_PutOnBottomOf(insideOuterWall, baseDeck)

    DECK_PutOnBottomOf(eastOuterSiegerBarrackStructure, baseDeck)
    DECK_PutOnBottomOf(westOuterSiegerBarrackStructure, baseDeck)
    DECK_PutOnBottomOf(eastOuterFighterBarrackStructure, baseDeck)
    DECK_PutOnBottomOf(westOuterFighterBarrackStructure, baseDeck)
    DECK_PutOnBottomOf(northOuterPiglinTowerStructure, baseDeck)
    DECK_PutOnBottomOf(southOuterPiglinTowerStructure, baseDeck)
    DECK_PutOnBottomOf(eastOuterPiglinTowerStructure, baseDeck)
    DECK_PutOnBottomOf(westOuterPiglinTowerStructure, baseDeck)

    DECK_PutOnBottomOf(outsideOuterWall, baseDeck)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
}

//generate base
SNIPPET_VillageGenerated("vg_defend_responses", (villageId, _payload) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    //portal built
    LISTENFOR_BuildingComplete({
        snippet: "bc_defend_portal",
        ownerVillageId: villageId,
        includeTags: ["portal_piglin"],
        villageId: villageId
    })
    if (IsMobAlliancePiglinSize(baseSize)) {
        return
    }
    if (IsStructureDestructionBase(villageId)) {
        //Experimental Prototype Setup
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_defend_sub_structures",
            ownerVillageId: villageId,
            includeTags: ["pigCrystal"],
            villageId: villageId,
            factionName: FACTION_NAME_DEFEND
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_defend_sub_structures_count",
            ownerVillageId: villageId,
            includeTags: ["pigCrystal"],
            villageId: villageId,
            factionName: FACTION_NAME_DEFEND
        })
    }

    //Base setup
    LISTENFOR_VillageFinishedBuilding({
        snippet: "vfb_defend_base_setup",
        ownerVillageId: villageId,
        villageId: villageId
    })

    const discreteEncounters = GetDefendDiscreteEncountersData(villageId)
    if (discreteEncounters !== undefined) {
        CreateDiscreteEncountersListeners(villageId, discreteEncounters)
    }

    //Audio
    SetupAudioEntityForBase(villageId, defendVal.music)

    if (baseSize === BASE_SIZE_OUTPOST) {
        SetAudioPhaseForBase(villageId, defendVal.audioPerPhaseArray[0])
    }

    //ALL BASES
    //FIGHTER barracks complete
    LISTENFOR_BuildingComplete({
        snippet: "bc_defend_fighter_barracks",
        ownerVillageId: villageId,
        includeTags: [BARRACKS_NAME_FIGHTER],
        villageId: villageId
    })
    //SIEGER barracks complete
    LISTENFOR_BuildingComplete({
        snippet: "bc_defend_sieger_barracks",
        ownerVillageId: villageId,
        includeTags: [BARRACKS_NAME_SIEGER],
        villageId: villageId
    })

    if (BASE_SIZE_ALL_PORTALS_AND_BOSS.includes(baseSize)) {
        LISTENFOR_BuildingComplete({
            snippet: "bc_defend_barracks_siege_defend",
            ownerVillageId: villageId,
            includeTags: ["barracksdefendHordeSiege0", "barracksdefendHordeDefend0"],
            villageId: villageId
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_defend_barracks_unique_defend",
            ownerVillageId: villageId,
            includeTags: ["barracksdefendHordeUnique0", "barracksdefendHordeDefend0"],
            villageId: villageId
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_defend_barracks_siege_unique",
            ownerVillageId: villageId,
            includeTags: ["barracksdefendHordeSiege0", "barracksdefendHordeUnique0"],
            villageId: villageId
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_defend_barracks_siege_siege",
            ownerVillageId: villageId,
            includeTags: ["barracksdefendHordeSiege0", "barracksdefendHordeSiege1"],
            villageId: villageId
        })
    }

    //set the appearance of the piglins spawned by the obstacle faction
    LISTENFOR_EntitySpawned({
        snippet: "es_set_appearance_to_defend_faction_piglins",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["piglin", "mob"]
    })

    //listen for portalguard spawns, play VO
    LISTENFOR_EntitySpawned({
        snippet: "es_portal_guard_vo",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["portalguard"]
    })

    //S/M/L
    if (baseSize === BASE_SIZE_SMALL || baseSize === BASE_SIZE_MEDIUM || baseSize === BASE_SIZE_LARGE || baseSize === BASE_SIZE_BOSS) {
        //tower counting for mass rebuild
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_countingTowers",
            ownerVillageId: villageId,
            includeTags: ["pigTowerOuter"],
            excludeTags: [],
            villageId: villageId
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_countingTowers",
            ownerVillageId: villageId,
            includeTags: ["pigTower"],
            excludeTags: [],
            villageId: villageId
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_countingTowers",
            ownerVillageId: villageId,
            includeTags: ["pigTowerInner"],
            excludeTags: [],
            villageId: villageId
        })
    }
    //M/L
    if (baseSize === BASE_SIZE_MEDIUM || baseSize === BASE_SIZE_LARGE || baseSize === BASE_SIZE_BOSS) {
    }
    //LARGE ONLY
    if (baseSize === BASE_SIZE_LARGE) {
        //mass rebuild tactic
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "defendMassRebuildCounter",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: ["pigTower"],
            despawned: false
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "defendMassRebuildCounter",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: ["pigTowerInner"],
            despawned: false
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "defendMassRebuildCounter",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: ["pigGoldMine"],
            despawned: false
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "defendMassRebuildCounter",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: ["pigSpreader"],
            despawned: false
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "defendMassRebuildCounter",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: [BARRACKS_NAME_FIGHTER],
            despawned: false
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "defendMassRebuildCounter",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: [BARRACKS_NAME_SIEGER],
            despawned: false
        })
    }
})

SNIPPET_BuildingComplete("bc_defend_barracks_siege_defend", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    RecruitSpawnerOutputToEntitiesWithMultipleTags(villageId, buildingEntity, "barracksdefendHordeSiege0", "barracksdefendHordeDefend0")
})

SNIPPET_BuildingComplete("bc_defend_barracks_unique_defend", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    RecruitSpawnerOutputToEntitiesWithMultipleTags(villageId, buildingEntity, "barracksdefendHordeUnique0", "barracksdefendHordeDefend0")
})

SNIPPET_BuildingComplete("bc_defend_barracks_siege_unique", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    RecruitSpawnerOutputToEntitiesWithMultipleTags(villageId, buildingEntity, "barracksdefendHordeSiege0", "barracksdefendHordeUnique0")
})

SNIPPET_BuildingComplete("bc_defend_barracks_siege_siege", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    RecruitSpawnerOutputToEntitiesWithMultipleTags(villageId, buildingEntity, "barracksdefendHordeSiege0", "barracksdefendHordeSiege1")
})

SNIPPET_VillageFinishedBuilding("vfb_defend_base_setup", (villageId, _payload) => {
    SetupPiglinBase(villageId, defendVal.baseSetup)
})

SNIPPET_VillageGenerated("vg_defend", (villageId, _payload) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    if (IsSmallOrGreater(baseSize)) {
        InitializeBaseAIs(villageId, defendVal.aiConfig, GetDefendRallyPoints(villageId))
    }

    if (IsMobAlliancePiglinSize(baseSize)) {
        return
    }

    if (baseSize === BASE_SIZE_BOSS) {
        _DefendBuildBossBase(villageId)
        return
    } else if (baseSize === BASE_SIZE_OUTPOST) {
        const difficulty = GetOutpostDifficultyFromPhase()
        SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, defendVal.barracks, difficulty - 1)

        if (IsPiglinRaidingParty(villageId)) {
            SetupMobCages(villageId, defendVal.raidingPartyVars.cageTag)
            SetupRaidingPartyHorn(villageId)
        }

        _DefendBuildFrontlineA(villageId)
        return
    } else if (!IsSmallOrGreater(baseSize)) {
        return
    }

    let cardValueBf = ""
    if (baseSize === BASE_SIZE_SMALL) {
        cardValueBf = "defendPortalSmall"
    } else if (baseSize === BASE_SIZE_MEDIUM) {
        cardValueBf = "defendPortalMedium"
    } else if (baseSize === BASE_SIZE_LARGE) {
        cardValueBf = "defendPortalLarge"
    }
    if (cardValueBf !== "") {
        LISTENFOR_BuildingFailedToPlace({
            snippet: "bf_portal_failed_to_place",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cardValue: cardValueBf
        })
    }

    // BUILDS =======================================================================================================================================================
    const baseDeck = DECK_Empty()
    SetupBasicVillageClearingCards(baseDeck)
    let firstZone = DECK_Empty()
    const miniDecks = CreateBuildableGenMiniDecks(defendBaseMiniDeckNames, defendBaseGen, baseSize, villageId, RANDOM_GROUP_DEFEND_HORDE)
    let portal = null

    //-----------------------------setup all the zones preferences-------------------------//
    //center zone w/ height modifiers
    if (IsSmall(baseSize)) {
        portal = BuildableCard("defendPortalSmall")
        firstZone = ZonesCard("defCenterZone", 1) //center zone small
        DECK_MultiplyBySingle(firstZone, ZoneHeightChangeCard("def14Height"))
        DECK_MultiplyBySingle(firstZone, ZoneTagCard("defPathStart"))
        DECK_MultiplyBySingle(portal, ZoneHeightChangeCard("def14Height"))
        //portal modifiers and placement
        DECK_MultiplyBySingle(portal, PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START))
        DECK_MultiplyBySingle(portal, ZoneFilterCard("placeInsideVillageAlways"))
        DECK_MultiplyBySingle(portal, ForceBuildingPlacementCard("forceBuildingPlacement"))
        DECK_MultiplyBySingle(portal, ZoneTagCard("enable_debug_logging"))
    } else if (IsMedium(baseSize)) {
        portal = BuildableCard("defendPortalMedium")
        firstZone = ZonesCard("defCenterZone", 1) //center zone Medium
        DECK_MultiplyBySingle(firstZone, ZoneHeightChangeCard("def20Height"))
        DECK_MultiplyBySingle(firstZone, ZoneTagCard("defPathStart"))
        DECK_MultiplyBySingle(portal, ZoneHeightChangeCard("def20Height"))
        //portal modifiers and placement
        DECK_MultiplyBySingle(portal, PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START))
        DECK_MultiplyBySingle(portal, ZoneFilterCard("placeInsideVillageAlways"))
        DECK_MultiplyBySingle(portal, ForceBuildingPlacementCard("forceBuildingPlacement"))
        DECK_MultiplyBySingle(portal, ZoneTagCard("enable_debug_logging"))
    } else if (IsLarge(baseSize)) {
        portal = BuildableCard("defendPortalLarge")
        firstZone = ZonesCard("defCenterZone", 1) //center zone Large
        DECK_MultiplyBySingle(firstZone, ZoneHeightChangeCard("def22Height"))
        DECK_MultiplyBySingle(firstZone, ZoneTagCard("defPathStart"))
        DECK_MultiplyBySingle(portal, ZoneHeightChangeCard("def22Height"))
        //portal modifiers and placement
        DECK_MultiplyBySingle(portal, PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START))
        DECK_MultiplyBySingle(portal, ZoneFilterCard("placeInsideVillageAlways"))
        DECK_MultiplyBySingle(portal, ForceBuildingPlacementCard("forceBuildingPlacement"))
        DECK_MultiplyBySingle(portal, ZoneTagCard("enable_debug_logging"))
    }

    DECK_MultiplyByMultipleRules(firstZone, [ZoneTagCard("defInnerKeepWallTag"), ZoneTagCard("defKeepShapeWall")])
    DECK_MultiplyByMultipleRules(portal, [ZoneFilterCard("defInnerKeepWall")])

    let keepLOZ = DECK_Empty()
    let keepMidLOZ = DECK_Empty()
    //inner layer of zones w/ height modifiers
    if (IsSmall(baseSize)) {
        //layer of zones if small
        keepLOZ = LayerOfZonesCard("defAddLayerOfZones", 1)
        DECK_MultiplyBySingle(keepLOZ, ZoneHeightChangeCard("def14Height"))
        DECK_MultiplyByMultipleRules(keepLOZ, [ZoneTagCard("defInnerKeep"), ZoneTagCard("defInnerKeepWallTag"), ZoneTagCard("defKeepShapeWall"), ZoneTagCard("defGeneralZone")])

        keepMidLOZ = LayerOfZonesCard("defAddLayerOfZones", 1)
        DECK_MultiplyBySingle(keepMidLOZ, ZoneHeightChangeCard("def14Height"))
        DECK_MultiplyByMultipleRules(keepMidLOZ, [ZoneTagCard("defMidKeep"), ZoneTagCard("defInnerKeepWallTag"), ZoneTagCard("defKeepShapeWall"), ZoneTagCard("defGeneralZone")])
    } else if (IsMedium(baseSize)) {
        //layer of zones if medium
        keepLOZ = LayerOfZonesCard("defAddLayerOfZones", 1)
        DECK_MultiplyBySingle(keepLOZ, ZoneHeightChangeCard("def20Height"))
        DECK_MultiplyByMultipleRules(keepLOZ, [ZoneTagCard("defInnerKeep"), ZoneTagCard("defInnerKeepWallTag"), ZoneTagCard("defKeepShapeWall"), ZoneTagCard("defGeneralZone")])

        keepMidLOZ = LayerOfZonesCard("defAddLayerOfZones", 1)
        DECK_MultiplyBySingle(keepMidLOZ, ZoneHeightChangeCard("def20Height"))
        DECK_MultiplyByMultipleRules(keepMidLOZ, [ZoneTagCard("defMidKeep"), ZoneTagCard("defInnerKeepWallTag"), ZoneTagCard("defKeepShapeWall"), ZoneTagCard("defGeneralZone")])
    } else if (IsLarge(baseSize)) {
        //layer of zones if large
        keepLOZ = LayerOfZonesCard("defAddLayerOfZones", 1)
        DECK_MultiplyBySingle(keepLOZ, ZoneHeightChangeCard("def22Height"))
        DECK_MultiplyByMultipleRules(keepLOZ, [ZoneTagCard("defInnerKeep"), ZoneTagCard("defInnerKeepWallTag"), ZoneTagCard("defKeepShapeWall"), ZoneTagCard("defGeneralZone")])

        keepMidLOZ = LayerOfZonesCard("defAddLayerOfZones", 1)
        DECK_MultiplyBySingle(keepMidLOZ, ZoneHeightChangeCard("def22Height"))
        DECK_MultiplyByMultipleRules(keepMidLOZ, [ZoneTagCard("defMidKeep"), ZoneTagCard("defInnerKeepWallTag"), ZoneTagCard("defKeepShapeWall"), ZoneTagCard("defGeneralZone")])
    }

    //set up shape for each size w/ height modifiers
    const keepShapeZoneCount = 12
    const keepShapeZones = ZonesCard("add1Zone", keepShapeZoneCount)
    DECK_MultiplyByMultipleRules(keepShapeZones, [ZoneTagCard("defKeepShapeWall"), ZoneTagCard("defKeepShapePath")])

    if (IsSmall(baseSize)) {
        DECK_MultiplyBySingle(keepShapeZones, ZoneHeightChangeCard("def10Height"))
    } else if (IsMedium(baseSize)) {
        DECK_MultiplyBySingle(keepShapeZones, ZoneHeightChangeCard("def15Height"))
    } else if (IsLarge(baseSize)) {
        DECK_MultiplyBySingle(keepShapeZones, ZoneHeightChangeCard("def17Height"))
    }

    //placement of keep shape zones
    DECK_MultiplyBySingle(keepShapeZones, ZoneTagCard("defGeneralZone"))

    //setup between walls zones
    const nonWalledZone = 1
    const walledZone = 32 - nonWalledZone
    const baseCornerZone = ZonesCard("addZone", nonWalledZone)
    const betweenWallsZones = ZonesCard("add1Zone", walledZone)

    DECK_MultiplyBySingle(betweenWallsZones, ZoneTagCard("defBetweenWallsTag"))
    DECK_MultiplyBySingle(betweenWallsZones, ZoneTagCard("defOuterWalls"))
    DECK_MultiplyBySingle(betweenWallsZones, ZoneTagCard("defGeneralZone"))
    DECK_MultiplyByMultipleRules(baseCornerZone, [ZoneTagCard("defGeneralZone"), ZoneHeightChangeCard("def10Height")])
    DECK_MultiplyByMultipleRules(baseCornerZone, [ZoneTagCard("defOuterWalls"), ZoneTagCard("defCornerZoneWall")])
    if (IsMedium(baseSize)) {
        DECK_MultiplyBySingle(betweenWallsZones, ZoneHeightChangeCard("def10Height"))
    } else if (IsLarge(baseSize)) {
        DECK_MultiplyBySingle(betweenWallsZones, ZoneHeightChangeCard("def12Height"))
    }

    let defOutsideWalls1 = DECK_Empty()
    let defOutsideWalls2 = DECK_Empty()
    let defOutsideWalls3 = DECK_Empty()
    let defOutsideWalls0 = DECK_Empty()

    if (IsSmall(baseSize)) {
        defOutsideWalls0 = LayerOfZonesCard("addLayerOfZones", 1)
        DECK_MultiplyByMultipleRules(defOutsideWalls0, [ZoneTagCard("defOutsideWallsTag"), ZoneTagCard("defOutskirtsPathZone"), ZoneTagCard("defGeneralZone"), ZoneHeightChangeCard("def5Height")])
        defOutsideWalls1 = LayerOfZonesCard("addLayerOfZones", 1)
        DECK_MultiplyByMultipleRules(defOutsideWalls1, [ZoneTagCard("defOutsideWallsTag"), ZoneTagCard("defGeneralZone"), ZoneTagCard("defBurningEdgePathZone")])
        defOutsideWalls2 = LayerOfZonesCard("addLayerOfZones", 1)
        DECK_MultiplyByMultipleRules(defOutsideWalls2, [ZoneTagCard("defOutsideWallsTag")])
    }
    //Math for bridges to work
    //If Height clamping +3
    //If Bridge Min Height +4 (height_change_needs_bridge)
    //DefHeight tag needs to equal above
    if (IsMedium(baseSize)) {
        defOutsideWalls0 = LayerOfZonesCard("addLayerOfZones", 1)
        DECK_MultiplyByMultipleRules(defOutsideWalls0, [ZoneTagCard("defOutsideWallsTag"), ZoneTagCard("defOutskirtsPathZone"), ZoneTagCard("defGeneralZone"), ZoneHeightChangeCard("def5Height")])
        defOutsideWalls1 = LayerOfZonesCard("addLayerOfZones", 1)
        DECK_MultiplyByMultipleRules(defOutsideWalls1, [ZoneTagCard("defOutsideWallsTag"), ZoneTagCard("defGeneralZone"), ZoneTagCard("defBurningEdgePathZone")])
        defOutsideWalls1 = LayerOfZonesCard("addLayerOfZones", 1)
        DECK_MultiplyByMultipleRules(defOutsideWalls1, [ZoneTagCard("defOutsideWallsTag"), ZoneTagCard("defGeneralZone"), ZoneTagCard("defBurningEdgePathZone"), ZoneTagCard("defOutskirtsNetherSpreaderTag")])
        defOutsideWalls2 = LayerOfZonesCard("addLayerOfZones", 1)
        DECK_MultiplyByMultipleRules(defOutsideWalls2, [ZoneTagCard("defOutsideWallsTag")])
    }

    if (IsLarge(baseSize)) {
        defOutsideWalls1 = LayerOfZonesCard("addLayerOfZones", 2)
        DECK_MultiplyByMultipleRules(defOutsideWalls1, [ZoneTagCard("defOutsideWallsTag"), ZoneTagCard("defGeneralZone")])
        defOutsideWalls2 = LayerOfZonesCard("addLayerOfZones", 1)
        defOutsideWalls3 = LayerOfZonesCard("addLayerOfZones", 3)
        DECK_MultiplyByMultipleRules(defOutsideWalls3, [ZoneTagCard("defOutskirtsPathZone")])
    }

    //-------------------------------paths preferences----------------------------------//
    const northPathStartRules = [ZoneFilterCard("defInnerKeepWall"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
    const northPathEndRules = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), PlacementPreferenceCard("withScoreThresholdPoint2")]

    const southPathStartRules = [ZoneFilterCard("defInnerKeepWall"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
    //Threshold card instead of close to center
    const southPathEndRules = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), PlacementPreferenceCard("withScoreThresholdPoint2")]

    const eastPathStartRules = [ZoneFilterCard("defInnerKeepWall"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
    const eastPathEndRules = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), PlacementPreferenceCard("withScoreThresholdPoint2")]

    const westPathStartRules = [ZoneFilterCard("defInnerKeepWall"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
    const westPathEndRules = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), PlacementPreferenceCard("withScoreThresholdPoint2")]

    const northPathStartRulesMedVar = [ZoneFilterCard("defInnerKeepWall"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
    const northPathEndRulesMedVar = [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), PlacementPreferenceCard("withScoreThresholdPoint2")]

    const westPathStartRulesMedVar = [ZoneFilterCard("defInnerKeepWall"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
    const westPathEndRulesMedVar = [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), PlacementPreferenceCard("withScoreThresholdPoint2")]

    const southPathStartRulesMedVarBetween = [ZoneFilterCard("defOuterWalls"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), PlacementPreferenceCard("placeFarFromVillageStart")]
    const southPathEndRulesMedVarBetween = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush")]

    const eastPathStartRulesMedVarBetween = [ZoneFilterCard("defOuterWalls"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), PlacementPreferenceCard("placeFarFromVillageStart")]
    const eastPathEndRulesMedVarBetween = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")]

    const eastPathStartRulesKeepShape = [ZoneFilterCard("defInnerKeepWall"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
    const eastPathEndRulesKeepShape = [ZoneFilterCard("defKeepShapePath"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), PlacementPreferenceCard("withScoreThresholdPoint2")]

    const westPathStartRulesKeepShape = [ZoneFilterCard("defInnerKeepWall"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
    const westPathEndRulesKeepShape = [ZoneFilterCard("defKeepShapePath"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), PlacementPreferenceCard("withScoreThresholdPoint2")]

    const southPathStartRulesKeepShape = [ZoneFilterCard("defInnerKeepWall"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
    const southPathEndRulesKeepShape = [ZoneFilterCard("defKeepShapePath"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), PlacementPreferenceCard("withScoreThresholdPoint2")]

    let northBurningEdgePathStartRules = DECK_Empty()
    let northBurningEdgePathEndRules = DECK_Empty()
    let southBurningEdgePathStartRules = DECK_Empty()
    let southBurningEdgePathEndRules = DECK_Empty()
    let eastBurningEdgePathStartRules = DECK_Empty()
    let eastBurningEdgePathEndRules = DECK_Empty()
    let westBurningEdgePathStartRules = DECK_Empty()
    let westBurningEdgePathEndRules = DECK_Empty()

    if (IsMedium(baseSize)) {
        northBurningEdgePathStartRules = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")]
        northBurningEdgePathEndRules = [PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), ZoneFilterCard("defBurningEdgePathZone"), PlacementPreferenceCard("withScoreThresholdPoint2")]
        southBurningEdgePathStartRules = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush")]
        southBurningEdgePathEndRules = [PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), ZoneFilterCard("defBurningEdgePathZone"), PlacementPreferenceCard("withScoreThresholdPoint2")]
        eastBurningEdgePathStartRules = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")]
        eastBurningEdgePathEndRules = [PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), ZoneFilterCard("defBurningEdgePathZone"), PlacementPreferenceCard("withScoreThresholdPoint2")]
        westBurningEdgePathStartRules = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")]
        westBurningEdgePathEndRules = [PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), ZoneFilterCard("defBurningEdgePathZone"), PlacementPreferenceCard("withScoreThresholdPoint2")]
    } else if (IsSmall(baseSize)) {
        northBurningEdgePathStartRules = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")]
        northBurningEdgePathEndRules = [PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), ZoneFilterCard("defBurningEdgePathZone"), PlacementPreferenceCard("withScoreThresholdPoint2")]
        southBurningEdgePathStartRules = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush")]
        southBurningEdgePathEndRules = [PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), ZoneFilterCard("defBurningEdgePathZone"), PlacementPreferenceCard("withScoreThresholdPoint2")]
        eastBurningEdgePathStartRules = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")]
        eastBurningEdgePathEndRules = [PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), ZoneFilterCard("defBurningEdgePathZone"), PlacementPreferenceCard("withScoreThresholdPoint2")]
        westBurningEdgePathStartRules = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")]
        westBurningEdgePathEndRules = [PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), ZoneFilterCard("defBurningEdgePathZone"), PlacementPreferenceCard("withScoreThresholdPoint2")]
    }
    //wall preferences
    let innerWalls = DECK_Empty()
    let outerWalls = DECK_Empty()
    let cornerWall = DECK_Empty()

    const keepShapeWalls = WallsCard("defInnerWalls")
    //add third wall card here for keep shape zone tagged zones
    DECK_MultiplyBySingle(keepShapeWalls, ZoneFilterCard("defKeepShapeWall"))

    if (!IsSmall(baseSize)) {
        //play inner walls
        innerWalls = WallsCard("defInnerWalls")
        DECK_MultiplyBySingle(innerWalls, ZoneFilterCard("defInnerKeepWall"))

        outerWalls = WallsCard("defTowerWallLight")
        DECK_MultiplyBySingle(outerWalls, ZoneFilterCard("defOuterWalls"))

        cornerWall = WallsCard("defInnerWalls")
        DECK_MultiplyBySingle(cornerWall, ZoneFilterCard("defCornerZoneWall"))
    } else if (IsSmall(baseSize)) {
        outerWalls = WallsCard("defTowerWallLight")
        DECK_MultiplyBySingle(outerWalls, ZoneFilterCard("defInnerKeepWall"))
    }

    //--------------------------structure decks preferences-----------------------------//
    //keepNearPortal deck
    DECK_MultiplyBySingle(miniDecks["keepNearPortal"], PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START))
    DECK_MultiplyBySingle(miniDecks["keepNearPortal"], PlacementPreferenceCard("placeRandomly"))
    DECK_MultiplyBySingle(miniDecks["keepNearPortal"], ForceBuildingPlacementCard("forceBuildingPlacement"))

    DECK_MultiplyBySingle(miniDecks["keepNearPortal"], ZoneFilterCard("defInnerKeep"))
    DECK_MultiplyByMultipleRules(miniDecks["keepNearPortal"], [TagCard("barracksdefendHordeDefend0"), TagCard("barracksdefendHordeSiege0")])

    if (IsSmall(baseSize)) {
        DECK_MultiplyBySingle(miniDecks["keepNearPortal"], PlacementPreferenceCard("defFacingPortalSmall"))
    } else if (IsMedium(baseSize)) {
        DECK_MultiplyBySingle(miniDecks["keepNearPortal"], PlacementPreferenceCard("defFacingPortalMedium"))
    } else if (IsLarge(baseSize)) {
        DECK_MultiplyBySingle(miniDecks["keepNearPortal"], PlacementPreferenceCard("defFacingPortalLarge"))
    }

    _DeckShuffleDefend(miniDecks["keepNearPortal"])

    //setup the lava coils for nearPortal
    let nearPortalCoilDeck = DECK_Empty()

    if (IsStructureDestructionBase(villageId)) {
        let lavaCoilCount
        if (IsSmall(baseSize)) {
            lavaCoilCount = 0
        } else if (IsMedium(baseSize)) {
            lavaCoilCount = 0
        } else if (IsLarge(baseSize)) {
            lavaCoilCount = 0
        }

        nearPortalCoilDeck = BuildableCard("basePiglinCrystal", lavaCoilCount)
        DECK_MultiplyByMultipleRules(nearPortalCoilDeck, [ZoneFilterCard("defInnerKeep")])
    }

    //innerKeep deck
    DECK_MultiplyBySingle(miniDecks["innerKeep"], PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START))
    DECK_MultiplyBySingle(miniDecks["innerKeep"], PlacementPreferenceCard("placeRandomly"))
    DECK_MultiplyBySingle(miniDecks["innerKeep"], TagCard("defendInnerKeepBuilding"))
    DECK_MultiplyByMultipleRules(miniDecks["innerKeep"], [TagCard("barracksdefendHordeDefend0"), TagCard("barracksdefendHordeUnique0")])

    const innerKeepFilter = ZoneFilterCard("defMidKeep")
    DECK_MultiplyBySingle(miniDecks["innerKeep"], innerKeepFilter)

    _DeckShuffleDefend(miniDecks["innerKeep"])

    //setup the lava coils for innerKeep
    let innerKeepCoilDeck = DECK_Empty()

    if (IsStructureDestructionBase(villageId)) {
        let lavaCoilCount
        if (IsSmall(baseSize)) {
            lavaCoilCount = 0
        } else if (IsMedium(baseSize)) {
            lavaCoilCount = 0
        } else if (IsLarge(baseSize)) {
            lavaCoilCount = 0
        }

        innerKeepCoilDeck = BuildableCard("basePiglinCrystal", lavaCoilCount)
        DECK_MultiplyByMultipleRules(innerKeepCoilDeck, [ZoneFilterCard("defMidKeep"), PlacementPreferenceCard("placeFarFromPiglinCrystal"), ZoneFilterCard("placeInsideVillageAlways")])
    }

    //setup the lava coils for insideKeepWall
    let insideKeepWallCoilDeck = DECK_Empty()

    if (IsStructureDestructionBase(villageId)) {
        let lavaCoilCount
        if (IsSmall(baseSize)) {
            lavaCoilCount = 1
        } else if (IsMedium(baseSize)) {
            lavaCoilCount = 1
        } else if (IsLarge(baseSize)) {
            lavaCoilCount = 1
        }

        insideKeepWallCoilDeck = BuildableCard("basePiglinCrystal", lavaCoilCount)
        DECK_MultiplyByMultipleRules(insideKeepWallCoilDeck, [ZoneFilterCard("defKeepShapeWall"), PlacementPreferenceCard("placeFarFromPiglinCrystal"), ZoneFilterCard("placeInsideVillageAlways"), ForceBuildingPlacementCard("forceBuildingPlacement")])
    }

    //insideKeepWall deck
    if (IsSmall(baseSize)) {
        DECK_MultiplyBySingle(miniDecks["insideKeepWall"], ZoneFilterCard("defKeepShapeWall"))
        DECK_MultiplyBySingle(miniDecks["insideKeepWall"], PlacementPreferenceCard("placeCloseToWalls"))
        DECK_MultiplyByMultipleRules(miniDecks["insideKeepWall"], [TagCard("barracksdefendHordeDefend0"), TagCard("barracksdefendHordeSiege0")])
        DECK_MultiplyBySingle(miniDecks["insideKeepWall"], PlacementPreferenceCard("placeRandomly"))
        DECK_MultiplyBySingle(miniDecks["insideKeepWall"], PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START))
    } else if (IsMedium(baseSize)) {
        DECK_MultiplyBySingle(miniDecks["insideKeepWall"], ZoneFilterCard("defKeepShapeWall"))
        DECK_MultiplyBySingle(miniDecks["insideKeepWall"], PlacementPreferenceCard("placeCloseToWalls"))
        DECK_MultiplyByMultipleRules(miniDecks["insideKeepWall"], [TagCard("barracksdefendHordeDefend0"), TagCard("barracksdefendHordeSiege0")])
        DECK_MultiplyBySingle(miniDecks["insideKeepWall"], PlacementPreferenceCard("placeRandomly"))
    } else if (IsLarge(baseSize)) {
        DECK_MultiplyBySingle(miniDecks["insideKeepWall"], ZoneFilterCard("defKeepShapeWall"))
        DECK_MultiplyBySingle(miniDecks["insideKeepWall"], PlacementPreferenceCard("placeCloseToWalls"))
        DECK_MultiplyBySingle(miniDecks["insideKeepWall"], PlacementPreferenceCard("placeRandomly"))
        DECK_MultiplyByMultipleRules(miniDecks["insideKeepWall"], [TagCard("barracksdefendHordeDefend0"), TagCard("barracksdefendHordeSiege0")])
        DECK_MultiplyBySingle(miniDecks["insideKeepWall"], PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START))
    }

    _DeckShuffleDefend(miniDecks["insideKeepWall"])

    //deck assignment for coils
    let outsideKeepWallCoilDeck = DECK_Empty()

    //outsideKeepWall deck
    if (IsSmall(baseSize)) {
        DECK_MultiplyBySingle(miniDecks["outsideKeepWall"], ZoneFilterCard("defOutsideWalls"))
        DECK_MultiplyBySingle(miniDecks["outsideKeepWall"], PlacementPreferenceCard("placeCloseToWalls"))
        DECK_MultiplyBySingle(miniDecks["outsideKeepWall"], PlacementPreferenceCard("closeToAnyGate"))
        DECK_MultiplyByMultipleRules(miniDecks["outsideKeepWall"], [TagCard("barracksdefendHordeUnique0"), TagCard("barracksdefendHordeSiege0")])
        _DeckShuffleDefend(miniDecks["outsideKeepWall"])
    } else if (!IsSmall(baseSize)) {
        DECK_MultiplyBySingle(miniDecks["outsideKeepWall"], ZoneFilterCard("defBetweenWalls"))
        DECK_MultiplyBySingle(miniDecks["outsideKeepWall"], PlacementPreferenceCard("placeCloseToWalls"))
        DECK_MultiplyBySingle(miniDecks["outsideKeepWall"], PlacementPreferenceCard("closeToAnyGate"))
        DECK_MultiplyByMultipleRules(miniDecks["outsideKeepWall"], [TagCard("barracksdefendHordeUnique0"), TagCard("barracksdefendHordeSiege0")])
        DECK_MultiplyBySingle(miniDecks["outsideKeepWall"], PlacementPreferenceCard("placeRandomly"))
        _DeckShuffleDefend(miniDecks["outsideKeepWall"])

        //outside keep wall coil counts
        if (IsStructureDestructionBase(villageId)) {
            let lavaCoilCount
            if (IsMedium(baseSize)) {
                lavaCoilCount = 1
            } else if (IsLarge(baseSize)) {
                lavaCoilCount = 2
            }

            outsideKeepWallCoilDeck = BuildableCard("basePiglinCrystal", lavaCoilCount)
            DECK_MultiplyByMultipleRules(outsideKeepWallCoilDeck, [ZoneFilterCard("defBetweenWalls"), PlacementPreferenceCard("placeCloseToWalls"), PlacementPreferenceCard("placeFarFromPiglinCrystal"), ZoneFilterCard("placeInsideVillageAlways"), ForceBuildingPlacementCard("forceBuildingPlacement")])
        }
    }

    //insideOuterWall deck
    if (!IsSmall(baseSize)) {
        DECK_MultiplyBySingle(miniDecks["insideOuterWall"], PlacementPreferenceCard("placeCloseToWalls"))
        DECK_MultiplyBySingle(miniDecks["insideOuterWall"], ZoneFilterCard("defBetweenWalls"))
        DECK_MultiplyByMultipleRules(miniDecks["insideOuterWall"], [TagCard("barracksdefendHordeDefend0"), TagCard("barracksdefendHordeSiege0")])
        DECK_MultiplyBySingle(miniDecks["insideOuterWall"], PlacementPreferenceCard("placeRandomly"))
        _DeckShuffleDefend(miniDecks["insideOuterWall"])
    } else if (IsLarge(baseSize)) {
        DECK_MultiplyByMultipleRules(miniDecks["insideOuterWall"], [TagCard("barracksdefendHordeSiege0"), TagCard("barracksdefendHordeSiege1")])
    }

    //outsideOuterWall deck
    DECK_MultiplyByMultipleRules(miniDecks["outsideOuterWall"], [ZoneFilterCard("defOutsideWalls"), PlacementPreferenceCard("closeToAnyGate"), PlacementPreferenceCard("placeCloseToWalls"), PlacementPreferenceCard("placeFarFromNetherSpreader")])
    _DeckShuffleDefend(miniDecks["outsideOuterWall"])

    //outskirts deck
    DECK_MultiplyBySingle(miniDecks["outskirts"], PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START))
    DECK_MultiplyBySingle(miniDecks["outskirts"], PlacementPreferenceCard("withScoreThresholdPoint2"))
    DECK_MultiplyBySingle(miniDecks["outskirts"], ZoneFilterCard("defOutskirtsNetherSpreader"))
    DECK_MultiplyByMultipleRules(miniDecks["outskirts"], [TagCard("barracksdefendHordeDefend0"), TagCard("barracksdefendHordeSiege0")])
    DECK_MultiplyBySingle(miniDecks["outskirts"], PlacementPreferenceCard("closeToGate"))
    _DeckShuffleDefend(miniDecks["outskirts"])

    //rallypoint structures deck
    if (!IsSmall(baseSize)) {
        const northRallyPointStructure = BuildableCard("defendRallyPoint", 1)
        const southRallyPointStructure = BuildableCard("defendRallyPoint", 1)
        const eastRallyPointStructure = BuildableCard("defendRallyPoint", 1)
        const westRallyPointStructure = BuildableCard("defendRallyPoint", 1)
        DECK_MultiplyByMultipleRules(northRallyPointStructure, [ZoneFilterCard("defOuterWalls"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), PlacementPreferenceCard("closeToGate"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways"), ForceBuildingPlacementCard("forceBuildingPlacement")])
        DECK_MultiplyByMultipleRules(southRallyPointStructure, [ZoneFilterCard("defOuterWalls"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), PlacementPreferenceCard("closeToGate"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways"), ForceBuildingPlacementCard("forceBuildingPlacement")])
        DECK_MultiplyByMultipleRules(eastRallyPointStructure, [ZoneFilterCard("defOuterWalls"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), PlacementPreferenceCard("closeToGate"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways"), ForceBuildingPlacementCard("forceBuildingPlacement")])
        DECK_MultiplyByMultipleRules(westRallyPointStructure, [ZoneFilterCard("defOuterWalls"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), PlacementPreferenceCard("closeToGate"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways"), ForceBuildingPlacementCard("forceBuildingPlacement")])
    }
    //-------------------ACTUAL ORDER OF BASE PLACMENT IS HERE--------------------------//
    //play zones
    DECK_PutOnBottomOf(firstZone, baseDeck)
    DECK_PutOnBottomOf(keepLOZ, baseDeck)
    DECK_PutOnBottomOf(keepMidLOZ, baseDeck)
    DECK_PutOnBottomOf(keepShapeZones, baseDeck)
    if (!IsSmall(baseSize)) {
        DECK_PutOnBottomOf(baseCornerZone, baseDeck)
        DECK_PutOnBottomOf(betweenWallsZones, baseDeck)
    }
    DECK_PutOnBottomOf(defOutsideWalls0, baseDeck)
    DECK_PutOnBottomOf(defOutsideWalls1, baseDeck)
    DECK_PutOnBottomOf(defOutsideWalls2, baseDeck)
    DECK_PutOnBottomOf(defOutsideWalls3, baseDeck)

    //play weathering
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    //play paths
    QUERY_GetGlobalVariable("defendPathOptions") === 0
    if (IsSmall(baseSize)) {
        switch (QUERY_GetGlobalVariable("defendPathOptions")) {
            case 0:
                CreatePathRequestOnBottomOf("defend_district_path", northPathStartRules, northPathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", southPathStartRules, southPathEndRules, baseDeck)

                CreatePathRequestOnBottomOf("defend_district_path", eastPathStartRulesKeepShape, eastPathEndRulesKeepShape, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", westPathStartRulesKeepShape, westPathEndRulesKeepShape, baseDeck)

                CreatePathRequestOnBottomOf("defend_district_path", westBurningEdgePathStartRules, westBurningEdgePathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", eastBurningEdgePathStartRules, eastBurningEdgePathEndRules, baseDeck)
                IncrementGlobal("defendPathOptions")
                break

            case 1:
                CreatePathRequestOnBottomOf("defend_district_path", northPathStartRules, northPathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", westPathStartRules, westPathEndRules, baseDeck)

                CreatePathRequestOnBottomOf("defend_district_path", eastPathStartRulesKeepShape, eastPathEndRulesKeepShape, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", southPathStartRulesKeepShape, southPathEndRulesKeepShape, baseDeck)

                CreatePathRequestOnBottomOf("defend_district_path", eastBurningEdgePathStartRules, eastBurningEdgePathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", southBurningEdgePathStartRules, southBurningEdgePathEndRules, baseDeck)
                IncrementGlobal("defendPathOptions")
                break
            case 2:
                CreatePathRequestOnBottomOf("defend_district_path", northPathStartRules, northPathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", southPathStartRules, southPathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", eastPathStartRules, eastPathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", westPathStartRules, westPathEndRules, baseDeck)

                CreatePathRequestOnBottomOf("defend_district_path", northBurningEdgePathStartRules, northBurningEdgePathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", southBurningEdgePathStartRules, southBurningEdgePathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", eastBurningEdgePathStartRules, eastBurningEdgePathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", westBurningEdgePathStartRules, westBurningEdgePathEndRules, baseDeck)
                OUTPUT_SetGlobalVariable("defendPathOptions", 0)
                break
        }
    } else if (IsMedium(baseSize) || IsLarge(baseSize)) {
        switch (QUERY_GetGlobalVariable("defendPathOptions")) {
            case 0:
                CreatePathRequestOnBottomOf("defend_district_path", northPathStartRulesMedVar, northPathEndRulesMedVar, baseDeck)

                CreatePathRequestOnBottomOf("defend_district_path", eastPathStartRulesKeepShape, eastPathEndRulesKeepShape, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", westPathStartRulesKeepShape, westPathEndRulesKeepShape, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", southPathStartRulesKeepShape, southPathEndRulesKeepShape, baseDeck)

                CreatePathRequestOnBottomOf("defend_district_path", southPathStartRulesMedVarBetween, southPathEndRulesMedVarBetween, baseDeck)

                CreatePathRequestOnBottomOf("defend_district_path", southBurningEdgePathStartRules, southBurningEdgePathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", westBurningEdgePathStartRules, westBurningEdgePathEndRules, baseDeck)
                IncrementGlobal("defendPathOptions")
                break
            case 1:
                CreatePathRequestOnBottomOf("defend_district_path", northPathStartRulesMedVar, northPathEndRulesMedVar, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", westPathStartRulesMedVar, westPathEndRulesMedVar, baseDeck)

                CreatePathRequestOnBottomOf("defend_district_path", eastPathStartRulesKeepShape, eastPathEndRulesKeepShape, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", southPathStartRulesKeepShape, southPathEndRulesKeepShape, baseDeck)

                CreatePathRequestOnBottomOf("defend_district_path", southPathStartRulesMedVarBetween, southPathEndRulesMedVarBetween, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", eastPathStartRulesMedVarBetween, eastPathEndRulesMedVarBetween, baseDeck)

                CreatePathRequestOnBottomOf("defend_district_path", southBurningEdgePathStartRules, southBurningEdgePathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", eastBurningEdgePathStartRules, eastBurningEdgePathEndRules, baseDeck)
                IncrementGlobal("defendPathOptions")
                break
            case 2:
                CreatePathRequestOnBottomOf("defend_district_path", northPathStartRules, northPathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", southPathStartRules, southPathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", eastPathStartRules, eastPathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", westPathStartRules, westPathEndRules, baseDeck)

                CreatePathRequestOnBottomOf("defend_district_path", northBurningEdgePathStartRules, northBurningEdgePathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", southBurningEdgePathStartRules, southBurningEdgePathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", eastBurningEdgePathStartRules, eastBurningEdgePathEndRules, baseDeck)
                CreatePathRequestOnBottomOf("defend_district_path", westBurningEdgePathStartRules, westBurningEdgePathEndRules, baseDeck)
                OUTPUT_SetGlobalVariable("defendPathOptions", 0)
                break
        }
    }

    //play walls
    DECK_PutOnBottomOf(keepShapeWalls, baseDeck)
    DECK_PutOnBottomOf(innerWalls, baseDeck)
    DECK_PutOnBottomOf(outerWalls, baseDeck)
    DECK_PutOnBottomOf(cornerWall, baseDeck)

    //play structures
    DECK_PutOnBottomOf(portal, baseDeck)

    //place the lava coils AFTER portal and BEFORE any other structures
    if (IsStructureDestructionBase(villageId)) {
        DECK_PutOnBottomOf(nearPortalCoilDeck, baseDeck)
        DECK_PutOnBottomOf(innerKeepCoilDeck, baseDeck)
        DECK_PutOnBottomOf(insideKeepWallCoilDeck, baseDeck)
        DECK_PutOnBottomOf(outsideKeepWallCoilDeck, baseDeck)
    }

    //rallypoint structures deck
    if (IsSmall(baseSize)) {
        const northRallyPointStructure = BuildableCard("defendRallyPoint", 1)
        const southRallyPointStructure = BuildableCard("defendRallyPoint", 1)
        const eastRallyPointStructure = BuildableCard("defendRallyPoint", 1)
        const westRallyPointStructure = BuildableCard("defendRallyPoint", 1)
        DECK_MultiplyByMultipleRules(northRallyPointStructure, [ZoneFilterCard("defOutsideWalls"), TagCard("defendHordeSiegeAiRally"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), PlacementPreferenceCard("closeToAnyGate"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
        DECK_MultiplyByMultipleRules(southRallyPointStructure, [ZoneFilterCard("defOutsideWalls"), TagCard("defendHordeSiegeAiRally"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), PlacementPreferenceCard("closeToAnyGate"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
        DECK_MultiplyByMultipleRules(eastRallyPointStructure, [ZoneFilterCard("defInnerKeepWall"), TagCard("defendHordeDefendAiRally"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), PlacementPreferenceCard("closeToAnyGate"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways")])
        DECK_MultiplyByMultipleRules(westRallyPointStructure, [ZoneFilterCard("defInnerKeepWall"), TagCard("defendHordeUniqueAiRally"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), PlacementPreferenceCard("closeToAnyGate"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways")])
        DECK_PutOnBottomOf(northRallyPointStructure, baseDeck)
        DECK_PutOnBottomOf(southRallyPointStructure, baseDeck)
        DECK_PutOnBottomOf(eastRallyPointStructure, baseDeck)
        DECK_PutOnBottomOf(westRallyPointStructure, baseDeck)
    }
    if (!IsSmall(baseSize)) {
        const northRallyPointStructure = BuildableCard("defendRallyPoint", 1)
        const southRallyPointStructure = BuildableCard("defendRallyPoint", 1)
        const eastRallyPointStructure = BuildableCard("defendRallyPoint", 1)
        const westRallyPointStructure = BuildableCard("defendRallyPoint", 1)
        DECK_MultiplyByMultipleRules(northRallyPointStructure, [ZoneFilterCard("defOuterWalls"), TagCard("defendHordeSiegeAiRally"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), PlacementPreferenceCard("closeToGate"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways")])
        DECK_MultiplyByMultipleRules(southRallyPointStructure, [ZoneFilterCard("defOuterWalls"), TagCard("defendHordeDefendAiRally"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), PlacementPreferenceCard("closeToGate"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways")])
        DECK_MultiplyByMultipleRules(eastRallyPointStructure, [ZoneFilterCard("defInnerKeepWall"), TagCard("defendHordeSiegeAiRally"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), PlacementPreferenceCard("closeToGate"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways")])
        DECK_MultiplyByMultipleRules(westRallyPointStructure, [ZoneFilterCard("defInnerKeepWall"), TagCard("defendHordeUniqueAiRally"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), PlacementPreferenceCard("closeToGate"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways")])
        DECK_PutOnBottomOf(northRallyPointStructure, baseDeck)
        DECK_PutOnBottomOf(southRallyPointStructure, baseDeck)
        DECK_PutOnBottomOf(eastRallyPointStructure, baseDeck)
        DECK_PutOnBottomOf(westRallyPointStructure, baseDeck)
    }

    DECK_PutOnBottomOf(miniDecks["keepNearPortal"], baseDeck)
    DECK_PutOnBottomOf(miniDecks["innerKeep"], baseDeck)
    DECK_PutOnBottomOf(miniDecks["insideKeepWall"], baseDeck)
    DECK_PutOnBottomOf(miniDecks["outsideKeepWall"], baseDeck)
    DECK_PutOnBottomOf(miniDecks["insideOuterWall"], baseDeck)
    DECK_PutOnBottomOf(miniDecks["outsideOuterWall"], baseDeck)
    DECK_PutOnBottomOf(miniDecks["outskirts"], baseDeck)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
})

SNIPPET_NonPopCappedEntityDestroyed("defendMassRebuildCounter", (destroyedEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(destroyedEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    if (IsSmall(baseSize)) {
        return
    } else if (QUERY_GetEntitiesCount(GetVillagePortal(villageId)) < 1) {
        return
    } else if (IsBaseEscalated(destroyedEntity, defendVal.escalation.innerWallDestroyed)) {
        return
    }

    const newValue = GetVillageVariable(villageId, defendVal.global.destroyedBuildingsCount) + 1
    SetVillageVariable(villageId, defendVal.global.destroyedBuildingsCount, newValue)
})

SNIPPET_PresenceEntered("spe_defend_gameplay", (triggerEntity, _count, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)

    // Check for whether the village needs to reset due to previous disengagement by the player.
    // At this point, all the popcapped entities in the base have already been culled.
    // The village will never be flagged for a reset while a player is in this spatial partition, so we only need to check when we enter.
    if (ShouldBaseReset(villageId)) {
        ResetEscalationAndBarracksForVillageVariation(villageId, defendVal.barracks, defendVal.escalation)
        ResetDiscreteEncounters(villageId)
        SetVillageVariable(villageId, defBattleRepairsVal.responseCountVariable, 0)

        MarkBaseAsReset(villageId)
    }
})

///////////ESCALATION PHASES///////////////
//escalation "player close to base" - entering the trigger volume. escalate to phase 1
SNIPPET_SpatialPartitionEntered("spe_defend_general", (triggerEntity, intruderEntity, _payload) => {
    if (IsBaseEscalated(triggerEntity, defendVal.escalation.playerCloseToBase)) {
        return
    }

    MarkBaseAsEscalated(triggerEntity, defendVal.escalation.playerCloseToBase)
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const portalEntity = GetVillagePortal(villageId)

    if (IsStructureDestructionBase(villageId) && QUERY_GetGlobalVariable(piglinGeneralVal.globals.firstCoilCinePlayed) !== 0) {
        if (DoOnce(defendVal.global.hasVisitedCoilBase + villageId)) {
            SetPortalInvulnerable(villageId, true)
        }
    }

    if (GetVillageVariable(villageId, "composition_listeners") === 0) {
        SetVillageVariable(villageId, "composition_listeners", 1)
        CreateCompositionRallyPoints(villageId, GetDefendRallyPoints(villageId))
    }

    if (IsBossVillage(villageId)) {
        if (DoOnce(defendVal.global.bossIntroPresented)) {
            // Initializaing this here because the cinematic can get bugged out on Switch (bug 913983)
            LISTENFOR_VillageDestroyed({
                snippet: "vd_magma_boss_base_destroyed",
                ownerVillageId: villageId,
                villageId: villageId
            })

            TriggerCinematicAndListenForFinish(defendVal.cinematic.bossIntro, [portalEntity, intruderEntity], villageId)
        }
    } else if (IsStructureDestructionBase(villageId)) {
        if (DoOnce(piglinGeneralVal.globals.firstCoilCinePlayed)) {
            DoOnce(defendVal.global.hasVisitedCoilBase + villageId) // needed to make sure the lavacoils at the first base don't become re-invulnerable
            LISTENFOR_CinematicEvent({
                snippet: "ce_defend_portal_shield_on",
                ownerVillageId: villageId,
                eventName: "portal_shield_on"
            })
            TriggerCinematicAndListenForFinish(defendVal.cinematic.shieldIntro, [intruderEntity], villageId)
        }
    } else {
        if (DoOnce(defendVal.global.hasVisited)) {
            TriggerCinematicAndListenForFinish(defendVal.cinematic.firstTimeNonShieldBaseIntro, [portalEntity, intruderEntity], villageId)
        }
    }

    //Play audio if base is invasion action source
    CheckAndPlayInvasionActionOriginPointVO(villageId)

    OUTPUT_SetObjectiveHealthBarVisible(portalEntity, true)

    //SPAWN UNITS FOR VARIATION IF APPLICABLE
    const phase1PGVariation = defendVal.villageComposition[baseSize].phase1PG

    SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, defendVal.barracks, 1)

    //SPAWN UNITS FOR VARIATION IF APPLICABLE
    if (IsLarge(baseSize)) {
        const newUnits = SpawnVillageVariationUnits(villageId, phase1PGVariation.spawnedUnits, GetVillagePortalSpawnLocation(villageId))
        if (HasEntities(newUnits)) {
            AssignEntitiesToAI(villageId, newUnits, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
        }
    }
})

SNIPPET_CinematicEvent("ce_defend_portal_shield_on", (payload) => {
    SetPortalInvulnerable(payload.ownerVillageId, true)
    Once()
})

const _PlayVOBasedOnBaseSize = (villageId, line, pointOfReference) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    let distance = 0
    switch (baseSize) {
        case BASE_SIZE_SMALL:
            distance = defendVal.consts.smallSizeVODistance
            break
        case BASE_SIZE_MEDIUM:
            distance = defendVal.consts.mediumSizeVODistance
            break
        case BASE_SIZE_LARGE:
            distance = defendVal.consts.largeSizeVODistance
            break
        case BASE_SIZE_BOSS:
            distance = defendVal.consts.bossSizeVODistance
            break
    }

    if (HasEntities(pointOfReference)) {
        PlayPresentationActionToClosePlayers(line, pointOfReference, distance)
    }
}

// escalation "wall destroyed"  set to phase 2
BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_phase_trigger_wall_destruction", (villageId, destroyedEntity) => {
    if (IsBaseEscalated(destroyedEntity, defendVal.escalation.outerWallDestroyed)) {
        return
    }

    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    const portal = GetVillagePortal(villageId)

    if (baseSize !== BASE_SIZE_SMALL && baseSize !== BASE_SIZE_MEDIUM && baseSize !== BASE_SIZE_LARGE) {
        return
    }

    // BARRACKS ============================================================================================================================================================
    SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, defendVal.barracks, 2)

    // AUDIO ================================================================================================================================================================
    // Escalate combat music to phase 1
    if (baseSize !== BASE_SIZE_BOSS) {
        SetAudioPhaseForBase(villageId, defendVal.audioPerPhaseArray[1])
    } else {
        SetAudioPhaseForBase(villageId, defendVal.audioPerBossPhaseArray[1])
    }
    PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_DEFEND, "keepGoing"), portal)

    LISTENFOR_LocalTimer({
        snippet: "lt_wall_breached_esclation_vo",
        ownerVillageId: villageId,
        waitTime: defendVal.consts.timeUntilWallDestroyed,
        payloadInt: villageId
    })

    // SPAWN ============================================================================================================================================================
    //spawn units at portal
    if (IsSmallOrGreater(baseSize)) {
        const medicGroup1 = SpawnEntitiesAt(spawnPosition, "badger:piglin_medic", 5, TEAM_ORANGE, villageId)
        const filterMedic1 = FILTER_RandomPercentage(medicGroup1, 100)

        AddEntitiesToNearestControlGroup(villageId, filterMedic1, ["primaryRallyPoint"])
    }
    let newUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        newUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].phase2.spawnedUnits, spawnPosition)
    }

    if (HasEntities(newUnits)) {
        AssignEntitiesToAI(villageId, newUnits, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
    }

    MarkBaseAsEscalated(destroyedEntity, defendVal.escalation.outerWallDestroyed)
})

SNIPPET_LocalTimer("lt_wall_breached_esclation_vo", (payload) => {
    const villageId = payload.int
    const villageEntity = GetVillageEntityFromID(villageId)
    if (HasEntities(villageEntity)) {
        const line = ChooseFromArray(defendVal.VO.wallDestroyed)
        _PlayVOBasedOnBaseSize(villageId, line, villageEntity)
    }
})

//phase 3 triggered -- inner walls destroyed (medium and large -- small doesn't have inner walls so it never goes to ph3)
BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_phase_trigger_wall_destruction_inner", (villageId, destroyedEntity) => {
    if (IsBaseEscalated(destroyedEntity, defendVal.escalation.innerWallDestroyed)) {
        return
    }

    MarkBaseAsEscalated(destroyedEntity, defendVal.escalation.innerWallDestroyed)

    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const portal = GetVillagePortal(villageId)

    if (baseSize !== BASE_SIZE_SMALL && baseSize !== BASE_SIZE_MEDIUM && baseSize !== BASE_SIZE_LARGE) {
        return
    }

    if (!IsSmall(baseSize)) {
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DefendFaction_Variations, 3)
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DefendFaction_Variations, 3)
    }

    // AUDIO ================================================================================================================================================================
    //Music: Escalate combat music to phase 2
    if (baseSize !== BASE_SIZE_BOSS) {
        SetAudioPhaseForBase(villageId, defendVal.audioPerPhaseArray[2])
    } else if (baseSize === BASE_SIZE_BOSS) {
        SetAudioPhaseForBase(villageId, defendVal.audioPerBossPhaseArray[2])
    }

    // SPAWNS =======================================================================================================================================================
    if (IsSmallOrGreater(baseSize)) {
        const medicGroup1 = SpawnAtPortal(villageId, "badger:piglin_medic", 5)
        AddEntitiesToNearestControlGroup(villageId, medicGroup1, ["primaryRallyPoint"])
    }

    const spawnLocation = GetVillagePortalSpawnLocation(villageId)
    let newUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        newUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].phase3.spawnedUnits, spawnLocation)
    }
    if (HasEntities(newUnits)) {
        AssignEntitiesToAI(villageId, newUnits, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
    }
    if (IsLarge(baseSize)) {
        const portalGuards = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].phase3PG.spawnedUnits, spawnLocation)
        if (HasEntities(portalGuards)) {
            AssignEntitiesToAI(villageId, portalGuards, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
        }
    }

    const phase3OutputDeck = DECK_Empty()
    const phase3MiniDeck = CreateBuildableGenMiniDecks(defendBaseMiniDeckNames, defendBasePhase3, baseSize, villageId, RANDOM_GROUP_DEFEND_HORDE)

    if (IsLarge(baseSize)) {
        //outsideKeepWall
        DECK_MultiplyBySingle(phase3MiniDeck["outsideKeepWall"], ZoneFilterCard("defBetweenWalls"))
        DECK_MultiplyBySingle(phase3MiniDeck["outsideKeepWall"], PlacementPreferenceCard("placeCloseToWalls"))
        DECK_MultiplyBySingle(phase3MiniDeck["outsideKeepWall"], PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START))

        //barracks tags go here
        DECK_MultiplyByMultipleRules(phase3MiniDeck["outsideKeepWall"], [TagCard("barracksdefendHordeDefend0"), TagCard("barracksdefendHordeUnique0")])
        DECK_MultiplyByMultipleRules(phase3MiniDeck["outsideKeepWall"], [TagCard("barracksdefendHordeDefend0"), TagCard("barracksdefendHordeUnique0")])

        DECK_PutOnBottomOf(phase3MiniDeck["outsideKeepWall"], phase3OutputDeck)
    }

    OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, phase3OutputDeck)
})

//phase 4 triggered // inner keep touched
SNIPPET_SpatialPartitionEntered("spe_defend_player_enter_inner_keep", (triggerEntity, intruderEntity, _payload) => {
    OUTPUT_AddTag(intruderEntity, defendVal.escalation.innerKeep)

    if (IsBaseEscalated(triggerEntity, defendVal.escalation.innerKeep)) {
        return
    }

    MarkBaseAsEscalated(triggerEntity, defendVal.escalation.innerKeep)

    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const portal = GetVillagePortal(villageId)

    // BARRACKS   =======================================================================================================================================================
    // small bases use "phase3" data for this phase
    if (IsSmall(baseSize)) {
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DefendFaction_Variations, 3)
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DefendFaction_Variations, 3)
    } else if (IsMediumOrGreater(baseSize)) {
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DefendFaction_Variations, 4)
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DefendFaction_Variations, 4)
    } else if (baseSize === BASE_SIZE_BOSS) {
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DefendFaction_Variations, 0)
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DefendFaction_Variations, 0)
    }

    // AUDIO  =======================================================================================================================================================
    //Music: Escalate combat music to phase 3
    if (baseSize !== BASE_SIZE_BOSS) {
        SetAudioPhaseForBase(villageId, defendVal.audioPerPhaseArray[3])
    } else if (baseSize === BASE_SIZE_BOSS) {
        SetAudioPhaseForBase(villageId, defendVal.audioPerBossPhaseArray[3])
    }

    // WAVES =======================================================================================================================================================

    const flaVar = GetVillageFlavour(villageId)
    const objVar = QUERY_GetVillageObjective(villageId)

    // send the new units to the closest spreader to the portal
    let initialPotentialTargets = EMPTY_ENTITY_GROUP

    if (flaVar === VILLAGE_VARIATION_A || objVar === VILLAGE_VARIATION_STRUCTURE_DESTRUCTION) {
        initialPotentialTargets = GetEntitiesWithTagsAndVillage(["pigGoldMine"], villageId)
    } else if (flaVar === VILLAGE_VARIATION_B) {
        initialPotentialTargets = GetEntitiesWithTagsAndVillage(["pigTower"], villageId)
    } else if (flaVar === VILLAGE_VARIATION_C) {
        initialPotentialTargets = GetEntitiesWithTagsAndVillage(["pigRangeUp"], villageId)
    }
    let initialTarget = null
    if (HasEntities(initialPotentialTargets)) {
        initialTarget = ClosestEntity(initialPotentialTargets, portal)
    }

    const spawnLocation = GetVillagePortalSpawnLocation(villageId)
    let newUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        newUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].phase4.spawnedUnits, spawnLocation)
    }
    if (HasEntities(newUnits) && initialTarget !== null) {
        AssignEntitiesToAI(villageId, newUnits, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
    }
    if (IsLarge(baseSize)) {
        SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].phase4PG.spawnedUnits, spawnLocation)
        AssignEntitiesToAI(villageId, newUnits, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
    }

    const phase4OutputDeck = DECK_Empty()
    const phase4MiniDeck = CreateBuildableGenMiniDecks(defendBaseMiniDeckNames, defendBasePhase4, baseSize, villageId, RANDOM_GROUP_DEFEND_HORDE)

    if (IsMedium(baseSize)) {
        //outsideKeepWall
        DECK_MultiplyBySingle(phase4MiniDeck["outsideKeepWall"], PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START))
        DECK_MultiplyBySingle(phase4MiniDeck["outsideKeepWall"], TagCard("defendInnerKeepBuilding"))
        DECK_MultiplyBySingle(phase4MiniDeck["outsideKeepWall"], ZoneFilterCard("defMidKeep"))

        DECK_MultiplyByMultipleRules(phase4MiniDeck["outsideKeepWall"], [TagCard("barracksdefendHordeDefend0"), TagCard("barracksdefendHordeUnique0")])
        DECK_MultiplyByMultipleRules(phase4MiniDeck["outsideKeepWall"], [TagCard("barracksdefendHordeDefend0"), TagCard("barracksdefendHordeUnique0")])

        DECK_PutOnBottomOf(phase4MiniDeck["outsideKeepWall"], phase4OutputDeck)
    }
    if (IsLarge(baseSize)) {
        //keepNearPortal
        DECK_MultiplyBySingle(phase4MiniDeck["keepNearPortal"], PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START))
        DECK_MultiplyBySingle(phase4MiniDeck["keepNearPortal"], PlacementPreferenceCard("placeRandomly"))
        DECK_MultiplyBySingle(phase4MiniDeck["keepNearPortal"], ForceBuildingPlacementCard("forceBuildingPlacement"))
        DECK_MultiplyBySingle(phase4MiniDeck["keepNearPortal"], ZoneFilterCard("defInnerKeep"))

        DECK_PutOnBottomOf(phase4MiniDeck["keepNearPortal"], phase4OutputDeck)
    }

    OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, phase4OutputDeck)
})

SNIPPET_SpatialPartitionExited("spe_defend_player_exit_inner_keep", (_triggerEntity, extruderEntity, _payload) => {
    OUTPUT_RemoveTag(extruderEntity, defendVal.escalation.innerKeep)
})

const _DefendChooseEnemyStructureTarget = (villageId, checkOnlyBuildings = false) => {
    const portalEntity = GetVillagePortal(villageId)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    let maxDistance = 0

    if (IsSmall(baseSize)) {
        maxDistance = 150
    } else if (IsMedium(baseSize)) {
        maxDistance = 200
    } else if (IsLarge(baseSize)) {
        maxDistance = 250
    } else {
        maxDistance = 100
    }

    // target priorities
    const spawnerTargets = FILTER_ByDistance(GetPlayerOwned(["spawner"]), portalEntity, maxDistance)
    if (QUERY_GetEntitiesCount(spawnerTargets) > 0) {
        return RandomEntity(spawnerTargets)
    }
    const buffPlatformTargets = FILTER_ByDistance(GetPlayerOwned(["buff_platform"]), portalEntity, maxDistance)
    if (QUERY_GetEntitiesCount(buffPlatformTargets) > 0) {
        return RandomEntity(buffPlatformTargets)
    }
    const playerAndMobTargets = FILTER_ByDistance(GetPlayerAndMobs(), portalEntity, maxDistance)
    if (QUERY_GetEntitiesCount(playerAndMobTargets) > 0 && checkOnlyBuildings === false) {
        return RandomEntity(playerAndMobTargets)
    }
    const towerTargets = FILTER_ByDistance(GetPlayerOwned(["tower"]), portalEntity, maxDistance)
    if (QUERY_GetEntitiesCount(towerTargets) > 0) {
        return RandomEntity(towerTargets)
    }
    const wallTargets = FILTER_ByDistance(GetPlayerOwned(["wall"]), portalEntity, maxDistance)
    if (QUERY_GetEntitiesCount(wallTargets) > 0) {
        return RandomEntity(wallTargets)
    }
    const otherBuildableTargets = FILTER_ByDistance(GetPlayerStructures(), portalEntity, maxDistance)
    if (QUERY_GetEntitiesCount(otherBuildableTargets) > 0) {
        return RandomEntity(otherBuildableTargets)
    }

    return EMPTY_ENTITY_GROUP
}

BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_wall_breach", (villageId, _wallSectionDestroyed) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const portal = GetVillagePortal(villageId)

    if (baseSize !== BASE_SIZE_VANGUARD && baseSize !== BASE_SIZE_SMALL && baseSize !== BASE_SIZE_MEDIUM && baseSize !== BASE_SIZE_LARGE) {
        return
    }

    PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_DEFEND, "tactic"), portal)
    _playDefendAttackStinger(portal)
})

//tier 1 piglin structure destroyed barracks squad
BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_tier_1_piglin_structure_destroyed_squad", (_villageId, _piglinStructure) => {})

//tier 2 piglin structure destroyed barracks squad
BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_tier_2_piglin_structure_destroyed_squad", (villageId, _towerDestroyed) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    //spawn units
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].tier2StructureDestroyed.spawnedUnits, spawnPosition)
    }

    AddEntitiesToNearestControlGroup(villageId, spawnedUnits, ["aiControllerRallyPoint"])
    PlayCommonBuildingDestroyedVO()
})

//tier 3 piglin structure destroyed barracks squad - magma tower
BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_magma_tower_barracks_squad", (villageId, _towerDestroyed) => {
    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].tier3StructureDestroyed.spawnedUnits, spawnPosition)
    }
    AddEntitiesToNearestControlGroup(villageId, spawnedUnits, ["aiControllerRallyPoint"])
    PlayCommonBuildingDestroyedVO()
})

//tier 3 piglin structure destroyed barracks squad - regenerator
BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_building_regenerator_destroyed", (villageId, _towerDestroyed) => {
    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].tier3StructureDestroyed, spawnPosition)
    }
    AddEntitiesToNearestControlGroup(villageId, spawnedUnits, ["aiControllerRallyPoint"])
    PlayCommonBuildingDestroyedVO()
})

//tier 3 piglin structure destroyed barracks squad - range extender
BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_range_extender_destroyed", (villageId, _towerDestroyed) => {
    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].tier3StructureDestroyed.spawnedUnits, spawnPosition)
    }
    AddEntitiesToNearestControlGroup(villageId, spawnedUnits, ["aiControllerRallyPoint"])
    PlayCommonBuildingDestroyedVO()
})

const _TriggerBattleRepairResponse = (villageId, spawnLocation, destination, squadConfig, buildConfig) => {
    // units
    const engineers = SpawnEntitiesAt(spawnLocation, "badger:piglin_engineer", squadConfig.engineerCount, TEAM_ORANGE, villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    for (const unit of squadConfig.units) {
        spawnedUnits = OPER_Append(spawnedUnits, SpawnEntitiesAt(spawnLocation, unit.archetype, unit.amount, TEAM_ORANGE, villageId))
    }
    // note the engineer may be engineer controlled, but fallback to the scripted control afterwards. we also cannot leash due to leashing being static
    OUTPUT_MoveAttackPosition(spawnedUnits, destination, 2, CALLBACK_NONE)
    OUTPUT_MoveAttackPosition(engineers, destination, 2, CALLBACK_NONE)

    // buildable
    const deck = buildConfig.buildCards()
    DECK_MultiplyByMultipleRules(deck, buildConfig.placementRules())
    OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, deck)

    LISTENFOR_BuildingStart({
        snippet: "bc_defend_battle_repair_building",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: [defBattleRepairsVal.buildingTag],
        payloadEntities: spawnedUnits
    })
}

SNIPPET_BuildingStart("bc_defend_battle_repair_building", (buildingEntity, payload) => {
    const guards = payload.entities
    OUTPUT_MoveAttackPosition(guards, buildingEntity, 4, CALLBACK_NONE)
    Once()
})

//battle repairs response
BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_battle_repairs_inner", (villageId, destroyedEntity) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const limit = defBattleRepairsVal.responseLimit[size]

    if (limit === undefined) {
        // not supported
        Once()
        return
    }

    if (DeltaVillageVariable(villageId, defBattleRepairsVal.responseCountVariable, 1) > limit) {
        return
    }

    const flavour = QUERY_GetVillageFlavour(villageId)
    const squadConfig = GetChild(defBattleRepairsVal.squadConfigs, size, flavour)
    if (squadConfig === undefined) {
        return
    }
    const buildConfig = defBattleRepairsVal.buildConfigs.innerKeepWall

    _TriggerBattleRepairResponse(villageId, GetVillagePortalSpawnLocation(villageId), destroyedEntity, squadConfig, buildConfig)
})

BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_battle_repairs_outer", (villageId, destroyedEntity) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const limit = defBattleRepairsVal.responseLimit[size]

    if (limit === undefined) {
        // not supported
        Once()
        return
    }

    if (DeltaVillageVariable(villageId, defBattleRepairsVal.responseCountVariable, 1) > limit) {
        return
    }

    const flavour = QUERY_GetVillageFlavour(villageId)
    const squadConfig = GetChild(defBattleRepairsVal.squadConfigs, size, flavour)
    if (squadConfig === undefined) {
        return
    }
    const buildConfig = defBattleRepairsVal.buildConfigs.outterKeepWall

    _TriggerBattleRepairResponse(villageId, GetVillagePortalSpawnLocation(villageId), destroyedEntity, squadConfig, buildConfig)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_defend_tier_1_piglin_structure_damaged_squad", (villageId, _piglinStructure) => {
    _playDefendAttackStinger(GetVillagePortal(villageId))
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_defend_tier_2_piglin_structure_damaged_squad", (villageId, _piglinStructure) => {
    const portal = GetVillagePortal(villageId)

    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].tier2StructureDamaged.spawnedUnits, spawnPosition)
    }
    AddEntitiesToNearestControlGroup(villageId, spawnedUnits, ["aiControllerRallyPoint"])
    PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_DEFEND, "tactic"), portal)
    _playDefendAttackStinger(portal)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_defend_magma_tower_barracks_squad", (villageId, _piglinStructure) => {
    const portal = GetVillagePortal(villageId)

    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].tier3StructureDamaged.spawnedUnits, spawnPosition)
    }
    AddEntitiesToNearestControlGroup(villageId, spawnedUnits, ["aiControllerRallyPoint"])
    PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_DEFEND, "tactic"), portal)
    _playDefendAttackStinger(portal)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_defend_building_regenerator_damaged", (villageId, _piglinStructure) => {
    const portal = GetVillagePortal(villageId)

    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].tier3StructureDamaged.spawnedUnits, spawnPosition)
    }
    AddEntitiesToNearestControlGroup(villageId, spawnedUnits, ["aiControllerRallyPoint"])

    //send engineers to build 2 arrow towers
    const regeneratorBuildDeck = BuildableCard("piglinTower", 2)
    DECK_MultiplyByMultipleRules(regeneratorBuildDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("towardsEnemies"), ZoneFilterCard("defGeneralZone")])
    OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, regeneratorBuildDeck)
    _playDefendBuildStinger(portal)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_defend_range_extender_damaged", (villageId, _piglinStructure) => {
    const portal = GetVillagePortal(villageId)

    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].tier2StructureDamaged.spawnedUnits, spawnPosition)
    }
    AddEntitiesToNearestControlGroup(villageId, spawnedUnits, ["aiControllerRallyPoint"])

    //send engineers to build 1 magma tower
    const regeneratorBuildDeck = BuildableCard("lavaSprayerTower", 1)
    DECK_MultiplyByMultipleRules(regeneratorBuildDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("towardsEnemies"), ZoneFilterCard("defGeneralZone")])
    OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, regeneratorBuildDeck)
    _playDefendBuildStinger(portal)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_defend_wall_breach", (villageId, _piglinStructure) => {
    const portal = GetVillagePortal(villageId)

    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].wallDamaged.spawnedUnits, spawnPosition)
    }
    AddEntitiesToNearestControlGroup(villageId, spawnedUnits, ["aiControllerRallyPoint"])

    _playDefendAttackStinger(portal)
})

BASE_DeclarePlayerStructureBuiltResponseHandler("pb_defend_tier_1_structure_squad", (villageId, _playerStructure) => {
    const portal = GetVillagePortal(villageId)

    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].playerStructureBuilt.spawnedUnits, spawnPosition)
    }
    AddEntitiesToNearestControlGroup(villageId, spawnedUnits, ["aiControllerRallyPoint"])
    _playDefendTargetStinger(portal)
})

BASE_DeclarePlayerStructureBuiltResponseHandler("pb_defend_tier_2_structure_squad", (villageId, _playerStructure) => {
    const portal = GetVillagePortal(villageId)

    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].playerStructureBuilt.spawnedUnits, spawnPosition)
    }
    AddEntitiesToNearestControlGroup(villageId, spawnedUnits, ["aiControllerRallyPoint"])
    _playDefendTargetStinger(portal)
})

BASE_DeclarePlayerStructureBuiltResponseHandler("pb_defend_tier_3_structure_squad", (villageId, _playerStructure) => {
    const portal = GetVillagePortal(villageId)

    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].playerStructureBuilt.spawnedUnits, spawnPosition)
    }
    AddEntitiesToNearestControlGroup(villageId, spawnedUnits, ["aiControllerRallyPoint"])

    const tier3PlayerStructureBuildDeck = BuildableCard("piglinTower", 1)
    DECK_MultiplyByMultipleRules(tier3PlayerStructureBuildDeck, [PlacementPreferenceCard("closeToEnemies"), ZoneFilterCard("defGeneralZone")])
    OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, tier3PlayerStructureBuildDeck)
    _playDefendTargetStinger(portal)
})

BASE_DeclarePlayerStructureBuiltResponseHandler("pb_defend_bridge_squad", (villageId, _playerStructure) => {
    const portal = GetVillagePortal(villageId)

    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].playerStructureBuilt.spawnedUnits, spawnPosition)
    }
    AddEntitiesToNearestControlGroup(villageId, spawnedUnits, ["aiControllerRallyPoint"])
    _playDefendTargetStinger(portal)
})

SNIPPET_EntitySpawned("es_set_appearance_to_defend_faction_piglins", (piglinEntity) => {
    OUTPUT_OverrideFactionAppearanceByName(piglinEntity, FACTION_NAME_DEFEND)
})

SNIPPET_EntitySpawned("es_portal_guard_vo", (piglinEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(piglinEntity)
    LISTENFOR_LocalTimer({
        snippet: "lt_play_big_unit_vo",
        ownerVillageId: villageId,
        waitTime: defendVal.consts.timeUntilBigUnit,
        payloadInt: villageId
    })
    Once()
})

SNIPPET_LocalTimer("lt_play_big_unit_vo", (payload) => {
    const villageId = payload.int
    const villageEntity = GetVillageEntityFromID(villageId)
    if (HasEntities(villageEntity)) {
        const line = ChooseFromArray(defendVal.VO.bigUnit)
        _PlayVOBasedOnBaseSize(villageId, line, villageEntity)
    }
})

//audio stinger functions
const _playDefendAttackStinger = (portal) => {
    if (HasEntities(portal)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_attack", portal)
    }
}

const _playDefendTargetStinger = (portal) => {
    if (HasEntities(portal)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_target", portal)
    }
}

const _playDefendBuildStinger = (portal) => {
    if (HasEntities(portal)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_build", portal)
    }
}

const _SpawnMagmaBoss = (villageId) => {
    if (QUERY_GetGlobalVariable(defendVal.global.bossSpawned)) {
        return
    }

    OUTPUT_SetGlobalVariable(defendVal.global.bossSpawned, 1)

    LISTENFOR_EntityTimer({
        snippet: "defendSpawnMagmaBoss",
        ownerVillageId: villageId,
        timerName: "defendSpawnMagmaBoss",
        entity: GetVillagePortal(villageId)
    })
    OUTPUT_SetEntityTimer(GetVillagePortal(villageId), "defendSpawnMagmaBoss", 2)
}

// phase summary: spawn an engineer from all remaining barracks and portal to build in the center platform.
const _MagmaBossActivatePhaseEngineers = (villageId) => {
    const maxRaxCount = 3 // +1 from the portal always

    const portalSpawnPoint = GetVillagePortalSpawnLocation(villageId)
    let spawnPoints = GetEntitiesWithTagsAndVillage([TAG_BARRACKS], villageId)
    spawnPoints = FILTER_ByClosest(spawnPoints, portalSpawnPoint, maxRaxCount)
    spawnPoints = OPER_Union(spawnPoints, portalSpawnPoint)

    const engineers = SpawnEntitiesAt(spawnPoints, "badger:piglin_engineer", 1, TEAM_ORANGE, villageId)
    const engineerCount = QUERY_GetEntitiesCount(engineers)

    let buildableDeck = BuildableCard("piglinTower", engineerCount * 2)
    buildableDeck = DECK_Stack(buildableDeck, BuildableCard("addFighterBarracks", 1))
    buildableDeck = DECK_Stack(buildableDeck, BuildableCard("addSiegerBarracks", 1))
    DECK_MultiplyByMultipleRules(buildableDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("defGeneralZone")])

    OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, buildableDeck)
}

SNIPPET_EntityTimer("defendSpawnMagmaBoss", (portal, _payload) => {
    Once()
    const villageId = QUERY_GetVillageIDFromEntity(portal)

    SpawnBossAtPortal(villageId, "badger:piglin_magma_boss", 1)

    LISTENFOR_EntitySpawned({
        snippet: "es_defend_boss_spawned",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["boss", "magma"]
    })

    LISTENFOR_HealthChanged({
        snippet: "hc_defend_magma_boss_first_stinger",
        ownerVillageId: villageId,
        includeTags: ["boss", "magma"],
        normalizedThreshold: 0.7,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE
    })
    LISTENFOR_HealthChanged({
        snippet: "hc_defend_magma_boss_geyser_activate",
        ownerVillageId: villageId,
        includeTags: ["boss", "magma"],
        normalizedThreshold: 0.45,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE
    })
    const villageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.BOSS, MAP_BOSS.DEFEND_BOSS)
    LISTENFOR_CinematicStarted({
        snippet: "cs_defend_boss_dead",
        ownerVillageId: villageId,
        cinematicName: defendVal.cinematic.bossDead
    })
    SetAudioPhaseForBase(villageId, defendVal.audioPerBossPhaseArray[4])
})
SNIPPET_HealthChanged("hc_defend_magma_boss_first_stinger", (_boss, _currentHealth, _previousHealth, _payload) => {
    PlayPresentationActionToAll("piglin_boss_health_defend_1")
    Once()
})
SNIPPET_HealthChanged("hc_defend_magma_boss_geyser_activate", (boss, _currentHealth, _previousHealth, payload) => {
    PlayPresentationActionToAll("piglin_boss_health_defend_2")
    OUTPUT_SetAttackMode(boss, "magma_boss_lava_geyser", true)
    _MagmaBossActivatePhaseEngineers(payload.ownerVillageId)
    _playDefendBuildStinger(boss)
    Once()
})
SNIPPET_EntitySpawned("es_defend_boss_spawned", (bossEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(bossEntity)
    const portal = GetVillagePortal(villageId)
    OUTPUT_AddTether(bossEntity, portal, 50)
})

//SNIPPET TO TRACK NUMBER OF TOWERS DESTROYED THEN BUILD MORE
SNIPPET_NonPopCappedEntityDestroyed("ed_countingTowers", (payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(payload)
    const portal = GetVillagePortal(villageId)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const towersDestroyed = GetVillageVariable(villageId, defendVal.village.towersDestroyed)
    //check and increment variable for number of towers destroyed

    if (!HasEntities(portal)) {
        return
    }

    if (towersDestroyed <= 5) {
        SetVillageVariable(villageId, defendVal.village.towersDestroyed, towersDestroyed + 1)
    } else if (towersDestroyed >= 5) {
        const towerBuildDeck = DECK_Empty()

        if (IsSmallOrGreater(baseSize)) {
            const closeTower = BuildableCard("piglinTower")
            DECK_MultiplyByMultipleRules(closeTower, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("towardsEnemies"), ZoneFilterCard("defGeneralZone")])
            DECK_PutOnBottomOf(towerBuildDeck, closeTower)
        }
        if (IsMediumOrGreater(baseSize)) {
            const farTower = BuildableCard("piglinTower")
            DECK_MultiplyByMultipleRules(farTower, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("towardsEnemies"), ZoneFilterCard("defGeneralZone")])
            DECK_PutOnBottomOf(towerBuildDeck, farTower)
        }

        OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, towerBuildDeck)
        SetVillageVariable(villageId, defendVal.village.towersDestroyed, 0)

        _playDefendBuildStinger(GetVillagePortal(villageId))
    }
})

// BUILDING PLAN FOR DEFEND Faction
const defendBaseMiniDeckNames = ["keepNearPortal", "innerKeep", "insideKeepWall", "outsideKeepWall", "insideOuterWall", "outsideOuterWall", "outskirts"]

//NEAR PORTAL
const _flavourKeepNearPortalSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addSiegerBarracks" },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addSiegerBarracks" },
            [VILLAGE_VARIATION_B]: { amount: 1, build: "addFighterBarracks" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourKeepNearPortalSlot2 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "piglinTower" }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "rangeExtender" },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addSiegerBarracks" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourKeepNearPortalSlot3 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "goldMine" },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "piglinTower" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

//INNER KEEP
const _flavourInnerKeepSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "addSiegerBarracks" },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "piglinTower" }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 3, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: 3, build: "piglinTower" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "addFighterBarracks" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourInnerKeepSlot2 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "addFighterBarracks" }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addSiegerBarracks" },
            [VILLAGE_VARIATION_B]: { amount: 1, build: "addFighterBarracks" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "rangeExtender" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourInnerKeepSlot3 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 3, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addFighterBarracks" },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "buildingRegenerator" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

//INSIDE KEEP WALL
const _flavourInsideKeepWallSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 3, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "addFighterBarracks" }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "lavaSprayerTower" },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "addFighterBarracks" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addSiegerBarracks" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourInsideKeepWallSlot2 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addSiegerBarracks" },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: 3, build: "netherSpreader" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "piglinTower" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourInsideKeepWallSlot3 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "piglinTower" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "lavaSprayerTower" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

//OUTSIDE KEEP WALL
const _flavourOutsideKeepWallSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 4, build: "netherSpreader" },
            [VILLAGE_VARIATION_B]: { amount: 4, build: "netherSpreader" }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 3, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: 3, build: "piglinTower" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addFighterBarracks" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourOutsideKeepWallSlot2 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "addFighterBarracks" },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "addFighterBarracks" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "addSiegerBarracks" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourOutsideKeepWallSlot3 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "addSiegerBarracks" },
            [VILLAGE_VARIATION_B]: { amount: 1, build: "addFighterBarracks" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "lavaSprayerTower" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

//INSIDE OUTER WALL // MEDIUM+
const _flavourInsideOuterWallSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: 3, build: "piglinTower" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addFighterBarracks" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourInsideOuterWallSlot2 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "netherSpreader" },
            [VILLAGE_VARIATION_B]: { amount: 1, build: "netherSpreader" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 6, build: "piglinTower" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourInsideOuterWallSlot3 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "lavaSprayerTower" },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "goldMine" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "lavaSprayerTower" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

//OUTSIDE OUTER WALL //MEDIUM+
const _flavourOutsideOuterWallSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "netherSpreader" },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "netherSpreader" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "lavaSprayerTower" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourOutsideOuterWallSlot2 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 4, build: "netherSpreader" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

//OUTSKIRTS
const _flavourOutskirtsSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 4, build: "netherSpreader" },
            [VILLAGE_VARIATION_B]: { amount: 4, build: "netherSpreader" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 4, build: "netherSpreader" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

//PHASE BIULDS
const _flavourPhaseTowerSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addFighterBarracks" },
            [VILLAGE_VARIATION_B]: { amount: 1, build: "addFighterBarracks" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addSiegerBarracks" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourPhaseTowerSlotDouble = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: 1, build: "addFighterBarracks" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "piglinTower" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourPhaseBarracksSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addSiegerBarracks" },
            [VILLAGE_VARIATION_B]: { amount: 1, build: "addFighterBarracks" }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addFighterBarracks" },
            [VILLAGE_VARIATION_B]: { amount: 1, build: "addFighterBarracks" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addFighterBarracks" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const defendBaseGen = {
    small: {
        keepNearPortal: [_flavourKeepNearPortalSlot1, _flavourKeepNearPortalSlot2, _flavourKeepNearPortalSlot3],
        innerKeep: [["goldMine", 2], ["piglinCrate"], _flavourInnerKeepSlot1, _flavourInnerKeepSlot2, _flavourInnerKeepSlot3],
        insideKeepWall: [["goldMine"], _flavourInsideKeepWallSlot1, _flavourInsideKeepWallSlot2, _flavourInsideKeepWallSlot3],
        outsideKeepWall: [["netherSpreader", 2], _flavourOutsideKeepWallSlot1, _flavourOutsideKeepWallSlot2, _flavourOutsideKeepWallSlot3],
        insideOuterWall: [_flavourInsideOuterWallSlot1, _flavourInsideOuterWallSlot2, _flavourInsideOuterWallSlot3],
        outsideOuterWall: [_flavourOutsideOuterWallSlot1, _flavourOutsideOuterWallSlot2],
        outskirts: [_flavourOutskirtsSlot1]
    },
    medium: {
        keepNearPortal: [],
        innerKeep: [],
        insideKeepWall: [],
        outsideKeepWall: [],
        insideOuterWall: [["netherSpreader", 2]],
        outsideOuterWall: [],
        outskirts: []
    },
    large: {
        keepNearPortal: [],
        innerKeep: [],
        insideKeepWall: [["netherSpreader"]],
        outsideKeepWall: [],
        insideOuterWall: [],
        outsideOuterWall: [["netherSpreader", 2]],
        outskirts: []
    }
}

const defendBasePhase2 = {
    small: {
        keepNearPortal: [],
        innerKeep: [],
        insideKeepWall: [],
        outsideKeepWall: [],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    },
    medium: {
        keepNearPortal: [],
        innerKeep: [_flavourPhaseBarracksSlot1],
        insideKeepWall: [],
        outsideKeepWall: [],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    },

    large: {
        keepNearPortal: [],
        innerKeep: [],
        insideKeepWall: [],
        outsideKeepWall: [_flavourPhaseBarracksSlot1],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    }
}

const defendBasePhase3 = {
    small: {
        keepNearPortal: [],
        innerKeep: [],
        insideKeepWall: [],
        outsideKeepWall: [],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    },
    medium: {
        keepNearPortal: [],
        innerKeep: [_flavourPhaseBarracksSlot1],
        insideKeepWall: [],
        outsideKeepWall: [],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    },

    large: {
        keepNearPortal: [],
        innerKeep: [],
        insideKeepWall: [],
        outsideKeepWall: [_flavourPhaseBarracksSlot1],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    }
}

const defendBasePhase4 = {
    small: {
        keepNearPortal: [],
        innerKeep: [],
        insideKeepWall: [],
        outsideKeepWall: [],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    },
    medium: {
        keepNearPortal: [],
        innerKeep: [],
        insideKeepWall: [],
        outsideKeepWall: [_flavourPhaseTowerSlotDouble],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    },

    large: {
        keepNearPortal: [_flavourPhaseTowerSlot1],
        innerKeep: [],
        insideKeepWall: [],
        outsideKeepWall: [],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    }
}

// ==== VO ====
SNIPPET_CinematicFinished(`cf_${defendVal.cinematic.firstTimeNonShieldBaseIntro}`, (payload) => {
    UnlockJournalEntry(JOURNAL_UNLOCKS.HORDE_DEFEND_FACTION)
    PlayPresentationActionToAll(defendVal.VO.postIntroVO)
    PlayBaseTooToughVO(payload.ownerVillageId, 7)
    HandleRSLOnboarding(payload.ownerVillageId)
})

SNIPPET_CinematicFinished(`cf_${defendVal.cinematic.bossIntro}`, (payload) => {
    _SpawnMagmaBoss(payload.ownerVillageId, true)
    PlayPresentationActionToAll(defendVal.VO.postBossSpawnVO)
    SetPortalInvulnerable(payload.ownerVillageId, true)
})

SNIPPET_CinematicFinished(`cf_${defendVal.cinematic.shieldIntro}`, (payload) => {
    PlayPresentationActionToAll(defendVal.VO.postShieldIntroVO)
    PlayBaseTooToughVO(payload.ownerVillageId, 1)
    HandleRSLOnboarding(payload.ownerVillageId)
    Once()
})

SNIPPET_SpatialPartitionEntered("spe_defend_outpost", () => {
    if (QUERY_GetGlobalVariable("outpostVisited") === 0) {
        OUTPUT_SetGlobalVariable("outpostVisited", 1)
    }
})

// TELEMETRY
SetupDefaultTelemetryForPiglinBase(FACTION_NAME_DEFEND)
