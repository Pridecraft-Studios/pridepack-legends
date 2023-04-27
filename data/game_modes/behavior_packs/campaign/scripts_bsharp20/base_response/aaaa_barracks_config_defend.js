/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */

/*
~~~~~~~~~~~~~~~~~~~~
~~~~~ FIGHTERS ~~~~~
~~~~~~~~~~~~~~~~~~~~
*/
const FighterBarracksConfig_DefendFaction_Variations = {
    name: BARRACKS_NAME_FIGHTER,
    /*
    ==============================
    ===== DEFENSIVE OUTPOSTS =====
    ==============================
    */
    frontlineA: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 35,
                batch: 10
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 35,
                batch: 10
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 35,
                batch: 10
            },
            phase_1: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser"],
                cap: 15,
                rate: 35,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_bruiser"],
                cap: 15,
                rate: 35,
                batch: 10
            }
        }
    },
    /*
    =======================
    ===== SMALL BASES =====
    =======================
    */
    small: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 0,
                batch: 1
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_4: {
                loadout: ["badger:piglin_runt"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_42: {
                loadout: ["badger:piglin_runt"],
                cap: 16,
                rate: 10,
                batch: 4
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic", "badger:piglin_engineer", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_1: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic", "badger:piglin_engineer", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_2: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic", "badger:piglin_engineer", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_3: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic", "badger:piglin_engineer", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_4: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic", "badger:piglin_engineer", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_42: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 16,
                rate: 10,
                batch: 4
            }
        }
    },
    piglin_occupying_creeper_mob_alliance: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic", "badger:piglin_engineer", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 14,
                rate: 30,
                batch: 7
            }
        }
    },
    /*
    ========================
    ===== MEDIUM BASES =====
    ========================
    */
    medium: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_portal_guard"],
                cap: 0,
                rate: 0,
                batch: 1
            },
            phase_1: {
                loadout: ["badger:piglin_portal_guard"],
                cap: 1,
                rate: 30,
                batch: 1
            },
            phase_2: {
                loadout: ["badger:piglin_portal_guard"],
                cap: 1,
                rate: 30,
                batch: 1
            },
            phase_3: {
                loadout: ["badger:piglin_portal_guard"],
                cap: 1,
                rate: 30,
                batch: 1
            },
            phase_4: {
                loadout: ["badger:piglin_portal_guard"],
                cap: 1,
                rate: 30,
                batch: 1
            },
            phase_42: {
                loadout: ["badger:piglin_portal_guard"],
                cap: 2,
                rate: 10,
                batch: 1
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_bruiser"],
                cap: 0,
                rate: 30,
                batch: 5
            },
            phase_1: {
                loadout: ["badger:piglin_bruiser"],
                cap: 3,
                rate: 30,
                batch: 1
            },
            phase_2: {
                loadout: ["badger:piglin_bruiser"],
                cap: 3,
                rate: 30,
                batch: 1
            },
            phase_3: {
                loadout: ["badger:piglin_bruiser"],
                cap: 3,
                rate: 30,
                batch: 1
            },
            phase_4: {
                loadout: ["badger:piglin_bruiser"],
                cap: 3,
                rate: 30,
                batch: 1
            },
            phase_42: {
                loadout: ["badger:piglin_bruiser"],
                cap: 2,
                rate: 15,
                batch: 1
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 30,
                batch: 8
            },
            phase_1: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic", "badger:piglin_runt"],
                cap: 10,
                rate: 30,
                batch: 5
            },
            phase_2: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic", "badger:piglin_runt"],
                cap: 10,
                rate: 30,
                batch: 5
            },
            phase_3: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic", "badger:piglin_runt"],
                cap: 10,
                rate: 30,
                batch: 5
            },
            phase_4: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic", "badger:piglin_runt"],
                cap: 10,
                rate: 30,
                batch: 5
            },
            phase_42: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser"],
                cap: 12,
                rate: 12,
                batch: 3
            }
        }
    },
    /*
    =======================
    ===== LARGE BASES =====
    =======================
    */
    large: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_portal_guard"],
                cap: 0,
                rate: 30,
                batch: 1
            },
            phase_1: {
                loadout: ["badger:piglin_portal_guard"],
                cap: 0,
                rate: 30,
                batch: 1
            },
            phase_2: {
                loadout: ["badger:piglin_portal_guard"],
                cap: 0,
                rate: 30,
                batch: 1
            },
            phase_3: {
                loadout: ["badger:piglin_portal_guard"],
                cap: 0,
                rate: 30,
                batch: 1
            },
            phase_4: {
                loadout: ["badger:piglin_portal_guard"],
                cap: 0,
                rate: 30,
                batch: 1
            },
            phase_42: {
                loadout: ["badger:piglin_portal_guard"],
                cap: 0,
                rate: 10,
                batch: 1
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_bruiser", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_bruiser"],
                cap: 0,
                rate: 0,
                batch: 1
            },
            phase_1: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_medic"],
                cap: 12,
                rate: 30,
                batch: 6
            },
            phase_2: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_medic"],
                cap: 12,
                rate: 30,
                batch: 6
            },
            phase_3: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_medic"],
                cap: 12,
                rate: 30,
                batch: 6
            },
            phase_4: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_medic"],
                cap: 12,
                rate: 30,
                batch: 6
            },
            phase_42: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser"],
                cap: 12,
                rate: 15,
                batch: 3
            }
        }
    },
    /*
    =======================
    ====== BOSS BASES =====
    =======================
    */
    boss: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_bruiser", "badger:piglin_medic", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 0,
                rate: 30,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_bruiser", "badger:piglin_medic", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 15,
                rate: 30,
                batch: 15
            },
            phase_2: {
                loadout: ["badger:piglin_bruiser", "badger:piglin_medic", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 15,
                rate: 30,
                batch: 15
            },
            phase_3: {
                loadout: ["badger:piglin_bruiser", "badger:piglin_medic", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 15,
                rate: 30,
                batch: 15
            },
            phase_4: {
                loadout: ["badger:piglin_bruiser", "badger:piglin_medic", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 15,
                rate: 30,
                batch: 15
            },
            phase_42: {
                loadout: ["badger:piglin_bruiser", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 15,
                rate: 5,
                batch: 3
            }
        }
    }
}

/*
~~~~~~~~~~~~~~~~~~~
~~~~~ SIEGERS ~~~~~
~~~~~~~~~~~~~~~~~~~
*/
const SiegerBarracksConfig_DefendFaction_Variations = {
    name: BARRACKS_NAME_SIEGER,
    /*
    ==============================
    ===== DEFENSIVE OUTPOSTS =====
    ==============================
    */
    frontlineA: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 10,
                rate: 30,
                batch: 5
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 35,
                batch: 10
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 35,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 35,
                batch: 10
            }
        },
        villageVariationC: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 35,
                batch: 10
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 35,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 35,
                batch: 10
            }
        }
    },
    /*
    =======================
    ===== SMALL BASES =====
    =======================
    */
    small: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 5,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 25,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 25,
                batch: 10
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 30,
                rate: 25,
                batch: 12
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 30,
                rate: 25,
                batch: 14
            },
            phase_42: {
                loadout: ["badger:piglin_grunter"],
                cap: 30,
                rate: 10,
                batch: 4
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_medic", "badger:piglin_engineer", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_medic", "badger:piglin_engineer", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_medic", "badger:piglin_engineer", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_medic", "badger:piglin_engineer", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_4: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_medic", "badger:piglin_engineer", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_42: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_medic", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 16,
                rate: 10,
                batch: 4
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 1
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 10,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 10,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 10,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 10,
                batch: 8
            },
            phase_42: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 10,
                batch: 4
            }
        }
    },
    piglin_occupying_creeper_mob_alliance: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_medic", "badger:piglin_engineer", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 14,
                rate: 30,
                batch: 7
            }
        }
    },
    /*
    ========================
    ===== MEDIUM BASES =====
    ========================
    */
    medium: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 5
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 26,
                rate: 30,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 30,
                rate: 30,
                batch: 12
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 40,
                rate: 30,
                batch: 15
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 10,
                batch: 10
            },
            phase_42: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 10,
                batch: 4
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 10
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_medic"],
                cap: 16,
                rate: 30,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_medic"],
                cap: 16,
                rate: 30,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_medic"],
                cap: 16,
                rate: 30,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_medic"],
                cap: 16,
                rate: 30,
                batch: 8
            },
            phase_42: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 10,
                batch: 4
            }
        }
    },
    /*
    =======================
    ===== LARGE BASES =====
    =======================
    */
    large: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 30,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_engineer"],
                cap: 10,
                rate: 30,
                batch: 5
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_engineer"],
                cap: 10,
                rate: 30,
                batch: 5
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_engineer"],
                cap: 10,
                rate: 30,
                batch: 5
            },
            phase_4: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_engineer"],
                cap: 10,
                rate: 30,
                batch: 5
            },
            phase_42: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 10,
                batch: 4
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 30,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_engineer"],
                cap: 10,
                rate: 30,
                batch: 5
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_engineer"],
                cap: 10,
                rate: 30,
                batch: 5
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_engineer"],
                cap: 10,
                rate: 30,
                batch: 5
            },
            phase_4: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_engineer"],
                cap: 10,
                rate: 30,
                batch: 5
            },
            phase_42: {
                loadout: ["badger:piglin_grunter"],
                cap: 12,
                rate: 12,
                batch: 3
            }
        }
    },
    /*
    =======================
    ====== BOSS BASES =====
    =======================
    */
    boss: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 30,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 35,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 35,
                batch: 10
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 35,
                batch: 10
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 35,
                batch: 10
            },
            phase_42: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 10,
                batch: 5
            }
        }
    }
}