/* eslint-disable @typescript-eslint/no-unused-vars */
// ===== GLOBAL CONSTANTS =====
const TELEMETRY_CATEGORIES = {
    // POI
    POI_LOOT: "poi_loot",
    POI_TOWER: "poi_tower",
    FUNNEL: "Funnel",
    KEY_ACTION_COMPLETED: "KeyActionCompleted",
    CAMPAIGN_PROGRESS: "CampaignProgressUpdate",
    INVASION_BREAK_STARTED: "InvasionBreakStarted",
    INVASION_BREAK_ENDED: "InvasionBreakEnded",
    INVASION_ATTACK_CONCLUDED: "InvasionAttackConcluded"
}

const TELEMETRY_SUBCATEGORIES = {
    // POI
    PIGLIN_CRATE: "piglin_crate",
    TREASURE_CHEST: "poi_treasure_chest",
    VILLAGE_CHEST: "village_chest",
    KNOCKBACK_TOWER: "knockback_tower",
    FREEZE_TOWER: "freeze_tower",
    STUN_TOWER: "stun_tower"
}

const TELEMETRY_ACTION_TYPE = {
    CONSTRUCT: "construct",
    DECONSTRUCT: "deconstruct",
    DESTROYED: "destroyed"
}

const TELEMETRY_FUNNEL_STEP = {
    MOUNT: {
        ENCOUNTERED_STEP: "mount_encountered",
        INTERACTED_BANNER: "mount_interacted_banner",
        FEEDS_STEP: "mount_feeds",
        UNLOCKED: "mount_unlocked"
    }
}

//This enum mirrors TelemetryGameAct in TelemetryServerEventHandler.cpp
//make sure both are matching or else bad stuff happens
const TELEMETRY_GAMEACT_IDS = {
    ACT1A: 1,
    ACT1B: 2,
    ACT2: 3,
    ACT3A: 4,
    ACT3B: 5,
    EPILOGUE: 6
}

//BBI-TODO: (mtoledo): The onboarding event has been replaced by Funnel. Remove this and any code that uses it once C++ onboarding code is gone
const TELEMETRY_ONBOARDING_CATEGORIES = {
    GATHERING: "gethering",
    LEAVE_WELL_OF_FATE: "leave_well_of_fate",
    FIND_VILLAGE_UNDER_ATTACK: "find_village_under_attack",
    FIRST_VILLAGE_UNDER_ATTACK: "first_village_under_attak",
    REPAIR_FOUNTAIN: "repair_fountain",
    FIND_SECOND_VILLAGE: "find_second_village",
    FREE_SECOND_VILLAGE: "free_second_village",
    BUILD_DEFENSES_IN_SECOND_VILLAGE: "build_defenses_in_second_village",
    FIRST_SKIRMISH: "first_skirmish",
    THREE_PIGLIN_CAMPS: "three_piglin_camps",
    WOF_UPGRADE: "wof_upgrade",
    SECOND_SKIRMISH: "second_skirmish",
    DESTROY_DBB: "hero_destroy_dbb",
    MENU: "hero_menu",
    SPAWN_FIRST_GOLEM: "hero_spawn_first_golem",
    SPAWN_SECOND_GOLEM: "hero_spawn_second_golem",
    LURE: "hero_lure",
    UNLURE: "hero_unlure",
    DIRECT: "hero_direct",
    WORLDMAP: "hero_worldmap",
    RESOURCE_DROP: "hero_resource_drop",
    FIND_FIRST_BASE: "hero_find_first_base",
    FIND_SECOND_BASE: "hero_find_second_base",
    FIND_DBB: "hero_find_dbb",
    DESTROY_FIRST_BASE: "hero_destroy_first_base",
    DESTROY_SECOND_BASE: "hero_destroy_second_base"
}

const TELEMETRY_KEY_ACTION_COMPLETED_CATEGORIES = {
    POI_ALLY_01: "poi_ally_01",
    POI_ALLY_02: "poi_ally_02",
    POI_ALLY_04: "poi_ally_04",
    POI_ALLY_05: "poi_ally_05"
}

const TELEMETRY_CAMPAIGN_PROGRESS = {
    MOUNT_PROGRESS: { category: "CountMountsUnlocked", globalVariable: "telemetry_mount_progress" },
    TOWER_PROGRESS: { category: "CountTowersUnlocked", globalVariable: "telemetry_tower_progress" },
    POI_ALLY_PROGRESS: { category: "CountAlliesUnlocked", globalVariable: "telemetry_poi_ally_progress" },
    MOB_ALLIANCE_PROGRESS: { category: "CountMobAlliancesEverUnlocked", globalVariable: "telemetry_mob_alliance_progress" },
    PIGLIN_BASE_PROGRESS: { category: "CountPiglinBasesDestroyed", globalVariable: "telemetry_piglin_base_progress" },
    PIGLIN_OUTPOST_PROGRESS: { category: "CountPiglinOutpostsDestroyed", globalVariable: "telemetry_piglin_outpost_progress" },
    WELL_OF_FATE_VISITS_PROGRESS: { category: "CountWellOfFateVisits", globalVariable: "telemetry_well_of_fate_visit_progress" },
    WELL_OF_FATE_UPGRADES_PROGRESS: { category: "CountWellOfFateUpgradeStructures", globalVariable: "telemetry_well_of_fate_upgrades_progress" },
    VILLAGE_CHEST_OPENS_PROGRESS: { category: "CountVillageChestOpens", globalVariable: "telemetry_village_chest_opens_progress" },
    FAST_TRAVEL_PROGRESS: { category: "CountFastTravel", globalVariable: "telemetry_fast_travel_progress" },
    DAY_NIGHT_CYCLE_PROGRESS: { category: "CountDayNightCyclesCompleted", globalVariable: "telemetry_day_night_cycle_progress" },
    VILLAGE_OCCUPIED_PROGRESS: { category: "CountNumTimesVillageOccupied", globalVariable: "telemetry_village_occupied_progress" },
    VILLAGE_CLEARED_PROGRESS: { category: "CountNumTimesVillageCleared", globalVariable: "telemetry_village_cleared_progress" },
    MOB_ALLIANCE_OCCUPIED_PROGRESS: { category: "CountNumTimesMobAllianceOccupied", globalVariable: "telemetry_mob_alliance_occupied_progress" },
    MOB_ALLIANCE_CLEARED_PROGRESS: { category: "CountNumTimesMobAllianceCleared", globalVariable: "telemetry_mob_alliance_cleared_progress" },
    SPAWNER_PLACED_PROGRESS: { category: "CountNumSpawnerPlaced", globalVariable: "telemetry_spawner_placed_progress" },
    SPAWNER_INTERACT_SPAWN_PROGRESS: { category: "CountNumSpawnerInteractSpawn", globalVariable: "telemetry_spawner_interact_spawn_progress" },
    SPAWNER_INTERACT_REMOVE_PROGRESS: { category: "CountNumSpawnerInteractRemove", globalVariable: "telemetry_spawner_interact_remove_progress" }
}

const TELEMETRY_INVASION = {
    GV_INVASION_BREAK_ACTIVE: "gv_invasion_break_active"
}

const FunnelSteps = {
    TUTORIAL_START: { key: "Tutorial_Start", stepNumberCurrent: 1, stepNumberMax: 43 },
    TUTORIAL_REACHOBJECTIVEWOOD: { key: "Tutorial_ReachObjectiveWood", stepNumberCurrent: 2, stepNumberMax: 43 },
    TUTORIAL_GATHERWOOD: { key: "Tutorial_GatherWood", stepNumberCurrent: 3, stepNumberMax: 43 },
    TUTORIAL_REACHOBJECTIVESTONE: { key: "Tutorial_ReachObjectiveStone", stepNumberCurrent: 4, stepNumberMax: 43 },
    TUTORIAL_GATHERSTONE: { key: "Tutorial_GatherStone", stepNumberCurrent: 5, stepNumberMax: 43 },
    TUTORIAL_REACHOBJECTIVEONPLATFORM: { key: "Tutorial_ReachObjectiveOnPlatform", stepNumberCurrent: 6, stepNumberMax: 43 },
    TUTORIAL_OPENCHEST: { key: "Tutorial_OpenChest", stepNumberCurrent: 7, stepNumberMax: 43 },
    TUTORIAL_BUILDSPAWNERGOLEM: { key: "Tutorial_BuildSpawnerGolem", stepNumberCurrent: 8, stepNumberMax: 43 },
    TUTORIAL_SPAWNGOLEM1: { key: "Tutorial_SpawnGolem1", stepNumberCurrent: 9, stepNumberMax: 43 },
    TUTORIAL_SPAWNGOLEM2: { key: "Tutorial_SpawnGolem2", stepNumberCurrent: 10, stepNumberMax: 43 },
    TUTORIAL_SPAWNGOLEM3: { key: "Tutorial_SpawnGolem3", stepNumberCurrent: 11, stepNumberMax: 43 },
    TUTORIAL_RALLYGOLEMTOOBJECTIVE: { key: "Tutorial_RallyGolemToObjective", stepNumberCurrent: 12, stepNumberMax: 43 },
    TUTORIAL_STOPRALLYING: { key: "Tutorial_StopRallying", stepNumberCurrent: 13, stepNumberMax: 43 },
    TUTORIAL_DIRECTGOLEMTOOBJECTIVE: { key: "Tutorial_DirectGolemToObjective", stepNumberCurrent: 14, stepNumberMax: 43 },
    TUTORIAL_DEFEATPIGLINS: { key: "Tutorial_DefeatPiglins", stepNumberCurrent: 15, stepNumberMax: 43 },
    TUTORIAL_COMPLETE: { key: "Tutorial_Complete", stepNumberCurrent: 16, stepNumberMax: 43 },
    ACT1_START: { key: "Act1_Start", stepNumberCurrent: 17, stepNumberMax: 43 },
    ACT1_VILLAGE1ARRIVE: { key: "Act1_Village1Arrive", stepNumberCurrent: 18, stepNumberMax: 43 },
    ACT1_VILLAGE1CLEARED: { key: "Act1_Village1Cleared", stepNumberCurrent: 19, stepNumberMax: 43 },
    ACT1_VILLAGE1BUILDCARPENTERHUT: { key: "Act1_Village1BuildCarpenterHut", stepNumberCurrent: 20, stepNumberMax: 43 },
    ACT1_VILLAGE2ARRIVE: { key: "Act1_Village2Arrive", stepNumberCurrent: 21, stepNumberMax: 43 },
    ACT1_VILLAGE2SAVED: { key: "Act1_Village2Saved", stepNumberCurrent: 22, stepNumberMax: 43 },
    ACT1_VILLAGE2OPENCHEST: { key: "Act1_Village2OpenChest", stepNumberCurrent: 23, stepNumberMax: 43 },
    ACT1_VILLAGE2DEFENDED: { key: "Act1_Village2Defended", stepNumberCurrent: 24, stepNumberMax: 43 },
    ACT1_DAMAGEANYPIGLINOUTPOST: { key: "Act1_DamageAnyPiglinOutpost", stepNumberCurrent: 25, stepNumberMax: 43 },
    ACT1_PIGLINOUTPOST1DEFEATED: { key: "Act1_PiglinOutpost1Defeated", stepNumberCurrent: 26, stepNumberMax: 43 },
    ACT1_PIGLINOUTPOST2DEFEATED: { key: "Act1_PiglinOutpost2Defeated", stepNumberCurrent: 27, stepNumberMax: 43 },
    ACT1_PIGLINOUTPOST3DEFEATED: { key: "Act1_PiglinOutpost3Defeated", stepNumberCurrent: 28, stepNumberMax: 43 },
    ACT1_ARRIVEWELLOFFATE: { key: "Act1_ArriveWellOfFate", stepNumberCurrent: 29, stepNumberMax: 43 },
    ACT1_OPENSONGBOOK: { key: "Act1_OpenSongbook", stepNumberCurrent: 30, stepNumberMax: 43 },
    ACT1_SONGBOOKTABOFINTEREST: { key: "Act1_SongbookTabOfInterest", stepNumberCurrent: 31, stepNumberMax: 43 },
    ACT1_CUSTOMIZEHOTBAR: { key: "Act1_CustomizeHotbar", stepNumberCurrent: 32, stepNumberMax: 43 },
    ACT1_BUILDUPGRADEGATHERIRON: { key: "Act1_BuildUpgradeGatherIron", stepNumberCurrent: 33, stepNumberMax: 43 },
    ACT1_OUTPOST4ARRIVE: { key: "Act1_Outpost4Arrive", stepNumberCurrent: 34, stepNumberMax: 43 },
    ACT1_OUTPOST4DESTROYONESTRUCTURE: { key: "Act1_Outpost4DestroyOneStructure", stepNumberCurrent: 35, stepNumberMax: 43 },
    ACT1_OUTPOST4DEFEATED: { key: "Act1_Outpost4Defeated", stepNumberCurrent: 36, stepNumberMax: 43 },
    ACT1_ARRIVEDBB: { key: "Act1_ArriveDBB", stepNumberCurrent: 37, stepNumberMax: 43 },
    ACT1_PORTALDAMAGEDDBB: { key: "Act1_PortalDamagedDBB", stepNumberCurrent: 38, stepNumberMax: 43 },
    ACT1_PORTAL90PERCENTDBB: { key: "Act1_Portal90%DBB", stepNumberCurrent: 39, stepNumberMax: 43 },
    ACT1_PORTAL75PERCENTDBB: { key: "Act1_Portal75%DBB", stepNumberCurrent: 40, stepNumberMax: 43 },
    ACT1_PORTAL50PERCENTDBB: { key: "Act1_Portal50%DBB", stepNumberCurrent: 41, stepNumberMax: 43 },
    ACT1_PORTAL25PERCENTDBB: { key: "Act1_Portal25%DBB", stepNumberCurrent: 42, stepNumberMax: 43 },
    ACT1_COMPLETE: { key: "Act1_Complete", stepNumberCurrent: 43, stepNumberMax: 43 }
}
// ===== INTERNAL HELPERS =====
const _NameToID = (name) => {
    return name.replace(/\s+/, "") // remove all whitespace
}

// ===== OUTPUT HELPERS =====
const OUTPUT_TelemetryAddFormattedName = (category, subcategory, name) => {
    OUTPUT_TelemetryAddString("Name", name)
    OUTPUT_TelemetryAddString("Subcategory", subcategory)
    OUTPUT_TelemetryAddString("Category", category)
}

const OUTPUT_TelemetryAddLocationUIDWithVillageID = (villageId) => {
    const villages = QUERY_GetAllVillages()
    const village = FILTER_ByVillageID(villages, villageId)
    OUTPUT_TelemetryAddLocationUID(village)
}

// ===== EVENT HELPERS =====

const TelemetrySendPoiLootCollectedEvent = (playerEntity, name, subcategory, category) => {
    OUTPUT_TelemetryCreateEvent(playerEntity, "PoiLootCollected", true)
    OUTPUT_TelemetryAddTransactionPlayer(playerEntity)
    OUTPUT_TelemetryAddFormattedName(category, subcategory, name)
    OUTPUT_TelemetryAddCountCategory(playerEntity, "LootIndexAny")
    OUTPUT_TelemetryAddCountSubcategory(playerEntity, "LootIndexInCategory")
    OUTPUT_TelemetryAddTimeSinceLastCategory(playerEntity, "TimeSincePrevLootAny")
    OUTPUT_TelemetryAddTimeSinceLastSubcategory(playerEntity, "TimeSincePrevLootInCategory")
    OUTPUT_TelemetryRecordEvent()
}

const TelemetrySendMountFunnelEvent = (playerEntity, funnelName, mountName, stepName, stepCurrentGV, maxStep) => {
    OUTPUT_TelemetryCreateEvent(playerEntity, TELEMETRY_CATEGORIES.FUNNEL, true)
    OUTPUT_TelemetryAddFormattedName(TELEMETRY_CATEGORIES.FUNNEL, TELEMETRY_CATEGORIES.FUNNEL, funnelName)
    OUTPUT_TelemetryAddString("NameFunnel", funnelName)
    OUTPUT_TelemetryAddString("NameMount", mountName)
    OUTPUT_TelemetryAddString("StepName", stepName)
    IncrementGlobal(stepCurrentGV)
    OUTPUT_TelemetryAddInt("StepNumCurrent", QUERY_GetGlobalVariable(stepCurrentGV))
    OUTPUT_TelemetryAddInt("StepNumMax", maxStep)
    OUTPUT_TelemetryAddTimeSinceLastCategory(playerEntity, "TimeSincePreviousStepSeconds")
    OUTPUT_TelemetryRecordEvent()
}

const TelemetrySendMountUnlockedEvent = (playerEntity, mountName) => {
    OUTPUT_TelemetryCreateEvent(playerEntity, "MountUnlocked", true)
    OUTPUT_TelemetryAddTransactionPlayer(playerEntity)
    OUTPUT_TelemetryAddFormattedName("MountUnlocked", mountName, mountName)
    OUTPUT_TelemetryRecordEvent()
}

const TelemetrySendActStartedEvent = (playerEntity, act) => {
    OUTPUT_CollectTelemetryInfo("GameAct", act)

    OUTPUT_TelemetryCreateEvent(playerEntity, "ActStarted", true)
    OUTPUT_TelemetryAddTransactionPlayer(playerEntity)
    OUTPUT_TelemetryAddFormattedName("ActStarted", "ActStarted", "ActStarted")
    OUTPUT_TelemetryAddString("Started", act)
    OUTPUT_TelemetryRecordEvent()
}

const TelemetrySendActCompletedEvent = (playerEntity, act) => {
    OUTPUT_TelemetryCreateEvent(playerEntity, "ActCompleted", true)
    OUTPUT_TelemetryAddTransactionPlayer(playerEntity)
    OUTPUT_TelemetryAddFormattedName("ActCompleted", "ActCompleted", "ActCompleted")
    OUTPUT_TelemetryAddString("Completed", act)
    OUTPUT_TelemetryRecordEvent()
}

const TelemetrySendKeyActionCompletedEvent = (playerEntity, keyActionCompleted) => {
    OUTPUT_TelemetryCreateEvent(playerEntity, TELEMETRY_CATEGORIES.KEY_ACTION_COMPLETED, true)
    OUTPUT_TelemetryAddTransactionPlayer(playerEntity)
    OUTPUT_TelemetryAddString("Action", keyActionCompleted)
    OUTPUT_TelemetryRecordEvent()
}

const TelemetrySendKeyActionCompletedServerEvent = (keyActionCompleted) => {
    OUTPUT_TelemetryCreateServerEvent(TELEMETRY_CATEGORIES.KEY_ACTION_COMPLETED, true)
    OUTPUT_TelemetryAddString("Action", keyActionCompleted)
    OUTPUT_TelemetryRecordEvent()
}

const TelemetrySendCampaignProgressEvent = (justCompletedAct) => {
    OUTPUT_TelemetryCreateServerEvent(TELEMETRY_CATEGORIES.CAMPAIGN_PROGRESS, true)

    // GameEventFireReason
    if (justCompletedAct === "null") {
        OUTPUT_TelemetryAddString("GameEventFireReason", "Interval")
        OUTPUT_TelemetryAddString("LocalTimerValueSeconds", QUERY_GetGlobalVariable(GV_TELEMETRY_LOCAL_TIMER_VALUE).toString())
    } else {
        OUTPUT_TelemetryAddString("GameEventFireReason", "ActCompleted")
        OUTPUT_TelemetryAddString("LocalTimerValueSeconds", "null")
    }

    // JustCompletedAct
    OUTPUT_TelemetryAddString("JustCompletedAct", justCompletedAct)

    // CountPiglinBasesActive
    // The next flow is done to provide more detail and also avoid picking a fake large base in act 1
    const act1Bases = FILTER_ByVillageSize(FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_NAME_DBB), BASE_SIZE_DARK_BEACON)
    const act2Bases = FILTER_ByVillageSize(FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_PIGLINS), BASE_SIZE_ALL_PORTALS_AND_BOSS)
    const act3Bases = FILTER_ByVillageSize(FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_NAME_WOF), BASE_SIZE_PIGLIN_WOF)
    const allBases = OPER_Union(OPER_Union(act1Bases, act2Bases), act3Bases)
    const amountOfAliveBases = QUERY_GetEntitiesCount(allBases)
    OUTPUT_TelemetryAddInt("CountPiglinBasesActive", amountOfAliveBases)

    // CountPiglinOutpostsActive
    const outpostSizes = [BASE_SIZE_OUTPOST, BASE_SIZE_ACT1_FIRST_SKIRMISH, BASE_SIZE_ACT_1_A, BASE_SIZE_ACT_1_B, BASE_SIZE_ACT_1_C, BASE_SIZE_ACT1_NON_PORTAL_ATTACK_BASE]
    const amountOfAliveOutposts = QUERY_GetEntitiesCount(GetAliveVillages(HORDE_PIGLINS_ALL, outpostSizes))
    OUTPUT_TelemetryAddInt("CountPiglinOutpostsActive", amountOfAliveOutposts)

    // All variable-based properties
    for (const key in TELEMETRY_CAMPAIGN_PROGRESS) {
        OUTPUT_TelemetryAddInt(TELEMETRY_CAMPAIGN_PROGRESS[key].category, QUERY_GetGlobalVariable(TELEMETRY_CAMPAIGN_PROGRESS[key].globalVariable))
    }

    // All "special" properties that we can only access in C++
    OUTPUT_TelemetryAddCinematicsInfo()
    OUTPUT_TelemetryAddSpawnerInfo()

    OUTPUT_TelemetryRecordEvent()
}

const TelemetrySendInvasionBreakStartedEvent = () => {
    OUTPUT_TelemetryCreateServerEvent(TELEMETRY_CATEGORIES.INVASION_BREAK_STARTED, true)
    OUTPUT_TelemetryAddInvasionBreakGUID(true)
    OUTPUT_TelemetryAddInt("DayNightCyclesCompleted", QUERY_GetGlobalVariable(TELEMETRY_CAMPAIGN_PROGRESS.DAY_NIGHT_CYCLE_PROGRESS.globalVariable))
    OUTPUT_TelemetryRecordEvent()
}

const TelemetrySendInvasionBreakEndedEvent = () => {
    OUTPUT_TelemetryCreateServerEvent(TELEMETRY_CATEGORIES.INVASION_BREAK_ENDED, true)
    OUTPUT_TelemetryAddInvasionBreakGUID(false)
    OUTPUT_TelemetryAddInt("DayNightCyclesOfBreak", TelemetryInvasionBreakDaysPassedCounter.Get())
    OUTPUT_TelemetryRecordEvent()
}

const TelemetrySendInvasionAttackConcludedEvent = (attackV2Data, defenseSuccess, playerPresent, timesActivated, attackValue, defenseValue) => {
    OUTPUT_TelemetryCreateServerEvent(TELEMETRY_CATEGORIES.INVASION_ATTACK_CONCLUDED, true)

    let invasionResult = ""
    if (timesActivated > 0) {
        if (playerPresent) {
            invasionResult = "Visited_TimerOut_PlayerPresent_Active"
        } else {
            invasionResult = "Visited_TimerOut_PlayerNotPresent_Abandoned"
        }
    } else {
        invasionResult = "NotVisited_AutoResolve"
    }
    OUTPUT_TelemetryAddString("InvasionResult", invasionResult)
    OUTPUT_TelemetryAddString("AttackFaction", attackV2Data.factionName)

    let attackArea = ""
    switch (QUERY_GetFactionNameFromVillageID(attackV2Data.villageId)) {
        case CULTURE_NAME_VILLAGERS:
            attackArea = IsPlayerOutpost(attackV2Data.villageId) ? "wellhouse" : "village"
            break
        case MOB_ALLIANCE_NAME_CREEPER:
            attackArea = "creeper_mob_alliance"
            break
        case MOB_ALLIANCE_NAME_SKELETON:
            attackArea = "skeleton_mob_alliance"
            break
        case MOB_ALLIANCE_NAME_ZOMBIE:
            attackArea = "zombie_mob_alliance"
            break
    }
    OUTPUT_TelemetryAddString("AttackArea", attackArea)

    OUTPUT_TelemetryAddInt("NumTimesActivated", timesActivated)
    OUTPUT_TelemetryAddBool("IsFullPiglinVictory", !defenseSuccess)

    const isScriptedDamage = attackValue > 0
    OUTPUT_TelemetryAddBool("IsFullPiglinVictoryDueToScriptedDamage", !defenseSuccess && isScriptedDamage)
    if (isScriptedDamage) {
        OUTPUT_TelemetryAddInt("AttackValuePiglin", attackValue)
        OUTPUT_TelemetryAddInt("AttackValueDefense", defenseValue)
    } else {
        OUTPUT_TelemetryAddString("AttackValuePiglin", "null")
        OUTPUT_TelemetryAddString("AttackValueDefense", "null")
    }
    OUTPUT_TelemetryAddInt("AttackStrength", attackV2Data.strength)

    OUTPUT_TelemetryAddInvasionAttackTimePlayersEngaged(attackV2Data.id)
    OUTPUT_TelemetryRecordEvent()
}

// ==== DEFAULT SETUP HELPERS =====

const SetupDefaultTelemetryForPiglinBase = (factionName) => {
    // TODO: DAMAGE TRACKING (do this in a system). Disabled for beta, and also bump to this todo.
    // This previously used the factionSelectMode game rule
    SNIPPET_InheritsFromGameMode("campaign", () => {
        // Logv("Telemetry health tracking ON")
        // LISTENFOR_HealthChanged({
        //     snippet: `hc_telemetry_${factionName}`,
        //     ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        //     factionName: factionName,
        //     triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        //     direction: HEALTH_DIRECTION.DAMAGE
        // })
    })
    SNIPPET_InheritsFromGameMode("pvp", () => {
        // Logv("Telemetry health tracking ON")
        // LISTENFOR_HealthChanged({
        //     snippet: `hc_telemetry_${factionName}`,
        //     ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        //     factionName: factionName,
        //     triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        //     direction: HEALTH_DIRECTION.DAMAGE
        // })
    })

    SNIPPET_HealthChanged(`hc_telemetry_${factionName}`, (entity, current, previous, _payload) => {
        // ignore healing
        if (current >= previous) {
            return
        }

        const villageId = QUERY_GetVillageIDFromEntity(entity)
        const damage = previous - current

        // check what type of entity this is
        if (QUERY_HasTags(entity, [TAG_BUILDABLE])) {
            DeltaVillageVariable(villageId, "telemetry_total_damage_structures", damage)
        } else if (QUERY_HasTags(entity, ["mob"])) {
            DeltaVillageVariable(villageId, "telemetry_total_damage_mobs", damage)
        }
    })
}

const StartPiglinBaseToDestroyOnboarding = () => {
    const remainingBasesLeft = QUERY_GetEntitiesCount(FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_NAME_DBB))
    if (remainingBasesLeft === 3) {
        OUTPUT_TelemetryOnboardingStart(TELEMETRY_ONBOARDING_CATEGORIES.DESTROY_FIRST_BASE)
    } else if (remainingBasesLeft === 2) {
        OUTPUT_TelemetryOnboardingStart(TELEMETRY_ONBOARDING_CATEGORIES.DESTROY_SECOND_BASE)
    } else {
        OUTPUT_TelemetryOnboardingStart(TELEMETRY_ONBOARDING_CATEGORIES.DESTROY_DBB)
    }
}

const TelemetrySendFunnelEvent = (playerEntity, funnelStepInfo) => {
    const category = "FTUE"
    const funnelName = "FTUE_3_20220901"
    OUTPUT_TelemetryRecordFunnelEvent(playerEntity, funnelStepInfo.key, funnelStepInfo.stepNumberCurrent, funnelStepInfo.stepNumberMax, category, funnelName)
}

const TelemetrySendMobAllianceLiberated = (playerEntity, mobAllianceString) => {
    OUTPUT_TelemetryCreateServerEvent("MobAllianceLiberated", false)
    OUTPUT_TelemetryAddString("mobAllianceString", mobAllianceString)
    OUTPUT_TelemetryRecordEvent()
}

const TelemetrySendBossKilled = (playerEntity, bossNameString) => {
    OUTPUT_TelemetryCreateServerEvent("BossKilled", false)
    OUTPUT_TelemetryAddString("bossNameString", bossNameString)
    OUTPUT_TelemetryRecordEvent()
}

const TelemetrySendLapisCount = (playerEntity, lapisCount) => {
    OUTPUT_TelemetryCreateEvent(playerEntity, "LapisCollectedPvp", false)
    OUTPUT_TelemetryAddFloat("LapisCount", lapisCount)
    OUTPUT_TelemetryRecordEvent()
}

const TelemetrySendPiglinUnitKillCount = (piglinUnitKillCount) => {
    OUTPUT_TelemetryCreateServerEvent("KillPiglinUnit", false)
    OUTPUT_TelemetryAddFloat("PiglinUnitKillCount", piglinUnitKillCount)
    OUTPUT_TelemetryRecordEvent()
}

const TelemetrySendPiglinStructureKillCount = (piglinStructureKillCount) => {
    OUTPUT_TelemetryCreateServerEvent("KillPiglinStructure", false)
    OUTPUT_TelemetryAddFloat("PiglinStructureKillCount", piglinStructureKillCount)
    OUTPUT_TelemetryRecordEvent()
}

const TelemetrySendPoiTowerGroupPlacement = (team) => {
    const players = FILTER_ByTeam(GetAllPlayers(), team)
    ForEachEntities(players, (entity) => {
        OUTPUT_TelemetryCreateEvent(entity, "PoiTowerGroupPlacement", false)
        OUTPUT_TelemetryRecordEvent()
    })
}

const TelemetrySendCloseMatch = (players, isWinner) => {
    const feid = FOREACH_AllInstant(players)
    LISTENFOR_ForEachEntity({
        snippet: "fee_telemtry_reportclosematchendpvp",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        id: feid,
        payloadInt: isWinner ? 1 : 0
    })
}

const TelemetrySendPlayerConnected = (playerEntity) => {
    OUTPUT_TelemetryCreateEvent(playerEntity, "PlayerConnected", false)
    OUTPUT_TelemetryRecordEvent()
}

SNIPPET_ForEachEntity("fee_telemtry_reportclosematchendpvp", (entity, payload) => {
    OUTPUT_TelemetryCreateEvent(entity, "ReportCloseMatchEndPvp", false)
    OUTPUT_TelemetryAddBool("IsWinner", payload.int === 1)
    OUTPUT_TelemetryRecordEvent()
})

// ===== DEBUGGING =====

SNIPPET_Bootstrap("", () => {
    LISTENFOR_ExternalEvent({
        snippet: "ee_test_telemetry_1",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "ee_test_telemetry_1"
    })
    LISTENFOR_ExternalEvent({
        snippet: "ee_test_telemetry_2",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "ee_test_telemetry_2"
    })
    LISTENFOR_ExternalEvent({
        snippet: "ee_test_telemetry_3",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "ee_test_telemetry_3"
    })
})

SNIPPET_ExternalEvent("ee_test_1", () => {
    const structures = QUERY_GetEntitiesWithTags(["buffable-mason"])
    OUTPUT_DespawnEntities(structures)
})

SNIPPET_ExternalEvent("ee_test_telemetry_1", () => {
    OUTPUT_Announce("telemetry_test", [])

    const players = GetPlayers()
    OUTPUT_TelemetryCreateEvent(players, "JasonEvent", false)
    // OUTPUT_TelemetryAddString("Name", "Jason")
    // OUTPUT_TelemetryAddInt("Wood", QUERY_GetCampaignResource("wood"))
    OUTPUT_TelemetryAddTeamBalance(players)
    OUTPUT_TelemetryRecordEvent()
})

SNIPPET_ExternalEvent("ee_test_telemetry_2", () => {
    // error testing
    OUTPUT_TelemetryAddString("Name", "jason")
    OUTPUT_TelemetryRecordEvent()
})

SNIPPET_ExternalEvent("ee_test_telemetry_3", () => {
    // error testing
    OUTPUT_TelemetryRecordEvent()
    OUTPUT_TelemetryCreateEvent(QUERY_GetEntitiesWithTags([TAG_BUILDABLE]), "JasonEvent", false)
})

//================================== ACHIEVEMENTS =======================================

SNIPPET_InheritsFromGameMode("campaign", () => {
    RegisterStructureGroupPlacement(3, 50, "poi_tower")
    _setupVGAchievementListeners()
})

SNIPPET_InheritsFromGameMode("pvp", () => {
    RegisterStructureGroupPlacement(3, 50, "poi_tower")
})

// for now we're only observing these two game modes. in the future we might want to allow all (including DLC).

SNIPPET_Bootstrap("", () => {
    LISTENFOR_PlayerConnected({
        snippet: "pc_telemetry",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })
})

SNIPPET_PlayerConnected("pc_telemetry", (playerEntity, isReconnecting, payload) => {
    Logi(`Player Connected: ${QUERY_GetUserId(playerEntity)}`)
    TelemetrySendPlayerConnected(playerEntity)
})

// ====== Helpers ========
const SendTelemetryBaseDestroyedUnderX = (durationInSeconds) => {
    OUTPUT_TelemetryCreateServerEvent("BaseDestroyedUnderTime", false)
    OUTPUT_TelemetryAddFloat("Duration", durationInSeconds)
    OUTPUT_TelemetryRecordEvent()
}

const RegisterBaseDestroyedUnderX = (villageId) => {
    const bulldozerTimelimit = 420
    SetVillageVariableForGlobalDuration(villageId, "BaseDestroyedUnderTime", bulldozerTimelimit)
}

const RegisterStructureGroupPlacement = (count, distance, poiTag) => {
    LISTENFOR_BuildingComplete({
        snippet: "bc_poiTower",
        includeTags: [poiTag],
        payloadString: poiTag,
        payloadInt: count,
        payloadFloat: distance,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })
}

const CheckStructureCountPlacedWithinDistance = (placementPosition, structureTag, count, distance, team) => {
    const EntityGroup = FILTER_ByTeam(FILTER_ByDistance(FILTER_ByTagFilter(GetPlayerStructures(), [structureTag], []), placementPosition, distance), team)
    return QUERY_GetEntitiesCount(EntityGroup) >= count
}

const _setupVGAchievementListeners = (hordes = [FACTION_NAME_OBSTACLE, FACTION_NAME_DEFEND, FACTION_NAME_ATTACK], sizes = [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE]) => {
    for (const horde of hordes) {
        for (const size of sizes) {
            LISTENFOR_VillageGenerated({
                snippet: "vg_achievement_setup",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                factionName: horde,
                villageSize: size
            })
        }
    }
}

// ========= Snippets ==========
SNIPPET_VillageGenerated("vg_achievement_setup", (villageId) => {
    LISTENFOR_VillageDestroyed({
        snippet: "vd_achievementTriggers",
        ownerVillageId: villageId,
        villageId: villageId
    })
    LISTENFOR_VillageFinishedBuilding({
        snippet: "vb_achievement_setup",
        ownerVillageId: villageId,
        villageId: villageId
    })
})

SNIPPET_VillageFinishedBuilding("vb_achievement_setup", (villageId) => {
    LISTENFOR_HealthChanged({
        snippet: "hc_piglin_structure_damaged_ach",
        ownerVillageId: villageId,
        includeTags: ["buildable", "piglin"],
        normalizedThreshold: 0.99,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE
    })
})

SNIPPET_VillageDestroyed("vd_achievementTriggers", (villageId, _payload) => {
    // As an improvement we can send the duration so achievement unlock logic is decoupled from the firing of this event (code support).
    // for now this event is only fired when the duration is less than the achievement specified time.
    if (GetVillageVariable(villageId, "BaseDestroyedUnderTime") > 0) {
        SendTelemetryBaseDestroyedUnderX(0)
    }
})

SNIPPET_BuildingComplete("bc_poiTower", (poiTower, payload) => {
    const team = QUERY_GetTeamName(poiTower)
    if (!CheckStructureCountPlacedWithinDistance(poiTower, payload.string, payload.int, payload.float, team)) {
        return
    }
    TelemetrySendPoiTowerGroupPlacement(team)
})

SNIPPET_HealthChanged("hc_piglin_structure_damaged_ach", (_structureEntity, _currentHealth, _previousHealth, payload) => {
    RegisterBaseDestroyedUnderX(payload.ownerVillageId)
    Once()
})
