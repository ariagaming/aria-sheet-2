export default {
    "title": "Earth Mage",
    "name": "Earth Mage",

    "APName": "Mana",

    "description": "A caster who can manipulate the very stone and bedrock of the earth.",

    "skillPoints": 2,
    "stats": {
        "STR": 10,
        "AGI": 0,
        "INU": 14,
        "PER": 8
    },
    "skills": [
        "Magic"
    ],
    "resistances": [
        "Poison & Disease"
    ],
    "weapons": [],
    "languages": [],
    "spells": [
        {
            "title": "Stone skin",
            "type": "ranked",
            "rank": 1,
            "baseRank": 1,
            "description": "Protect yourself from attacks made with physical weapons. You gain +<%= rank * 4 %>% armor."
        },
        {
            "title": "Strength of the Earth",
            "type": "ranked",
            "rank": 1,
            "baseRank": 1,
            "description": "Increase your Strength Bonus by <%= rank %> which increases your DMG with +<%= rank %> and your HP with your Stamina * <%= rank %>."
        },
        {
            "title": "Heavy handed",
            "type": "ranked",
            "rank": 0,
            "description": "Weapon does +<%= rank %>d4 DMG, can only cast this when the target also has 'Strength of the Earth'."
        },
        {
            "title": "Shatter Stone",
            "type": "ranked",
            "rank": 1,
            "baseRank": 1,
            "description": "You can shatter <%= rank * (rank < 5 ? 5 : 12) %>kg stone per 30 INI."
        },
        {
            "title": "Weight of the earth",
            "type": "ranked",
            "rank": 0,
            "description": ""
        },
        {
            "title": "Sink",
            "type": "ranked",
            "rank": 0,
            "description": ""
        },
        {
            "title": "Summon Earth Elemental",
            "type": "ranked",
            "rank": 0,
            "description": ""
        },
        {
            "title": "Listen to the earth",
            "type": "ranked",
            "rank": 0,
            "description": ""
        }
    ],
    "specials": [
        {
            "title": "Cast Magic",
            "description": "You can cast earth magic and choose from the list of general spells."
        }
    ]
}