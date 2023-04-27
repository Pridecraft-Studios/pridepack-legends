const actAudioVal = {
    variable: {
        tracker: "gv_audio_act_progression"
    }
}

const _updateAudioVariableIfProgressing = (progressionValue) => {
    // guard incase multiple acts progress in one tick
    if (progressionValue > QUERY_GetGlobalVariable(actAudioVal.variable.tracker)) {
        OUTPUT_SetGlobalVariable(actAudioVal.variable.tracker, progressionValue)
        OUTPUT_SetAudioVariable(AUDIO_VAR_KEY.ACT, progressionValue)
    }
}

SNIPPET_InheritsFromGameMode("campaign", () => {
    // by default we're in act 1
    _updateAudioVariableIfProgressing(AUDIO_VAR_VALUE.ACT.ACT1)

    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_audio_act_dbb",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        variableName: GV_STARTED_ACT_1_B
    })

    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_audio_act_2",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        variableName: GV_STARTED_ACT_2
    })

    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_audio_act_3",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        variableName: GV_STARTED_ACT_3_A
    })

    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_audio_act_epilogue",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        variableName: GV_STARTED_EPILOGUE
    })
})

SNIPPET_GlobalVariableChanged("gvc_audio_act_dbb", () => {
    _updateAudioVariableIfProgressing(AUDIO_VAR_VALUE.ACT.ACT_DBB)
})

SNIPPET_GlobalVariableChanged("gvc_audio_act_2", () => {
    _updateAudioVariableIfProgressing(AUDIO_VAR_VALUE.ACT.ACT2)
})

SNIPPET_GlobalVariableChanged("gvc_audio_act_3", () => {
    _updateAudioVariableIfProgressing(AUDIO_VAR_VALUE.ACT.ACT3)
})

SNIPPET_GlobalVariableChanged("gvc_audio_act_epilogue", () => {
    _updateAudioVariableIfProgressing(AUDIO_VAR_VALUE.ACT.ACT_EPILOGUE)
})
