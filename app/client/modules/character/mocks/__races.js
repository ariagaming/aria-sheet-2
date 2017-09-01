export default [
    {
        "title": "Human",
        "value": "Human",
        "XP": 13,
        "skillPoints": 5,
        "professionPoints": 1,
        "specials": [],
        "stats": {
            "STR": 10,
            "AGI": 10,
            "INU": 10,
            "PER": 10
        },
        "languages": [
            {
                "title": "Language of choice",
                "bought": "race",
                "expertise": "race"
            },
            {
                "title": "Language Common",
                "bought": "race",
                "expertise": false
            }
        ],
        "skills": [],
        "resistances": [],
        "professions": [],
        "feats": []
    },
    {
        "title": "Elf",
        "value": "Elf",
        "skillPoints": 3,
        "professionPoints": 1,
        "XP": 10,
        "stats": {
            "STR": 2,
            "AGI": 15,
            "INU": 15,
            "PER": 8
        },
        "languages": [
            {
                "title": "Language Elvish",
                "bought": "race",
                "expertise": "race"
            },
            {
                "title": "Language Old",
                "bought": "race",
                "expertise": "race"
            },
            {
                "title": "Language Common",
                "bought": "race",
                "expertise": false
            }
        ],
        "resistances": [
            "Necromantic"
        ],
        "skills": [
            "Ballistic Skill"
        ],
        "professions": [],
        "specials": [
            {
                "title": "Night Vision",
                "description": "You can see with simple moon light."
            }
        ],
        "feats": [],
        "weapons": [
            {
                "title": "Longbow",
                "information": "A new Weapon",
                "isRanged": true,
                "initiative": 14,
                "numberOfDice": "1",
                "diceSides": "8",
                "constant": 0,
                "description": "",
                "dmgFeat": 0,
                "skill": 0,
                "dmgStat": 0,
                "dmgTotal": 0,
                "initiativeTotal": 14,
                "isActive": true
            }
        ]
    },
    {
        "title": "Dwarf",
        "value": "Dwarf",
        "skillPoints": 3,
        "professionPoints": 1,
        "XP": 10,
        "stats": {
            "STR": 15,
            "AGI": 2,
            "INU": 8,
            "PER": 15
        },
        "languages": [
            {
                "title": "Language Dwarvish",
                "bought": "race",
                "expertise": "race"
            },
            {
                "title": "Language Common",
                "bought": "race",
                "expertise": false
            }
        ],
        "resistances": [
            "Strength"
        ],
        "skills": [
            "Weapon skill"
        ],
        "professions": [
            "Miner"
        ],
        "specials": [
            {
                "title": "Dark vision"
            }
        ],
        "feats": []
    },
    {
        "title": "Indir",
        "value": "Indir",
        "skillPoints": 3,
        "professionPoints": 0,
        "XP": 10,
        "stats": {
            "STR": 20,
            "AGI": 0,
            "INU": 5,
            "PER": 0
        },
        "languages": [
            {
                "title": "Language Common",
                "bought": "race",
                "expertise": "race"
            }
        ],
        "resistances": [
            "Cold & Ice"
        ],
        "skills": [
            "Weapon Skill"
        ],
        "professions": ["Sailor"],
        "specials": [
            "Packing mule"
        ],
        "feats": []
    },
    {
        "title": "Etilan",
        "value": "Etilan",
        "skillPoints": 2,
        "professionPoints": 1,
        "XP": 10,
        "stats": {
            "STR": -4,
            "AGI": 10,
            "INU": 20,
            "PER": 12
        },
        "languages": [
            {
                "title": "Language Common",
                "bought": "race",
                "expertise": false
            },
            {
                "title": "Language Etilan",
                "bought": "race",
                "expertise": "race"
            },
            {
                "title": "Elvish",
                "bought": "race",
                "expertise": "race"
            },
            {
                "title": "Old tongue",
                "bought": "race",
                "expertise": "race"
            }
        ],
        "resistances": [
            "Demonic",
            "Mental"
        ],
        "skills": [
            "Arcane Lore",
            "Investigate"
        ],
        "professions": ["Medic", "Lawyer"],
        "specials": [
            {
                "title": "Cast Magic",
                "description": "Can cast magic"
            }
        ],
        "feats": { "Aura": 2 },
        "spells": [
            {
                "level": 0,
                "title": "Detect Magic",
                "description": "You can cast this spell and see the magical flows around you, you are able to see spells; a magic skill check is needed to see if you can see difficult or hidden spells."
            }
        ]
    }
]