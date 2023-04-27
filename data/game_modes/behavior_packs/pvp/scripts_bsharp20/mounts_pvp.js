const poiMountsPVP = {
    tagInAllMounts: "poi_mount"
}

SNIPPET_Bootstrap("", () => {
    LISTENFOR_PlayerInteracted({
        snippet: "pi_animal_mount_pvp",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [poiMountsPVP.tagInAllMounts]
    })
})

SNIPPET_PlayerInteracted("pi_animal_mount_pvp", (playerEntity, interactedEntity, _payload) => {
    const mountData = GetMountDataFromMountEntity(interactedEntity)
    if (mountData === undefined) {
        Loge("Mount Data is undefined! Please check why")
        return
    }

    SwapMounts(playerEntity, interactedEntity, QUERY_GetPlayerMountName(playerEntity), mountData.mountIdentifier, TEAM_WILD)
})
