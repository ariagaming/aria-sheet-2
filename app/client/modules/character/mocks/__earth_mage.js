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
            "description": "Increase your Strength Bonus by <%= rank %> which increases your DMG with +<%= rank %> and your HP with <%= stamina * rank %>."
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
            "description": "Increase the INI of the target by <%= rank * 10 %>%."
        },
        {
            "title": "Sink",
            "type": "ranked",
            "rank": 0,
            "description": "Reduce the target's movement speed by <%= rank * 5 %>."
        },
        {
            "title": "Summon Earth Elemental",
            "type": "ranked",
            "rank": 0,
            "description": "Summon an earth elemental with <%= rank * 10 %> HP and <%= rank * 10 %> armor which taunts random targets and attacks for 1d4 per 20 INI."
        },
        {
            "title": "Listen to the earth",
            "type": "ranked",
            "rank": 0,
            "description": "Listen carefully for footsteps or other things which make minute waves int he earth. You can listen for <%= (rank + PER) * 100 %>ft."
        }
    ],
    "specials": [
        {
            "title": "Cast Magic",
            "description": "You can cast earth magic and choose from the list of general spells."
        }
    ]
}