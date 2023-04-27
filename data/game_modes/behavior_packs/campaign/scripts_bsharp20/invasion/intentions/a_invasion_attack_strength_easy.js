const invasionAttackStrengthDecks = [
    {
        phase: 0,
        cards: [{ strength: 1, count: 1 }]
    },
    {
        phase: 1,
        cards: [
            { strength: 1, count: 7 },
            { strength: 2, count: 3 }
        ]
    },
    {
        phase: 2,
        cards: [
            { strength: 1, count: 5 },
            { strength: 2, count: 4 },
            { strength: 3, count: 1 }
        ]
    },
    {
        phase: 3,
        cards: [
            { strength: 1, count: 3 },
            { strength: 2, count: 4 },
            { strength: 3, count: 2 }
        ]
    },
    {
        phase: 4,
        cards: [
            { strength: 1, count: 1 },
            { strength: 2, count: 6 },
            { strength: 3, count: 3 }
        ]
    },
    {
        phase: 5,
        cards: [
            { strength: 2, count: 3 },
            { strength: 3, count: 6 }
        ]
    },
    {
        phase: 6,
        cards: [{ strength: 3, count: 1 }]
    }
]

RegisterDifficultyConfig("village_attack_strength_decks", invasionAttackStrengthDecks, GAME_DIFFICULTY.easy)