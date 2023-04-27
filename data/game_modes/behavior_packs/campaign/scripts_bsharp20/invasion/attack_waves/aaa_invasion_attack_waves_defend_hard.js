/* eslint-disable @typescript-eslint/camelcase */
// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const invasionAttackV2_defendWaveDefinitions_hard = {
    runts: [{ unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 30 }],
    grunters: [{ unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 30 }],
    bruisers: [{ unit: PIGLIN_ARCHETYPE.BRUISER, delay: 0, count: 10 }],
    portalguards: [{ unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }],
    runtsGrunters: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 24 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 10 }
    ],
    runtsMedics: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 24 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 4 }
    ],
    gruntersMedics: [
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 24 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 4 }
    ],
    gruntersBruisers: [
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 0, count: 6 }
    ],
    runtsBruisers: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 0, count: 6 }
    ],
    bruisersMedics: [
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 0, count: 10 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 4 }
    ],
    runtsGruntersMedics: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 7 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 4 }
    ],
    runtsGruntersBruisers: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 10 },
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 0, count: 6 }
    ],
    gruntersBruisersMedics: [
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 2, count: 5 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 4 }
    ],
    runtsBruisersMedics: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 2, count: 6 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 4 }
    ],
    runtsGruntersBruisersMedics: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 10 },
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 2, count: 5 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 2 }
    ],
    //New Engineer variants for improved sieging capabilities. General thought is to go light on engineers, since they can be pretty potent in large quantities.
    runtsEngineers: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 20 },
        { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 1 }
    ],
    gruntersEngineers: [
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 20 },
        { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 1 }
    ],
    //Defend horde specific engineer comps, note there are other specific comps with tier 3 units spelled out explicitly below
    runtsMedicsEngineers: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 6, count: 4 },
        { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 1 }
    ],
    gruntersMedicsEngineers: [
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 14 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 4, count: 4 },
        { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 1 }
    ],
    bruisersMedicsEngineers: [
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 0, count: 8 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 4, count: 4 },
        { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 1 }
    ]
}

/*
------ Wave variations data is in format (A or B) ------
A.
audioPhase: (string)
nextWaveTime (optional): (number),
groups: 1,
unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.(unitGroup), multiplier: (number) }
B.
nextWaveTime (optional): (number),
groups: (number)),
units: [
    { unit: (unit type 1, eg. PIGLIN_ARCHETYPE.RUNT), delay: (number), count: (number) },
    { unit: (unit type 1, eg. PIGLIN_ARCHETYPE.RUNT), delay: (number), count: (number) },
    ...
]
*/

// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const invasionAttackV2_waveConfig_defendFaction_hard = [
    /*
    --------------------
    ---- STRENGTH 1 ----
    --------------------
    */
    {
        strength: 1,
        defaultWaveTime: 34,
        music: "badger:music_combat_defend_village_small_1",
        mainWaves: [
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE0,
                amount: 2,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runts, multiplier: 1.2 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.grunters, multiplier: 1.2 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsMedics, multiplier: 1.2 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 2,
                variations: [
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.bruisers, multiplier: 1.4 }
                    },
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersBruisers, multiplier: 1.5 }
                    },
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsBruisers, multiplier: 1.5 }
                    },
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.bruisersMedics, multiplier: 1.5 }
                    },
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsEngineers, multiplier: 1.5 }
                    },
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersEngineers, multiplier: 1.5 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 2,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersMedics, multiplier: 1.6 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsMedics, multiplier: 1.6 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsGruntersMedics, multiplier: 1.6 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsMedicsEngineers, multiplier: 1.6 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersMedicsEngineers, multiplier: 1.6 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE2,
                amount: 1,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersBruisersMedics, multiplier: 1.7 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsBruisersMedics, multiplier: 1.7 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.bruisersMedicsEngineers, multiplier: 1.7 }
                    }
                ]
            }
        ],
        recurringAudioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
        recurringWaves: [
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersMedics, multiplier: 1.9 }
            },
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsMedics, multiplier: 1.9 }
            },
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsGrunters, multiplier: 1.9 }
            },
            {
                groups: 3,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.bruisers, multiplier: 1.8 }
            },
            {
                groups: 3,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersBruisers, multiplier: 1.8 }
            },
            {
                groups: 3,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsBruisers, multiplier: 1.8 }
            },
            {
                groups: 3,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsMedicsEngineers, multiplier: 1.8 }
            },
            {
                groups: 3,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersMedicsEngineers, multiplier: 1.8 }
            },
            {
                groups: 3,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.bruisersMedicsEngineers, multiplier: 1.8 }
            }
        ],
        overtimeSetup: {
            minimumCount: 30,
            fillerUnit: PIGLIN_ARCHETYPE.RUNT,
            maxOvertimePiglinsToDefeat: 100
        }
    },
    /*
    --------------------
    ---- STRENGTH 2 ----
    --------------------
    */
    {
        strength: 2,
        defaultWaveTime: 33,
        music: "badger:music_combat_defend_village_medium_1",
        mainWaves: [
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE0,
                amount: 2,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsGrunters, multiplier: 1.6 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsBruisers, multiplier: 1.6 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersBruisers, multiplier: 1.7 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 2,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.bruisers, multiplier: 1.8 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersBruisersMedics, multiplier: 1.8 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsBruisers, multiplier: 1.9 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsEngineers, multiplier: 1.9 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersEngineers, multiplier: 1.9 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE2,
                amount: 1,
                variations: [
                    {
                        groups: 2,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 25 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 2,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 4, count: 25 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 2,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 4, count: 12 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 2,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 4, count: 8 },
                            { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 2 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                        ]
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
                amount: 2,
                variations: [
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersBruisersMedics, multiplier: 2.2 }
                    },
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsBruisersMedics, multiplier: 2.3 }
                    },
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsGruntersMedics, multiplier: 2.6 }
                    },
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsMedicsEngineers, multiplier: 2.6 }
                    },
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersMedicsEngineers, multiplier: 2.6 }
                    },
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.bruisersMedicsEngineers, multiplier: 2.6 }
                    }
                ]
            }
        ],
        recurringAudioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
        recurringWaves: [
            {
                groups: 3,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsGrunters, multiplier: 3.1 }
            },
            {
                groups: 3,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsGruntersBruisers, multiplier: 2.3 }
            },
            {
                groups: 3,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsGruntersBruisersMedics, multiplier: 2.3 }
            },
            {
                groups: 3,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersBruisersMedics, multiplier: 2.1 }
            },
            {
                groups: 3,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsGruntersMedics, multiplier: 2.2 }
            },
            {
                groups: 3,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.bruisersMedics, multiplier: 2.2 }
            },
            {
                groups: 3,
                nextWaveTime: 40,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.portalguards, multiplier: 2.1 }
            },
            {
                groups: 3,
                nextWaveTime: 40,
                units: [
                    { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 2, count: 32 },
                    { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 3, count: 9 },
                    { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                ]
            },
            {
                groups: 3,
                nextWaveTime: 40,
                units: [
                    { unit: PIGLIN_ARCHETYPE.RUNT, delay: 2, count: 33 },
                    { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 3, count: 8 },
                    { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                ]
            },
            {
                groups: 3,
                nextWaveTime: 40,
                units: [
                    { unit: PIGLIN_ARCHETYPE.RUNT, delay: 2, count: 24 },
                    { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 3, count: 8 },
                    { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 3, count: 2 },
                    { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                ]
            }
        ],
        overtimeSetup: {
            minimumCount: 35,
            fillerUnit: PIGLIN_ARCHETYPE.RUNT,
            maxOvertimePiglinsToDefeat: 100
        }
    },
    /*
    --------------------
    ---- STRENGTH 3 ----
    --------------------
    */
    {
        strength: 3,
        defaultWaveTime: 32,
        music: "badger:music_combat_defend_village_large_1",
        mainWaves: [
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE0,
                amount: 1,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsGruntersBruisersMedics, multiplier: 2.2 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersBruisersMedics, multiplier: 2.4 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.bruisersMedics, multiplier: 2.2 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.bruisersMedicsEngineers, multiplier: 2.2 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 1,
                variations: [
                    {
                        groups: 2,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 3, count: 14 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 2,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 2, count: 12 },
                            { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 4, count: 4 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 2,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 2, count: 32 },
                            { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 6 },
                            { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 5 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 2,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 2, count: 8 },
                            { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 4, count: 4 },
                            { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 2 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                        ]
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 1,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersMedics, multiplier: 3 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsMedics, multiplier: 3 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsGruntersMedics, multiplier: 3 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersMedicsEngineers, multiplier: 3 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.bruisersMedicsEngineers, multiplier: 3 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 2,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsBruisersMedics, multiplier: 2.6 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsGruntersBruisers, multiplier: 2.6 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersBruisersMedics, multiplier: 2.4 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersBruisersMedics, multiplier: 2.4 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersMedicsEngineers, multiplier: 2.4 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.bruisersMedicsEngineers, multiplier: 2.4 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE2,
                amount: 1,
                variations: [
                    {
                        groups: 2,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 3, count: 14 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 2,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 2, count: 12 },
                            { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 4, count: 4 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 2,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 2, count: 32 },
                            { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 6 },
                            { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 5 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                        ]
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE2,
                amount: 2,
                variations: [
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsGruntersBruisersMedics, multiplier: 3.2 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsBruisersMedics, multiplier: 3.2 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersBruisersMedics, multiplier: 3.2 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
                amount: 1,
                variations: [
                    {
                        groups: 3,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 2, count: 36 },
                            { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 2, count: 26 },
                            { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 3, count: 8 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 },
                            { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 4, count: 4 }
                        ]
                    },
                    {
                        groups: 3,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 2, count: 42 },
                            { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 2, count: 32 },
                            { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 4, count: 6 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 3,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 2, count: 24 },
                            { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 2, count: 28 },
                            { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 4, count: 4 },
                            { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 3 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 2,
                        nextWaveTime: 40,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.portalguards, multiplier: 2 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
                amount: 1,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersMedics, multiplier: 3 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsMedics, multiplier: 3 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsGruntersMedics, multiplier: 3 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsEngineers, multiplier: 3 }
                    }
                ]
            }
        ],
        recurringAudioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
        recurringWaves: [
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsGruntersMedics, multiplier: 4.2 }
            },
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsGruntersBruisers, multiplier: 4.2 }
            },
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.gruntersBruisersMedics, multiplier: 4.2 }
            },
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsBruisers, multiplier: 4.2 }
            },
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsBruisersMedics, multiplier: 4.2 }
            },
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.runtsGruntersBruisersMedics, multiplier: 4.4 }
            },
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.bruisersMedicsEngineers, multiplier: 4 }
            },
            {
                groups: 3,
                nextWaveTime: 40,
                units: [
                    { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 2, count: 35 },
                    { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 2, count: 32 },
                    { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 4, count: 6 },
                    { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                ]
            },
            {
                groups: 3,
                nextWaveTime: 40,
                units: [
                    { unit: PIGLIN_ARCHETYPE.RUNT, delay: 2, count: 30 },
                    { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 2, count: 12 },
                    { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 4, count: 6 },
                    { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }
                ]
            },
            {
                groups: 3,
                nextWaveTime: 40,
                units: [
                    { unit: PIGLIN_ARCHETYPE.RUNT, delay: 2, count: 38 },
                    { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 2, count: 22 },
                    { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 3, count: 8 },
                    { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 },
                    { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 4, count: 5 }
                ]
            },
            {
                groups: 2,
                nextWaveTime: 40,
                units: [
                    { unit: PIGLIN_ARCHETYPE.RUNT, delay: 2, count: 40 },
                    { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 3, count: 8 },
                    { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 3, count: 3 },
                    { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 },
                    { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 4, count: 5 }
                ]
            },
            {
                groups: 2,
                nextWaveTime: 40,
                units: [
                    { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 2, count: 20 },
                    { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 3, count: 16 },
                    { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 3, count: 3 },
                    { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 },
                    { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 4, count: 5 }
                ]
            },
            {
                groups: 2,
                nextWaveTime: 40,
                unitPreset: { preset: invasionAttackV2_defendWaveDefinitions_hard.portalguards, multiplier: 2 }
            },
            {
                groups: 2,
                nextWaveTime: 40,
                units: [
                    { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 4, count: 8 },
                    { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 2 },
                    { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 6, count: 8 }
                ]
            }
        ],
        overtimeSetup: {
            minimumCount: 40,
            fillerUnit: PIGLIN_ARCHETYPE.RUNT,
            maxOvertimePiglinsToDefeat: 100
        }
    }
]

RegisterDifficultyConfig("invasion_attack_wave_config_defend_faction", invasionAttackV2_waveConfig_defendFaction_hard, GAME_DIFFICULTY.hard)
