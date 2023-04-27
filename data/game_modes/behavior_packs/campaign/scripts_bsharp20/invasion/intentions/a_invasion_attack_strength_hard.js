const invasionAttackStrengthDecks_Hard = [
    {
        phase: 0,
        cards: [
            { strength: 1, count: 3 },
            { strength: 2, count: 2 },
            { strength: 3, count: 1 }
        ]
    },
    {
        phase: 1,
        cards: [
            { strength: 1, count: 1 },
            { strength: 2, count: 3 },
            { strength: 3, count: 1 }
        ]
    },
    {
        phase: 2,
        cards: [
            { strength: 2, count: 2 },
            { strength: 3, count: 2 }
        ]
    },
    {
        phase: 3,
        cards: [{ strength: 3, count: 1 }]
    },
    {
        phase: 4,
        cards: [{ strength: 3, count: 1 }]
    },
    {
        phase: 5,
        cards: [{ strength: 3, count: 1 }]
    },
    {
        phase: 6,
        cards: [{ strength: 3, count: 1 }]
    }
]

RegisterDifficultyConfig("village_attack_strength_decks", invasionAttackStrengthDecks_Hard, GAME_DIFFICULTY.hard)
