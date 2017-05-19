export default [
    {
        "title": "Human",
        "value": "Human",
        "XP": 13,
        "skillPoints": 5,
        "professionPoints": 1,
        "specials": [],
        "stats": {
            "STR": 3,
            "AGI": 3,
            "INU": 3,
            "PER": 3
        },
        "languages": [
            {
                "name": "Language of choice",
                "bought": true,
                "expertise": true,
                "boughtSource": "race",
                "expertiseSource": "race"
            },
            {
                "name": "Language Common",
                "bought": true,
                "expertise": true,
                "boughtSource": "race",
                "expertiseSource": "race"
            }
        ],
        "skills": []
    },
    {
        "title": "Elf",
        "value": "Elf",
        "skillPoints": 3,
        "professionPoints": 1,
        "XP": 10,
        "stats": {
            "STR": 0,
            "AGI": 5,
            "INU": 3,
            "PER": 3
        },
        "languages": [
            {
                "name": "Language Elvish",
                "bought": true,
                "expertise": true,
                "boughtSource": "race",
                "expertiseSource": "race"
            },
            {
                "name": "Language Old",
                "bought": true,
                "expertise": true,
                "boughtSource": "race",
                "expertiseSource": "race"
            },
            {
                "name": "Language Common",
                "bought": true,
                "expertise": false,
                "boughtSource": "race"
            }
        ],
        "resistances": [
            "Magic"
        ],
        "skills": [
            "Ballistic skill"
        ],
        "professions": [
            {
                "name": "Medic"
            }
        ],
        "specials": [
            "Night Vision"
        ]
    },
    {
        "title": "Dwarf",
        "value": "Dwarf",
        "skillPoints": 3,
        "professionPoints": 1,
        "XP": 10,
        "stats": {
            "STR": 5,
            "AGI": 0,
            "INU": 3,
            "PER": 3
        },
        "languages": [
            {
                "name": "Language Dwarvish",
                "bought": true,
                "expertise": true,
                "boughtSource": "race",
                "expertiseSource": "race"
            },
            {
                "name": "Language Common",
                "bought": true,
                "expertise": false,
                "boughtSource": "race"
            }
        ],
        "resistances": [
            {
                "name": "Strength"
            }
        ],
        "skills": [
            "Weapon skill"
        ],
        "professions": [
            {
                "name": "Miner"
            }
        ],
        "specials": [
            {
                "name": "Dark vision"
            }
        ]
    },
    {
        "title": "Indir",
        "value": "Indir",
        "skillPoints": 2,
        "professionPoints": 0,
        "XP": 10,
        "stats": {
            "STR": 15,
            "AGI": -5,
            "INU": 5,
            "PER": 0
        },
        "languages": [
            {
                "name": "Language Common",
                "bought": true,
                "expertise": true,
                "boughtSource": "race",
                "expertiseSource": "race"
            }
        ],
        "resistances": [
            {
                "name": "Strength"
            }
        ],
        "skills": [
            "Weapon skill",
            "Pilot"
        ],
        "professions": [],
        "specials": [
            "Packing mule"
        ]
    },
    {
        "title": "Etilan",
        "value": "Etilan",
        "skillPoints": 2,
        "professionPoints": 1,
        "XP": 10,
        "stats": {
            "STR": 3,
            "AGI": 12,
            "INU": 10,
            "PER": 0
        },
        "languages": [
            {
                "name": "Language Common",
                "bought": true,
                "expertise": false,
                "boughtSource": "race",
                "expertiseSource": "race"
            },
            {
                "name": "Language Etilan",
                "bought": true,
                "expertise": true,
                "boughtSource": "race",
                "expertiseSource": "race"
            },
            {
                "name": "Elvish",
                "bought": true,
                "expertise": false,
                "boughtSource": "race",
                "expertiseSource": "race"
            },
            {
                "name": "Old tongue",
                "bought": true,
                "expertise": true,
                "boughtSource": "race",
                "expertiseSource": "race"
            }
        ],
        "resistances": [
            "Magic",
            "Mental"
        ],
        "skills": [
            "Arcane Lore",
            "Investigate"
        ],
        "professions": [],
        "specials": [
            {
                "name": "Cast Magic",
                "description": "Can cast magic"
            }
        ]
    }
]