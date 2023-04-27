// This previously used the factionSelectMode game rule
SNIPPET_InheritsFromGameMode("campaign", () => {
    SetWorldGenDefinition(campaignWorldGenDefinition, false)
})

const onboardingWorldGenDefinition = {
    base: null,
    modify: (filterManager) => {
        filterManager.AppendFilter(["center", "onboarding"], 1)
        filterManager.AppendFilter(["culture_required_onboarding", "onboarding"], 1)
    }
}

SNIPPET_InheritsFromGameMode("onboarding", () => {
    SetWorldGenDefinition(onboardingWorldGenDefinition)
})
