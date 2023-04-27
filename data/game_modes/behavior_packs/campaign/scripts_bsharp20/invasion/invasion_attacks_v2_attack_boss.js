const hammerBossVal = {
    healthThreshold: {
        medium: 0.8,
        low: 0.45,
        critical: 0.2
    },
    cinematic: {
        bossDead: "hrd02_c05_attack_boss_death",
        bossLose: "hrd02_c07_attack_boss_lose",
        bossWin: "hrd02_c08_attack_boss_win"
    },
    VO: {
        spawn: "piglin_boss_overworld_attack",
        death: "attack_boss_death_initial",
        deathDelayedReaction: "attack_post_boss_death_subsequent"
    },
    globals: {
        activeInvasionId: "gv_attack_horde_boss_attack_active_id"
    },
    local: {
        retreatWaitTime: 75,
        bossPriorityTargetingCooldownTimer: 60,
        bossRetreatCooldownTimer: "timer_hammer_retreat_cooldown",
        bossIsRetreating: "boss_is_retreating",
        bossAtCriticalHealth: "boss_at_critical_health"
    }
}

const _DespawnHammerBossIfPresent = () => {
    const boss = QUERY_GetEntitiesWithTags(TAG_HAMMER_BOSS)
    if (HasEntities(boss)) {
        OUTPUT_DespawnEntities(boss)
        OUTPUT_DeleteNamedTimer(hammerBossVal.local.bossRetreatCooldownTimer)
    }
}

const _IsThisBossForOccupation = (villageId) => {
    return GetVillageVariable(villageId, "boss_occupation_active") > 0
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SetupInvasionAttackBossListeners = () => {
    LISTENFOR_InvasionAttackV2Started({
        snippet: "ias_attack_horde_boss_attack_started",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: FACTION_NAME_ATTACK
    })

    LISTENFOR_InvasionAttackV2Abandoned({
        snippet: "iaa_attack_horde_boss_attack_abandoned",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: FACTION_NAME_ATTACK
    })

    LISTENFOR_InvasionAttackV2Ended({
        snippet: "iae_attack_horde_boss_attack_ended",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: FACTION_NAME_ATTACK
    })

    LISTENFOR_InvasionAttackV2Overtime({
        snippet: "iao_attack_horde_overtime_boss_lose",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: FACTION_NAME_ATTACK
    })

    LISTENFOR_EntitySpawned({
        snippet: "es_attack_horde_boss_spawned",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [TAG_HAMMER_BOSS],
        factionName: FACTION_NAME_ATTACK
    })

    LISTENFOR_HealthChanged({
        snippet: "hc_attack_horde_boss_health_changed",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [TAG_HAMMER_BOSS],
        factionName: FACTION_NAME_ATTACK
    })

    // Health-based behaviour phase transition
    LISTENFOR_HealthChanged({
        snippet: "hc_attack_horde_boss_health_changed_medium",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [TAG_HAMMER_BOSS],
        normalizedThreshold: hammerBossVal.healthThreshold.medium,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE
    })

    // Health-based behaviour phase transition
    LISTENFOR_HealthChanged({
        snippet: "hc_attack_horde_boss_health_changed_low",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [TAG_HAMMER_BOSS],
        normalizedThreshold: hammerBossVal.healthThreshold.low,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE
    })

    LISTENFOR_HealthChanged({
        snippet: "hc_attack_horde_boss_health_changed_critical",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [TAG_HAMMER_BOSS],
        normalizedThreshold: hammerBossVal.healthThreshold.critical,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE
    })
}

SNIPPET_InvasionAttackV2Started("ias_attack_horde_boss_attack_started", (invasionData) => {
    if (invasionData.strength !== 4) {
        return
    }
    OUTPUT_SetGlobalVariable(hammerBossVal.globals.activeInvasionId, invasionData.id)
})

SNIPPET_InvasionAttackV2Abandoned("iaa_attack_horde_boss_attack_abandoned", (invasionData) => {
    if (invasionData.strength !== 4) {
        return
    }
    _DespawnHammerBossIfPresent()
})

SNIPPET_InvasionAttackV2Ended("iae_attack_horde_boss_attack_ended", (invasionData, _success) => {
    if (invasionData.strength !== 4) {
        return
    }
    const villageId = invasionData.villageId
    const fountains = GetVillageCentralStructures(villageId)
    if (QUERY_GetEntitiesCount(fountains) === 1 && QUERY_IsEntityDisabled(fountains)) {
        OUTPUT_TriggerCinematic(hammerBossVal.cinematic.bossWin, fountains)
    }
    _DespawnHammerBossIfPresent()
    OUTPUT_SetGlobalVariable(hammerBossVal.globals.activeInvasionId, 0)
})

SNIPPET_InvasionAttackV2Overtime("iao_attack_horde_overtime_boss_lose", (invasionData) => {
    if (invasionData.strength !== 4) {
        return
    }
    const villageId = invasionData.villageId
    const fountains = GetVillageCentralStructures(villageId)
    OUTPUT_TriggerCinematic(hammerBossVal.cinematic.bossLose, fountains)
    _DespawnHammerBossIfPresent()
})

SNIPPET_EntitySpawned("es_attack_horde_boss_spawned", (bossEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(bossEntity)
    const fountain = GetVillageCentralStructures(villageId)
    OUTPUT_SetGlobalVariable(hammerBossVal.local.bossIsRetreating, 0)

    //send boss to attack the fountain area
    OUTPUT_MoveAttackPosition(bossEntity, fountain, 5, CALLBACK_NONE)

    if (!_IsThisBossForOccupation(villageId)) {
        //trigger a local timer to send the boss back to spawn point (or another one)
        OUTPUT_SetNamedTimer(hammerBossVal.local.bossRetreatCooldownTimer, hammerBossVal.local.retreatWaitTime)

        LISTENFOR_Timer({
            snippet: "t_hammer_retreat_cooldown",
            ownerVillageId: villageId,
            timerName: hammerBossVal.local.bossRetreatCooldownTimer,
            threshold: 0
        })

        LISTENFOR_LocalTimer({
            snippet: "lt_hammer_priority_targeting_cooldown",
            ownerVillageId: villageId,
            waitTime: hammerBossVal.local.bossPriorityTargetingCooldownTimer
        })

        const invasionV2Id = QUERY_GetGlobalVariable(hammerBossVal.globals.activeInvasionId)
        AttackV2LaunchNextWaveAttack(invasionV2Id, bossEntity, -1, bossEntity)
    }

    // check if first spawn -- if so then just play VO (no need to set boss's health)
    if (!QUERY_IsGlobalVariableSet(GV_ATTACK_HORDE_BOSS_HEALTH)) {
        OUTPUT_SetGlobalVariable(GV_ATTACK_HORDE_BOSS_HEALTH, QUERY_CurrentHealth(bossEntity))
        PlayPresentationActionToAll(hammerBossVal.VO.spawn)

        return
    }

    // If boss was previously damaged then we load it to where we left off
    const storedHealth = QUERY_GetGlobalVariable(GV_ATTACK_HORDE_BOSS_HEALTH)
    if (storedHealth > 0) {
        const newHealthPercent = (storedHealth / QUERY_MaxHealth(bossEntity)) * 100
        OUTPUT_SetHealthPercent(bossEntity, newHealthPercent)
    } else if (storedHealth === -1) {
        throw new Error("Attack horde boss was spawned but had already been defeated! This shouldnt happen!")
    }

    // if the health is below a behavior transition threshold, we need to update the behaviour
    const currentHealthRatio = QUERY_CurrentHealth(bossEntity) / QUERY_MaxHealth(bossEntity)
    if (currentHealthRatio <= hammerBossVal.healthThreshold.medium) {
        _SetBossAttackModeMediumHealth(bossEntity)
    }
    if (currentHealthRatio <= hammerBossVal.healthThreshold.low) {
        _SetBossAttackModeLowHealth(bossEntity)
    }
})

SNIPPET_Timer("t_hammer_retreat_cooldown", () => {
    const invasionV2Id = QUERY_GetGlobalVariable(hammerBossVal.globals.activeInvasionId)
    if (invasionV2Id !== 0 && QUERY_GetGlobalVariable(hammerBossVal.local.bossIsRetreating) === 0) {
        const bossEntity = QUERY_GetEntitiesWithTags(TAG_HAMMER_BOSS)

        const surroundingBases = _GetVillageAttackSpawnLocations(invasionV2Id)
        const retreatTarget = FILTER_ByClosest(surroundingBases, bossEntity, 1)
        const villageId = QUERY_GetInvasionAttackV2VillageId(invasionV2Id)
        const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)

        const allPiglinsInTheVillage = FILTER_ByTagFilter(villageEntities, ["piglin"], [TAG_HAMMER_BOSS])
        if (QUERY_GetEntitiesCount(allPiglinsInTheVillage) >= invasionAttackV2Data.common.maxPiglins[4]) {
            OUTPUT_SetNamedTimer(hammerBossVal.local.bossRetreatCooldownTimer, hammerBossVal.local.retreatWaitTime)
            return
        }

        const controlledPilgins = FILTER_ByTagFilter(villageEntities, ["piglin", "hasControlGroup"], [TAG_HAMMER_BOSS])

        if (HasEntities(controlledPilgins)) {
            OUTPUT_LeaveControlGroup(controlledPilgins, bossEntity)
            OUTPUT_RemoveTag(controlledPilgins, "hasControlGroup")
        }
        //send boss to a spawner in range
        OUTPUT_AddTag(retreatTarget, "attack_boss_spawn_target_location")
        OUTPUT_MoveAttackPosition(bossEntity, retreatTarget, 20, "mc_hammer_retreat_complete")
        OUTPUT_ApplyBuff(bossEntity, "badger:buff_retreat")
        //OUTPUT_ApplyStatusEffect(bossEntity, "status_effect_retreat", 0.5)
        OUTPUT_SetGlobalVariable(hammerBossVal.local.bossIsRetreating, 1)
    }
})

SNIPPET_LocalTimer("lt_hammer_priority_targeting_cooldown", () => {
    if (QUERY_GetGlobalVariable(hammerBossVal.local.bossAtCriticalHealth) > 0) {
        return
    }
    const invasionV2Id = QUERY_GetGlobalVariable(hammerBossVal.globals.activeInvasionId)
    if (invasionV2Id !== 0 && QUERY_GetGlobalVariable(hammerBossVal.local.bossIsRetreating) === 0) {
        const bossEntity = QUERY_GetEntitiesWithTags(TAG_HAMMER_BOSS)
        if (HasEntities(bossEntity)) {
            const villageId = QUERY_GetInvasionAttackV2VillageId(invasionV2Id)
            if (QUERY_GetGlobalVariable(hammerBossVal.local.bossIsRetreating) === 0) {
                let priorityTarget = EMPTY_ENTITY_GROUP
                const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
                let allHighTargets = FILTER_ByTagFilter(villageEntities, ["mason"], [])
                if (HasEntities(allHighTargets)) {
                    priorityTarget = FILTER_ByClosest(allHighTargets, bossEntity, 1)
                } else {
                    allHighTargets = FILTER_ByTagFilter(villageEntities, ["kaboomery"], [])
                    if (HasEntities(allHighTargets)) {
                        priorityTarget = FILTER_ByClosest(allHighTargets, bossEntity, 1)
                    } else {
                        allHighTargets = FILTER_ByTagFilter(villageEntities, ["warDrums"], [])
                        if (HasEntities(allHighTargets)) {
                            priorityTarget = FILTER_ByClosest(allHighTargets, bossEntity, 1)
                        } else {
                            allHighTargets = FILTER_ByTagFilter(villageEntities, ["increased_range_missiles"], [])
                            if (HasEntities(allHighTargets)) {
                                priorityTarget = FILTER_ByClosest(allHighTargets, bossEntity, 1)
                            } else {
                                allHighTargets = FILTER_ByTagFilter(villageEntities, ["carpenter"], [])
                                priorityTarget = FILTER_ByClosest(allHighTargets, bossEntity, 1)
                            }
                        }
                    }

                    //send boss to a spawner in range
                    if (HasEntities(priorityTarget)) {
                        OUTPUT_MovePosition(bossEntity, priorityTarget, 5, CALLBACK_NONE)
                    } else {
                        priorityTarget = GetVillageCentralStructures(villageId)
                        OUTPUT_MoveAttackPosition(bossEntity, priorityTarget, 5, CALLBACK_NONE)
                    }
                }
            }

            LISTENFOR_LocalTimer({
                snippet: "lt_hammer_priority_targeting_cooldown",
                ownerVillageId: villageId,
                waitTime: hammerBossVal.local.bossPriorityTargetingCooldownTimer
            })
        }
    }
})

SNIPPET_MoveCallback("mc_hammer_retreat_complete", () => {
    const invasionV2Id = QUERY_GetGlobalVariable(hammerBossVal.globals.activeInvasionId)

    const bossEntity = QUERY_GetEntitiesWithTags(TAG_HAMMER_BOSS)
    const villageId = QUERY_GetVillageIDFromEntity(bossEntity)
    const playerTowers = OPER_Union(QUERY_GetEntitiesWithTagFilter(["arrowTower"], []), QUERY_GetEntitiesWithTagFilter(["shotgunTower"], []))
    const poiTowers = QUERY_GetEntitiesWithTagFilter(["poi_tower"], [])
    const bossTargets = OPER_Union(playerTowers, poiTowers)
    const surroundingBases = _GetVillageAttackSpawnLocations(invasionV2Id)
    const retreatTarget = FILTER_ByTagFilter(surroundingBases, ["attack_boss_spawn_target_location"], [])
    if (HasEntities(retreatTarget)) {
        OUTPUT_RemoveTag(retreatTarget, "attack_boss_spawn_target_location")
    }
    OUTPUT_RemoveBuff(bossEntity, "badger:buff_retreat")
    //OUTPUT_ApplyStatusEffect(bossEntity, "status_effect_charge", 0.5)
    //Spawn attack wave at boss location
    AttackV2LaunchNextWaveAttack(invasionV2Id, bossEntity, -1, bossEntity)

    if (HasEntities(bossTargets)) {
        const targetLock = FILTER_ByClosest(bossTargets, bossEntity, 1)
        OUTPUT_MoveAttackEntity(bossEntity, targetLock, "mc_hammer_charge_back_complete")
    } else {
        const fountains = GetVillageCentralStructures(villageId)
        OUTPUT_MoveAttackPosition(bossEntity, fountains, 2, "mc_hammer_charge_back_complete")
    }

    OUTPUT_SetNamedTimer(hammerBossVal.local.bossRetreatCooldownTimer, hammerBossVal.local.retreatWaitTime)
    OUTPUT_SetGlobalVariable(hammerBossVal.local.bossIsRetreating, 0)
})

SNIPPET_MoveCallback("mc_hammer_charge_back_complete", () => {
    const bossEntity = QUERY_GetEntitiesWithTags(TAG_HAMMER_BOSS)
    const villageId = QUERY_GetVillageIDFromEntity(bossEntity)
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const uncontrolledPilgins = FILTER_ByTagFilter(villageEntities, ["piglin"], [TAG_HAMMER_BOSS, "hasControlGroup", "seeker"])

    OUTPUT_AssignToControlGroup(uncontrolledPilgins, bossEntity)
    OUTPUT_AddTag(uncontrolledPilgins, "hasControlGroup")
    OUTPUT_ControlGroupFollow(bossEntity, bossEntity)
})

const _SetBossAttackModeMediumHealth = (bossEntity) => {
    OUTPUT_SetAttackMode(bossEntity, "melee_smash_structure", true)
}

const _SetBossAttackModeLowHealth = (bossEntity) => {
    OUTPUT_SetAttackMode(bossEntity, "melee_flurry_forward", true)
    OUTPUT_SetAttackMode(bossEntity, "melee_flurry_right", true)
    OUTPUT_SetAttackMode(bossEntity, "melee_flurry_back", true)
    OUTPUT_SetAttackMode(bossEntity, "melee_flurry_left", true)
}

// HealthChanged health tracking
SNIPPET_HealthChanged("hc_attack_horde_boss_health_changed", (bossEntity, newHealth, _oldHealth) => {
    if (newHealth <= 0) {
        OUTPUT_SetGlobalVariable(GV_ATTACK_HORDE_BOSS_HEALTH, -1)
        _OnAttackBossDefeated(bossEntity)
        Once()
    } else {
        // we store the boss's health so that if the attack ends and the boss despawns, we can set the HP to where it was on the next village attack
        OUTPUT_SetGlobalVariable(GV_ATTACK_HORDE_BOSS_HEALTH, newHealth)
    }
})

// HealthChanged phase transition - Medium HP
SNIPPET_HealthChanged("hc_attack_horde_boss_health_changed_medium", (bossEntity, _currentHealth, _previousHealth, _payload) => {
    PlayPresentationActionToAll("piglin_boss_health_attack_1")
    _SetBossAttackModeMediumHealth(bossEntity)

    if (QUERY_GetGlobalVariable(hammerBossVal.local.bossIsRetreating) === 0) {
        const villageId = QUERY_GetVillageIDFromEntity(bossEntity)
        const fountains = GetVillageCentralStructures(villageId)
        const bossTargets = OPER_Union(QUERY_GetEntitiesWithTagFilter(["tier2PlayerStructure"], []), QUERY_GetEntitiesWithTagFilter(["tier3PlayerStructure"], []))

        if (HasEntities(bossTargets)) {
            const targetLock = FILTER_ByClosest(bossTargets, bossEntity, 1)
            OUTPUT_MoveAttackEntity(bossEntity, targetLock, CALLBACK_NONE)
        } else {
            OUTPUT_MoveAttackPosition(bossEntity, fountains, 2, CALLBACK_NONE)
        }

        //OUTPUT_SetNamedTimer(hammerBossVal.local.bossRetreatCooldownTimer, hammerBossVal.local.retreatWaitTime)
    }
    Once()
})

// HealthChanged phase transition - Low HP
SNIPPET_HealthChanged("hc_attack_horde_boss_health_changed_low", (bossEntity, _currentHealth, _previousHealth, _payload) => {
    PlayPresentationActionToAll("piglin_boss_health_attack_2")
    _SetBossAttackModeLowHealth(bossEntity)

    if (QUERY_GetGlobalVariable(hammerBossVal.local.bossIsRetreating) === 0) {
        const nearestPlayer = GetClosestPlayer(bossEntity)
        const bossTargets = QUERY_GetEntitiesWithTagFilter(["tier3PlayerStructure"], [])

        if (HasEntities(bossTargets)) {
            const targetLock = FILTER_ByClosest(bossTargets, bossEntity, 1)
            OUTPUT_MoveAttackEntity(bossEntity, targetLock, CALLBACK_NONE)
        } else {
            OUTPUT_MoveAttackEntity(bossEntity, nearestPlayer, CALLBACK_NONE)
        }

        //OUTPUT_SetNamedTimer(hammerBossVal.local.bossRetreatCooldownTimer, hammerBossVal.local.retreatWaitTime)
    }

    Once()
})

// HealthChanged phase transition - critical HP
SNIPPET_HealthChanged("hc_attack_horde_boss_health_changed_critical", (bossEntity, _currentHealth, _previousHealth, _payload) => {
    //PlayPresentationActionToAll("piglin_boss_health_attack_3")

    if (QUERY_GetGlobalVariable(hammerBossVal.local.bossIsRetreating) === 0) {
        OUTPUT_SetGlobalVariable(hammerBossVal.local.bossAtCriticalHealth, 1)
        const villageId = QUERY_GetVillageIDFromEntity(bossEntity)
        const fountains = GetVillageCentralStructures(villageId)
        OUTPUT_MoveAttackEntity(bossEntity, fountains, CALLBACK_NONE)
    }
    Once()
})

const _OnAttackBossDefeated = (bossEntity) => {
    // Fear all remaining piglins around the boss and nearby village
    const villageId = QUERY_GetVillageIDFromEntity(bossEntity)
    const fountains = GetVillageCentralStructures(villageId)
    const allPiglins = QUERY_GetEntitiesWithTags(TAGS_PIGLIN_MOB)
    if (HasEntities(fountains) && HasEntities(allPiglins)) {
        const closestFountain = FILTER_ByClosest(fountains, bossEntity, 1)
        const piglinsNearBoss = FILTER_ByDistance(allPiglins, bossEntity, 150)
        const piglinsNearFountain = FILTER_ByDistance(allPiglins, closestFountain, 150)
        const piglinsToFear = OPER_Union(piglinsNearBoss, piglinsNearFountain)
        OUTPUT_ApplyStatusEffect(piglinsToFear, STATUS_EFFECT.FEARED, 200)
        OUTPUT_RemoveLeash(piglinsToFear)
    }

    LISTENFOR_CinematicFinished({
        snippet: "cf_hammer_boss_dead_VO",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: hammerBossVal.cinematic.bossDead
    })
}

// Boss Dead VO
SNIPPET_CinematicFinished("cf_hammer_boss_dead_VO", () => {
    _OnBossDeadCineFinished()
    LISTENFOR_LocalTimer({
        snippet: "lt_post_portal_death_boss_action",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 3,
        payloadString: hammerBossVal.VO.death
    })
    Once()
})

const _OnBossDeadCineFinished = () => {
    UnlockJournalEntry(JOURNAL_UNLOCKS.HORDE_ATTACK_BOSS)
    OUTPUT_SetGlobalVariable("hammerBossKilled", 1)
    OUTPUT_SetGlobalVariable("hammerBossKilled_stopVillageCin", 1) //in invasion_attacks_v2 - if you just killed the boss, prevents village attack success cinematic from playing

    TelemetrySendBossKilled(GetAllPlayers(), "AttackBoss") //telemetry achievement event for killing boss
    TelemetrySendKeyActionCompletedServerEvent(BOSS_BASE_VALS.telemetry.attackBossDefeat)

    // NOTE (mason) does this make sense to do on the attacked village?
    //
    //const villageEntity = GetVillageEntityFromID(QUERY_GetVillageIDFromEntity(bossEntity))
    //OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.BOSS, MAP_BOSS.DEFEATED)

    // NOTE (mason) design doesnt call for it but this would end the village attack, which probably makes sense as its rather
    // anti-climatic to continue on with the attack after the more intuitive resolution point of defeating the boss has passed
    const attackInvasionid = QUERY_GetGlobalVariable(GV_ATTACK_HORDE_BOSS_ATTACK_ACTIVE_ID)
    if (attackInvasionid !== 0) {
        // end the attack successfully
        OUTPUT_EndInvasionAttackV2(attackInvasionid, true)
    }

    // We know that when the boss dies, the faction is defeated
    GV_ROAMING_PIGLIN_ATTACK_FACTION_SPAWNERS.forEach((roamingGV) => {
        OUTPUT_SetGlobalVariable(roamingGV, 1)
    })

    // Correct horde decks since one horde just went out of action
    ReplenishNightOutpostHordeDeck()
}
