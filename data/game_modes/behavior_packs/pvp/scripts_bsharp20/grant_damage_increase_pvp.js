// TODO: kjensen: Need to clean this file up so there isn't a snippet for each stage, etc.

const damageIncreaseData = {
    stage1: {
        timeToBegin: 40, // trigger after 40 minutes
        buff: "badger:buff_increase_damage_1_pvp"
    },
    stage2: {
        timeToBegin: 50,
        buff: "badger:buff_increase_damage_2_pvp"
    },
    stage3: {
        timeToBegin: 60,
        buff: "badger:buff_increase_damage_3_pvp"
    },
    messages: {
        mobDamageIncrease: "pvp_late_game_damage_increase"
    }
}

SNIPPET_Bootstrap("", () => {
    LISTENFOR_LocalTimer({
        snippet: "lt_mobs_damage_increase_stage1",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: damageIncreaseData.stage1.timeToBegin * 60
    })
    LISTENFOR_LocalTimer({
        snippet: "lt_mobs_damage_increase_stage2",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: damageIncreaseData.stage2.timeToBegin * 60
    })
    LISTENFOR_LocalTimer({
        snippet: "lt_mobs_damage_increase_stage3",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: damageIncreaseData.stage3.timeToBegin * 60
    })
})

//apply buff to all existing mobs + RSLs
SNIPPET_LocalTimer("lt_mobs_damage_increase_stage1", (_payload) => {
    const playerMobs = QUERY_GetEntitiesWithTagFilter(["mob"], ["piglin", "animal"])
    const rsl = QUERY_GetEntitiesWithTagFilter(["redStoneLauncher"], [])

    OUTPUT_ApplyBuff(playerMobs, damageIncreaseData.stage1.buff)
    OUTPUT_ApplyBuff(rsl, damageIncreaseData.stage1.buff)

    OUTPUT_Announce(damageIncreaseData.messages.mobDamageIncrease, [])

    LISTENFOR_EntitySpawned({
        snippet: "es_late_game_damage_increase_stage1",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["mob"],
        excludeTags: ["piglin", "animal"]
    })
    LISTENFOR_BuildingComplete({
        snippet: "bc_late_game_damage_increase_stage1",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["redStoneLauncher"]
    })
})

SNIPPET_LocalTimer("lt_mobs_damage_increase_stage2", (_payload) => {
    const playerMobs = QUERY_GetEntitiesWithTagFilter(["mob"], ["piglin", "animal"])
    const rsl = QUERY_GetEntitiesWithTagFilter(["redStoneLauncher"], [])

    OUTPUT_RemoveBuff(playerMobs, damageIncreaseData.stage1.buff)
    OUTPUT_RemoveBuff(rsl, damageIncreaseData.stage1.buff)

    OUTPUT_ApplyBuff(playerMobs, damageIncreaseData.stage2.buff)
    OUTPUT_ApplyBuff(rsl, damageIncreaseData.stage2.buff)

    OUTPUT_Announce(damageIncreaseData.messages.mobDamageIncrease, [])

    LISTENFOR_EntitySpawned({
        snippet: "es_late_game_damage_increase_stage2",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["mob"],
        excludeTags: ["piglin", "animal"]
    })
    LISTENFOR_BuildingComplete({
        snippet: "bc_late_game_damage_increase_stage2",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["redStoneLauncher"]
    })
})

SNIPPET_LocalTimer("lt_mobs_damage_increase_stage3", (_payload) => {
    const playerMobs = QUERY_GetEntitiesWithTagFilter(["mob"], ["piglin", "animal"])
    const rsl = QUERY_GetEntitiesWithTagFilter(["redStoneLauncher"], [])

    OUTPUT_RemoveBuff(playerMobs, damageIncreaseData.stage2.buff)
    OUTPUT_RemoveBuff(rsl, damageIncreaseData.stage2.buff)

    OUTPUT_ApplyBuff(playerMobs, damageIncreaseData.stage3.buff)
    OUTPUT_ApplyBuff(rsl, damageIncreaseData.stage3.buff)

    OUTPUT_Announce(damageIncreaseData.messages.mobDamageIncrease, [])

    LISTENFOR_EntitySpawned({
        snippet: "es_late_game_damage_increase_stage3",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["mob"],
        excludeTags: ["piglin", "animal"]
    })
    LISTENFOR_BuildingComplete({
        snippet: "bc_late_game_damage_increase_stage3",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["redStoneLauncher"]
    })
})

//apply buff to all new entities spawned or RSLs built
SNIPPET_EntitySpawned("es_late_game_damage_increase_stage1", (entitySpawned, _payload) => {
    OUTPUT_ApplyBuff(entitySpawned, damageIncreaseData.stage1.buff)
})
SNIPPET_EntitySpawned("es_late_game_damage_increase_stage2", (entitySpawned, _payload) => {
    OUTPUT_ApplyBuff(entitySpawned, damageIncreaseData.stage2.buff)
})
SNIPPET_EntitySpawned("es_late_game_damage_increase_stage3", (entitySpawned, _payload) => {
    OUTPUT_ApplyBuff(entitySpawned, damageIncreaseData.stage3.buff)
})
SNIPPET_BuildingComplete("bc_late_game_damage_increase_stage1", (buildingEntity, _payload) => {
    OUTPUT_ApplyBuff(buildingEntity, damageIncreaseData.stage1.buff)
})
SNIPPET_BuildingComplete("bc_late_game_damage_increase_stage2", (buildingEntity, _payload) => {
    OUTPUT_ApplyBuff(buildingEntity, damageIncreaseData.stage2.buff)
})
SNIPPET_BuildingComplete("bc_late_game_damage_increase_stage3", (buildingEntity, _payload) => {
    OUTPUT_ApplyBuff(buildingEntity, damageIncreaseData.stage3.buff)
})
