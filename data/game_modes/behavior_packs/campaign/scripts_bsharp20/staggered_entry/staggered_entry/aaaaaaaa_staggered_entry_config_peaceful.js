const HordeBasesSetup_Peaceful = {
    [FACTION_NAME_ATTACK]: {
        centralBase: BASE_SIZE_LARGE,
        numSmall: 1,
        numMedium: 1,
        numLarge: 0,
        numInitialBases: 3,
        numInitialOutposts: 4,
        establishmentPace: 2,
        firstAttackDelayDays: 1000
    },
    [FACTION_NAME_DEFEND]: {
        centralBase: BASE_SIZE_LARGE,
        numSmall: 1,
        numMedium: 1,
        numLarge: 0,
        numInitialBases: 3,
        numInitialOutposts: 4,
        establishmentPace: 2,
        firstAttackDelayDays: 1000
    },
    [FACTION_NAME_OBSTACLE]: {
        centralBase: BASE_SIZE_LARGE,
        numSmall: 1,
        numMedium: 1,
        numLarge: 0,
        numInitialBases: 3,
        numInitialOutposts: 4,
        establishmentPace: 2,
        firstAttackDelayDays: 1000
    }
}

const HordeEntryConfig_Peaceful = {
    invasionStartAfterFirstEstablished: 0,
    hordes: [
        {
            hordePool: [FACTION_NAME_ATTACK],
            pregame: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_FirstPregameConditionsFulfilled())
            },
            firstBase: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_HordePregameStarted(FACTION_NAME_ATTACK))
            }
        },
        {
            hordePool: [FACTION_NAME_DEFEND],
            pregame: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_HordeFirstBaseBuilt(FACTION_NAME_ATTACK))
            },
            firstBase: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_HordePregameStarted(FACTION_NAME_DEFEND))
            }
        },
        {
            hordePool: [FACTION_NAME_OBSTACLE],
            pregame: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_HordeFirstBaseBuilt(FACTION_NAME_DEFEND))
            },
            firstBase: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_HordePregameStarted(FACTION_NAME_OBSTACLE))
            }
        }
    ],
    mobAlliances: [
        {
            mobAlliancePool: [MOB_ALLIANCE_NAME_SKELETON],
            occupation: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_HordeBasesDestroyed(HORDE_ANY, [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE], 1, SNAPSHOT_Act2Started())
            }
        },
        {
            mobAlliancePool: [MOB_ALLIANCE_NAME_ZOMBIE],
            occupation: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_MobAllianceOccupationStarted(MOB_ALLIANCE_NAME_SKELETON))
            }
        },
        {
            mobAlliancePool: [MOB_ALLIANCE_NAME_CREEPER],
            occupation: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_MobAllianceOccupationStarted(MOB_ALLIANCE_NAME_ZOMBIE))
            }
        }
    ]
}

RegisterDifficultyConfig("horde_bases_setup_config", HordeBasesSetup_Peaceful, GAME_DIFFICULTY.peaceful, true)
RegisterDifficultyConfig("horde_entry_config", HordeEntryConfig_Peaceful, GAME_DIFFICULTY.peaceful)