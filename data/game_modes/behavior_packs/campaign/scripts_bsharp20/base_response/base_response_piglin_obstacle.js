const ObstacleAI = {
    Siege: "rotters_siege",
    Assault: "rotters_offensive",
    Guard: "rotters_defensive"
}

const ObstacleCompositions = {
    grunters: {
        units: [{ amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER }],
        delayUntilSentOut: 15
    },
    basicSeeker: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 2, unit: PIGLIN_ARCHETYPE.SEEKER }
        ],
        delayUntilSentOut: 15
    },
    grunterPatrol: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
        ],
        delayUntilSentOut: 15
    },
    structureSquad: {
        units: [
            { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
        ],
        delayUntilSentOut: 15
    },
    genadiers: {
        units: [{ amount: 3, unit: PIGLIN_ARCHETYPE.GRENADIER }],
        delayUntilSentOut: 15
    },
    grenadierSquad: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.GRENADIER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
        ],
        delayUntilSentOut: 15
    },
    longrangeSiege: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.LAVA_LAUNCHER }
        ],
        delayUntilSentOut: 15
    },
    heavySquad: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.GRENADIER },
            { amount: 2, unit: PIGLIN_ARCHETYPE.SEEKER }
        ],
        delayUntilSentOut: 15
    },
    heavyPatrol: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC },
            { amount: 1, unit: PIGLIN_ARCHETYPE.GRENADIER }
        ],
        delayUntilSentOut: 15
    },
    heavySiege: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.LAVA_LAUNCHER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.GRENADIER }
        ],
        delayUntilSentOut: 15
    },
    rotSquad: {
        units: [
            { amount: 2, unit: PIGLIN_ARCHETYPE.SEEKER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.GRENADIER }
        ],
        delayUntilSentOut: 15
    }
}
const ObstacleDiscreteEncounters = {
    sporeBlockade: {
        unitComposition: ObstacleCompositions.grunters,
        buildableTag: "pigKnockbackTower",
        leashDistance: 100,
        returnDistance: 50
    },
    blazedSpore: {
        unitComposition: ObstacleCompositions.grunters,
        buildableTag: "pigArrowTower",
        leashDistance: 100,
        returnDistance: 50
    },
    seekingVengeance: {
        unitComposition: ObstacleCompositions.basicSeeker,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    boomSpreader: {
        unitComposition: ObstacleCompositions.basicSeeker,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    gruntersMedics: {
        unitComposition: ObstacleCompositions.grunterPatrol,
        buildableTag: "barracks",
        leashDistance: 100,
        returnDistance: 50
    },
    grenadierGuards: {
        unitComposition: ObstacleCompositions.genadiers,
        buildableTag: "barracks",
        leashDistance: 100,
        returnDistance: 50
    },
    grenadiers: {
        unitComposition: ObstacleCompositions.grenadierSquad,
        buildableTag: "obstacleComposition3",
        leashDistance: 100,
        returnDistance: 50
    },
    grenadiersTower: {
        unitComposition: ObstacleCompositions.genadiers,
        buildableTag: "pigArrowTower",
        leashDistance: 100,
        returnDistance: 50
    },
    grenadiersKnockback: {
        unitComposition: ObstacleCompositions.genadiers,
        buildableTag: "pigKnockbackTower",
        leashDistance: 100,
        returnDistance: 50
    },
    comeAndTakeIt: {
        unitComposition: ObstacleCompositions.longrangeSiege,
        buildableTag: "barracks",
        leashDistance: 100,
        returnDistance: 50
    },
    pain: {
        unitComposition: ObstacleCompositions.heavySquad,
        buildableTag: "pigKnockbackTower",
        leashDistance: 100,
        returnDistance: 50
    },
    sporeGrowth: {
        unitComposition: ObstacleCompositions.genadiers,
        buildableTag: "pigArrowTower",
        leashDistance: 100,
        returnDistance: 50
    },
    sporeCannons: {
        unitComposition: ObstacleCompositions.longrangeSiege,
        buildableTag: "pigKnockbackTower",
        leashDistance: 100,
        returnDistance: 50
    },
    hornsFromAbove: {
        unitComposition: ObstacleCompositions.heavyPatrol,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    sporeScore: {
        unitComposition: ObstacleCompositions.rotSquad,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    grenadierNether: {
        unitComposition: ObstacleCompositions.genadiers,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    sporeSpread: {
        unitComposition: ObstacleCompositions.grunterPatrol,
        buildableTag: "obstacleComposition1",
        leashDistance: 100,
        returnDistance: 50
    },
    highGround: {
        unitComposition: ObstacleCompositions.heavySiege,
        buildableTag: "piglin_portal",
        leashDistance: 100,
        returnDistance: 50
    },
    heavySquad: {
        unitComposition: ObstacleCompositions.heavySiege,
        buildableTag: "obstacleComposition1",
        leashDistance: 100,
        returnDistance: 50
    },
    heavyPatrol: {
        unitComposition: ObstacleCompositions.heavySiege,
        buildableTag: "obstacleComposition2",
        leashDistance: 100,
        returnDistance: 50
    },
    heavySiege: {
        unitComposition: ObstacleCompositions.heavySiege,
        buildableTag: "obstacleComposition1",
        leashDistance: 100,
        returnDistance: 50
    },
    highGround2: {
        unitComposition: ObstacleCompositions.heavySiege,
        buildableTag: "obstacleComposition3",
        leashDistance: 100,
        returnDistance: 50
    },
    noCannonForYou: {
        unitComposition: ObstacleCompositions.basicSeeker,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    gruntersEverywhere: {
        unitComposition: ObstacleCompositions.grunterPatrol,
        buildableTag: "barracks",
        leashDistance: 100,
        returnDistance: 50
    },
    rotSquad: {
        unitComposition: ObstacleCompositions.rotSquad,
        buildableTag: "obstacleComposition1",
        leashDistance: 100,
        returnDistance: 50
    }
}

const obstacleVal = {
    debug: {
        outputOn: false
    },
    tag: {
        obstacleBossTag: "rottersBoss"
    },
    audioPerPhaseArray: ["initial_obstacle", "phase1_obstacle", "phase2_obstacle", "phase3_obstacle", "phase4_obstacle"],
    audioPerBossPhaseArray: ["initial", "phase1", "phase2", "phase3", "phase4"],
    constant: {},
    global: {
        hasVisited: "obstacle_faction_has_been_visted",
        hasVisitedCoilBase: "obstacle_faction_has_visited_coil_base",
        lavaSprayerTacticPresented: "obstacle_lava_sprayer_tactic_presented",
        basesDestroyed: "obstacle_bases_destroyed",
        largeBasesDestroyed: "obstacle_large_bases_destroyed",
        bossIntroPresented: "obstacle_boss_intro_presented",
        bossSpawned: "obstacle_boss_spawned",
        dolavaLauncherGuardSpawnCallbackOnce: "obstacle_do_portal_guard_spawn_callback_once",
        baseAudioPhase: "obstacle_base_audio_phase",
        anyBasesKilled: "obstacle_any_bases_killed",
        bossOnFinalPhase: "obstacle_boss_on_final_phase",
        isBossOnVillagePrefix: "obstacle_boss_on_village_",
        bossBridgeAttackOnCooldown: "obstacle_boss_bridge_attack_on_cooldown",
        bossCenterBreachedAttackCooldown: "obstacle_boss_center_breached_attack_on_cooldown",
        bossWallBreachResponse: "obstacle_boss_wall_breach_response"
    },
    bossValues: {},
    barracks: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_FIGHTER]: FighterBarracksConfig_ObstacleFaction_Variations,
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_SIEGER]: SiegerBarracksConfig_ObstacleFaction_Variations,
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_DISRUPTOR]: DisruptorBarracksConfig_ObstacleFaction_Variations
    },
    raidingPartyVars: {
        baseCageAmount: 2,
        cageMultiplier: 1,
        cageTag: "obstacle_raiding_party_cage"
    },
    baseSetup: {
        reescalationSnippet: "spe_obstacle_gameplay",
        [BASE_SIZE_SMALL]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_obstacle_base_small",
            reescalation: true,
            snippets: [
                { snippet: "spe_obstacle_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB },
                { snippet: "spe_piglin_base_onboarding", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER, gv: ONBOARDING_GLOBALS.ONBOARDING_ENABLED }
            ]
        },
        [BASE_SIZE_MEDIUM]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_obstacle_base_medium",
            reescalation: true,
            snippets: [
                { snippet: "spe_obstacle_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB },
                { snippet: "spe_piglin_base_onboarding", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER, gv: ONBOARDING_GLOBALS.ONBOARDING_ENABLED }
            ]
        },
        [BASE_SIZE_LARGE]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_obstacle_base_large",
            reescalation: true,
            snippets: [
                { snippet: "spe_obstacle_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB },
                { snippet: "spe_piglin_base_onboarding", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER, gv: ONBOARDING_GLOBALS.ONBOARDING_ENABLED }
            ]
        },
        [BASE_SIZE_BOSS]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_obstacle_base_large",
            reescalation: true,
            snippets: [
                // eslint-disable-next-line @typescript-eslint/camelcase
                { snippet: "spe_obstacle_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB }
            ]
        },
        [BASE_SIZE_OUTPOST]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_obstacle_base_outpost",
            snippets: [
                // eslint-disable-next-line @typescript-eslint/camelcase
                { snippet: "spe_obstacle_outpost", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB }
            ]
        }
    },
    village: {
        preventBridgeSquadResponse: "obstacle_prevent_bridge_squad_response",
        preventBossBridgeResponse: "obstacle_prevent_boss_bridge_response",
        obstaclePhase3BuildingDestroyedCount: "obstaclePhase3BuildingDestroyedCount",
        obstacleKnockbackDestroyedCount: "obstacle_Knockback_Destroyed_Count",
        ScriptedResponsesTimeout: "scripted_responses_timedOut",
        ScriptedResponsesEnabled: "scripted_responses_enabled"
    },

    rallypoints: {
        small: {
            villageVariationA: {
                ["obstacleGuard"]: {
                    controlGroupTag: "obstacleGuard",
                    composition: ObstacleCompositions.grunters,
                    ais: [[ObstacleAI.Guard, 100]],
                    positionTags: ["obstacleGuardRally"],
                    positionTagExcludes: []
                },
                ["obstacleAssault"]: {
                    controlGroupTag: "obstacleAssault",
                    composition: ObstacleCompositions.grunters,
                    ais: [[ObstacleAI.Assault, 100]],
                    positionTags: ["obstacleAssaultRally"],
                    positionTagExcludes: []
                },
                ["obstacleSiege"]: {
                    controlGroupTag: "obstacleSiege",
                    composition: ObstacleCompositions.grunters,
                    ais: [[ObstacleAI.Siege, 100]],
                    positionTags: ["obstacleSiegeRally"],
                    positionTagExcludes: []
                }
            },
            villageVariationB: {
                ["obstacleGuard"]: {
                    controlGroupTag: "obstacleGuard",
                    composition: ObstacleCompositions.grunters,
                    ais: [[ObstacleAI.Guard, 100]],
                    positionTags: ["obstacleGuardRally"],
                    positionTagExcludes: []
                },
                ["obstacleAssault"]: {
                    controlGroupTag: "obstacleAssault",
                    composition: ObstacleCompositions.grunters,
                    ais: [[ObstacleAI.Assault, 100]],
                    positionTags: ["obstacleAssaultRally"],
                    positionTagExcludes: []
                },
                ["obstacleSiege"]: {
                    controlGroupTag: "obstacleSiege",
                    composition: ObstacleCompositions.grunters,
                    ais: [[ObstacleAI.Siege, 100]],
                    positionTags: ["obstacleSiegeRally"],
                    positionTagExcludes: []
                }
            }
        },
        medium: {
            villageVariationA: {
                ["obstacleGuard"]: {
                    controlGroupTag: "obstacleGuard",
                    composition: ObstacleCompositions.grunters,
                    ais: [[ObstacleAI.Guard, 100]],
                    positionTags: ["obstacleGuardRally"],
                    positionTagExcludes: []
                },
                ["obstacleAssault"]: {
                    controlGroupTag: "obstacleAssault",
                    composition: ObstacleCompositions.grunters,
                    ais: [[ObstacleAI.Assault, 100]],
                    positionTags: ["obstacleAssaultRally"],
                    positionTagExcludes: []
                },
                ["obstacleSiege"]: {
                    controlGroupTag: "obstacleSiege",
                    composition: ObstacleCompositions.grunters,
                    ais: [[ObstacleAI.Siege, 100]],
                    positionTags: ["obstacleSiegeRally"],
                    positionTagExcludes: []
                }
            },
            villageVariationB: {
                ["obstacleGuard"]: {
                    controlGroupTag: "obstacleGuard",
                    composition: ObstacleCompositions.grunters,
                    ais: [[ObstacleAI.Guard, 100]],
                    positionTags: ["obstacleGuardRally"],
                    positionTagExcludes: []
                },
                ["obstacleAssault"]: {
                    controlGroupTag: "obstacleAssault",
                    composition: ObstacleCompositions.grunters,
                    ais: [[ObstacleAI.Assault, 100]],
                    positionTags: ["obstacleAssaultRally"],
                    positionTagExcludes: []
                },
                ["obstacleSiege"]: {
                    controlGroupTag: "obstacleSiege",
                    composition: ObstacleCompositions.grunters,
                    ais: [[ObstacleAI.Siege, 100]],
                    positionTags: ["obstacleSiegeRally"],
                    positionTagExcludes: []
                }
            }
        },
        large: {
            villageVariationA: {
                ["obstacleGuard"]: {
                    controlGroupTag: "obstacleGuard",
                    composition: ObstacleCompositions.grunters,
                    ais: [[ObstacleAI.Guard, 100]],
                    positionTags: ["obstacleGuardRally"],
                    positionTagExcludes: []
                },
                ["obstacleAssault"]: {
                    controlGroupTag: "obstacleAssault",
                    composition: ObstacleCompositions.grunters,
                    ais: [[ObstacleAI.Assault, 100]],
                    positionTags: ["obstacleAssaultRally"],
                    positionTagExcludes: []
                },
                ["obstacleSiege"]: {
                    controlGroupTag: "obstacleSiege",
                    composition: ObstacleCompositions.grunters,
                    ais: [[ObstacleAI.Siege, 100]],
                    positionTags: ["obstacleSiegeRally"],
                    positionTagExcludes: []
                }
            }
        }
    },

    cinematic: {
        firstTimeNonShieldBaseIntro: "hrd03_c51_portal",
        shieldIntro: "hrd03_c50a_shield_intro",
        bossIntro: "hrd03_c04a_obs_boss_intro",
        bossDead: "hrd03_c05_obs_boss_death"
    },
    VO: {
        postIntroVO: "obstacle_intro",
        postShieldIntroVO: "base_attack_lava_post_nis",
        postBossSpawnVO: "obstacle_boss_overworld",
        postBossDeath: "obstacle_boss_death_initial",
        postBossDeathDelayedReaction: "obstacle_boss_death_subesequent"
    },
    music: {
        [BASE_SIZE_OUTPOST]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_obstacle_outpost_1",
            [VILLAGE_VARIATION_B]: "badger:music_combat_obstacle_outpost_2",
            [VILLAGE_VARIATION_C]: "badger:music_combat_obstacle_outpost_3"
        },
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_obstacle_base_small_1",
            [VILLAGE_VARIATION_B]: "badger:music_combat_obstacle_base_small_2"
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_obstacle_base_medium_1",
            [VILLAGE_VARIATION_B]: "badger:music_combat_obstacle_base_medium_2"
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_obstacle_base_large_1"
        },
        [BASE_SIZE_BOSS]: {
            [VILLAGE_VARIATION_DEFAULT]: "badger:music_combat_obstacle_base_boss_1"
        }
        //Add boss size
    },
    unitLoiterDelay: 45,
    crystalGuardUnits: [PIGLIN_ARCHETYPE.LAVA_LAUNCHER, 1],
    bridgeZone: {
        none: "",
        one: "obstacleBridge1",
        two: "obstacleBridge2",
        three: "obstacleBridge3",
        four: "obstacleBridge4",
        five: "obstacleBridge5",
        six: "obstacleBridge6"
    },
    bossFinalStageSpawns: [
        { amount: 10, unit: PIGLIN_ARCHETYPE.GRUNTER },
        { amount: 2, unit: PIGLIN_ARCHETYPE.SEEKER },
        { amount: 4, unit: PIGLIN_ARCHETYPE.GRENADIER },
        { amount: 3, unit: PIGLIN_ARCHETYPE.MEDIC }
    ],
    villageAttack: {
        fobSmall: {
            baseConstructor: (villageId) => {
                _ObstacleFactionAttackAMakeBase(villageId)
            },
            timeBetweenWaves: 60,
            waves: [
                [3, [PIGLIN_ARCHETYPE.GRUNTER, 25], [PIGLIN_ARCHETYPE.MEDIC, 5]],
                [5, [PIGLIN_ARCHETYPE.GRENADIER, 8], [PIGLIN_ARCHETYPE.GRUNTER, 25], [PIGLIN_ARCHETYPE.MEDIC, 10]],
                [6, [PIGLIN_ARCHETYPE.SEEKER, 4], [PIGLIN_ARCHETYPE.LAVA_LAUNCHER, 1], [PIGLIN_ARCHETYPE.GRENADIER, 8], [PIGLIN_ARCHETYPE.GRUNTER, 40], [PIGLIN_ARCHETYPE.MEDIC, 10]],
                [8, [PIGLIN_ARCHETYPE.SEEKER, 10], [PIGLIN_ARCHETYPE.LAVA_LAUNCHER, 2], [PIGLIN_ARCHETYPE.GRENADIER, 16], [PIGLIN_ARCHETYPE.GRUNTER, 50], [PIGLIN_ARCHETYPE.MEDIC, 10]]
            ],
            extraGuards: {
                archetype: PIGLIN_ARCHETYPE.GRUNTER,
                count: 10
            },
            portalGuards: {
                archetype: PIGLIN_ARCHETYPE.LAVA_LAUNCHER,
                count: 1
            }
        },
        fobMedium: {
            baseConstructor: (villageId) => {
                _ObstacleFactionAttackBMakeBase(villageId)
            },
            timeBetweenWaves: 45,
            waves: [
                [3, [PIGLIN_ARCHETYPE.GRUNTER, 40], [PIGLIN_ARCHETYPE.MEDIC, 5]],
                [5, [PIGLIN_ARCHETYPE.GRENADIER, 8], [PIGLIN_ARCHETYPE.LAVA_LAUNCHER, 1], [PIGLIN_ARCHETYPE.GRUNTER, 50], [PIGLIN_ARCHETYPE.MEDIC, 8]],
                [6, [PIGLIN_ARCHETYPE.SEEKER, 4], [PIGLIN_ARCHETYPE.LAVA_LAUNCHER, 1], [PIGLIN_ARCHETYPE.GRENADIER, 10], [PIGLIN_ARCHETYPE.GRUNTER, 50], [PIGLIN_ARCHETYPE.MEDIC, 10]],
                [8, [PIGLIN_ARCHETYPE.SEEKER, 6], [PIGLIN_ARCHETYPE.LAVA_LAUNCHER, 2], [PIGLIN_ARCHETYPE.GRENADIER, 15], [PIGLIN_ARCHETYPE.GRUNTER, 50], [PIGLIN_ARCHETYPE.MEDIC, 15]],
                [8, [PIGLIN_ARCHETYPE.SEEKER, 10], [PIGLIN_ARCHETYPE.LAVA_LAUNCHER, 2], [PIGLIN_ARCHETYPE.GRENADIER, 15], [PIGLIN_ARCHETYPE.GRUNTER, 50], [PIGLIN_ARCHETYPE.MEDIC, 15]]
            ],
            extraGuards: {
                archetype: PIGLIN_ARCHETYPE.GRENADIER,
                count: 10
            },
            portalGuards: {
                archetype: PIGLIN_ARCHETYPE.LAVA_LAUNCHER,
                count: 2
            }
        }
    },
    portalHealthThreshold: {
        first: {
            health: 0.9,
            portalSpawns: {
                [BASE_SIZE_SMALL]: {
                    villageVariationA: [],
                    villageVariationB: []
                },
                [BASE_SIZE_MEDIUM]: {
                    villageVariationA: [],
                    villageVariationB: []
                },
                [BASE_SIZE_LARGE]: {
                    villageVariationA: []
                }
            }
        },
        second: {
            health: 0.75,
            portalSpawns: {
                [BASE_SIZE_SMALL]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ],
                    villageVariationB: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                },
                [BASE_SIZE_MEDIUM]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ],
                    villageVariationB: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                },
                [BASE_SIZE_LARGE]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                }
            }
        },
        third: {
            health: 0.6,
            portalSpawns: {
                [BASE_SIZE_SMALL]: {
                    villageVariationA: [],
                    villageVariationB: []
                },
                [BASE_SIZE_MEDIUM]: {
                    villageVariationA: [],
                    villageVariationB: []
                },
                [BASE_SIZE_LARGE]: {
                    villageVariationA: []
                }
            }
        },
        fourth: {
            health: 0.34,
            portalSpawns: {
                [BASE_SIZE_SMALL]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ],
                    villageVariationB: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                },
                [BASE_SIZE_MEDIUM]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ],
                    villageVariationB: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                },
                [BASE_SIZE_LARGE]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                }
            }
        },
        fifth: {
            health: 0.25,
            portalSpawns: {
                [BASE_SIZE_SMALL]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ],
                    villageVariationB: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                },
                [BASE_SIZE_MEDIUM]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ],
                    villageVariationB: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                },
                [BASE_SIZE_LARGE]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                }
            }
        }
    },

    aiConfig: {
        [ObstacleAI.Assault]: {
            controllerArchetype: "badger:ai_entity_rotters_offensive",
            controllerTag: "obstacleAttackAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["obstacleAssaultRally"],
            reinforcementControlGroupTag: "obstacleAssault",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        },
        [ObstacleAI.Siege]: {
            controllerArchetype: "badger:ai_entity_rotters_siege",
            controllerTag: "obstacleSiegeAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["obstacleSiegeRally"],
            reinforcementControlGroupTag: "obstacleSiege",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        },
        [ObstacleAI.Guard]: {
            controllerArchetype: "badger:ai_entity_rotters_defensive",
            controllerTag: "obstacleDefendAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["obstacleGuardRally"],
            reinforcementControlGroupTag: "obstacleGuard",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        }
    },
    discreteEncounters: {
        frontlineA: {
            villageVariationA1: {
                ["de0"]: {
                    type: ObstacleDiscreteEncounters.sporeSpread,
                    amount: 1
                }
            },
            villageVariationA2: {
                ["de0"]: {
                    type: ObstacleDiscreteEncounters.sporeSpread,
                    amount: 1
                }
            },
            villageVariationA3: {
                ["de0"]: {
                    type: ObstacleDiscreteEncounters.sporeSpread,
                    amount: 1
                }
            },
            //----------------------------------------------------
            villageVariationB1: {
                ["de0"]: {
                    type: ObstacleDiscreteEncounters.grenadierNether,
                    amount: 1
                }
            },
            villageVariationB2: {
                ["de0"]: {
                    type: ObstacleDiscreteEncounters.sporeGrowth,
                    amount: 1
                }
            },
            villageVariationB3: {
                ["de0"]: {
                    type: ObstacleDiscreteEncounters.sporeGrowth,
                    amount: 1
                }
            },
            //----------------------------------------------------
            villageVariationC1: {
                ["de0"]: {
                    type: ObstacleDiscreteEncounters.grenadierNether,
                    amount: 1
                }
            },
            villageVariationC2: {
                ["de0"]: {
                    type: ObstacleDiscreteEncounters.grenadierNether,
                    amount: 1
                }
            },
            villageVariationC3: {
                ["de0"]: {
                    type: ObstacleDiscreteEncounters.rotSquad,
                    amount: 1
                }
            }
        },
        small: {
            villageVariationA: {
                ["de0"]: {
                    type: ObstacleDiscreteEncounters.sporeSpread,
                    amount: 4
                }
            },
            villageVariationB: {
                ["de0"]: {
                    type: ObstacleDiscreteEncounters.sporeSpread,
                    amount: 4
                }
            }
        },
        medium: {
            villageVariationA: {
                ["de0"]: {
                    type: ObstacleDiscreteEncounters.grenadiers,
                    amount: 5
                },
                ["de1"]: {
                    type: ObstacleDiscreteEncounters.sporeScore,
                    amount: 1
                }
            },
            villageVariationB: {
                ["de0"]: {
                    type: ObstacleDiscreteEncounters.grenadiers,
                    amount: 4
                },
                ["de1"]: {
                    type: ObstacleDiscreteEncounters.highGround,
                    amount: 2
                }
            }
        },
        large: {
            villageVariationA: {
                ["de0"]: {
                    type: ObstacleDiscreteEncounters.rotSquad,
                    amount: 3
                },
                ["de1"]: {
                    type: ObstacleDiscreteEncounters.sporeScore,
                    amount: 3
                },
                ["de2"]: {
                    type: ObstacleDiscreteEncounters.highGround2,
                    amount: 2
                }
            }
        },
        boss: {
            villageVariationDefault: {
                ["de0"]: {
                    type: ObstacleDiscreteEncounters.noCannonForYou,
                    amount: 2
                },
                ["de1"]: {
                    type: ObstacleDiscreteEncounters.sporeScore,
                    amount: 2
                },
                ["de2"]: {
                    type: ObstacleDiscreteEncounters.grenadierGuards,
                    amount: 1
                },
                ["de3"]: {
                    type: ObstacleDiscreteEncounters.highGround2,
                    amount: 2
                }
            }
        }
    },
    escalation: {
        phase1: {
            name: "obstacleBaseApproached",
            escalateVO: [],
            stinger: "",
            escalationLevel: 1,
            audio: "phase1_obstacle",
            bossAudio: "phase1",
            structureMinideck: [],
            portalSpawns: {}
        },
        phase2: {
            name: "bridgeBuilt",
            escalateVO: ["piglin_obstacle_escalation_3", "piglin_obstacle_escalation_6"],
            stinger: "keepGoing",
            escalationLevel: 2,
            audio: "phase2_obstacle",
            bossAudio: "phase2",
            structureMinideck: [],
            portalSpawns: {
                [BASE_SIZE_SMALL]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ],
                    villageVariationB: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                },
                [BASE_SIZE_MEDIUM]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ],
                    villageVariationB: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                },
                [BASE_SIZE_LARGE]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                }
            }
        },
        phase3: {
            name: "keyStructuresDestroyed",
            escalateVO: ["piglin_obstacle_escalation_1", "piglin_obstacle_escalation_2", "piglin_obstacle_escalation_3", "piglin_obstacle_escalation_4", "piglin_obstacle_escalation_5", "piglin_obstacle_escalation_6"],
            stinger: "keepGoing",
            escalationLevel: 3,
            audio: "phase3_obstacle",
            bossAudio: "phase3",
            structureMinideck: [],
            portalSpawns: {
                [BASE_SIZE_SMALL]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ],
                    villageVariationB: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                },
                [BASE_SIZE_MEDIUM]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ],
                    villageVariationB: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                },
                [BASE_SIZE_LARGE]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                }
            }
        },
        phase4: {
            name: "playerCloseToBase",
            stinger: "keepGoing",
            escalationLevel: 4,
            escalateVO: [],
            audio: "phase4_obstacle",
            bossAudio: "phase4",
            structureMinideck: [],
            portalSpawns: {
                [BASE_SIZE_SMALL]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ],
                    villageVariationB: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                },
                [BASE_SIZE_MEDIUM]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ],
                    villageVariationB: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                },
                [BASE_SIZE_LARGE]: {
                    villageVariationA: [
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                    ]
                }
            }
        }
    },
    responses: {
        unitAssignedTag: "response_assigned",
        unitExemptTag: "response_exempt",
        minTimeBetweenResponses: 25,
        structureBuilt: {
            tier2: {
                gatherPercentage: 60,
                aiDistribution: [
                    [[ObstacleAI.Assault], 60],
                    [[ObstacleAI.Guard], 20],
                    [[ObstacleAI.Siege], 20]
                ],
                portalSpawns: {
                    [BASE_SIZE_SMALL]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ],
                        villageVariationB: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    },
                    [BASE_SIZE_MEDIUM]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ],
                        villageVariationB: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    },
                    [BASE_SIZE_LARGE]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    }
                }
            },
            tier3: {
                gatherPercentage: 100,
                aiDistribution: [
                    [[ObstacleAI.Assault], 60],
                    [[ObstacleAI.Guard], 20],
                    [[ObstacleAI.Siege], 20]
                ],
                portalSpawns: {
                    [BASE_SIZE_SMALL]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ],
                        villageVariationB: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    },
                    [BASE_SIZE_MEDIUM]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ],
                        villageVariationB: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    },
                    [BASE_SIZE_LARGE]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    }
                }
            },
            bridge: {
                gatherPercentage: 75,
                aiDistribution: [
                    [[ObstacleAI.Assault], 60],
                    [[ObstacleAI.Guard], 20],
                    [[ObstacleAI.Siege], 20]
                ],
                portalSpawns: {
                    [BASE_SIZE_SMALL]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ],
                        villageVariationB: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    },
                    [BASE_SIZE_MEDIUM]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ],
                        villageVariationB: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    },
                    [BASE_SIZE_LARGE]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    }
                }
            }
        },
        structureDamaged: {
            tier2: {
                gatherPercentage: 60,
                aiDistribution: [
                    [[ObstacleAI.Assault], 60],
                    [[ObstacleAI.Guard], 20],
                    [[ObstacleAI.Siege], 20]
                ],
                portalSpawns: {
                    [BASE_SIZE_SMALL]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ],
                        villageVariationB: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    },
                    [BASE_SIZE_MEDIUM]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ],
                        villageVariationB: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    },
                    [BASE_SIZE_LARGE]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    }
                }
            },
            tier3: {
                gatherPercentage: 100,
                aiDistribution: [
                    [[ObstacleAI.Assault], 60],
                    [[ObstacleAI.Guard], 20],
                    [[ObstacleAI.Siege], 20]
                ],
                portalSpawns: {
                    [BASE_SIZE_SMALL]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ],
                        villageVariationB: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    },
                    [BASE_SIZE_MEDIUM]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ],
                        villageVariationB: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    },
                    [BASE_SIZE_LARGE]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    }
                }
            }
        },
        structureDestroyed: {
            tier2: {
                gatherPercentage: 100,
                aiDistribution: [
                    [[ObstacleAI.Assault], 60],
                    [[ObstacleAI.Guard], 20],
                    [[ObstacleAI.Siege], 20]
                ],
                portalSpawns: {
                    [BASE_SIZE_SMALL]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ],
                        villageVariationB: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    },
                    [BASE_SIZE_MEDIUM]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ],
                        villageVariationB: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    },
                    [BASE_SIZE_LARGE]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    }
                }
            },
            tier3: {
                gatherPercentage: 100,
                aiDistribution: [
                    [[ObstacleAI.Assault], 60],
                    [[ObstacleAI.Guard], 20],
                    [[ObstacleAI.Siege], 20]
                ],
                portalSpawns: {
                    [BASE_SIZE_SMALL]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ],
                        villageVariationB: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    },
                    [BASE_SIZE_MEDIUM]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ],
                        villageVariationB: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    },
                    [BASE_SIZE_LARGE]: {
                        villageVariationA: [
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
                        ]
                    }
                }
            }
        },
        scripted: {}
    },
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
        [BASE_SIZE_OUTPOST]: {
            //----- VARIATION A -----
            [VILLAGE_VARIATION_A]: {
                spreader: [
                    { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC },
                    { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER }
                ]
            },
            //----- VARIATION B -----
            [VILLAGE_VARIATION_B]: {
                spreader: [{ amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }]
            },
            //----- VARIATION C -----
            [VILLAGE_VARIATION_C]: {
                spreader: [
                    { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC },
                    { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER }
                ]
            }
        },
        /*
        =================
        ===== SMALL =====  
        =================
        */
        [BASE_SIZE_SMALL]: {
            //----- VARIATION A -----
            [VILLAGE_VARIATION_A]: {},
            //----- VARIATION B -----
            [VILLAGE_VARIATION_B]: {}
        },
        /*
        ==================
        ===== MEDIUM =====  
        ==================
        */
        [BASE_SIZE_MEDIUM]: {
            //----- VARIATION A -----
            [VILLAGE_VARIATION_A]: {},
            //----- VARIATION B -----
            [VILLAGE_VARIATION_B]: {}
        },
        /*
        =================
        ===== LARGE =====  
        =================
        */
        [BASE_SIZE_LARGE]: {
            //----- VARIATION A -----
            [VILLAGE_VARIATION_A]: {}
        },
        /*
        ================
        ===== BOSS =====  
        ================
        */
        [BASE_SIZE_BOSS]: {
            [VILLAGE_VARIATION_DEFAULT]: {}
        }
    }
}

const obstacleZoneCards = {
    smallSpire: "obstacleSmallSpireZone",
    smallPlatform: "obstacleSmallLowPlatformZone",
    mediumPlatform: "obstacleMediumPlatform",
    midPlatform: "obstacleSmallMidPlatformZone"
}

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

const GetObstacleAIConfig = () => {
    return obstacleVal.aiConfig
}

const GetObstacleRallyPointconfig = (villageId, ControlGroupTag) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)
    return obstacleVal.rallypoints[size][flavour][ControlGroupTag]
}

const GetObstacleDescreteEncounters = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    let flavour = GetVillageFlavour(villageId)
    if (size === BASE_SIZE_OUTPOST) flavour += GetOutpostDifficultyFromPhase()
    return obstacleVal.discreteEncounters[size][flavour]
}

const _ObstacleSpawnBossBaseResponseUnits = (villageId, spawnedUnits) => {
    const spawnLocation = GetVillagePortalSpawnLocation(villageId)
    let newUnits = EMPTY_ENTITY_GROUP
    if (spawnedUnits === undefined || spawnedUnits.length === 0) {
        return newUnits
    }

    if (Array.isArray(spawnedUnits)) {
        for (const entry of spawnedUnits) {
            newUnits = OPER_Append(newUnits, SpawnEntitiesAt(spawnLocation, entry.unit, entry.amount, TEAM_ORANGE, villageId))
        }
    } else {
        newUnits = SpawnEntitiesAt(spawnLocation, spawnedUnits.unit, spawnedUnits.amount, TEAM_ORANGE, villageId)
    }

    return newUnits
}

const _playObstacleAttackStinger = (villageId) => {
    const portal = GetVillagePortal(villageId)
    if (HasEntities(portal)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_attack", portal)
    }
}

const _playObstacleTargetStinger = (villageId) => {
    const portal = GetVillagePortal(villageId)
    if (HasEntities(portal)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_target", portal)
    }
}

const _SetObstacleBarracksConfig = (spawner) => {
    if (QUERY_HasTags(spawner, [BARRACKS_NAME_FIGHTER])) {
        SetBarracksConfigForVillageVariation(spawner, FighterBarracksConfig_ObstacleFaction_Variations)
    } else if (QUERY_HasTags(spawner, [BARRACKS_NAME_DISRUPTOR])) {
        SetBarracksConfigForVillageVariation(spawner, DisruptorBarracksConfig_ObstacleFaction_Variations)
    } else if (QUERY_HasTags(spawner, [BARRACKS_NAME_SIEGER])) {
        SetBarracksConfigForVillageVariation(spawner, SiegerBarracksConfig_ObstacleFaction_Variations)
    }
}

const _CheckIfObstacleFactionIsDefeated = () => {
    if (IsPiglinFactionDefeated(FACTION_NAME_OBSTACLE)) {
        GV_ROAMING_PIGLIN_OBSTACLE_FACTION_SPAWNERS.forEach((roamingGV) => {
            OUTPUT_SetGlobalVariable(roamingGV, 1)
        })

        // Correct horde decks since one horde just went out of action
        ReplenishNightOutpostHordeDeck()
    }
}

/* -------------------------------------------------------------------------- */
/*                               Base Bootstrap                               */
/* -------------------------------------------------------------------------- */

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignBasesEnabled, (rule) => {
    if (rule.value) {
        LISTENFOR_VillageGenerated({
            snippet: "vg_obstacle",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_OBSTACLE
        })

        LISTENFOR_VillageGenerated({
            snippet: "vg_obstacle_response",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_OBSTACLE
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_obstacle_portal_on",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "obstacle_portal_on"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_obstacle_portal_off",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "obstacle_portal_off"
        })
    }
})

SNIPPET_ExternalEvent("ee_obstacle_portal_on", () => {
    const introVar = obstacleVal.cinematic.shieldIntro
    const player = RandomEntity(GetPlayers())
    const portal = FILTER_ByDistance(QUERY_GetEntitiesWithTags("portal_piglin"), player, 500)
    const villageId = QUERY_GetVillageIDFromEntity(portal)

    LISTENFOR_CinematicEvent({
        snippet: "ce_obstacle_portal_shield_on",
        ownerVillageId: villageId,
        eventName: "portal_shield_on"
    })

    OUTPUT_TriggerCinematic(introVar, [player])
})

SNIPPET_ExternalEvent("ee_obstacle_portal_off", () => {
    const introVar = obstacleVal.cinematic.shieldDown
    const player = RandomEntity(GetPlayers())
    const portal = FILTER_ByDistance(QUERY_GetEntitiesWithTags("portal_piglin"), player, 500)
    const piglinStructure = RandomEntity(QUERY_GetEntitiesWithTags("piglin"))
    const villageId = QUERY_GetVillageIDFromEntity(portal)

    LISTENFOR_CinematicEvent({
        snippet: "ce_obstacle_portal_shield_off",
        ownerVillageId: villageId,
        eventName: "portal_shield_off"
    })

    OUTPUT_TriggerCinematic(introVar, [piglinStructure, portal])
})

SNIPPET_SpatialPartitionEntered("spe_obstacle_general", (triggerEntity, intruderEntity, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const villageFlavour = GetVillageFlavour(villageId)
    const portalEntity = GetVillagePortal(villageId)
    if (GetVillageVariable(villageId, "composition_listeners") === 0) {
        SetVillageVariable(villageId, "composition_listeners", 1)
        if (obstacleVal.rallypoints.hasOwnProperty(villageSize)) {
            CreateCompositionRallyPoints(villageId, obstacleVal.rallypoints[villageSize][villageFlavour])
        }
    }

    if (IsStructureDestructionBase(villageId) && QUERY_GetGlobalVariable(piglinGeneralVal.globals.firstCoilCinePlayed) !== 0) {
        if (DoOnce(obstacleVal.global.hasVisitedCoilBase + villageId)) {
            SetPortalInvulnerable(villageId, true)
        }
    }

    if (IsBossVillage(villageId)) {
        if (DoOnce(obstacleVal.global.bossIntroPresented)) {
            // Initializaing this here because the cinematic can get bugged out on Switch (bug 913983)
            LISTENFOR_VillageDestroyed({
                snippet: "vd_rotters_boss_base_destroyed",
                ownerVillageId: villageId,
                villageId: villageId
            })

            LISTENFOR_CinematicFinished({
                snippet: "obstacleSpawnObstacleBoss",
                ownerVillageId: villageId,
                cinematicName: obstacleVal.cinematic.bossIntro
            })

            TriggerCinematicAndListenForFinish(obstacleVal.cinematic.bossIntro, [portalEntity, intruderEntity], villageId)
        }
    } else if (IsStructureDestructionBase(villageId)) {
        if (DoOnce(piglinGeneralVal.globals.firstCoilCinePlayed)) {
            DoOnce(obstacleVal.global.hasVisitedCoilBase + villageId) // needed to make sure the lavacoils at the first base don't become re-invulnerable
            LISTENFOR_CinematicEvent({
                snippet: "ce_obstacle_portal_shield_on",
                ownerVillageId: villageId,
                eventName: "portal_shield_on"
            })
            TriggerCinematicAndListenForFinish(obstacleVal.cinematic.shieldIntro, [intruderEntity], villageId)
        }
    } else {
        if (DoOnce(obstacleVal.global.hasVisited)) {
            TriggerCinematicAndListenForFinish(obstacleVal.cinematic.firstTimeNonShieldBaseIntro, [portalEntity, intruderEntity], villageId)
        }
    }

    //Play audio if base is invasion action source
    CheckAndPlayInvasionActionOriginPointVO(villageId)

    OUTPUT_SetObjectiveHealthBarVisible(portalEntity, true)

    // Escalation
    if (!IsBaseEscalated(triggerEntity, obstacleVal.escalation.phase1.name)) {
        MarkBaseAsEscalated(triggerEntity, obstacleVal.escalation.phase1.name)
        SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, obstacleVal.barracks, 1)
    }
})

SNIPPET_CinematicEvent("ce_obstacle_portal_shield_on", (payload) => {
    SetPortalInvulnerable(payload.ownerVillageId, true)
    Once()
})

SNIPPET_BuildingComplete("bc_obstacle_portal", (portalEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(portalEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    if (IsSmallOrGreater(baseSize)) {
        SetVillageVariable(villageId, obstacleVal.village.preventBossBridgeResponse, 0)

        // DEBUG: Ensure base has engineers to ticketed builds can build
        if (baseSize !== BASE_SIZE_BOSS) {
            SetupRespawningEngineers(villageId, 1, 30)
            SetAudioPhaseForBase(villageId, obstacleVal.audioPerPhaseArray[0])
        } else {
            SetAudioPhaseForBase(villageId, obstacleVal.audioPerBossPhaseArray[0])
        }

        //INNER KEEP TRIGGER VOLUME
        const obstacleInnerKeepTV = SpawnTriggerVolumeWithMultipleTagsets(portalEntity, portalEntity, "badger:spatial_trigger_obstacle_inner", TEAM_ORANGE, villageId, true, TAGSET_PLAYER_OR_MOB)

        LISTENFOR_SpatialPartitionEntered({
            snippet: "spe_obstacle_player_enter_inner_keep",
            ownerVillageId: villageId,
            triggerEntity: obstacleInnerKeepTV
        })
        //LISTEN FOR OBSTACLE Faction DESTRUCTION
        LISTENFOR_VillageDestroyed({
            snippet: "vd_obstacle_faction_portal",
            ownerVillageId: villageId,
            villageId: villageId,
            payloadEntities: obstacleInnerKeepTV, // clean this on portal desruction
            despawned: false
        })

        OUTPUT_SetObjectiveHealthBarVisible(portalEntity, false)
    }

    LISTENFOR_DeferredDeath({
        snippet: "dd_obstacle_portal_destruction",
        ownerVillageId: villageId,
        villageId: villageId,
        entities: portalEntity
    })
})

SNIPPET_DeferredDeath("dd_obstacle_portal_destruction", (entity, payload) => {
    PlayPortalDestructionCine(entity, FACTION_NAME_OBSTACLE)
})

/* -------------------------------------------------------------------------- */
/*                                 Escalations                                */
/* -------------------------------------------------------------------------- */
const _obstacleEscalate = (villageId, phase, _targetEntity) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const portal = GetVillagePortal(villageId)
    if (IsBaseEscalated(portal, phase.name)) {
        return
    }

    MarkVillageAsEscalatedById(villageId, phase.name)
    SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, obstacleVal.barracks, phase.escalationLevel)
    if (baseSize !== BASE_SIZE_BOSS) {
        SetAudioPhaseForBase(villageId, phase.audio)
    } else {
        SetAudioPhaseForBase(villageId, phase.bossAudio)
    }

    if (phase.stinger !== "") {
        PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_OBSTACLE, phase.stinger), portal)
    }
    if (phase.escalateVO.length > 0) {
        PlayPresentationActionToAll(ChooseFromArray(phase.escalateVO))
    }
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let newUnits = EMPTY_ENTITY_GROUP
    if (phase.portalSpawns.hasOwnProperty(baseSize)) {
        newUnits = SpawnVillageVariationUnits(villageId, phase.portalSpawns[baseSize], spawnPosition)
    }
}

//wall destroyed//
SNIPPET_NonPopCappedEntityDestroyed("ed_obstacle_wall_destroyed", (destroyedEntity, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(destroyedEntity)
    if (!IsBaseEscalated(GetVillagePortal(villageId), obstacleVal.escalation.phase4.name)) {
        _obstacleEscalate(villageId, obstacleVal.escalation.phase4, destroyedEntity)
    }
    PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_OBSTACLE, "keepGoing"), villageId)
    Once()
})

//phase 3 triggered //
SNIPPET_NonPopCappedEntityDestroyed("ed_obstacle_phase_3_destroyed_structures", (destroyEntity, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(destroyEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const villageEntity = FILTER_RandomCount(villageEntities, 1)

    if (!IsBaseEscalated(villageEntity, obstacleVal.escalation.phase3.name)) {
        let structuresToDestroyCount = 0

        if (IsOutpost(baseSize)) {
            structuresToDestroyCount = 9
        } else if (IsSmall(baseSize)) {
            structuresToDestroyCount = 3
        } else if (IsMedium(baseSize)) {
            structuresToDestroyCount = 6
        } else if (IsLarge(baseSize)) {
            structuresToDestroyCount = 9
        }
        const numberOfDestroyedBuildings = GetVillageVariable(villageId, obstacleVal.village.obstaclePhase3BuildingDestroyedCount)
        SetVillageVariable(villageId, obstacleVal.village.obstaclePhase3BuildingDestroyedCount, numberOfDestroyedBuildings + 1)

        if (numberOfDestroyedBuildings >= structuresToDestroyCount) {
            _obstacleEscalate(villageId, obstacleVal.escalation.phase3, destroyEntity)
        }
    }
})

//phase 4 triggered // inner keep touched
SNIPPET_SpatialPartitionEntered("spe_obstacle_player_enter_inner_keep", (triggerEntity, _intruderEntity, _payload) => {
    if (!IsBaseEscalated(triggerEntity, obstacleVal.escalation.phase4.name)) {
        const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
        const portal = GetVillagePortal(villageId)
        _obstacleEscalate(villageId, obstacleVal.escalation.phase4, GetPlayerOrMobCloseToPortal(portal))
    }
})
/* -------------------------------------------------------------------------- */
/*                               Piglin Responses                             */
/* -------------------------------------------------------------------------- */
const _InitObstacleResponses = (villageId, hasPortal) => {
    SetVillageVariable(villageId, obstacleVal.village.ScriptedResponsesEnabled, 1)
    SetVillageVariable(villageId, obstacleVal.village.ScriptedResponsesTimeout, 0)
    _SetupObstacleResponseDebounce(villageId)
    if (hasPortal) {
        BASE_InitPiglinStructureDamagedResponse(villageId, [
            { snippetName: "sd_portal_damaged_phase1", debounceTimer: 60, healthThreshold: obstacleVal.portalHealthThreshold.first.health, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] },
            { snippetName: "sd_portal_damaged_phase2", debounceTimer: 60, healthThreshold: obstacleVal.portalHealthThreshold.second.health, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] },
            { snippetName: "sd_portal_damaged_phase3", debounceTimer: 60, healthThreshold: obstacleVal.portalHealthThreshold.third.health, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] },
            { snippetName: "sd_portal_damaged_phase4", debounceTimer: 60, healthThreshold: obstacleVal.portalHealthThreshold.fourth.health, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] },
            { snippetName: "sd_portal_damaged_phase5", debounceTimer: 60, healthThreshold: obstacleVal.portalHealthThreshold.fifth.health, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] },

            { snippetName: "sd_tier_2_structure_response", debounceTimer: 120, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["tier2PiglinStructure"] },
            { snippetName: "sd_tier_2_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["piglin", "barracks"] },
            { snippetName: "sd_tier_2_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["piglin", "pigGate"] },

            { snippetName: "sd_tier_3_structure_response", debounceTimer: 120, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["tier3PiglinStructure"] },
            { snippetName: "sd_tier_3_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["piglin", "pigCarpenter"] },
            { snippetName: "sd_tier_3_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["piglin", "pigKnockbackTower"] }
        ])
        BASE_InitPlayerBuiltStructureResponse(villageId, [
            { snippetName: "pb_tier_2_structure_response", debounceTimer: 80, distanceCheck: 350, includeTags: ["tier2PlayerStructure"] },
            { snippetName: "pb_tier_3_structure_response", debounceTimer: 80, distanceCheck: 350, includeTags: ["tier3PlayerStructure"] },
            { snippetName: "pb_bridge_response", debounceTimer: 120, distanceCheck: 350, includeTags: ["playerBridge", "buildable_structure"] }
        ])
    } else {
        BASE_InitPiglinStructureDamagedResponse(villageId, [
            { snippetName: "sd_tier_2_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["tier2PiglinStructure"] },
            { snippetName: "sd_tier_2_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["piglin", "barracks"] },
            { snippetName: "sd_tier_2_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["piglin", "pigGate"] },

            { snippetName: "sd_tier_3_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["tier3PiglinStructure"] },
            { snippetName: "sd_tier_3_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["piglin", "pigCarpenter"] },
            { snippetName: "sd_tier_3_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["piglin", "pigKnockbackTower"] }
        ])
        BASE_InitPlayerBuiltStructureResponse(villageId, [
            { snippetName: "pb_tier_2_structure_response", debounceTimer: 30, distanceCheck: 350, includeTags: ["tier2PlayerStructure"] },
            { snippetName: "pb_tier_3_structure_response", debounceTimer: 30, distanceCheck: 350, includeTags: ["tier3PlayerStructure"] }
        ])
    }

    BASE_InitPiglinStructureDestroyedResponse(villageId, [
        { snippetName: "sk_tier_2_structure_response", debounceTimer: 120, includeTags: ["tier2PiglinStructure"] },
        { snippetName: "sk_tier_2_structure_response", debounceTimer: 30, includeTags: ["piglin", "barracks"] },
        { snippetName: "sk_tier_2_structure_response", debounceTimer: 30, includeTags: ["piglin", "pigGate"] },

        { snippetName: "sk_tier_3_structure_response", debounceTimer: 120, includeTags: ["tier3PiglinStructure"] },
        { snippetName: "sk_tier_3_structure_response", debounceTimer: 60, includeTags: ["piglin", "pigCarpenter"] },
        { snippetName: "sk_tier_3_structure_response", debounceTimer: 60, includeTags: ["piglin", "pigKnockbackTower"] }
    ])
}

const _SetupObstacleResponseDebounce = (villageId) => {
    LISTENFOR_EntityTimer({
        snippet: "lt_scriptedResponseDebounce",
        ownerVillageId: villageId,
        entity: GetVillageEntityFromID(villageId),
        timerName: "obstacleScriptedResponseDebounce"
    })
}

const _LaunchObstacleResponse = (villageId, target = EMPTY_ENTITY_GROUP, controlGroups = []) => {
    if (HasEntities(target)) {
        const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
        const playerMobs = QUERY_GetEntitiesWithTagFilter(["mob"], ["piglin"])
        let piglinTarget = target
        if (HasEntities(playerMobs)) {
            const closePlayerMobs = FILTER_ByClosest(playerMobs, target, 1)
            if (HasEntities(closePlayerMobs)) piglinTarget = closePlayerMobs
        }

        controlGroups.forEach((group) => {
            const ControlGroupEntity = FILTER_ByTagFilter(villageEntities, [group], [])
            if (HasEntities(ControlGroupEntity)) {
                OUTPUT_ControlGroupMoveToCurrentPosition(ControlGroupEntity, piglinTarget, 8)
            }
        })
    }
}

const _ObstaclePortalDamagedResponse = (portal, phase) => {
    const villageId = QUERY_GetVillageIDFromEntity(portal)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    if (QUERY_GetFactionSizeFromVillageID(villageId) === BASE_SIZE_BOSS) {
        return
    }
    let newUnits = null
    switch (phase) {
        case 1:
            if (obstacleVal.portalHealthThreshold.first.portalSpawns.hasOwnProperty(baseSize)) {
                newUnits = SpawnVillageVariationUnits(villageId, obstacleVal.portalHealthThreshold.first.portalSpawns[baseSize], spawnPosition)
            }
            break
        case 2:
            if (obstacleVal.portalHealthThreshold.second.portalSpawns.hasOwnProperty(baseSize)) {
                newUnits = SpawnVillageVariationUnits(villageId, obstacleVal.portalHealthThreshold.second.portalSpawns[baseSize], spawnPosition)
            }
            break
        case 3: //these all use the same VO
            if (obstacleVal.portalHealthThreshold.third.portalSpawns.hasOwnProperty(baseSize)) {
                newUnits = SpawnVillageVariationUnits(villageId, obstacleVal.portalHealthThreshold.third.portalSpawns[baseSize], spawnPosition)
            }
            break
        case 4:
            PlayCommonPortalHealthGroup2VO(villageId)
            if (obstacleVal.portalHealthThreshold.fourth.portalSpawns.hasOwnProperty(baseSize)) {
                newUnits = SpawnVillageVariationUnits(villageId, obstacleVal.portalHealthThreshold.fourth.portalSpawns[baseSize], spawnPosition)
            }
            break
        case 5:
            if (obstacleVal.portalHealthThreshold.fifth.portalSpawns.hasOwnProperty(baseSize)) {
                newUnits = SpawnVillageVariationUnits(villageId, obstacleVal.portalHealthThreshold.fifth.portalSpawns[baseSize], spawnPosition)
            }
            break
        default:
            break
    }
    if (newUnits !== null) {
        OUTPUT_MoveAttackEntity(newUnits, GetPlayerOrMobCloseToPortal(portal), CALLBACK_NONE) //send units
    }
    GatherNearestUnitsAndSendToLocation(["piglin", "mob"], ["boss", "rottersBoss"], villageId, GetPlayerOrMobCloseToPortal(portal), 100, "", "")
}

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_portal_damaged_phase1", (villageId, portal) => {
    _ObstaclePortalDamagedResponse(portal, 1)
    _LaunchObstacleResponse(villageId, portal, ["obstacleDefendAi", "obstacleAttackAi"])
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_portal_damaged_phase2", (villageId, portal) => {
    _ObstaclePortalDamagedResponse(portal, 2)
    _LaunchObstacleResponse(villageId, portal, ["obstacleDefendAi", "obstacleAttackAi"])
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_portal_damaged_phase3", (villageId, portal) => {
    _ObstaclePortalDamagedResponse(portal, 3)
    _LaunchObstacleResponse(villageId, portal, ["obstacleDefendAi", "obstacleAttackAi"])
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_portal_damaged_phase4", (villageId, portal) => {
    _ObstaclePortalDamagedResponse(portal, 4)
    _LaunchObstacleResponse(villageId, portal, ["obstacleDefendAi", "obstacleAttackAi"])
})
BASE_DeclarePiglinStructureDamagedResponseHandler("sd_portal_damaged_phase5", (villageId, portal) => {
    _ObstaclePortalDamagedResponse(portal, 5)
    _LaunchObstacleResponse(villageId, portal, ["obstacleDefendAi", "obstacleAttackAi"])
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_tier_2_structure_response", (villageId, structure) => {
    _LaunchObstacleResponse(villageId, structure, ["obstacleDefendAi", "obstacleAttackAi"])
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_tier_3_structure_response", (villageId, structure) => {
    _LaunchObstacleResponse(villageId, structure, ["obstacleDefendAi", "obstacleAttackAi"])
})

BASE_DeclarePiglinStructureDestroyedResponseHandler("sk_tier_2_structure_response", (villageId, structure) => {
    _LaunchObstacleResponse(villageId, structure, ["obstacleDefendAi", "obstacleAttackAi"])
})

BASE_DeclarePiglinStructureDestroyedResponseHandler("sk_tier_3_structure_response", (villageId, structure) => {
    _LaunchObstacleResponse(villageId, structure, ["obstacleDefendAi", "obstacleAttackAi"])
})

BASE_DeclarePlayerStructureBuiltResponseHandler("pb_tier_2_structure_response", (villageId, structure) => {
    _LaunchObstacleResponse(villageId, structure, ["obstacleDefendAi", "obstacleAttackAi"])
})

BASE_DeclarePlayerStructureBuiltResponseHandler("pb_tier_3_structure_response", (villageId, structure) => {
    _playObstacleTargetStinger(villageId)
    _LaunchObstacleResponse(villageId, structure, ["obstacleDefendAi", "obstacleAttackAi"])
})

BASE_DeclarePlayerStructureBuiltResponseHandler("pb_bridge_response", (villageId, bridge) => {
    //escalation
    if (!CheckIfVillageIDIsEscalated(villageId, obstacleVal.escalation.phase2.name)) {
        _obstacleEscalate(villageId, obstacleVal.escalation.phase2, bridge)
    }
    _playObstacleTargetStinger(villageId)
    _LaunchObstacleResponse(villageId, bridge, ["obstacleAttackAi"])
})

SNIPPET_NonPopCappedEntityDestroyed("ed_obstacle_knockback_spread_tactic", (_destroyedEntity, payload) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(payload.int)

    let knockbackToDestroyCount = 0

    if (IsSmall(baseSize)) {
        return
    } else if (IsMedium(baseSize)) {
        knockbackToDestroyCount = 1
    } else if (IsLarge(baseSize)) {
        knockbackToDestroyCount = 2
    }
    const numberOfDestroyedKnockback = GetVillageVariable(payload.ownerVillageId, obstacleVal.village.obstacleKnockbackDestroyedCount)
    SetVillageVariable(payload.ownerVillageId, obstacleVal.village.obstacleKnockbackDestroyedCount, numberOfDestroyedKnockback + 1)

    let knockbackTowerDeck

    if (numberOfDestroyedKnockback >= knockbackToDestroyCount) {
        knockbackTowerDeck = BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1)

        DECK_MultiplyByMultipleRules(knockbackTowerDeck, [ZoneFilterCard("obstacleDeadZone"), PlacementPreferenceCard("placeRandomly")])

        OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + payload.ownerVillageId, knockbackTowerDeck)

        Once()
    }
})

SNIPPET_EntityTimer("lt_scriptedResponseDebounce", (entity, payload) => {
    SetVillageVariable(payload.ownerVillageId, obstacleVal.village.ScriptedResponsesTimeout, 0)
})

SNIPPET_EntityTimer("lt_sendSquadToPlayer", (entity, payload) => {
    if (HasEntities(entity)) {
        const portal = GetVillagePortal(payload.ownerVillageId)
        OUTPUT_RemoveTag(entity, obstacleVal.responses.unitAssignedTag)
        OUTPUT_MoveAttackEntity(payload.entities, GetPlayerOrMobCloseToPortal(portal), CALLBACK_NONE) //send units
    }
})

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                           Barracks Functionality                           */
/* -------------------------------------------------------------------------- */

SNIPPET_BuildableSpawnerSpawned("bc_outerbarracks_send_seeker", (buildableSpawner, spawnedEntity) => {
    OUTPUT_MoveAttackEntity(spawnedEntity, RandomEntity(GetPlayers()), CALLBACK_NONE)
})

//generic barracks listeners
SNIPPET_BuildingComplete("bc_obstacle_lava_launcher_barracks", (spawner) => {
    const villageId = QUERY_GetVillageIDFromEntity(spawner)
    LISTENFOR_BuildableSpawnerSpawned({
        snippet: "us_obstacle_lava_launcher",
        ownerVillageId: villageId,
        buildableSpawner: spawner
    })
})

SNIPPET_BuildableSpawnerSpawned("us_obstacle_lava_launcher", (buildableSpawner, spawnedEntity) => {
    OUTPUT_AddTag(spawnedEntity, obstacleVal.responses.unitExemptTag)
})

SNIPPET_BuildingComplete("bc_obstacle_siege_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)
    RecruitSpawnedComposition(villageId, obstacleVal.rallypoints[size][flavour]["obstacleSiege"], buildingEntity, ObstacleAI.Siege)
})

SNIPPET_BuildingComplete("bc_obstacle_assault_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)
    RecruitSpawnedComposition(villageId, obstacleVal.rallypoints[size][flavour]["obstacleAssault"], buildingEntity, ObstacleAI.Assault)
})

SNIPPET_BuildingComplete("bc_obstacle_guard_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)
    RecruitSpawnedComposition(villageId, obstacleVal.rallypoints[size][flavour]["obstacleGuard"], buildingEntity, ObstacleAI.Guard)
})

SNIPPET_BuildingComplete("bc_obstacle_barracks_common_setup", (spawner, _payload) => {
    _SetObstacleBarracksConfig(spawner)
})

/* -------------------------------------------------------------------------- */
/*                                Utility/Logic                               */
/* -------------------------------------------------------------------------- */

const ResetBoss = (villageId) => {
    const Boss = QUERY_GetEntitiesWithTagFilter(["rottersBoss"], [])
    if (HasEntities(Boss)) {
        OUTPUT_SetHealthPercent(Boss, 100)
        OUTPUT_SetAttackMode(Boss, "secondary_attack_2a", false)
        OUTPUT_SetAttackMode(Boss, "secondary_attack_2b", false)
        OUTPUT_SetAttackMode(Boss, "secondary_attack_2c", false)
        OUTPUT_SetAttackMode(Boss, "secondary_attack_1", false)
    }
}

SNIPPET_PresenceEntered("spe_obstacle_gameplay", (triggerEntity, _count, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)

    // Check for whether the village needs to reset due to previous disengagement by the player.
    // At this point, all the popcapped entities in the base have already been culled.
    // The village will never be flagged for a reset while a player is in this spatial partition, so we only need to check when we enter.
    if (ShouldBaseReset(villageId)) {
        const escalationkeys = {}
        for (const phase in obstacleVal.escalation) {
            escalationkeys[phase.name] = phase.name
        }
        ResetBoss(villageId)
        ResetEscalationAndBarracksForVillageVariation(villageId, obstacleVal.barracks, escalationkeys)
        ResetDiscreteEncounters(villageId)
        MarkBaseAsReset(villageId)
    }
})

SNIPPET_VillageDestroyed("vd_obstacle_faction_portal", (villageId, payload) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    _CheckIfObstacleFactionIsDefeated()

    const triggerVolumesToClean = payload.entities
    OUTPUT_DespawnEntities(triggerVolumesToClean)

    if (QUERY_GetGlobalVariable(obstacleVal.global.basesDestroyed) === 0) {
    } else {
    }

    if (QUERY_GetGlobalVariable(obstacleVal.global.basesDestroyed) >= 5) {
    }

    IncrementGlobal(obstacleVal.global.basesDestroyed)
    if (baseSize === BASE_SIZE_LARGE) {
        IncrementGlobal(obstacleVal.global.largeBasesDestroyed)
    }

    OUTPUT_SetGlobalVariable(obstacleVal.global.anyBasesKilled, 1)
    SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, obstacleVal.barracks, 0)
})

/* -------------------------------------------------------------------------- */
/*                              Main Village Init                             */
/* -------------------------------------------------------------------------- */

//initialize ais:
SetupBaseAIs(obstacleVal.aiConfig)

SNIPPET_VillageGenerated("vg_obstacle_response", (villageId, _payload) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    if (baseSize === VILLAGE_SIZE_DEBUG) return
    LISTENFOR_EntitySpawned({
        snippet: "es_set_appearance_to_obstacle_faction_piglins",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["piglin", "mob"]
    })

    //portal built
    LISTENFOR_BuildingComplete({
        snippet: "bc_obstacle_portal",
        ownerVillageId: villageId,
        includeTags: ["portal_piglin"],
        excludeTags: ["roaming"],
        villageId: villageId
    })

    if (IsMobAlliancePiglinSize(baseSize)) {
        return
    }
    //Audio
    SetupAudioEntityForBase(villageId, obstacleVal.music)

    if (baseSize === BASE_SIZE_OUTPOST) {
        SetAudioPhaseForBase(villageId, obstacleVal.audioPerPhaseArray[0])
    }

    //common barracks complete listener

    let flavour = GetVillageFlavour(villageId)
    if (baseSize === BASE_SIZE_OUTPOST) flavour += GetOutpostDifficultyFromPhase()
    const discreteEncounters = obstacleVal.discreteEncounters[baseSize][flavour]

    CreateDiscreteEncountersListeners(villageId, discreteEncounters)

    LISTENFOR_BuildingComplete({
        snippet: "bc_obstacle_barracks_common_setup",
        ownerVillageId: villageId,
        includeTags: ["barracks", "piglin"],
        excludeTags: [],
        villageId: villageId
    })

    if (IsSmallOrGreater(baseSize)) {
        LISTENFOR_BuildingComplete({
            snippet: "bc_obstacle_siege_barracks",
            ownerVillageId: villageId,
            includeTags: ["obstacleSiegeBarracks"],
            villageId: villageId
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_obstacle_assault_barracks",
            ownerVillageId: villageId,
            includeTags: ["obstacleAssaultBarracks"],
            villageId: villageId
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_obstacle_guard_barracks",
            ownerVillageId: villageId,
            includeTags: ["obstacleGuardBarracks"],
            villageId: villageId
        })
    }

    if (baseSize === BASE_SIZE_MEDIUM && GetVillageFlavour(villageId) === VILLAGE_VARIATION_B) {
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_obstacle_wall_destroyed",
            ownerVillageId: villageId,
            includeTags: ["pigGate"],
            villageId: villageId,
            despawned: false
        })
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_obstacle_wall_destroyed",
            ownerVillageId: villageId,
            includeTags: ["piglin_wall"],
            villageId: villageId,
            despawned: false
        })
    }

    //phase 3 destroy multiple structures
    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_obstacle_phase_3_destroyed_structures",
        ownerVillageId: villageId,
        includeTags: ["pigSpreader"],
        villageId: villageId,
        despawned: false
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_obstacle_phase_3_destroyed_structures",
        ownerVillageId: villageId,
        includeTags: ["pigTower"],
        villageId: villageId,
        despawned: false
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_obstacle_phase_3_destroyed_structures",
        ownerVillageId: villageId,
        includeTags: ["pigKnockbackTower"],
        villageId: villageId,
        despawned: false
    })

    //listen for lava launcher spawns, play VO
    LISTENFOR_EntitySpawned({
        snippet: "es_lava_launcher_vo",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["piggo_lava_launcher"]
    })

    //LARGE ONLY
    if (baseSize === BASE_SIZE_LARGE) {
        //knockback spread tactic
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_obstacle_knockback_spread_tactic",
            ownerVillageId: villageId,
            includeTags: ["pigKnockbackTower"],
            villageId: villageId,
            payloadInt: villageId,
            despawned: false
        })
    }
    if (IsStructureDestructionBase(villageId)) {
        //Crystal Objective setup:
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_obstacle_sub_structures",
            ownerVillageId: villageId,
            includeTags: ["pigCrystal"],
            villageId: villageId,
            factionName: FACTION_NAME_OBSTACLE
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_obstacle_sub_structures_count",
            ownerVillageId: villageId,
            includeTags: ["pigCrystal"],
            villageId: villageId,
            factionName: FACTION_NAME_OBSTACLE
        })
    }

    let cardValueBf = ""
    if (baseSize === BASE_SIZE_SMALL) {
        cardValueBf = "obstaclePortalSmall"
    } else if (baseSize === BASE_SIZE_MEDIUM) {
        cardValueBf = "obstaclePortalMedium"
    } else if (baseSize === BASE_SIZE_LARGE) {
        cardValueBf = "obstaclePortalLarge"
    }
    if (cardValueBf !== "") {
        LISTENFOR_BuildingFailedToPlace({
            snippet: "bf_portal_failed_to_place",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cardValue: cardValueBf
        })
    }
})

/* -------------------------------------------------------------------------- */
/*                             Lava Coil Base logic                           */
/* -------------------------------------------------------------------------- */
//Experimental Prototype Setup
SNIPPET_BuildingComplete("bc_obstacle_sub_structures_count", (crystalEntity, payload) => {
    const villageId = payload.ownerVillageId
    const substructures = GetVillageVariable(villageId, "remaining_sub_structures") + 1
    SetVillageVariable(villageId, "remaining_sub_structures", substructures)

    const crystalSpawnLocation = "crystalstructurespawnpoint"
    const spreaderSpawnerPointInstances = QUERY_GetEntitiesWithInstanceName(crystalSpawnLocation)
    const spawnPosition = FILTER_ByParent(spreaderSpawnerPointInstances, crystalEntity)
    if (spawnPosition !== EMPTY_ENTITY_GROUP) {
        SpawnEntitiesAt(spawnPosition, obstacleVal.crystalGuardUnits[0], obstacleVal.crystalGuardUnits[1], TEAM_ORANGE, villageId)
    }
})

SNIPPET_NonPopCappedEntityDestroyed("ed_obstacle_sub_structures", (entity, payload) => {
    const villageId = payload.ownerVillageId
    const substructures = DeltaVillageVariable(villageId, "remaining_sub_structures", -1)
    if (substructures === 0) {
        SetPortalInvulnerable(villageId, false)
    }
})
//END RALLY SETUP SNIPPETS---------------------------------------------------------------

SNIPPET_BuildingComplete("bc_portal_obstacle_fontlineA_crate", (piglinCratesBuilding) => {
    const villageId = QUERY_GetVillageIDFromEntity(piglinCratesBuilding)

    SpawnEntitiesAt(piglinCratesBuilding, PIGLIN_ARCHETYPE.MEDIC, 5, TEAM_ORANGE, villageId)
})

SNIPPET_BuildingComplete("bc_spreader_grenadier_outpost", (spreader) => {
    const villageId = QUERY_GetVillageIDFromEntity(spreader)
    const unit = SpawnEntitiesAt(spreader, PIGLIN_ARCHETYPE.GRENADIER, 1, TEAM_ORANGE, villageId)
    OUTPUT_SetLeash(unit, spreader, 15, 5)
})

SNIPPET_LocalTimer("lt_obstacle_reset_bridge_squad", (payload) => {
    if (QUERY_GetEntitiesCount(payload.entities) > 0) {
        const villageId = QUERY_GetVillageIDFromEntity(payload.entities)
        SetVillageVariable(villageId, obstacleVal.village.preventBridgeSquadResponse, 0)
    }
})

SNIPPET_EntitySpawned("es_set_appearance_to_obstacle_faction_piglins", (piglinEntity) => {
    OUTPUT_OverrideFactionAppearanceByName(piglinEntity, FACTION_NAME_OBSTACLE)
})

/* -------------------------------------------------------------------------- */
/*                           OBSTACLEBOSS Scripting                           */
/* -------------------------------------------------------------------------- */

const _TeleportBoss = (villageId, BossEntity, Stage) => {
    let Target
    switch (Stage) {
        case 1:
            Target = GetEntitiesWithTagsAndVillage(["obstacleBossRally1"], villageId)
            break
        case 2:
            Target = GetEntitiesWithTagsAndVillage(["obstacleBossRally2"], villageId)
            break
        case 3:
            Target = GetEntitiesWithTagsAndVillage(["obstacleBossRally3"], villageId)
    }
    OUTPUT_RemoveLeash(BossEntity)
    OUTPUT_MovePosition(BossEntity, Target, 5, CALLBACK_NONE)
    OUTPUT_SetLeash(BossEntity, Target, 25, 5)
}

const _StartBossFight = (villageId) => {
    SetVillageVariable(villageId, obstacleVal.village.ScriptedResponsesEnabled, 0)
    //get and disable all the barracks when the piglin boss is engaged
    SetEscalationValueAndUpdateAllBarracksForVillage(villageId, obstacleVal.barracks, 0)
}

SNIPPET_CinematicFinished("obstacleSpawnObstacleBoss", (payload) => {
    Once()
    const villageId = payload.ownerVillageId
    //KEEP BOSS CLOSE TO PORTAL
    if (QUERY_GetGlobalVariable(obstacleVal.global.bossSpawned) > 0) {
        return
    }
    OUTPUT_SetGlobalVariable(obstacleVal.global.bossSpawned, 1)
    LISTENFOR_EntitySpawned({
        snippet: "es_obstacle_boss",
        ownerVillageId: villageId,
        includeTags: [obstacleVal.tag.obstacleBossTag]
    })

    SpawnAtPortal(villageId, "badger:piglin_rotters_boss", 1)
    SetAudioPhaseForBase(villageId, obstacleVal.escalation.phase4.bossAudio)
    const villageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.BOSS, MAP_BOSS.OBSTACLE_BOSS)
})

SNIPPET_HealthChanged("hc_obstacle_boss_engaged", (boss, _currentHealth, _previousHealth, payload) => {
    _StartBossFight(payload.ownerVillageId)
    OUTPUT_SetEmitterState(boss, "obstacle_boss_jumped0")
})

SNIPPET_EntitySpawned("es_obstacle_boss", (entitySpawned, payload) => {
    const villageId = payload.ownerVillageId
    const boss = entitySpawned
    const portal = GetVillagePortal(villageId)

    LISTENFOR_HealthChanged({
        snippet: "hc_obstacle_boss_engaged",
        ownerVillageId: villageId,
        includeTags: ["boss", "rottersBoss"],
        normalizedThreshold: 0.99,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE,
        payloadEntities: portal
    })

    LISTENFOR_HealthChanged({
        snippet: "hc_obstacle_boss_stage2",
        ownerVillageId: villageId,
        includeTags: ["boss", "rottersBoss"],
        normalizedThreshold: 0.9,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE,
        payloadEntities: portal
    })

    LISTENFOR_HealthChanged({
        snippet: "hc_obstacle_boss_first_leap",
        ownerVillageId: villageId,
        includeTags: ["boss", "rottersBoss"],
        normalizedThreshold: 0.7,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE,
        payloadEntities: portal
    })
    LISTENFOR_HealthChanged({
        snippet: "hc_obstacle_boss_final_leap",
        ownerVillageId: villageId,
        includeTags: ["boss", "rottersBoss"],
        normalizedThreshold: 0.3,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE,
        payloadEntities: portal
    })

    LISTENFOR_HealthChanged({
        snippet: "hc_obstacle_boss",
        ownerVillageId: villageId,
        includeTags: ["boss", "rottersBoss"],
        normalizedThreshold: 0.5,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE,
        payloadEntities: portal
    })

    LISTENFOR_CinematicStarted({
        snippet: "cs_obstacle_boss_dead",
        ownerVillageId: villageId,
        cinematicName: obstacleVal.cinematic.bossDead
    })

    OUTPUT_SetGlobalVariable(obstacleVal.global.isBossOnVillagePrefix + villageId, 1)
    _TeleportBoss(villageId, boss, 1)
    Once()
})

SNIPPET_VillageDestroyed("vd_rotters_boss_base_destroyed", (villageId) => {
    _onObstacleBossBaseDefeated(villageId)
})

const _onObstacleBossBaseDefeated = (villageId) => {
    if (DoOnce("obstacleBossKilled")) {
        UnlockJournalEntry(JOURNAL_UNLOCKS.HORDE_OBSTACLE_BOSS)

        const villageEntity = GetVillageEntityFromID(villageId)
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.BOSS, MAP_BOSS.DEFEATED)

        _CheckIfObstacleFactionIsDefeated()

        TelemetrySendBossKilled(GetAllPlayers(), "ObstacleBoss") //telemetry achievement event for killing boss
        TelemetrySendKeyActionCompletedServerEvent(BOSS_BASE_VALS.telemetry.obstacleBossDefeat)

        LISTENFOR_LocalTimer({
            snippet: "lt_post_portal_death_boss_action",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 5,
            payloadString: obstacleVal.VO.postBossDeath
        })
    }
}

SNIPPET_CinematicStarted("cs_obstacle_boss_dead", (payload) => {
    const bossPortal = GetVillagePortal(payload.ownerVillageId)
    //make portal vulnerable
    SetPortalInvulnerable(payload.ownerVillageId, false)
    //set portal health to 5%
    OUTPUT_SetHealthPercent(bossPortal, 5)
    Once()
})

SNIPPET_EntityTimer("obstacleBossMedicWaves", (boss, payload) => {
    if (HasEntities(boss)) {
        const medics = SpawnAtPortal(payload.ownerVillageId, PIGLIN_ARCHETYPE.MEDIC, 5)
        OUTPUT_Move(medics, boss, 5, CALLBACK_NONE)
        OUTPUT_SetEntityTimer(boss, "obstacleBossMedicWaveTimer", 30)
    }
})

SNIPPET_HealthChanged("hc_obstacle_boss_stage2", (boss, _currentHealth, _previousHealth) => {
    OUTPUT_SetAttackMode(boss, "secondary_attack_2a", true)
    OUTPUT_SetAttackMode(boss, "secondary_attack_2b", true)
    OUTPUT_SetAttackMode(boss, "secondary_attack_2c", true)
    Once()
})

SNIPPET_HealthChanged("hc_obstacle_boss_first_leap", (boss, _currentHealth, _previousHealth, payload) => {
    PlayPresentationActionToAll("piglin_boss_health_obstacle_1")
    _TeleportBoss(payload.ownerVillageId, boss, 2)
    OUTPUT_SetAttackMode(boss, "spit_attack_escalate_1", true)
    OUTPUT_SetEmitterState(boss, "obstacle_boss_jumped1")
    Once()
})

SNIPPET_HealthChanged("hc_obstacle_boss_final_leap", (boss, _currentHealth, _previousHealth, payload) => {
    PlayPresentationActionToAll("piglin_boss_health_obstacle_2")
    _TeleportBoss(payload.ownerVillageId, boss, 3)
    OUTPUT_SetAttackMode(boss, "spit_attack_escalate_2", true)

    const spawnLocation = GetVillagePortalSpawnLocation(payload.ownerVillageId)
    CreateUnitCompositionAtTarget(spawnLocation, ObstacleCompositions.heavyPatrol, payload.ownerVillageId)
    CreateUnitCompositionAtTarget(spawnLocation, ObstacleCompositions.heavyPatrol, payload.ownerVillageId)
    OUTPUT_SetEmitterState(boss, "obstacle_boss_jumped2")
    Once()
})

SNIPPET_HealthChanged("hc_obstacle_boss_stage3", (boss, _currentHealth, _previousHealth) => {
    const villageId = QUERY_GetVillageIDFromEntity(boss)
    OUTPUT_SetAttackMode(boss, "secondary_attack_1", true)
    const medics = SpawnAtPortal(villageId, PIGLIN_ARCHETYPE.MEDIC, 5)
    OUTPUT_Move(medics, boss, 5, CALLBACK_NONE)
    LISTENFOR_EntityTimer({
        snippet: "obstacleBossMedicWaves",
        ownerVillageId: villageId,
        entity: boss,
        timerName: "obstacleBossMedicWaveTimer"
    })
    OUTPUT_SetEntityTimer(boss, "obstacleBossMedicWaveTimer", 30)
    Once()
})

SNIPPET_HealthChanged("hc_obstacle_boss", (boss, _currentHealth, _previousHealth, payload) => {
    Once()
})

/* -------------------------------------------------------------------------- */
/*                             Village generation                             */
/* -------------------------------------------------------------------------- */

/* ----------------------- village generation helpers ----------------------- */

const _CreateZoneInDeck = (ZoneCard, Deck, PlacementRules = [], ZoneCount = 1) => {
    DECK_PutOnBottomOf(_CreateZone(ZoneCard, PlacementRules, ZoneCount), Deck)
}

const _CreateZone = (ZoneCard, PlacementRules = [], ZoneCount = 1) => {
    const zone = ZonesCard(ZoneCard, ZoneCount)
    if (PlacementRules.length > 0) {
        DECK_MultiplyByMultipleRules(zone, PlacementRules)
    }
    return zone
}

const _CreateBuildableInDeck = (BuildingCard, Count, Deck, PlacementRules = []) => {
    DECK_PutOnBottomOf(_CreateBuildable(BuildingCard, Count, PlacementRules), Deck)
}

const _CreateBuildable = (BuildingCard, Count, PlacementRules = []) => {
    const building = DECK_Empty()
    for (let index = 0; index < Count; index++) {
        DECK_PutOnBottomOf(BuildableCard(BuildingCard), building)
    }
    if (PlacementRules.length > 0) {
        DECK_MultiplyByMultipleRules(building, PlacementRules)
    }
    return building
}

const _CreateLayerOfZonesInDeck = (ZonesCard, Deck, PlacementRules = [], ZoneDepth = 1) => {
    DECK_PutOnBottomOf(_CreateLayerOfZones(ZonesCard, PlacementRules, ZoneDepth), Deck)
}

const _CreateLayerOfZones = (ZoneCard, PlacementRules = [], LayerDepth = 1) => {
    const zones = LayerOfZonesCard(ZoneCard, LayerDepth)
    if (PlacementRules.length > 0) {
        DECK_MultiplyByMultipleRules(zones, PlacementRules)
    }
    return zones
}

const _SetupDistrict = (district, baseDeck, miniDecks, PlacementCards) => {
    district.miniDecks.forEach((deckName) => {
        DECK_MultiplyBySingle(miniDecks[deckName], district.card)
    })
    DECK_MultiplyByMultipleRules(district.card, PlacementCards)
    DECK_PutOnBottomOf(district.card, baseDeck)
    DECK_PutOnBottomOf(district.deck, baseDeck)
}

const _PlayMiniDecks = (baseDeck, minideck, deckNames) => {
    deckNames.forEach((name) => {
        DECK_PutOnBottomOf(minideck[name], baseDeck)
    })
}

const _DeckShuffleObstacle = (deck) => {
    DECK_ShuffleGroup(deck, RANDOM_GROUP_OBSTACLE_HORDE)
}

const _ShuffleMiniDecks = (minideck, deckNames) => {
    deckNames.forEach((name) => {
        _DeckShuffleObstacle(minideck[name])
    })
}

const _MultiplyMiniDeckByRules = (miniDeck, deckNames, rules) => {
    deckNames.forEach((name) => {
        DECK_MultiplyByMultipleRules(miniDeck[name], rules)
    })
}

const _SetZoneTag = (card, bridgeZoneTag) => {
    if (bridgeZoneTag === "") {
        return
    }
    DECK_MultiplyBySingle(card, ZoneTagCard(bridgeZoneTag))
}

const _CreatePlatform = (district, height, zoneCount = 1, zoneCard = obstacleZoneCards.smallPlatform, bridgeZoneTag = obstacleVal.bridgeZone.none, direction = "", rules = []) => {
    const platform = ZonesCard(zoneCard, zoneCount)
    DECK_MultiplyByMultipleRules(platform, [ZoneHeightChangeCard(height), ZoneTagCard("obstaclePlatform"), ZoneTagCard("obstacleValidZone")])
    if (district !== null) DECK_MultiplyBySingle(platform, district.card)
    if (direction !== "") {
        DECK_MultiplyBySingle(platform, PlacementPreferenceCard(direction))
    }
    if (rules !== []) {
        DECK_MultiplyByMultipleRules(platform, rules)
    }
    if (bridgeZoneTag !== obstacleVal.bridgeZone.none) {
        _SetZoneTag(platform, bridgeZoneTag)
    }
    if (district !== null) DECK_PutOnBottomOf(platform, district.deck)
    return platform
}

const _CreateSpire = (district, height, zoneCount = 1, zoneCard = obstacleZoneCards.smallSpire, bridgeZoneTag = obstacleVal.bridgeZone.none, direction = "", rules = []) => {
    const spire = ZonesCard(zoneCard, zoneCount)
    DECK_MultiplyByMultipleRules(spire, [ZoneHeightChangeCard(height), ZoneTagCard("obstacleSmallSpire"), ZoneTagCard("obstacleValidZone")])
    if (district !== null) DECK_MultiplyBySingle(spire, district.card)
    if (direction !== "") {
        DECK_MultiplyBySingle(spire, PlacementPreferenceCard(direction))
    }
    if (rules !== []) {
        DECK_MultiplyByMultipleRules(spire, rules)
    }
    if (bridgeZoneTag !== obstacleVal.bridgeZone.none) {
        _SetZoneTag(spire, bridgeZoneTag)
    }
    if (district !== null) DECK_PutOnBottomOf(spire, district.deck)
    return spire
}

//Deadzones do not use directions by default
const _AddDeadzoneLayer = (district, NumberOfLayers, rules = []) => {
    const zoneLayer = LayerOfZonesCard("addLayerOfZones", NumberOfLayers)
    DECK_MultiplyByMultipleRules(zoneLayer, [ZoneTagCard("obstacleDeadZone")])
    if (district !== null) DECK_MultiplyBySingle(zoneLayer, district.card)
    if (rules !== []) {
        DECK_MultiplyByMultipleRules(zoneLayer, rules)
    }
    if (district !== null) DECK_PutOnBottomOf(zoneLayer, district.deck)
    return zoneLayer
}
//Deadzones do not use directions by default
const _AddDeadzone = (district, numberOfZones, rules = []) => {
    const deadZone = ZonesCard("addZone", numberOfZones)
    DECK_MultiplyByMultipleRules(deadZone, [ZoneTagCard("obstacleDeadZone")])
    if (district !== null) DECK_MultiplyBySingle(deadZone, district.card)
    if (rules !== []) {
        DECK_MultiplyByMultipleRules(deadZone, rules)
    }
    if (district !== null) DECK_PutOnBottomOf(deadZone, district.deck)
    return deadZone
}

const _CreateTripleStack = (district, heightTop, heightMid, heightLow, zoneTop = obstacleZoneCards.smallPlatform, zonesLower = obstacleZoneCards.smallPlatform, bridgeZoneTag = obstacleVal.bridgeZone.none, topRules = [], midRules = [], botRules = []) => {
    const newDeck = DECK_Empty()
    const topZone = ZonesCard(zoneTop, 1)
    const midZone = ZonesCard(zonesLower, 1)
    const lowerZone = ZonesCard(zonesLower, 1)
    DECK_MultiplyByMultipleRules(topZone, [ZoneHeightChangeCard(heightTop), ZoneTagCard("obstacleValidZone"), ZoneTagCard(bridgeZoneTag), ZoneTagCard("obstacleWaterfallTop")])
    DECK_MultiplyByMultipleRules(midZone, [ZoneHeightChangeCard(heightMid), ZoneTagCard("obstacleValidZone"), ZoneTagCard("obstacleWaterfallMid")])
    DECK_MultiplyByMultipleRules(lowerZone, [ZoneHeightChangeCard(heightLow), ZoneTagCard("obstacleValidZone"), ZoneTagCard("obstacleWaterfallBot")])
    if (topRules !== []) {
        DECK_MultiplyByMultipleRules(topZone, topRules)
    }
    if (midRules !== []) {
        DECK_MultiplyByMultipleRules(midZone, midRules)
    }
    if (botRules !== []) {
        DECK_MultiplyByMultipleRules(lowerZone, botRules)
    }
    DECK_PutOnBottomOf(topZone, newDeck)
    DECK_PutOnBottomOf(midZone, newDeck)
    DECK_PutOnBottomOf(lowerZone, newDeck)
    if (district !== null) DECK_MultiplyBySingle(newDeck, district.card)
    if (district !== null) DECK_PutOnBottomOf(newDeck, district.deck)
    return newDeck
}

const _CreateDoubleStack = (district, heightTop, heightLow, zoneTop = obstacleZoneCards.smallPlatform, zonesLower = obstacleZoneCards.smallPlatform, bridgeZoneTag = obstacleVal.bridgeZone.none, topRules = [], botRules = []) => {
    const newDeck = DECK_Empty()
    const topZone = ZonesCard(zoneTop, 1)
    const lowerZone = ZonesCard(zonesLower, 1)
    DECK_MultiplyByMultipleRules(topZone, [ZoneHeightChangeCard(heightTop), ZoneTagCard("obstacleValidZone"), ZoneTagCard(bridgeZoneTag), ZoneTagCard("obstacleWaterfallTop")])
    DECK_MultiplyByMultipleRules(lowerZone, [ZoneHeightChangeCard(heightLow), ZoneTagCard("obstacleValidZone"), ZoneTagCard("obstacleWaterfallBot")])
    if (topRules !== []) {
        DECK_MultiplyByMultipleRules(topZone, topRules)
    }
    if (botRules !== []) {
        DECK_MultiplyByMultipleRules(lowerZone, botRules)
    }
    DECK_PutOnBottomOf(topZone, newDeck)
    DECK_PutOnBottomOf(lowerZone, newDeck)
    if (district !== null) DECK_MultiplyBySingle(newDeck, district.card)
    if (district !== null) DECK_PutOnBottomOf(newDeck, district.deck)
    return newDeck
}

const _PlaceObjectiveStructure = (buildable, baseDeck, placementRules = [], zone = "", districts = []) => {
    const objectiveCard = BuildableCard(buildable)
    if (districts.length > 0) {
        DECK_MultiplyBySingle(objectiveCard, DistrictCard(ChooseFromArray(districts).name))
    }
    if (placementRules.length > 0) {
        DECK_MultiplyByMultipleRules(objectiveCard, placementRules)
    }
    if (zone !== "") {
        DECK_MultiplyBySingle(objectiveCard, ZoneFilterCard(zone))
    }
    DECK_PutOnBottomOf(objectiveCard, baseDeck)
    return objectiveCard
}

const _PlacePortalTowers = (northTowerCount, eastTowerCount, southTowerCount, westTowerCount) => {
    const towerDecks = DECK_Empty()
    const northTowers = BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, northTowerCount)
    const eastTowers = BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, eastTowerCount)
    const southTowers = BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, southTowerCount)
    const westTowers = BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, westTowerCount)

    DECK_MultiplyBySingle(northTowers, PlacementPreferenceCard(DIRECTION_CARD.northWedge))
    DECK_MultiplyBySingle(eastTowers, PlacementPreferenceCard(DIRECTION_CARD.eastWedge))
    DECK_MultiplyBySingle(southTowers, PlacementPreferenceCard(DIRECTION_CARD.southWedge))
    DECK_MultiplyBySingle(westTowers, PlacementPreferenceCard(DIRECTION_CARD.westWedge))

    DECK_PutOnBottomOf(northTowers, towerDecks)
    DECK_PutOnBottomOf(eastTowers, towerDecks)
    DECK_PutOnBottomOf(southTowers, towerDecks)
    DECK_PutOnBottomOf(westTowers, towerDecks)
    return towerDecks
}

const _BuildBridge = (BaseDeck, StartFilters, EndFilters, StartDistrict = null, EndDistrict = null) => {
    let pathStartRules = [ZoneFilterCard("obstacleDeadZone")]
    let pathEndRules = [ZoneFilterCard("obstacleDeadZone")]

    if (EndFilters.length > 0) {
        pathEndRules = pathEndRules.concat(EndFilters)
    }
    if (StartFilters.length > 0) {
        pathStartRules = pathStartRules.concat(StartFilters)
    }
    if (StartDistrict !== null) {
        pathStartRules.push(DistrictCard(StartDistrict.name))
    }
    if (EndDistrict !== null) {
        pathEndRules.push(DistrictCard(EndDistrict.name))
    }
    CreatePathRequestOnBottomOf("obstacle_district_path", pathStartRules, pathEndRules, BaseDeck)
}
/* ------------------------ Village Generation Logic ------------------------ */

//Frontline A
const _ObstacleFactionMakeOutpost = (villageId) => {
    const baseDeck = DECK_Empty()
    //const flavourBase = GetVillageFlavour(villageId)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const difficulty = GetOutpostDifficultyFromPhase()

    LISTENFOR_BuildingComplete({
        snippet: "bc_spreader_grenadier_outpost",
        ownerVillageId: villageId,
        includeTags: ["netherSpreader", "obstacleComposition1"],
        villageId: villageId
    })

    //central zone
    const centerZone = _CreateZone("addZone", [ZoneHeightChangeCard(ObstacleHeight.H7), ZoneTagCard("obstacleInsideOutpost"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], 4)
    const deadZone = _AddDeadzoneLayer(null, 1, [ZoneTagCard("obstacleInsideOutpost"), ZoneTagCard("groundZone")])

    const platform1 = _CreatePlatform(null, ObstacleHeight.H4, 1, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.none, DIRECTION_CARD.northWedge, [ZoneTagCard("obstacleInsideOutpost"), PlacementPreferenceCard("closeToDistrictStart")])

    const platform2 = _CreatePlatform(null, ObstacleHeight.H5, 1, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.none, DIRECTION_CARD.southWedge, [ZoneTagCard("obstacleInsideOutpost"), PlacementPreferenceCard("closeToDistrictStart")])

    const platform3 = _CreatePlatform(null, ObstacleHeight.H6, 1, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.none, DIRECTION_CARD.westWedge, [ZoneTagCard("obstacleInsideOutpost"), PlacementPreferenceCard("closeToDistrictStart")])
    //zones
    DECK_PutOnBottomOf(centerZone, baseDeck)
    DECK_PutOnBottomOf(deadZone, baseDeck)

    DECK_PutOnBottomOf(platform1, baseDeck)
    DECK_PutOnBottomOf(platform2, baseDeck)
    DECK_PutOnBottomOf(platform3, baseDeck)

    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)
    // //buildings
    const miniDecks = _obstacleGenMiniDecks(villageId, baseSize, GetVillageFlavour(villageId) + difficulty)
    DECK_MultiplyByMultipleRules(miniDecks["core"], [ZoneFilterCard("obstacleInsideOutpost"), HeartCard(), ZoneFilterCard("obstaclePlatform"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    DECK_MultiplyByMultipleRules(miniDecks["plateaus"], [ZoneFilterCard("obstacleInsideOutpost"), HeartCard(), PlacementPreferenceCard("closeToCage"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeRandomly")])
    DECK_MultiplyByMultipleRules(miniDecks["ground"], [ZoneFilterCard("obstacleInsideOutpost"), HeartCard(), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeRandomly")])
    if (miniDecks["crates"] !== DECK_Empty()) {
        DECK_PutOnBottomOf(miniDecks["crates"], miniDecks["core"])
    }
    DECK_PutOnBottomOf(miniDecks["core"], baseDeck)
    DECK_PutOnBottomOf(miniDecks["plateaus"], baseDeck)
    DECK_PutOnBottomOf(miniDecks["ground"], baseDeck)

    const cageAmount = obstacleVal.raidingPartyVars.baseCageAmount + Math.floor(1 + obstacleVal.raidingPartyVars.cageMultiplier * (difficulty - 1))
    for (let index = 0; index < cageAmount; index++) {
        const cage = BuildableCard("mobCage", 1)
        DECK_MultiplyByMultipleRules(cage, [PlacementPreferenceCard("farFromCage"), ZoneFilterCard("obstacleInsideOutpost"), TagCard(obstacleVal.raidingPartyVars.cageTag), ZoneFilterCard("placeInsideVillageAlways")])
        DECK_PutOnBottomOf(cage, baseDeck)
    }
    return baseDeck
}
const _ObstacleFactionAttackAMakeBase = (villageId) => {
    const baseDeck = DECK_Empty()

    const primaryZone = ZonesCard("def6Zones", 1)
    DECK_MultiplyBySingle(primaryZone, ZoneHeightChangeCard(ObstacleHeight.H4))

    DECK_PutOnBottomOf(primaryZone, baseDeck)

    const portal = BuildableCard("addPortalMini")
    DECK_MultiplyByMultipleRules(portal, [ZoneFilterCard("placeInsideVillageAlways"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])

    const secondaryZone = ZonesCard("addZone", 2)
    DECK_MultiplyByMultipleRules(secondaryZone, [ZoneHeightChangeCard(ObstacleHeight.H3), ZoneTagCard("obstacleValidZone")])
    DECK_PutOnBottomOf(secondaryZone, baseDeck)

    const tertiaryZone = ZonesCard("addZone", 2)
    DECK_MultiplyByMultipleRules(tertiaryZone, [ZoneHeightChangeCard(ObstacleHeight.H2), ZoneTagCard("obstacleValidZone")])
    DECK_PutOnBottomOf(tertiaryZone, baseDeck)

    const inner = BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1)
    DECK_PutOnBottomOf(BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2), inner)
    DECK_PutOnBottomOf(BuildableCard(BUILDABLE_CARD.NETHERSPREADER, 1), inner)
    DECK_MultiplyByMultipleRules(inner, [ZoneFilterCard("obstacleValidZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    _DeckShuffleObstacle(inner)

    const deadZone = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyBySingle(deadZone, ZoneTagCard("obstacleDeadZone"))
    DECK_PutOnBottomOf(deadZone, baseDeck)

    const spiresZone = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(spiresZone, [ZoneHeightChangeCard(ObstacleHeight.H6), ZoneTagCard("obstacleSmallSpire")])
    DECK_PutOnBottomOf(spiresZone, baseDeck)

    const spires = BuildableCard(BUILDABLE_CARD.NETHERSPREADER, 1)
    DECK_PutOnBottomOf(BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1), spires)
    DECK_MultiplyByMultipleRules(spires, [ZoneFilterCard("obstacleSmallSpire")])
    _DeckShuffleObstacle(spires)

    DECK_PutOnBottomOf(portal, baseDeck)
    DECK_PutOnBottomOf(inner, baseDeck)
    DECK_PutOnBottomOf(spires, baseDeck)

    SetupBasicVillageClearingCards(baseDeck)
    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
}
const _ObstacleFactionAttackBMakeBase = (villageId) => {
    const baseDeck = DECK_Empty()

    const primaryZone = ZonesCard("def6Zones", 1)
    DECK_MultiplyByMultipleRules(primaryZone, [ZoneHeightChangeCard(ObstacleHeight.H4), ZoneTagCard("obstacleValidZone")])

    DECK_PutOnBottomOf(primaryZone, baseDeck)

    const portal = BuildableCard("addPortalMini")
    DECK_MultiplyByMultipleRules(portal, [ZoneFilterCard("placeInsideVillageAlways"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])

    const secondaryZone = ZonesCard("addZone", 4)
    DECK_MultiplyByMultipleRules(secondaryZone, [ZoneHeightChangeCard(ObstacleHeight.H3), ZoneTagCard("obstacleValidZone")])
    DECK_PutOnBottomOf(secondaryZone, baseDeck)

    const tertiaryZone = ZonesCard("addZone", 4)
    DECK_MultiplyByMultipleRules(tertiaryZone, [ZoneHeightChangeCard(ObstacleHeight.H2), ZoneTagCard("obstacleValidZone")])
    DECK_PutOnBottomOf(tertiaryZone, baseDeck)

    const inner = BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 2)
    DECK_PutOnBottomOf(BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 3), inner)
    DECK_PutOnBottomOf(BuildableCard(BUILDABLE_CARD.NETHERSPREADER, 1), inner)
    DECK_MultiplyByMultipleRules(inner, [ZoneFilterCard("obstacleValidZone"), PlacementPreferenceCard("placeRandomly")])
    _DeckShuffleObstacle(inner)

    const deadZone = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyBySingle(deadZone, ZoneTagCard("obstacleDeadZone"))
    DECK_PutOnBottomOf(deadZone, baseDeck)

    const spiresZone1 = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(spiresZone1, [ZoneHeightChangeCard(ObstacleHeight.H5), ZoneTagCard("obstacleSmallSpire")])
    DECK_PutOnBottomOf(spiresZone1, baseDeck)

    const spiresZone2 = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(spiresZone2, [ZoneHeightChangeCard(ObstacleHeight.H7), ZoneTagCard("obstacleSmallSpire")])
    DECK_PutOnBottomOf(spiresZone2, baseDeck)

    const spires = BuildableCard(BUILDABLE_CARD.NETHERSPREADER, 2)
    DECK_PutOnBottomOf(BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2), spires)
    DECK_MultiplyByMultipleRules(spires, [ZoneFilterCard("obstacleSmallSpire")])
    _DeckShuffleObstacle(spires)

    DECK_PutOnBottomOf(portal, baseDeck)
    DECK_PutOnBottomOf(inner, baseDeck)
    DECK_PutOnBottomOf(spires, baseDeck)

    SetupBasicVillageClearingCards(baseDeck)
    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
}
const _ObstacleGenerateCentralPlatform = (villageId, baseSize, baseDeck, placePortal = true) => {
    //SetupBasicVillageClearingCards(baseDeck)
    let firstZone = DECK_Empty()
    let keepZone = DECK_Empty()
    let portalType
    let portalRules
    let portalTowers
    // PORTAL TOWERS ARE CREATED WITH THE PORTALS HERE
    if (IsSmall(baseSize)) {
        firstZone = ZonesCard("obstacleCenterZone", 1) //center zone small
        DECK_MultiplyByMultipleRules(firstZone, [ZoneHeightChangeCard(ObstacleHeight.H26), ZoneTagCard("obstacleValidZone")])
        keepZone = ZonesCard("addZone", 19)
        DECK_MultiplyByMultipleRules(keepZone, [ZoneHeightChangeCard(ObstacleHeight.H26), ZoneTagCard(obstacleVal.bridgeZone.one), ZoneTagCard("obstacleValidZone")])
        portalType = "obstaclePortalSmall"
        portalRules = [ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneHeightChangeCard(ObstacleHeight.H26), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("obstacleValidZone"), ZoneFilterCard("placeInsideVillageAlways")]
        portalTowers = _PlacePortalTowers(1, 1, 1, 0)
    } else if (IsMedium(baseSize)) {
        firstZone = ZonesCard("obstacleCenterZone", 1) //center zone Medium
        DECK_MultiplyBySingle(firstZone, ZoneHeightChangeCard(ObstacleHeight.H28))
        keepZone = ZonesCard("addZone", 21)
        DECK_MultiplyByMultipleRules(keepZone, [ZoneHeightChangeCard(ObstacleHeight.H28), ZoneTagCard(obstacleVal.bridgeZone.one), ZoneTagCard("obstacleValidZone")])
        portalType = "obstaclePortalMedium"
        portalRules = [ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneHeightChangeCard(ObstacleHeight.H28), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways")]
        portalTowers = _PlacePortalTowers(1, 1, 1, 1)
    } else if (IsLarge(baseSize)) {
        firstZone = ZonesCard("obstacleCenterZone", 1) //center zone Large
        DECK_MultiplyBySingle(firstZone, ZoneHeightChangeCard(ObstacleHeight.H36))
        keepZone = ZonesCard("addZone", 21)
        DECK_MultiplyByMultipleRules(keepZone, [ZoneHeightChangeCard(ObstacleHeight.H36), ZoneTagCard(obstacleVal.bridgeZone.one), ZoneTagCard("obstacleValidZone")])
        portalType = "obstaclePortalLarge"
        portalRules = [ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneHeightChangeCard(ObstacleHeight.H36), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways")]
        portalTowers = _PlacePortalTowers(1, 1, 1, 1)
    }
    DECK_MultiplyByMultipleRules(firstZone, [ZoneTagCard("obstacleInsideKeep"), ZoneTagCard("obstacleInsideKeepBuildings"), ZoneFilterCard("placeInsideVillageAlways")])
    //keep zone tag / filter
    DECK_MultiplyByMultipleRules(keepZone, [ZoneTagCard("obstacleInsideKeep"), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_MultiplyByMultipleRules(portalTowers, [ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneTagCard("obstacleInsideKeepBuildings"), ZoneFilterCard("obstacleValidZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    if (placePortal) {
        //play portal card
        _PlaceObjectiveStructure(portalType, firstZone, portalRules)
    }
    DECK_PutOnBottomOf(firstZone, baseDeck) //play first zone
    DECK_PutOnBottomOf(portalTowers, keepZone) //play portal towers
    DECK_PutOnBottomOf(keepZone, baseDeck) //play keep zone

    /* ---------------------- spires and plateau extensions --------------------- */
    if (IsSmall(baseSize)) {
        //keep spire zone - spire deck // small only
        const centerSpire = ZonesCard(obstacleZoneCards.smallSpire, 1)
        DECK_MultiplyByMultipleRules(centerSpire, [ZoneHeightChangeCard(ObstacleHeight.H20), ZoneTagCard("obstacleSmallSpire"), ZoneTagCard("obstacleKeepPlateau"), ZoneFilterCard("obstacleInsideKeep"), ZoneTagCard("obstacleValidZone"), PlacementPreferenceCard(DIRECTION_CARD.southEastRect)])
        DECK_PutOnBottomOf(centerSpire, baseDeck)
    } else if (IsMedium(baseSize)) {
        //keep spire zone - spire deck // medium+ // forced direction placement
        const plateau1 = ZonesCard(obstacleZoneCards.smallSpire, 1)
        DECK_MultiplyByMultipleRules(plateau1, [ZoneHeightChangeCard(ObstacleHeight.H34), ZoneTagCard("obstacleSmallSpire"), ZoneTagCard("obstacleKeepPlateau"), ZoneFilterCard("obstacleInsideKeep"), ZoneTagCard("obstacleValidZone"), PlacementPreferenceCard(DIRECTION_CARD.eastRect)])
        DECK_PutOnBottomOf(plateau1, baseDeck)

        const plateau2 = ZonesCard(obstacleZoneCards.smallSpire, 1)
        DECK_MultiplyByMultipleRules(plateau2, [ZoneHeightChangeCard(ObstacleHeight.H34), ZoneTagCard("obstacleSmallSpire"), ZoneTagCard("obstacleKeepPlateau"), ZoneFilterCard("obstacleInsideKeep"), ZoneTagCard("obstacleValidZone"), PlacementPreferenceCard(DIRECTION_CARD.westRect)])
        DECK_PutOnBottomOf(plateau2, baseDeck)
    } else if (IsLarge(baseSize)) {
        //keep spire zone - spire deck // medium+ // forced direction placement
        const plateau1 = ZonesCard(obstacleZoneCards.smallSpire, 1)
        DECK_MultiplyByMultipleRules(plateau1, [ZoneHeightChangeCard(ObstacleHeight.H42), ZoneTagCard("obstacleSmallSpire"), ZoneTagCard("obstacleKeepPlateau"), ZoneFilterCard("obstacleInsideKeep"), ZoneTagCard("obstacleValidZone"), PlacementPreferenceCard(DIRECTION_CARD.eastRect)])
        DECK_PutOnBottomOf(plateau1, baseDeck)

        const plateau2 = ZonesCard(obstacleZoneCards.smallSpire, 1)
        DECK_MultiplyByMultipleRules(plateau2, [ZoneHeightChangeCard(ObstacleHeight.H42), ZoneTagCard("obstacleSmallSpire"), ZoneTagCard("obstacleKeepPlateau"), ZoneFilterCard("obstacleInsideKeep"), ZoneTagCard("obstacleValidZone"), PlacementPreferenceCard(DIRECTION_CARD.westRect)])
        DECK_PutOnBottomOf(plateau2, baseDeck)
    }

    //layer of zones to space inner/outer tiers //// any size
    const extraZone2 = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(extraZone2, [ZoneTagCard("obstacleDeadZone"), ZoneHeightChangeCard(ObstacleHeight.Flatten)])
    DECK_PutOnBottomOf(extraZone2, baseDeck)
}
const _ObstacleGeneratePlateaus = (villageId, baseSize, baseDeck, miniDecks, districts, applyWeathering = true) => {
    /* --------------------- Districts and spire generation --------------------- */
    switch (baseSize) {
        case BASE_SIZE_SMALL:
            //=== district 1 - NORTH ===
            //triplestack
            _CreateDoubleStack(districts.northDistrict, ObstacleHeight.H24, ObstacleHeight.H10, obstacleZoneCards.smallPlatform, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.two, [ZoneTagCard("obstacleLavaCoilZone")], [PlacementPreferenceCard(DIRECTION_CARD.northRect)])
            _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])
            _CreateSpire(districts.northDistrict, ObstacleHeight.H16, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.northWestRect, [ZoneTagCard("obstacleLavaCoilZone")])
            _CreatePlatform(districts.northDistrict, ObstacleHeight.H4, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.northEastWedge)
            _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])
            _CreateSpire(districts.northDistrict, ObstacleHeight.H16, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.westWedge, [ZoneTagCard("obstacleLavaCoilZone")])

            //=== district 2 - EAST===
            _CreatePlatform(districts.eastDistrict, ObstacleHeight.H26, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.none, [ZoneTagCard("obstacleLavaCoilZone")])
            _AddDeadzoneLayer(districts.eastDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])

            //=== district 3 - SOUTH ===
            //triple stack
            _CreateDoubleStack(districts.southDistrict, ObstacleHeight.H24, ObstacleHeight.H10, obstacleZoneCards.smallPlatform, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.four, [ZoneTagCard("obstacleLavaCoilZone")], [PlacementPreferenceCard(DIRECTION_CARD.southRect)])
            _AddDeadzoneLayer(districts.southDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])
            _CreateSpire(districts.southDistrict, ObstacleHeight.H16, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.southEastRect, [ZoneTagCard("obstacleLavaCoilZone")])
            _CreatePlatform(districts.southDistrict, ObstacleHeight.H4, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.southWestWedge)
            _AddDeadzoneLayer(districts.southDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])
            _CreateSpire(districts.southDistrict, ObstacleHeight.H16, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.eastWedge, [ZoneTagCard("obstacleLavaCoilZone")])
            //=== district 4 - WEST ===
            //unused
            break

        case BASE_SIZE_MEDIUM:
            //=== district 1 - NORTH ===
            //triplestack
            _CreateDoubleStack(districts.northDistrict, ObstacleHeight.H28, ObstacleHeight.H10, obstacleZoneCards.smallPlatform, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.two, [ZoneTagCard("obstacleLavaCoilZone")], [PlacementPreferenceCard(DIRECTION_CARD.northRect)])
            _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])
            _CreatePlatform(districts.northDistrict, ObstacleHeight.H4, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.northWedge)
            _CreateSpire(districts.northDistrict, ObstacleHeight.H18, 1, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.none, DIRECTION_CARD.northEastWedge, [ZoneTagCard("obstacleLavaCoilZone")])
            _CreateSpire(districts.northDistrict, ObstacleHeight.H18, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.westWedge, [ZoneTagCard("obstacleLavaCoilZone")])
            _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])

            //=== district 2 - EAST ===
            _CreateSpire(districts.eastDistrict, ObstacleHeight.H28, 1, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.none, DIRECTION_CARD.southWedge, [ZoneTagCard("obstacleLavaCoilZone")])
            _AddDeadzoneLayer(districts.eastDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])
            _CreateSpire(districts.eastDistrict, ObstacleHeight.H26, 1, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.none, DIRECTION_CARD.southWedge)
            _AddDeadzoneLayer(districts.eastDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])

            //=== district 3 - SOUTH ===
            _CreateDoubleStack(districts.southDistrict, ObstacleHeight.H28, ObstacleHeight.H10, obstacleZoneCards.smallPlatform, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.four, [ZoneTagCard("obstacleLavaCoilZone")], [PlacementPreferenceCard(DIRECTION_CARD.southRect)])
            _AddDeadzoneLayer(districts.southDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])
            _CreatePlatform(districts.southDistrict, ObstacleHeight.H4, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.southWedge)
            _CreateSpire(districts.southDistrict, ObstacleHeight.H18, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.southEastWedge, [ZoneTagCard("obstacleLavaCoilZone")])
            _CreateSpire(districts.southDistrict, ObstacleHeight.H18, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.southWestWedge, [ZoneTagCard("obstacleLavaCoilZone")])
            _AddDeadzoneLayer(districts.southDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])

            //=== district 4 - WEST ===
            _CreatePlatform(districts.westDistrict, ObstacleHeight.H28, 1, obstacleZoneCards.midPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.none, [ZoneTagCard("obstacleLavaCoilZone")])
            _AddDeadzoneLayer(districts.westDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])
            break

        case BASE_SIZE_LARGE:
            //=== district 1 - NORTH ===
            //triplestack
            _CreateTripleStack(districts.northDistrict, ObstacleHeight.H36, ObstacleHeight.H26, ObstacleHeight.H6, obstacleZoneCards.midPlatform, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.two, [ZoneTagCard("obstacleLavaCoilZone")], [PlacementPreferenceCard(DIRECTION_CARD.northWestWedge)], [PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
            _CreatePlatform(districts.northDistrict, ObstacleHeight.H16, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.northRect)
            _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])
            _CreateSpire(districts.northDistrict, ObstacleHeight.H20, 1, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.none, DIRECTION_CARD.northEastRect, [ZoneTagCard("obstacleLavaCoilZone")])
            _CreateSpire(districts.northDistrict, ObstacleHeight.H28, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.eastRect, [ZoneTagCard("obstacleLavaCoilZone")])
            _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])
            _CreateSpire(districts.northDistrict, ObstacleHeight.H26, 1, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.none, DIRECTION_CARD.southWestWedge, [ZoneTagCard("obstacleLavaCoilZone")])

            //=== district 2 - EAST ===
            _CreateSpire(districts.eastDistrict, ObstacleHeight.H32, 1, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.none, DIRECTION_CARD.southWedge, [ZoneTagCard("obstacleLavaCoilZone")])
            _AddDeadzoneLayer(districts.eastDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])
            _CreateSpire(districts.eastDistrict, ObstacleHeight.H32, 1, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.none, DIRECTION_CARD.southWestWedge, [ZoneTagCard("obstacleLavaCoilZone")])
            _AddDeadzoneLayer(districts.eastDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])

            //=== district 4 - WEST ===
            _CreatePlatform(districts.westDistrict, ObstacleHeight.H36, 1, obstacleZoneCards.midPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.none, [ZoneTagCard("obstacleLavaCoilZone")])

            //=== district 3 - SOUTH ===
            _CreateTripleStack(districts.southDistrict, ObstacleHeight.H36, ObstacleHeight.H28, ObstacleHeight.H6, obstacleZoneCards.midPlatform, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.four, [ZoneTagCard("obstacleLavaCoilZone")], [PlacementPreferenceCard(DIRECTION_CARD.southEastWedge)], [PlacementPreferenceCard(DIRECTION_CARD.southWedge)])
            _CreatePlatform(districts.southDistrict, ObstacleHeight.H14, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.southRect)
            _AddDeadzoneLayer(districts.southDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])
            _CreateSpire(districts.southDistrict, ObstacleHeight.H18, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.southEastRect, [ZoneTagCard("obstacleLavaCoilZone")])
            _CreatePlatform(districts.southDistrict, ObstacleHeight.H22, 1, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.none, DIRECTION_CARD.southWestRect, [ZoneTagCard("obstacleLavaCoilZone")])
            _CreateSpire(districts.southDistrict, ObstacleHeight.H30, 1, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.none, DIRECTION_CARD.westRect, [ZoneTagCard("obstacleLavaCoilZone")])
            _CreatePlatform(districts.southDistrict, ObstacleHeight.H30, 1, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.none, DIRECTION_CARD.eastRect, [ZoneTagCard("obstacleLavaCoilZone")])
            break
        case BASE_SIZE_BOSS:
            //=== district 1 - NORTH ===
            //triplestack
            _CreateDoubleStack(districts.northDistrict, ObstacleHeight.H17, ObstacleHeight.H4, obstacleZoneCards.midPlatform, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.two, [], [PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
            _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])
            _CreateSpire(districts.northDistrict, ObstacleHeight.H14, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.northWestWedge)
            _CreatePlatform(districts.northDistrict, ObstacleHeight.H4, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.westWedge)
            _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])

            //=== district 2 - EAST ===
            _CreatePlatform(districts.eastDistrict, ObstacleHeight.H24, 1, obstacleZoneCards.midPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.northWedge)
            _AddDeadzoneLayer(districts.eastDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])
            _CreateSpire(districts.eastDistrict, ObstacleHeight.H26, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.northWedge)
            _CreateSpire(districts.eastDistrict, ObstacleHeight.H26, 1, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.one, DIRECTION_CARD.southWedge)
            _AddDeadzoneLayer(districts.eastDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])

            //=== district 2 - South ===
            //unused

            //=== district 4 - WEST ===
            _CreateDoubleStack(districts.westDistrict, ObstacleHeight.H40, ObstacleHeight.H26, obstacleZoneCards.midPlatform, obstacleZoneCards.smallPlatform, obstacleVal.bridgeZone.three, [ZoneTagCard("obstacleLavaCoilZone")], [PlacementPreferenceCard(DIRECTION_CARD.southWedge)])
            _AddDeadzoneLayer(districts.westDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])
            _CreateSpire(districts.westDistrict, ObstacleHeight.H32, 1, obstacleZoneCards.midPlatform, obstacleVal.bridgeZone.none, DIRECTION_CARD.westWedge)
            break
    }

    //district 1 - North
    _SetupDistrict(districts.northDistrict, baseDeck, miniDecks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northRect)])
    //district 2 - East
    _SetupDistrict(districts.eastDistrict, baseDeck, miniDecks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.eastRect)])
    //district 3 - South
    _SetupDistrict(districts.southDistrict, baseDeck, miniDecks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southRect)])
    //district 4 - West
    _SetupDistrict(districts.westDistrict, baseDeck, miniDecks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.westRect)])

    //layer of zones to space inner/outer tiers //// any size
    const deadZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(deadZones, [ZoneTagCard("obstacleDeadZone"), ZoneHeightChangeCard(ObstacleHeight.Flatten)])
    DECK_PutOnBottomOf(deadZones, baseDeck)

    //apply terrain weathering now that all the zone cards have been added.
    if (applyWeathering) {
        DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)
    }
}
const _ObstacleFactionMakeBase = (villageId, baseSize, districts) => {
    const baseDeck = DECK_Empty()
    const miniDecks = _obstacleGenMiniDecks(villageId, baseSize)
    if (miniDecks === null) {
        return null
    }
    const spireNames = ["northSpires", "eastSpires", "southSpires", "westSpires"]
    const platformNames = ["northPlatform", "eastPlatform", "southPlatform", "westPlatform"]
    //helper for the helper function to use basedeck

    // === Helpers ===
    const _PlayDistrictMiniDecks = (deckNames) => {
        _PlayMiniDecks(baseDeck, miniDecks, deckNames)
    }

    const _ShuffleDistrictCards = (deckNames) => {
        _ShuffleMiniDecks(miniDecks, deckNames)
    }
    const _MultiplyDistrictDecksByRules = (deckNames, rules) => {
        _MultiplyMiniDeckByRules(miniDecks, deckNames, rules)
    }

    _ObstacleGenerateCentralPlatform(villageId, baseSize, baseDeck)
    _ObstacleGeneratePlateaus(villageId, baseSize, baseDeck, miniDecks, districts)

    //setup keep walls
    let keepWall = null
    if (QUERY_GetFactionSizeFromVillageID(villageId) === BASE_SIZE_MEDIUM && GetVillageFlavour(villageId) === VILLAGE_VARIATION_B) {
        keepWall = WallsCard("wallNoTowersNoGates")
    }
    if (keepWall !== null) {
        DECK_MultiplyBySingle(keepWall, ZoneFilterCard("obstacleInsideKeep"))
        DECK_PutOnBottomOf(keepWall, baseDeck)
    }

    // === Structures / entity spawning setup ===
    if (IsStructureDestructionBase(villageId)) {
        const coilDistricts = [districts.northDistrict, districts.eastDistrict, districts.southDistrict]
        switch (baseSize) {
            case BASE_SIZE_SMALL:
                _PlaceObjectiveStructure(BUILDABLE_CARD.PIGLIN_CRYSTAL, baseDeck, [ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("placeFarFromPiglinCrystal")], "obstacleLavaCoilZone", coilDistricts)
                break
            case BASE_SIZE_MEDIUM:
                _PlaceObjectiveStructure(BUILDABLE_CARD.PIGLIN_CRYSTAL, baseDeck, [ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("placeFarFromPiglinCrystal")], "obstacleLavaCoilZone", [districts.westDistrict])
                _PlaceObjectiveStructure(BUILDABLE_CARD.PIGLIN_CRYSTAL, baseDeck, [ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("placeFarFromPiglinCrystal")], "obstacleLavaCoilZone", coilDistricts)
                break
            case BASE_SIZE_LARGE:
                _PlaceObjectiveStructure(BUILDABLE_CARD.PIGLIN_CRYSTAL, baseDeck, [ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("placeFarFromPiglinCrystal")], "obstacleLavaCoilZone", [districts.westDistrict])
                _PlaceObjectiveStructure(BUILDABLE_CARD.PIGLIN_CRYSTAL, baseDeck, [ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("placeFarFromPiglinCrystal")], "obstacleLavaCoilZone", coilDistricts)
                _PlaceObjectiveStructure(BUILDABLE_CARD.PIGLIN_CRYSTAL, baseDeck, [ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("placeFarFromPiglinCrystal")], "obstacleLavaCoilZone", coilDistricts)
                break
        }
    }

    //keep primary structure rules
    //common structure rules
    DECK_MultiplyByMultipleRules(miniDecks["keepPrimary"], [ZoneFilterCard("obstacleInsideKeepBuildings"), PlacementPreferenceCard("defFacingPortalLarge")]) //PlacementPreferenceCard("placeRandomly")])
    DECK_MultiplyByMultipleRules(miniDecks["keepSecondary"], [ZoneFilterCard("obstacleInsideKeepBuildings"), PlacementPreferenceCard("defFacingPortalLarge")]) //PlacementPreferenceCard("placeRandomly")])
    DECK_MultiplyByMultipleRules(miniDecks["keepUtility"], [ZoneFilterCard("obstacleInsideKeepBuildings"), PlacementPreferenceCard("defFacingPortalLarge")])
    DECK_MultiplyByMultipleRules(miniDecks["keepPlateau"], [ZoneFilterCard("obstacleKeepPlateau"), PlacementPreferenceCard("defFacingPortalLarge")])
    switch (GetVillageFlavour(villageId)) {
        default:
            DECK_MultiplyByMultipleRules(miniDecks["keepPrimary"], [PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
            DECK_MultiplyByMultipleRules(miniDecks["keepSecondary"], [PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
            DECK_MultiplyByMultipleRules(miniDecks["keepUtility"], [PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START)])
            DECK_MultiplyByMultipleRules(miniDecks["keepPlateau"], [PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
            break
    }
    DECK_PutOnBottomOf(miniDecks["keepPrimary"], baseDeck) //play keep structures
    DECK_PutOnBottomOf(miniDecks["keepSecondary"], baseDeck) //play keep structures
    DECK_PutOnBottomOf(miniDecks["keepUtility"], baseDeck) //play keep structures
    DECK_PutOnBottomOf(miniDecks["keepPlateau"], baseDeck) //play keep structures

    //spire/platform structure rules
    _MultiplyDistrictDecksByRules(spireNames, [ZoneFilterCard("obstacleSmallSpire"), PlacementPreferenceCard("placeRandomly")])
    _MultiplyDistrictDecksByRules(platformNames, [ZoneFilterCard("obstaclePlatform"), PlacementPreferenceCard("placeRandomly")])

    _MultiplyDistrictDecksByRules(["southPlatform"], [PlacementPreferenceCard("placeFarFromKnockback")])
    _MultiplyDistrictDecksByRules(["northPlatform"], [PlacementPreferenceCard("placeFarFromKnockback")])
    _MultiplyDistrictDecksByRules(["northSpires"], [PlacementPreferenceCard("placeFarFromKnockback")])
    _MultiplyDistrictDecksByRules(["southSpires"], [PlacementPreferenceCard("placeFarFromKnockback")])

    //triple stacks
    DECK_MultiplyByMultipleRules(miniDecks["northWaterfallTop"], [DistrictCard(districts.northDistrict.name), ZoneFilterCard("obstacleWaterfallTop"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["northWaterfallTop"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["northWaterfallMid"], [DistrictCard(districts.northDistrict.name), ZoneFilterCard("obstacleWaterfallMid"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["northWaterfallMid"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["northWaterfallBot"], [DistrictCard(districts.northDistrict.name), ZoneFilterCard("obstacleWaterfallBot"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["northWaterfallBot"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["southWaterfallTop"], [DistrictCard(districts.southDistrict.name), ZoneFilterCard("obstacleWaterfallTop"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["southWaterfallTop"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["southWaterfallMid"], [DistrictCard(districts.southDistrict.name), ZoneFilterCard("obstacleWaterfallMid"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["southWaterfallMid"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["southWaterfallBot"], [DistrictCard(districts.southDistrict.name), ZoneFilterCard("obstacleWaterfallBot"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["southWaterfallBot"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["westWaterfallTop"], [DistrictCard(districts.westDistrict.name), ZoneFilterCard("obstacleWaterfallTop"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["westWaterfallTop"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["westWaterfallMid"], [DistrictCard(districts.westDistrict.name), ZoneFilterCard("obstacleWaterfallMid"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["westWaterfallMid"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["westWaterfallBot"], [DistrictCard(districts.westDistrict.name), ZoneFilterCard("obstacleWaterfallBot"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["westWaterfallBot"], baseDeck)

    _ShuffleDistrictCards(spireNames)
    _ShuffleDistrictCards(platformNames)

    //play spire/platform structures
    _PlayDistrictMiniDecks(spireNames)
    _PlayDistrictMiniDecks(platformNames)

    //===== Bridge logic ========
    switch (baseSize) {
        case BASE_SIZE_SMALL:
            _BuildBridge(baseDeck, [ZoneFilterCard(obstacleVal.bridgeZone.one), PlacementPreferenceCard(DIRECTION_CARD.northRect)], [ZoneFilterCard(obstacleVal.bridgeZone.two)])
            _BuildBridge(baseDeck, [ZoneFilterCard(obstacleVal.bridgeZone.one), PlacementPreferenceCard(DIRECTION_CARD.southRect)], [ZoneFilterCard(obstacleVal.bridgeZone.four)])
            break

        case BASE_SIZE_MEDIUM:
            _BuildBridge(baseDeck, [ZoneFilterCard(obstacleVal.bridgeZone.one)], [ZoneFilterCard(obstacleVal.bridgeZone.two)])
            _BuildBridge(baseDeck, [ZoneFilterCard(obstacleVal.bridgeZone.one)], [ZoneFilterCard(obstacleVal.bridgeZone.four)])
            _BuildBridge(baseDeck, [ZoneFilterCard(obstacleVal.bridgeZone.one)], [ZoneFilterCard(obstacleVal.bridgeZone.six)])
            break

        case BASE_SIZE_LARGE:
            _BuildBridge(baseDeck, [ZoneFilterCard(obstacleVal.bridgeZone.one)], [ZoneFilterCard(obstacleVal.bridgeZone.two)])
            _BuildBridge(baseDeck, [ZoneFilterCard(obstacleVal.bridgeZone.one)], [ZoneFilterCard(obstacleVal.bridgeZone.four)])
            _BuildBridge(baseDeck, [ZoneFilterCard(obstacleVal.bridgeZone.one)], [ZoneFilterCard(obstacleVal.bridgeZone.six)])
            break
    }
    return baseDeck
}
const _ObstacleGenerateBossPlatforms = (villageId, baseDeck) => {
    //districts
    const district1 = DistrictCard("obstacleBossDistrict1")
    const district2 = DistrictCard("obstacleBossDistrict2")
    //portal platform
    const portalPlateau = _CreateZone("obstacleBossThirdZone", [ZoneHeightChangeCard(ObstacleHeight.H40), ZoneTagCard("obstacleBossThirdPlatform"), ZoneTagCard(obstacleVal.bridgeZone.four), ZoneTagCard("obstacleBossArena")])
    _CreateLayerOfZonesInDeck("addLayerOfZones", portalPlateau, [ZoneHeightChangeCard(ObstacleHeight.Flatten), ZoneTagCard("obstacleDeadZone")])

    //district 1 plateau
    const d1Plateau = _CreateZone("addZone", [district1, PlacementPreferenceCard(DIRECTION_CARD.northRect), ZoneHeightChangeCard(ObstacleHeight.H22), ZoneTagCard("obstacleBossFirstPlatform"), ZoneTagCard("obstacleBossArena")], 2)
    _CreateZoneInDeck("obstacleBossFirstZone", d1Plateau, [district1, ZoneHeightChangeCard(ObstacleHeight.H22), PlacementPreferenceCard(DIRECTION_CARD.northRect), ZoneTagCard("obstacleBossFirstPlatform"), ZoneTagCard("obstacleBossArena"), ZoneTagCard("plateauCenter")])
    _CreateLayerOfZonesInDeck("addLayerOfZones", d1Plateau, [district1, ZoneHeightChangeCard(ObstacleHeight.H22), ZoneTagCard("obstacleBossFirstPlatform"), ZoneTagCard("obstacleBossArena")], 1)
    _CreateLayerOfZonesInDeck("addLayerOfZones", d1Plateau, [district1, ZoneHeightChangeCard(ObstacleHeight.Flatten), ZoneTagCard("obstacleDeadZone")])

    //district 2 plateau
    const d2Plateau = _CreateZone("addZone", [district2, PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneHeightChangeCard(ObstacleHeight.H26), ZoneTagCard("obstacleBossSecondPlatform"), ZoneTagCard("obstacleBossArena")], 2)
    _CreateZoneInDeck("obstacleBossSecondZone", d2Plateau, [district2, ZoneHeightChangeCard(ObstacleHeight.H26), ZoneTagCard(obstacleVal.bridgeZone.two), PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneTagCard("obstacleBossSecondPlatform"), ZoneTagCard("obstacleBossArena"), ZoneTagCard("plateauCenter")])
    _CreateLayerOfZonesInDeck("addLayerOfZones", d2Plateau, [district2, ZoneHeightChangeCard(ObstacleHeight.H26), ZoneTagCard(obstacleVal.bridgeZone.two), ZoneTagCard("obstacleBossSecondPlatform"), ZoneTagCard("obstacleBossArena")], 1)
    _CreateLayerOfZonesInDeck("addLayerOfZones", d2Plateau, [district2, ZoneHeightChangeCard(ObstacleHeight.Flatten), ZoneTagCard("obstacleDeadZone")])
    DECK_MultiplyByMultipleRules(district2, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southRect)])
    DECK_MultiplyByMultipleRules(district1, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northEastRect)])
    DECK_PutOnBottomOf(portalPlateau, baseDeck)
    DECK_PutOnBottomOf(district2, baseDeck)
    DECK_PutOnBottomOf(d2Plateau, baseDeck)
    DECK_PutOnBottomOf(district1, baseDeck)
    DECK_PutOnBottomOf(d1Plateau, baseDeck)
}
const _ObstacleFactionMakeBossBase = (villageId, baseSize, districts) => {
    const baseDeck = DECK_Empty()
    const miniDecks = _obstacleGenMiniDecks(villageId, baseSize)
    const spireNames = ["northSpires", "eastSpires", "southSpires", "westSpires"]
    const platformNames = ["northPlatform", "eastPlatform", "southPlatform", "westPlatform"]

    //helper for the helper function to use basedeck
    _ObstacleGenerateBossPlatforms(villageId, baseDeck)
    _ObstacleGeneratePlateaus(villageId, baseSize, baseDeck, miniDecks, districts)

    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)
    _PlaceObjectiveStructure("obstaclePortalLarge", baseDeck, [ZoneHeightChangeCard(ObstacleHeight.H42), ZoneFilterCard("obstacleBossThirdPlatform"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("obstacleDeadZone"), ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneFilterCard("placeInsideVillageAlways")])

    _CreateBuildableInDeck("piglinRallyingPoint", 1, baseDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("obstacleBossThirdPlatform"), TagCard("obstacleBossRally3"), ZoneFilterCard("obstacleDeadZone")])

    const plateau1 = DistrictCard("obstacleBossDistrict1")
    const plateau2 = DistrictCard("obstacleBossDistrict2")
    const plateau1Buildings = _CreateBuildable("piglinRallyingPoint", 1, [plateau1, ZoneFilterCard("plateauCenter"), ZoneFilterCard("obstacleBossArena"), TagCard("obstacleBossRally1"), ZoneFilterCard("obstacleDeadZone")])
    _CreateBuildableInDeck(BUILDABLE_CARD.NETHERSPREADER, 3, plateau1Buildings, [plateau1, ZoneFilterCard("obstacleBossArena"), PlacementPreferenceCard("placeRandomly"), ZoneFilterCard("obstacleDeadZone")])
    _CreateBuildableInDeck(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, plateau1Buildings, [plateau1, ZoneFilterCard("obstacleOutsideBossArena"), ZoneFilterCard("obstacleDeadZone")])
    _CreateBuildableInDeck(BUILDABLE_CARD.BARRACKS_SIEGER, 1, plateau1Buildings, [plateau1, ZoneFilterCard("obstacleOutsideBossArena"), ZoneFilterCard("obstacleDeadZone")])

    const plateau2Buildings = _CreateBuildable("piglinRallyingPoint", 1, [plateau2, ZoneFilterCard("plateauCenter"), ZoneFilterCard("obstacleBossArena"), TagCard("obstacleBossRally2"), ZoneFilterCard("obstacleDeadZone")])
    _CreateBuildableInDeck(BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 2, plateau1Buildings, [plateau2, ZoneFilterCard("obstacleBossArena"), PlacementPreferenceCard("placeRandomly"), ZoneFilterCard("obstacleDeadZone")])
    _CreateBuildableInDeck(BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1, plateau2Buildings, [plateau2, ZoneFilterCard("obstacleOutsideBossArena"), ZoneFilterCard("obstacleDeadZone")])
    _CreateBuildableInDeck(BUILDABLE_CARD.BARRACKS_SIEGER, 1, plateau2Buildings, [plateau2, ZoneFilterCard("obstacleOutsideBossArena"), ZoneFilterCard("obstacleDeadZone")])

    _BuildBridge(baseDeck, [ZoneFilterCard(obstacleVal.bridgeZone.one)], [ZoneFilterCard(obstacleVal.bridgeZone.two)])
    _BuildBridge(baseDeck, [ZoneFilterCard(obstacleVal.bridgeZone.three)], [ZoneFilterCard(obstacleVal.bridgeZone.four), PlacementPreferenceCard(DIRECTION_CARD.southRect)])

    //play the structure decks
    DECK_PutOnBottomOf(plateau1Buildings, baseDeck)
    DECK_PutOnBottomOf(plateau2Buildings, baseDeck)

    //triple stacks
    DECK_MultiplyByMultipleRules(miniDecks["northWaterfallTop"], [DistrictCard(districts.northDistrict.name), ZoneFilterCard("obstacleWaterfallTop"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["northWaterfallTop"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["northWaterfallMid"], [DistrictCard(districts.northDistrict.name), ZoneFilterCard("obstacleWaterfallMid"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["northWaterfallMid"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["northWaterfallBot"], [DistrictCard(districts.northDistrict.name), ZoneFilterCard("obstacleWaterfallBot"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["northWaterfallBot"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["southWaterfallTop"], [DistrictCard(districts.southDistrict.name), ZoneFilterCard("obstacleWaterfallTop"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["southWaterfallTop"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["southWaterfallMid"], [DistrictCard(districts.southDistrict.name), ZoneFilterCard("obstacleWaterfallMid"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["southWaterfallMid"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["southWaterfallBot"], [DistrictCard(districts.southDistrict.name), ZoneFilterCard("obstacleWaterfallBot"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["southWaterfallBot"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["westWaterfallTop"], [DistrictCard(districts.westDistrict.name), ZoneFilterCard("obstacleWaterfallTop"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["westWaterfallTop"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["westWaterfallMid"], [DistrictCard(districts.westDistrict.name), ZoneFilterCard("obstacleWaterfallMid"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["westWaterfallMid"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["westWaterfallBot"], [DistrictCard(districts.westDistrict.name), ZoneFilterCard("obstacleWaterfallBot"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["westWaterfallBot"], baseDeck)

    //=== Helpers ===
    const _PlayDistrictMiniDecks = (deckNames) => {
        _PlayMiniDecks(baseDeck, miniDecks, deckNames)
    }

    const _ShuffleDistrictCards = (deckNames) => {
        _ShuffleMiniDecks(miniDecks, deckNames)
    }
    const _MultiplyDistrictDecksByRules = (deckNames, rules) => {
        _MultiplyMiniDeckByRules(miniDecks, deckNames, rules)
    }
    // //spire/platform structure rules
    _MultiplyDistrictDecksByRules(spireNames, [ZoneFilterCard("obstacleSmallSpire"), PlacementPreferenceCard("placeRandomly")])
    _MultiplyDistrictDecksByRules(platformNames, [ZoneFilterCard("obstaclePlatform"), PlacementPreferenceCard("placeRandomly")])

    _ShuffleDistrictCards(spireNames)
    _ShuffleDistrictCards(platformNames)
    // //play spire/platform structures
    _PlayDistrictMiniDecks(spireNames)
    _PlayDistrictMiniDecks(platformNames)
    return baseDeck
}

/* ----------------------- Village Generation Snippets ---------------------- */

SNIPPET_VillageFinishedBuilding("vfb_obstacle_base_setup", (villageId, _payload) => {
    SetupPiglinBase(villageId, obstacleVal.baseSetup)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    switch (baseSize) {
        case BASE_SIZE_BOSS:
            SetupPortalInvulnerabilityVO(villageId)
            SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, obstacleVal.barracks, obstacleVal.escalation.phase1.escalationLevel)
            break
    }

    if (IsSmallOrGreater(baseSize)) {
        _InitObstacleResponses(villageId, true)
    }
})

SNIPPET_VillageGenerated("vg_obstacle", (villageId, _payload) => {
    DebugOutput("Obstacle Base " + villageId + " has generated", obstacleVal.debug.outputOn)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    if (IsMobAlliancePiglinSize(baseSize)) {
        return
    }
    if (IsSmallOrGreater(baseSize)) {
        InitializeBaseAIs(villageId, obstacleVal.aiConfig, obstacleVal.piglinRallyPoints)
    }
    LISTENFOR_VillageFinishedBuilding({
        snippet: "vfb_obstacle_base_setup",
        ownerVillageId: villageId,
        villageId: villageId
    })
    //
    const districts = {
        northDistrict: {
            name: "obstacleDistrict1",
            card: DistrictCard("obstacleDistrict1"),
            id: 0,
            miniDecks: ["northSpires", "northPlatform"],
            deck: DECK_Empty()
        },
        eastDistrict: {
            name: "obstacleDistrict2",
            card: DistrictCard("obstacleDistrict2"),
            id: 1,
            miniDecks: ["eastSpires", "eastPlatform"],
            deck: DECK_Empty()
        },
        southDistrict: {
            name: "obstacleDistrict3",
            card: DistrictCard("obstacleDistrict3"),
            id: 2,
            miniDecks: ["southSpires", "southPlatform"],
            deck: DECK_Empty()
        },
        westDistrict: {
            name: "obstacleDistrict4",
            card: DistrictCard("obstacleDistrict4"),
            id: 3,
            miniDecks: ["westSpires", "westPlatform"],
            deck: DECK_Empty()
        }
    }

    let baseDeck

    switch (baseSize) {
        case BASE_SIZE_OUTPOST:
            baseDeck = _ObstacleFactionMakeOutpost(villageId)
            if (IsPiglinRaidingParty(villageId)) {
                SetupMobCages(villageId, obstacleVal.raidingPartyVars.cageTag)
                SetupRaidingPartyHorn(villageId)
            }
            break
        case BASE_SIZE_BOSS:
            baseDeck = _ObstacleFactionMakeBossBase(villageId, BASE_SIZE_BOSS, districts)
            break
        default:
            baseDeck = _ObstacleFactionMakeBase(villageId, baseSize, districts)
            break
    }

    if (baseDeck === null) {
        return
    }

    SetupBasicVillageClearingCards(baseDeck)
    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
})

/* -------------------- BUILDING PLAN FOR OBSTACLE Faction -------------------- */

//const obstacleBaseMiniDeckNames = ["keepPrimary", "keepSecondary", "keepUtility", "keepPlateau", "northPlatform", "eastPlatform", "southPlatform", "westPlatform", "northeastPlatform", "southeastPlatform", "northwestPlatform", "southwestPlatform", "northSpires", "eastSpires", "southSpires", "westSpires", "northeastSpires", "southeastSpires", "southwestSpires", "northwestSpires"]
//const obstacleOutpostMiniDeckNames = ["core", "crates", "middle", "outer"]
const obstacleBaseStructureLayout = {
    frontlineA: {
        //these values are flavor+campaignphase
        villageVariationA1: {
            core: [
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [[BUILDABLE_CARD.NETHERSPREADER, 1]],
            ground: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ]
        },
        villageVariationA2: {
            core: [
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [
                [BUILDABLE_CARD.NETHERSPREADER, 2],
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1]
            ],
            ground: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ]
        },
        villageVariationA3: {
            core: [
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [
                [BUILDABLE_CARD.NETHERSPREADER, 2],
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1]
            ],
            ground: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.NETHERSPREADER, 2]
            ]
        },
        //----------------------------------------------------
        villageVariationB1: {
            core: [
                [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],
            ground: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ]
        },
        villageVariationB2: {
            core: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [
                [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            ground: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ]
        },
        villageVariationB3: {
            core: [
                [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            ground: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 3],
                [BUILDABLE_CARD.NETHERSPREADER, 2]
            ]
        },
        //----------------------------------------------------
        villageVariationC1: {
            core: [
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]], //this will spawn a grenadier
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            ground: [
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]
            ]
        },
        villageVariationC2: {
            core: [
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]], //this will spawn a grenadier
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]], //this will spawn a grenadier
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            ground: [[BUILDABLE_CARD.NETHERSPREADER, 3]]
        },
        villageVariationC3: {
            core: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 2],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            ground: [
                [BUILDABLE_CARD.NETHERSPREADER, 2],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2]
            ]
        }
    },
    small: {
        villageVariationA: {
            keepPrimary: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleSiegeBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleSiegeRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            keepSecondary: [],
            keepUtility: [],
            keepPlateau: [
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]
            ],

            northWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleGuardBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleGuardRally", "doNotDivideRally"]]
            ],
            northWaterfallMid: [],
            northWaterfallBot: [[BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]]],

            northPlatform: [
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleAssaultBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleAssaultRally", "doNotDivideRally"]]
            ],
            northSpires: [
                [BUILDABLE_CARD.NETHERSPREADER, 2, ["obstacleComposition1"]], //discrete encounter
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],

            eastPlatform: [
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            eastSpires: [], //unused in small

            southWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleGuardBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleGuardRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]]
            ],
            southWaterfallMid: [],
            southWaterfallBot: [[BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]],

            southPlatform: [
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                ["obstacleRallypoint", 1, ["obstacleAssaultRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleAssaultBarracks"]]
            ],
            southSpires: [
                [BUILDABLE_CARD.NETHERSPREADER, 2, ["obstacleComposition1"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],

            westWaterfallTop: [], //unused in small
            westWaterfallMid: [], //unused in small
            westWaterfallBot: [], //unused in small

            westPlatform: [], //not used
            westSpires: [] //not used
        },
        villageVariationB: {
            keepPrimary: [
                ["obstacleRallypoint", 1, ["obstacleGuardRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleGuardBarracks"]],
                [BUILDABLE_CARD.GOLDMINE, 2]
            ],
            keepSecondary: [],
            keepUtility: [],
            keepPlateau: [],

            northWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleSiegeBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleSiegeRally", "doNotDivideRally"]]
            ],
            northWaterfallMid: [],
            northWaterfallBot: [[BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]]],

            northPlatform: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleAssaultBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleAssaultRally", "doNotDivideRally"]]
            ],
            northSpires: [
                [BUILDABLE_CARD.NETHERSPREADER, 2, ["obstacleComposition1"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],

            eastPlatform: [
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            eastSpires: [],

            southWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleSiegeBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleSiegeRally", "doNotDivideRally"]]
            ],

            southWaterfallMid: [],
            southWaterfallBot: [[BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]],

            southPlatform: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleAssaultBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleAssaultRally", "doNotDivideRally"]]
            ],
            southSpires: [
                [BUILDABLE_CARD.NETHERSPREADER, 2, ["obstacleComposition1"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],

            westWaterfallTop: [], //unused in small
            westWaterfallMid: [], //unused in small
            westWaterfallBot: [], //unused in small

            westPlatform: [], //not used
            westSpires: [] //not used
        }
    },
    medium: {
        villageVariationA: {
            keepPrimary: [["obstacleRallypoint", 1, ["obstacleGuardRally", "doNotDivideRally"]]],
            keepSecondary: [],
            keepUtility: [],
            keepPlateau: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleGuardBarracks"]],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            northWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleSiegeBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleSiegeRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]]
            ],
            northWaterfallMid: [],
            northWaterfallBot: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],

            northPlatform: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleAssaultBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleAssaultRally", "doNotDivideRally"]]
            ],
            northSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]]
            ],

            eastPlatform: [],
            eastSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.PIGLIN_CRATE, 1]
            ],
            southWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleSiegeBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleSiegeRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]]
            ],
            southWaterfallMid: [],
            southWaterfallBot: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],

            southPlatform: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleAssaultBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleAssaultRally", "doNotDivideRally"]]
            ],
            southSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]]
            ],

            westWaterfallTop: [], //unused in medium
            westWaterfallMid: [], //unused in medium
            westWaterfallBot: [], //unused in medium

            westPlatform: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]]
            ],
            westSpires: []
        },
        villageVariationB: {
            keepPrimary: [
                ["obstacleRallypoint", 1, ["obstacleGuardRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.BARRACKS_SIEGER, 2, ["obstacleGuardBarracks"]]
            ],
            keepSecondary: [],
            keepUtility: [],
            keepPlateau: [
                [BUILDABLE_CARD.PIGLIN_CRATE, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            northWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleSiegeBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleSiegeRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]]
            ],
            northWaterfallMid: [],
            northWaterfallBot: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],

            northPlatform: [
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, ["obstacleAssaultBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleAssaultRally", "doNotDivideRally"]]
            ],
            northSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]]
            ],

            eastPlatform: [],
            eastSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.PIGLIN_CRATE, 1]
            ],

            southWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleGuardBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleGuardRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]]
            ],
            southWaterfallMid: [],
            southWaterfallBot: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],

            southPlatform: [
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, ["obstacleAssaultBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleAssaultRally", "doNotDivideRally"]]
            ],
            southSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]]
            ],

            westWaterfallTop: [], //unused in medium
            westWaterfallMid: [], //unused in medium
            westWaterfallBot: [], //unused in medium

            westPlatform: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition1"]]
            ],
            westSpires: [],

            northeastPlatform: [],
            northeastSpires: [
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, ["obstacleAssaultBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleAssaultRally", "doNotDivideRally"]]
            ]
        }
    },
    large: {
        villageVariationA: {
            keepPrimary: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleGuardBarracks"]],
                [BUILDABLE_CARD.BARRACKS_SIEGER, 2, ["obstacleSiegeBarracks"]]
            ],
            keepSecondary: [],
            keepUtility: [],
            keepPlateau: [[BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleGuardBarracks"]]],

            northWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1],
                ["obstacleRallypoint", 1, ["obstacleSiegeRally", "obstacleComposition3", "doNotDivideRally"]]
            ],
            northWaterfallMid: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition2"]]
            ],
            northWaterfallBot: [
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, ["obstacleAssaultBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleAssaultRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],

            northPlatform: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],
            northSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition2"]]
            ],

            eastPlatform: [],
            eastSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.PIGLIN_CRATE, 1, ["obstacleComposition1"]]
            ],
            southWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["obstacleGuardBarracks"]],
                ["obstacleRallypoint", 1, ["obstacleGuardRally", "obstacleComposition3", "doNotDivideRally"]]
            ],
            southWaterfallMid: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition2"]]
            ],
            southWaterfallBot: [
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, ["obstacleAssaultBarracks"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                ["obstacleRallypoint", 1, ["obstacleAssaultRally", "doNotDivideRally"]]
            ],

            southPlatform: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],
            southSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 2]
            ],

            westWaterfallTop: [], //unused in medium
            westWaterfallMid: [], //unused in medium
            westWaterfallBot: [], //unused in medium

            westPlatform: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition2"]]
            ],
            westSpires: [],

            northeastPlatform: [],
            northeastSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.PIGLIN_CRATE, 1]
            ],

            southeastPlatform: [], //not used in medium
            southeastSpires: [], //not used in medium

            southwestPlatform: [],
            southwestSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],

            northwestPlatform: [],
            northwestSpires: []
        }
    },
    boss: {
        villageVariationDefault: {
            northWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition3"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]
            ],
            northWaterfallMid: [],
            northWaterfallBot: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],

            southWaterfallTop: [],
            southWaterfallMid: [],
            southWaterfallBot: [],

            westWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["obstacleComposition3"]]
            ],
            westWaterfallMid: [], //unused in small
            westWaterfallBot: [[BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1]],

            keepPrimary: [],
            keepSecondary: [],
            keepUtility: [],
            keepPlateau: [],

            northPlatform: [
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2]
            ],
            northSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1]
            ],

            eastPlatform: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1]
            ],
            eastSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                [BUILDABLE_CARD.PIGLIN_CRATE, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],

            southPlatform: [],
            southSpires: [],

            westPlatform: [],
            westSpires: [
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2]
            ]
        }
    }
}

const _obstacleGenMiniDecks = (villageId, baseSize, flavorOverride = "") => {
    const buildingPlan = _obstacleGetBaseGenData(villageId, flavorOverride)
    if (buildingPlan[baseSize] === undefined) {
        return null
    }
    return CreateBuildableGenMinidecksForSize(Object.keys(buildingPlan[baseSize]), buildingPlan, baseSize, villageId, RANDOM_GROUP_OBSTACLE_HORDE)
}

//helper function for reading buildable data for minidecks
const _obstacleGetBaseGenData = (villageId, flavorOverride = "") => {
    const flavor = flavorOverride ? flavorOverride : GetVillageFlavour(villageId)
    const baseDataFilteredByFlavour = {
        frontlineA: obstacleBaseStructureLayout["frontlineA"][flavor],
        small: obstacleBaseStructureLayout["small"][flavor],
        medium: obstacleBaseStructureLayout["medium"][flavor],
        large: obstacleBaseStructureLayout["large"][flavor],
        boss: obstacleBaseStructureLayout["boss"]["villageVariationDefault"] //always spawn boss base using villageVariationDefault
    }
    return baseDataFilteredByFlavour
}

/* -------------------------------------------------------------------------- */
/*                         Audio/Voiceovers/Cinematics                        */
/* -------------------------------------------------------------------------- */

SNIPPET_EntitySpawned("es_lava_launcher_vo", (piglinEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(piglinEntity)
    const villageEntity = GetVillageEntityFromID(villageId)
    if (HasEntities(villageEntity)) {
        const line = ChooseFromArray(["piglin_big_unit_obstacle_1", "piglin_big_unit_obstacle_2", "piglin_big_unit_obstacle_3"])
        PlayPresentationActionToClosePlayers(line, villageEntity, 150)
        Once()
    }
})

SNIPPET_CinematicFinished(`cf_${obstacleVal.cinematic.firstTimeNonShieldBaseIntro}`, (payload) => {
    PlayPresentationActionToAll(obstacleVal.VO.postIntroVO)
    UnlockJournalEntry(JOURNAL_UNLOCKS.HORDE_OBSTACLE_FACTION)
    PlayBaseTooToughVO(payload.ownerVillageId, 7)
    HandleRSLOnboarding(payload.ownerVillageId)
})

SNIPPET_CinematicFinished(`cf_${obstacleVal.cinematic.bossIntro}`, (payload) => {
    SetPortalInvulnerable(payload.ownerVillageId, true)
    PlayPresentationActionToAll(obstacleVal.VO.postBossSpawnVO)
})

SNIPPET_CinematicFinished(`cf_${obstacleVal.cinematic.shieldIntro}`, (payload) => {
    //PlayPresentationActionToAll(obstacleVal.VO.postShieldIntroVO)
    PlayBaseTooToughVO(payload.ownerVillageId, 1)
    HandleRSLOnboarding(payload.ownerVillageId)
    Once()
})

SNIPPET_SpatialPartitionEntered("spe_obstacle_outpost", () => {
    if (QUERY_GetGlobalVariable("outpostVisited") === 0) {
        OUTPUT_SetGlobalVariable("outpostVisited", 1)
    }
})

// Telemetry
SetupDefaultTelemetryForPiglinBase(FACTION_NAME_OBSTACLE)
