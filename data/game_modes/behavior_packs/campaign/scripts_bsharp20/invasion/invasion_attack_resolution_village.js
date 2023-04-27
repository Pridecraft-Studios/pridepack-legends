//Auto-resolve uses some real values (building HP) but is largely approximated. Since horde damage and village defense are NOT using real world values they do not take into account the fact that difficulty substantially changes these factors.
//By having an attack and defense penalty per difficulty based on settings in "component_difficulty_modifiers_piglin", we can more accurately approximate attack outcomes against a village.
const invasionVillageAttackResolveConfig_Normal = {
    damageBonus: 1.3, //Modifies final horde damage output. For example if the attack horde deals 10,000 damage normally, but has a 1.5x damage multiplier on Hard (Legendary), then the damage output should instead be 15,000
    defensePenalty: 1.0 //Modifies final village defense rating. For example, if my village has a defense rating of 10,000 (mitigates 10,000 damage), but piglins have 2x health on Hard (Legendary), then that defense is half as effective as on the default mode.
}

const invasionVillageAttackResolveConfig_Peaceful = {
    damageBonus: 0.3,
    defensePenalty: 0.3
}

const invasionVillageAttackResolveConfig = {
    damageBonus: 1,
    defensePenalty: 1
}

const invasionVillageAttackResolveConfig_Hard = {
    damageBonus: 2.5,
    defensePenalty: 1.0
}

RegisterDifficultyConfig("invasion_village_attack_resolve_config", invasionVillageAttackResolveConfig_Normal, GAME_DIFFICULTY.normal)
RegisterDifficultyConfig("invasion_village_attack_resolve_config", invasionVillageAttackResolveConfig_Peaceful, GAME_DIFFICULTY.peaceful)
RegisterDifficultyConfig("invasion_village_attack_resolve_config", invasionVillageAttackResolveConfig, GAME_DIFFICULTY.easy)
RegisterDifficultyConfig("invasion_village_attack_resolve_config", invasionVillageAttackResolveConfig_Hard, GAME_DIFFICULTY.hard)

const invasionVillageAttackResolveVal = {
    common: {
        /*
        The algorithm first tries to destroy a percentage of buildings in each concentric circle with radius specified, going from outwards to inwards.
        Damage may not reach inner buildings, if they run out of damage amount beforehand. 
        */
        damageResolveAreas: [
            {
                radius: 30,
                percentageOfBuildingsToAffect: 30
            },
            {
                radius: 60,
                percentageOfBuildingsToAffect: 40
            },
            {
                radius: 90,
                percentageOfBuildingsToAffect: 50
            },
            {
                radius: 150,
                percentageOfBuildingsToAffect: 50
            }
        ],
        globalMinDamage: 50, //This is the absolute minimum damage that will always be applied (regardless of % scaling)
        //These structures will be damaged this many times by the algorithm before they go down, instead of applying full damage at once
        damageFactors: {
            centralStructure: 3,
            poiTowers: 3,
            spyglass: 2,
            kaboomery: 2,
            warDrums: 2
        },
        masonHPMultiplier: 1.5, //HP is effectively multiplied this much by a mason
        carpenterHPMultiplier: 1.2, //HP is effectively multiplied this much by a carpenter
        carpenterHPMultiplierUpgraded: 1.4, //HP is effectively multiplied this much by a carpenter
        effectiveWallHPDivider: 5, //Wall HP for damage calculations is their HP / this number. This is for balancing - otherwise they tank everything. NOTE: I've only enabled this on Normal and Hard (Mythic and Legendary) difficulties.
        destroyWallsInBunch: 5, //Destroy this many walls at the same time

        // TODO: Remove this when occupation damage uses the new damage applier (only used for that now)
        wallFactor: 5, //While resolving village attack, this number of walls will count as 1 building

        // Intrinsic active defense values to account for mobs fighting back against piglins. NOTE: Mobs are good so this should probably be a bit higher, but we also know that attacks against these mob alliances tend to be ineffective, so I don't want their innate defense to be too effective.
        mobAllianceDefense: {
            [MOB_ALLIANCE_NAME_CREEPER]: 2000,
            [MOB_ALLIANCE_NAME_SKELETON]: 2000,
            [MOB_ALLIANCE_NAME_ZOMBIE]: 2000
        },
        global: {
            villageDamagedPlayed: "invasionVillageDamagedCinePlayed",
            villageDisabledPlayed: "invasionVillageDisabledCinePlayed",
            villageDamagedVOPlayed: "invasionVillageDamagedVOPlayed",
            villageDestroyedVOPlayed: "invasionVillageDestroyedVOPlayed"
        },
        cinematics: {
            firstDamagedVillageSighting: "vil01_c06_damaged",
            firstDisabledVillageSighting: "vil01_c07_destroyed"
        },
        triggers: {
            damagedVillageTrigger: "badger:temp_spatial_trigger_zone_village_intro"
        }
    },
    [FACTION_NAME_ATTACK]: {
        destroyPercent: 70, //When damage against a building is calculated, this is the % chance to destroy the building. It also compares to health
        strengthData: {
            1: {
                baseDamage: 25000, //the amount of damage we think this horde can deal at this strength
                minDamage: 1000, //the minimum amount of damage to apply in the attack, even if all of it is cancelled out. 
                phaseModifier: 0, //this is bonus damage that is multiplied by the phase. Removing for now as it feels redundant.
                vulnerabilityBonus: 5000, //This is EXTRA damage that this horde will do to you if your village defense rating is below the threshold. Tuned to be 20% of damage for now.
                vulnerabilityThreshold: 2500 //Threshold for which we consider a village "lightly" defended against this strength of attack
            },
            2: {
                baseDamage: 50000,
                minDamage: 2000,
                phaseModifier: 0,
                vulnerabilityBonus: 10000,
                vulnerabilityThreshold: 5000
            },
            3: {
                baseDamage: 75000,
                minDamage: 4000,
                phaseModifier: 0,
                vulnerabilityBonus: 15000,
                vulnerabilityThreshold: 10000
            },
            // Special strength 4 data for attack boss village attack.
            4: {
                baseDamage: 100000,
                minDamage: 8000,
                phaseModifier: 0,
                vulnerabilityBonus: 20000,
                vulnerabilityThreshold: 15000
            }
        }
    },
    [FACTION_NAME_DEFEND]: {
        destroyPercent: 50,
        strengthData: {
            1: {
                baseDamage: 20000,
                minDamage: 1000,
                phaseModifier: 0,
                vulnerabilityBonus: 4000,
                vulnerabilityThreshold: 2500
            },
            2: {
                baseDamage: 40000,
                minDamage: 2000,
                phaseModifier: 0,
                vulnerabilityBonus: 8000,
                vulnerabilityThreshold: 5000
            },
            3: {
                baseDamage: 60000,
                minDamage: 4000,
                phaseModifier: 0,
                vulnerabilityBonus: 12000,
                vulnerabilityThreshold: 10000
            }
        }
    },
    [FACTION_NAME_OBSTACLE]: {
        destroyPercent: 60,
        strengthData: {
            1: {
                baseDamage: 22500,
                minDamage: 1000,
                phaseModifier: 0,
                vulnerabilityBonus: 4500,
                vulnerabilityThreshold: 2500
            },
            2: {
                baseDamage: 45000,
                minDamage: 2000,
                phaseModifier: 0,
                vulnerabilityBonus: 9000,
                vulnerabilityThreshold: 5000
            },
            3: {
                baseDamage: 75000, //bumped this up a bit because the lava launchers make short work of towers
                minDamage: 4000,
                phaseModifier: 0,
                vulnerabilityBonus: 15000,
                vulnerabilityThreshold: 10000
            }
        }
    },
    //I'm leaving ACT 1 stuff alone since its a far more closed environment
    [FACTION_NAME_DBB]: {
        destroyPercent: 80,
        strengthData: {
            1: {
                baseDamage: 1500,
                minDamage: 300,
                phaseModifier: 20,
                vulnerabilityBonus: 500,
                vulnerabilityThreshold: 200
            }
        }
    }
}

SNIPPET_Bootstrap("", () => {
    LISTENFOR_ExternalEvent({
        snippet: "ee_destruction_test",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "destruction_test"
    })

    LISTENFOR_ExternalEvent({
        snippet: "ee_count_stuff_in_nearest_village",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "count_stuff_in_nearest_village"
    })
})

SNIPPET_ExternalEvent("ee_count_stuff_in_nearest_village", (data) => {
    const player = FILTER_RandomCount(QUERY_GetAlivePlayers(), 1)
    const nearestVillageId = QUERY_GetVillageIDFromEntity(FILTER_ByClosest(GetAliveVillages(), player, 1))
    const count = QUERY_GetEntitiesCount(FILTER_ByVillageID(QUERY_GetEntitiesWithTags(data.value), nearestVillageId))
    OUTPUT_DebugLogInvasion("Number of " + data.value + " is " + count)
})

SNIPPET_ExternalEvent("ee_destruction_test", (variant) => {
    const option = variant.value
    const player = FILTER_RandomCount(QUERY_GetAlivePlayers(), 1)
    const nearestEntity = FILTER_ByClosest(QUERY_GetEntitiesWithTags(["buildable"]), player, 1)

    switch (option) {
        case 1:
            OUTPUT_DestroyEntities(nearestEntity)
            break
        case 2:
            OUTPUT_DamageEntities(nearestEntity, 10000)
            break
        case 3:
            DestroyStuffForReal(nearestEntity)
            break
    }
})

/*
Try to apply the given damage in a sensible way
*/
const DistributeVillageDamageCommon = (villageId, factionName, effectiveDamage) => {
    let destroyedEntities = EMPTY_ENTITY_GROUP
    let damagedEntities = EMPTY_ENTITY_GROUP
    const hordeInfo = invasionVillageAttackResolveVal[factionName]
    const allBuildables = _GetAllVillageBuildables(villageId)
    const centralStructure = GetVillageCentralStructures(villageId)

    const allCount = QUERY_GetEntitiesCount(allBuildables)
    let destroyedBuildingCount = 0
    let damagedBuildingCount = 0

    let remainingDamage = effectiveDamage
    const hasMason = QUERY_GetEntitiesCount(FILTER_ByVillageID(QUERY_GetEntitiesWithTags("mason"), villageId)) > 0
    const hasCarpenter = QUERY_GetEntitiesCount(FILTER_ByVillageID(QUERY_GetEntitiesWithTags("carpenter"), villageId)) > 0

    OUTPUT_DebugLogInvasion(">> ENTERING RING DAMAGE APPLIER with damage amount " + remainingDamage)

    //Apply damage in concentric circles first, outwards to inwards
    for (let i = invasionVillageAttackResolveVal.common.damageResolveAreas.length - 1; i >= 0; i--) {
        OUTPUT_DebugLogInvasion(">> CHECKING RING " + i)
        const allBuildingsInCurrentCircle = FILTER_ByDistance(allBuildables, centralStructure, invasionVillageAttackResolveVal.common.damageResolveAreas[i].radius)
        const allBuildingsInPreviousCircle = i > 0 ? FILTER_ByDistance(allBuildables, centralStructure, invasionVillageAttackResolveVal.common.damageResolveAreas[i - 1].radius) : EMPTY_ENTITY_GROUP

        const buildingsInRing = OPER_Difference(allBuildingsInCurrentCircle, allBuildingsInPreviousCircle)
        const numberOfBuildingsToAffectInRing = Math.floor((QUERY_GetEntitiesCount(buildingsInRing) * invasionVillageAttackResolveVal.common.damageResolveAreas[i].percentageOfBuildingsToAffect) / 100)
        OUTPUT_DebugLogInvasion("Damage Applier: Trying to affect #" + numberOfBuildingsToAffectInRing)

        //Cycle through buildables in far > near order in each ring
        let allUncheckedRingBuildables = buildingsInRing
        let checkedBuildings = 0
        let ringBuildingsDestroyed = EMPTY_ENTITY_GROUP
        let ringBuildingsDamaged = EMPTY_ENTITY_GROUP

        while (checkedBuildings < numberOfBuildingsToAffectInRing && remainingDamage > 0) {
            const currentBuilding = FILTER_ByFarthest(allUncheckedRingBuildables, centralStructure, 1)

            //Apply damage to buildings
            const damageData = _ApplyDamageToBuilding(currentBuilding, hasMason, hasCarpenter, hordeInfo)
            const affectedBuildingAmount = QUERY_GetEntitiesCount(damageData.structuresAffected)
            if (damageData.wasStructureDestroyed) {
                ringBuildingsDestroyed = OPER_Union(ringBuildingsDestroyed, damageData.structuresAffected)
            } else {
                ringBuildingsDamaged = OPER_Union(ringBuildingsDamaged, damageData.structuresAffected)
            }

            remainingDamage -= damageData.appliedDamage
            checkedBuildings += affectedBuildingAmount
            allUncheckedRingBuildables = OPER_Difference(allUncheckedRingBuildables, damageData.structuresAffected)
        }

        destroyedEntities = OPER_Union(destroyedEntities, ringBuildingsDestroyed)
        damagedEntities = OPER_Union(damagedEntities, ringBuildingsDamaged)

        const ringBuildingsDestroyedCount = QUERY_GetEntitiesCount(ringBuildingsDestroyed)
        const ringBuildingsDamagedCount = QUERY_GetEntitiesCount(ringBuildingsDamaged)

        OUTPUT_DebugLogInvasion("Ring Damage Applier: Checked # " + checkedBuildings + " Destroyed #" + ringBuildingsDestroyedCount + ". Damaged #" + ringBuildingsDamagedCount)
        OUTPUT_DebugLogInvasion("Ring Damage Applier: Remaining Damage: " + remainingDamage)

        if (remainingDamage <= 0) {
            break
        }
    }

    let aliveBuildings = OPER_Difference(allBuildables, destroyedEntities)

    OUTPUT_DebugLogInvasion(">> EXITING RING DAMAGE APPLIER with damage amount " + remainingDamage)

    //Apply damage to central structure if there is damage remaining after going through all rings
    if (remainingDamage > 0) {
        const centralStructureDamageData = _ApplyDamageToBuilding(centralStructure, hasMason, hasCarpenter, hordeInfo)
        if (centralStructureDamageData.wasStructureDestroyed) {
            destroyedEntities = OPER_Union(destroyedEntities, centralStructureDamageData.structuresAffected)
            OUTPUT_DebugLogInvasion(">> DESTROYING Central Structure")
        } else {
            damagedEntities = OPER_Union(damagedEntities, centralStructureDamageData.structuresAffected)
            OUTPUT_DebugLogInvasion(">> DAMAGING Central Structure")
        }
        remainingDamage -= centralStructureDamageData.appliedDamage
    }

    OUTPUT_DebugLogInvasion(">> ENTERING RANDOM DAMAGE APPLIER with damage amount " + remainingDamage)

    //If there is damage leftover after going through all the circles - keep applying damage to the rest randomly
    let randomBuildingsDestroyed = EMPTY_ENTITY_GROUP
    let randomBuildingsDamaged = EMPTY_ENTITY_GROUP
    while (remainingDamage > 0 && QUERY_GetEntitiesCount(aliveBuildings) > 0) {
        const currentBuilding = FILTER_RandomCount(aliveBuildings, 1)

        const damageData = _ApplyDamageToBuilding(currentBuilding, hasMason, hasCarpenter, hordeInfo)
        if (damageData.wasStructureDestroyed) {
            randomBuildingsDestroyed = OPER_Union(randomBuildingsDestroyed, damageData.structuresAffected)
            aliveBuildings = OPER_Difference(aliveBuildings, damageData.structuresAffected)
        } else {
            randomBuildingsDamaged = OPER_Union(randomBuildingsDamaged, damageData.structuresAffected)
        }
        remainingDamage -= damageData.appliedDamage
    }

    destroyedEntities = OPER_Union(destroyedEntities, randomBuildingsDestroyed)
    damagedEntities = OPER_Union(damagedEntities, randomBuildingsDamaged)

    randomBuildingsDamaged = OPER_Difference(randomBuildingsDamaged, randomBuildingsDestroyed) //Remove overlaps from damaged buildings

    const randomlyDestroyedStructureCount = QUERY_GetEntitiesCount(randomBuildingsDestroyed)
    const randomlyDamagedStructureCount = QUERY_GetEntitiesCount(randomBuildingsDamaged)

    OUTPUT_DebugLogInvasion("RANDOM Damage Applier: Destroyed #" + randomlyDestroyedStructureCount + ". Damaged #" + randomlyDamagedStructureCount)
    OUTPUT_DebugLogInvasion(">> EXITING RANDOM DAMAGE APPLIER with damage amount " + remainingDamage)

    //If only central structure is remaining, destroy them. NOTE, we may want to adjust this by having destroyedBuildingCount > some % of buildings destroyed/damaged? I noticed this with a level 2 village attack that should have taken the village.
    destroyedBuildingCount = QUERY_GetEntitiesCount(destroyedEntities)
    if (destroyedBuildingCount >= allCount) {
        DestroyStuffForReal(centralStructure)
        destroyedEntities = OPER_Union(destroyedEntities, centralStructure)
    }

    //Final counts
    damagedEntities = OPER_Difference(damagedEntities, destroyedEntities) //Remove overlaps from damaged buildings (buildings that may have been damaged first, then destroyed later in the algorithm)
    destroyedBuildingCount = QUERY_GetEntitiesCount(destroyedEntities)
    damagedBuildingCount = QUERY_GetEntitiesCount(damagedEntities)

    Logv(`Village Attack Resolution Damage Report (Raw)
    Effective Damage Applied: ${effectiveDamage}
    Total Buildings: ${allCount + 1}
    Destroyed Buildings: ${destroyedBuildingCount}
    Freshly Damaged Buildings: ${damagedBuildingCount}`)

    return { destroyed: destroyedEntities, damaged: damagedEntities }
}

const _CalculateEffectiveBuildingHP = (currentBuilding, villageHasMason, villageHasCarpenter, returnMaxHP = false) => {
    //Returns either current or max health, depending on argument passed in
    const buildingHP = returnMaxHP ? QUERY_MaxHealth(currentBuilding) : QUERY_CurrentHealth(currentBuilding)
    let effectiveBuildingHP = buildingHP
    //Add to effective HP if mason is present.
    if (villageHasMason && QUERY_HasTags(currentBuilding, ["buffable-mason"])) {
        effectiveBuildingHP *= invasionVillageAttackResolveVal.common.masonHPMultiplier
    }
    //Add to effective HP if carpenter is present. Checks to see if they have the advanced carpenter upgrade which has 2x healing.
    if (villageHasCarpenter) {
        if (QUERY_GetTeamResource(TEAM_BLUE, "upgrade_carpenter") > 0) {
            effectiveBuildingHP *= invasionVillageAttackResolveVal.common.carpenterHPMultiplierUpgraded
        } else {
            effectiveBuildingHP *= invasionVillageAttackResolveVal.common.carpenterHPMultiplier
        }
    }

    //Discount wall HP by <effectiveWallHPDivider> IF its on the Mythic or Legendary mode
    if (QUERY_HasTags(currentBuilding, ["wall"]) && (QUERY_GameDifficulty() === "Normal" || QUERY_GameDifficulty() === "Hard")) {
        const effectiveWallHPDivider = invasionVillageAttackResolveVal.common.effectiveWallHPDivider
        effectiveBuildingHP = effectiveBuildingHP / effectiveWallHPDivider
    }

    return effectiveBuildingHP
}

//If i understand what is happening here, the damage factor will determine a) whether the building should be destroyed, b) if not destroyed, how much % of its health it should take in this attack. The amount of damage applied is then passed back in and deducted from remaining.
const _ApplyPartialDamageToBuilding = (building, effectiveHP, effectiveMaxHP, damageFactor) => {
    const damageCheck = 1 / damageFactor
    let destroyed = false
    let damageUsed = 0
    if (effectiveHP / effectiveMaxHP <= damageCheck) { //Checks health ratio compared to the damage factor. The higher the damage factor, the less chance of it being destroyed immediately.
        DestroyStuffForReal(building)
        damageUsed = effectiveHP
        destroyed = true
    } else {
        damageUsed = effectiveMaxHP * damageCheck
        OUTPUT_DamageEntities(building, damageUsed)
    }
    return { structuresAffected: building, wasStructureDestroyed: destroyed, appliedDamage: damageUsed }
}

//Applies damage to buildings, checks tags to see if it needs to do anything special like partial damage or reduce the HP of the structure (in the case of walls on harder difficulties)
const _ApplyDamageToBuilding = (currentBuilding, hasMason, hasCarpenter, hordeInfo, forceDestroyNonEssential = false) => {
    const effectiveBuildingHP = _CalculateEffectiveBuildingHP(currentBuilding, hasMason, hasCarpenter)
    const effectiveBuildingMaxHP = _CalculateEffectiveBuildingHP(currentBuilding, hasMason, hasCarpenter, true)
    const villageId = QUERY_GetVillageIDFromEntity(currentBuilding)

    let buildingDamageData = { structuresAffected: currentBuilding, wasStructureDestroyed: true, appliedDamage: 0 }

    if (effectiveBuildingHP <= 0 || effectiveBuildingMaxHP <= 0) {
        // This building either doesn't have health or is kept alive by some other means.
        // Return default data
        return buildingDamageData
    }

    //First check for special buildings which will not take full damage every time this is called
    if (QUERY_HasTags(currentBuilding, ["poi_tower"])) {
        buildingDamageData = _ApplyPartialDamageToBuilding(currentBuilding, effectiveBuildingHP, effectiveBuildingMaxHP, invasionVillageAttackResolveVal.common.damageFactors.poiTowers)
    } else if (QUERY_HasTags(currentBuilding, ["kaboomery"])) {
        buildingDamageData = _ApplyPartialDamageToBuilding(currentBuilding, effectiveBuildingHP, effectiveBuildingMaxHP, invasionVillageAttackResolveVal.common.damageFactors.kaboomery)
    } else if (QUERY_HasTags(currentBuilding, ["increased_range_missiles"])) {
        buildingDamageData = _ApplyPartialDamageToBuilding(currentBuilding, effectiveBuildingHP, effectiveBuildingMaxHP, invasionVillageAttackResolveVal.common.damageFactors.spyglass)
    } else if (QUERY_HasTags(currentBuilding, ["warDrums"])) {
        buildingDamageData = _ApplyPartialDamageToBuilding(currentBuilding, effectiveBuildingHP, effectiveBuildingMaxHP, invasionVillageAttackResolveVal.common.damageFactors.warDrums)
    } else if (QUERY_HasTags(currentBuilding, [TAG_VILLAGE_FOUNTAIN]) || QUERY_HasTags(currentBuilding, [TAG_MOB_ALLEGIANCE_STRUCTURE]) || QUERY_HasTags(currentBuilding, [TAG_OUTPOST_STRUCTURE])) {
        buildingDamageData = _ApplyPartialDamageToBuilding(currentBuilding, effectiveBuildingHP, effectiveBuildingMaxHP, invasionVillageAttackResolveVal.common.damageFactors.centralStructure)
    } else if (QUERY_HasTags(currentBuilding, ["wall"])) {
        //Destroy wall and the nearest <destroyWallsInBunch> walls always
        const villageWalls = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["wall"], ["wall_destroyed"])
        const nearestWalls = FILTER_ByClosest(OPER_Difference(villageWalls, currentBuilding), currentBuilding, invasionVillageAttackResolveVal.common.destroyWallsInBunch - 1)
        const listOfAffectedBuildings = OPER_Union(currentBuilding, nearestWalls)
        OUTPUT_DestroyEntities(listOfAffectedBuildings)
        OUTPUT_AddTag(listOfAffectedBuildings, "wall_destroyed")
        buildingDamageData = { structuresAffected: listOfAffectedBuildings, wasStructureDestroyed: true, appliedDamage: effectiveBuildingHP * QUERY_GetEntitiesCount(listOfAffectedBuildings) }
    } else if (QUERY_HasTags(currentBuilding, ["bridge"])) {
        //Destroy bridge always, don't count damage applied.
        OUTPUT_DestroyEntities(currentBuilding)
        buildingDamageData = { structuresAffected: currentBuilding, wasStructureDestroyed: true, appliedDamage: 0 }
    } else {
        //For all other buildings, destroy or damage based off percentage chance (specified per Horde).
        //If a building is already damaged, destroy it.
        const randomRoll = RandomFloat() * 100
        if (randomRoll < hordeInfo.destroyPercent || forceDestroyNonEssential) {
            //Destroy (factor = 1 -> Building will destroy in 1 hit)
            buildingDamageData = _ApplyPartialDamageToBuilding(currentBuilding, effectiveBuildingHP, effectiveBuildingMaxHP, 1)
        } else {
            //Apply damage with damage factor 2 (building will take a hit twice)
            buildingDamageData = _ApplyPartialDamageToBuilding(currentBuilding, effectiveBuildingHP, effectiveBuildingMaxHP, 2)
        }
    }

    return buildingDamageData
}

const _GetAllVillageBuildables = (villageId) => {
    const defensiveBuildables = GetDefensiveBuildings(villageId)
    const nonDefensiveBuildables = GetNonDefensiveBuildings(villageId)
    return OPER_Union(defensiveBuildables, nonDefensiveBuildables)
}

SNIPPET_SpatialPartitionEntered("spe_invasion_first_village_damaged_cine", (triggeringEntity, _enteringEntity, _payload) => {
    if (DoOnce(invasionVillageAttackResolveVal.common.global.villageDamagedPlayed)) {
        OUTPUT_DebugLogInvasion("Playing the Village Damaged cine")
        OUTPUT_TriggerCinematic(invasionVillageAttackResolveVal.common.cinematics.firstDamagedVillageSighting, GetPlayers())
    }
    Once()
    OUTPUT_DespawnEntities(triggeringEntity)
})

SNIPPET_SpatialPartitionEntered("spe_invasion_first_village_destroyed_cine", (triggeringEntity, _enteringEntity, _payload) => {
    if (DoOnce(invasionVillageAttackResolveVal.common.global.villageDisabledPlayed)) {
        OUTPUT_DebugLogInvasion("Playing the Village Disabled cine")
        OUTPUT_TriggerCinematic(invasionVillageAttackResolveVal.common.cinematics.firstDisabledVillageSighting, GetPlayers())
    }
    Once()
    OUTPUT_DespawnEntities(triggeringEntity)
})

//Note that percent complete is based on when you arrive. E.g. if you arrive late, then perhaps 50% of the damage has already been dealt.
const InvasionAttackV2ApplyDamage = (villageId, hordeName, strength, percentComplete) => {
    Logv(`Applying damage to village '${villageId}'`)

    const villageDefense = _CalculateVillageDefense(villageId)
    const attackDamage = _CalculateVillageAttackDamage(hordeName, strength, percentComplete, villageDefense)

    const minDamage = invasionVillageAttackResolveVal.common.globalMinDamage

    let totalDamageApplied = attackDamage - villageDefense
    if (totalDamageApplied < minDamage) {
        OUTPUT_DebugLogInvasion(`\t total damage calculated is too small. Using minimum damage '${minDamage}'...`)
        totalDamageApplied = minDamage
    }

    // The common damage function is fairly long so its been moved to a helper function.
    const affectedEntities = DistributeVillageDamageCommon(villageId, hordeName, totalDamageApplied)

    return { affectedEntities: affectedEntities, attackDamage: attackDamage, villageDefense: villageDefense }
}

const _GetHordeStrengthData = (hordeName, attackStrength) => {
    return invasionVillageAttackResolveVal[hordeName].strengthData[attackStrength]
}

const _CalculateVillageAttackDamage = (hordeName, attackStrength, percentScaling, villageDefense) => {
    const strengthData = _GetHordeStrengthData(hordeName, attackStrength)
    const invasionPhase = GetInvasionPhase()
    const difficulty = QUERY_GameDifficulty()

    const baseDamage = strengthData.baseDamage
    const phaseMod = strengthData.phaseModifier * invasionPhase //bonus damage to deal based on the value PER horde * the invasion phase. Note that phase 1 returns as 0, so at phase 1 the bonus is zeor. Not sure if we need this since strengths inherently work here.
    const minDamage = strengthData.minDamage
    const vulnerabilityBonus = strengthData.vulnerabilityBonus * (1 - Math.min(villageDefense / strengthData.vulnerabilityThreshold, 1)) //bonus damage to deal if village is below a threshold of defense, essentially "are they extra vulnerable"
    //Set the difficulty multiplier to the default configuration / difficulty (Fabled aka Easy)
    let difficultyMultiplier = invasionVillageAttackResolveConfig.damageBonus
    //If difficulty is not default, then change multiplier based on config at top. Harder difficulties have their attack rating multiplied by this.
    if (difficulty === "Peaceful") {
        difficultyMultiplier = invasionVillageAttackResolveConfig_Peaceful.damageBonus
    } else if (difficulty === "Normal") {
        difficultyMultiplier = invasionVillageAttackResolveConfig_Normal.damageBonus
    } else if (difficulty === "Hard") {
        difficultyMultiplier = invasionVillageAttackResolveConfig_Hard.damageBonus
    }

    const totalDamage = Math.max(baseDamage + phaseMod + vulnerabilityBonus, minDamage) * percentScaling * difficultyMultiplier

    Logv(`Village Attack Damage Calculation: 
    base damage: ${baseDamage}, 
    phase modifier: ${phaseMod},
    vulnerability bonus: ${vulnerabilityBonus} (${strengthData.vulnerabilityBonus}),
    percent scaling: ${percentScaling},
    difficulty multiplier: ${difficultyMultiplier}
    total damage: ${totalDamage}`)

    return totalDamage
}

const _CalculateVillageDefense = (villageId) => {
    const villageBuildings = GetEntitiesWithTagsAndVillage(["buildable"], villageId)
    const activeDefenseValue = QUERY_EntitiesInvasionDefenseValue(villageBuildings)
    const defenseMultiplier = QUERY_EntitiesInvasionDefenseMultiplier(villageBuildings)
    const difficulty = QUERY_GameDifficulty() //query difficulty, on higher difficulties piglins have more health. With more health, your defense value means less. E.g. 250 defense from a tower is half as effective if the piglins its shooting at have twice the health.

    //Whether or not there should be any bonus defense as the result of this being a mob alliance
    let mobAllianceBonus = 0
    const villageFaction = QUERY_GetFactionNameFromVillageID(villageId)
    if (FACTION_MOB_ALLIANCES.includes(villageFaction)) {
        mobAllianceBonus = invasionVillageAttackResolveVal.common.mobAllianceDefense[villageFaction]
    }

    //Set the difficulty penalty to the default configuration / difficulty (Fabled aka Easy)
    let difficultyPenalty = invasionVillageAttackResolveConfig.defensePenalty
    //If difficulty is not default, then change penalty based on config at top. Harder difficulties have their defense rating divided by this.
    if (difficulty === "Peaceful") {
        difficultyPenalty = invasionVillageAttackResolveConfig_Peaceful.defensePenalty
    } else if (difficulty === "Normal") {
        difficultyPenalty = invasionVillageAttackResolveConfig_Normal.defensePenalty
    } else if (difficulty === "Hard") {
        difficultyPenalty = invasionVillageAttackResolveConfig_Hard.defensePenalty
    }

    const totalMitigatedDamage = (activeDefenseValue * defenseMultiplier + mobAllianceBonus) / difficultyPenalty

    OUTPUT_DebugLogInvasion(`Village Defense Calculation: 
    active defense value: ${activeDefenseValue}, 
    defense multiplier: ${defenseMultiplier}, 
    mob alliance bonus: ${mobAllianceBonus},
    total mitigated damage: ${totalMitigatedDamage}`)

    return totalMitigatedDamage
}
