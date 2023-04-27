const dbbAI = {
    offensive: "dbbAttackAi",
    defensive: "dbbDefendAi",
    siege: "dbbSiegeAi"
}
const dbbCompositions = {
    // Wood -> Runts Only (Runts) - Attack AI
    runtsOnly: {
        units: [{ amount: 6, unit: PIGLIN_ARCHETYPE.RUNT }]
    },
    // Grindstone+Wood+Mossy -> Pyro MD (Grunter+Medic) - Defend AI
    pyroMD: {
        units: [
            { amount: 10, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
        ]
    },
    // Wood+Stone+Mossy -> Spiky (Runt+Warboar) - Siege AI
    spiky: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR }
        ]
    }
}

const dbbDiscreteEncounters = {
    ourTower: {
        unitComposition: dbbCompositions.runtsOnly,
        buildableTag: "ourTower",
        leashDistance: 50,
        returnDistance: 10
    },
    netheredBlaze: {
        unitComposition: dbbCompositions.pyroMD,
        buildableTag: "netheredBlaze",
        leashDistance: 50,
        returnDistance: 10
    }
}

const dbbVal = {
    aiConfig: {
        [dbbAI.offensive]: {
            name: "dbbAttackAi",
            controllerArchetype: "badger:ai_entity_dbb_offensive",
            controllerTag: "dbbAttackAiCtrl",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["dbbOffensiveRally"],
            reinforcementControlGroupTag: "dbbAttack",
            reinforcementInterval: 12,
            reinforcementPercentage: 20
        },
        [dbbAI.defensive]: {
            name: "dbbDefendAi",
            controllerArchetype: "badger:ai_entity_dbb_defensive",
            controllerTag: "dbbDefendAiCtrl",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["dbbDefensiveRally"],
            reinforcementControlGroupTag: "dbbDefend",
            reinforcementInterval: 5,
            reinforcementPercentage: 100
        },
        [dbbAI.siege]: {
            name: "dbbSiegeAi",
            controllerArchetype: "badger:ai_entity_dbb_siege",
            controllerTag: "dbbSiegeAiCtrl",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["dbbSiegeRally"],
            reinforcementControlGroupTag: "dbbSiege",
            reinforcementInterval: 15,
            reinforcementPercentage: 10
        }
    },
    misc: {
        timeToStairsReminderVO: 60,
        timeToNetherSpreadersDestroyedVO: 8,
        timeToDbbEscalation3ReminderVO: 120,
        stairsReminderVO: "onboarding_extendable_platform_reminder",
        hasPlayedStairsReminderAtTowerVO: "gv_hasPlayedStairsReminderAtTowerVO",
        hasPlayedStairsReminderAtLavaVO: "gv_hasPlayedStairsReminderAtLavaVO"
    },
    escalationVal: {
        approached: "approached",
        keyBuildingDestroyed: "keyBuildingDestroyed",
        portalApproached: "portalApproached"
    },
    act1CampEscalationVal: {
        approached: "approached",
        keyBuildingDestroyed: "keyBuildingDestroyed",
        portalApproached: "portalApproached"
    },
    dbbPigmadiloTetherRange: 70,
    dbbPortalGuardTetherRange: 60,
    dbbLavaLauncherTetherRange: 40,
    audioPerPhaseArray: ["initial_dbb", "phase1_dbb", "phase2_dbb", "phase3_dbb", "phase4_dbb"],
    messages: {
        escalation1: "dbb_piglin_attack_escalation1",
        escalation2: "dbb_piglin_attack_escalation2",
        escalation3: "dbb_piglin_attack_escalation3",
        portalDestroyed: "dbb_piglin_attack_portal_destroyed"
    },
    global: {
        firstThresholdResponseInCooldown: "gv_act1_first_threshold_response_in_cooldown_",
        eliteUnitsSpawned: "elite_units_spawned",
        dbbPigmadiloWallBreachResponse: "pigmadiloCanDoInnerWallBreachResponse",
        dbbPortalGuardDestroyedStructureResponse: "portalGuardCanDoDestroyedStructureResponse",
        hasVisitedAct1: "gv_act1_base_visited",
        DBBpigmadiloExists: "DBB_pigmadilo_Exists",
        DBBlavaLauncherExists: "DBB_lava_launcher_exists",
        DBBportalGuardExists: "DBB_portal_guard_exists",
        DBBHasDamagedPortalAtLeastOnce: "gv_dbb_has_damaged_portal_at_least_once",
        playEliteDeadVO: "play_elite_death_vo"
    },
    cinematic: {
        act1Base1Intro: "hrd00_c02_intro_runt",
        campIntro: "hrd00_c99_the_edge_case",
        dbbIntro: "mst04_c04b_the_angry_mob_fmv"
    },
    VO: {
        dbbEscalation1: "piglin_corrupted_escalation_1",
        dbbEscalation2: "piglin_corrupted_escalation_2",
        dbbEscalation3: "piglin_corrupted_escalation_3",
        lavaMoatCampReaction: "onboarding_camp_2_arrival",
        towersCampReaction: "onboarding_camp_3_arrival",
        netherSpreaderCampReaction: "onboarding_camp_4_arrival"
    },
    villageAngerRadius: 160,
    tags: {
        barracksPiglins: "piglin_spawned_by_barracks",
        rallyingPoint: "piglin_rallying_point",
        piglinsAttackingPlayers: "piglin_attacking_players_"
    },
    music: {
        [BASE_SIZE_ACT_1_A]: "badger:music_combat_act1_base_1",
        [BASE_SIZE_ACT_1_B]: "badger:music_combat_act1_base_2",
        [BASE_SIZE_ACT_1_C]: "badger:music_combat_act1_base_3",
        [BASE_SIZE_DARK_BEACON]: "badger:music_combat_act1_dbb"
    },
    barracks: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_FIGHTER]: FighterBarracksConfig_DBBFaction,
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_DISRUPTOR]: DisruptorBarracksConfig_DBBFaction,
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_SIEGER]: SiegerBarracksConfig_DBBFaction,
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_CREEPER]: AllyBarracksCreeperConfig_DBBFaction,
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_SKELETON]: AllyBarracksSkeletonConfig_DBBFaction,
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_ZOMBIE]: AllyBarracksZombieConfig_DBBFaction
    },
    piglinRallyPoints: {
        ["attack"]: {
            controlGroupTag: "attack",
            composition: dbbCompositions.runtsOnly,
            ais: [[dbbAI.offensive, 100]],
            positionTags: ["dbbOffensiveRally"],
            positionTagExcludes: []
        },
        ["defend"]: {
            controlGroupTag: "defend",
            composition: dbbCompositions.pyroMD,
            ais: [[dbbAI.defensive, 100]],
            positionTags: ["dbbDefensiveRally"],
            positionTagExcludes: []
        },
        ["siege"]: {
            controlGroupTag: "siege",
            composition: dbbCompositions.spiky,
            ais: [[dbbAI.siege, 100]],
            positionTags: ["dbbSiegeRally"],
            positionTagExcludes: []
        }
    },
    baseSetup: {
        reescalationSnippet: "spe_dbb_gameplay",
        [BASE_SIZE_ACT_1_A]: {
            reescalation: true,
            reescalationResetTime: 1800,
            boundsTV: "badger:spatial_trigger_zone_piglin_base_intro_act1",
            snippets: [
                { snippet: "spe_dbb_act1_intro_cine", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER },
                { snippet: "spe_dbb_act1_camp_nudge", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER },
                { snippet: "spex_dbb_act1_reset_nudge", type: TV_TYPE.BOUNDS, event: TV_EVENT.EXIT, tagset: TAGSET_PLAYER }
            ]
        },
        [BASE_SIZE_ACT_1_B]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_base_intro_act1",
            snippets: [
                { snippet: "spe_dbb_act1_intro_cine", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER },
                { snippet: "spe_dbb_act1_camp_nudge", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER },
                { snippet: "spex_dbb_act1_reset_nudge", type: TV_TYPE.BOUNDS, event: TV_EVENT.EXIT, tagset: TAGSET_PLAYER }
            ]
        },
        [BASE_SIZE_ACT_1_C]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_base_intro_act1",
            snippets: [
                { snippet: "spe_dbb_act1_intro_cine", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER },
                { snippet: "spe_dbb_act1_camp_nudge", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER },
                { snippet: "spex_dbb_act1_reset_nudge", type: TV_TYPE.BOUNDS, event: TV_EVENT.EXIT, tagset: TAGSET_PLAYER }
            ]
        },
        [BASE_SIZE_ACT1_FIRST_SKIRMISH]: {
            reescalation: true,
            reescalationResetTime: 1800,
            boundsTV: "badger:spatial_trigger_zone_piglin_base_intro_act1",
            snippets: [
                { snippet: "spe_dbb_act1_intro_cine", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER },
                { snippet: "spe_act1_camp_initial_escalation", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB }
            ]
        },
        [BASE_SIZE_ACT1_SECOND_SKIRMISH]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_base_intro_act1",
            snippets: [{ snippet: "spe_dbb_act1_intro_cine", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER }]
        },
        [BASE_SIZE_ACT1_NON_PORTAL_ATTACK_BASE]: {
            reescalation: true,
            reescalationResetTime: 1800,
            boundsTV: "badger:spatial_trigger_zone_piglin_base_intro_act1",
            snippets: [
                { snippet: "spe_dbb_act1_intro_cine", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER },
                { snippet: "spe_act1_camp_initial_escalation", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB }
            ]
        },
        [BASE_SIZE_LARGE]: {
            boundsTV: "badger:spatial_trigger_village_generic",
            snippets: [{ snippet: "spe_dbb_act1_intro_cine", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER }]
        },
        [BASE_SIZE_DARK_BEACON]: {
            // changed from "badger:temp_spatial_trigger_zone_piglin_base_intro_small"
            boundsTV: "badger:spatial_trigger_zone_dbb_intro",
            reescalation: true,
            reescalationResetTime: 1800,
            snippets: [
                { snippet: "spe_dark_beacon_intro_cine", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER },
                { snippet: "spe_dark_beacon_initial_escalation", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB }
            ]
        }
    },
    campSpecificNudge: ["onboarding_three_piglin_camps_nether", "onboarding_three_piglin_camps_towers", "onboarding_three_piglin_camps_lava"],
    percentageOfPiglinsToDefendPortal: {
        firstThreshold: 50,
        secondThreshold: 75,
        thirdThreshold: 100
    },
    portalHealthThreshold: {
        zero: 0.9,
        first: 0.75,
        second: 0.6,
        third: 0.5,
        fourty: 0.4,
        fourth: 0.25,
        fifth: 0.1
    },
    firstThresholdResponseCooldown: 30,
    delaySpawnInitialMobs: 4,
    timedWaveDistance: 150,
    postIntroDistance: 180, // TV size is 245
    insideBaseDistance: 180,
    recurringWaveTimer: 60,
    responses: {
        retaliation: {
            portalApproached: {
                1: [{ amount: 5, unit: PIGLIN_ARCHETYPE.RUNT }],
                2: [{ amount: 5, unit: PIGLIN_ARCHETYPE.RUNT }],
                // Pyro MD comp
                3: [
                    { amount: 5, unit: PIGLIN_ARCHETYPE.GRUNTER },
                    { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                ],
                response: {
                    gatherPercentage: 100,
                    aiDistribution: [[[dbbAI.defensive], 100]]
                }
            },
            keyBuildingDestroyed: {
                1: [{ amount: 5, unit: PIGLIN_ARCHETYPE.RUNT }],
                2: [{ amount: 5, unit: PIGLIN_ARCHETYPE.RUNT }],
                // Pyro MD comp
                3: [
                    { amount: 5, unit: PIGLIN_ARCHETYPE.GRUNTER },
                    { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                ],
                response: {
                    gatherPercentage: 100,
                    aiDistribution: [[[dbbAI.defensive], 100]]
                }
            },
            approached: {
                1: [{ amount: 5, unit: PIGLIN_ARCHETYPE.RUNT }],
                2: [{ amount: 5, unit: PIGLIN_ARCHETYPE.RUNT }],
                // Pyro MD comp
                3: [
                    { amount: 5, unit: PIGLIN_ARCHETYPE.GRUNTER },
                    { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                ],
                response: {
                    gatherPercentage: 100,
                    aiDistribution: [[[dbbAI.defensive], 100]]
                }
            }
        },
        initialSpawn: {
            dbb: {
                all: [
                    { amount: 15, unit: PIGLIN_ARCHETYPE.RUNT },
                    { amount: 15, unit: PIGLIN_ARCHETYPE.GRUNTER }
                ],
                1: [{ amount: 5, unit: PIGLIN_ARCHETYPE.RUNT }],
                2: [{ amount: 5, unit: PIGLIN_ARCHETYPE.RUNT }],
                3: [{ amount: 5, unit: PIGLIN_ARCHETYPE.GRUNTER }]
            }
        },
        initialEscalation: {
            dbb: {
                units: {
                    1: [
                        { amount: 13, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 3, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ],
                    2: [
                        { amount: 13, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 3, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ],
                    3: [
                        { amount: 13, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 3, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ]
                }
            },
            act1: {
                units: {
                    BASE_SIZE_ACT_1_A: [{ amount: 10, unit: PIGLIN_ARCHETYPE.RUNT }],
                    BASE_SIZE_ACT_1_B: [{ amount: 10, unit: PIGLIN_ARCHETYPE.RUNT }],
                    BASE_SIZE_ACT_1_C: [{ amount: 10, unit: PIGLIN_ARCHETYPE.RUNT }]
                }
            }
        },
        approachPortalFirstThreshold: {
            dbb: {
                response: {
                    gatherPercentage: 100,
                    aiDistribution: [
                        [[dbbAI.offensive], 40],
                        [[dbbAI.defensive], 60]
                    ]
                }
            },
            debounce: {
                name: "approachFirstThreshold",
                time: 30
            }
        },
        keyBuilding: {
            dbb: {
                units: {
                    1: [
                        { amount: 3, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ],
                    2: [
                        { amount: 3, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ],
                    3: [
                        { amount: 3, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ]
                }
            },
            act1: {
                units: {
                    BASE_SIZE_ACT_1_A: [{ amount: 15, unit: PIGLIN_ARCHETYPE.RUNT }],
                    BASE_SIZE_ACT_1_B: [{ amount: 15, unit: PIGLIN_ARCHETYPE.RUNT }],
                    BASE_SIZE_ACT_1_C: [{ amount: 15, unit: PIGLIN_ARCHETYPE.RUNT }]
                }
            },
            debounce: {
                name: "keyBuilding",
                time: 60
            }
        },
        approachPortal: {
            dbb: {
                units: {
                    1: [
                        { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ],
                    2: [
                        { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ],
                    3: [
                        { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ]
                },
                response: {
                    gatherPercentage: 50,
                    aiDistribution: [
                        [[dbbAI.offensive], 40],
                        [[dbbAI.defensive], 60]
                    ]
                }
            },
            act1: {
                units: {
                    BASE_SIZE_ACT_1_A: [{ amount: 15, unit: PIGLIN_ARCHETYPE.RUNT }],
                    BASE_SIZE_ACT_1_B: [{ amount: 15, unit: PIGLIN_ARCHETYPE.RUNT }],
                    BASE_SIZE_ACT_1_C: [{ amount: 15, unit: PIGLIN_ARCHETYPE.RUNT }]
                }
            }
        },
        innerWall: {
            dbb: {
                units: {
                    1: [
                        { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ],
                    2: [
                        { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ],
                    3: [
                        { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ]
                }
            },
            act1: {}
        },
        healthHigh: {
            dbb: {
                units: {
                    1: [{ amount: 7, unit: PIGLIN_ARCHETYPE.RUNT }],
                    2: [{ amount: 7, unit: PIGLIN_ARCHETYPE.RUNT }],
                    3: [{ amount: 7, unit: PIGLIN_ARCHETYPE.RUNT }]
                },
                response: {
                    gatherPercentage: 100,
                    aiDistribution: [
                        [[dbbAI.offensive], 70],
                        [[dbbAI.defensive], 30]
                    ]
                }
            },
            act1: {
                units: {
                    BASE_SIZE_ACT_1_A: [{ amount: 10, unit: PIGLIN_ARCHETYPE.RUNT }],
                    BASE_SIZE_ACT_1_B: [{ amount: 10, unit: PIGLIN_ARCHETYPE.RUNT }],
                    BASE_SIZE_ACT_1_C: [{ amount: 10, unit: PIGLIN_ARCHETYPE.RUNT }]
                }
            }
        },
        healthMedium: {
            dbb: {
                units: {
                    1: [
                        { amount: 6, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ],
                    2: [
                        { amount: 6, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ],
                    3: [
                        { amount: 6, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ]
                },
                response: {
                    gatherPercentage: 100,
                    aiDistribution: [
                        [[dbbAI.offensive], 50],
                        [[dbbAI.defensive], 50]
                    ]
                }
            },
            act1: {
                units: {
                    BASE_SIZE_ACT_1_A: [{ amount: 15, unit: PIGLIN_ARCHETYPE.RUNT }],
                    BASE_SIZE_ACT_1_B: [{ amount: 15, unit: PIGLIN_ARCHETYPE.RUNT }],
                    BASE_SIZE_ACT_1_C: [{ amount: 15, unit: PIGLIN_ARCHETYPE.RUNT }]
                }
            }
        },
        healthMediumToLow: {
            dbb: {
                units: {
                    1: [
                        { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ],
                    2: [
                        { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ],
                    3: [
                        { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ]
                },
                response: {
                    gatherPercentage: 100,
                    aiDistribution: [
                        [[dbbAI.offensive], 30],
                        [[dbbAI.defensive], 70]
                    ]
                }
            },
            act1: {
                units: {
                    BASE_SIZE_ACT_1_A: [{ amount: 20, unit: PIGLIN_ARCHETYPE.RUNT }],
                    BASE_SIZE_ACT_1_B: [{ amount: 20, unit: PIGLIN_ARCHETYPE.RUNT }],
                    BASE_SIZE_ACT_1_C: [{ amount: 20, unit: PIGLIN_ARCHETYPE.RUNT }]
                }
            }
        },
        healthLow: {
            dbb: {
                units: {
                    1: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 3, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ],
                    2: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 3, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ],
                    3: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 3, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ]
                },
                response: {
                    gatherPercentage: 100,
                    aiDistribution: [[[dbbAI.defensive], 100]]
                }
            },
            act1: {
                units: {
                    BASE_SIZE_ACT_1_A: [{ amount: 25, unit: PIGLIN_ARCHETYPE.RUNT }],
                    BASE_SIZE_ACT_1_B: [{ amount: 25, unit: PIGLIN_ARCHETYPE.RUNT }],
                    BASE_SIZE_ACT_1_C: [{ amount: 25, unit: PIGLIN_ARCHETYPE.RUNT }]
                }
            }
        },
        healthAlmostDead: {
            dbb: {
                units: {
                    1: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 3, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ],
                    2: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 3, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ],
                    3: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
                        { amount: 3, unit: PIGLIN_ARCHETYPE.GRUNTER }
                    ]
                },
                response: {
                    gatherPercentage: 100,
                    aiDistribution: [[[dbbAI.defensive], 100]]
                }
            },
            act1: {
                units: {
                    BASE_SIZE_ACT_1_A: [{ amount: 30, unit: PIGLIN_ARCHETYPE.RUNT }],
                    BASE_SIZE_ACT_1_B: [{ amount: 30, unit: PIGLIN_ARCHETYPE.RUNT }],
                    BASE_SIZE_ACT_1_C: [{ amount: 30, unit: PIGLIN_ARCHETYPE.RUNT }]
                }
            }
        }
    }
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignBasesEnabled, (rule) => {
    if (rule.value) {
        LISTENFOR_VillageGenerated({
            snippet: "vg_dbb_base_generated",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_DBB
        })
    }
})

/* -------------------------------------------------------------------------- */
/*                               Piglin Responses                             */
/* -------------------------------------------------------------------------- */
const _InitDbbResponses = (villageId) => {
    BASE_InitPiglinStructureDamagedResponse(villageId, [
        { snippetName: "sd_dbb_portal_damaged_phase0", debounceTimer: 60, healthThreshold: dbbVal.portalHealthThreshold.zero, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] },
        { snippetName: "sd_dbb_portal_damaged_phase1", debounceTimer: 60, healthThreshold: dbbVal.portalHealthThreshold.first, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] },
        { snippetName: "sd_dbb_portal_damaged_phase2", debounceTimer: 60, healthThreshold: dbbVal.portalHealthThreshold.second, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] },
        { snippetName: "sd_dbb_portal_damaged_phase3", debounceTimer: 60, healthThreshold: dbbVal.portalHealthThreshold.third, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] },
        { snippetName: "sd_dbb_portal_damaged_phase4", debounceTimer: 60, healthThreshold: dbbVal.portalHealthThreshold.fourth, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] },
        { snippetName: "sd_dbb_portal_damaged_40", debounceTimer: 60, healthThreshold: dbbVal.portalHealthThreshold.fourty, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] },
        { snippetName: "sd_dbb_portal_damaged_phase5", debounceTimer: 60, healthThreshold: dbbVal.portalHealthThreshold.fifth, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] }
    ])
    BASE_InitPiglinStructureDestroyedResponse(villageId, [
        { snippetName: "sk_dbb_inner_wall_structure_response", debounceTimer: 30, includeTags: ["piglin_wall_inner"] },

        { snippetName: "sk_dbb_tier_1_structure_response", debounceTimer: 30, includeTags: ["piglin", "barracks"] },
        { snippetName: "sk_dbb_tier_1_structure_response", debounceTimer: 30, includeTags: ["pigGoldMine"] },
        { snippetName: "sk_dbb_tier_1_structure_response", debounceTimer: 30, includeTags: ["pigSpreader"] }
    ])
}

/*-----------------------Portal Responses-----------------------*/

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_dbb_portal_damaged_phase0", (villageId, portal) => {
    _DbbPortalDamagedResponse(portal, 0)
    IncrementGlobal(dbbVal.global.DBBHasDamagedPortalAtLeastOnce)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_dbb_portal_damaged_phase1", (villageId, portal) => {
    _DbbPortalDamagedResponse(portal, 1)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_dbb_portal_damaged_phase2", (villageId, portal) => {
    _DbbPortalDamagedResponse(portal, 2)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_dbb_portal_damaged_phase3", (villageId, portal) => {
    _DbbPortalDamagedResponse(portal, 3)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_dbb_portal_damaged_40", (villageId, portal) => {
    _DbbPortalDamagedResponse(portal, 4)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_dbb_portal_damaged_phase4", (villageId, portal) => {
    _DbbPortalDamagedResponse(portal, 5)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_dbb_portal_damaged_phase5", (villageId, portal) => {
    _DbbPortalDamagedResponse(portal, 6)
})

const _DbbPortalDamagedResponse = (portal, phase) => {
    const villageId = QUERY_GetVillageIDFromEntity(portal)

    switch (phase) {
        case 0:
            _genericDBBResponse(dbbVal.responses.healthHigh, villageId)
            TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_PORTAL90PERCENTDBB)
            break
        case 1:
            _genericDBBResponse(dbbVal.responses.healthMedium, villageId)
            TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_PORTAL75PERCENTDBB)

            if (DoOnce(dbbVal.global.DBBportalGuardExists)) {
                _SpawnPortalGuard(villageId, portal)
            }

            break
        case 2:
            _genericDBBResponse(dbbVal.responses.healthMediumToLow, villageId)
            PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_DBB, "keepGoing"), portal)
            break
        case 3:
            _genericDBBResponse(dbbVal.responses.healthLow, villageId)

            TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_PORTAL50PERCENTDBB)
            break
        case 4:
            PlayCommonPortalHealthGroup2VO(villageId)
            break
        case 5:
            _genericDBBResponse(dbbVal.responses.healthAlmostDead, villageId)

            SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DBBFaction, 4)
            SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_DISRUPTOR, DisruptorBarracksConfig_DBBFaction, 4)
            SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DBBFaction, 4)

            _SendAllNonBossPiglinsToTargetDBB(villageId, portal)

            TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_PORTAL25PERCENTDBB)
            break
        case 6:
            PlayPresentationActionToAll("main_corrupted_beacon_base_destroyed")
            break
        default:
            break
    }
    Once()
}

/*-----------------------Piglin Structure Responses-----------------------*/

BASE_DeclarePiglinStructureDestroyedResponseHandler("sk_dbb_inner_wall_structure_response", (villageId, _structure) => {
    const portal = GetVillagePortal(villageId)
    const villageEntity = GetVillageEntityFromID(villageId)

    _DBBInitialEscalation(GetVillageEntityFromID(villageId))
    if (DoOnce(dbbVal.global.DBBlavaLauncherExists)) {
        //play escalation VO
        PlayPresentationActionToClosePlayers(dbbVal.VO.dbbEscalation1, villageEntity)
        _SpawnLavaLauncher(villageId, portal)

        //kick music to phase 3 post wall breach
        SetAudioPhaseForBase(villageId, dbbVal.audioPerPhaseArray[2])
    }

    _genericDBBResponse(dbbVal.responses.innerWall, villageId)
})

BASE_DeclarePiglinStructureDestroyedResponseHandler("sk_dbb_tier_1_structure_response", (villageId, _structure) => {
    _genericDBBResponse(dbbVal.responses.keyBuilding, villageId)
})

BASE_DeclarePiglinStructureDestroyedResponseHandler("sk_act_1_c_gate_breached_structure_response", (villageId, _structure) => {
    const villageEntity = GetVillageEntityFromID(villageId)
    PlayPresentationActionToClosePlayers(act1FlowVal.threePiglinCamps.vo.lavaMoatGateBreached, villageEntity)
    Once()
})

/* -------------------------------------------------------------------------- */
/*                               End Piglin Responses                             */
/* -------------------------------------------------------------------------- */

//Move ally mobs to player built structures
const _SendMobToHelpPlayers = (mob) => {
    const players = GetPlayers()
    const closestPlayer = FILTER_ByClosest(FILTER_ByDistance(players, mob, 200), mob, 1)
    const playerStructures = FILTER_ByTagFilter(GetPlayerStructures(), ["buildable"], ["mob"])
    const closestPlayerBuildingToMob = FILTER_ByClosest(FILTER_ByDistance(playerStructures, mob, 175), mob, 1)
    const closestAllyBarracksToPlayer = FILTER_ByClosest(FILTER_ByDistance(QUERY_GetEntitiesWithTags(["db_ally_spawner"]), closestPlayer, 200), closestPlayer, 1)
    if (HasEntities(players)) {
        if (IsAnyNear(closestPlayer, mob, 75)) {
            OUTPUT_Move(mob, closestPlayer, RandomIntFromInterval(1, 3), CALLBACK_NONE)
        } else {
            if (HasEntities(closestPlayerBuildingToMob)) {
                OUTPUT_Move(mob, closestPlayerBuildingToMob, RandomIntFromInterval(2, 5), CALLBACK_NONE)
            } else if (HasEntities(closestAllyBarracksToPlayer)) {
                OUTPUT_Move(mob, closestAllyBarracksToPlayer, RandomIntFromInterval(1, 7), CALLBACK_NONE)
            } else {
                OUTPUT_Move(mob, closestPlayer, RandomIntFromInterval(2, 5), CALLBACK_NONE)
            }
        }
    } else {
    }
}

const _DBBFactionMakeAct1BaseNetherSpreaders = () => {
    const baseDeck = DECK_Empty()
    const firstZone = ZonesCard("addZone", 2)
    DECK_MultiplyByMultipleRules(firstZone, [PlacementPreferenceCard("clearResourcesInZone")])

    const spreaderLOZ = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(spreaderLOZ, [ZoneTagCard("attackRing2"), PlacementPreferenceCard("clearResourcesInZone")])

    const barracks = BuildableCard("addSiegerBarracks", 2)
    DECK_MultiplyByMultipleRules(barracks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeRandomly"), HeartCard(), TagCard("heartBuildable")])
    DECK_Shuffle(barracks)

    const SpreaderNE = BuildableCard("netherSpreader", 1)
    DECK_MultiplyByMultipleRules(SpreaderNE, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways"), ForceBuildingPlacementCard("forceBuildingPlacement"), HeartCard(), TagCard("heartBuildable")])

    const SpreaderSE = BuildableCard("netherSpreader", 1)
    DECK_MultiplyByMultipleRules(SpreaderSE, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways"), ForceBuildingPlacementCard("forceBuildingPlacement"), HeartCard(), TagCard("heartBuildable")])

    const SpreaderSW = BuildableCard("netherSpreader", 1)
    DECK_MultiplyByMultipleRules(SpreaderSW, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways"), ForceBuildingPlacementCard("forceBuildingPlacement"), HeartCard(), TagCard("heartBuildable")])

    //const SpreaderNW = BuildableCard("netherSpreader", 1)
    //DECK_MultiplyByMultipleRules(SpreaderNW, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionNorthWestWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways"), ForceBuildingPlacementCard("forceBuildingPlacement"), HeartCard(), TagCard("heartBuildable")])

    //zones
    DECK_PutOnBottomOf(firstZone, baseDeck)
    DECK_PutOnBottomOf(spreaderLOZ, baseDeck)

    //buildings
    DECK_PutOnBottomOf(barracks, baseDeck)
    DECK_PutOnBottomOf(SpreaderNE, baseDeck)
    DECK_PutOnBottomOf(SpreaderSE, baseDeck)
    DECK_PutOnBottomOf(SpreaderSW, baseDeck)
    //DECK_PutOnBottomOf(SpreaderNW, baseDeck)

    return baseDeck
}

const _DBBFactionMakeAct1FirstSkirmish = () => {
    const baseDeck = DECK_Empty()

    const firstZone = ZonesCard("addZone", 3)

    const primaryLOZ = LayerOfZonesCard("addLayerOfZones", 2)

    const barracks = BuildableCard("addFighterBarracks", 3)
    DECK_MultiplyByMultipleRules(barracks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeRandomly"), HeartCard()])
    DECK_Shuffle(barracks)

    //zones
    DECK_PutOnBottomOf(firstZone, baseDeck)
    DECK_PutOnBottomOf(primaryLOZ, baseDeck)

    //buildings
    DECK_PutOnBottomOf(barracks, baseDeck)

    return baseDeck
}

const _DBBFactionMakeAct1SecondSkirmish = () => {
    const baseDeck = DECK_Empty()

    const firstZone = ZonesCard("addZone", 1)

    const primaryLOZ = LayerOfZonesCard("addLayerOfZones", 2)

    const barracks = BuildableCard("addFighterBarracks", 6)
    DECK_MultiplyByMultipleRules(barracks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeRandomly"), HeartCard()])
    DECK_Shuffle(barracks)

    //zones
    DECK_PutOnBottomOf(firstZone, baseDeck)
    DECK_PutOnBottomOf(primaryLOZ, baseDeck)

    //buildings
    DECK_PutOnBottomOf(barracks, baseDeck)

    return baseDeck
}

const _DBBFactionMakeAct1LargeBase = () => {
    const baseDeck = DECK_Empty()
    //PORTAL------------------------------------------------------------------------
    const portal = BuildableCard("onboardingGenericMarker", 1)
    DECK_MultiplyByMultipleRules(portal, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways"), ForceBuildingPlacementCard("forceBuildingPlacement")])
    DECK_PutOnBottomOf(portal, baseDeck)
    return baseDeck
}

const _DBBFactionMakeAct1RaisedTowerCamp = (_villageId, _variant) => {
    //stair reachable raised platform
    //2 barracks on top of platform
    //arrow towers ring on the platform edge
    //when player reaches platform, units attack player
    //units stay on platform always
    //grunters

    const baseDeck = DECK_Empty()
    //center zone
    const act1TowerCampCenterZone = ZonesCard("addZone", 8)
    DECK_MultiplyByMultipleRules(act1TowerCampCenterZone, [ZoneHeightChangeCard("act1camp9height"), ZoneTagCard("act1TowerCampCenterZones"), PlacementPreferenceCard("clearResourcesInZone")])

    const genericMarker = BuildableCard("onboardingGenericMarker")
    DECK_MultiplyByMultipleRules(genericMarker, [ZoneTagCard("act1TowerCampCenterZones"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    //platform layer
    const act1TowerCampLayerOfZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(act1TowerCampLayerOfZones, [PlacementPreferenceCard("clearResourcesInZone")])

    //ground layer
    const act1TowerCampLayerOfZonesGround = LayerOfZonesCard("addLayerOfZones", 1)

    //barracks deck
    const act1TowerCampBarracks = BuildableCard("addSiegerBarracks", 1)
    DECK_MultiplyByMultipleRules(act1TowerCampBarracks, [ZoneFilterCard("placeInsideVillageAlways"), HeartCard(), ZoneFilterCard("act1TowerCampCenterZones"), TagCard("heartBuildable")])

    const act1TowerCampEastTower = BuildableCard("piglinTower", 1)
    DECK_MultiplyByMultipleRules(act1TowerCampEastTower, [ZoneFilterCard("placeInsideVillageAlways"), HeartCard(), ZoneFilterCard("act1TowerCampCenterZones"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush48"), TagCard("heartBuildable")])

    const act1TowerCampWestTower = BuildableCard("piglinTower", 1)
    DECK_MultiplyByMultipleRules(act1TowerCampWestTower, [ZoneFilterCard("placeInsideVillageAlways"), HeartCard(), ZoneFilterCard("act1TowerCampCenterZones"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush48"), TagCard("heartBuildable")])

    //Decks Played Order
    //zones
    DECK_PutOnBottomOf(act1TowerCampCenterZone, baseDeck)
    DECK_PutOnBottomOf(act1TowerCampLayerOfZones, baseDeck)
    DECK_PutOnBottomOf(act1TowerCampLayerOfZonesGround, baseDeck)
    //weathering
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)
    //Place the structures
    DECK_PutOnBottomOf(genericMarker, baseDeck)
    DECK_PutOnBottomOf(act1TowerCampBarracks, baseDeck)
    //DECK_PutOnBottomOf(act1TowerCampNorthTower, baseDeck)
    //DECK_PutOnBottomOf(act1TowerCampSouthTower, baseDeck)
    DECK_PutOnBottomOf(act1TowerCampEastTower, baseDeck)
    DECK_PutOnBottomOf(act1TowerCampWestTower, baseDeck)

    return baseDeck
}

const _DBBFactionMakeAct1NonPortalAttackBase = (_villageId, _variant) => {
    const baseDeck = DECK_Empty()

    /*const lavaZones = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(lavaZones, [ZoneTagCard("lava_option"), ZoneHeightChangeCard("OneDown"), ZoneFilterCard("placeInsideVillageAlways")])

    const northZones = ZonesCard("addZone", 10)
    DECK_MultiplyByMultipleRules(northZones, [ZoneTagCard("attackRing0"), ZoneHeightChangeCard("elementHeight13"), PlacementPreferenceCard("placeInDirectionNorthWestWithRectangleBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways")])

    const spacerzoneWest = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(spacerzoneWest, [ZoneTagCard("dbbBridgeConnect")])*/

    //const spacerzoneEast = ZonesCard("addZone", 3)
    //DECK_MultiplyByMultipleRules(spacerzoneEast, [ZoneTagCard("dbbBridgeConnect1"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")])

    const centerZone = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(centerZone, [ZoneTagCard("attackRing0"), ZoneHeightChangeCard("elementHeight10"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("clearResourcesInZone")])

    const centerZoneWest = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(centerZoneWest, [ZoneTagCard("attackRing0"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), ZoneHeightChangeCard("elementHeight10"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("clearResourcesInZone")])

    const centerZoneEast = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(centerZoneEast, [ZoneTagCard("attackRing0"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), ZoneHeightChangeCard("elementHeight10"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("clearResourcesInZone")])

    const centerZoneNorth = ZonesCard("addZone", 3)
    DECK_MultiplyByMultipleRules(centerZoneNorth, [ZoneTagCard("attackRing3"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), ZoneHeightChangeCard("elementHeight13"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("clearResourcesInZone")])

    const centerZoneSouth = ZonesCard("addZone", 3)
    DECK_MultiplyByMultipleRules(centerZoneSouth, [ZoneTagCard("attackRing4"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), ZoneHeightChangeCard("elementHeight13"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("clearResourcesInZone")])

    const lavaPools = MoatCard("act1SecondSkirmishMoat")
    const northPathStartZone = ZonesCard("addZone", 3)
    DECK_MultiplyByMultipleRules(northPathStartZone, [ZoneTagCard("attackRing1"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    const southPathStartZone = ZonesCard("addZone", 3)
    DECK_MultiplyByMultipleRules(southPathStartZone, [ZoneTagCard("attackRing2"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush")])

    const layer1 = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(layer1, [ZoneTagCard("attackRing5")])

    const ring0Barracks = BuildableCard("addFighterBarracks", 1)
    DECK_MultiplyByMultipleRules(ring0Barracks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneFilterCard("attackRing0"), ZoneFilterCard("placeInsideVillageAlways"), TagCard("heartBuildable"), HeartCard()])
    const ring1Barracks = BuildableCard("addFighterBarracks", 1)
    DECK_MultiplyByMultipleRules(ring1Barracks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneFilterCard("attackRing0"), ZoneFilterCard("placeInsideVillageAlways"), TagCard("heartBuildable"), HeartCard()])
    const tower0 = BuildableCard("piglinTower", 1)
    DECK_MultiplyByMultipleRules(tower0, [ZoneFilterCard("attackRing3"), ZoneFilterCard("placeInsideVillageAlways"), TagCard("heartBuildable"), HeartCard()])
    const tower1 = BuildableCard("piglinTower", 1)
    DECK_MultiplyByMultipleRules(tower1, [ZoneFilterCard("attackRing4"), ZoneFilterCard("placeInsideVillageAlways"), TagCard("heartBuildable"), HeartCard()])

    const tower2 = BuildableCard("piglinTower", 1)
    DECK_MultiplyByMultipleRules(tower2, [ZoneFilterCard("attackRing5"), ZoneFilterCard("placeInsideVillageAlways"), TagCard("heartBuildable"), HeartCard()])

    const spreader = BuildableCard("netherSpreader", 1)
    DECK_MultiplyByMultipleRules(spreader, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("attackRing0"), ZoneFilterCard("placeInsideVillageAlways"), TagCard("heartBuildable"), HeartCard()])

    //const lavaPools = MoatCard("act1SecondSkirmishMoat")

    //----------------------------------------------------------
    //Place the zones
    //const layer = LayerOfZonesCard("addLayerOfZones", 2)

    /*DECK_PutOnBottomOf(lavaZones, baseDeck)
    DECK_PutOnBottomOf(lavaPools, baseDeck)

    DECK_PutOnBottomOf(northZones, baseDeck)
    //DECK_PutOnBottomOf(layer, baseDeck)
    DECK_PutOnBottomOf(spacerzoneWest, baseDeck)*/
    DECK_PutOnBottomOf(centerZone, baseDeck)
    DECK_PutOnBottomOf(centerZoneWest, baseDeck)
    DECK_PutOnBottomOf(centerZoneEast, baseDeck)
    DECK_PutOnBottomOf(lavaPools, baseDeck)
    DECK_PutOnBottomOf(centerZoneNorth, baseDeck)
    DECK_PutOnBottomOf(centerZoneSouth, baseDeck)
    DECK_PutOnBottomOf(layer1, baseDeck)
    DECK_PutOnBottomOf(northPathStartZone, baseDeck)
    DECK_PutOnBottomOf(southPathStartZone, baseDeck)

    DECK_PutOnBottomOf(ring0Barracks, baseDeck)
    DECK_PutOnBottomOf(ring1Barracks, baseDeck)
    DECK_PutOnBottomOf(spreader, baseDeck)
    DECK_PutOnBottomOf(tower0, baseDeck)
    DECK_PutOnBottomOf(tower1, baseDeck)
    DECK_PutOnBottomOf(tower2, baseDeck)

    //Place the terrain weathering
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    const northPathStartRules = [PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), ZoneFilterCard("attackRing1")]
    const northPathEndRules = [ZoneFilterCard("attackRing3"), PlacementPreferenceCard("placeFarFromVillageStart")]
    CreatePathRequestOnBottomOf("dbb_district_path", northPathStartRules, northPathEndRules, baseDeck)

    const southPathStartRules = [PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), ZoneFilterCard("attackRing2")]
    const southPathEndRules = [ZoneFilterCard("attackRing4"), PlacementPreferenceCard("placeFarFromVillageStart")]
    CreatePathRequestOnBottomOf("dbb_district_path", southPathStartRules, southPathEndRules, baseDeck)

    /*const westPathStartRules = [PlacementPreferenceCard("closeToDistrictStart"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), ZoneFilterCard("attackRing0"), ForceBuildingPlacementCard("forceBuildingPlacement")]
    const westPathEndRules = [ZoneFilterCard("dbbBridgeConnect"), ForceBuildingPlacementCard("forceBuildingPlacement")]
    CreatePathRequestOnBottomOf("dbb_district_path", westPathStartRules, westPathEndRules, baseDeck)*/

    /*const eastPathStartRules = [PlacementPreferenceCard("closeToDistrictStart"), ZoneFilterCard("attackRing0"), ForceBuildingPlacementCard("forceBuildingPlacement")]
    const eastPathEndRules = [ZoneFilterCard("dbbBridgeConnect"), ForceBuildingPlacementCard("forceBuildingPlacement")]
    CreatePathRequestOnBottomOf("dbb_district_path", eastPathStartRules, eastPathEndRules, baseDeck)*/

    const cages0 = BuildableCard("mobCage", 1)
    DECK_MultiplyByMultipleRules(cages0, [PlacementPreferenceCard(PLACEMENT_RANDOM), ZoneFilterCard("attackRing5"), ZoneFilterCard("placeInsideVillageAlways"), TagCard("villageCage")])
    const cages1 = BuildableCard("mobCage", 1)
    DECK_MultiplyByMultipleRules(cages1, [PlacementPreferenceCard(PLACEMENT_RANDOM), ZoneFilterCard("attackRing5"), ZoneFilterCard("placeInsideVillageAlways"), TagCard("villageCage")])
    DECK_PutOnBottomOf(cages0, baseDeck)
    DECK_PutOnBottomOf(cages1, baseDeck)

    return baseDeck
}

const _DBBFactionMakeAct1WallsMoatsMedicsCamp = (_villageId, _variant) => {
    //Small group of square zones
    //walls with cardinal direction gates
    //moat surrounds walls
    //inside walls are 3 barracks
    //grunters/medics/runts

    const baseDeck = DECK_Empty()
    //INITIAL ZONES------------------------------------------------------------------------
    const act1LavaCampCenterZone = ZonesCard("addZone", 3)
    DECK_MultiplyByMultipleRules(act1LavaCampCenterZone, [ZoneHeightChangeCard("act1camp3height"), ZoneTagCard("act1LavaCampCenterZones"), PlacementPreferenceCard("clearResourcesInZone")])

    const act1LavaCampLayerOfZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(act1LavaCampLayerOfZones, [ZoneHeightChangeCard("act1camp3height"), ZoneTagCard("act1LavaCampCenterZones"), PlacementPreferenceCard("clearResourcesInZone")])

    const act1LavaCampSpacingLayersOfZones1 = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(act1LavaCampSpacingLayersOfZones1, [ZoneTagCard("act1LavaCampPathZone")])

    const act1LavaCampLavaMoat = MoatCard("act1LavaCampMoat")

    const act1LavaCampSpacingLayersOfZones2 = LayerOfZonesCard("addLayerOfZones", 2)

    const northPathStartRules = [PlacementPreferenceCard("closeToDistrictStart")]
    const northPathEndRules = [ZoneFilterCard("act1LavaCampPathZone"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush48")]

    const southPathStartRules = [PlacementPreferenceCard("closeToDistrictStart")]
    const southPathEndRules = [ZoneFilterCard("act1LavaCampPathZone"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush48")]

    const eastPathStartRules = [PlacementPreferenceCard("closeToDistrictStart")]
    const eastPathEndRules = [ZoneFilterCard("act1LavaCampPathZone"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush48")]

    const westPathStartRules = [PlacementPreferenceCard("closeToDistrictStart")]
    const westPathEndRules = [ZoneFilterCard("act1LavaCampPathZone"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush48")]

    //barracks deck
    const act1LavaCampBarracks = DECK_Empty()
    DECK_PutOnBottomOf(BuildableCard("addFighterBarracks", 2), act1LavaCampBarracks)
    DECK_MultiplyByMultipleRules(act1LavaCampBarracks, [HeartCard(), ZoneFilterCard("placeInsideVillageAlways"), ZoneFilterCard("act1LavaCampCenterZones"), TagCard("heartBuildable")])

    //Decks Played Order
    //zones
    DECK_PutOnBottomOf(act1LavaCampCenterZone, baseDeck)
    DECK_PutOnBottomOf(act1LavaCampLayerOfZones, baseDeck)
    //Lava Moat
    DECK_PutOnBottomOf(act1LavaCampLavaMoat, baseDeck)
    //zones cont'd
    DECK_PutOnBottomOf(act1LavaCampSpacingLayersOfZones1, baseDeck)
    DECK_PutOnBottomOf(act1LavaCampSpacingLayersOfZones2, baseDeck)
    //weathering
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)
    //paths
    CreatePathRequestOnBottomOf("defend_district_path", northPathStartRules, northPathEndRules, baseDeck)
    CreatePathRequestOnBottomOf("defend_district_path", southPathStartRules, southPathEndRules, baseDeck)
    CreatePathRequestOnBottomOf("defend_district_path", eastPathStartRules, eastPathEndRules, baseDeck)
    CreatePathRequestOnBottomOf("defend_district_path", westPathStartRules, westPathEndRules, baseDeck)
    //walls
    const act1LavaCampWalls = WallsCard("act1LavaCampWalls")
    DECK_MultiplyByMultipleRules(act1LavaCampWalls, [ZoneFilterCard("act1LavaCampCenterZones")])
    DECK_PutOnBottomOf(act1LavaCampWalls, baseDeck)
    //Place the structures
    DECK_PutOnBottomOf(act1LavaCampBarracks, baseDeck)

    return baseDeck
}

const _DBBFactionMakeDarkBeaconBase = (_villageId, variant) => {
    const baseDeck = DECK_Empty()

    //INITIAL ZONES------------------------------------------------------------------------

    const darkBeaconCenterzones = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(darkBeaconCenterzones, [ZoneTagCard("centerZone"), ZoneTagCard("dbWallZoneInner"), ZoneHeightChangeCard("dbb9Height")])

    const darkBeaconCenterLayer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(darkBeaconCenterLayer, [ZoneTagCard("centerZone"), ZoneTagCard("dbWallZoneInner"), ZoneHeightChangeCard("dbb9Height")])

    //additional portal zone
    const portalRing = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(portalRing, [ZoneTagCard("dbWallZoneInner"), ZoneFilterCard("placeInsideVillageAlways") /*, PlacementPreferenceCard(PLACEMENT_RANDOM)*/, ZoneHeightChangeCard("dbb7Height")])

    //PORTAL------------------------------------------------------------------------
    const portal = BuildableCard("addPortalDarkBeacon")
    DECK_MultiplyByMultipleRules(portal, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("centerZone"), ZoneFilterCard("placeInsideVillageAlways"), ForceBuildingPlacementCard("forceBuildingPlacement")])

    let ringPortalBarracks

    if (variant === 1) {
        // Can only ever have Runts and Warboars, as we are removing Grunters from the DBB (at least for now)
        //fighter, sieger
        ringPortalBarracks = DECK_Stack(BuildableCard("addFighterBarracks", 1), BuildableCard("addSiegerBarracks", 1))
    } else if (variant === 2) {
        //fighter, sieger
        ringPortalBarracks = DECK_Stack(BuildableCard("addFighterBarracks", 1), BuildableCard("addSiegerBarracks", 1))
    } else if (variant === 3) {
        //fighter, disruptor
        //fighter, disrupto
        ringPortalBarracks = DECK_Stack(BuildableCard("addFighterBarracks", 1), BuildableCard("addSiegerBarracks", 1))
    }

    const rallyingPoints = DECK_Empty()
    const offensiveRally = BuildableCard("dbbRallyPoint", 1)
    DECK_MultiplyByMultipleRules(offensiveRally, [TagCard("dbbOffensiveRally")])
    DECK_PutOnBottomOf(offensiveRally, rallyingPoints)
    const defensiveRally = BuildableCard("dbbRallyPoint", 1)
    DECK_MultiplyByMultipleRules(defensiveRally, [TagCard("dbbDefensiveRally")])
    DECK_PutOnBottomOf(defensiveRally, rallyingPoints)
    DECK_MultiplyByMultipleRules(rallyingPoints, [ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("dbWallZoneInner"), ZoneFilterCard("placeInsideVillageAlways")])

    const encounterTowerNorth = BuildableCard("piglinTower", 1)
    DECK_MultiplyByMultipleRules(encounterTowerNorth, [TagCard(dbbDiscreteEncounters.ourTower.buildableTag)])
    const encounterTowerSouth = BuildableCard("piglinTower", 1)
    DECK_MultiplyByMultipleRules(encounterTowerSouth, [TagCard(dbbDiscreteEncounters.ourTower.buildableTag)])
    const encounterTowerSouth1 = BuildableCard("piglinTower", 1)
    DECK_MultiplyByMultipleRules(encounterTowerSouth1, [TagCard(dbbDiscreteEncounters.ourTower.buildableTag)])
    const encounterTowerSouth2 = BuildableCard("piglinTower", 1)
    DECK_MultiplyByMultipleRules(encounterTowerSouth2, [TagCard(dbbDiscreteEncounters.ourTower.buildableTag)])

    const ringPortalBuildingsNorth = DECK_Stack(encounterTowerNorth, BuildableCard("netherSpreader", 1))
    const ringPortalBuildingsSouth = DECK_Stack(encounterTowerSouth, BuildableCard("netherSpreader", 1))
    const ringPortalBuildingsEast = DECK_Stack(encounterTowerSouth1, BuildableCard("netherSpreader", 1))
    const ringPortalBuildingsWest = DECK_Stack(encounterTowerSouth2, BuildableCard("netherSpreader", 1))
    DECK_MultiplyByMultipleRules(ringPortalBuildingsNorth, [ZoneFilterCard("dbWallZoneInner"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")]) //, PlacementPreferenceCard(PLACEMENT_RANDOM)])
    DECK_MultiplyByMultipleRules(ringPortalBuildingsSouth, [ZoneFilterCard("dbWallZoneInner"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")]) //, PlacementPreferenceCard(PLACEMENT_RANDOM)])
    DECK_MultiplyByMultipleRules(ringPortalBuildingsEast, [ZoneFilterCard("dbWallZoneInner"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")]) //, PlacementPreferenceCard(PLACEMENT_RANDOM)])
    DECK_MultiplyByMultipleRules(ringPortalBuildingsWest, [ZoneFilterCard("dbWallZoneInner"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")]) //, PlacementPreferenceCard(PLACEMENT_RANDOM)])
    DECK_Shuffle(ringPortalBuildingsNorth)
    DECK_Shuffle(ringPortalBuildingsSouth)
    DECK_Shuffle(ringPortalBuildingsEast)
    DECK_Shuffle(ringPortalBuildingsWest)

    //RING ONE------------------------------------------------------------------------
    const ring1Zones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(ring1Zones, [ZoneTagCard("dbWallZoneInner"), ZoneTagCard("attackRing1"), ZoneHeightChangeCard("dbb5Height")])

    const ring1BuildingsNorth = DECK_Stack(DECK_Stack(BuildableCard("netherSpreader", 1), ringPortalBarracks), BuildableCard("piglinTower", 1))
    const ring1BuildingsSouth = DECK_Stack(DECK_Stack(BuildableCard("netherSpreader", 1), ringPortalBarracks), BuildableCard("piglinTower", 1))
    const ring1BuildingsEast = DECK_Stack(DECK_Stack(BuildableCard("netherSpreader", 1), ringPortalBarracks), BuildableCard("piglinTower", 1))
    const ring1BuildingsWest = DECK_Stack(DECK_Stack(BuildableCard("netherSpreader", 1), ringPortalBarracks), BuildableCard("piglinTower", 1))
    DECK_MultiplyByMultipleRules(ring1BuildingsNorth, [ZoneFilterCard("attackRing1"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_MultiplyByMultipleRules(ring1BuildingsSouth, [ZoneFilterCard("attackRing1"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_MultiplyByMultipleRules(ring1BuildingsEast, [ZoneFilterCard("attackRing1"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_MultiplyByMultipleRules(ring1BuildingsWest, [ZoneFilterCard("attackRing1"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_Shuffle(ring1BuildingsNorth)
    DECK_Shuffle(ring1BuildingsSouth)
    DECK_Shuffle(ring1BuildingsEast)
    DECK_Shuffle(ring1BuildingsWest)

    //RING TWO------------------------------------------------------------------------
    const ring2Zones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(ring2Zones, [ZoneTagCard("attackRing2"), ZoneHeightChangeCard("dbb5Height")])

    let ring2Barracks

    if (variant === 1) {
        // Removing Grunters, and keeping Runts and Warboars
        //fighter, sieger
        ring2Barracks = DECK_Stack(BuildableCard("addFighterBarracks", 2), BuildableCard("addSiegerBarracks", 1))
    } else if (variant === 2) {
        //fighter, sieger
        ring2Barracks = DECK_Stack(BuildableCard("addFighterBarracks", 2), BuildableCard("addSiegerBarracks", 1))
    } else if (variant === 3) {
        //fighter, disruptor
        //fighter, disrupto
        ring2Barracks = DECK_Stack(BuildableCard("addFighterBarracks", 2), BuildableCard("addSiegerBarracks", 1))
    }

    const ring2BuildingsNorth = DECK_Stack(ring2Barracks, BuildableCard("netherSpreader", 1))
    const ring2BuildingsSouth = DECK_Stack(ring2Barracks, BuildableCard("netherSpreader", 1))
    const ring2BuildingsEast = DECK_Stack(ring2Barracks, BuildableCard("netherSpreader", 1))
    const ring2BuildingsWest = DECK_Stack(ring2Barracks, BuildableCard("netherSpreader", 1))
    DECK_MultiplyByMultipleRules(ring2BuildingsNorth, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")]) //, PlacementPreferenceCard(PLACEMENT_RANDOM)])
    DECK_MultiplyByMultipleRules(ring2BuildingsSouth, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")]) //, PlacementPreferenceCard(PLACEMENT_RANDOM)])
    DECK_MultiplyByMultipleRules(ring2BuildingsEast, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")]) //, PlacementPreferenceCard(PLACEMENT_RANDOM)])
    DECK_MultiplyByMultipleRules(ring2BuildingsWest, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), ZoneFilterCard("placeInsideVillageAlways")]) //, PlacementPreferenceCard(PLACEMENT_RANDOM)])
    DECK_Shuffle(ring2BuildingsNorth)
    DECK_Shuffle(ring2BuildingsSouth)
    DECK_Shuffle(ring2BuildingsEast)
    DECK_Shuffle(ring2BuildingsWest)

    //RING 4
    const ring4Zones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(ring4Zones, [ZoneTagCard("attackRing4") /*, ZoneHeightChangeCard("def2Height")*/])

    let ring4Barracks

    if (variant === 1) {
        // Removing Grunters, and keeping Runts and Warboars
        //fighter, sieger
        ring4Barracks = DECK_Stack(BuildableCard("addFighterBarracks", 2), BuildableCard("addSiegerBarracks", 2))
    } else if (variant === 2) {
        //fighter, sieger
        ring4Barracks = DECK_Stack(BuildableCard("addFighterBarracks", 2), BuildableCard("addSiegerBarracks", 2))
    } else if (variant === 3) {
        //fighter, disruptor
        //fighter, disrupto
        ring4Barracks = DECK_Stack(BuildableCard("addFighterBarracks", 2), BuildableCard("addSiegerBarracks", 2))
    }

    const ring4BuildingsNorth = DECK_Stack(BuildableCard("netherSpreader", 1), ring4Barracks)
    const ring4BuildingsNorthWest = DECK_DuplicateDeck(ring4Barracks)
    const ring4BuildingsNorthEast = DECK_DuplicateDeck(ring4Barracks)
    const ring4BuildingsSouth = DECK_Stack(BuildableCard("netherSpreader", 1), ring4Barracks)
    const ring4BuildingsSouthWest = DECK_DuplicateDeck(ring4Barracks)
    const ring4BuildingsSouthEast = DECK_DuplicateDeck(ring4Barracks)

    const encounterNetherSpreaderEast = BuildableCard("netherSpreader", 1)
    DECK_MultiplyByMultipleRules(encounterNetherSpreaderEast, [TagCard(dbbDiscreteEncounters.netheredBlaze.buildableTag)])
    const encounterNetherSpreaderWest = BuildableCard("netherSpreader", 1)
    DECK_MultiplyByMultipleRules(encounterNetherSpreaderWest, [TagCard(dbbDiscreteEncounters.netheredBlaze.buildableTag), PlacementPreferenceCard("placeFarFromNetherSpreader")])

    const ring4BuildingsEast = DECK_Stack(encounterNetherSpreaderEast, ring4Barracks)
    const ring4BuildingsWest = DECK_Stack(encounterNetherSpreaderWest, ring4Barracks)
    DECK_MultiplyByMultipleRules(ring4BuildingsNorth, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionNorthWithWedgeBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeFarFromGate")]) //, PlacementPreferenceCard(PLACEMENT_RANDOM)
    DECK_MultiplyByMultipleRules(ring4BuildingsNorthWest, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionNorthWestWithWedgeBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeFarFromGate")]) //, PlacementPreferenceCard(PLACEMENT_RANDOM)
    DECK_MultiplyByMultipleRules(ring4BuildingsNorthEast, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionNorthEastWithWedgeBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeFarFromGate")]) //, PlacementPreferenceCard(PLACEMENT_RANDOM)
    DECK_MultiplyByMultipleRules(ring4BuildingsSouth, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionSouthWithWedgeBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeFarFromGate")]) //, PlacementPreferenceCard(PLACEMENT_RANDOM)
    DECK_MultiplyByMultipleRules(ring4BuildingsSouthWest, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionSouthWestWithWedgeBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeFarFromGate")]) //, PlacementPreferenceCard(PLACEMENT_RANDOM)
    DECK_MultiplyByMultipleRules(ring4BuildingsSouthEast, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionSouthEastWithWedgeBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeFarFromGate")]) //, PlacementPreferenceCard(PLACEMENT_RANDOM)
    DECK_MultiplyByMultipleRules(ring4BuildingsEast, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionEastWithWedgeBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeFarFromGate")]) //, PlacementPreferenceCard(PLACEMENT_RANDOM)
    DECK_MultiplyByMultipleRules(ring4BuildingsWest, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionWestWithWedgeBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeFarFromGate")]) //, PlacementPreferenceCard(PLACEMENT_RANDOM)

    const northSiegeRally = BuildableCard("dbbRallyPoint", 1)
    const southSiegeRally = BuildableCard("dbbRallyPoint", 1)
    const eastSiegeRally = BuildableCard("dbbRallyPoint", 1)
    const westSiegeRally = BuildableCard("dbbRallyPoint", 1)
    DECK_MultiplyByMultipleRules(northSiegeRally, [TagCard("dbbSiegeRally"), ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionNorthWithWedgeBrush")])
    DECK_MultiplyByMultipleRules(southSiegeRally, [TagCard("dbbSiegeRally"), ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionSouthWithWedgeBrush")])
    DECK_MultiplyByMultipleRules(eastSiegeRally, [TagCard("dbbSiegeRally"), ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionEastWithWedgeBrush")])
    DECK_MultiplyByMultipleRules(westSiegeRally, [TagCard("dbbSiegeRally"), ZoneFilterCard("attackRing2"), PlacementPreferenceCard("placeInDirectionWestWithWedgeBrush")])
    DECK_PutOnBottomOf(northSiegeRally, ring4BuildingsNorth)
    DECK_PutOnBottomOf(southSiegeRally, ring4BuildingsSouth)
    DECK_PutOnBottomOf(eastSiegeRally, ring4BuildingsEast)
    DECK_PutOnBottomOf(westSiegeRally, ring4BuildingsWest)

    DECK_Shuffle(ring4BuildingsNorth)
    DECK_Shuffle(ring4BuildingsNorthWest)
    DECK_Shuffle(ring4BuildingsNorthEast)
    DECK_Shuffle(ring4BuildingsSouth)
    DECK_Shuffle(ring4BuildingsSouthWest)
    DECK_Shuffle(ring4BuildingsSouthEast)
    DECK_Shuffle(ring4BuildingsEast)
    DECK_Shuffle(ring4BuildingsWest)

    //Place ally mob spawner markers
    const spacerzone = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(spacerzone, [ZoneTagCard("attackRing4"), ZoneTagCard("dbbBridgeConnect")])

    const allyMobZone = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(allyMobZone, [ZoneTagCard("dbAllySpawnerZone"), ZoneTagCard("dbbBridgeConnect")])

    const allyMobDecks = []

    for (let i = 0; i < 4; ++i) {
        allyMobDecks[i] = DECK_Empty()

        DECK_PutOnTopOf(BuildableCard("spawnerDarkBeaconAllyZombie", 5), allyMobDecks[i])
        DECK_Shuffle(allyMobDecks[i])

        DECK_MultiplyByMultipleRules(allyMobDecks[i], [ZoneFilterCard("dbAllySpawnerZone"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START)])
    }

    DECK_MultiplyByMultipleRules(allyMobDecks[0], [PlacementPreferenceCard("placeInDirectionNorthWithWedgeBrush"), PlacementPreferenceCard("placeFarFromAllyBarracks")])
    DECK_MultiplyByMultipleRules(allyMobDecks[1], [PlacementPreferenceCard("placeInDirectionSouthWithWedgeBrush"), PlacementPreferenceCard("placeFarFromAllyBarracks")])
    DECK_MultiplyByMultipleRules(allyMobDecks[2], [PlacementPreferenceCard("placeInDirectionEastWithWedgeBrush"), PlacementPreferenceCard("placeFarFromAllyBarracks")])
    DECK_MultiplyByMultipleRules(allyMobDecks[3], [PlacementPreferenceCard("placeInDirectionWestWithWedgeBrush"), PlacementPreferenceCard("placeFarFromAllyBarracks")])

    const walls = WallsCard("darkBeaconWallsInner")
    DECK_MultiplyBySingle(walls, ZoneFilterCard("dbWallZoneInner"))

    const cineSpacerZone = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(cineSpacerZone, [ZoneTagCard("attackRing6")])

    //----------------------------------------------------------
    //Place the center zone
    DECK_PutOnBottomOf(darkBeaconCenterzones, baseDeck)
    DECK_PutOnBottomOf(darkBeaconCenterLayer, baseDeck)
    DECK_PutOnBottomOf(portalRing, baseDeck)

    //Place the other zones
    DECK_PutOnBottomOf(ring1Zones, baseDeck)
    //add lava moat
    DECK_PutOnBottomOf(MoatCard("DBBMoat"), baseDeck)
    DECK_PutOnBottomOf(ring2Zones, baseDeck)
    DECK_PutOnBottomOf(ring4Zones, baseDeck)
    DECK_PutOnBottomOf(spacerzone, baseDeck)
    DECK_PutOnBottomOf(allyMobZone, baseDeck)
    DECK_PutOnBottomOf(cineSpacerZone, baseDeck)

    //Place the terrain weathering
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    //Place the paths
    const northPathStartRules = [PlacementPreferenceCard("closeToDistrictStart"), ZoneFilterCard("centerZone")]
    const northPathEndRules = [ZoneFilterCard("dbbBridgeConnect"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), PlacementPreferenceCard("closeToDistrictStart")]
    CreatePathRequestOnBottomOf("dbb_district_path", northPathStartRules, northPathEndRules, baseDeck)

    const northEastPathStartRules = [PlacementPreferenceCard("closeToDistrictStart"), ZoneFilterCard("centerZone")]
    const northEastPathEndRules = [ZoneFilterCard("dbbBridgeConnect"), PlacementPreferenceCard("placeInDirectionNorthEastWithRectangleBrush"), PlacementPreferenceCard("closeToDistrictStart")]
    CreatePathRequestOnBottomOf("dbb_district_path", northEastPathStartRules, northEastPathEndRules, baseDeck)

    const eastPathStartRules = [PlacementPreferenceCard("closeToDistrictStart"), ZoneFilterCard("centerZone")]
    const eastPathEndRules = [ZoneFilterCard("dbbBridgeConnect"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), PlacementPreferenceCard("closeToDistrictStart")]
    CreatePathRequestOnBottomOf("dbb_district_path", eastPathStartRules, eastPathEndRules, baseDeck)

    const southEastPathStartRules = [PlacementPreferenceCard("closeToDistrictStart"), ZoneFilterCard("centerZone")]
    const southEastPathEndRules = [ZoneFilterCard("dbbBridgeConnect"), PlacementPreferenceCard("placeInDirectionSouthEastWithRectangleBrush"), PlacementPreferenceCard("closeToDistrictStart")]
    CreatePathRequestOnBottomOf("dbb_district_path", southEastPathStartRules, southEastPathEndRules, baseDeck)

    const southPathStartRules = [PlacementPreferenceCard("closeToDistrictStart"), ZoneFilterCard("centerZone")]
    const southPathEndRules = [ZoneFilterCard("dbbBridgeConnect"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), PlacementPreferenceCard("closeToDistrictStart")]
    CreatePathRequestOnBottomOf("dbb_district_path", southPathStartRules, southPathEndRules, baseDeck)

    const southWestPathStartRules = [PlacementPreferenceCard("closeToDistrictStart"), ZoneFilterCard("centerZone")]
    const southWestPathEndRules = [ZoneFilterCard("dbbBridgeConnect"), PlacementPreferenceCard("placeInDirectionSouthWestWithRectangleBrush"), PlacementPreferenceCard("closeToDistrictStart")]
    CreatePathRequestOnBottomOf("dbb_district_path", southWestPathStartRules, southWestPathEndRules, baseDeck)

    const westPathStartRules = [PlacementPreferenceCard("closeToDistrictStart"), ZoneFilterCard("centerZone")]
    const westPathEndRules = [ZoneFilterCard("dbbBridgeConnect"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), PlacementPreferenceCard("closeToDistrictStart")]
    CreatePathRequestOnBottomOf("dbb_district_path", westPathStartRules, westPathEndRules, baseDeck)

    const northWestPathStartRules = [PlacementPreferenceCard("closeToDistrictStart"), ZoneFilterCard("centerZone")]
    const northWestPathEndRules = [ZoneFilterCard("dbbBridgeConnect"), PlacementPreferenceCard("placeInDirectionNorthWestWithRectangleBrush"), PlacementPreferenceCard("closeToDistrictStart")]
    CreatePathRequestOnBottomOf("dbb_district_path", northWestPathStartRules, northWestPathEndRules, baseDeck)

    //Place the walls
    DECK_PutOnBottomOf(walls, baseDeck)

    //Place the portal
    DECK_PutOnBottomOf(portal, baseDeck)

    // Place the structures
    DECK_PutOnBottomOf(ringPortalBuildingsNorth, baseDeck)
    DECK_PutOnBottomOf(ringPortalBuildingsSouth, baseDeck)
    DECK_PutOnBottomOf(ringPortalBuildingsEast, baseDeck)
    DECK_PutOnBottomOf(ringPortalBuildingsWest, baseDeck)
    DECK_PutOnBottomOf(rallyingPoints, baseDeck)
    DECK_PutOnBottomOf(ring1BuildingsNorth, baseDeck)
    DECK_PutOnBottomOf(ring1BuildingsSouth, baseDeck)
    DECK_PutOnBottomOf(ring1BuildingsEast, baseDeck)
    DECK_PutOnBottomOf(ring1BuildingsWest, baseDeck)
    DECK_PutOnBottomOf(ring2BuildingsNorth, baseDeck)
    DECK_PutOnBottomOf(ring2BuildingsSouth, baseDeck)
    DECK_PutOnBottomOf(ring2BuildingsEast, baseDeck)
    DECK_PutOnBottomOf(ring2BuildingsWest, baseDeck)
    DECK_PutOnBottomOf(ring4BuildingsNorth, baseDeck)
    DECK_PutOnBottomOf(ring4BuildingsNorthWest, baseDeck)
    DECK_PutOnBottomOf(ring4BuildingsNorthEast, baseDeck)
    DECK_PutOnBottomOf(ring4BuildingsSouth, baseDeck)
    DECK_PutOnBottomOf(ring4BuildingsSouthWest, baseDeck)
    DECK_PutOnBottomOf(ring4BuildingsSouthEast, baseDeck)
    DECK_PutOnBottomOf(ring4BuildingsEast, baseDeck)
    DECK_PutOnBottomOf(ring4BuildingsWest, baseDeck)
    for (let i = 0; i < 4; ++i) {
        DECK_PutOnBottomOf(allyMobDecks[i], baseDeck)
    }

    return baseDeck
}

const isAct1Base = (baseSize) => {
    return baseSize === BASE_SIZE_ACT_1_A || baseSize === BASE_SIZE_ACT_1_B || baseSize === BASE_SIZE_ACT_1_C
}

SetupBaseAIs(dbbVal.aiConfig)

// Used in aaaa_ai_helpers timer
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetDbbRallyPointConfig = (_villageId, controlGroupTag) => {
    return dbbVal.piglinRallyPoints[controlGroupTag]
}
// Used in aaaa_ai_helpers timer
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetDbbAiConfig = () => {
    return dbbVal.aiConfig
}

SNIPPET_VillageFinishedBuilding("vfb_dbb_base_setup", (villageId) => {
    SetupPiglinBase(villageId, dbbVal.baseSetup)

    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    if (baseSize === BASE_SIZE_ACT_1_A || baseSize === BASE_SIZE_ACT_1_B || baseSize === BASE_SIZE_ACT_1_C) {
        LISTENFOR_PlayerEnteredVillage({
            snippet: "pev_act1_three_camps_entered",
            ownerVillageId: villageId,
            villageId: villageId,
            threshold: 1
        })

        LISTENFOR_PlayerExitedVillage({
            snippet: "pexv_act1_three_camps_exited",
            ownerVillageId: villageId,
            villageId: villageId
        })
    }
    Once()
})

SNIPPET_VillageGenerated("vg_dbb_base_generated", (villageId) => {
    LISTENFOR_VillageFinishedBuilding({
        snippet: "vfb_dbb_base_setup",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        villageId: villageId
    })

    /////SET ALLY BARRACKS LEVEL TO 0 - JUST IN CASE
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_ZOMBIE, AllyBarracksConfig_DBBFaction, 0)

    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const villageEntity = GetVillageEntityFromID(villageId)
    let baseDeck = DECK_Empty()

    if (baseSize === BASE_SIZE_DARK_BEACON) {
        const dbbVar = QUERY_GetGlobalVariable(GV_DBB_VARIANT)
        InitializeBaseAIs(villageId, dbbVal.aiConfig, dbbVal.piglinRallyPoints)
        if (dbbVar <= 1) {
            baseDeck = _DBBFactionMakeDarkBeaconBase(villageId, 1)
        } else if (dbbVar === 2) {
            baseDeck = _DBBFactionMakeDarkBeaconBase(villageId, 2)
        } else if (dbbVar === 3) {
            baseDeck = _DBBFactionMakeDarkBeaconBase(villageId, 3)
        }
    } else if (baseSize === BASE_SIZE_ACT_1_A) {
        baseDeck = _DBBFactionMakeAct1BaseNetherSpreaders()
    } else if (baseSize === BASE_SIZE_ACT_1_B) {
        LISTENFOR_BuildingComplete({
            snippet: "bc_piglin_generic_marker_trigger_volume",
            ownerVillageId: villageId,
            includeTags: ["onboarding_generic_marker"],
            villageId: villageId
        })
        baseDeck = _DBBFactionMakeAct1RaisedTowerCamp(villageId, 2)
    } else if (baseSize === BASE_SIZE_ACT_1_C) {
        baseDeck = _DBBFactionMakeAct1WallsMoatsMedicsCamp(villageId, 3)
        //Creating a trigger volume to force the piglins to attack the player when they're close to the gates
        //This is to prevent situations where the player is attacking the gates and piglins are just watching
        const moatVillage = SpawnTriggerVolume(villageEntity, villageEntity, "badger:spatial_trigger_generic_small", TEAM_ORANGE, villageId, true, [TAG_PLAYER], [], ALLIANCE_ENEMY)
        LISTENFOR_SpatialPartitionEntered({
            snippet: "spe_player_close_to_wall_moats_camp",
            ownerVillageId: villageId,
            triggerEntity: moatVillage
        })
    } else if (baseSize === BASE_SIZE_ACT1_FIRST_SKIRMISH) {
        baseDeck = _DBBFactionMakeAct1FirstSkirmish()
    } else if (baseSize === BASE_SIZE_ACT1_SECOND_SKIRMISH) {
        baseDeck = _DBBFactionMakeAct1SecondSkirmish()
    } else if (baseSize === BASE_SIZE_LARGE) {
        baseDeck = _DBBFactionMakeAct1LargeBase()
    } else if (baseSize === BASE_SIZE_ACT1_NON_PORTAL_ATTACK_BASE) {
        baseDeck = _DBBFactionMakeAct1NonPortalAttackBase()
    }

    LISTENFOR_BuildingComplete({
        snippet: "bc_piglin_barracks_loot_override",
        ownerVillageId: villageId,
        includeTags: ["barracks"],
        villageId: villageId
    })

    if (baseSize === BASE_SIZE_DARK_BEACON) {
        //In act1_flow
        _StartOutpostOnboarding(villageId)
        LISTENFOR_BuildingComplete({
            snippet: "bc_dbb_portal_complete",
            ownerVillageId: villageId,
            includeTags: ["portal_piglin"],
            villageId: villageId
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_ally_barracks_built",
            ownerVillageId: villageId,
            includeTags: ["db_ally_spawner"],
            villageId: villageId
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_dbb_key_building",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_FIGHTER],
            villageId: villageId,
            despawned: false
        })
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_dbb_key_building",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_DISRUPTOR],
            villageId: villageId,
            despawned: false
        })
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_dbb_key_building",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_SIEGER],
            villageId: villageId,
            despawned: false
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_dbb_fighter_barracks",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_FIGHTER],
            villageId: villageId
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_dbb_disruptor_barracks",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_DISRUPTOR],
            villageId: villageId
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_dbb_sieger_barracks",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_SIEGER],
            villageId: villageId
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_dbb_discrete_encounter_our_tower",
            ownerVillageId: villageId,
            includeTags: [dbbDiscreteEncounters.ourTower.buildableTag],
            villageId: villageId
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_dbb_discrete_encounter_nethered_blaze",
            ownerVillageId: villageId,
            includeTags: [dbbDiscreteEncounters.netheredBlaze.buildableTag],
            villageId: villageId
        })

        LISTENFOR_CinematicEvent({
            snippet: "ce_spawn_mobs_by_player",
            ownerVillageId: villageId,
            eventName: "dbb_spawn_mobs"
        })

        LISTENFOR_PopCappedEntityDestroyed({
            snippet: "ed_tier_3_piglin_destroyed",
            ownerVillageId: villageId,
            includeTags: ["portalguard"]
        })

        LISTENFOR_PopCappedEntityDestroyed({
            snippet: "ed_tier_3_piglin_destroyed",
            ownerVillageId: villageId,
            includeTags: ["piggo_lava_launcher"]
        })

        LISTENFOR_PopCappedEntityDestroyed({
            snippet: "ed_tier_3_piglin_destroyed",
            ownerVillageId: villageId,
            includeTags: ["pigmadilo"]
        })
        const nearbyPlayers = FILTER_ByDistance(GetAllPlayers(), villageEntity, 200)
        if (IsCurrentAct(ACTS.ACT_1B)) TeleportEntitiesToWoF(nearbyPlayers)
    } else {
        LISTENFOR_BuildingComplete({
            snippet: "bc_dbb_fighter_barracks_rally",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_FIGHTER],
            villageId: villageId
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_dbb_disruptor_barracks_rally",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_DISRUPTOR],
            villageId: villageId
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_dbb_sieger_barracks_rally",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_SIEGER],
            villageId: villageId
        })
    }

    //RALLY SETUP ---------------------------------------------------------------
    if (baseSize === BASE_SIZE_DARK_BEACON) {
        //initialize ais:
        _InitDbbResponses(villageId)
    } else if (baseSize === BASE_SIZE_ACT_1_C) {
        BASE_InitPiglinStructureDestroyedResponse(villageId, [{ snippetName: "sk_act_1_c_gate_breached_structure_response", debounceTimer: 30, includeTags: ["piglin_wall_inner"] }])
    }
    //END RALLY SETUP---------------------------------------------------------------

    SetupBasicVillageClearingCards(baseDeck)
    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)

    OUTPUT_SetGlobalVariable(dbbVal.global.firstThresholdResponseInCooldown + villageId, 0)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DBBFaction, 0)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_DISRUPTOR, DisruptorBarracksConfig_DBBFaction, 0)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DBBFaction, 0)

    //Audio
    const audioEntity = dbbVal.music[baseSize]
    SetupAudioEntityForBase(villageId, audioEntity)
})

SNIPPET_SpatialPartitionEntered("spe_player_close_to_wall_moats_camp", (_triggerEntity, intruderEntity, payload) => {
    GatherNearestUnitsAndSendToLocation(["piglin"], [], payload.ownerVillageId, intruderEntity, 50, "", "")
})

SNIPPET_MoveCallback("mc_act1_timed_callback_redirect", (unit) => {
    const villageId = QUERY_GetVillageIDFromEntity(unit)
    if (QUERY_IsVillageDestroyed(villageId)) {
        return
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_act1_move_callback",
        ownerVillageId: villageId,
        waitTime: 5,
        payloadEntities: unit
    })

    //set up loacl timer to send units after 5 seconds
})

SNIPPET_LocalTimer("lt_act1_move_callback", (payload) => {
    const entity = payload.entities
    if (!HasEntities(entity)) {
        return
    }
    const portal = GetVillagePortal(payload.ownerVillageId)
    if (!HasEntities(portal)) {
        return
    }
    const player = GetClosestPlayer(portal)
    if (HasEntities(player)) {
        OUTPUT_MoveAttackEntity(payload.entities, player, "mc_act1_timed_callback_redirect")
    }
})

SNIPPET_BuildingComplete("bc_dbb_fighter_barracks", (buildingEntity) => {
    SetBarracksConfig(buildingEntity, FighterBarracksConfig_DBBFaction)
    RecruitSpawnedComposition(QUERY_GetVillageIDFromEntity(buildingEntity), dbbVal.piglinRallyPoints["attack"], buildingEntity, dbbAI.offensive)
})

SNIPPET_BuildingComplete("bc_dbb_disruptor_barracks", (buildingEntity) => {
    SetBarracksConfig(buildingEntity, DisruptorBarracksConfig_DBBFaction)
    RecruitSpawnedComposition(QUERY_GetVillageIDFromEntity(buildingEntity), dbbVal.piglinRallyPoints["defend"], buildingEntity, dbbAI.defensive)
})

SNIPPET_BuildingComplete("bc_dbb_sieger_barracks", (buildingEntity) => {
    SetBarracksConfig(buildingEntity, SiegerBarracksConfig_DBBFaction)
    RecruitSpawnedComposition(QUERY_GetVillageIDFromEntity(buildingEntity), dbbVal.piglinRallyPoints["siege"], buildingEntity, dbbAI.siege)
})

SNIPPET_BuildingComplete("bc_dbb_fighter_barracks_rally", (buildingEntity) => {
    SetBarracksConfig(buildingEntity, FighterBarracksConfig_DBBFaction)
})

SNIPPET_BuildingComplete("bc_dbb_disruptor_barracks_rally", (buildingEntity) => {
    SetBarracksConfig(buildingEntity, DisruptorBarracksConfig_DBBFaction)
})

SNIPPET_BuildingComplete("bc_dbb_sieger_barracks_rally", (buildingEntity) => {
    SetBarracksConfig(buildingEntity, SiegerBarracksConfig_DBBFaction)
})

const _SpawnDbbDiscreteEncounterComposition = (composition, buildingEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(buildingEntity)

    let spawnedGroup = EMPTY_ENTITY_GROUP
    composition.unitComposition.units.forEach((unitGroup) => {
        spawnedGroup = OPER_Append(spawnedGroup, SpawnEntitiesNear(buildingEntity, unitGroup.unit, unitGroup.amount, TEAM_ORANGE, villageId))
    })

    OUTPUT_SetLeash(spawnedGroup, buildingEntity, composition.leashDistance, composition.returnDistance)
}

SNIPPET_BuildingComplete("bc_dbb_discrete_encounter_nethered_blaze", (buildingEntity) => {
    _SpawnDbbDiscreteEncounterComposition(dbbDiscreteEncounters.netheredBlaze, buildingEntity)
})

SNIPPET_BuildingComplete("bc_dbb_discrete_encounter_our_tower", (buildingEntity) => {
    // Limit it to two towers
    const allOurTowers = QUERY_GetEntitiesWithTags([dbbDiscreteEncounters.ourTower.buildableTag])
    if (QUERY_GetEntitiesCount(allOurTowers) <= 2) {
        _SpawnDbbDiscreteEncounterComposition(dbbDiscreteEncounters.ourTower, buildingEntity)
    }
})

SNIPPET_BuildingComplete("bc_piglin_generic_marker_trigger_volume", (buildingCompleteEG, _payload) => {
    const towerCampTVNoBridgeVO = SpawnTriggerVolume(buildingCompleteEG, undefined, "badger:spatial_trigger_act1_tower_camp", TEAM_WILD, undefined, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_player_climbed_tower_camp",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        triggerEntity: towerCampTVNoBridgeVO
    })
})

SNIPPET_SpatialPartitionEntered("spe_player_climbed_tower_camp", (triggerEntity, _intruderEntity, _payload) => {
    IncrementGlobal(dbbVal.misc.hasPlayedStairsReminderAtTowerVO)
    OUTPUT_DespawnEntities(triggerEntity)
    const allMarkers = QUERY_GetEntitiesWithTags("onboarding_generic_marker")
    if (HasEntities(allMarkers)) {
        OUTPUT_DespawnEntities(allMarkers)
    }
    Once()
})
SNIPPET_BuildingComplete("bc_piglin_barracks_loot_override", (buildingCompleteEG, _payload) => {
    OUTPUT_SetSpawnerAddLootOverride(buildingCompleteEG, "act1")
})

SNIPPET_LocalTimer("lt_dbb_debounce_reset", (payload) => {
    const villageId = payload.ownerVillageId
    const name = payload.string
    SetVillageVariable(villageId, name, 0)
})

// Generic response useable by act 1 bases or the DBB
const _genericDBBResponse = (info, villageId) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    if (info.debounce !== undefined) {
        // DEBOUNCE ENABLED
        if (GetVillageVariable(villageId, info.debounce.name) > 0) {
            return
        } else {
            SetVillageVariable(villageId, info.debounce.name, 1)
            LISTENFOR_LocalTimer({
                snippet: "lt_dbb_debounce_reset",
                ownerVillageId: villageId,
                waitTime: info.debounce.time,
                payloadString: info.debounce.name
            })
        }
    }

    if (baseSize === BASE_SIZE_DARK_BEACON) {
        // DARK BEACON BASE MODE
        if (info.dbb.units !== undefined) {
            let variant = QUERY_GetGlobalVariable(GV_DBB_VARIANT)

            // Default value 0 counts as 1
            if (variant === 0) {
                variant = 1
            }
            const unitCounts = info.dbb.units[variant]
            _spawnDBBAttackWave(villageId, unitCounts, info.dbb.response)
        }
    }
}

const _spawnDBBAttackWave = (villageId, unitCounts, response = undefined) => {
    //Send attack wave
    //need to support 0 of each unit based on new DBB scripting
    let attackWave = []
    unitCounts.forEach((unitComp) => {
        attackWave = OPER_Union(attackWave, SpawnAtPortal(villageId, unitComp.unit, unitComp.amount))
    })
    if (HasEntities(attackWave)) {
        if (response !== undefined && response.aiDistribution !== undefined) {
            DistributeUnitsToAI(attackWave, response.aiDistribution, dbbVal.aiConfig)
        } else {
            // If there is no response, default to attack
            const defaultDistribution = [[dbbAI.offensive, 100]]
            DistributeUnitsToAI(attackWave, defaultDistribution, dbbVal.aiConfig)
        }
        OUTPUT_SetLootTableOverride(attackWave, "act1")
    }
}

const _darkBeaconReinforcements = () => {
    if (QUERY_GetGlobalVariable(GV_DB_REINFORCEMENTS_STARTED) === 0) {
        OUTPUT_SetGlobalVariable(GV_DB_REINFORCEMENTS_STARTED, 1)
        const piglinBase = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_NAME_DBB)
        //CHECK THE REINFORCEMENTS ACTIVITY HERE - SCRIPT ERROR
        const villageId = QUERY_GetVillageIDFromEntity(piglinBase)
        const portal = GetVillagePortal(villageId)
        const player = GetClosestPlayer(portal)

        OUTPUT_SetGlobalVariable("gv_outpost_nudge_is_active", 0)
        IncrementGlobal("gv_has_appraoched_dbb")

        LISTENFOR_CinematicFinished({
            snippet: "cf_dbb_intro",
            ownerVillageId: villageId,
            cinematicName: dbbVal.cinematic.dbbIntro
        })

        OUTPUT_TriggerCinematic(dbbVal.cinematic.dbbIntro, [player])
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_creeper_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_skeleton_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_zombie_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_creeper", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_skeleton", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_zombie", 1, false)
    }
}

//EVES MANUALLY SPAWNING MOBS AT PLAYER LOCATION, AND TRIGGERING ALLY MOB BARRACKS IN CINEMATIC EVENT
SNIPPET_CinematicEvent("ce_spawn_mobs_by_player", () => {
    //Filter through all players, we want ones who are close to the DBB
    const piglinBase = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_NAME_DBB)
    const villageId = QUERY_GetVillageIDFromEntity(piglinBase)
    const portal = GetVillagePortal(villageId)
    const playersCloseToDBB = FILTER_ByDistance(GetAllPlayers(), portal, 250)

    //kick music to phase 1 post dbb intro
    SetAudioPhaseForBase(villageId, dbbVal.audioPerPhaseArray[1])

    if (HasEntities(playersCloseToDBB)) {
        //Spawn mobs for all players within range of DBB
        SpawnEntitiesAt(playersCloseToDBB, "badger:mob_creeper", 2, TEAM_BLUE)
        SpawnEntitiesAt(playersCloseToDBB, "badger:mob_zombie", 10, TEAM_BLUE)
        SpawnEntitiesAt(playersCloseToDBB, "badger:mob_skeleton", 10, TEAM_BLUE)
    } else {
    }
})

// escalationVal 1 : PLAYER APPROACHED BASE
const _DBBInitialEscalation = (triggerEntity) => {
    if (IsBaseEscalated(triggerEntity, dbbVal.escalationVal.approached)) {
        return
    }
    MarkBaseAsEscalated(triggerEntity, dbbVal.escalationVal.approached)

    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DBBFaction, 2)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_DISRUPTOR, DisruptorBarracksConfig_DBBFaction, 2)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DBBFaction, 2)

    const portal = GetVillagePortal(villageId)
    if (QUERY_GetEntitiesCount(portal) < 1) {
        return
    }
    _genericDBBResponse(dbbVal.responses.initialEscalation, villageId)

    LISTENFOR_LocalTimer({
        snippet: "lt_dark_beacon_retaliation",
        ownerVillageId: villageId,
        waitTime: dbbVal.recurringWaveTimer
    })
}

// escalationVal 2 : ANY KEY BUILDING DESTROYED
SNIPPET_NonPopCappedEntityDestroyed("ed_dbb_key_building", (destroyedEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(destroyedEntity)

    if (!IsBaseEscalated(destroyedEntity, dbbVal.escalationVal.keyBuildingDestroyed)) {
        MarkBaseAsEscalated(destroyedEntity, dbbVal.escalationVal.keyBuildingDestroyed)

        if (!IsBaseEscalated(destroyedEntity, dbbVal.escalationVal.portalApproached)) {
            SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DBBFaction, 3)
            SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_DISRUPTOR, DisruptorBarracksConfig_DBBFaction, 3)
            SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DBBFaction, 3)

            SetAudioPhaseForBase(villageId, dbbVal.audioPerPhaseArray[3])
        }
    }
    //play tactic stinger here
    const portal = GetVillagePortal(villageId)

    if (HasEntities(portal)) {
        PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_DBB, "tactic"), portal)
    }
})

// escalationVal 3 : PORTAL APPROACHED
SNIPPET_SpatialPartitionEntered("spe_db_approach_portal", (triggerEntity, _intruderEntity, _payload) => {
    // Triggers on player or mob. On approach. For DBB and Act 1 bases.
    if (!IsBaseEscalated(triggerEntity, dbbVal.escalationVal.portalApproached)) {
        MarkBaseAsEscalated(triggerEntity, dbbVal.escalationVal.portalApproached)

        const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
        const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
        const portal = GetVillagePortal(villageId)

        if (DoOnce(dbbVal.global.DBBpigmadiloExists)) {
            _SpawnPigmadilo(villageId, portal)
        }

        // RESPONSE
        _genericDBBResponse(dbbVal.responses.approachPortal, villageId)

        // BARRACKS
        if (baseSize === BASE_SIZE_DARK_BEACON) {
            //SET ALLY BARRACKS TO FINAL RATE
            SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_ZOMBIE, AllyBarracksConfig_DBBFaction, 3)
        }

        // AUDIO
        SetAudioPhaseForBase(villageId, dbbVal.audioPerPhaseArray[4])
        Once()
    }
})

const _SpawnPigmadilo = (villageId, portalEntity) => {
    const dbbPigmadilo = SpawnAtPortal(villageId, "badger:piglin_pigmadilo", 1)
    OUTPUT_AddTether(portalEntity, dbbPigmadilo, dbbVal.dbbPigmadiloTetherRange)
    OUTPUT_SetLootTableOverride(dbbPigmadilo, "act1")
    LISTENFOR_TetherOverLimit({
        snippet: "tol_dbb_return_to_portal",
        ownerVillageId: villageId,
        rootEntity: portalEntity,
        tetherEntity: dbbPigmadilo
    })

    const portal = GetVillagePortal(villageId)

    if (HasEntities(portal)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_attack", portal)
    }
}

const _SpawnPortalGuard = (villageId, portalEntity) => {
    const dbbPortalGuard = SpawnAtPortal(villageId, "badger:piglin_portal_guard", 1)
    OUTPUT_AddTether(portalEntity, dbbPortalGuard, dbbVal.dbbPortalGuardTetherRange)
    OUTPUT_SetLootTableOverride(dbbPortalGuard, "act1")
    LISTENFOR_TetherOverLimit({
        snippet: "tol_dbb_return_to_portal",
        ownerVillageId: villageId,
        rootEntity: portalEntity,
        tetherEntity: dbbPortalGuard
    })

    const portal = GetVillagePortal(villageId)

    if (HasEntities(portal)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_attack", portal)
    }
}

const _SpawnLavaLauncher = (villageId, portalEntity) => {
    const dbbLavaLauncher = SpawnAtPortal(villageId, "badger:piglin_piggo_lava_launcher", 1)
    OUTPUT_AddTether(portalEntity, dbbLavaLauncher, dbbVal.dbbLavaLauncherTetherRange)
    OUTPUT_SetLootTableOverride(dbbLavaLauncher, "act1")
    LISTENFOR_TetherOverLimit({
        snippet: "tol_dbb_return_to_portal",
        ownerVillageId: villageId,
        rootEntity: portalEntity,
        tetherEntity: dbbLavaLauncher
    })

    const portal = GetVillagePortal(villageId)

    if (HasEntities(portal)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_attack", portal)
    }
}

//ELITE UNIT: Tether over limit (return to portal)
SNIPPET_TetherOverLimit("tol_dbb_return_to_portal", (rootEntity, tetherEntity, _payload) => {
    // the rootEntity is the portal and the tetherEntity is the elite unit. so we can just do below instead.
    OUTPUT_MoveAttackPosition(tetherEntity, rootEntity, 20, "mc_elite_unit_arrived_at_portal")
})

SNIPPET_MoveCallback("mc_elite_unit_arrived_at_portal", (eliteEntity, _arrived) => {
    const villageId = QUERY_GetVillageIDFromEntity(eliteEntity)
    const portal = GetVillagePortal(villageId)
    if (!HasEntities(portal)) {
        return
    }
})

SNIPPET_BuildingComplete("bc_dbb_portal_complete", (portalEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(portalEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DBBFaction, 0)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_DISRUPTOR, DisruptorBarracksConfig_DBBFaction, 0)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DBBFaction, 0)
    SetupRespawningEngineers(villageId, 1, 5)

    if (isAct1Base(baseSize) || baseSize === BASE_SIZE_DARK_BEACON) {
        SetAudioPhaseForBase(villageId, dbbVal.audioPerPhaseArray[0])

        const approachPortalTrigger = SpawnTriggerVolumeWithMultipleTagsets(portalEntity, portalEntity, "badger:spatial_trigger_attack_inner", TEAM_ORANGE, villageId, true, TAGSET_PLAYER_OR_MOB)
        LISTENFOR_SpatialPartitionEntered({
            snippet: "spe_db_approach_portal",
            ownerVillageId: villageId,
            triggerEntity: approachPortalTrigger,
            payloadEntities: portalEntity
        })

        LISTENFOR_VillageDestroyed({
            snippet: "vd_dbb_portal",
            ownerVillageId: villageId,
            villageId: villageId,
            payloadEntities: approachPortalTrigger, // clean this on portal desruction
            despawned: false
        })

        // BBI-HACK: (dsavage) Report to telemetry the "first hit" on the portal for the campaign playtest.
        LISTENFOR_HealthChanged({
            snippet: "DBBPortalDamagedHigh_TelemetryFirstHit",
            ownerVillageId: villageId,
            entities: portalEntity,
            normalizedThreshold: 0.999,
            triggerMode: HEALTH_TRIGGER_MODE.CROSS,
            direction: HEALTH_DIRECTION.DAMAGE
        })

        OUTPUT_AddTag(portalEntity, "fallbackAttackDest")

        // NOTE (mgordon) This engagement tracking has been removed because it was unused and relied on some unsafe use of
        //  SpatialPartitionEnter/Exit listeners. If this functionality is needed, then tracking players within villages can now be done
        //  under the hood with a simple query. This comment can be removed when this change is merged.
        //StartPlayerEngagedTracker(villageId, portalEntity, "badger:spatial_trigger_act1_base_gameplay_area")
    }
})
//ally barracks built
SNIPPET_BuildingComplete("bc_ally_barracks_built", (spawner) => {
    const villageId = QUERY_GetVillageIDFromEntity(spawner)
    OUTPUT_SetTeam(spawner, TEAM_BLUE)

    if (QUERY_HasTags(spawner, [BARRACKS_NAME_ZOMBIE])) {
        SetBarracksConfig(spawner, AllyBarracksConfig_DBBFaction)
    } else {
    }

    //listen for units spawning
    LISTENFOR_BuildableSpawnerSpawned({
        snippet: "bss_ally_unit_spawned",
        ownerVillageId: villageId,
        buildableSpawner: spawner
    })
})

SNIPPET_PopCappedEntityDestroyed("ed_tier_3_piglin_destroyed", (piglinEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(piglinEntity)
    const villageEntity = GetVillageEntityFromID(villageId)
    if (DoOnce(dbbVal.global.playEliteDeadVO)) {
        PlayPresentationActionToClosePlayers(dbbVal.VO.dbbEscalation2, villageEntity)
    }
    Once()
})

//when a unit spawns, do this
SNIPPET_BuildableSpawnerSpawned("bss_ally_unit_spawned", (spawner, spawnedUnit) => {
    _SendMobToHelpPlayers(spawnedUnit)
})

SNIPPET_HealthChanged("DBBPortalDamagedHigh_TelemetryFirstHit", (_portalEntity) => {
    TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.ACT1_PORTALDAMAGEDDBB)
    Once()
})

const _SendAllNonBossPiglinsToTargetDBB = (villageId, target) => {
    const allPiglins = FILTER_ByVillageID(QUERY_GetEntitiesWithTagFilter(["piglin", "mob"], ["boss", "portalguard"]), villageId)
    OUTPUT_MoveAttackPosition(allPiglins, target, 5, CALLBACK_NONE)
}

SNIPPET_VillageDestroyed("vd_dbb_portal", (villageId, payload) => {
    const entitiesToClean = payload.entities
    OUTPUT_DespawnEntities(entitiesToClean)

    const approachPortalTrigger = QUERY_GetEntitiesWithTags(["attackBasePortalTV" + villageId])
    if (QUERY_GetEntitiesCount(approachPortalTrigger) > 0) {
        OUTPUT_DespawnEntities(approachPortalTrigger)
    }

    // note: we don't play portal destruction cinematic here as that's handled with the badger:cinematic_death component

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, DECK_Empty())
    OUTPUT_SetNamedDeck(TICKET_BUILD_DECK_NAME + villageId, DECK_Empty())

    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DBBFaction, 0)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_DISRUPTOR, DisruptorBarracksConfig_DBBFaction, 0)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DBBFaction, 0)

    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    if (baseSize === BASE_SIZE_DARK_BEACON) {
        //TURN OFF ALLY BARRACKS
        SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_ZOMBIE, AllyBarracksZombieConfig_DBBFaction, 0)
    }

    const villageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_SetIconOff(villageEntity)
    OUTPUT_AddVisualState(villageEntity, "village_destroyed")

    const allySpawners = QUERY_GetEntitiesWithTags(["db_ally_spawner"])
    if (HasEntities(allySpawners)) {
        OUTPUT_DespawnEntities(allySpawners)
    }
})

SNIPPET_LocalTimer("lt_dark_beacon_retaliation", (payload) => {
    const villageId = payload.ownerVillageId
    const portalEntity = GetVillagePortal(villageId)
    if (!HasEntities(portalEntity)) {
        return
    }

    const dbbVariant = QUERY_GetGlobalVariable(GV_DBB_VARIANT)

    if (IsBaseEscalated(portalEntity, dbbVal.escalationVal.portalApproached)) {
        //Spawn third type of unit
        if (dbbVariant <= 1) {
            _spawnDBBAttackWave(villageId, dbbVal.responses.retaliation.portalApproached[1], dbbVal.responses.retaliation.portalApproached.response)
        } else {
            _spawnDBBAttackWave(villageId, dbbVal.responses.retaliation.portalApproached[dbbVariant], dbbVal.responses.retaliation.portalApproached.response)
        }
    } else if (IsBaseEscalated(portalEntity, dbbVal.escalationVal.keyBuildingDestroyed)) {
        //Spawn third type of unit
        if (dbbVariant <= 1) {
            _spawnDBBAttackWave(villageId, dbbVal.responses.retaliation.keyBuildingDestroyed[1], dbbVal.responses.retaliation.portalApproached.response)
        } else {
            _spawnDBBAttackWave(villageId, dbbVal.responses.retaliation.keyBuildingDestroyed[dbbVariant], dbbVal.responses.retaliation.portalApproached.response)
        }
    } else if (IsBaseEscalated(portalEntity, dbbVal.escalationVal.approached)) {
        //Spawn third type of unit
        if (dbbVariant <= 1) {
            _spawnDBBAttackWave(villageId, dbbVal.responses.retaliation.approached[1], dbbVal.responses.retaliation.portalApproached.response)
        } else {
            _spawnDBBAttackWave(villageId, dbbVal.responses.retaliation.approached[dbbVariant], dbbVal.responses.retaliation.portalApproached.response)
        }
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_dark_beacon_retaliation",
        ownerVillageId: villageId,
        waitTime: dbbVal.recurringWaveTimer
    })
})

SNIPPET_SpatialPartitionEntered("spe_dark_beacon_intro_cine", (triggerEntity, _intruderEntity) => {
    // Triggers on player. On bounds. For DBB specifically.
    _darkBeaconReinforcements()
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    CreateCompositionRallyPoints(villageId, dbbVal.piglinRallyPoints)
    Once()
})

SNIPPET_SpatialPartitionEntered("spe_dark_beacon_initial_escalation", (_triggerEntity, _intruderEntity) => {
    // Triggers on player or mob. On bounds. For DBB specifically.
    //_DBBInitialEscalation(triggerEntity)
    Once()
})

SNIPPET_CinematicFinished("cf_dbb_intro", (payload) => {
    //moving ally spawning here so players don't see it while the intro is loading
    /////INITIAL SPAWN FOR ALLY MOBS - ALLY BARRACKS
    const villageId = payload.ownerVillageId
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_ZOMBIE, AllyBarracksConfig_DBBFaction, 1)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_CREEPER, AllyBarracksConfig_DBBFaction, 1)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_SKELETON, AllyBarracksConfig_DBBFaction, 1)

    PlayPresentationActionToAll("onboarding_mob_unexpected")

    _ShowOnboardingMessage(_GetOutpostOnboardingMessage())

    _spawnDBBAttackWave(villageId, dbbVal.responses.initialSpawn.dbb.all)

    const dbbVariant = QUERY_GetGlobalVariable(GV_DBB_VARIANT)
    if (dbbVariant <= 1) {
        _spawnDBBAttackWave(villageId, dbbVal.responses.initialSpawn.dbb[1])
    } else {
        _spawnDBBAttackWave(villageId, dbbVal.responses.initialSpawn.dbb[dbbVariant])
    }

    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DBBFaction, 1)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_DISRUPTOR, DisruptorBarracksConfig_DBBFaction, 1)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DBBFaction, 1)

    LISTENFOR_LocalTimer({
        snippet: "lt_dbb_escalation_3_reminder_vo",
        ownerVillageId: villageId,
        waitTime: dbbVal.misc.timeToDbbEscalation3ReminderVO
    })
})

SNIPPET_LocalTimer("lt_dbb_escalation_3_reminder_vo", (payload) => {
    if (DoOnce(dbbVal.global.DBBHasDamagedPortalAtLeastOnce)) {
        //VO for Portal Approach
        const villageEntity = GetVillageEntityFromID(payload.ownerVillageId)
        PlayPresentationActionToClosePlayers(dbbVal.VO.dbbEscalation3, villageEntity)
    }
})

SNIPPET_CinematicFinished("postIntroSendPiglins", (payload) => {
    //GATHER AND SEND PIGLINS THAT SPAWNED FROM THE NIS
    const villageId = payload.int
    const allPiglins = QUERY_GetEntitiesWithTagFilter(["onboardingPiglins"], ["boss"])
    const portal = GetVillagePortal(villageId)
    const closePlayers = FILTER_ByDistance(GetPlayers(), portal, dbbVal.postIntroDistance)
    const target = RandomUpToCount(closePlayers, 1)

    // Check if any players exist
    if (HasEntities(target)) {
        // send them towards their target
        OUTPUT_MoveAttackEntity(allPiglins, target, CALLBACK_NONE)
    } else {
    }
})

SNIPPET_SpatialPartitionEntered("spe_dbb_act1_intro_cine", (triggerEntity, intruderEntity, _payload) => {
    // Triggers on player. On bounds. For Act 1 bases specifically.

    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const villageEntity = GetVillageEntityFromID(villageId)
    if (QUERY_GetGlobalVariable(dbbVal.global.hasVisitedAct1) === 0) {
        if (baseSize === BASE_SIZE_ACT_1_A) {
            //Need to call _Act1CampEscalation) first to avoid a race condition that prevents piglins from spawning
            _Act1CampEscalation(triggerEntity, intruderEntity)
            SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DBBFaction, 1)
            PlayPresentationActionToClosePlayers(dbbVal.VO.netherSpreaderCampReaction, villageEntity, 135)
            LISTENFOR_VillageDestroyed({
                snippet: "vd_netherspreader_camp_destroyed",
                ownerVillageId: villageId,
                villageId: villageId,
                despawned: false
            })
        } else if (baseSize === BASE_SIZE_ACT_1_B) {
            _Act1CampEscalation(triggerEntity, intruderEntity)
            SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DBBFaction, 1)
            PlayPresentationActionToClosePlayers(dbbVal.VO.towersCampReaction, villageEntity, 135)
            LISTENFOR_LocalTimer({
                snippet: "lt_play_stairs_reminder_tower_VO",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                waitTime: dbbVal.misc.timeToStairsReminderVO
            })
            LISTENFOR_BuildingComplete({
                snippet: "bc_stairs_piglin_tower_camp",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                includeTags: ["playerBridge"]
            })

            LISTENFOR_VillageDestroyed({
                snippet: "vd_piglin_tower_camp_destroyed",
                ownerVillageId: villageId,
                villageId: villageId,
                despawned: false
            })
        } else if (baseSize === BASE_SIZE_ACT_1_C) {
            //OUTPUT_TriggerCinematic(dbbVal.cinematic.campIntro, OPER_Append(villageEntity, intruderEntity))
            _Act1CampEscalation(triggerEntity, intruderEntity)
            SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DBBFaction, 1)
            PlayPresentationActionToClosePlayers(dbbVal.VO.lavaMoatCampReaction, villageEntity, 135)
            //Need the listeners to be here as well in case the player goes to lava moat camp first
            LISTENFOR_LocalTimer({
                snippet: "lt_play_stairs_reminder_lava_VO",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                waitTime: dbbVal.misc.timeToStairsReminderVO
            })
            LISTENFOR_BuildingComplete({
                snippet: "bc_stairs_piglin_lava_camp",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                includeTags: ["playerBridge"]
            })
            LISTENFOR_VillageDestroyed({
                snippet: "vd_piglin_lava_camp_destroyed",
                ownerVillageId: villageId,
                villageId: villageId,
                despawned: false
            })
        } else if (baseSize === BASE_SIZE_ACT1_FIRST_SKIRMISH) {
            SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DBBFaction, 1)
        } else if (baseSize === BASE_SIZE_ACT1_SECOND_SKIRMISH) {
            SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DBBFaction, 1)
        } else if (baseSize === BASE_SIZE_ACT1_NON_PORTAL_ATTACK_BASE) {
            SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DBBFaction, 1)
        }
    }
    Once()
})

SNIPPET_SpatialPartitionEntered("spe_dbb_act1_camp_nudge", (triggerEntity, intruderEntity, _payload) => {
    if (QUERY_GetGlobalVariable("gv_onboarding_three_piglin_camps_completed") > 0) {
        OUTPUT_DespawnEntities(triggerEntity)
        Once()
        return
    }
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    let index = null
    if (QUERY_GetGlobalVariable(dbbVal.global.hasVisitedAct1) === 0) {
        if (baseSize === BASE_SIZE_ACT_1_A) {
            index = 0
        } else if (baseSize === BASE_SIZE_ACT_1_B) {
            index = 1
        } else if (baseSize === BASE_SIZE_ACT_1_C) {
            index = 2
        }
        const message = dbbVal.campSpecificNudge[index]
        OUTPUT_AnnounceInterruptPlayer(ONBOARDING_MESSAGE_PRIORITY, intruderEntity)
        OUTPUT_AnnouncePlayer(message, [], intruderEntity)
        EmphasizeHUDItem(act1FlowVal.threePiglinCamps.hudItem)
    }
})

SNIPPET_PlayerEnteredVillage("pev_act1_three_camps_entered", (_villageId, _playerCount, _payload) => {
    OUTPUT_DeleteNamedTimer(act1FlowVal.threePiglinCamps.timers.goToCampsReminderTimer)

    IncrementGlobal(act1FlowVal.threePiglinCamps.global.currentPlayersAtCamp)

    if (QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.goToCampsReminder) < 2) {
        OUTPUT_DeleteNamedTimer(act1FlowVal.threePiglinCamps.timers.goToCampsReminderTimer)
    }
})

SNIPPET_PlayerExitedVillage("pexv_act1_three_camps_exited", (_villageId, _playerCount, _payload) => {
    DecrementGlobal(act1FlowVal.threePiglinCamps.global.currentPlayersAtCamp)

    if (QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.currentPlayersAtCamp) <= 0) {
        if (QUERY_GetGlobalVariable(act1FlowVal.threePiglinCamps.global.goToCampsReminder) < 2) {
            // If it's the last player leaving one of the 3 camps and we haven't already set the two timers, then set it again
            OUTPUT_SetNamedTimer(act1FlowVal.threePiglinCamps.timers.goToCampsReminderTimer, act1FlowVal.threePiglinCamps.consts.timeGoToCampsReminder)
        }
    }
})

SNIPPET_SpatialPartitionExited("spex_dbb_act1_reset_nudge", (triggerEntity, intruderEntity) => {
    if (QUERY_GetGlobalVariable("gv_onboarding_three_piglin_camps_completed") > 0) {
        OUTPUT_DespawnEntities(triggerEntity)
        Once()
        return
    }

    //_GetCurrentCampsNudge is in act1_flow
    const message = _GetCurrentCampsNudge()
    if (message !== "") {
        OUTPUT_AnnounceInterruptPlayer(ONBOARDING_MESSAGE_PRIORITY, intruderEntity)
        OUTPUT_AnnouncePlayer(message, [], intruderEntity)
    }
    DeEmphasizeHUDItem(act1FlowVal.threePiglinCamps.hudItem)
})

SNIPPET_VillageDestroyed("vd_netherspreader_camp_destroyed", (_villageId, _payload) => {
    OUTPUT_SetGlobalVariable(act1FlowVal.threePiglinCamps.global.goToCampsReminder, 2)
    OUTPUT_DeleteNamedTimer(act1FlowVal.threePiglinCamps.timers.goToCampsReminderTimer)

    Once()
})

SNIPPET_VillageDestroyed("vd_piglin_tower_camp_destroyed", (_villageId, _payload) => {
    OUTPUT_SetGlobalVariable(act1FlowVal.threePiglinCamps.global.goToCampsReminder, 2)
    OUTPUT_DeleteNamedTimer(act1FlowVal.threePiglinCamps.timers.goToCampsReminderTimer)

    Once()
})

SNIPPET_VillageDestroyed("vd_piglin_lava_camp_destroyed", (_villageId, _payload) => {
    OUTPUT_SetGlobalVariable(act1FlowVal.threePiglinCamps.global.goToCampsReminder, 2)
    OUTPUT_DeleteNamedTimer(act1FlowVal.threePiglinCamps.timers.goToCampsReminderTimer)

    Once()
})

SNIPPET_LocalTimer("lt_play_stairs_reminder_tower_VO", () => {
    if (QUERY_GetGlobalVariable(dbbVal.misc.hasPlayedStairsReminderAtTowerVO) === 0) {
        IncrementGlobal(dbbVal.misc.hasPlayedStairsReminderAtTowerVO)
        PlayPresentationActionToAll(dbbVal.misc.stairsReminderVO)
    }
    Once()
})

SNIPPET_LocalTimer("lt_play_stairs_reminder_lava_VO", () => {
    if (QUERY_GetGlobalVariable(dbbVal.misc.hasPlayedStairsReminderAtLavaVO) === 0) {
        IncrementGlobal(dbbVal.misc.hasPlayedStairsReminderAtLavaVO)
        PlayPresentationActionToAll(dbbVal.misc.stairsReminderVO)
    }
    Once()
})

SNIPPET_BuildingComplete("bc_stairs_piglin_tower_camp", (_spawner, _spawnedUnit) => {
    IncrementGlobal(dbbVal.misc.hasPlayedStairsReminderAtTowerVO)
    Once()
})

SNIPPET_BuildingComplete("bc_stairs_piglin_lava_camp", (_spawner, _spawnedUnit) => {
    IncrementGlobal(dbbVal.misc.hasPlayedStairsReminderAtLavaVO)
    Once()
})

SNIPPET_PresenceEntered("spe_dbb_gameplay", (_triggerEntity, _count, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(_triggerEntity)

    // Check for whether the village needs to reset due to previous disengagement by the player.
    // At this point, all the popcapped entities in the base have already been culled.
    // The village will never be flagged for a reset while a player is in this spatial partition, so we only need to check when we enter.
    if (ShouldBaseReset(villageId)) {
        ResetEscalationAndBarracksForVillageVariation(villageId, dbbVal.barracks, dbbVal.escalationVal)
        ResetDiscreteEncounters(villageId)
        MarkBaseAsReset(villageId)
    }
})

// Act 1 Camp Escalation
SNIPPET_SpatialPartitionEntered("spe_act1_camp_initial_escalation", (triggerEntity, intruderEntity) => {
    // Triggers on player or mob. On bounds.
    _Act1CampEscalation(triggerEntity, intruderEntity)
    Once()
})

const _Act1CampEscalation = (triggerEntity, _intruderEntity) => {
    if (IsBaseEscalated(triggerEntity, dbbVal.act1CampEscalationVal.approached)) {
        return
    }
    MarkBaseAsEscalated(triggerEntity, dbbVal.act1CampEscalationVal.approached)

    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DBBFaction, 1)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_DISRUPTOR, DisruptorBarracksConfig_DBBFaction, 1)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DBBFaction, 1)

    _genericDBBResponse(dbbVal.responses.initialEscalation, villageId)
}

// TELEMETRY
SetupDefaultTelemetryForPiglinBase(FACTION_NAME_DBB)
