/* eslint-disable @typescript-eslint/camelcase */
// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const invasionAttackV2_dbbWaveDefinitions_hard = {
    runts: [{ unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 20 }],
    grunters: [{ unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 20 }],
    runtsGrunters: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 8 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 12 }
    ]
}

/*
------ Wave variations data is in format (A or B) ------
A.
audioPhase: (string)
nextWaveTime (optional): (number),
groups: 1,
unitPreset: { preset: invasionAttackV2_obstacleWaveDefinitions.(unitGroup), multiplier: (number) }
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
const invasionAttackV2_waveConfig_dbbFaction_hard = [
    /*
    --------------------
    ---- STRENGTH 1 ----
    --------------------
    */
    {
        strength: 1,
        defaultWaveTime: 38,
        music: "badger:music_combat_obstacle_village_small_1",
        mainWaves: [
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE0,
                amount: 1,
                nextWaveTime: 30,
                variations: [
                    {
                        groups: 1,
                        unitPreset: { preset: invasionAttackV2_dbbWaveDefinitions_hard.runts, multiplier: 1 }
                    },
                    {
                        groups: 1,
                        unitPreset: { preset: invasionAttackV2_dbbWaveDefinitions_hard.grunters, multiplier: 1 }
                    },
                    {
                        groups: 1,
                        unitPreset: { preset: invasionAttackV2_dbbWaveDefinitions_hard.runtsGrunters, multiplier: 1 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 1,
                variations: [
                    {
                        groups: 1,
                        unitPreset: { preset: invasionAttackV2_dbbWaveDefinitions_hard.runtsGrunters, multiplier: 1.3 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE2,
                amount: 1,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_dbbWaveDefinitions_hard.runts, multiplier: 1.5 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_dbbWaveDefinitions_hard.grunters, multiplier: 1.5 }
                    }
                ]
            }
        ],
        recurringAudioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
        recurringWaves: [
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_dbbWaveDefinitions_hard.runts, multiplier: 1.5 }
            },
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_dbbWaveDefinitions_hard.grunters, multiplier: 1.5 }
            },
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_dbbWaveDefinitions_hard.runtsGrunters, multiplier: 1.5 }
            }
        ],
        overtimeSetup: {
            minimumCount: 18,
            fillerUnit: PIGLIN_ARCHETYPE.RUNT,
            maxOvertimePiglinsToDefeat: 100
        }
    }
]

RegisterDifficultyConfig("invasion_attack_wave_config_dbb_faction", invasionAttackV2_waveConfig_dbbFaction_hard, GAME_DIFFICULTY.hard)
