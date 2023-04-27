const attackOverrideValues = {
    //Times
    bastionChargeTime: 45,
    bastionChargeStructureCount: 3
}

const attackResponse = {
    tier1StructureDamaged: "tier1StructureDamaged",
    tier2StructureDamaged: "tier2StructureDamaged",
    tier3StructureDamaged: "tier3StructureDamaged",
    tier1StructureDestroyed: "tier1StructureDestroyed",
    tier2StructureDestroyed: "tier2StructureDestroyed",
    tier3StructureDestroyed: "tier3StructureDestroyed",
    playerTier1StructureBuilt: "playerTier1StructureBuilt",
    playerTier2StructureBuilt: "playerTier2StructureBuilt",
    playerTier3StructureBuilt: "playerTier3StructureBuilt",
    escalation1: "escalation1",
    escalation3: "escalation3",
    portalDamaged: "portalDamaged",
    pigmadiloSpawn: "pigmadiloSpawn",
    multipleDestroyedStructures: "multipleDestroyedStructures",
    throwerRally: "throwerRally"
}

const attackAllRallyPointsTags = ["attackSiegeRally", "attackDefendRally", "attackPatrolRally", "attackSiegeRally"]

const attackUnitCompositions = {
    runtsOnly: {
        units: [{ amount: 5, unit: PIGLIN_ARCHETYPE.RUNT }],
        delayUntilSentOut: 25
    },
    gruntersOnly: {
        units: [{ amount: 5, unit: PIGLIN_ARCHETYPE.GRUNTER }],
        delayUntilSentOut: 25
    },
    warboarsOnly: {
        units: [{ amount: 6, unit: PIGLIN_ARCHETYPE.WARBOAR }],
        delayUntilSentOut: 25
    },
    pigmadilosOnly: {
        units: [{ amount: 1, unit: PIGLIN_ARCHETYPE.PIGMADILO }],
        delayUntilSentOut: 25
    },
    macedilo: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PIGMADILO }
        ],
        delayUntilSentOut: 25
    },
    pyrodilo: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PIGMADILO }
        ],
        delayUntilSentOut: 25
    },
    boaradilo: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.WARBOAR },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PIGMADILO }
        ],
        delayUntilSentOut: 25
    },
    boomdilo: {
        units: [
            { amount: 3, unit: PIGLIN_ARCHETYPE.SEEKER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PIGMADILO }
        ],
        delayUntilSentOut: 25
    },
    wasteland: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER },
            { amount: 3, unit: PIGLIN_ARCHETYPE.WARBOAR }
        ],
        delayUntilSentOut: 25
    },
    wastelandPlus: {
        units: [
            { amount: 2, unit: PIGLIN_ARCHETYPE.SEEKER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PIGMADILO }
        ],
        delayUntilSentOut: 25
    },
    maceMD: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
        ],
        delayUntilSentOut: 25
    },
    pyroMD: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
        ],
        delayUntilSentOut: 25
    },
    boarMD: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR },
            { amount: 2, unit: PIGLIN_ARCHETYPE.MEDIC }
        ],
        delayUntilSentOut: 25
    },
    smackdown: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER },
            { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT }
        ],
        delayUntilSentOut: 25
    },
    smackdownPlus: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PIGMADILO },
            { amount: 4, unit: PIGLIN_ARCHETYPE.RUNT }
        ],
        delayUntilSentOut: 25
    },
    spiky: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR }
        ],
        delayUntilSentOut: 25
    },
    spikyPlus: {
        units: [
            { amount: 3, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PIGMADILO },
            { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR }
        ],
        delayUntilSentOut: 25
    },
    hounds: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR }
        ],
        delayUntilSentOut: 25
    },
    houndsPlus: {
        units: [
            { amount: 3, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PIGMADILO },
            { amount: 1, unit: PIGLIN_ARCHETYPE.WARBOAR }
        ],
        delayUntilSentOut: 25
    },
    heavyMetal: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
        ],
        delayUntilSentOut: 25
    },
    fireRain: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
        ],
        delayUntilSentOut: 25
    }
}
// pigArrowTower  pigShieldTower  pigThrowerTower  pigSpreader  sns_fear  pigRangeUp
const attackDiscreteEncounters = {
    ourTower: {
        unitComposition: attackUnitCompositions.runtsOnly,
        buildableTag: "pigArrowTower",
        leashDistance: 100,
        returnDistance: 50
    },
    blazeThrower: {
        unitComposition: attackUnitCompositions.gruntersOnly,
        buildableTag: "pigArrowTower",
        leashDistance: 100,
        returnDistance: 50
    },
    netheredMace: {
        unitComposition: attackUnitCompositions.maceMD,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    netheredBlaze: {
        unitComposition: attackUnitCompositions.pyroMD,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    maceAndShield: {
        unitComposition: attackUnitCompositions.runtsOnly,
        buildableTag: "wrongNeighbourhood",
        leashDistance: 100,
        returnDistance: 50
    },
    pyroAndShield: {
        unitComposition: attackUnitCompositions.gruntersOnly,
        buildableTag: "wrongNeighbourhood",
        leashDistance: 100,
        returnDistance: 50
    },
    wrongNeighbourhood: {
        unitComposition: attackUnitCompositions.pigmadilosOnly,
        buildableTag: "wrongNeighbourhood",
        leashDistance: 100,
        returnDistance: 50
    },
    ramifications: {
        unitComposition: attackUnitCompositions.warboarsOnly,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    cheatCode: {
        unitComposition: attackUnitCompositions.pyrodilo,
        buildableTag: "pigRangeUp",
        leashDistance: 100,
        returnDistance: 50
    },
    elitist: {
        unitComposition: attackUnitCompositions.macedilo,
        buildableTag: "sns_fear",
        leashDistance: 100,
        returnDistance: 50
    },
    endeavor: {
        unitComposition: attackUnitCompositions.gruntersOnly,
        buildableTag: "wrongNeighbourhood",
        leashDistance: 100,
        returnDistance: 50
    },
    oldSchool: {
        unitComposition: attackUnitCompositions.runtsOnly,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    pyroSchool: {
        unitComposition: attackUnitCompositions.gruntersOnly,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    aboveAndBelow: {
        unitComposition: attackUnitCompositions.runtsOnly,
        buildableTag: "pigThrowerTower",
        leashDistance: 100,
        returnDistance: 50
    },
    peppaPyro: {
        unitComposition: attackUnitCompositions.gruntersOnly,
        buildableTag: "pigThrowerTower",
        leashDistance: 100,
        returnDistance: 50
    }
}

const attackHordeAI = {
    patrol: "AttackHordePatrolAi",
    defend: "AttackHordeDefendAi",
    siege: "AttackHordeSiegeAi"
}

const attackVal = {
    debug: {
        outputOn: false
    },
    audioPerPhaseArray: ["initial_attack", "phase1_attack", "phase2_attack", "phase3_attack", "phase4_attack"],
    escalation: {
        approached: "approached",
        keyBuildingDestroyed: "keyBuildingDestroyed",
        portalApproached: "portalApproached"
    },
    global: {
        hasVisited: "gv_attack_faction_has_been_visted",
        hasVisitedCoilBase: "gv_attack_faction_has_visited_coil_base",
        basesDestroyed: "gv_attack_faction_bases_destroyed",
        smallBaseLayoutTracker: "gv_attack_small_base_layout_tracker",
        mediumBaseLayoutTracker: "gv_attack_medium_base_layout_tracker",
        largeBaseLayoutTracker: "gv_attack_large_base_layout_tracker"
    },
    consts: {
        maxNumOfRaisedPlatforms: 9
    },
    cinematic: {
        firstTimeNonShieldBaseIntro: "hrd02_c51_portal",
        shieldIntro: "hrd02_c50a_shield_intro"
    },
    VO: {
        postIntroVO: "attack_intro",
        postShieldIntroVO: "base_attack_lava_post_nis",
        escalation: ["piglin_attack_escalation_2", "piglin_attack_escalation_4"]
    },
    snippet: {
        baseEnterTV: "spe_attack_general",
        mcRecruitToAi: "mc_attack_recruit_to_Ai"
    },
    music: {
        [BASE_SIZE_OUTPOST]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_attack_outpost_1",
            [VILLAGE_VARIATION_B]: "badger:music_combat_attack_outpost_2",
            [VILLAGE_VARIATION_C]: "badger:music_combat_attack_outpost_3"
        },
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_attack_base_small_1",
            [VILLAGE_VARIATION_B]: "badger:music_combat_attack_base_small_2"
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_attack_base_medium_1",
            [VILLAGE_VARIATION_B]: "badger:music_combat_attack_base_medium_2"
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_attack_base_large_1"
        }
    },
    raidingPartyVars: {
        cageTag: "attack_raiding_party_cage",
        cageAmount: 2
    },
    barracks: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_FIGHTER]: FighterBarracksConfig_AttackFaction_Variations,
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_DISRUPTOR]: DisruptorBarracksConfig_AttackFaction_Variations,
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_SIEGER]: SiegerBarracksConfig_AttackFaction_Variations,
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_SPECIALIST]: SpecialistBarracksConfig_AttackFaction_Variations
    },
    distances: {
        villageSmallStructureDetectionRadius: 230,
        villageMediumStructureDetectionRadius: 280,
        villageLargeStructureDetectionRadius: 330,
        villageTinyStructureDetectionRadius: 180
    },
    baseSetup: {
        reescalationSnippet: "spe_attack_gameplay",
        [BASE_SIZE_SMALL]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_attack_base_small",
            reescalation: true,
            snippets: [
                { snippet: "spe_attack_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB },
                { snippet: "spe_piglin_base_onboarding", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER, gv: ONBOARDING_GLOBALS.ONBOARDING_ENABLED }
            ]
        },
        [BASE_SIZE_MEDIUM]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_attack_base_medium",
            reescalation: true,
            snippets: [
                { snippet: "spe_attack_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB },
                { snippet: "spe_piglin_base_onboarding", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER, gv: ONBOARDING_GLOBALS.ONBOARDING_ENABLED }
            ]
        },
        [BASE_SIZE_LARGE]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_attack_base_large",
            reescalation: true,
            snippets: [
                { snippet: "spe_attack_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB },
                { snippet: "spe_piglin_base_onboarding", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER, gv: ONBOARDING_GLOBALS.ONBOARDING_ENABLED }
            ]
        },
        [BASE_SIZE_OUTPOST]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_attack_base_outpost",
            snippets: [
                // eslint-disable-next-line @typescript-eslint/camelcase
                { snippet: "spe_attack_outpost", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB }
            ]
        },
        [BASE_SIZE_PIGLIN_SKELETON]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_attack_base_small",
            reescalation: true,
            snippets: [
                { snippet: "spe_attack_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB },
                { snippet: "spe_piglin_base_onboarding", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER, gv: ONBOARDING_GLOBALS.ONBOARDING_ENABLED }
            ]
        }
    },
    /*
    --------------------
    ----- AI SETUP -----  
    --------------------
    */
    aiConfig: {
        [attackHordeAI.patrol]: {
            controllerArchetype: "badger:ai_entity_horderunners_attack",
            controllerTag: "attackPatrolAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["attackPatrolRally"],
            reinforcementControlGroupTag: "attackPatrol",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        },
        [attackHordeAI.defend]: {
            controllerArchetype: "badger:ai_entity_horderunners_defend",
            controllerTag: "attackDefendAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["attackDefendRally"],
            reinforcementControlGroupTag: "attackDefend",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        },
        [attackHordeAI.siege]: {
            controllerArchetype: "badger:ai_entity_horderunners_siege",
            controllerTag: "attackSiegeAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["attackSiegeRally"],
            reinforcementControlGroupTag: "attackSiege",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        }
    },
    /*
    ---------------------------------
    ----- COMMON BASE RESPONSES -----  
    ---------------------------------
    */
    commonBaseResponses: {
        [attackResponse.tier1StructureDamaged]: {
            waitTimer: 15
        },
        [attackResponse.tier2StructureDamaged]: {
            waitTimer: 16
        },
        [attackResponse.tier3StructureDamaged]: {
            waitTimer: 16
        },
        [attackResponse.tier1StructureDestroyed]: {
            waitTimer: 14
        },
        [attackResponse.tier2StructureDestroyed]: {
            waitTimer: 12
        },
        [attackResponse.tier3StructureDestroyed]: {
            waitTimer: 10
        },
        [attackResponse.playerTier1StructureBuilt]: {
            waitTimer: 20
        },
        [attackResponse.playerTier2StructureBuilt]: {
            waitTimer: 15
        },
        [attackResponse.playerTier3StructureBuilt]: {
            waitTimer: 10
        },
        [attackResponse.throwerRally]: {
            aiDistribution: [[attackHordeAI.defend, 100]]
        }
    },
    /*
    ---------------------
    ----- BASE DATA -----  
    ---------------------
    */
    villageComposition: {
        /*
        ===================
        ===== OUTPOST =====  
        ===================
        */
        frontlineA: {
            //----- VARIATION A (SLOW - COMMON BUILDINGS) -----
            villageVariationA: {
                structures: {
                    buildingGroup1: [
                        [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, DIRECTION_CARD.northWedge, [OUTPOST_LEVEL.LIGHT]],
                        [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, DIRECTION_CARD.westWedge, [OUTPOST_LEVEL.LIGHT]],
                        [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, DIRECTION_CARD.eastWedge, [OUTPOST_LEVEL.LIGHT]],
                        [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, DIRECTION_CARD.southWedge, [OUTPOST_LEVEL.MEDIUM, OUTPOST_LEVEL.HEAVY]],
                        [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1, DIRECTION_CARD.southWedge, [OUTPOST_LEVEL.MEDIUM, OUTPOST_LEVEL.HEAVY]]
                    ],
                    buildingGroup2: [
                        [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, DIRECTION_CARD.northWedge, [OUTPOST_LEVEL.LIGHT]],
                        [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, DIRECTION_CARD.westWedge, [OUTPOST_LEVEL.LIGHT]],
                        [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, DIRECTION_CARD.eastWedge, [OUTPOST_LEVEL.MEDIUM]],
                        [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, DIRECTION_CARD.southWedge, [OUTPOST_LEVEL.MEDIUM]],
                        [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, DIRECTION_CARD.southWedge, [OUTPOST_LEVEL.MEDIUM]],
                        [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, DIRECTION_CARD.westWedge, [OUTPOST_LEVEL.HEAVY]],
                        [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, DIRECTION_CARD.eastWedge, [OUTPOST_LEVEL.HEAVY]],
                        [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, DIRECTION_CARD.northWedge, [OUTPOST_LEVEL.HEAVY]],
                        [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, DIRECTION_CARD.southWedge, [OUTPOST_LEVEL.HEAVY]]
                    ],
                    buildingGroup3: [[BUILDABLE_CARD.GOLDMINE, 1]]
                },
                discreteEncounters: {
                    ["de0"]: {
                        type: attackDiscreteEncounters.ourTower,
                        amount: 1
                    }
                }
            },
            //----- VARIATION B (FAST - COMMON BUILDINGS) -----
            villageVariationB: {
                structures: {
                    buildingGroup1: [
                        [BUILDABLE_CARD.BARRACKS_SIEGER, 1, DIRECTION_CARD.northWedge, [OUTPOST_LEVEL.LIGHT]],
                        [BUILDABLE_CARD.BARRACKS_SIEGER, 1, DIRECTION_CARD.westWedge, [OUTPOST_LEVEL.LIGHT]],
                        [BUILDABLE_CARD.BARRACKS_SIEGER, 1, DIRECTION_CARD.eastWedge, [OUTPOST_LEVEL.LIGHT]],
                        [BUILDABLE_CARD.BARRACKS_SIEGER, 1, DIRECTION_CARD.southWedge, [OUTPOST_LEVEL.MEDIUM, OUTPOST_LEVEL.HEAVY]],
                        [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1, DIRECTION_CARD.southWedge, [OUTPOST_LEVEL.MEDIUM, OUTPOST_LEVEL.HEAVY]]
                    ],
                    buildingGroup2: [
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.northWedge, [OUTPOST_LEVEL.LIGHT]],
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.westWedge, [OUTPOST_LEVEL.MEDIUM]],
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.eastWedge, [OUTPOST_LEVEL.MEDIUM]],
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.southWedge, [OUTPOST_LEVEL.HEAVY]],
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.westWedge, [OUTPOST_LEVEL.HEAVY]],
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.eastWedge, [OUTPOST_LEVEL.HEAVY]]
                    ],
                    buildingGroup3: [[BUILDABLE_CARD.GOLDMINE, 1]]
                },
                discreteEncounters: {
                    ["de0"]: {
                        type: attackDiscreteEncounters.pyroAndShield,
                        amount: 1
                    }
                }
            },
            //----- VARIATION C (BUILDINGS - COMMON BUILDINGS) -----
            villageVariationC: {
                structures: {
                    buildingGroup1: [
                        [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, DIRECTION_CARD.northWedge, [OUTPOST_LEVEL.LIGHT]],
                        [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1, DIRECTION_CARD.southWedge, [OUTPOST_LEVEL.MEDIUM, OUTPOST_LEVEL.HEAVY]]
                    ],
                    buildingGroup2: [
                        [BUILDABLE_CARD.TOWER_PIGLIN_THROWER_RUNT, 1, DIRECTION_CARD.westWedge, [OUTPOST_LEVEL.LIGHT]],
                        [BUILDABLE_CARD.TOWER_PIGLIN_THROWER_WARBOAR, 1, DIRECTION_CARD.eastWedge, [OUTPOST_LEVEL.MEDIUM, OUTPOST_LEVEL.HEAVY]],
                        [BUILDABLE_CARD.TOWER_PIGLIN_THROWER_PIGMADILO, 1, DIRECTION_CARD.northWedge, [OUTPOST_LEVEL.MEDIUM, OUTPOST_LEVEL.HEAVY]]
                    ],
                    buildingGroup3: [
                        [BUILDABLE_CARD.NETHERSPREADER, 3, "placeInsideVillageAlways"],
                        [BUILDABLE_CARD.GOLDMINE, 1]
                    ]
                },
                discreteEncounters: {
                    ["de0"]: {
                        type: attackDiscreteEncounters.aboveAndBelow,
                        amount: 1
                    },
                    ["de1"]: {
                        type: attackDiscreteEncounters.netheredMace,
                        amount: 1
                    }
                }
            }
        },
        /*
        =================
        ===== SMALL =====  
        =================
        */
        small: {
            //----- VARIATION A (RUNTS) -----
            villageVariationA: {
                structures: {
                    buildingGroup0: [],
                    buildingGroup1: [
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.eastWedge, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.westWedge, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_THROWER_RUNT, 1, DIRECTION_CARD.eastWedge, PLACEMENT_CLOSE_TO_VILLAGE_START]
                    ],
                    buildingGroup2: [[BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]],
                    buildingGroup3: [
                        [BUILDABLE_CARD.GOLDMINE, 1],
                        [BUILDABLE_CARD.NETHERSPREADER, 1]
                    ],
                    buildingGroup4: [[BUILDABLE_CARD.ATTACK_HORDE_RALLY_POINT, 1]],
                    buildingGroup5: [[BUILDABLE_CARD.BARRACKS_FIGHTER, 1]],
                    buildingGroup6: [[BUILDABLE_CARD.BARRACKS_FIGHTER, 1]]
                },
                //Responses - will override common responses in case of any conflicting params
                responses: {
                    [attackResponse.escalation1]: {
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.escalation3]: {
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.portalDamaged]: {
                        waitTimer: 12,
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.multipleDestroyedStructures]: {
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    }
                },
                baseGen: {
                    numOfArrowTowers: 2,
                    oneLessBarracks: true
                },
                discreteEncounters: {
                    ["de0"]: {
                        type: attackDiscreteEncounters.ourTower,
                        amount: 1
                    },
                    ["de1"]: {
                        type: attackDiscreteEncounters.netheredMace,
                        amount: 2
                    },
                    ["de2"]: {
                        type: attackDiscreteEncounters.maceAndShield,
                        amount: 1
                    }
                },
                piglinRallyPoints: {
                    ["attackDefend"]: {
                        controlGroupTag: "attackDefend",
                        composition: attackUnitCompositions.runtsOnly,
                        ais: [[attackHordeAI.defend, 100]],
                        positionTags: ["attackDefendRally"],
                        positionTagExcludes: []
                    },
                    ["attackSiege"]: {
                        controlGroupTag: "attackSiege",
                        composition: attackUnitCompositions.smackdown,
                        ais: [[attackHordeAI.siege, 100]],
                        positionTags: ["attackSiegeRally"],
                        positionTagExcludes: []
                    },
                    ["attackPatrol"]: {
                        controlGroupTag: "attackPatrol",
                        composition: attackUnitCompositions.maceMD,
                        ais: [[attackHordeAI.patrol, 100]],
                        positionTags: ["attackPatrolRally"],
                        positionTagExcludes: []
                    }
                },
                repeatedPortalSpawns: {
                    ["medic"]: {
                        unit: PIGLIN_ARCHETYPE.MEDIC,
                        controlGroupTag: "attackDefend",
                        ais: [[attackHordeAI.defend, 100]],
                        positionTags: ["attackDefendRally"],
                        rate: 20,
                        batch: 2,
                        cap: 4
                    },
                    ["seeker"]: {
                        unit: PIGLIN_ARCHETYPE.SEEKER,
                        controlGroupTag: "attackSiege",
                        ais: [[attackHordeAI.siege, 100]],
                        positionTags: ["attackSiegeRally"],
                        rate: 90,
                        batch: 1,
                        cap: 2
                    }
                },
                startBattlePortalSpawns: {}
            },
            //----- VARIATION B (GRUNTERS, WARBOARS) -----
            villageVariationB: {
                structures: {
                    buildingGroup0: [],
                    buildingGroup1: [
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.eastWedge, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.westWedge, PLACEMENT_CLOSE_TO_VILLAGE_START]
                    ],
                    buildingGroup2: [[BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]],
                    buildingGroup3: [
                        [BUILDABLE_CARD.GOLDMINE, 1],
                        [BUILDABLE_CARD.NETHERSPREADER, 1]
                    ],
                    buildingGroup4: [[BUILDABLE_CARD.ATTACK_HORDE_RALLY_POINT, 1]],
                    buildingGroup5: [[BUILDABLE_CARD.BARRACKS_SIEGER, 1]],
                    buildingGroup6: [[BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1]]
                },
                //Responses - will override common responses in case of any conflicting params
                responses: {
                    [attackResponse.escalation1]: {
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.escalation3]: {
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.portalDamaged]: {
                        waitTimer: 12,
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.multipleDestroyedStructures]: {
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    }
                },
                baseGen: {
                    numOfArrowTowers: 2,
                    oneLessBarracks: false
                },
                discreteEncounters: {
                    ["de0"]: {
                        type: attackDiscreteEncounters.blazeThrower,
                        amount: 1
                    },
                    ["de1"]: {
                        type: attackDiscreteEncounters.netheredBlaze,
                        amount: 2
                    },
                    ["de2"]: {
                        type: attackDiscreteEncounters.pyroAndShield,
                        amount: 1
                    }
                },
                piglinRallyPoints: {
                    ["attackDefend"]: {
                        controlGroupTag: "attackDefend",
                        composition: attackUnitCompositions.gruntersOnly,
                        ais: [[attackHordeAI.defend, 100]],
                        positionTags: ["attackDefendRally"],
                        positionTagExcludes: []
                    },
                    ["attackSiege"]: {
                        controlGroupTag: "attackSiege",
                        composition: attackUnitCompositions.hounds,
                        ais: [[attackHordeAI.siege, 100]],
                        positionTags: ["attackSiegeRally"],
                        positionTagExcludes: []
                    },
                    ["attackPatrol"]: {
                        controlGroupTag: "attackPatrol",
                        composition: attackUnitCompositions.pyroMD,
                        ais: [[attackHordeAI.patrol, 100]],
                        positionTags: ["attackPatrolRally"],
                        positionTagExcludes: []
                    }
                },
                repeatedPortalSpawns: {
                    ["medic"]: {
                        unit: PIGLIN_ARCHETYPE.MEDIC,
                        controlGroupTag: "attackPatrol",
                        ais: [[attackHordeAI.patrol, 100]],
                        positionTags: ["attackPatrolRally"],
                        rate: 20,
                        batch: 2,
                        cap: 4
                    }
                },
                startBattlePortalSpawns: {}
            }
        },
        /*
        =====================
        ===== HOMESTEAD =====  
        =====================
        */
        piglin_occupying_skeleton_mob_alliance: {
            //----- VARIATION B (GRUNTERS, WARBOARS) -----
            villageVariationB: {
                structures: {
                    buildingGroup0: [],
                    buildingGroup1: [
                        // [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.northWedge, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.southWedge, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.eastWedge, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.westWedge, PLACEMENT_CLOSE_TO_VILLAGE_START]
                    ],
                    buildingGroup2: [[BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]],
                    buildingGroup3: [[BUILDABLE_CARD.NETHERSPREADER, 1]],
                    buildingGroup4: [[BUILDABLE_CARD.ATTACK_HORDE_RALLY_POINT, 1]],
                    buildingGroup5: [[BUILDABLE_CARD.BARRACKS_FIGHTER, 1]],
                    buildingGroup6: [[BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1]],
                    buildingGroup7: [[BUILDABLE_CARD.BARRACKS_SIEGER, 1]]
                },
                //Responses - will override common responses in case of any conflicting params
                responses: {
                    [attackResponse.escalation1]: {
                        spawnUnits: [[PIGLIN_ARCHETYPE.GRUNTER, 4]]
                    },
                    [attackResponse.escalation3]: {
                        spawnUnits: [
                            [PIGLIN_ARCHETYPE.GRUNTER, 4],
                            [PIGLIN_ARCHETYPE.MEDIC, 1]
                        ]
                    },
                    [attackResponse.portalDamaged]: {
                        spawnUnits: [
                            [PIGLIN_ARCHETYPE.GRUNTER, 4],
                            [PIGLIN_ARCHETYPE.MEDIC, 1]
                        ]
                    }
                },
                baseGen: {
                    walls: true,
                    lava: true,
                    numOfArrowTowers: 4
                },
                discreteEncounters: {
                    ["de0"]: {
                        type: attackDiscreteEncounters.blazeThrower,
                        amount: 4
                    },
                    ["de1"]: {
                        type: attackDiscreteEncounters.netheredBlaze,
                        amount: 4
                    },
                    ["de2"]: {
                        type: attackDiscreteEncounters.pyroSchool,
                        amount: 4
                    },
                    ["de3"]: {
                        type: attackDiscreteEncounters.pyroAndShield,
                        amount: 4
                    },
                    ["de4"]: {
                        type: attackDiscreteEncounters.ramifications,
                        amount: 4
                    }
                },
                piglinRallyPoints: {
                    ["attackDefend"]: {
                        controlGroupTag: "attackDefend",
                        composition: attackUnitCompositions.gruntersOnly,
                        ais: [[attackHordeAI.defend, 100]],
                        positionTags: ["attackDefendRally"],
                        positionTagExcludes: []
                    },
                    ["attackSiege"]: {
                        controlGroupTag: "attackSiege",
                        composition: attackUnitCompositions.hounds,
                        ais: [[attackHordeAI.siege, 100]],
                        positionTags: ["attackSiegeRally"],
                        positionTagExcludes: []
                    },
                    ["attackPatrol"]: {
                        controlGroupTag: "attackPatrol",
                        composition: attackUnitCompositions.pyroMD,
                        ais: [[attackHordeAI.patrol, 100]],
                        positionTags: ["attackPatrolRally"],
                        positionTagExcludes: []
                    }
                },
                startBattlePortalSpawns: {}
            }
        },
        /*
        ==================
        ===== MEDIUM =====  
        ==================
        */
        medium: {
            //----- VARIATION A (Runts/Seekers/Pigmadilos) -----
            villageVariationA: {
                structures: {
                    buildingGroup0: [],
                    buildingGroup1: [
                        [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, DIRECTION_CARD.northWestRect, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.southWestRect, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.northEastRect, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, DIRECTION_CARD.southEastRect, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_THROWER_RUNT, 1, PLACEMENT_CLOSE_TO_VILLAGE_START]
                    ],
                    buildingGroup2: [[BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]],
                    buildingGroup3: [
                        [BUILDABLE_CARD.GOLDMINE, 1],
                        [BUILDABLE_CARD.NETHERSPREADER, 1]
                    ],
                    buildingGroup4: [[BUILDABLE_CARD.ATTACK_HORDE_RALLY_POINT, 1]],
                    buildingGroup5: [[BUILDABLE_CARD.BARRACKS_FIGHTER, 1]],
                    buildingGroup7: [[BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1]],
                    buildingGroup8: [[BUILDABLE_CARD.NETHERSPREADER_SUPER_FEAR, 1]],
                    buildingGroup10: [[BUILDABLE_CARD.TOWER_PIGLIN_THROWER_RUNT, 1]],
                    buildingGroup11: [[BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1]]
                },
                //Responses - will override common responses in case of any conflicting params
                responses: {
                    [attackResponse.escalation1]: {
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.escalation3]: {
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.portalDamaged]: {
                        waitTimer: 12,
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.multipleDestroyedStructures]: {
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.pigmadiloSpawn]: {
                        unitCompositionOverride: attackUnitCompositions.pigmadilosOnly,
                        unitCompositionCount: 1,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    }
                },
                discreteEncounters: {
                    ["de0"]: {
                        type: attackDiscreteEncounters.elitist,
                        amount: 1
                    },
                    ["de1"]: {
                        type: attackDiscreteEncounters.wrongNeighbourhood,
                        amount: 1
                    },
                    ["de2"]: {
                        type: attackDiscreteEncounters.netheredMace,
                        amount: 2
                    },
                    ["de3"]: {
                        type: attackDiscreteEncounters.aboveAndBelow,
                        amount: 1
                    }
                },
                piglinRallyPoints: {
                    ["attackDefend"]: {
                        controlGroupTag: "attackDefend",
                        composition: attackUnitCompositions.spiky,
                        ais: [[attackHordeAI.defend, 100]],
                        positionTags: ["attackDefendRally"],
                        positionTagExcludes: []
                    },
                    ["attackSiege"]: {
                        controlGroupTag: "attackSiege",
                        composition: attackUnitCompositions.boaradilo,
                        ais: [[attackHordeAI.siege, 100]],
                        positionTags: ["attackSiegeRally"],
                        positionTagExcludes: []
                    },
                    ["attackPatrol"]: {
                        controlGroupTag: "attackPatrol",
                        composition: attackUnitCompositions.maceMD,
                        ais: [[attackHordeAI.patrol, 100]],
                        positionTags: ["attackPatrolRally"],
                        positionTagExcludes: []
                    }
                },
                repeatedPortalSpawns: {
                    ["medic"]: {
                        unit: PIGLIN_ARCHETYPE.MEDIC,
                        controlGroupTag: "attackPatrol",
                        ais: [[attackHordeAI.patrol, 100]],
                        positionTags: ["attackPatrolRally"],
                        rate: 20,
                        batch: 2,
                        cap: 4
                    }
                },
                startBattlePortalSpawns: {
                    ["pigmadilo"]: {
                        unit: PIGLIN_ARCHETYPE.PIGMADILO,
                        controlGroupTag: "attackSiege",
                        ais: [[attackHordeAI.siege, 100]],
                        positionTags: ["attackSiegeRally"],
                        batch: 1
                    }
                },
                baseGen: {
                    numOfArrowTowers: 4,
                    numOfNS: 8,
                    pigthrowers: 1
                }
            },
            //----- VARIATION B -----
            villageVariationB: {
                structures: {
                    buildingGroup0: [],
                    buildingGroup1: [
                        [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, DIRECTION_CARD.northWestRect, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.southWestRect, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.northEastRect, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, DIRECTION_CARD.southEastRect, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_THROWER_WARBOAR, 1, PLACEMENT_CLOSE_TO_VILLAGE_START]
                    ],
                    buildingGroup2: [[BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]],
                    buildingGroup3: [
                        [BUILDABLE_CARD.GOLDMINE, 1],
                        [BUILDABLE_CARD.NETHERSPREADER, 1]
                    ],
                    buildingGroup4: [[BUILDABLE_CARD.ATTACK_HORDE_RALLY_POINT, 1]],
                    buildingGroup5: [[BUILDABLE_CARD.BARRACKS_SIEGER, 1]],
                    buildingGroup7: [[BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1]],
                    buildingGroup8: [[BUILDABLE_CARD.RANGE_EXTENDER, 1]],
                    buildingGroup10: [[BUILDABLE_CARD.TOWER_PIGLIN_THROWER_WARBOAR, 1]],
                    buildingGroup11: [[BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1]]
                },
                //Responses - will override common responses in case of any conflicting params
                responses: {
                    [attackResponse.escalation1]: {
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.escalation3]: {
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.portalDamaged]: {
                        waitTimer: 12,
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.multipleDestroyedStructures]: {
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.pigmadiloSpawn]: {
                        unitCompositionOverride: attackUnitCompositions.pigmadilosOnly,
                        unitCompositionCount: 1,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    }
                },
                discreteEncounters: {
                    ["de0"]: {
                        type: attackDiscreteEncounters.cheatCode,
                        amount: 1
                    },
                    ["de1"]: {
                        type: attackDiscreteEncounters.wrongNeighbourhood,
                        amount: 1
                    },
                    ["de2"]: {
                        type: attackDiscreteEncounters.blazeThrower,
                        amount: 1
                    },
                    ["de3"]: {
                        type: attackDiscreteEncounters.peppaPyro,
                        amount: 1
                    },
                    ["de4"]: {
                        type: attackDiscreteEncounters.netheredBlaze,
                        amount: 1
                    }
                },
                piglinRallyPoints: {
                    ["attackDefend"]: {
                        controlGroupTag: "attackDefend",
                        composition: attackUnitCompositions.hounds,
                        ais: [[attackHordeAI.defend, 100]],
                        positionTags: ["attackDefendRally"],
                        positionTagExcludes: []
                    },
                    ["attackSiege"]: {
                        controlGroupTag: "attackSiege",
                        composition: attackUnitCompositions.boaradilo,
                        ais: [[attackHordeAI.siege, 100]],
                        positionTags: ["attackSiegeRally"],
                        positionTagExcludes: []
                    },
                    ["attackPatrol"]: {
                        controlGroupTag: "attackPatrol",
                        composition: attackUnitCompositions.pyroMD,
                        ais: [[attackHordeAI.patrol, 100]],
                        positionTags: ["attackPatrolRally"],
                        positionTagExcludes: []
                    }
                },
                repeatedPortalSpawns: {
                    ["medic"]: {
                        unit: PIGLIN_ARCHETYPE.MEDIC,
                        controlGroupTag: "attackPatrol",
                        ais: [[attackHordeAI.patrol, 100]],
                        positionTags: ["attackPatrolRally"],
                        rate: 20,
                        batch: 2,
                        cap: 4
                    },
                    ["seeker"]: {
                        unit: PIGLIN_ARCHETYPE.SEEKER,
                        controlGroupTag: "",
                        ais: [[attackHordeAI.siege, 100]],
                        positionTags: ["attackSiegeRally"],
                        rate: 90,
                        batch: 1,
                        cap: 2
                    }
                },
                startBattlePortalSpawns: {
                    ["pigmadilo"]: {
                        unit: PIGLIN_ARCHETYPE.PIGMADILO,
                        controlGroupTag: "attackSiege",
                        ais: [[attackHordeAI.siege, 100]],
                        positionTags: ["attackSiegeRally"],
                        batch: 1
                    }
                },
                baseGen: {
                    numOfArrowTowers: 6,
                    numOfNS: 6,
                    pigthrowers: 2
                }
            }
        },
        /*
        =================
        ===== LARGE =====  
        =================
        */
        large: {
            //----- VARIATION A (EVERYTHING) -----
            villageVariationA: {
                structures: {
                    buildingGroup0: [],
                    buildingGroup1: [
                        [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, DIRECTION_CARD.eastWedge, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, DIRECTION_CARD.westWedge, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.northWestRect, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1, DIRECTION_CARD.southEastRect, PLACEMENT_CLOSE_TO_VILLAGE_START],
                        [BUILDABLE_CARD.TOWER_PIGLIN_THROWER_WARBOAR, 1, PLACEMENT_CLOSE_TO_VILLAGE_START]
                    ],
                    buildingGroup2: [[BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]],
                    buildingGroup3: [
                        [BUILDABLE_CARD.GOLDMINE, 1],
                        [BUILDABLE_CARD.NETHERSPREADER, 1]
                    ],
                    buildingGroup4: [[BUILDABLE_CARD.ATTACK_HORDE_RALLY_POINT, 1]],
                    buildingGroup5: [[BUILDABLE_CARD.BARRACKS_FIGHTER, 1]],
                    buildingGroup6: [[BUILDABLE_CARD.BARRACKS_SIEGER, 1]],
                    buildingGroup7: [[BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1]],
                    buildingGroup8: [[BUILDABLE_CARD.NETHERSPREADER_SUPER_FEAR, 1]],
                    buildingGroup9: [[BUILDABLE_CARD.RANGE_EXTENDER, 1]],
                    buildingGroup10: [[BUILDABLE_CARD.TOWER_PIGLIN_THROWER_PIGMADILO, 1]],
                    buildingGroup11: [[BUILDABLE_CARD.TOWER_PIGLIN_SHIELD, 1]],
                    buildingGroup12: [[BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1]],
                    buildingGroup13: [[BUILDABLE_CARD.TOWER_PIGLIN_THROWER_RUNT, 1]]
                },
                //Responses - will override common responses in case of any conflicting params
                responses: {
                    [attackResponse.escalation1]: {
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.escalation3]: {
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.portalDamaged]: {
                        waitTimer: 12,
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.multipleDestroyedStructures]: {
                        unitCompositionCount: 2,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    },
                    [attackResponse.pigmadiloSpawn]: {
                        unitCompositionOverride: attackUnitCompositions.pigmadilosOnly,
                        unitCompositionCount: 1,
                        aiDistribution: [[attackHordeAI.defend, 100]]
                    }
                },
                // 4 Pig Throwers
                // 18 Arrow Towers
                // 18 Netherspreaders
                // 16 Goldmines
                // 1 SNS
                // 1 RNG
                discreteEncounters: {
                    ["de0"]: {
                        type: attackDiscreteEncounters.ramifications,
                        amount: 1
                    },
                    ["de1"]: {
                        type: attackDiscreteEncounters.cheatCode,
                        amount: 1
                    },
                    ["de2"]: {
                        type: attackDiscreteEncounters.elitist,
                        amount: 1
                    },
                    ["de3"]: {
                        type: attackDiscreteEncounters.aboveAndBelow,
                        amount: 1
                    },
                    ["de4"]: {
                        type: attackDiscreteEncounters.peppaPyro,
                        amount: 1
                    },
                    ["de5"]: {
                        type: attackDiscreteEncounters.endeavor,
                        amount: 1
                    }
                },
                piglinRallyPoints: {
                    ["attackDefend"]: {
                        controlGroupTag: "attackDefend",
                        composition: attackUnitCompositions.spiky,
                        ais: [[attackHordeAI.defend, 100]],
                        positionTags: ["attackDefendRally"],
                        positionTagExcludes: []
                    },
                    ["attackSiege"]: {
                        controlGroupTag: "attackSiege",
                        composition: attackUnitCompositions.houndsPlus,
                        ais: [[attackHordeAI.siege, 100]],
                        positionTags: ["attackSiegeRally"],
                        positionTagExcludes: []
                    },
                    ["attackPatrol"]: {
                        controlGroupTag: "attackPatrol",
                        composition: attackUnitCompositions.boarMD,
                        ais: [[attackHordeAI.patrol, 100]],
                        positionTags: ["attackPatrolRally"],
                        positionTagExcludes: []
                    }
                },
                repeatedPortalSpawns: {
                    ["medic"]: {
                        unit: PIGLIN_ARCHETYPE.MEDIC,
                        controlGroupTag: "",
                        ais: [[attackHordeAI.defend, 100]],
                        positionTags: [],
                        rate: 20,
                        batch: 2,
                        cap: 4
                    },
                    ["seeker"]: {
                        unit: PIGLIN_ARCHETYPE.SEEKER,
                        controlGroupTag: "attackSiege",
                        ais: [[attackHordeAI.siege, 100]],
                        positionTags: ["attackSiegeRally"],
                        rate: 90,
                        batch: 1,
                        cap: 2
                    }
                },
                startBattlePortalSpawns: {
                    ["pigmadilo"]: {
                        unit: PIGLIN_ARCHETYPE.PIGMADILO,
                        controlGroupTag: "attackSiege",
                        ais: [[attackHordeAI.siege, 100]],
                        positionTags: ["attackSiegeRally"],
                        batch: 2
                    }
                },
                baseGen: {
                    numOfArrowTowers: 8,
                    numOfNS: 8,
                    pigthrowers: 3
                }
            }
        }
    }
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignBasesEnabled, (rule) => {
    if (rule.value) {
        LISTENFOR_VillageGenerated({
            snippet: "vg_attack_base_generated",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_ATTACK
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_attack_portal_on",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "attack_portal_on"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_attack_portal_off",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "attack_portal_off"
        })
    }
})

SNIPPET_ExternalEvent("ee_attack_portal_on", () => {
    const introVar = attackVal.cinematic.shieldIntro
    const player = RandomEntity(GetPlayers())
    const portal = FILTER_ByDistance(QUERY_GetEntitiesWithTags("portal_piglin"), player, 500)
    const villageId = QUERY_GetVillageIDFromEntity(portal)

    LISTENFOR_CinematicEvent({
        snippet: "ce_attack_portal_shield_on",
        ownerVillageId: villageId,
        eventName: "portal_shield_on"
    })

    OUTPUT_TriggerCinematic(introVar, [player])
})

SNIPPET_ExternalEvent("ee_attack_portal_off", () => {
    const introVar = attackVal.cinematic.shieldDown
    const player = RandomEntity(GetPlayers())
    const portal = FILTER_ByDistance(QUERY_GetEntitiesWithTags("portal_piglin"), player, 500)
    const piglinStructure = RandomEntity(QUERY_GetEntitiesWithTags("piglin"))
    const villageId = QUERY_GetVillageIDFromEntity(portal)

    LISTENFOR_CinematicEvent({
        snippet: "ce_attack_portal_shield_off",
        ownerVillageId: villageId,
        eventName: "portal_shield_off"
    })

    OUTPUT_TriggerCinematic(introVar, [piglinStructure, portal])
})

/*
--------------------------
>>>>> ATTACK HELPERS <<<<<
-------------------------- 
*/
const _GetAttackVariationData = (villageId) => {
    return GetVillageCompositionData(villageId, attackVal.villageComposition)
}

const GetAttackRallyPointConfig = (villageId, controlGroupTag) => {
    const variationData = _GetAttackVariationData(villageId)
    return variationData.piglinRallyPoints[controlGroupTag]
}

const GetAttackAIConfig = () => {
    return attackVal.aiConfig
}

const GetAttackPossibleRallyPointTags = () => {
    return attackAllRallyPointsTags
}

SNIPPET_PlayerConnected("pc_player_loaded_in_attack_base_patch", (playerEntity, _isReconnecting, _payload) => {
    //In case the player loads an old save inside the piglin base
    const piglinBases = GetAliveVillages(FACTION_NAME_ATTACK, BASE_SIZE_ALL_PORTALS)
    const nearbyPiglinBase = FILTER_ByDistance(piglinBases, playerEntity, 225)
    if (HasEntities(nearbyPiglinBase)) {
        const closestPiglinBase = FILTER_ByClosest(nearbyPiglinBase, playerEntity, 1)
        if (HasEntities(closestPiglinBase)) {
            const villageId = QUERY_GetVillageIDFromEntity(closestPiglinBase)
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
        }
    }
    Once()
})

const _GetAttackBuildingGroup = (villageId, groupNum, applyZoneTagFilter = "", additionalFilters = [], secondaryZoneFilter = "") => {
    const variationData = _GetAttackVariationData(villageId)
    const variableKey = GetVillageFlavour(villageId)
    const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const ringKey = "buildingGroup" + groupNum

    if (variationData === undefined) {
        return DECK_Empty()
    }

    if (variationData.structures === undefined) {
        return DECK_Empty()
    }

    if (variationData.structures[ringKey] === undefined) {
        return DECK_Empty()
    }
    const buildingArray = variationData.structures[ringKey]

    const ringBuildings = DECK_Empty()

    buildingArray.forEach((building) => {
        let canPlace = true
        const buildings = BuildableCard(building[0], building[1])
        //Distinguish shield towers near the portal for the sake of discrete encounters
        if (groupNum === 1 && building[0] === BUILDABLE_CARD.TOWER_PIGLIN_SHIELD) {
            DECK_MultiplyByMultipleRules(buildings, [TagCard("wrongNeighbourhood")])
        }
        if (applyZoneTagFilter !== "") {
            if (secondaryZoneFilter !== "") {
                DECK_MultiplyByMultipleRules(buildings, [PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), ZoneFilterCard(applyZoneTagFilter), ZoneFilterCard(secondaryZoneFilter)])
            } else {
                DECK_MultiplyByMultipleRules(buildings, [PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), ZoneFilterCard(applyZoneTagFilter)])
            }
        } else {
            DECK_MultiplyByMultipleRules(buildings, [PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones")])
        }
        for (let i = 2; i < building.length; i++) {
            if (building[i] !== undefined) {
                //Select if we can place building
                if (Array.isArray(building[i])) {
                    canPlace = _CheckAttackBuildingFilter(building[i], additionalFilters)
                } else if (building[i] === "forceBuildingPlacement") {
                    DECK_MultiplyByMultipleRules(buildings, [ForceBuildingPlacementCard(building[i])])
                } else if (building[i] === "placeInsideVillageAlways") {
                    DECK_MultiplyByMultipleRules(buildings, [ZoneFilterCard("placeInsideVillageAlways")])
                } else {
                    DECK_MultiplyByMultipleRules(buildings, [PlacementPreferenceCard(building[i])])
                }
            }
        }
        if (canPlace) {
            DECK_PutOnBottomOf(buildings, ringBuildings)
        }
    })
    return ringBuildings
}

const _CheckAttackBuildingFilter = (filteree = [], filterers = []) => {
    let canPlace = true
    filterers.forEach((filter) => {
        if (!filteree.includes(filter)) {
            canPlace = false
        }
    })
    return canPlace
}
const _BuildPath = (BaseDeck, StartFilters, EndFilters, StartDistrict = null, EndDistrict = null) => {
    let pathStartRules = []
    let pathEndRules = []

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
    CreatePathRequestOnBottomOf("attack_district_path", pathStartRules, pathEndRules, BaseDeck)
}

const _SpawnUnitCompositionAtPortal = (villageId, unitCompositionData) => {
    let piglins = EMPTY_ENTITY_GROUP
    unitCompositionData.units.forEach((ucData) => {
        const spawned = SpawnAtPortalInTheDirectionOfThePlayer(villageId, ucData.unit, ucData.amount)
        piglins = OPER_Append(piglins, spawned)
    })
    return piglins
}

const _AttackSpawnUnitAtPortalForEscalation = (villageId, responseString) => {
    const variationData = _GetAttackVariationData(villageId)
    const spawnResponse = variationData.responses[responseString]
    if (spawnResponse !== undefined) {
        const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
        const portal = GetVillagePortal(villageId)
        const unitCompositionCount = variationData.responses[responseString].unitCompositionCount
        const rallyData = variationData.piglinRallyPoints["attackDefend"]
        const unitCompositionData = variationData.responses[responseString].unitCompositionOverride === undefined ? rallyData.composition : variationData.responses[responseString].unitCompositionOverride
        const rallyPoint = FILTER_ByClosest(FILTER_ByTagFilter(villageEntities, rallyData.positionTags, []), portal, 1)
        for (let i = 0; i < unitCompositionCount; i++) {
            const newPiglins = _SpawnUnitCompositionAtPortal(villageId, unitCompositionData)
            if (HasEntities(newPiglins)) {
                AssignEntitiesToAI(villageId, newPiglins, attackVal.aiConfig[attackHordeAI.defend])
                if (HasEntities(rallyPoint)) {
                    OUTPUT_MoveAttackEntity(newPiglins, rallyPoint, CALLBACK_NONE)
                }
            }
        }
    }
}

const _GetAttackResponseTimer = (villageId, response) => {
    const variationData = _GetAttackVariationData(villageId)
    let responseTimer = 1

    //Check Overrides
    if (variationData !== undefined && variationData.responses !== undefined && variationData.responses[response] !== undefined && variationData.responses[response].waitTimer !== undefined) {
        responseTimer = variationData.responses[response].waitTimer
    } else {
        if (attackVal.commonBaseResponses[response] === undefined || attackVal.commonBaseResponses[response].waitTimer === undefined) {
        } else {
            responseTimer = attackVal.commonBaseResponses[response].waitTimer
        }
    }

    return responseTimer
}

const _AttackInitialEscalation = (triggerEntity) => {
    //Called when the first time the player approaches the base
    if (IsBaseEscalated(triggerEntity, attackVal.escalation.approached)) {
        return
    }

    MarkBaseAsEscalated(triggerEntity, attackVal.escalation.approached)
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, attackVal.barracks, 1)

    const portal = GetVillagePortal(villageId)
    if (QUERY_GetEntitiesCount(portal) < 1) {
        return
    }
    _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.escalation1)

    SetAudioPhaseForBase(villageId, attackVal.audioPerPhaseArray[1])
}

const _AttackSecondEscalation = (destroyedEntity) => {
    if (IsBaseEscalated(destroyedEntity, attackVal.escalation.keyBuildingDestroyed)) {
        return
    }

    const villageId = QUERY_GetVillageIDFromEntity(destroyedEntity)

    const portal = GetVillagePortal(villageId)
    if (QUERY_GetEntitiesCount(portal) < 1) {
        return
    }

    //Escalation
    MarkBaseAsEscalated(destroyedEntity, attackVal.escalation.keyBuildingDestroyed)

    if (!IsBaseEscalated(destroyedEntity, attackVal.escalation.portalApproached)) {
        SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, attackVal.barracks, 2)

        SetAudioPhaseForBase(villageId, attackVal.audioPerPhaseArray[2])

        PlayPresentationActionToAll(ChooseFromArray(attackVal.VO.escalation))
    }
}

const _AttackCreateLavaPoolsDeck = (addZoneString, zoneTag, zoneHeightString, lavaHeightString, directionStrings, extraPrefs = []) => {
    const lavaZoneDeck = DECK_Empty()

    directionStrings.forEach((directionString) => {
        const poolZone = ZonesCard(addZoneString, 1)
        DECK_MultiplyByMultipleRules(poolZone, [ZoneTagCard(zoneTag), ZoneFilterCard("placeInsideVillageAlways"), ZoneHeightChangeCard(zoneHeightString), PlacementPreferenceCard(directionString), ZoneTagCard("lava_option")])
        if (extraPrefs !== []) {
            extraPrefs.forEach((pref) => {
                DECK_MultiplyBySingle(poolZone, PlacementPreferenceCard(pref))
            })
        }
        DECK_PutOnBottomOf(poolZone, lavaZoneDeck)
    })

    const pools = MoatCard("attackLavaPool")

    DECK_PutOnBottomOf(pools, lavaZoneDeck)

    return lavaZoneDeck
}

const _AttackCreateCoilsDeck = (zoneTag) => {
    const coilDeck = DECK_Empty()

    const coils = BuildableCard(BUILDABLE_CARD.PIGLIN_CRYSTAL, 1)
    DECK_MultiplyByMultipleRules(coils, [ZoneFilterCard(zoneTag), PlacementPreferenceCard("placeFarFromPiglinCrystal"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(coils, coilDeck)

    return coilDeck
}

/*
-------------------------
>>>>> BASE BUILDING <<<<<
-------------------------
*/
const _MakeRaisedPlatformsAndSpacers = (villageId, numOfRaisedPlatforms, baseDeck, spacersHeight = "elementHeight0", partialZoneHeights = false, districtBased = false) => {
    if (numOfRaisedPlatforms > attackVal.consts.maxNumOfRaisedPlatforms) {
        return
    }
    let raisedDistricts = undefined
    let extraDistricts = undefined
    let extraZones = 0
    let extraSpacers = 0
    let platformZones = 11
    let numOfSpacers = 0
    const increment = 1
    let appendExtraToRaised = false
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    switch (numOfRaisedPlatforms) {
        case 2:
            if (baseSize === BASE_SIZE_PIGLIN_SKELETON) {
                platformZones = 8
                numOfSpacers = 0
            }
            raisedDistricts = ["southwestDistrict", "southeastDistrict"]
            break
        case 4:
            if (IsSmall(baseSize)) {
                platformZones = 2
                numOfSpacers = 0
                extraDistricts = ["northDistrict", "southDistrict", "eastDistrict", "westDistrict"]
                extraZones = 6
                extraSpacers = 3
            } else if (IsMedium(baseSize)) {
                platformZones = 4
                numOfSpacers = 0
                extraDistricts = ["northDistrict", "southDistrict", "eastDistrict", "westDistrict"]
                extraZones = 7
                extraSpacers = 1
                appendExtraToRaised = true
            } else if (baseSize === BASE_SIZE_PIGLIN_SKELETON) {
                platformZones = 1
                numOfSpacers = 0
                extraDistricts = ["northDistrict", "southDistrict", "eastDistrict", "westDistrict"]
                extraZones = 6
                extraSpacers = 3
            }
            raisedDistricts = ["northeastDistrict", "southwestDistrict", "northwestDistrict", "southeastDistrict"]
            break
        case 8:
            platformZones = 4
            numOfSpacers = 0
            appendExtraToRaised = false
            raisedDistricts = ["northeastDistrict", "southwestDistrict", "southeastDistrict", "northwestDistrict", "northDistrict", "eastDistrict", "southDistrict", "westDistrict"]
            extraDistricts = ["northDistrict", "eastDistrict", "southDistrict", "westDistrict"]
            extraZones = 16
            extraSpacers = 6
            break
    }

    if (raisedDistricts !== undefined) {
        for (let i = 0; i < raisedDistricts.length; i++) {
            DECK_PutOnBottomOf(_MakeRaisedPlatformsWithWallsAndLava(baseSize, raisedDistricts[i], platformZones, numOfSpacers, spacersHeight, partialZoneHeights, increment, districtBased), baseDeck)
        }
        if (extraDistricts !== undefined) {
            for (let i = 0; i < extraDistricts.length; i++) {
                DECK_PutOnBottomOf(_MakeRaisedPlatformsWithWallsAndLava(baseSize, extraDistricts[i], extraZones, extraSpacers, spacersHeight, partialZoneHeights, increment, districtBased), baseDeck)
                if (appendExtraToRaised) {
                    if (!raisedDistricts.includes(extraDistricts[i])) {
                        raisedDistricts.push(extraDistricts[i])
                    }
                }
            }
        }
    } else {
    }

    return raisedDistricts
}

const _MakeRaisedPlatformsWithWallsAndLava = (baseSize, districtIndex, platformZones, numOfSpacers, spacersHeight, partialZoneHeights, increment, districtBased) => {
    const districtData = elementDistricts[districtIndex]
    const districtCard = DistrictCard(districtData.card)
    DECK_MultiplyByMultipleRules(districtCard, [PlacementPreferenceCard(districtData.placement)])

    let element = undefined

    if (IsSmall(baseSize)) {
        element = ChooseFromArray(raisedPlatformElementsSmall)
    } else if (IsMedium(baseSize)) {
        element = ChooseFromArray(raisedPlatformElementsMedium)
    } else if (IsLarge(baseSize)) {
        element = ChooseFromArray(raisedPlatformElementsLarge)
    } else if (baseSize === BASE_SIZE_PIGLIN_SKELETON) {
        element = ChooseFromArray(raisedPlatformElementsMobAlliance)
    }

    const zonesDeck = DECK_Empty()
    if (districtBased) DECK_PutOnBottomOf(districtCard, zonesDeck)

    const arrayOfHeights = partialZoneHeights ? element.partialZoneHeights : element.zoneHeights
    let j = 0
    for (let i = 0; i < platformZones; i++) {
        const zoneHeight = arrayOfHeights[j]
        let actualIncrement = 1
        if (zoneHeight !== "elementHeight0") {
            actualIncrement = increment
        }
        const districtZones = ZonesCard("addZone", actualIncrement)
        //Zones
        if (districtBased) DECK_MultiplyBySingle(districtZones, DistrictCard(districtData.card))
        if (zoneHeight !== "elementHeight0") DECK_MultiplyByMultipleRules(districtZones, [ZoneTagCard(zoneHeight), ZoneTagCard(districtData.zoneTag), PlacementPreferenceCard(districtData.placement), ZoneHeightChangeCard(zoneHeight)])
        if (zoneHeight === "elementHeight0") DECK_MultiplyByMultipleRules(districtZones, [ZoneTagCard(zoneHeight), ZoneTagCard(districtData.zoneTag), ZoneTagCard("attackOutskirtsPathZone"), PlacementPreferenceCard(districtData.placement), ZoneHeightChangeCard(zoneHeight)])
        DECK_PutOnBottomOf(districtZones, zonesDeck)

        j++
        if (j >= arrayOfHeights.length) j = 0
    }
    if (numOfSpacers > 0) {
        const spacers = ZonesCard("addZone", numOfSpacers)
        if (districtBased) DECK_MultiplyBySingle(spacers, DistrictCard(districtData.card))
        DECK_MultiplyByMultipleRules(spacers, [ZoneTagCard(districtData.zoneTag), ZoneTagCard("attackOutskirtsPathZone"), PlacementPreferenceCard(districtData.placement), ZoneHeightChangeCard(spacersHeight)])
        DECK_PutOnBottomOf(spacers, zonesDeck)
    }

    return zonesDeck
}

//SMALL--------------------------------------------------------------
// 1 Portal Defense
// 8 Rally Points
// 4-5 Barracks
// 2 Arrow Towers
// 8 Netherspreaders
// 8 Goldmines
const _AttackFactionMakeSmallBase = (villageId) => {
    switch (IncrementGlobal(attackVal.global.smallBaseLayoutTracker)) {
        case 1:
            return _AttackFactionBaseSmallWithRaisedPlatforms(villageId, 4)
        case 2:
            OUTPUT_SetGlobalVariable(attackVal.global.smallBaseLayoutTracker, 0)
            return _AttackFactionMakeSmallCraterBase(villageId)
    }
}

const _AttackFactionBaseSmallWithRaisedPlatforms = (villageId, numOfRaisedPlatforms) => {
    const variationData = _GetAttackVariationData(villageId)
    const baseDeck = DECK_Empty()
    //INITIAL ZONES------------------------------------------------------------------------
    //const portalLayer = LayerOfZonesCard("addLayerOfZones", 1)
    const centerZone = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(centerZone, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("attackRing0"), ZoneHeightChangeCard("6DownRelativeToCentre")])
    const portalZone = ZonesCard("addZone", 20)
    DECK_MultiplyByMultipleRules(portalZone, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("attackRing0"), ZoneHeightChangeCard("6DownRelativeToCentre")])

    //PORTAL------------------------------------------------------------------------
    const portal = BuildableCard("attackPortalSmall", 1)
    // eslint-disable-next-line prettier/prettier
    DECK_MultiplyByMultipleRules(portal, [PlacementPreferenceCard("connectToPath"), ZoneFilterCard("attackRing0"), PlacementPreferenceCard("facingSouth"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])

    //INSIDE RALLY POINTS---------------------------------------------------------
    const ring1NonObjectiveBuildings = _GetAttackBuildingGroup(villageId, 1, "attackRing0")
    DECK_MultiplyByMultipleRules(ring1NonObjectiveBuildings, [PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones")])

    //Portal
    DECK_PutOnBottomOf(centerZone, baseDeck)
    DECK_PutOnBottomOf(portalZone, baseDeck)
    //DECK_PutOnBottomOf(portalLayer, baseDeck)
    DECK_PutOnBottomOf(portal, baseDeck)
    DECK_PutOnBottomOf(ring1NonObjectiveBuildings, baseDeck)

    const barracks0 = _GetAttackBuildingGroup(villageId, 5, "attackRing0")
    DECK_MultiplyByMultipleRules(barracks0, [TagCard("attackAIDefend"), TagCard("attackDefendGather0"), ForceBuildingPlacementCard("forceBuildingPlacement")])

    const barracks1 = _GetAttackBuildingGroup(villageId, 5, "attackRing0")
    DECK_MultiplyByMultipleRules(barracks1, [TagCard("attackAIPatrol"), ForceBuildingPlacementCard("forceBuildingPlacement")])

    DECK_PutOnBottomOf(barracks0, baseDeck)
    DECK_PutOnBottomOf(barracks1, baseDeck)

    const insideRally0 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(insideRally0, [TagCard("attackDefendRally"), TagCard("attackDefendGather0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    const insideRally1 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(insideRally1, [TagCard("attackDefendRally"), TagCard("attackDefendGather0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southWedge)])

    DECK_PutOnBottomOf(insideRally0, baseDeck)
    DECK_PutOnBottomOf(insideRally1, baseDeck)

    //const ring1Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.eastWedge, DIRECTION_CARD.southWedge, DIRECTION_CARD.westWedge, DIRECTION_CARD.northWedge])
    //DECK_PutOnBottomOf(ring1Lava, baseDeck)
    const raisedPlatforms = _MakeRaisedPlatformsAndSpacers(villageId, numOfRaisedPlatforms, baseDeck, "elementHeightThreeDown")
    const layer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_PutOnBottomOf(layer, baseDeck)
    const ring2Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.eastWedge, DIRECTION_CARD.southWedge, DIRECTION_CARD.westWedge, DIRECTION_CARD.northWedge])
    DECK_MultiplyByMultipleRules(ring2Lava, [ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(ring2Lava, baseDeck)

    const raisedBuildings = DECK_Empty()
    const channelBuildings = DECK_Empty()

    if (IsStructureDestructionBase(villageId)) {
        const rP = ChooseFromArray(raisedPlatforms)
        const districtData = elementDistricts[rP]

        const robjStructures = _AttackCreateCoilsDeck(districtData.zoneTag)
        DECK_MultiplyByMultipleRules(robjStructures, [PlacementPreferenceCard("connectToPath"), ForceBuildingPlacementCard("forceBuildingPlacement")])
        DECK_PutOnBottomOf(robjStructures, baseDeck)
    }

    const districtDataBarracks0 = elementDistricts[raisedPlatforms[0]]
    const rBarracks0 = _GetAttackBuildingGroup(villageId, 5)
    DECK_MultiplyByMultipleRules(rBarracks0, [TagCard("attackAISiege"), PlacementPreferenceCard("connectToPath"), TagCard("attackSiegeGather0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(districtDataBarracks0.placement)])
    DECK_PutOnBottomOf(rBarracks0, channelBuildings)

    const districtDataBarracks1 = elementDistricts[raisedPlatforms[1]]
    const cBarracks1 = _GetAttackBuildingGroup(villageId, 6)
    DECK_MultiplyByMultipleRules(cBarracks1, [TagCard("attackAISiege"), PlacementPreferenceCard("connectToPath"), TagCard("attackSiegeGather3"), PlacementPreferenceCard(districtDataBarracks1.placement)])
    DECK_PutOnBottomOf(cBarracks1, channelBuildings)

    const districtDataBarracks2 = elementDistricts[raisedPlatforms[2]]
    const districtDataBarracks3 = elementDistricts[raisedPlatforms[3]]

    if (!variationData.baseGen.oneLessBarracks) {
        const cBarracks0 = _GetAttackBuildingGroup(villageId, 6)
        DECK_MultiplyByMultipleRules(cBarracks0, [TagCard("attackAISiege"), PlacementPreferenceCard("connectToPath"), TagCard("attackSiegeGather2"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(districtDataBarracks3.placement)])
        DECK_PutOnBottomOf(cBarracks0, channelBuildings)
    }

    const arrow0 = _GetAttackBuildingGroup(villageId, 2)
    DECK_MultiplyByMultipleRules(arrow0, [PlacementPreferenceCard(districtDataBarracks2.placement)])
    DECK_PutOnBottomOf(arrow0, raisedBuildings)

    const arrow1 = _GetAttackBuildingGroup(villageId, 2)
    DECK_MultiplyByMultipleRules(arrow1, [PlacementPreferenceCard(districtDataBarracks3.placement)])
    DECK_PutOnBottomOf(arrow1, raisedBuildings)

    if (raisedPlatforms !== undefined) {
        for (const key in raisedPlatforms) {
            const districtData = elementDistricts[raisedPlatforms[key]]
            const rBuildings2 = _GetAttackBuildingGroup(villageId, 3)
            DECK_MultiplyByMultipleRules(rBuildings2, [PlacementPreferenceCard(districtData.placement)])
            DECK_PutOnBottomOf(rBuildings2, raisedBuildings)
        }
    }

    const ns0 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ns0, [PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    DECK_PutOnBottomOf(ns0, raisedBuildings)

    const ns1 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ns1, [PlacementPreferenceCard(DIRECTION_CARD.southWedge)])
    DECK_PutOnBottomOf(ns1, raisedBuildings)

    const ns2 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ns2, [PlacementPreferenceCard(DIRECTION_CARD.westWedge)])
    DECK_PutOnBottomOf(ns2, raisedBuildings)

    const ns3 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ns3, [PlacementPreferenceCard(DIRECTION_CARD.eastWedge)])
    DECK_PutOnBottomOf(ns3, raisedBuildings)

    const rallyPointsDeck = DECK_Empty()

    const rallyPoints0 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints0, [TagCard("attackSiegeRally"), TagCard("attackSiegeGather0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northEastWedge)])
    DECK_PutOnBottomOf(rallyPoints0, rallyPointsDeck)

    const rallyPoints2 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints2, [TagCard("attackSiegeRally"), TagCard("attackSiegeGather2"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southWestWedge)])
    DECK_PutOnBottomOf(rallyPoints2, rallyPointsDeck)

    const rallyPoints4 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints4, [TagCard("attackPatrolRally"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(rallyPoints4, rallyPointsDeck)

    const rallyPoints5 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints5, [TagCard("attackPatrolRally"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(rallyPoints5, rallyPointsDeck)

    //Hazards
    const attackWalls1 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls1, [ZoneFilterCard("attackOutskirtsPathZone"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("withScoreThresholdPoint13")])

    const lavaPool = MoatCard("attackLavaPool")
    DECK_MultiplyByMultipleRules(lavaPool, [ZoneFilterCard("placeInsideVillageAlways")])

    //Play the cards

    //Weathering
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    //Paths
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.westWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.westWedge), ZoneFilterCard("attackOutskirtsPathZone")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.eastWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.eastWedge), ZoneFilterCard("attackOutskirtsPathZone")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("attackOutskirtsPathZone")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("attackOutskirtsPathZone")])

    //Buildings
    DECK_PutOnBottomOf(rallyPointsDeck, baseDeck)
    DECK_PutOnBottomOf(raisedBuildings, baseDeck)
    DECK_PutOnBottomOf(channelBuildings, baseDeck)

    DECK_PutOnBottomOf(attackWalls1, baseDeck)

    DECK_PutOnBottomOf(lavaPool, baseDeck)

    return baseDeck
}

const _AttackFactionMakeSmallCraterBase = (villageId) => {
    const baseDeck = DECK_Empty()
    const variationData = _GetAttackVariationData(villageId)

    //INITIAL ZONES------------------------------------------------------------------------
    const centerZone = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(centerZone, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("attackRing0"), ZoneHeightChangeCard("6DownRelativeToCentre")])
    const portalZone = ZonesCard("addZone", 15)
    DECK_MultiplyByMultipleRules(portalZone, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("attackRing0"), ZoneHeightChangeCard("6DownRelativeToCentre")])

    //PORTAL------------------------------------------------------------------------
    const portal = BuildableCard("attackPortalSmall", 1)
    DECK_MultiplyByMultipleRules(portal, [PlacementPreferenceCard("connectToPath"), ZoneFilterCard("attackRing0"), PlacementPreferenceCard("facingSouth"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneHeightChangeCard("4DownRelativeToCentre")])

    //RING ONE------------------------------------------------------------------------
    const ring1Zones = ZonesCard("addZone", 14)
    DECK_MultiplyByMultipleRules(ring1Zones, [ZoneTagCard("attackRing1"), ZoneHeightChangeCard("4DownRelativeToCentre")])

    const ring1Buildings = DECK_Empty()

    const ring1NonObjectiveBuildings = _GetAttackBuildingGroup(villageId, 1, "attackRing1")
    DECK_PutOnBottomOf(ring1NonObjectiveBuildings, ring1Buildings)
    const barracks0 = _GetAttackBuildingGroup(villageId, 5, "attackRing0")
    DECK_MultiplyByMultipleRules(barracks0, [TagCard("attackAIDefend"), TagCard("attackDefendGather0")])
    const barracks01 = _GetAttackBuildingGroup(villageId, 5, "attackRing0")
    DECK_MultiplyByMultipleRules(barracks01, [TagCard("attackAIPatrol")])

    const insideRally = DECK_Empty()
    const insideRally0 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(insideRally0, [TagCard("attackDefendRally"), TagCard("attackDefendGather0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    const insideRally1 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(insideRally1, [TagCard("attackDefendRally"), TagCard("attackDefendGather0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southWedge)])

    const attackWalls1 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls1, [ZoneFilterCard("attackRing1"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint13")])

    //const ring1Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.eastWedge, DIRECTION_CARD.westWedge, DIRECTION_CARD.southWedge, DIRECTION_CARD.northWedge])
    DECK_PutOnBottomOf(insideRally0, insideRally)
    DECK_PutOnBottomOf(insideRally1, insideRally)

    DECK_PutOnBottomOf(barracks0, ring1Buildings)
    DECK_PutOnBottomOf(barracks01, ring1Buildings)
    DECK_PutOnBottomOf(insideRally, ring1Buildings)

    //RING TWO------------------------------------------------------------------------

    const ring2Zones = ZonesCard("addZone", 24)
    DECK_MultiplyByMultipleRules(ring2Zones, [ZoneTagCard("attackRing2"), ZoneHeightChangeCard("2DownRelativeToCentre")])
    const ring2Buildings = DECK_Empty()

    if (IsStructureDestructionBase(villageId)) {
        const objStructures2 = _AttackCreateCoilsDeck("attackRing2")
        DECK_MultiplyByMultipleRules(objStructures2, [PlacementPreferenceCard("connectToPath"), ForceBuildingPlacementCard("forceBuildingPlacement")])
        DECK_PutOnBottomOf(objStructures2, ring2Buildings)
    }
    const ring2Barracks0 = _GetAttackBuildingGroup(villageId, 6, "attackRing2")
    DECK_MultiplyByMultipleRules(ring2Barracks0, [PlacementPreferenceCard("connectToPath"), TagCard("attackAISiege"), TagCard("attackSiegeGather0"), PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    DECK_PutOnBottomOf(ring2Barracks0, ring2Buildings)

    if (!variationData.baseGen.oneLessBarracks) {
        const ring2Barracks2 = _GetAttackBuildingGroup(villageId, 5, "attackRing2")
        DECK_MultiplyByMultipleRules(ring2Barracks2, [PlacementPreferenceCard("connectToPath"), TagCard("attackAISiege"), TagCard("attackSiegeGather2"), PlacementPreferenceCard(DIRECTION_CARD.westWedge)])
        DECK_PutOnBottomOf(ring2Barracks2, ring2Buildings)
    }
    const ring2Barracks3 = _GetAttackBuildingGroup(villageId, 5, "attackRing2")
    DECK_MultiplyByMultipleRules(ring2Barracks3, [PlacementPreferenceCard("connectToPath"), TagCard("attackAISiege"), TagCard("attackSiegeGather3"), PlacementPreferenceCard(DIRECTION_CARD.eastWedge)])
    DECK_PutOnBottomOf(ring2Barracks3, ring2Buildings)

    const ring2Buildings4 = _GetAttackBuildingGroup(villageId, 3, "attackRing2")
    DECK_MultiplyByMultipleRules(ring2Buildings4, [PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    const ring2Buildings5 = _GetAttackBuildingGroup(villageId, 3, "attackRing2")
    DECK_MultiplyByMultipleRules(ring2Buildings5, [PlacementPreferenceCard(DIRECTION_CARD.southWedge)])
    const ring2Buildings6 = _GetAttackBuildingGroup(villageId, 3, "attackRing2")
    DECK_MultiplyByMultipleRules(ring2Buildings6, [PlacementPreferenceCard(DIRECTION_CARD.westWedge)])
    const ring2Buildings7 = _GetAttackBuildingGroup(villageId, 3, "attackRing2")
    DECK_MultiplyByMultipleRules(ring2Buildings7, [PlacementPreferenceCard(DIRECTION_CARD.eastWedge)])

    const ring2Buildings41 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ring2Buildings41, [PlacementPreferenceCard(DIRECTION_CARD.northWestWedge)])
    const ring2Buildings51 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ring2Buildings51, [PlacementPreferenceCard(DIRECTION_CARD.southEastWedge)])
    const ring2Buildings61 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ring2Buildings61, [PlacementPreferenceCard(DIRECTION_CARD.southWestWedge)])
    const ring2Buildings71 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ring2Buildings71, [PlacementPreferenceCard(DIRECTION_CARD.northEastWedge)])

    const attackWalls2 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls2, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint13")])

    const ring2Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.northWestWedge, DIRECTION_CARD.southEastWedge, DIRECTION_CARD.northEastWedge, DIRECTION_CARD.southWestWedge])

    DECK_PutOnBottomOf(ring2Buildings4, ring2Buildings)
    DECK_PutOnBottomOf(ring2Buildings5, ring2Buildings)
    DECK_PutOnBottomOf(ring2Buildings6, ring2Buildings)
    DECK_PutOnBottomOf(ring2Buildings7, ring2Buildings)
    DECK_PutOnBottomOf(ring2Buildings41, ring2Buildings)
    DECK_PutOnBottomOf(ring2Buildings51, ring2Buildings)
    DECK_PutOnBottomOf(ring2Buildings61, ring2Buildings)
    DECK_PutOnBottomOf(ring2Buildings71, ring2Buildings)

    //RING OUTSIDE------------------------------------------------------------------------
    const outsideZones = ZonesCard("addZone", 24)
    DECK_MultiplyByMultipleRules(outsideZones, [ZoneTagCard("outsideRing"), ZoneHeightChangeCard("1DownRelativeToCentre")])

    const outsideBuildings = DECK_Empty()
    const rallyPointsDeck = DECK_Empty()

    const rallyPoints0 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints0, [TagCard("attackSiegeRally"), TagCard("attackSiegeGather0"), PlacementPreferenceCard(DIRECTION_CARD.northEastWedge)])
    DECK_PutOnBottomOf(rallyPoints0, rallyPointsDeck)

    const rallyPoints2 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints2, [TagCard("attackSiegeRally"), TagCard("attackSiegeGather2"), PlacementPreferenceCard(DIRECTION_CARD.southWestWedge)])
    DECK_PutOnBottomOf(rallyPoints2, rallyPointsDeck)

    const rallyPoints4 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints4, [TagCard("attackPatrolRally"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(rallyPoints4, rallyPointsDeck)

    const rallyPoints5 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints5, [TagCard("attackPatrolRally"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(rallyPoints5, rallyPointsDeck)

    const outsideBuildings4 = _GetAttackBuildingGroup(villageId, 2, "outsideRing")
    DECK_MultiplyByMultipleRules(outsideBuildings4, [PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(DIRECTION_CARD.northWestWedge)])
    const outsideBuildings5 = _GetAttackBuildingGroup(villageId, 2, "outsideRing")
    DECK_MultiplyByMultipleRules(outsideBuildings5, [PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(DIRECTION_CARD.southEastWedge)])

    const attackWalls3 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls3, [ZoneFilterCard("outsideRing"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint13")])

    const ring3Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.eastWedge, DIRECTION_CARD.westWedge, DIRECTION_CARD.southWedge, DIRECTION_CARD.northWedge])

    DECK_PutOnBottomOf(outsideBuildings4, outsideBuildings)
    DECK_PutOnBottomOf(outsideBuildings5, outsideBuildings)

    //zones first
    DECK_PutOnBottomOf(centerZone, baseDeck)
    DECK_PutOnBottomOf(portalZone, baseDeck)
    DECK_PutOnBottomOf(ring1Zones, baseDeck)
    //DECK_PutOnBottomOf(ring1Lava, baseDeck)
    DECK_PutOnBottomOf(ring2Zones, baseDeck)
    DECK_PutOnBottomOf(ring2Lava, baseDeck)
    DECK_PutOnBottomOf(outsideZones, baseDeck)
    DECK_PutOnBottomOf(ring3Lava, baseDeck)

    //paths//walls//weathering
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    //structures
    DECK_PutOnBottomOf(portal, baseDeck)
    DECK_PutOnBottomOf(ring1Buildings, baseDeck)

    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.westWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.westWedge), ZoneFilterCard("attackRing2")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.eastWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.eastWedge), ZoneFilterCard("attackRing2")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("attackRing2")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("attackRing2")])

    DECK_PutOnBottomOf(rallyPointsDeck, baseDeck)
    DECK_PutOnBottomOf(ring2Buildings, baseDeck)
    DECK_PutOnBottomOf(outsideBuildings, baseDeck)

    DECK_PutOnBottomOf(attackWalls1, baseDeck)
    DECK_PutOnBottomOf(attackWalls2, baseDeck)
    DECK_PutOnBottomOf(attackWalls3, baseDeck)

    return baseDeck
}

//MEDIUM--------------------------------------------------------------

// 1 Portal Defense
// 8 Rally Points
// 6 Barracks
// 2 Pig Throwers
// 4-6 Arrow Towers
// 10-12 Netherspreaders
// 10-12 Goldmines
// 1 SNS
// 1 RNG

const _AttackFactionMakeMediumBase = (villageId) => {
    switch (IncrementGlobal(attackVal.global.mediumBaseLayoutTracker)) {
        case 1:
            return _AttackFactionBaseMediumWithRaisedPlatforms(villageId, 4)
        case 2:
            OUTPUT_SetGlobalVariable(attackVal.global.mediumBaseLayoutTracker, 0)
            return _AttackFactionMakeMediumCraterBase(villageId)
    }
}
const _AttackFactionBaseMediumWithRaisedPlatforms = (villageId, numOfRaisedPlatforms) => {
    let numOfArrowTowersSoFar = 2
    let numOfNetherSpreadersSoFar = 0
    const variationData = _GetAttackVariationData(villageId)
    const baseDeck = DECK_Empty()
    //INITIAL ZONES------------------------------------------------------------------------
    const centerZone = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(centerZone, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("attackRing0"), ZoneHeightChangeCard("6DownRelativeToCentre")])
    const portalZone = ZonesCard("addZone", 18)
    DECK_MultiplyByMultipleRules(portalZone, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("attackRing0"), ZoneHeightChangeCard("6DownRelativeToCentre")])

    //PORTAL------------------------------------------------------------------------
    const portal = BuildableCard("attackPortalMedium")
    DECK_MultiplyByMultipleRules(portal, [PlacementPreferenceCard("connectToPath"), ZoneFilterCard("attackRing0"), PlacementPreferenceCard("facingSouth"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])
    //INSIDE RALLY POINTS---------------------------------------------------------
    const insideRally = DECK_Empty()
    const insideRally0 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(insideRally0, [TagCard("attackDefendRally"), TagCard("attackDefendGather0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    const insideRally1 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(insideRally1, [TagCard("attackDefendRally"), TagCard("attackDefendGather1"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southWedge)])

    DECK_PutOnBottomOf(insideRally0, insideRally)
    DECK_PutOnBottomOf(insideRally1, insideRally)

    const ring1NonObjectiveBuildings = _GetAttackBuildingGroup(villageId, 1, "attackRing0")
    DECK_MultiplyByMultipleRules(ring1NonObjectiveBuildings, [PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones")])

    //Portal
    DECK_PutOnBottomOf(centerZone, baseDeck)
    DECK_PutOnBottomOf(portalZone, baseDeck)
    //DECK_PutOnBottomOf(portalLayer, baseDeck)
    DECK_PutOnBottomOf(portal, baseDeck)
    DECK_PutOnBottomOf(insideRally, baseDeck)

    if (IsStructureDestructionBase(villageId)) {
        const pobjStructures = _AttackCreateCoilsDeck("attackRing0")
        DECK_MultiplyByMultipleRules(pobjStructures, [PlacementPreferenceCard("connectToPath"), ForceBuildingPlacementCard("forceBuildingPlacement")])
        DECK_PutOnBottomOf(pobjStructures, baseDeck)
    }
    DECK_PutOnBottomOf(ring1NonObjectiveBuildings, baseDeck)
    const buildingGroupNumber = variationData.baseGen.numOfArrowTowers > 4 ? 5 : 7
    const barracks0 = _GetAttackBuildingGroup(villageId, buildingGroupNumber, "attackRing0")
    DECK_MultiplyByMultipleRules(barracks0, [TagCard("attackAIDefend"), TagCard("attackDefendGather0")])
    const barracks1 = _GetAttackBuildingGroup(villageId, 5, "attackRing0")
    DECK_MultiplyByMultipleRules(barracks1, [TagCard("attackAIPatrol"), TagCard("attackDefendGather1")])

    DECK_PutOnBottomOf(barracks0, baseDeck)
    DECK_PutOnBottomOf(barracks1, baseDeck)

    const attackWalls0 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls0, [ZoneFilterCard("attackRing0"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint13")])

    DECK_PutOnBottomOf(attackWalls0, baseDeck)

    //const ring1Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.eastWedge, DIRECTION_CARD.southWedge, DIRECTION_CARD.westWedge, DIRECTION_CARD.northWedge, DIRECTION_CARD.northWestWedge, DIRECTION_CARD.northEastWedge, DIRECTION_CARD.southWestWedge, DIRECTION_CARD.southEastWedge])
    //DECK_MultiplyByMultipleRules(ring1Lava, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    //DECK_PutOnBottomOf(ring1Lava, baseDeck)

    //Raised Platforms
    const raisedPlatforms = _MakeRaisedPlatformsAndSpacers(villageId, numOfRaisedPlatforms, baseDeck, "elementHeightThreeDown")
    const layer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_PutOnBottomOf(layer, baseDeck)
    //SNS & Range--------------------------------
    const districtDataObjective = elementDistricts[raisedPlatforms[4]]
    const rObjective = _GetAttackBuildingGroup(villageId, 8, "attackRing0")
    DECK_MultiplyByMultipleRules(rObjective, [PlacementPreferenceCard(districtDataObjective.placement), PlacementPreferenceCard("connectToPath")])
    DECK_PutOnBottomOf(rObjective, baseDeck)

    const rObjectiveDefense0 = _GetAttackBuildingGroup(villageId, 11)
    DECK_MultiplyByMultipleRules(rObjectiveDefense0, [PlacementPreferenceCard(districtDataObjective.placement)])

    const ring2Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.eastWedge, DIRECTION_CARD.southWedge, DIRECTION_CARD.westWedge, DIRECTION_CARD.northWedge])
    DECK_MultiplyByMultipleRules(ring2Lava, [ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(ring2Lava, baseDeck)

    const raisedBuildings = DECK_Empty()
    const channelBuildings = DECK_Empty()

    if (IsStructureDestructionBase(villageId)) {
        const rP = ChooseFromArray(raisedPlatforms)
        const districtData = elementDistricts[rP]

        const robjStructures = _AttackCreateCoilsDeck(districtData.zoneTag)
        DECK_MultiplyByMultipleRules(robjStructures, [PlacementPreferenceCard("connectToPath"), ForceBuildingPlacementCard("forceBuildingPlacement")])
        DECK_PutOnBottomOf(robjStructures, baseDeck)
    }

    //PigThrower--------------------------------
    const rPigThrower0 = _GetAttackBuildingGroup(villageId, 10)
    DECK_MultiplyByMultipleRules(rPigThrower0, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("connectToPath")])
    DECK_PutOnBottomOf(rPigThrower0, raisedBuildings)

    //Disruptors
    const districtDataBarracks4 = elementDistricts[raisedPlatforms[0]]
    const rBarracks4 = _GetAttackBuildingGroup(villageId, 7)
    DECK_MultiplyByMultipleRules(rBarracks4, [TagCard("attackAISiege"), TagCard("attackSiegeGather0"), PlacementPreferenceCard(districtDataBarracks4.placement)])
    DECK_PutOnBottomOf(rBarracks4, raisedBuildings)

    const districtDataBarracks5 = elementDistricts[raisedPlatforms[5]]

    const rBarracks8 = _GetAttackBuildingGroup(villageId, 7)
    DECK_MultiplyByMultipleRules(rBarracks8, [TagCard("attackAISiege"), TagCard("attackSiegeGather1"), PlacementPreferenceCard(districtDataBarracks5.placement)])
    DECK_PutOnBottomOf(rBarracks8, raisedBuildings)

    //Other Unit
    const districtDataBarracks1 = elementDistricts[raisedPlatforms[1]]
    if (variationData.baseGen.numOfArrowTowers <= 4) {
        const rBarracks1 = _GetAttackBuildingGroup(villageId, 7)
        DECK_MultiplyByMultipleRules(rBarracks1, [TagCard("attackAISiege"), TagCard("attackSiegeGather2"), PlacementPreferenceCard(districtDataBarracks1.placement)])
        DECK_PutOnBottomOf(rBarracks1, raisedBuildings)
    }

    const districtDataBarracks6 = elementDistricts[raisedPlatforms[6]]
    const rBarracks6 = _GetAttackBuildingGroup(villageId, 5)
    DECK_MultiplyByMultipleRules(rBarracks6, [TagCard("attackAIDefend"), PlacementPreferenceCard(districtDataBarracks6.placement)])
    DECK_PutOnBottomOf(rBarracks6, raisedBuildings)

    //Arrow/NS/Goldmines
    for (const key in raisedPlatforms) {
        const districtData = elementDistricts[raisedPlatforms[key]]

        if (numOfArrowTowersSoFar < variationData.baseGen.numOfArrowTowers) {
            const rArrow = _GetAttackBuildingGroup(villageId, 2)
            DECK_MultiplyByMultipleRules(rArrow, [PlacementPreferenceCard(districtData.placement)])
            DECK_PutOnBottomOf(rArrow, raisedBuildings)
            numOfArrowTowersSoFar++
        }

        if (numOfNetherSpreadersSoFar < variationData.baseGen.numOfNS) {
            const rBuildings2 = _GetAttackBuildingGroup(villageId, 3)
            DECK_MultiplyByMultipleRules(rBuildings2, [PlacementPreferenceCard(districtData.placement)])
            DECK_PutOnBottomOf(rBuildings2, raisedBuildings)
            numOfNetherSpreadersSoFar++
        }
    }

    const rallyPointsDeck = DECK_Empty()

    const rallyPoints0 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints0, [TagCard("attackSiegeRally"), TagCard("attackSiegeGather0"), PlacementPreferenceCard(DIRECTION_CARD.northEastWedge)])
    DECK_PutOnBottomOf(rallyPoints0, rallyPointsDeck)

    const rallyPoints2 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints2, [TagCard("attackSiegeRally"), TagCard("attackSiegeGather2"), PlacementPreferenceCard(DIRECTION_CARD.southWestWedge)])
    DECK_PutOnBottomOf(rallyPoints2, rallyPointsDeck)

    const rallyPoints4 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints4, [TagCard("attackPatrolRally"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(rallyPoints4, rallyPointsDeck)

    const rallyPoints5 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints5, [TagCard("attackPatrolRally"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(rallyPoints5, rallyPointsDeck)

    const attackWalls1 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls1, [ZoneFilterCard("attackOutskirtsPathZone"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("withScoreThresholdPoint13")])

    const lavaPool = MoatCard("attackLavaPool")
    DECK_MultiplyByMultipleRules(lavaPool, [ZoneFilterCard("placeInsideVillageAlways")])

    DECK_PutOnBottomOf(rallyPointsDeck, baseDeck)

    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard(districtDataBarracks4.zoneTag), ZoneFilterCard("attackOutskirtsPathZone")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard(districtDataBarracks6.zoneTag), ZoneFilterCard("attackOutskirtsPathZone")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.westWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.westWedge), ZoneFilterCard(districtDataBarracks1.zoneTag), ZoneFilterCard("attackOutskirtsPathZone")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.eastWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.eastWedge), ZoneFilterCard(districtDataBarracks5.zoneTag), ZoneFilterCard("attackOutskirtsPathZone")])

    DECK_PutOnBottomOf(raisedBuildings, baseDeck)
    DECK_PutOnBottomOf(channelBuildings, baseDeck)

    DECK_PutOnBottomOf(rObjectiveDefense0, baseDeck)

    DECK_PutOnBottomOf(attackWalls1, baseDeck)
    DECK_PutOnBottomOf(lavaPool, baseDeck)

    return baseDeck
}

//"attackPortalMedium"
const _AttackFactionMakeMediumCraterBase = (villageId) => {
    const variationData = _GetAttackVariationData(villageId)
    const baseDeck = DECK_Empty()

    //INITIAL ZONES------------------------------------------------------------------------
    const centerZone = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(centerZone, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("attackRing0"), ZoneHeightChangeCard("6DownRelativeToCentre")])
    const portalZone = ZonesCard("addZone", 10)
    DECK_MultiplyByMultipleRules(portalZone, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("attackRing0"), ZoneHeightChangeCard("6DownRelativeToCentre")])

    DECK_PutOnBottomOf(centerZone, baseDeck)
    DECK_PutOnBottomOf(portalZone, baseDeck)

    //PORTAL------------------------------------------------------------------------
    const portal = BuildableCard("attackPortalMedium")
    DECK_MultiplyByMultipleRules(portal, [PlacementPreferenceCard("connectToPath"), ZoneFilterCard("attackRing0"), PlacementPreferenceCard("facingSouth"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])

    DECK_PutOnBottomOf(portal, baseDeck)
    //RING ONE------------------------------------------------------------------------
    const ring1Zones = ZonesCard("addZone", 14)
    DECK_MultiplyByMultipleRules(ring1Zones, [ZoneTagCard("attackRing1"), ZoneHeightChangeCard("5DownRelativeToCentre")])
    const ring1Layer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(ring1Layer, [ZoneHeightChangeCard("5DownRelativeToCentre")])

    const insideRally = DECK_Empty()
    const insideRally0 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(insideRally0, [TagCard("attackDefendRally"), TagCard("attackDefendGather0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    const insideRally1 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(insideRally1, [TagCard("attackDefendRally"), TagCard("attackDefendGather1"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southWedge)])

    DECK_PutOnBottomOf(insideRally0, insideRally)
    DECK_PutOnBottomOf(insideRally1, insideRally)

    const ring1Buildings = DECK_Empty()
    const ring1NonObjectiveBuildings = _GetAttackBuildingGroup(villageId, 1, "attackRing1")
    DECK_MultiplyByMultipleRules(ring1Buildings, [ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(insideRally, ring1Buildings)
    DECK_PutOnBottomOf(ring1NonObjectiveBuildings, ring1Buildings)

    const buildingGroupNumber = variationData.baseGen.numOfArrowTowers > 4 ? 5 : 7
    const barracks0 = _GetAttackBuildingGroup(villageId, buildingGroupNumber)
    DECK_MultiplyByMultipleRules(barracks0, [TagCard("attackAIDefend"), TagCard("attackDefendGather0"), PlacementPreferenceCard(DIRECTION_CARD.northWedge), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    const barracks1 = _GetAttackBuildingGroup(villageId, 5)
    DECK_MultiplyByMultipleRules(barracks1, [TagCard("attackAIDefend"), TagCard("attackDefendGather1"), PlacementPreferenceCard(DIRECTION_CARD.southWedge), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    DECK_PutOnBottomOf(barracks0, ring1Buildings)
    DECK_PutOnBottomOf(barracks1, ring1Buildings)

    //const ring1Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.eastWedge, DIRECTION_CARD.westWedge, DIRECTION_CARD.southWedge, DIRECTION_CARD.northWedge, DIRECTION_CARD.northWestWedge, DIRECTION_CARD.northEastWedge, DIRECTION_CARD.southWestWedge, DIRECTION_CARD.southEastWedge])
    const attackWalls1 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls1, [ZoneFilterCard("attackRing1"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint13")])

    //RING TWO------------------------------------------------------------------------
    const ring2Zones = ZonesCard("addZone", 20)
    DECK_MultiplyByMultipleRules(ring2Zones, [ZoneTagCard("attackRing2"), ZoneHeightChangeCard("4DownRelativeToCentre")])
    const ring2Layer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(ring2Layer, [ZoneHeightChangeCard("4DownRelativeToCentre")])

    const ring2Buildings = DECK_Empty()
    if (IsStructureDestructionBase(villageId)) {
        const objStructures2 = _AttackCreateCoilsDeck("attackRing2")
        DECK_MultiplyByMultipleRules(objStructures2, [PlacementPreferenceCard("connectToPath"), ForceBuildingPlacementCard("forceBuildingPlacement")])
        DECK_PutOnBottomOf(objStructures2, ring2Buildings)
    }
    //SNS & Range--------------------------------
    const rObjective = _GetAttackBuildingGroup(villageId, 8, "attackRing2")
    DECK_MultiplyByMultipleRules(rObjective, [PlacementPreferenceCard(DIRECTION_CARD.northWedge), PlacementPreferenceCard("connectToPath")])

    const rObjectiveDefense0 = _GetAttackBuildingGroup(villageId, 11, "attackRing2")
    DECK_MultiplyByMultipleRules(rObjectiveDefense0, [PlacementPreferenceCard(DIRECTION_CARD.northWedge)])

    const barracks4 = _GetAttackBuildingGroup(villageId, 7)
    DECK_MultiplyByMultipleRules(barracks4, [TagCard("attackAISiege"), TagCard("attackSiegeGather0"), PlacementPreferenceCard(DIRECTION_CARD.northWedge)])

    const barracks6 = _GetAttackBuildingGroup(villageId, 7)
    DECK_MultiplyByMultipleRules(barracks6, [TagCard("attackAISiege"), TagCard("attackSiegeGather1"), PlacementPreferenceCard(DIRECTION_CARD.westWedge)])

    const barracks7 = _GetAttackBuildingGroup(villageId, 5)
    DECK_MultiplyByMultipleRules(barracks7, [TagCard("attackAIPatrol"), PlacementPreferenceCard(DIRECTION_CARD.eastWedge)])

    DECK_PutOnBottomOf(barracks4, ring2Buildings)
    DECK_PutOnBottomOf(barracks6, ring2Buildings)
    DECK_PutOnBottomOf(barracks7, ring2Buildings)

    //Varaition B only
    if (variationData.baseGen.numOfArrowTowers > 4) {
        const arrow0 = _GetAttackBuildingGroup(villageId, 2, "attackRing2")
        DECK_MultiplyByMultipleRules(arrow0, [PlacementPreferenceCard(DIRECTION_CARD.northWestWedge), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
        const arrow1 = _GetAttackBuildingGroup(villageId, 2, "attackRing2")
        DECK_MultiplyByMultipleRules(arrow1, [PlacementPreferenceCard(DIRECTION_CARD.southEastWedge), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
        DECK_PutOnBottomOf(arrow0, ring2Buildings)
        DECK_PutOnBottomOf(arrow1, ring2Buildings)
    }

    const ns0 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ns0, [PlacementPreferenceCard(DIRECTION_CARD.northWedge), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    const ns1 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ns1, [PlacementPreferenceCard(DIRECTION_CARD.southWedge), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    DECK_PutOnBottomOf(ns0, ring2Buildings)
    DECK_PutOnBottomOf(ns1, ring2Buildings)

    //Varaition B only
    if (variationData.baseGen.numOfArrowTowers > 4) {
        const pigThrower0 = _GetAttackBuildingGroup(villageId, 10, "attackRing2")
        DECK_MultiplyByMultipleRules(pigThrower0, [PlacementPreferenceCard("connectToPath")])
        DECK_PutOnBottomOf(pigThrower0, ring2Buildings)
    }

    //play inner walls
    const attackWalls2 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls2, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint13")])

    const ring2Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.eastWedge, DIRECTION_CARD.westWedge, DIRECTION_CARD.southWedge, DIRECTION_CARD.northWedge])
    //RING THREE------------------------------------------------------------------------
    const ring3Zones = ZonesCard("addZone", 18)
    DECK_MultiplyByMultipleRules(ring3Zones, [ZoneTagCard("attackRing3"), ZoneHeightChangeCard("3DownRelativeToCentre")])

    const ring3Buildings = DECK_Empty()

    if (IsStructureDestructionBase(villageId)) {
        const objStructures3 = _AttackCreateCoilsDeck("attackRing3")
        DECK_MultiplyByMultipleRules(objStructures3, [PlacementPreferenceCard("connectToPath"), ForceBuildingPlacementCard("forceBuildingPlacement")])
        DECK_PutOnBottomOf(objStructures3, ring3Buildings)
    }

    const ring3Rally = DECK_Empty()
    //Varaition A only
    if (variationData.baseGen.numOfArrowTowers <= 4) {
        const barracks8 = _GetAttackBuildingGroup(villageId, 7)
        DECK_MultiplyByMultipleRules(barracks8, [TagCard("attackAISiege"), TagCard("attackSiegeGather3"), PlacementPreferenceCard(DIRECTION_CARD.eastWedge)])
        DECK_PutOnBottomOf(barracks8, ring3Buildings)
    }

    DECK_PutOnBottomOf(ring3Rally, ring3Buildings)

    const arrow4 = _GetAttackBuildingGroup(villageId, 2, "attackRing3")
    DECK_MultiplyByMultipleRules(arrow4, [PlacementPreferenceCard(DIRECTION_CARD.southWestWedge)])
    const arrow5 = _GetAttackBuildingGroup(villageId, 2, "attackRing3")
    DECK_MultiplyByMultipleRules(arrow5, [PlacementPreferenceCard(DIRECTION_CARD.northEastWedge)])
    DECK_PutOnBottomOf(arrow4, ring3Buildings)
    DECK_PutOnBottomOf(arrow5, ring3Buildings)

    const ns4 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ns4, [PlacementPreferenceCard(DIRECTION_CARD.northEastWedge)])
    const ns5 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ns5, [PlacementPreferenceCard(DIRECTION_CARD.southWestWedge)])

    DECK_PutOnBottomOf(ns4, ring3Buildings)
    DECK_PutOnBottomOf(ns5, ring3Buildings)

    //play outer walls
    const attackWalls3 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls3, [ZoneFilterCard("attackRing3"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint13")])

    //RING FOUR------------------------------------------------------------------------
    const ring4Zones = ZonesCard("addZone", 10)
    DECK_MultiplyByMultipleRules(ring4Zones, [ZoneTagCard("attackRing4"), ZoneTagCard("attackOutskirtsPathZone"), ZoneHeightChangeCard("2DownRelativeToCentre")])

    const ring4Buildings = DECK_Empty()

    const ns41 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ns41, [PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    const ns51 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ns51, [PlacementPreferenceCard(DIRECTION_CARD.southWedge)])
    DECK_PutOnBottomOf(ns41, ring4Buildings)
    DECK_PutOnBottomOf(ns51, ring4Buildings)

    if (variationData.baseGen.numOfNS > 6) {
        const ns61 = _GetAttackBuildingGroup(villageId, 3)
        DECK_MultiplyByMultipleRules(ns61, [PlacementPreferenceCard(DIRECTION_CARD.westWedge)])
        const ns71 = _GetAttackBuildingGroup(villageId, 3)
        DECK_MultiplyByMultipleRules(ns71, [PlacementPreferenceCard(DIRECTION_CARD.eastWedge)])
        DECK_PutOnBottomOf(ns61, ring4Buildings)
        DECK_PutOnBottomOf(ns71, ring4Buildings)
    }

    const rallyPointsDeck = DECK_Empty()

    const rallyPoints0 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints0, [TagCard("attackSiegeRally"), TagCard("attackSiegeGather0"), PlacementPreferenceCard(DIRECTION_CARD.northEastWedge)])
    DECK_PutOnBottomOf(rallyPoints0, rallyPointsDeck)

    const rallyPoints2 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints2, [TagCard("attackSiegeRally"), TagCard("attackSiegeGather2"), PlacementPreferenceCard(DIRECTION_CARD.southWestWedge)])
    DECK_PutOnBottomOf(rallyPoints2, rallyPointsDeck)

    const rallyPoints4 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints4, [TagCard("attackPatrolRally"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(rallyPoints4, rallyPointsDeck)

    const rallyPoints5 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints5, [TagCard("attackPatrolRally"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(rallyPoints5, rallyPointsDeck)

    //zones first
    DECK_PutOnBottomOf(ring1Zones, baseDeck)
    //DECK_PutOnBottomOf(ring1Lava, baseDeck)
    DECK_PutOnBottomOf(ring1Layer, baseDeck)
    DECK_PutOnBottomOf(ring2Zones, baseDeck)

    DECK_PutOnBottomOf(rObjective, baseDeck)
    DECK_PutOnBottomOf(rObjectiveDefense0, baseDeck)

    DECK_PutOnBottomOf(ring3Zones, baseDeck)
    DECK_PutOnBottomOf(ring2Lava, baseDeck)
    DECK_PutOnBottomOf(ring4Zones, baseDeck)

    //paths//walls//weathering
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    //structures
    DECK_PutOnBottomOf(ring1Buildings, baseDeck)
    DECK_PutOnBottomOf(rallyPointsDeck, baseDeck)
    DECK_PutOnBottomOf(ring2Buildings, baseDeck)
    DECK_PutOnBottomOf(ring3Buildings, baseDeck)
    DECK_PutOnBottomOf(ring4Buildings, baseDeck)

    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("attackRing4")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("attackRing4")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.westWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.westWedge), ZoneFilterCard("attackRing4")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.eastWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.eastWedge), ZoneFilterCard("attackRing4")])

    DECK_PutOnBottomOf(attackWalls1, baseDeck)
    DECK_PutOnBottomOf(attackWalls2, baseDeck)
    DECK_PutOnBottomOf(attackWalls3, baseDeck)
    return baseDeck
}

//LARGE--------------------------------------------------------------
// 1 Portal Defense
// 18 Rally Points
// 12 Barracks (8 Disruptor, 2 Sieger, 2 Fighter)
// 4 Pig Throwers
// 18 Arrow Towers
// 16 Netherspreaders
// 16 Goldmines
// 1 SNS
// 1 RNG
const _AttackFactionMakeLargeBase = (villageId) => {
    switch (IncrementGlobal(attackVal.global.largeBaseLayoutTracker)) {
        case 1:
            return _AttackFactionBaseLargeWithRaisedPlatforms(villageId, 8)
        case 2:
            OUTPUT_SetGlobalVariable(attackVal.global.largeBaseLayoutTracker, 0)
            return _AttackFactionMakeLargeCraterBase(villageId)
    }
}
const _AttackFactionBaseLargeWithRaisedPlatforms = (villageId, numOfRaisedPlatforms) => {
    let numOfArrowTowersSoFar = 2
    const variationData = _GetAttackVariationData(villageId)
    const baseDeck = DECK_Empty()

    //INITIAL ZONES------------------------------------------------------------------------
    const centerZone = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(centerZone, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("attackRing0"), ZoneHeightChangeCard("6DownRelativeToCentre")])
    const portalZone = ZonesCard("addZone", 23)
    DECK_MultiplyByMultipleRules(portalZone, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("attackRing0"), ZoneHeightChangeCard("6DownRelativeToCentre")])

    //PORTAL------------------------------------------------------------------------
    const portal = BuildableCard("attackPortalLarge")
    DECK_MultiplyByMultipleRules(portal, [ZoneFilterCard("attackRing0"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard("facingSouth"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])
    //INSIDE RALLY POINTS---------------------------------------------------------
    const insideRally = DECK_Empty()
    const insideRally0 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(insideRally0, [TagCard("attackDefendRally"), TagCard("attackDefendGather0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    const insideRally1 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(insideRally1, [TagCard("attackDefendRally"), TagCard("attackDefendGather1"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southWedge)])

    DECK_PutOnBottomOf(insideRally0, insideRally)
    DECK_PutOnBottomOf(insideRally1, insideRally)

    const ring1NonObjectiveBuildings = _GetAttackBuildingGroup(villageId, 1, "attackRing0")
    DECK_MultiplyByMultipleRules(ring1NonObjectiveBuildings, [PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones")])

    //Portal
    DECK_PutOnBottomOf(centerZone, baseDeck)
    DECK_PutOnBottomOf(portalZone, baseDeck)
    //DECK_PutOnBottomOf(portalLayer, baseDeck)
    DECK_PutOnBottomOf(portal, baseDeck)
    DECK_PutOnBottomOf(insideRally, baseDeck)
    if (IsStructureDestructionBase(villageId)) {
        const pobjStructures = _AttackCreateCoilsDeck("attackRing0")
        DECK_MultiplyByMultipleRules(pobjStructures, [PlacementPreferenceCard("connectToPath"), ForceBuildingPlacementCard("forceBuildingPlacement")])
        DECK_PutOnBottomOf(pobjStructures, baseDeck)
    }
    DECK_PutOnBottomOf(ring1NonObjectiveBuildings, baseDeck)

    const barracks0 = _GetAttackBuildingGroup(villageId, 7, "attackRing0")
    DECK_MultiplyByMultipleRules(barracks0, [TagCard("attackAIDefend"), TagCard("attackDefendGather0")])
    const barracks1 = _GetAttackBuildingGroup(villageId, 7, "attackRing0")
    DECK_MultiplyByMultipleRules(barracks1, [TagCard("attackAIPatrol")])

    DECK_PutOnBottomOf(barracks0, baseDeck)
    DECK_PutOnBottomOf(barracks1, baseDeck)

    const attackWalls0 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls0, [ZoneFilterCard("attackRing0"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint1")])

    DECK_PutOnBottomOf(attackWalls0, baseDeck)

    const ring1Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.eastWedge, DIRECTION_CARD.southWedge, DIRECTION_CARD.westWedge, DIRECTION_CARD.northWedge, DIRECTION_CARD.northWestWedge, DIRECTION_CARD.northEastWedge, DIRECTION_CARD.southWestWedge, DIRECTION_CARD.southEastWedge])
    DECK_PutOnBottomOf(ring1Lava, baseDeck)

    const raisedPlatforms = _MakeRaisedPlatformsAndSpacers(villageId, numOfRaisedPlatforms, baseDeck, "elementHeightThreeDown")
    const layer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_PutOnBottomOf(layer, baseDeck)

    const ring2Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.eastWedge, DIRECTION_CARD.southWedge, DIRECTION_CARD.westWedge, DIRECTION_CARD.northWedge, DIRECTION_CARD.northWestWedge, DIRECTION_CARD.northEastWedge, DIRECTION_CARD.southWestWedge, DIRECTION_CARD.southEastWedge])
    DECK_MultiplyByMultipleRules(ring2Lava, [ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(ring2Lava, baseDeck)

    const ring3Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.eastWedge, DIRECTION_CARD.southWedge, DIRECTION_CARD.westWedge, DIRECTION_CARD.northWedge])
    DECK_MultiplyByMultipleRules(ring3Lava, [ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(ring3Lava, baseDeck)

    const raisedBuildings = DECK_Empty()
    const channelBuildings = DECK_Empty()

    if (IsStructureDestructionBase(villageId)) {
        const rP = ChooseFromArray(raisedPlatforms)
        const districtData = elementDistricts[rP]

        const robjStructures = _AttackCreateCoilsDeck(districtData.zoneTag)
        DECK_MultiplyByMultipleRules(robjStructures, [PlacementPreferenceCard("connectToPath"), ForceBuildingPlacementCard("forceBuildingPlacement")])
        DECK_PutOnBottomOf(robjStructures, baseDeck)

        const cobjStructures = _AttackCreateCoilsDeck("attackOutskirtsPathZone")
        DECK_MultiplyByMultipleRules(cobjStructures, [PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])
        DECK_PutOnBottomOf(cobjStructures, baseDeck)
    }

    //SNS & Range--------------------------------
    const districtDataSNS = elementDistricts[raisedPlatforms[4]]
    const rSNS = _GetAttackBuildingGroup(villageId, 8, districtDataSNS.zoneTag)
    DECK_MultiplyByMultipleRules(rSNS, [PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(districtDataSNS.placement), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    DECK_PutOnBottomOf(rSNS, baseDeck)

    const rSNSDefense0 = _GetAttackBuildingGroup(villageId, 11, districtDataSNS.zoneTag)
    DECK_MultiplyByMultipleRules(rSNSDefense0, [PlacementPreferenceCard(districtDataSNS.placement), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    DECK_PutOnBottomOf(rSNSDefense0, baseDeck)

    const districtDataRange = elementDistricts[raisedPlatforms[6]]
    const rRange = _GetAttackBuildingGroup(villageId, 9, districtDataRange.zoneTag)
    DECK_MultiplyByMultipleRules(rRange, [PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(districtDataRange.placement), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    DECK_PutOnBottomOf(rRange, baseDeck)

    const rRNGDefense0 = _GetAttackBuildingGroup(villageId, 11, districtDataRange.zoneTag)
    DECK_MultiplyByMultipleRules(rRNGDefense0, [PlacementPreferenceCard(districtDataRange.placement)])

    DECK_PutOnBottomOf(rRNGDefense0, baseDeck)

    //PigThrower--------------------------------
    const districtPigThrower0 = elementDistricts[raisedPlatforms[2]]
    const rPigThrower0 = _GetAttackBuildingGroup(villageId, 10)
    DECK_MultiplyByMultipleRules(rPigThrower0, [PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(districtPigThrower0.placement)])
    DECK_PutOnBottomOf(rPigThrower0, raisedBuildings)

    const districtPigThrower2 = elementDistricts[raisedPlatforms[7]]
    const rPigThrower2 = _GetAttackBuildingGroup(villageId, 13)
    DECK_MultiplyByMultipleRules(rPigThrower2, [PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(districtPigThrower2.placement)])
    DECK_PutOnBottomOf(rPigThrower2, raisedBuildings)

    //Barracks--------------------------------
    //Disruptors
    const districtDataBarracks0 = elementDistricts[raisedPlatforms[0]]
    const districtDataBarracks3 = elementDistricts[raisedPlatforms[3]]

    const districtDataBarracks1 = elementDistricts[raisedPlatforms[1]]
    const rBarracks1 = _GetAttackBuildingGroup(villageId, 7)
    DECK_MultiplyByMultipleRules(rBarracks1, [TagCard("attackAISiege"), TagCard("attackSiegeGather2"), PlacementPreferenceCard(districtDataBarracks1.placement)])
    DECK_PutOnBottomOf(rBarracks1, raisedBuildings)

    const districtDataBarracks2 = elementDistricts[raisedPlatforms[2]]
    const rBarracks2 = _GetAttackBuildingGroup(villageId, 7)
    DECK_MultiplyByMultipleRules(rBarracks2, [TagCard("attackAISiege"), TagCard("attackSiegeGather1"), PlacementPreferenceCard(districtDataBarracks2.placement)])
    DECK_PutOnBottomOf(rBarracks2, raisedBuildings)

    const districtDataBarracks5 = elementDistricts[raisedPlatforms[5]]
    const cBarracks1 = _GetAttackBuildingGroup(villageId, 7)
    DECK_MultiplyByMultipleRules(cBarracks1, [TagCard("attackAIDefend"), TagCard("attackDefendGather1"), PlacementPreferenceCard(districtDataBarracks5.placement)])
    DECK_PutOnBottomOf(cBarracks1, channelBuildings)

    //Sieger
    const districtDataBarracks6 = elementDistricts[raisedPlatforms[3]]
    const rBarracks4 = _GetAttackBuildingGroup(villageId, 6)
    DECK_MultiplyByMultipleRules(rBarracks4, [TagCard("attackAISiege"), TagCard("attackSiegeGather3"), PlacementPreferenceCard(districtDataBarracks6.placement)])
    DECK_PutOnBottomOf(rBarracks4, raisedBuildings)

    const districtDataBarracks7 = elementDistricts[raisedPlatforms[7]]
    const cBarracks2 = _GetAttackBuildingGroup(villageId, 6)
    DECK_MultiplyByMultipleRules(cBarracks2, [TagCard("attackAISiege"), TagCard("attackSiegeGather2"), PlacementPreferenceCard(districtDataBarracks7.placement)])
    DECK_PutOnBottomOf(cBarracks2, channelBuildings)

    //Fighter
    const districtDataBarracks8 = elementDistricts[raisedPlatforms[7]]
    const rBarracks5 = _GetAttackBuildingGroup(villageId, 5)
    DECK_MultiplyByMultipleRules(rBarracks5, [TagCard("attackAIDefend"), TagCard("attackDefendGather0"), PlacementPreferenceCard(districtDataBarracks8.placement)])
    DECK_PutOnBottomOf(rBarracks5, raisedBuildings)

    const cBarracks3 = _GetAttackBuildingGroup(villageId, 5)
    DECK_MultiplyByMultipleRules(cBarracks3, [TagCard("attackAIDefend"), TagCard("attackDefendGather1"), PlacementPreferenceCard(districtDataBarracks0.placement)])
    DECK_PutOnBottomOf(cBarracks3, channelBuildings)

    //Arrow/NS/Goldmines
    for (const key in raisedPlatforms) {
        const districtData = elementDistricts[raisedPlatforms[key]]

        if (numOfArrowTowersSoFar < variationData.baseGen.numOfArrowTowers) {
            const rArrow = _GetAttackBuildingGroup(villageId, 2)
            DECK_MultiplyByMultipleRules(rArrow, [PlacementPreferenceCard(districtData.placement)])
            DECK_PutOnBottomOf(rArrow, raisedBuildings)
            numOfArrowTowersSoFar++
        }

        const rBuildings2 = _GetAttackBuildingGroup(villageId, 3)
        DECK_MultiplyByMultipleRules(rBuildings2, [PlacementPreferenceCard(districtData.placement)])
        DECK_PutOnBottomOf(rBuildings2, raisedBuildings)
    }

    const rallyPointsDeck = DECK_Empty()

    const rallyPoints0 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints0, [TagCard("attackSiegeRally"), TagCard("attackSiegeGather0"), PlacementPreferenceCard(DIRECTION_CARD.northEastWedge)])
    DECK_PutOnBottomOf(rallyPoints0, rallyPointsDeck)

    const rallyPoints2 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints2, [TagCard("attackSiegeRally"), TagCard("attackSiegeGather2"), PlacementPreferenceCard(DIRECTION_CARD.southWestWedge)])
    DECK_PutOnBottomOf(rallyPoints2, rallyPointsDeck)

    const rallyPoints4 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints4, [TagCard("attackPatrolRally"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(rallyPoints4, rallyPointsDeck)

    const rallyPoints5 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints5, [TagCard("attackPatrolRally"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(rallyPoints5, rallyPointsDeck)

    const attackWalls1 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls1, [ZoneFilterCard("attackOutskirtsPathZone"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("withScoreThresholdPoint13")])

    const lavaPool = MoatCard("attackLavaPool")
    DECK_MultiplyByMultipleRules(lavaPool, [ZoneFilterCard("placeInsideVillageAlways")])

    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    DECK_PutOnBottomOf(rallyPointsDeck, baseDeck)

    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard(districtDataBarracks0.zoneTag), ZoneFilterCard("attackOutskirtsPathZone")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard(districtDataBarracks2.zoneTag), ZoneFilterCard("attackOutskirtsPathZone")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.westWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.westWedge), ZoneFilterCard(districtDataBarracks3.zoneTag), ZoneFilterCard("attackOutskirtsPathZone")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.eastWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.eastWedge), ZoneFilterCard(districtDataBarracks1.zoneTag), ZoneFilterCard("attackOutskirtsPathZone")])

    DECK_PutOnBottomOf(raisedBuildings, baseDeck)
    DECK_PutOnBottomOf(channelBuildings, baseDeck)

    DECK_PutOnBottomOf(attackWalls1, baseDeck)
    DECK_PutOnBottomOf(lavaPool, baseDeck)

    return baseDeck
}
const _AttackFactionMakeLargeCraterBase = (villageId) => {
    const baseDeck = DECK_Empty()

    //INITIAL ZONES------------------------------------------------------------------------
    const centerZone = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(centerZone, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("attackRing0"), ZoneHeightChangeCard("6DownRelativeToCentre")])
    const portalZone = ZonesCard("addZone", 12)
    DECK_MultiplyByMultipleRules(portalZone, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("attackRing0"), ZoneHeightChangeCard("6DownRelativeToCentre")])

    //PORTAL------------------------------------------------------------------------
    const portal = BuildableCard("attackPortalLarge")
    DECK_MultiplyByMultipleRules(portal, [PlacementPreferenceCard("connectToPath"), ZoneFilterCard("attackRing0"), PlacementPreferenceCard("facingSouth"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])

    //RING ONE------------------------------------------------------------------------
    const ring1Zones = ZonesCard("addZone", 26)
    DECK_MultiplyByMultipleRules(ring1Zones, [ZoneTagCard("attackRing1"), ZoneHeightChangeCard("5DownRelativeToCentre")])
    const ring1Layer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(ring1Layer, [ZoneHeightChangeCard("5DownRelativeToCentre")])

    const insideRally = DECK_Empty()
    const insideRally0 = _GetAttackBuildingGroup(villageId, 4, "attackRing1")
    DECK_MultiplyByMultipleRules(insideRally0, [TagCard("attackDefendRally"), TagCard("attackDefendGather0"), PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    const insideRally1 = _GetAttackBuildingGroup(villageId, 4, "attackRing1")
    DECK_MultiplyByMultipleRules(insideRally1, [TagCard("attackDefendRally"), TagCard("attackDefendGather1"), PlacementPreferenceCard(DIRECTION_CARD.southWedge)])

    DECK_PutOnBottomOf(insideRally0, insideRally)
    DECK_PutOnBottomOf(insideRally1, insideRally)

    const ring1Buildings = DECK_Empty()
    if (IsStructureDestructionBase(villageId)) {
        const objStructures1 = _AttackCreateCoilsDeck("attackRing1")
        DECK_MultiplyByMultipleRules(objStructures1, [PlacementPreferenceCard("connectToPath"), ForceBuildingPlacementCard("forceBuildingPlacement")])
        DECK_PutOnBottomOf(objStructures1, ring1Buildings)
    }
    const ring1NonObjectiveBuildings = _GetAttackBuildingGroup(villageId, 1, "attackRing1")
    DECK_MultiplyByMultipleRules(ring1Buildings, [ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(insideRally, ring1Buildings)
    DECK_PutOnBottomOf(ring1NonObjectiveBuildings, ring1Buildings)

    const barracks0 = _GetAttackBuildingGroup(villageId, 7, "attackRing1")
    DECK_MultiplyByMultipleRules(barracks0, [TagCard("attackAIPatrol"), PlacementPreferenceCard(DIRECTION_CARD.northRect)])
    const barracks1 = _GetAttackBuildingGroup(villageId, 7, "attackRing1")
    DECK_MultiplyByMultipleRules(barracks1, [TagCard("attackAIDefend"), PlacementPreferenceCard(DIRECTION_CARD.southRect)])
    const barracks2 = _GetAttackBuildingGroup(villageId, 7, "attackRing1")
    DECK_MultiplyByMultipleRules(barracks2, [TagCard("attackAIDefend"), PlacementPreferenceCard(DIRECTION_CARD.westRect)])
    const barracks3 = _GetAttackBuildingGroup(villageId, 5, "attackRing1")
    DECK_MultiplyByMultipleRules(barracks3, [TagCard("attackAIDefend"), PlacementPreferenceCard(DIRECTION_CARD.eastRect)])

    DECK_PutOnBottomOf(barracks0, ring1Buildings)
    DECK_PutOnBottomOf(barracks1, ring1Buildings)
    DECK_PutOnBottomOf(barracks2, ring1Buildings)
    DECK_PutOnBottomOf(barracks3, ring1Buildings)

    const ring1Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.eastWedge, DIRECTION_CARD.westWedge, DIRECTION_CARD.southWedge, DIRECTION_CARD.northWedge, DIRECTION_CARD.northWestWedge, DIRECTION_CARD.northEastWedge, DIRECTION_CARD.southWestWedge, DIRECTION_CARD.southEastWedge])
    const attackWalls1 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls1, [ZoneFilterCard("attackRing1"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint13")])

    //RING TWO------------------------------------------------------------------------
    const ring2Zones0 = ZonesCard("addZone", 26)
    DECK_MultiplyByMultipleRules(ring2Zones0, [ZoneTagCard("attackRing2"), ZoneHeightChangeCard("4DownRelativeToCentre")])

    const ring2Buildings = DECK_Empty()
    if (IsStructureDestructionBase(villageId)) {
        const objStructures2 = _AttackCreateCoilsDeck("attackRing2")
        DECK_MultiplyByMultipleRules(objStructures2, [PlacementPreferenceCard("connectToPath"), ForceBuildingPlacementCard("forceBuildingPlacement")])
        DECK_PutOnBottomOf(objStructures2, ring2Buildings)
    }

    const ring2Rally = DECK_Empty()

    const barracks4 = _GetAttackBuildingGroup(villageId, 7, "attackRing2")
    DECK_MultiplyByMultipleRules(barracks4, [TagCard("attackAISiege"), TagCard("attackSiegeGather2"), PlacementPreferenceCard(DIRECTION_CARD.northRect)])

    const barracks6 = _GetAttackBuildingGroup(villageId, 5, "attackRing2")
    DECK_MultiplyByMultipleRules(barracks6, [TagCard("attackAIDefend"), TagCard("attackDefendGather0"), PlacementPreferenceCard(DIRECTION_CARD.westRect)])

    const barracks7 = _GetAttackBuildingGroup(villageId, 6, "attackRing2")
    DECK_MultiplyByMultipleRules(barracks7, [TagCard("attackAISiege"), TagCard("attackSiegeGather2"), PlacementPreferenceCard(DIRECTION_CARD.eastRect)])

    //0 SNS & Range --------------------------------

    const rRange = _GetAttackBuildingGroup(villageId, 9, "attackRing2")
    DECK_MultiplyByMultipleRules(rRange, [PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(DIRECTION_CARD.northRect)])
    const rRangeDefense0 = _GetAttackBuildingGroup(villageId, 11, "attackRing2")
    DECK_MultiplyByMultipleRules(rRangeDefense0, [PlacementPreferenceCard(DIRECTION_CARD.northRect)])

    DECK_PutOnBottomOf(rRange, ring2Buildings)
    DECK_PutOnBottomOf(rRangeDefense0, ring2Buildings)

    DECK_PutOnBottomOf(ring2Rally, ring2Buildings)

    DECK_PutOnBottomOf(barracks4, ring2Buildings)
    DECK_PutOnBottomOf(barracks6, ring2Buildings)
    DECK_PutOnBottomOf(barracks7, ring2Buildings)

    const arrow0 = _GetAttackBuildingGroup(villageId, 2, "attackRing2")
    DECK_MultiplyByMultipleRules(arrow0, [PlacementPreferenceCard(DIRECTION_CARD.northWestWedge), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    const arrow1 = _GetAttackBuildingGroup(villageId, 2, "attackRing2")
    DECK_MultiplyByMultipleRules(arrow1, [PlacementPreferenceCard(DIRECTION_CARD.southEastWedge), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    DECK_PutOnBottomOf(arrow0, ring2Buildings)
    DECK_PutOnBottomOf(arrow1, ring2Buildings)

    const ns2 = _GetAttackBuildingGroup(villageId, 3, "attackRing2")
    DECK_MultiplyByMultipleRules(ns2, [PlacementPreferenceCard(DIRECTION_CARD.westRect), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    const ns3 = _GetAttackBuildingGroup(villageId, 3, "attackRing2")
    DECK_MultiplyByMultipleRules(ns3, [PlacementPreferenceCard(DIRECTION_CARD.eastRect), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    DECK_PutOnBottomOf(ns2, ring2Buildings)
    DECK_PutOnBottomOf(ns3, ring2Buildings)

    const pigThrower0 = _GetAttackBuildingGroup(villageId, 10, "attackRing2")
    DECK_PutOnBottomOf(pigThrower0, ring2Buildings)

    //play inner walls
    const attackWalls2 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls2, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint13")])

    const ring2Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.eastWedge, DIRECTION_CARD.westWedge, DIRECTION_CARD.southWedge, DIRECTION_CARD.northWedge])

    //RING THREE------------------------------------------------------------------------
    const ring3Zones0 = ZonesCard("addZone", 6)
    DECK_MultiplyByMultipleRules(ring3Zones0, [ZoneTagCard("attackRing3"), PlacementPreferenceCard(DIRECTION_CARD.northRect), ZoneHeightChangeCard("3DownRelativeToCentre")])
    const ring3Zones1 = ZonesCard("addZone", 6)
    DECK_MultiplyByMultipleRules(ring3Zones1, [ZoneTagCard("attackRing3"), PlacementPreferenceCard(DIRECTION_CARD.southRect), ZoneHeightChangeCard("3DownRelativeToCentre")])
    const ring3Zones2 = ZonesCard("addZone", 6)
    DECK_MultiplyByMultipleRules(ring3Zones2, [ZoneTagCard("attackRing3"), PlacementPreferenceCard(DIRECTION_CARD.westRect), ZoneHeightChangeCard("3DownRelativeToCentre")])
    const ring3Zones3 = ZonesCard("addZone", 6)
    DECK_MultiplyByMultipleRules(ring3Zones3, [ZoneTagCard("attackRing3"), PlacementPreferenceCard(DIRECTION_CARD.eastRect), ZoneHeightChangeCard("3DownRelativeToCentre")])

    const ring3Buildings = DECK_Empty()

    if (IsStructureDestructionBase(villageId)) {
        const objStructures3 = _AttackCreateCoilsDeck("attackRing3")
        DECK_MultiplyByMultipleRules(objStructures3, [PlacementPreferenceCard("connectToPath"), ForceBuildingPlacementCard("forceBuildingPlacement")])
        DECK_PutOnBottomOf(objStructures3, ring3Buildings)
    }

    const ring3Rally = DECK_Empty()

    const barracks10 = _GetAttackBuildingGroup(villageId, 7, "attackRing3")
    DECK_MultiplyByMultipleRules(barracks10, [TagCard("attackAIDefend"), PlacementPreferenceCard(DIRECTION_CARD.westRect)])

    const barracks11 = _GetAttackBuildingGroup(villageId, 6, "attackRing3")
    DECK_MultiplyByMultipleRules(barracks11, [TagCard("attackAISiege"), TagCard("attackSiegeGather2"), PlacementPreferenceCard(DIRECTION_CARD.eastRect)])

    //1 SNS & Range --------------------------------
    const rSNS = _GetAttackBuildingGroup(villageId, 8, "attackRing3")
    DECK_MultiplyByMultipleRules(rSNS, [PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(DIRECTION_CARD.southRect)])

    const rSNSDefense0 = _GetAttackBuildingGroup(villageId, 11, "attackRing3")
    DECK_MultiplyByMultipleRules(rSNSDefense0, [PlacementPreferenceCard(DIRECTION_CARD.southRect)])

    DECK_PutOnBottomOf(rSNS, ring3Buildings)
    DECK_PutOnBottomOf(rSNSDefense0, ring3Buildings)

    DECK_PutOnBottomOf(ring3Rally, ring3Buildings)

    DECK_PutOnBottomOf(barracks10, ring3Buildings)
    DECK_PutOnBottomOf(barracks11, ring3Buildings)

    const arrow4 = _GetAttackBuildingGroup(villageId, 2, "attackRing3")
    DECK_MultiplyByMultipleRules(arrow4, [PlacementPreferenceCard(DIRECTION_CARD.southWestWedge)])
    const arrow5 = _GetAttackBuildingGroup(villageId, 2, "attackRing3")
    DECK_MultiplyByMultipleRules(arrow5, [PlacementPreferenceCard(DIRECTION_CARD.northEastWedge)])
    DECK_PutOnBottomOf(arrow4, ring3Buildings)
    DECK_PutOnBottomOf(arrow5, ring3Buildings)

    const ns4 = _GetAttackBuildingGroup(villageId, 3, "attackRing3")
    DECK_MultiplyByMultipleRules(ns4, [PlacementPreferenceCard(DIRECTION_CARD.northRect)])
    const ns5 = _GetAttackBuildingGroup(villageId, 3, "attackRing3")
    DECK_MultiplyByMultipleRules(ns5, [PlacementPreferenceCard(DIRECTION_CARD.southRect)])

    DECK_PutOnBottomOf(ns4, ring3Buildings)
    DECK_PutOnBottomOf(ns5, ring3Buildings)

    const pigThrower1 = _GetAttackBuildingGroup(villageId, 13, "attackRing3")
    DECK_MultiplyByMultipleRules(pigThrower1, [PlacementPreferenceCard("connectToPath")])
    DECK_PutOnBottomOf(pigThrower1, ring3Buildings)

    //play outer walls
    const attackWalls3 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls3, [ZoneFilterCard("attackRing3"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint13")])

    const ring3Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.northWestWedge, DIRECTION_CARD.northEastWedge, DIRECTION_CARD.southWestWedge, DIRECTION_CARD.southEastWedge])

    //RING FOUR------------------------------------------------------------------------
    const ring4Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.eastWedge, DIRECTION_CARD.westWedge, DIRECTION_CARD.southWedge, DIRECTION_CARD.northWedge])
    const ring4Zones0 = ZonesCard("addZone", 8)
    const ring4Zones1 = ZonesCard("addZone", 8)
    const ring4Zones2 = ZonesCard("addZone", 8)
    const ring4Zones3 = ZonesCard("addZone", 8)
    DECK_MultiplyByMultipleRules(ring4Zones0, [ZoneTagCard("attackRing4"), PlacementPreferenceCard(DIRECTION_CARD.northRect), ZoneTagCard("attackOutskirtsPathZone"), ZoneHeightChangeCard("2DownRelativeToCentre")])
    DECK_MultiplyByMultipleRules(ring4Zones1, [ZoneTagCard("attackRing4"), PlacementPreferenceCard(DIRECTION_CARD.southRect), ZoneTagCard("attackOutskirtsPathZone"), ZoneHeightChangeCard("2DownRelativeToCentre")])
    DECK_MultiplyByMultipleRules(ring4Zones2, [ZoneTagCard("attackRing4"), PlacementPreferenceCard(DIRECTION_CARD.westRect), ZoneTagCard("attackOutskirtsPathZone"), ZoneHeightChangeCard("2DownRelativeToCentre")])
    DECK_MultiplyByMultipleRules(ring4Zones3, [ZoneTagCard("attackRing4"), PlacementPreferenceCard(DIRECTION_CARD.eastRect), ZoneTagCard("attackOutskirtsPathZone"), ZoneHeightChangeCard("2DownRelativeToCentre")])

    const ring4Buildings = DECK_Empty()

    const arrow8 = _GetAttackBuildingGroup(villageId, 2, "attackRing4")
    DECK_MultiplyByMultipleRules(arrow8, [PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    const arrow9 = _GetAttackBuildingGroup(villageId, 2, "attackRing4")
    DECK_MultiplyByMultipleRules(arrow9, [PlacementPreferenceCard(DIRECTION_CARD.southWedge)])

    DECK_PutOnBottomOf(arrow8, ring4Buildings)
    DECK_PutOnBottomOf(arrow9, ring4Buildings)

    const ns8 = _GetAttackBuildingGroup(villageId, 3, "attackRing4")
    DECK_MultiplyByMultipleRules(ns8, [PlacementPreferenceCard(DIRECTION_CARD.northRect)])
    const ns9 = _GetAttackBuildingGroup(villageId, 3, "attackRing4")
    DECK_MultiplyByMultipleRules(ns9, [PlacementPreferenceCard(DIRECTION_CARD.southRect)])
    const ns10 = _GetAttackBuildingGroup(villageId, 3, "attackRing4")
    DECK_MultiplyByMultipleRules(ns10, [PlacementPreferenceCard(DIRECTION_CARD.westRect)])
    const ns11 = _GetAttackBuildingGroup(villageId, 3, "attackRing4")
    DECK_MultiplyByMultipleRules(ns11, [PlacementPreferenceCard(DIRECTION_CARD.eastRect)])

    DECK_PutOnBottomOf(ns8, ring4Buildings)
    DECK_PutOnBottomOf(ns9, ring4Buildings)
    DECK_PutOnBottomOf(ns10, ring4Buildings)
    DECK_PutOnBottomOf(ns11, ring4Buildings)

    //play outer outer walls
    const attackWalls4 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls4, [ZoneFilterCard("attackRing4"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint13")])

    //RING OUTSIDE------------------------------------------------------------------------
    const outsideZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(outsideZones, [ZoneTagCard("outsideRing"), ZoneHeightChangeCard("2DownRelativeToCentre")])
    const outsideBuildings = DECK_Empty()

    //Super outer walls
    const attackWalls5 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls5, [ZoneFilterCard("outsideRing"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint13")])

    const rallyPointsDeck = DECK_Empty()

    const rallyPoints0 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints0, [TagCard("attackSiegeRally"), TagCard("attackSiegeGather0"), PlacementPreferenceCard(DIRECTION_CARD.northEastWedge)])
    DECK_PutOnBottomOf(rallyPoints0, rallyPointsDeck)

    const rallyPoints2 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints2, [TagCard("attackSiegeRally"), TagCard("attackSiegeGather2"), PlacementPreferenceCard(DIRECTION_CARD.southWestWedge)])
    DECK_PutOnBottomOf(rallyPoints2, rallyPointsDeck)

    const rallyPoints4 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints4, [TagCard("attackPatrolRally"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(rallyPoints4, rallyPointsDeck)

    const rallyPoints5 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(rallyPoints5, [TagCard("attackPatrolRally"), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(rallyPoints5, rallyPointsDeck)

    //zones first
    DECK_PutOnBottomOf(centerZone, baseDeck)
    DECK_PutOnBottomOf(portalZone, baseDeck)
    DECK_PutOnBottomOf(portal, baseDeck)
    DECK_PutOnBottomOf(ring1Zones, baseDeck)
    DECK_PutOnBottomOf(ring1Lava, baseDeck)
    DECK_PutOnBottomOf(ring1Layer, baseDeck)
    DECK_PutOnBottomOf(ring2Zones0, baseDeck)
    //DECK_PutOnBottomOf(rRange, baseDeck)
    //DECK_PutOnBottomOf(rRangeDefense0, baseDeck)
    //DECK_PutOnBottomOf(rRangeDefense1, baseDeck)
    DECK_PutOnBottomOf(ring3Zones0, baseDeck)
    DECK_PutOnBottomOf(ring3Zones1, baseDeck)
    DECK_PutOnBottomOf(ring3Zones2, baseDeck)
    DECK_PutOnBottomOf(ring3Zones3, baseDeck)
    DECK_PutOnBottomOf(ring4Zones0, baseDeck)
    DECK_PutOnBottomOf(ring4Zones1, baseDeck)
    DECK_PutOnBottomOf(ring4Zones2, baseDeck)
    DECK_PutOnBottomOf(ring4Zones3, baseDeck)
    //DECK_PutOnBottomOf(rSNS, baseDeck)
    //DECK_PutOnBottomOf(rSNSDefense0, baseDeck)
    //DECK_PutOnBottomOf(rSNSDefense1, baseDeck)
    DECK_PutOnBottomOf(outsideZones, baseDeck)
    DECK_PutOnBottomOf(ring2Lava, baseDeck)
    DECK_PutOnBottomOf(ring3Lava, baseDeck)
    DECK_PutOnBottomOf(ring4Lava, baseDeck)

    //paths//walls//weathering
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    //structures

    DECK_PutOnBottomOf(ring1Buildings, baseDeck)
    DECK_PutOnBottomOf(rallyPointsDeck, baseDeck)
    DECK_PutOnBottomOf(ring2Buildings, baseDeck)
    DECK_PutOnBottomOf(ring3Buildings, baseDeck)
    DECK_PutOnBottomOf(ring4Buildings, baseDeck)
    DECK_PutOnBottomOf(outsideBuildings, baseDeck)

    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("attackRing1"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("attackRing4")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("attackRing1"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("attackRing4")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.westWedge), ZoneFilterCard("attackRing1"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.westWedge), ZoneFilterCard("attackRing4")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.eastWedge), ZoneFilterCard("attackRing1"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.eastWedge), ZoneFilterCard("attackRing4")])

    DECK_PutOnBottomOf(attackWalls1, baseDeck)
    DECK_PutOnBottomOf(attackWalls2, baseDeck)
    DECK_PutOnBottomOf(attackWalls3, baseDeck)
    DECK_PutOnBottomOf(attackWalls4, baseDeck)
    DECK_PutOnBottomOf(attackWalls5, baseDeck)

    return baseDeck
}

const _AttackFactionMakeFrontlineA = (villageId) => {
    const baseDeck = DECK_Empty()

    //Center zone for barracks
    const ring0 = ZonesCard("addZone", 4)
    DECK_MultiplyByMultipleRules(ring0, [ZoneTagCard("attackRing0"), ZoneHeightChangeCard("6DownRelativeToCentre")])

    const ring1 = ZonesCard("addZone", 4)
    DECK_MultiplyByMultipleRules(ring1, [ZoneTagCard("attackRing1"), ZoneHeightChangeCard("4DownRelativeToCentre")])

    const ring2 = ZonesCard("addZone", 4)
    DECK_MultiplyByMultipleRules(ring2, [ZoneTagCard("attackRing2"), ZoneHeightChangeCard("2DownRelativeToCentre")])

    DECK_PutOnBottomOf(ring0, baseDeck)
    DECK_PutOnBottomOf(ring1, baseDeck)
    DECK_PutOnBottomOf(ring2, baseDeck)

    const difficulty = GetOutpostDifficultyFromPhase()
    const outpostLevel = difficulty === 1 ? OUTPOST_LEVEL.LIGHT : difficulty === 2 ? OUTPOST_LEVEL.MEDIUM : OUTPOST_LEVEL.HEAVY

    //Rax
    const barracks = _GetAttackBuildingGroup(villageId, 1, "", [outpostLevel])
    DECK_MultiplyByMultipleRules(barracks, [PlacementPreferenceCard("connectToPath"), HeartCard(), PlacementPreferenceCard(PLACEMENT_RANDOM)])

    //Other buildings
    const buildings2 = _GetAttackBuildingGroup(villageId, 2, "", [outpostLevel])
    DECK_MultiplyByMultipleRules(buildings2, [PlacementPreferenceCard("connectToPath"), HeartCard(), PlacementPreferenceCard(PLACEMENT_RANDOM)])

    const buildings3 = _GetAttackBuildingGroup(villageId, 3, "", [outpostLevel])
    DECK_MultiplyByMultipleRules(buildings3, [PlacementPreferenceCard("connectToPath"), HeartCard(), PlacementPreferenceCard(PLACEMENT_RANDOM)])

    const attackWalls0 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls0, [ZoneFilterCard("attackRing0"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint13")])
    const attackWalls1 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls1, [ZoneFilterCard("attackRing1"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint13")])
    const attackWalls2 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls2, [ZoneFilterCard("attackRing2"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint13")])
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    DECK_PutOnBottomOf(barracks, baseDeck)
    DECK_PutOnBottomOf(buildings2, baseDeck)
    DECK_PutOnBottomOf(buildings3, baseDeck)

    //Cages for raiding parties
    const cages = BuildableCard("mobCage", attackVal.raidingPartyVars.cageAmount)
    DECK_MultiplyByMultipleRules(cages, [PlacementPreferenceCard(PLACEMENT_RANDOM), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), PlacementPreferenceCard("connectToPath"), TagCard(attackVal.raidingPartyVars.cageTag)])
    DECK_PutOnBottomOf(cages, baseDeck)

    DECK_PutOnBottomOf(attackWalls0, baseDeck)
    DECK_PutOnBottomOf(attackWalls1, baseDeck)
    DECK_PutOnBottomOf(attackWalls2, baseDeck)

    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("attackRing2")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("attackRing2")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.westWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.westWedge), ZoneFilterCard("attackRing2")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.eastWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.eastWedge), ZoneFilterCard("attackRing2")])

    return baseDeck
}

/* 
-------------------------
>>>>> VILLAGE SETUP <<<<<
-------------------------
*/

SNIPPET_VillageGenerated("vg_attack_base_generated", (villageId) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    // If this base is a "debug size", we're likely in flatland and don't need to generate anything.
    if (baseSize === VILLAGE_SIZE_DEBUG) {
        return
    }

    //Portal spawned
    LISTENFOR_BuildingComplete({
        snippet: "bc_attack_portal_complete",
        ownerVillageId: villageId,
        includeTags: ["portal_piglin"],
        villageId: villageId
    })

    if (IsMobAlliancePiglinSize(baseSize)) {
        return
    }

    const variationData = _GetAttackVariationData(villageId)
    const discreteEncounters = variationData.discreteEncounters

    if (IsSmallOrGreater(baseSize)) {
        InitializeBaseAIs(villageId, attackVal.aiConfig, variationData.piglinRallyPoints)
    }

    LISTENFOR_VillageFinishedBuilding({
        snippet: "vfb_attack_base_setup",
        ownerVillageId: villageId,
        villageId: villageId
    })

    CreateDiscreteEncountersListeners(villageId, discreteEncounters)

    let baseDeck = DECK_Empty()
    let cardValueBf = ""
    if (IsSmall(baseSize)) {
        baseDeck = _AttackFactionMakeSmallBase(villageId)
        cardValueBf = "attackPortalSmall"
    } else if (IsMedium(baseSize)) {
        baseDeck = _AttackFactionMakeMediumBase(villageId)
        cardValueBf = "attackPortalMedium"
    } else if (IsLarge(baseSize)) {
        baseDeck = _AttackFactionMakeLargeBase(villageId)
        cardValueBf = "attackPortalLarge"
    } else if (baseSize === BASE_SIZE_OUTPOST) {
        baseDeck = _AttackFactionMakeFrontlineA(villageId)
    }

    if (cardValueBf !== "") {
        LISTENFOR_BuildingFailedToPlace({
            snippet: "bf_portal_failed_to_place",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cardValue: cardValueBf
        })
    }

    SetupBasicVillageClearingCards(baseDeck)
    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)

    //Audio
    SetupAudioEntityForBase(villageId, attackVal.music)

    if (baseSize === BASE_SIZE_OUTPOST) {
        SetAudioPhaseForBase(villageId, attackVal.audioPerPhaseArray[0])
    }

    /*
    >>>>> BARRACK SETUPS <<<<<
    */
    LISTENFOR_BuildingComplete({
        snippet: "bc_attack_fighter_barracks",
        ownerVillageId: villageId,
        includeTags: [BARRACKS_NAME_FIGHTER],
        villageId: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_attack_disruptor_barracks",
        ownerVillageId: villageId,
        includeTags: [BARRACKS_NAME_DISRUPTOR],
        villageId: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_attack_sieger_barracks",
        ownerVillageId: villageId,
        includeTags: [BARRACKS_NAME_SIEGER],
        villageId: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_attack_specialist_barracks",
        ownerVillageId: villageId,
        includeTags: ["specialistBarracks"],
        villageId: villageId
    })

    //AI Tags Check ----------------------
    LISTENFOR_BuildingComplete({
        snippet: "bc_attack_defend_barracks",
        ownerVillageId: villageId,
        includeTags: ["attackAIDefend"],
        villageId: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_attack_siege_barracks",
        ownerVillageId: villageId,
        includeTags: ["attackAISiege"],
        villageId: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_attack_patrol_barracks",
        ownerVillageId: villageId,
        includeTags: ["attackAIPatrol"],
        villageId: villageId
    })
    //----------------------

    //Set the appearance of the piglins spawned by the attack faction
    LISTENFOR_EntitySpawned({
        snippet: "es_set_appearance_to_attack_faction_piglins",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["piglin", "mob"]
    })

    if (IsSmallOrGreater(baseSize)) {
        //Listen for stuff getting spawned from pig throwers (since they can also spawn from pig throwers)
        LISTENFOR_EntitySpawned({
            snippet: "es_attack_thrower_spawned",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: ["piglin", "projectile_spawn"]
        })
    }

    LISTENFOR_EntitySpawned({
        snippet: "es_pigmadilo_vo",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["pigmadilo"]
    })

    /*
    >>>>> BEHAVIOR SETUPS <<<<<
    */
    //Player Structure Built Response Listening
    if (IsSmallOrGreater(baseSize)) {
        let range = 0
        const playerBuiltAntiSiegeStructureResponseTimer = _GetAttackResponseTimer(villageId, attackResponse.playerTier1StructureBuilt)
        const playerBuiltKeySpawnerStructureResponseTimer = _GetAttackResponseTimer(villageId, attackResponse.playerTier2StructureBuilt)
        const playerBuiltEliteStructureResponseTimer = _GetAttackResponseTimer(villageId, attackResponse.playerTier3StructureBuilt)

        if (IsSmall(baseSize)) {
            range = attackVal.distances.villageSmallStructureDetectionRadius
        } else if (IsMedium(baseSize)) {
            range = attackVal.distances.villageMediumStructureDetectionRadius
        } else if (IsLarge(baseSize)) {
            range = attackVal.distances.villageLargeStructureDetectionRadius
        } else {
            range = attackVal.distances.villageTinyStructureDetectionRadius
        }

        BASE_InitPlayerBuiltStructureResponse(villageId, [{ snippetName: "snippet_attack_player_built_anti_siege_tower", debounceTimer: playerBuiltAntiSiegeStructureResponseTimer, distanceCheck: range, includeTags: ["antiSiegeTower"], excludeTags: ["playerBridge"] }])

        if (IsMediumOrGreater(baseSize)) {
            BASE_InitPlayerBuiltStructureResponse(villageId, [
                { snippetName: "snippet_attack_player_built_key_spawner", debounceTimer: playerBuiltKeySpawnerStructureResponseTimer, distanceCheck: range, includeTags: ["skeletonspawner", "creeperspawner", "zombiespawner"], excludeTags: ["playerBridge"] },
                { snippetName: "snippet_attack_player_built_rsl", debounceTimer: playerBuiltEliteStructureResponseTimer, distanceCheck: range, includeTags: ["redStoneLauncher"], excludeTags: ["playerBridge"] }
            ])
        }
        if (IsLargeOrGreater(baseSize)) {
            BASE_InitPlayerBuiltStructureResponse(villageId, [{ snippetName: "snippet_attack_player_built_upgrade_structure", debounceTimer: playerBuiltEliteStructureResponseTimer, distanceCheck: range, includeTags: ["playerBuffStructure"], excludeTags: ["playerBridge"] }])
        }
    }

    if (IsSmallOrGreater(baseSize)) {
        //Piglin Structure Damaged Response Listening (building damage response)
        const piglinEliteStructureDamagedResponseTimer = _GetAttackResponseTimer(villageId, attackResponse.tier3StructureDamaged)
        BASE_InitPiglinStructureDamagedResponse(villageId, [
            { snippetName: "snippet_attack_piglin_elite_structure_damaged", debounceTimer: piglinEliteStructureDamagedResponseTimer, healthThreshold: 0.99, includeTags: ["sns_fear"] },
            { snippetName: "snippet_attack_piglin_elite_structure_damaged", debounceTimer: piglinEliteStructureDamagedResponseTimer, healthThreshold: 0.6, includeTags: ["sns_fear"] },
            { snippetName: "snippet_attack_piglin_elite_structure_damaged", debounceTimer: piglinEliteStructureDamagedResponseTimer, healthThreshold: 0.3, includeTags: ["sns_fear"] },
            { snippetName: "snippet_attack_piglin_elite_structure_damaged", debounceTimer: piglinEliteStructureDamagedResponseTimer, healthThreshold: 0.99, includeTags: ["pigRangeUp"] },
            { snippetName: "snippet_attack_piglin_elite_structure_damaged", debounceTimer: piglinEliteStructureDamagedResponseTimer, healthThreshold: 0.6, includeTags: ["pigRangeUp"] },
            { snippetName: "snippet_attack_piglin_elite_structure_damaged", debounceTimer: piglinEliteStructureDamagedResponseTimer, healthThreshold: 0.3, includeTags: ["pigRangeUp"] }
        ])

        //Piglin Portal Damaged Response Listening - calling multiple thresholds so units always respond (if debounce timer is satisfied)
        const piglinPortalDamagedResponseTimer = _GetAttackResponseTimer(villageId, attackResponse.portalDamaged)
        BASE_InitPiglinStructureDamagedResponse(villageId, [
            { snippetName: "snippet_attack_portal_damaged_high", debounceTimer: piglinPortalDamagedResponseTimer, healthThreshold: 0.95, includeTags: ["portal_piglin"] },
            { snippetName: "snippet_attack_portal_damaged_high", debounceTimer: piglinPortalDamagedResponseTimer, healthThreshold: 0.8, includeTags: ["portal_piglin"] },
            { snippetName: "snippet_attack_portal_damaged_medium", debounceTimer: piglinPortalDamagedResponseTimer, healthThreshold: 0.7, includeTags: ["portal_piglin"] },
            { snippetName: "snippet_attack_portal_damaged_medium", debounceTimer: piglinPortalDamagedResponseTimer, healthThreshold: 0.6, includeTags: ["portal_piglin"] },
            { snippetName: "snippet_attack_portal_damaged_low_escalate", debounceTimer: 1, healthThreshold: 0.5, includeTags: ["portal_piglin"] },
            { snippetName: "snippet_attack_portal_damaged_low", debounceTimer: piglinPortalDamagedResponseTimer, healthThreshold: 0.5, includeTags: ["portal_piglin"] },
            { snippetName: "snippet_attack_portal_damaged_low", debounceTimer: piglinPortalDamagedResponseTimer, healthThreshold: 0.4, includeTags: ["portal_piglin"] },
            { snippetName: "snippet_attack_portal_damaged_40", debounceTimer: piglinPortalDamagedResponseTimer, healthThreshold: 0.4, includeTags: ["portal_piglin"] },
            { snippetName: "snippet_attack_portal_damaged_low", debounceTimer: piglinPortalDamagedResponseTimer, healthThreshold: 0.3, includeTags: ["portal_piglin"] },
            { snippetName: "snippet_attack_portal_damaged_low", debounceTimer: piglinPortalDamagedResponseTimer, healthThreshold: 0.2, includeTags: ["portal_piglin"] },
            { snippetName: "snippet_attack_portal_damaged_low", debounceTimer: piglinPortalDamagedResponseTimer, healthThreshold: 0.1, includeTags: ["portal_piglin"] }
        ])

        //Piglin Multiple Structures Destroyed Response Listening
        const bastionChargeTimer = attackOverrideValues.bastionChargeTime
        const bastionChargeAmount = attackOverrideValues.bastionChargeStructureCount
        BASE_InitPiglinMultipleStructuresDestroyedResponse(villageId, "snippet_attack_piglin_multiple_key_structures_destroyed", bastionChargeTimer, bastionChargeAmount, [{ includeTags: ["barracks"] }, { includeTags: ["pigThrowerTower"] }, { includeTags: ["pigSpreader"] }])

        const piglinPigmadiloSpawnResponseTimer = _GetAttackResponseTimer(villageId, attackResponse.pigmadiloSpawn)
        if (IsMediumOrGreater(baseSize)) {
            BASE_InitPiglinStructureDamagedResponse(villageId, [{ snippetName: "snippet_attack_pigmadilo_spawn", debounceTimer: piglinPigmadiloSpawnResponseTimer, healthThreshold: 0.8, includeTags: ["portal_piglin"] }])

            BASE_InitPiglinStructureDestroyedResponse(villageId, [
                { snippetName: "snippet_attack_piglin_structure_destroyed_pigmadilo_spawn", debounceTimer: piglinPigmadiloSpawnResponseTimer, includeTags: ["sns_fear"] },
                { snippetName: "snippet_attack_piglin_structure_destroyed_pigmadilo_spawn", debounceTimer: piglinPigmadiloSpawnResponseTimer, includeTags: ["pigRangeUp"] }
            ])

            BASE_InitPiglinMultipleStructuresDestroyedResponse(villageId, "snippet_attack_pigmadilo_multiple_key_structures_destroyed", 1, 9, [{ includeTags: ["barracks"] }, { includeTags: ["pigThrowerTower"] }, { includeTags: ["pigSpreader"] }])
        }

        //Piglin Structure Destroyed Response Listening (building destroyed response)
        const piglinKeyStructureDestroyedResponseTimer = _GetAttackResponseTimer(villageId, attackResponse.tier2StructureDestroyed)
        const piglinEliteStructureDestroyedResponseTimer = _GetAttackResponseTimer(villageId, attackResponse.tier3StructureDestroyed)
        BASE_InitPiglinStructureDestroyedResponse(villageId, [
            { snippetName: "snippet_attack_piglin_barracks_structure_destroyed", debounceTimer: 1, includeTags: ["barracks"] }, //Always send barracks destruction wave
            { snippetName: "snippet_attack_piglin_key_structure_destroyed", debounceTimer: piglinKeyStructureDestroyedResponseTimer, includeTags: ["pigThrowerTower"] },
            { snippetName: "snippet_attack_piglin_elite_structure_destroyed", debounceTimer: piglinEliteStructureDestroyedResponseTimer, includeTags: ["sns_fear"] },
            { snippetName: "snippet_attack_piglin_elite_structure_destroyed", debounceTimer: piglinEliteStructureDestroyedResponseTimer, includeTags: ["pigRangeUp"] },
            { snippetName: "snippet_attack_piglin_structure_destroyed_stinger", debounceTimer: 1, includeTags: ["barracks"] },
            { snippetName: "snippet_attack_piglin_structure_destroyed_stinger", debounceTimer: 1, includeTags: ["pigThrowerTower"] },
            { snippetName: "snippet_attack_piglin_structure_destroyed_stinger", debounceTimer: 1, includeTags: ["pigSpreader"] },
            { snippetName: "snippet_attack_piglin_structure_destroyed_stinger", debounceTimer: 1, includeTags: ["sns_fear"] },
            { snippetName: "snippet_attack_piglin_structure_destroyed_stinger", debounceTimer: 1, includeTags: ["pigRangeUp"] }
        ])
    }

    if (IsOutpost(baseSize)) {
        const difficulty = GetOutpostDifficultyFromPhase()
        SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, attackVal.barracks, difficulty)

        SetupMobCages(villageId, attackVal.raidingPartyVars.cageTag)
        SetupRaidingPartyHorn(villageId)
    }
    /*
    >>>>> STRUCTURE DESTRUCTION SETUPS <<<<<
    */
    if (IsStructureDestructionBase(villageId)) {
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_attack_sub_structures_destroyed",
            ownerVillageId: villageId,
            includeTags: ["pigCrystal"],
            villageId: villageId,
            factionName: FACTION_NAME_ATTACK
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_attack_sub_structures_built",
            ownerVillageId: villageId,
            includeTags: ["pigCrystal"],
            villageId: villageId,
            factionName: FACTION_NAME_ATTACK
        })
    }
})
SetupBaseAIs(attackVal.aiConfig)

SNIPPET_VillageFinishedBuilding("vfb_attack_base_setup", (villageId) => {
    SetupPiglinBase(villageId, attackVal.baseSetup)
})

SNIPPET_BuildingComplete("bc_attack_portal_complete", (portalEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(portalEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    if (IsSmallOrGreater(baseSize)) {
        SetAudioPhaseForBase(villageId, attackVal.audioPerPhaseArray[0])
        // Ensure base has engineers to ticketed builds can build
        SetupRespawningEngineers(villageId, 1, 30)

        const approachPortalTrigger = SpawnTriggerVolumeWithMultipleTagsets(portalEntity, portalEntity, "badger:spatial_trigger_attack_inner", TEAM_ORANGE, villageId, true, TAGSET_PLAYER_OR_MOB)
        LISTENFOR_SpatialPartitionEntered({
            snippet: "spe_attack_approach_portal",
            ownerVillageId: villageId,
            triggerEntity: approachPortalTrigger,
            payloadEntities: portalEntity
        })

        LISTENFOR_VillageDestroyed({
            snippet: "vd_attack_portal",
            ownerVillageId: villageId,
            villageId: villageId,
            payloadEntities: approachPortalTrigger, // clean this on portal desruction
            despawned: false
        })

        OUTPUT_SetObjectiveHealthBarVisible(portalEntity, false)
    }

    LISTENFOR_DeferredDeath({
        snippet: "dd_attack_portal_destruction",
        ownerVillageId: villageId,
        villageId: villageId,
        entities: portalEntity
    })
})

SNIPPET_DeferredDeath("dd_attack_portal_destruction", (entity, payload) => {
    PlayPortalDestructionCine(entity, FACTION_NAME_ATTACK)
})

/* 
-----------------------------------------------------------------------------
>>>>> STRUCTURE DESTRUCTION BASES - POST STRUCTURE BUILT SPECIFIC SETUP <<<<<
-----------------------------------------------------------------------------
*/
SNIPPET_BuildingComplete("bc_attack_sub_structures_built", (crystalEntity, payload) => {
    const villageId = payload.ownerVillageId
    const substructures = GetVillageVariable(villageId, "remaining_sub_structures") + 1
    SetVillageVariable(villageId, "remaining_sub_structures", substructures)
})

SNIPPET_NonPopCappedEntityDestroyed("ed_attack_sub_structures_destroyed", (entity, payload) => {
    const villageId = payload.ownerVillageId
    const substructures = DeltaVillageVariable(villageId, "remaining_sub_structures", -1)
    if (substructures === 0) {
        SetPortalInvulnerable(villageId, false)
    }
})

/* 
----------------------
>>>>> UNIT SETUP <<<<<
----------------------
*/
SNIPPET_EntitySpawned("es_pigmadilo_vo", (piglinEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(piglinEntity)
    const villageEntity = GetVillageEntityFromID(villageId)
    if (HasEntities(villageEntity)) {
        const line = ChooseFromArray(["piglin_big_unit_attack_1", "piglin_big_unit_attack_2", "piglin_big_unit_attack_3"])
        PlayPresentationActionToClosePlayers(line, villageEntity, 150)
        Once()
    }
})

SNIPPET_EntitySpawned("es_attack_thrower_spawned", (piglinEntity, payload) => {
    const villageId = payload.ownerVillageId
    AssignEntitiesToAI(villageId, piglinEntity, attackVal.aiConfig[attackHordeAI.defend])
    const closestPlayer = GetClosestPlayer(piglinEntity)
    if (HasEntities(closestPlayer)) {
        OUTPUT_MoveAttackEntity(piglinEntity, closestPlayer, CALLBACK_NONE)
    }
})

SNIPPET_VillageDestroyed("vd_attack_portal", (villageId, payload) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    const entitiesToClean = payload.entities
    OUTPUT_DespawnEntities(entitiesToClean)

    if (IsSmallOrGreater(baseSize)) {
        IncrementGlobal(attackVal.global.basesDestroyed)
    }

    if (IsLarge(baseSize)) {
        IncrementGlobal("attackFactionLargeBasesDestroyed")
    }

    const approachPortalTrigger = QUERY_GetEntitiesWithTags(["attackBasePortalTV" + villageId])
    if (QUERY_GetEntitiesCount(approachPortalTrigger) > 0) {
        OUTPUT_DespawnEntities(approachPortalTrigger)
    }

    // note: we don't play portal destruction cinematic here as that's handled with the badger:cinematic_death component

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, DECK_Empty())
    OUTPUT_SetNamedDeck(TICKET_BUILD_DECK_NAME + villageId, DECK_Empty())

    SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, attackVal.barracks, 0)
})

// --- Barracks complete ---
SNIPPET_BuildingComplete("bc_attack_fighter_barracks", (buildingEntity, _payload) => {
    SetBarracksConfigForVillageVariation(buildingEntity, FighterBarracksConfig_AttackFaction_Variations)
})

SNIPPET_BuildingComplete("bc_attack_disruptor_barracks", (buildingEntity, _payload) => {
    SetBarracksConfigForVillageVariation(buildingEntity, DisruptorBarracksConfig_AttackFaction_Variations)
})

SNIPPET_BuildingComplete("bc_attack_sieger_barracks", (buildingEntity, _payload) => {
    SetBarracksConfigForVillageVariation(buildingEntity, SiegerBarracksConfig_AttackFaction_Variations)
})

SNIPPET_BuildingComplete("bc_attack_specialist_barracks", (buildingEntity, _payload) => {
    SetBarracksConfigForVillageVariation(buildingEntity, SpecialistBarracksConfig_AttackFaction_Variations)
})

SNIPPET_BuildingComplete("bc_attack_defend_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const variationData = _GetAttackVariationData(villageId)
    RecruitSpawnedComposition(villageId, variationData.piglinRallyPoints["attackDefend"], buildingEntity, attackHordeAI.defend)
})

SNIPPET_BuildingComplete("bc_attack_siege_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const variationData = _GetAttackVariationData(villageId)
    RecruitSpawnedComposition(villageId, variationData.piglinRallyPoints["attackSiege"], buildingEntity, attackHordeAI.siege)
})

SNIPPET_BuildingComplete("bc_attack_patrol_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const variationData = _GetAttackVariationData(villageId)
    RecruitSpawnedComposition(villageId, variationData.piglinRallyPoints["attackPatrol"], buildingEntity, attackHordeAI.patrol)
})

const _CreateStartBattlePortalSpawns = (villageId) => {
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const variationData = _GetAttackVariationData(villageId)
    for (const key in variationData.startBattlePortalSpawns) {
        const startSpawnData = variationData.startBattlePortalSpawns[key]
        const aiConfig = attackVal.aiConfig[startSpawnData.ais[0][0]]
        const rallyPointTag = aiConfig.reinforcementPositionTagsToSearchFor
        const portal = GetVillagePortal(villageId)
        if (HasEntities(portal)) {
            const allRalyPointsOfTag = FILTER_ByTagFilter(villageEntities, rallyPointTag, [])
            if (HasEntities(allRalyPointsOfTag)) {
                const rallyPoint = RandomEntity(allRalyPointsOfTag)
                const newUnits = SpawnAtPortalInTheDirectionOfThePlayer(villageId, startSpawnData.unit, startSpawnData.batch)
                if (HasEntities(newUnits)) {
                    DistributeUnitsToAI(newUnits, startSpawnData.ais, attackVal.aiConfig)

                    if (HasEntities(rallyPoint)) {
                        OUTPUT_AddTag(newUnits, "Going To: " + aiConfig.reinforcementControlGroupTag)
                        OUTPUT_MoveAttackEntity(newUnits, rallyPoint, CALLBACK_NONE)
                    }
                }
            }
        }
    }
}

const _CreateRepeatedPortalSpawns = (villageId) => {
    const variationData = _GetAttackVariationData(villageId)
    for (const key in variationData.repeatedPortalSpawns) {
        const repatedSpawnData = variationData.repeatedPortalSpawns[key]
        LISTENFOR_LocalTimer({
            snippet: "lt_repeated_portal_spawn",
            ownerVillageId: villageId,
            waitTime: repatedSpawnData.rate,
            payloadString: key
        })
    }
}
SNIPPET_LocalTimer("lt_repeated_portal_spawn", (payload) => {
    const villageId = payload.ownerVillageId
    const key = payload.string
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const variationData = _GetAttackVariationData(villageId)
    const repatedSpawnData = variationData.repeatedPortalSpawns[key]
    const aiConfig = attackVal.aiConfig[repatedSpawnData.ais[0][0]]
    const rallyPointTag = aiConfig.reinforcementPositionTagsToSearchFor
    const portal = GetVillagePortal(payload.ownerVillageId)
    const units = FILTER_ByTagFilter(villageEntities, [GetTagForPiglinUnitType(repatedSpawnData.unit)], [])
    if (HasEntities(portal)) {
        const allRalyPointsOfTag = FILTER_ByTagFilter(villageEntities, rallyPointTag, [])
        if (HasEntities(allRalyPointsOfTag)) {
            const rallyPoint = RandomEntity(allRalyPointsOfTag)
            if (QUERY_GetEntitiesCount(units) < repatedSpawnData.cap) {
                const newUnits = SpawnAtPortalInTheDirectionOfThePlayer(villageId, repatedSpawnData.unit, repatedSpawnData.batch)
                if (HasEntities(newUnits)) {
                    DistributeUnitsToAI(newUnits, repatedSpawnData.ais, attackVal.aiConfig)
                    if (HasEntities(rallyPoint)) {
                        OUTPUT_AddTag(newUnits, "Going To: " + aiConfig.reinforcementControlGroupTag)
                        OUTPUT_MoveAttackEntity(newUnits, rallyPoint, CALLBACK_NONE)
                    }
                }
            }
        }
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_repeated_portal_spawn",
        ownerVillageId: villageId,
        waitTime: repatedSpawnData.rate,
        payloadString: key
    })
})

/*
-----------------------------
>>>>> INITIAL RESPONSES <<<<<
-----------------------------
*/
SNIPPET_SpatialPartitionEntered("spe_attack_general", (triggerEntity, intruderEntity, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    if (IsBaseEscalated(triggerEntity, attackVal.escalation.approached)) {
        return
    }
    const portalEntity = GetVillagePortal(villageId)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const variationData = _GetAttackVariationData(villageId)
    if (GetVillageVariable(villageId, villageId + "composition_listeners") === 0) {
        SetVillageVariable(villageId, villageId + "composition_listeners", 1)
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
        CreatePatrolTriggerVolumes(villageId)
        _CreateRepeatedPortalSpawns(villageId)
        _CreateStartBattlePortalSpawns(villageId)
    }

    if (IsStructureDestructionBase(villageId) && QUERY_GetGlobalVariable(piglinGeneralVal.globals.firstCoilCinePlayed) !== 0) {
        if (DoOnce(attackVal.global.hasVisitedCoilBase + villageId)) {
            SetPortalInvulnerable(villageId, true)
        }
    }

    if (IsSmallOrGreater(baseSize)) {
        if (IsStructureDestructionBase(villageId)) {
            if (DoOnce(piglinGeneralVal.globals.firstCoilCinePlayed)) {
                DoOnce(attackVal.global.hasVisitedCoilBase + villageId) // needed to make sure the lavacoils at the first base don't become re-invulnerable
                LISTENFOR_CinematicEvent({
                    snippet: "ce_attack_portal_shield_on",
                    ownerVillageId: villageId,
                    eventName: "portal_shield_on"
                })
                TriggerCinematicAndListenForFinish(attackVal.cinematic.shieldIntro, [intruderEntity], villageId)
            }
        } else {
            if (DoOnce(attackVal.global.hasVisited)) {
                TriggerCinematicAndListenForFinish(attackVal.cinematic.firstTimeNonShieldBaseIntro, [portalEntity, intruderEntity], villageId)
            } else {
                PlayBaseTooToughVO(villageId, 1)
            }
        }
        _AttackInitialEscalation(triggerEntity)
        CheckAndPlayInvasionActionOriginPointVO(villageId)
    }

    OUTPUT_SetObjectiveHealthBarVisible(portalEntity, true)
})

SNIPPET_CinematicEvent("ce_attack_portal_shield_on", (payload) => {
    SetPortalInvulnerable(payload.ownerVillageId, true)
    Once()
})

SNIPPET_PresenceEntered("spe_attack_gameplay", (triggerEntity, _count, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)

    // Check for whether the village needs to reset due to previous disengagement by the player.
    // At this point, all the popcapped entities in the base have already been culled.
    // The village will never be flagged for a reset while a player is in this spatial partition, so we only need to check when we enter.
    if (ShouldBaseReset(villageId)) {
        ResetEscalationAndBarracksForVillageVariation(villageId, attackVal.barracks, attackVal.escalation)
        ResetDiscreteEncounters(villageId)
        SetVillageVariable(villageId, "pigamdilo_bastion_spawn", 0)
        MarkBaseAsReset(villageId)
    }
})

// --- Player Built Structure Response ---
BASE_DeclarePlayerStructureBuiltResponseHandler("snippet_attack_player_built_anti_siege_tower", (villageId, _structure) => {
    _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.playerTier1StructureBuilt)
    const portal = GetVillagePortal(villageId)
    _playAttackTargetStinger(portal)
})

BASE_DeclarePlayerStructureBuiltResponseHandler("snippet_attack_player_built_key_spawner", (villageId, _structure) => {
    _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.playerTier1StructureBuilt)
    const portal = GetVillagePortal(villageId)
    _playAttackTargetStinger(portal)
})

BASE_DeclarePlayerStructureBuiltResponseHandler("snippet_attack_player_built_rsl", (villageId, _structure) => {
    _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.playerTier1StructureBuilt)
    const portal = GetVillagePortal(villageId)
    _playAttackTargetStinger(portal)
})

BASE_DeclarePlayerStructureBuiltResponseHandler("snippet_attack_player_built_upgrade_structure", (villageId, _structure) => {
    _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.playerTier1StructureBuilt)
    const portal = GetVillagePortal(villageId)
    _playAttackTargetStinger(portal)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("snippet_attack_piglin_elite_structure_damaged", (villageId, _structure) => {
    _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.tier3StructureDamaged)
    const portal = GetVillagePortal(villageId)
    _playAttackAttackStinger(portal)
})

//--- Building Destroyed Response ---

BASE_DeclarePiglinStructureDestroyedResponseHandler("snippet_attack_piglin_key_structure_destroyed", (villageId, structure) => {
    PlayCommonBuildingDestroyedVO()
    _AttackSecondEscalation(structure)
    _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.tier2StructureDestroyed)
})

BASE_DeclarePiglinStructureDestroyedResponseHandler("snippet_attack_piglin_elite_structure_destroyed", (villageId, structure) => {
    PlayCommonBuildingDestroyedVO()
    _AttackSecondEscalation(structure)
    _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.tier3StructureDestroyed)
})

BASE_DeclarePiglinStructureDestroyedResponseHandler("snippet_attack_piglin_barracks_structure_destroyed", (_villageId, structure) => {
    PlayCommonBuildingDestroyedVO()
    _AttackSecondEscalation(structure)
})

//Encouragement stinger for key buildings destroyed
BASE_DeclarePiglinStructureDestroyedResponseHandler("snippet_attack_piglin_structure_destroyed_stinger", (_villageId, structure) => {
    PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_ATTACK, "keepGoing"), structure)
})

//--- Portal Damage Reaction ---
BASE_DeclarePiglinStructureDamagedResponseHandler("snippet_attack_portal_damaged_high", (villageId, portalEntity) => {
    //Launch response
    _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.portalDamaged)

    //VO
    PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_ATTACK, "keepGoing"), portalEntity)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("snippet_attack_portal_damaged_medium", (villageId, portalEntity) => {
    //Launch response
    _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.portalDamaged)

    //VO
    PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_ATTACK, "keepGoing"), portalEntity)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("snippet_attack_portal_damaged_40", (villageId, portalEntity) => {
    //Launch response
    _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.portalDamaged)

    //VO
    PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_ATTACK, "hero"), portalEntity)
    PlayCommonPortalHealthGroup2VO(villageId)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("snippet_attack_portal_damaged_low", (villageId, portalEntity) => {
    //Launch response
    _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.portalDamaged)

    //VO
    PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_ATTACK, "hero"), portalEntity)
})

// --- Pigmadilo Spawns
BASE_DeclarePiglinStructureDamagedResponseHandler("snippet_attack_pigmadilo_spawn", (villageId, _portalEntity) => {
    //Launch response
    _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.pigmadiloSpawn)
})

BASE_DeclarePiglinStructureDestroyedResponseHandler("snippet_attack_piglin_structure_destroyed_pigmadilo_spawn", (villageId, _structure) => {
    _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.pigmadiloSpawn)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("snippet_attack_portal_damaged_low_escalate", (villageId, _portalEntity) => {
    SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, attackVal.barracks, 4)
})

BASE_DeclarePiglinMultipleStructuresDestroyedResponseHandler("snippet_attack_pigmadilo_multiple_key_structures_destroyed", (villageId, _lastStructure) => {
    if (GetVillageVariable(villageId, "pigamdilo_bastion_spawn") === 0) {
        _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.pigmadiloSpawn)
        SetVillageVariable(villageId, "pigamdilo_bastion_spawn", 1)
    }
})

//--- BASTION CHARGE Response ---
BASE_DeclarePiglinMultipleStructuresDestroyedResponseHandler("snippet_attack_piglin_multiple_key_structures_destroyed", (villageId, lastStructure) => {
    //Multiple building response here
    _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.multipleDestroyedStructures)
    if (HasEntities(lastStructure)) {
        PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_ATTACK, "tactic"), lastStructure)
    }
})

// --- ESCALATION 3 - Portal Approached ---
SNIPPET_SpatialPartitionEntered("spe_attack_approach_portal", (triggerEntity, _intruderEntity, payload) => {
    if (!IsBaseEscalated(triggerEntity, attackVal.escalation.portalApproached)) {
        MarkBaseAsEscalated(triggerEntity, attackVal.escalation.portalApproached)

        const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
        if (QUERY_GetEntitiesCount(GetVillagePortal(villageId)) < 1) {
            return
        }

        _AttackSpawnUnitAtPortalForEscalation(villageId, attackResponse.escalation3)

        SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, attackVal.barracks, 3)

        SetAudioPhaseForBase(villageId, attackVal.audioPerPhaseArray[3])

        //VO
        PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_ATTACK, "keepGoing"), payload.entities)
        PlayPresentationActionToAll(ChooseFromArray(attackVal.VO.escalation))
    }
})

SNIPPET_EntitySpawned("es_set_appearance_to_attack_faction_piglins", (piglinEntity) => {
    OUTPUT_OverrideFactionAppearanceByName(piglinEntity, FACTION_NAME_ATTACK)
})

// ==== VO ====
SNIPPET_CinematicFinished(`cf_${attackVal.cinematic.firstTimeNonShieldBaseIntro}`, (payload) => {
    const portal = GetVillagePortal(payload.ownerVillageId)
    PlayPresentationActionToClosePlayers(attackVal.VO.postIntroVO, portal)
    UnlockJournalEntry(JOURNAL_UNLOCKS.HORDE_ATTACK_FACTION)

    PlayBaseTooToughVO(payload.ownerVillageId, 7)
    HandleRSLOnboarding(payload.ownerVillageId)
})

SNIPPET_CinematicFinished(`cf_${attackVal.cinematic.shieldIntro}`, (payload) => {
    const portal = GetVillagePortal(payload.ownerVillageId)
    PlayPresentationActionToClosePlayers(attackVal.VO.postShieldIntroVO, portal)
    PlayBaseTooToughVO(payload.ownerVillageId, 10)
    HandleRSLOnboarding(payload.ownerVillageId)
})

SNIPPET_SpatialPartitionEntered("spe_attack_outpost", () => {
    if (QUERY_GetGlobalVariable("outpostVisited") === 0) {
        OUTPUT_SetGlobalVariable("outpostVisited", 1)
    }
})

const _playAttackAttackStinger = (portal) => {
    if (HasEntities(portal)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_attack", portal)
    }
}

const _playAttackTargetStinger = (portal) => {
    if (HasEntities(portal)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_target", portal)
    }
}

// TELEMETRY

SetupDefaultTelemetryForPiglinBase(FACTION_NAME_ATTACK)
