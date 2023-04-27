/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */

/*
~~~~~~~~~~~~~~~~~~~~~~
~~~~~ DISRUPTORS ~~~~~
~~~~~~~~~~~~~~~~~~~~~~
*/
const DisruptorBarracksConfig_ObstacleFaction_Variations = {
    name: BARRACKS_NAME_DISRUPTOR,
    /*
    ==============================
    ===== DEFENSIVE OUTPOSTS =====
    ==============================
    */
    frontlineA: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_seeker"],
                cap: 3,
                rate: 8,
                batch: 2
            },
            phase_1: {
                loadout: ["badger:piglin_seeker"],
                cap: 3,
                rate: 8,
                batch: 2
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
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 8,
                batch: 5
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 8,
                batch: 5
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_seeker"],
                cap: 0,
                rate: 30,
                batch: 1
            },
            phase_1: {
                loadout: ["badger:piglin_seeker"],
                cap: 2,
                rate: 30,
                batch: 1
            },
            phase_2: {
                loadout: ["badger:piglin_seeker"],
                cap: 2,
                rate: 30,
                batch: 1
            },
            phase_3: {
                loadout: ["badger:piglin_seeker"],
                cap: 2,
                rate: 30,
                batch: 1
            },
            phase_4: {
                loadout: ["badger:piglin_seeker"],
                cap: 2,
                rate: 30,
                batch: 1
            }
        }
    },
    piglin_occupying_zombie_mob_alliance: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 8,
                batch: 5
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
                loadout: ["badger:piglin_grenadier"],
                cap: 0,
                rate: 15,
                batch: 2
            },
            phase_1: {
                loadout: ["badger:piglin_grenadier"],
                cap: 2,
                rate: 30,
                batch: 2
            },
            phase_2: {
                loadout: ["badger:piglin_grenadier"],
                cap: 2,
                rate: 30,
                batch: 2
            },
            phase_3: {
                loadout: ["badger:piglin_grenadier"],
                cap: 2,
                rate: 30,
                batch: 2
            },
            phase_4: {
                loadout: ["badger:piglin_grenadier"],
                cap: 2,
                rate: 30,
                batch: 2
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grenadier"],
                cap: 0,
                rate: 30,
                batch: 2
            },
            phase_1: {
                loadout: ["badger:piglin_grenadier"],
                cap: 2,
                rate: 30,
                batch: 2
            },
            phase_2: {
                loadout: ["badger:piglin_grenadier"],
                cap: 2,
                rate: 30,
                batch: 2
            },
            phase_3: {
                loadout: ["badger:piglin_grenadier"],
                cap: 2,
                rate: 30,
                batch: 2
            },
            phase_4: {
                loadout: ["badger:piglin_grenadier"],
                cap: 2,
                rate: 30,
                batch: 2
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_seeker"],
                cap: 0,
                rate: 20,
                batch: 4
            },
            phase_1: {
                loadout: ["badger:piglin_seeker"],
                cap: 2,
                rate: 20,
                batch: 1
            },
            phase_2: {
                loadout: ["badger:piglin_seeker"],
                cap: 2,
                rate: 20,
                batch: 1
            },
            phase_3: {
                loadout: ["badger:piglin_seeker"],
                cap: 2,
                rate: 20,
                batch: 1
            },
            phase_4: {
                loadout: ["badger:piglin_seeker"],
                cap: 2,
                rate: 20,
                batch: 1
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
                loadout: ["badger:piglin_grenadier"],
                cap: 0,
                rate: 30,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grenadier"],
                cap: 3,
                rate: 30,
                batch: 3
            },
            phase_2: {
                loadout: ["badger:piglin_grenadier"],
                cap: 3,
                rate: 30,
                batch: 3
            },
            phase_3: {
                loadout: ["badger:piglin_grenadier"],
                cap: 3,
                rate: 30,
                batch: 3
            },
            phase_4: {
                loadout: ["badger:piglin_grenadier"],
                cap: 3,
                rate: 15,
                batch: 3
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 0,
                rate: 15,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 3,
                rate: 25,
                batch: 4
            },
            phase_2: {
                loadout: ["badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 3,
                rate: 25,
                batch: 4
            },
            phase_3: {
                loadout: ["badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 4,
                rate: 25,
                batch: 4
            },
            phase_4: {
                loadout: ["badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 4,
                rate: 25,
                batch: 4
            }
        }
    },
    /*
    =======================
    ====== BOSS BASE ======
    =======================
    */
    boss: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 0,
                rate: 15,
                batch: 2
            },
            phase_1: {
                loadout: ["badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 4,
                rate: 30,
                batch: 4
            },
            phase_2: {
                loadout: ["badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 4,
                rate: 30,
                batch: 4
            },
            phase_3: {
                loadout: ["badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 4,
                rate: 30,
                batch: 5
            },
            phase_4: {
                loadout: ["badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 4,
                rate: 30,
                batch: 4
            }
        }
    }
}

/*
~~~~~~~~~~~~~~~~~~~~
~~~~~ FIGHTERS ~~~~~
~~~~~~~~~~~~~~~~~~~~
*/
const FighterBarracksConfig_ObstacleFaction_Variations = {
    name: BARRACKS_NAME_FIGHTER,
    /*
    ==============================
    ===== DEFENSIVE OUTPOSTS =====
    ==============================
    */
    frontlineA: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 10,
                rate: 8,
                batch: 5
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 10,
                rate: 8,
                batch: 5
            }
        }
    },
    /*
    =======================
    ===== SMALL BASES =====
    =======================
    */
    small: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 20,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 20,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 20,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 20,
                batch: 8
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 20,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 20,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 20,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 20,
                batch: 8
            }
        }
    },
    piglin_occupying_zombie_mob_alliance: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            }
        }
    },
    /*
    ========================
    ===== MEDIUM BASES =====
    ========================
    */
    medium: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 0,
                rate: 20,
                batch: 5
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 16,
                rate: 20,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 16,
                rate: 20,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 16,
                rate: 20,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 16,
                rate: 20,
                batch: 8
            }
        }
    },
    /*
    =======================
    ===== LARGE BASES =====
    =======================
    */
    large: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 10,
                rate: 15,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 10,
                rate: 15,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            }
        }
    },
    /*
    =======================
    ====== BOSS BASE ======
    =======================
    */
    boss: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 10,
                rate: 15,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 10,
                rate: 15,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            }
        }
    }
}

/*
~~~~~~~~~~~~~~~~~~~
~~~~~ SIEGERS ~~~~~
~~~~~~~~~~~~~~~~~~~
*/
const SiegerBarracksConfig_ObstacleFaction_Variations = {
    name: BARRACKS_NAME_SIEGER,
    /*
    ==============================
    ===== DEFENSIVE OUTPOSTS =====
    ==============================
    */
    frontlineA: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_medic"],
                cap: 10,
                rate: 8,
                batch: 5
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_medic"],
                cap: 8,
                rate: 10,
                batch: 5
            }
        },
        villageVariationC: {
            phase_0: {
                loadout: ["badger:piglin_grenadier"],
                cap: 2,
                rate: 15,
                batch: 1
            },
            phase_1: {
                loadout: ["badger:piglin_grenadier"],
                cap: 2,
                rate: 15,
                batch: 1
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
                rate: 8,
                batch: 5
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 8,
                batch: 5
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 8,
                batch: 5
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 8,
                batch: 5
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 8,
                batch: 5
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 15,
                batch: 5
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 15,
                batch: 5
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            }
        }
    },
    piglin_occupying_zombie_mob_alliance: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
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
                batch: 4
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 8,
                batch: 4
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_grenadier"],
                cap: 16,
                rate: 33,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_grenadier"],
                cap: 16,
                rate: 33,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_grenadier"],
                cap: 16,
                rate: 33,
                batch: 8
            },
            phase_4: {
                loadout:["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_grenadier"],
                cap: 16,
                rate: 33,
                batch: 8
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_medic", "badger:piglin_grenadier", "badger:piglin_grenadier"],
                cap: 0,
                rate: 15,
                batch: 2
            },
            phase_1: {
                loadout: ["badger:piglin_medic", "badger:piglin_grenadier", "badger:piglin_grenadier"],
                cap: 4,
                rate: 28,
                batch: 4
            },
            phase_2: {
                loadout: ["badger:piglin_medic", "badger:piglin_grenadier", "badger:piglin_grenadier"],
                cap: 4,
                rate: 28,
                batch: 4
            },
            phase_3: {
                loadout: ["badger:piglin_medic", "badger:piglin_grenadier", "badger:piglin_grenadier"],
                cap: 4,
                rate: 28,
                batch: 4
            },
            phase_4: {
                loadout: ["badger:piglin_medic", "badger:piglin_grenadier", "badger:piglin_grenadier"],
                cap: 4,
                rate: 28,
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
                rate: 3,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 6,
                rate: 8,
                batch: 3
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 6,
                rate: 8,
                batch: 3
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 8,
                rate: 8,
                batch: 4
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 8,
                rate: 8,
                batch: 4
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 8,
                batch: 4
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 16,
                rate: 33,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 16,
                rate: 33,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 16,
                rate: 33,
                batch: 8
            },
            phase_4: {
                loadout:["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 16,
                rate: 33,
                batch: 8
            }
        },
    },
    /*
    =======================
    ====== BOSS BASE ======
    =======================
    */
    boss: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 10,
                rate: 15,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 10,
                rate: 15,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            }
        },
    }
}
