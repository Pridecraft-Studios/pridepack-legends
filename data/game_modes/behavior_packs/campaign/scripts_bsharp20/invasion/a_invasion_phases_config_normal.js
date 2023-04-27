// Total possible conditions for changing the phase:
// hordesEntered - how many hordes have entered into play
// hordeBasesDestroyed - how many bases players need to destroy to move to this phase
// hordesDestroyed - how many (entire) hordes players need to destroy to move to this phase
// hordeBasesSpawnedUpgraded - how many bases Piglins have built/upgraded as part of invasion (OUTSIDE of their initial base spawns on intro)
// playerUpgrades - how many "player upgrades" players need to have to move to this phase. To see what constitutes those, make sure to check out _GetPlayerUpgradeCount()
// if the condition is not specified, it does not get evaluated.
const phaseValues_Normal = [
    {
        phase: 0,
        conditions: {
            [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_Act2Started()) //Note: Act2_Started is the only safe snapshot to use for future patches. Reason being is that its possible to look back to the start of Act 2, but not to other phases since we didn't track them in the RTM version of the game.  This is only a concern if the TRIGGER allowed input collection has changed, otherwise all other triggers are good to go.
        }
    },
    {
        phase: 1,
        conditions: {
            [TRIGGER_TIME_DAWN]: TRIGGER_DaysSince(3, SNAPSHOT_Act2Started()),
            [TRIGGER_TIME_IMMEDIATE]: TRIGGER_HordeBasesDestroyed(HORDE_ANY, BASE_SIZE_ALL_PORTALS_AND_BOSS_AND_MOB, 2, SNAPSHOT_Act2Started())
        }
    },
    {
        phase: 2,
        conditions: {
            [TRIGGER_TIME_DAWN]: TRIGGER_DaysSince(6, SNAPSHOT_Act2Started()),
            [TRIGGER_TIME_IMMEDIATE]: TRIGGER_HordeBasesDestroyed(HORDE_ANY, BASE_SIZE_ALL_PORTALS_AND_BOSS_AND_MOB, 4, SNAPSHOT_Act2Started())
        }
    },
    {
        phase: 3,
        conditions: {
            [TRIGGER_TIME_DAWN]: TRIGGER_DaysSince(9, SNAPSHOT_Act2Started()),
            [TRIGGER_TIME_IMMEDIATE]: TRIGGER_HordeBasesDestroyed(HORDE_ANY, BASE_SIZE_ALL_PORTALS_AND_BOSS_AND_MOB, 6, SNAPSHOT_Act2Started())
        }
    },
    {
        phase: 4,
        conditions: {
            [TRIGGER_TIME_DAWN]: TRIGGER_DaysSince(12, SNAPSHOT_Act2Started()),
            [TRIGGER_TIME_IMMEDIATE]: TRIGGER_HordeBasesDestroyed(HORDE_ANY, BASE_SIZE_ALL_PORTALS_AND_BOSS_AND_MOB, 9, SNAPSHOT_Act2Started())
        }
    },
    {
        phase: 5,
        conditions: {
            [TRIGGER_TIME_DAWN]: TRIGGER_DaysSince(15, SNAPSHOT_Act2Started()),
            [TRIGGER_TIME_IMMEDIATE]: TRIGGER_HordeBasesDestroyed(HORDE_ANY, BASE_SIZE_ALL_PORTALS_AND_BOSS_AND_MOB, 12, SNAPSHOT_Act2Started())
        }
    },
    {
        phase: 6,
        conditions: {
            [TRIGGER_TIME_DAWN]: TRIGGER_DaysSince(18, SNAPSHOT_Act2Started()),
            [TRIGGER_TIME_IMMEDIATE]: TRIGGER_HordeBasesDestroyed(HORDE_ANY, BASE_SIZE_ALL_PORTALS_AND_BOSS_AND_MOB, 15, SNAPSHOT_Act2Started())
        }
    }
]

const invasionPhaseWeights_Normal = {
    allyPOI: 0.5,
    mountPOI: 0.25,
    towerPOI: 0.4,
    mobAlliances: 1,
    wofUpgrades: 0.25
}

RegisterDifficultyConfig("invasion_phases_config", phaseValues_Normal, GAME_DIFFICULTY.normal)
RegisterDifficultyConfig("invasion_phases_weights_config", invasionPhaseWeights_Normal, GAME_DIFFICULTY.normal)