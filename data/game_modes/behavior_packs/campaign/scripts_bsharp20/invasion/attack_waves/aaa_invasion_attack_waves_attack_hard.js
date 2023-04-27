/* eslint-disable @typescript-eslint/camelcase */
// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const invasionAttackV2_attackWaveDefinitions_hard = {
    runts: [{ unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 22 }],
    grunters: [{ unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 22 }],
    warboars: [{ unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 0, count: 6 }],
    pigmadilos: [{ unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }],
    seekers: [{ unit: PIGLIN_ARCHETYPE.SEEKER, delay: 0, count: 4 }],
    runtsGrunters: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 18 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 6, count: 8 }
    ],
    runtsMedics: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 20 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 3 }
    ],
    gruntersMedics: [
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 20 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 3 }
    ],
    runtsGruntersMedics: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 7 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 3 }
    ],
    runtsSeekers: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 20 },
        { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 2 }
    ],
    gruntersSeekers: [
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 20 },
        { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 2 }
    ],
    gruntersWarboars: [
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 14 },
        { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 0, count: 4 }
    ],
    gruntersWarboarsMedics: [
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 14 },
        { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 0, count: 4 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 3 }
    ],
    runtsWarboars: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 3, count: 16 },
        { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 0, count: 4 }
    ],
    runtsWarboarsMedics: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 3, count: 16 },
        { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 0, count: 4 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 3 }
    ],
    warboarsSeekers: [
        { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 0, count: 6 },
        { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 2 }
    ],
    runtsGruntersSeekers: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 14 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 12 },
        { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 2 }
    ],
    runtsGruntersWarboars: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 2, count: 14 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 10 },
        { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 0, count: 3 }
    ],
    runtsGruntersWarboarsMedics: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 2, count: 14 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 10 },
        { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 0, count: 3 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 2 }
    ],
    gruntersWarboarsSeekers: [
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 14 },
        { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 0, count: 3 },
        { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 2 }
    ],
    runtsWarboarsSeekers: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 2, count: 18 },
        { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 0, count: 3 },
        { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 2 }
    ],
    runtsGruntersWarboarsSeekers: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 2, count: 13 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 8 },
        { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 0, count: 3 },
        { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 2 }
    ],
    runtsGruntersWarboarsSeekersMedics: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 2, count: 13 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 8 },
        { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 0, count: 3 },
        { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 2 },
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
    //Attack horde specific engineer comps, note there are other specific comps with tier 3 units spelled out explicitly below
    runtsSeekersEngineers: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 12, count: 2 },
        { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 1 }
    ],
    runtsWarboarsEngineers: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 14 },
        { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 0, count: 4 },
        { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 1 }
    ]
}

/*
------ Wave variations data is in format (A or B) ------
A.
audioPhase: (string)
nextWaveTime (optional): (number),
groups: 1,
unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.(unitGroup), multiplier: (number) }
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
const invasionAttackV2_waveConfig_attackFaction_hard = [
    /*
    --------------------
    ---- STRENGTH 1 ----
    --------------------
    */
    {
        strength: 1,
        defaultWaveTime: 28,
        music: "badger:music_combat_attack_village_small_1",
        mainWaves: [
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE0,
                amount: 1,
                variations: [
                    {
                        groups: 1,
                        nextWaveTime: 28,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGrunters, multiplier: 1 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 28,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsMedics, multiplier: 1 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 28,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersMedics, multiplier: 1 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 28,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsEngineers, multiplier: 1 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 2,
                variations: [
                    {
                        groups: 1,
                        nextWaveTime: 26,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboars, multiplier: 1 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 26,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsMedics, multiplier: 1 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 26,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersWarboars, multiplier: 1 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 26,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsEngineers, multiplier: 1 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 2,
                variations: [
                    {
                        groups: 1,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGrunters, multiplier: 1.4 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersMedics, multiplier: 1.5 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersSeekers, multiplier: 1.5 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersWarboars, multiplier: 1.5 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersWarboarsMedics, multiplier: 1.5 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsSeekersEngineers, multiplier: 1.5 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsEngineers, multiplier: 1.5 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE2,
                amount: 1,
                variations: [
                    {
                        groups: 2,
                        nextWaveTime: 23,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsSeekers, multiplier: 1.6 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 23,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersSeekers, multiplier: 1.7 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 23,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsEngineers, multiplier: 1.6 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 23,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersEngineers, multiplier: 1.7 }
                    }
                ]
            }
        ],
        recurringAudioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
        recurringWaves: [
            {
                groups: 2,
                nextWaveTime: 22,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersMedics, multiplier: 1.9 }
            },
            {
                groups: 2,
                nextWaveTime: 22,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboars, multiplier: 1.9 }
            },
            {
                groups: 2,
                nextWaveTime: 22,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsMedics, multiplier: 1.9 }
            },
            {
                groups: 2,
                nextWaveTime: 22,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGrunters, multiplier: 1.7 }
            },
            {
                groups: 2,
                nextWaveTime: 22,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersWarboars, multiplier: 1.9 }
            },
            {
                groups: 2,
                nextWaveTime: 22,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersWarboarsMedics, multiplier: 1.9 }
            },
            {
                groups: 2,
                nextWaveTime: 22,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersSeekers, multiplier: 1.7 }
            },
            {
                groups: 2,
                nextWaveTime: 22,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsSeekersEngineers, multiplier: 1.9 }
            },
            {
                groups: 2,
                nextWaveTime: 22,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsEngineers, multiplier: 1.9 }
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
        defaultWaveTime: 26,
        music: "badger:music_combat_attack_village_medium_1",
        mainWaves: [
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE0,
                amount: 2,
                variations: [
                    {
                        groups: 2,
                        nextWaveTime: 26,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGrunters, multiplier: 1.5 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 26,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.warboarsSeekers, multiplier: 1.4 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 26,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.warboars, multiplier: 1.4 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 26,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsEngineers, multiplier: 1.4 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 2,
                variations: [
                    {
                        groups: 2,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersSeekers, multiplier: 1.8 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersWarboarsSeekers, multiplier: 1.8 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboars, multiplier: 1.7 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsMedics, multiplier: 1.7 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsSeekersEngineers, multiplier: 1.7 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsEngineers, multiplier: 1.7 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE2,
                amount: 1,
                variations: [
                    {
                        groups: 2,
                        nextWaveTime: 22,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 2, count: 22 },
                            { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 8, count: 18 },
                            { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 2,
                        nextWaveTime: 22,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 28 },
                            { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 1,
                        nextWaveTime: 22,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 4, count: 28 },
                            { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 1,
                        nextWaveTime: 22,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 4, count: 14 },
                            { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 2 },
                            { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
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
                        nextWaveTime: 21,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsSeekers, multiplier: 2.6 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 21,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGrunters, multiplier: 2.6 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 21,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.warboarsSeekers, multiplier: 2.3 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 21,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsSeekersEngineers, multiplier: 2.3 }
                    }
                ]
            }
        ],
        recurringAudioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
        recurringWaves: [
            {
                groups: 3,
                nextWaveTime: 20,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runts, multiplier: 3 }
            },
            {
                groups: 3,
                nextWaveTime: 20,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.grunters, multiplier: 3 }
            },
            {
                groups: 3,
                nextWaveTime: 20,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsMedics, multiplier: 3 }
            },
            {
                groups: 3,
                nextWaveTime: 20,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersMedics, multiplier: 3 }
            },
            {
                groups: 3,
                nextWaveTime: 20,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGrunters, multiplier: 3 }
            },
            {
                groups: 3,
                nextWaveTime: 20,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersWarboars, multiplier: 2.6 }
            },
            {
                groups: 3,
                nextWaveTime: 20,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersWarboarsMedics, multiplier: 2.6 }
            },
            {
                groups: 3,
                nextWaveTime: 20,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboars, multiplier: 2.7 }
            },
            {
                groups: 3,
                nextWaveTime: 20,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsMedics, multiplier: 2.7 }
            },
            {
                groups: 2,
                nextWaveTime: 20,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersSeekers, multiplier: 3 }
            },
            {
                groups: 2,
                nextWaveTime: 20,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsSeekers, multiplier: 3 }
            },
            {
                groups: 2,
                nextWaveTime: 20,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersWarboarsSeekers, multiplier: 2.6 }
            },
            {
                groups: 3,
                nextWaveTime: 20,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsEngineers, multiplier: 3 }
            },
            {
                groups: 2,
                nextWaveTime: 20,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersEngineers, multiplier: 3 }
            },
            {
                groups: 2,
                nextWaveTime: 20,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsSeekersEngineers, multiplier: 3 }
            },
            {
                groups: 2,
                nextWaveTime: 20,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsEngineers, multiplier: 3 }
            },
            {
                groups: 2,
                nextWaveTime: 20,
                units: [
                    { unit: PIGLIN_ARCHETYPE.RUNT, delay: 4, count: 20 },
                    { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 4 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                ]
            },
            {
                groups: 1,
                nextWaveTime: 20,
                units: [
                    { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 26 },
                    { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 4 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                ]
            },
            {
                groups: 1,
                nextWaveTime: 20,
                units: [
                    { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 4, count: 15 },
                    { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 4 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                ]
            },
            {
                groups: 1,
                nextWaveTime: 20,
                units: [
                    { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 4, count: 15 },
                    { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 10, count: 2 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
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
        defaultWaveTime: 24,
        music: "badger:music_combat_attack_village_large_1",
        mainWaves: [
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE0,
                amount: 2,
                variations: [
                    {
                        groups: 2,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGrunters, multiplier: 2.4 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersMedics, multiplier: 2.4 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.warboarsSeekers, multiplier: 2.4 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboars, multiplier: 2.2 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsMedics, multiplier: 2.2 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsSeekersEngineers, multiplier: 2 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 24,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsEngineers, multiplier: 2 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 1,
                variations: [
                    {
                        groups: 2,
                        nextWaveTime: 22,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 12 },
                            { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 2,
                        nextWaveTime: 22,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 4, count: 32 },
                            { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 2,
                        nextWaveTime: 22,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 32 },
                            { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 1,
                        nextWaveTime: 22,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 3 },
                            { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                        ]
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 2,
                variations: [
                    {
                        groups: 2,
                        nextWaveTime: 22,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.seekers, multiplier: 2.8 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 22,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersWarboarsSeekers, multiplier: 2.6 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 22,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.warboarsSeekers, multiplier: 2.5 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 22,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsSeekersEngineers, multiplier: 2.5 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 2,
                variations: [
                    {
                        groups: 3,
                        nextWaveTime: 21,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGrunters, multiplier: 3.2 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 21,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersWarboars, multiplier: 3 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 21,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboars, multiplier: 3 }
                    },
                    {
                        groups: 1,
                        nextWaveTime: 21,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsMedics, multiplier: 3 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE2,
                amount: 1,
                variations: [
                    {
                        groups: 3,
                        nextWaveTime: 20,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 4, count: 32 },
                            { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 3,
                        nextWaveTime: 20,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 3, count: 22 },
                            { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 12 },
                            { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 3 },
                            { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 },
                            { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 2 }
                        ]
                    },
                    {
                        groups: 3,
                        nextWaveTime: 20,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 4, count: 24 },
                            { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 6, count: 20 },
                            { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 3 },
                            { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                        ]
                    },
                    {
                        groups: 2,
                        nextWaveTime: 20,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 4, count: 24 },
                            { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 2, count: 4 },
                            { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 2 }
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
                        nextWaveTime: 20,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersWarboarsSeekers, multiplier: 3.6 }
                    },
                    {
                        groups: 3,
                        nextWaveTime: 20,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersWarboarsMedics, multiplier: 3.6 }
                    },
                    {
                        groups: 3,
                        nextWaveTime: 20,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersWarboarsSeekersMedics, multiplier: 3.6 }
                    },
                    {
                        groups: 3,
                        nextWaveTime: 20,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsSeekers, multiplier: 3.6 }
                    },
                    {
                        groups: 3,
                        nextWaveTime: 20,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersSeekers, multiplier: 3.6 }
                    }
                ]
            }
        ],
        recurringAudioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
        recurringWaves: [
            {
                groups: 3,
                nextWaveTime: 18,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGrunters, multiplier: 3.8 }
            },
            {
                groups: 3,
                nextWaveTime: 18,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsSeekers, multiplier: 4.2 }
            },
            {
                groups: 3,
                nextWaveTime: 18,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersMedics, multiplier: 3.8 }
            },
            {
                groups: 3,
                nextWaveTime: 18,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersMedics, multiplier: 4.2 }
            },
            {
                groups: 3,
                nextWaveTime: 18,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersWarboars, multiplier: 4 }
            },
            {
                groups: 3,
                nextWaveTime: 18,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersSeekers, multiplier: 3.5 }
            },
            {
                groups: 3,
                nextWaveTime: 18,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersWarboars, multiplier: 3.5 }
            },
            {
                groups: 3,
                nextWaveTime: 18,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersWarboarsMedics, multiplier: 3.5 }
            },
            {
                groups: 3,
                nextWaveTime: 18,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersSeekers, multiplier: 3.5 }
            },
            {
                groups: 3,
                nextWaveTime: 18,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersWarboarsSeekers, multiplier: 3.5 }
            },
            {
                groups: 3,
                nextWaveTime: 18,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsGruntersWarboarsSeekersMedics, multiplier: 3.5 }
            },
            {
                groups: 3,
                nextWaveTime: 18,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsSeekersEngineers, multiplier: 3.5 }
            },
            {
                groups: 3,
                nextWaveTime: 18,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsEngineers, multiplier: 3.5 }
            },
            {
                groups: 3,
                nextWaveTime: 18,
                units: [
                    { unit: PIGLIN_ARCHETYPE.RUNT, delay: 3, count: 36 },
                    { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 24 },
                    { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 6 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 2 },
                    { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 6 },
                    { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 4 }
                ]
            },
            {
                groups: 3,
                nextWaveTime: 18,
                units: [
                    { unit: PIGLIN_ARCHETYPE.RUNT, delay: 4, count: 36 },
                    { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 9 },
                    { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 6 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 2 }
                ]
            },
            {
                groups: 3,
                nextWaveTime: 18,
                units: [
                    { unit: PIGLIN_ARCHETYPE.RUNT, delay: 4, count: 45 },
                    { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 6, count: 30 },
                    { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 6 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                ]
            },
            {
                groups: 3,
                nextWaveTime: 18,
                units: [
                    { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 45 },
                    { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 6 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                ]
            },
            {
                groups: 3,
                nextWaveTime: 18,
                units: [
                    { unit: PIGLIN_ARCHETYPE.RUNT, delay: 3, count: 36 },
                    { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 24 },
                    { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 8 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 },
                    { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 6 }
                ]
            },
            {
                groups: 2,
                nextWaveTime: 18,
                units: [
                    { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 3, count: 4 },
                    { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 24 },
                    { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 8 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 2 },
                    { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 6 }
                ]
            },
            {
                groups: 2,
                nextWaveTime: 18,
                units: [
                    { unit: PIGLIN_ARCHETYPE.RUNT, delay: 4, count: 24 },
                    { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 24 },
                    { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 3, count: 4 },
                    { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 16 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 2 }
                ]
            }
        ],
        overtimeSetup: {
            minimumCount: 40,
            fillerUnit: PIGLIN_ARCHETYPE.RUNT,
            maxOvertimePiglinsToDefeat: 100
        }
    },
    /*
    --------------------
    ---- STRENGTH 4 ----
    --------------------
    */
    {
        strength: 4,
        defaultWaveTime: 30,
        music: "badger:music_combat_attack_village_large_1",
        mainWaves: [
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE0,
                amount: 2,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsSeekers, multiplier: 3.7 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 2,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersWarboars, multiplier: 3.7 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 1,
                variations: [
                    {
                        groups: 3,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 16 },
                            { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 3 }
                        ]
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 1,
                variations: [
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboars, multiplier: 3.7 }
                    },
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsMedics, multiplier: 3.7 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE2,
                amount: 2,
                variations: [
                    {
                        groups: 3,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 36 },
                            { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 3 }
                        ]
                    },
                    {
                        groups: 3,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 4, count: 36 },
                            { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 3 }
                        ]
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
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 3, count: 36 },
                            { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 24 },
                            { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 6 },
                            { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 2 },
                            { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 8 },
                            { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 4 }
                        ]
                    }
                ]
            }
        ],
        recurringAudioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
        recurringWaves: [
            {
                groups: 3,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsSeekers, multiplier: 4.3 }
            },
            {
                groups: 3,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.gruntersWarboars, multiplier: 4.3 }
            },
            {
                groups: 3,
                units: [
                    { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 20 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 4 }
                ]
            },
            {
                groups: 3,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboars, multiplier: 4.3 }
            },
            {
                groups: 3,
                unitPreset: { preset: invasionAttackV2_attackWaveDefinitions_hard.runtsWarboarsMedics, multiplier: 4.3 }
            },
            {
                groups: 3,
                units: [
                    { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 20 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 2 }
                ]
            },
            {
                groups: 3,
                units: [
                    { unit: PIGLIN_ARCHETYPE.RUNT, delay: 4, count: 28 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 2 }
                ]
            },
            {
                groups: 3,
                units: [
                    { unit: PIGLIN_ARCHETYPE.RUNT, delay: 3, count: 48 },
                    { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 24 },
                    { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 7 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 },
                    { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 4 }
                ]
            },
            {
                groups: 3,
                units: [
                    { unit: PIGLIN_ARCHETYPE.RUNT, delay: 4, count: 48 },
                    { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 12 },
                    { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 8 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                ]
            },
            {
                groups: 3,
                units: [
                    { unit: PIGLIN_ARCHETYPE.RUNT, delay: 4, count: 45 },
                    { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 6, count: 24 },
                    { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 12 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                ]
            },
            {
                groups: 3,
                units: [
                    { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 45 },
                    { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 6 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 }
                ]
            },
            {
                groups: 3,
                units: [
                    { unit: PIGLIN_ARCHETYPE.RUNT, delay: 3, count: 47 },
                    { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 24 },
                    { unit: PIGLIN_ARCHETYPE.WARBOAR, delay: 2, count: 6 },
                    { unit: PIGLIN_ARCHETYPE.PIGMADILO, delay: 0, count: 1 },
                    { unit: PIGLIN_ARCHETYPE.SEEKER, delay: 10, count: 4 },
                    { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 5, count: 4 }
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

RegisterDifficultyConfig("invasion_attack_wave_config_attack_faction", invasionAttackV2_waveConfig_attackFaction_hard, GAME_DIFFICULTY.hard)
