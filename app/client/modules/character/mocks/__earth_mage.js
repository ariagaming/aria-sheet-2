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
            "rank": 1,
            "baseRank": 1,
            "description": "Reduce the target's movement speed by <%= rank * 5 %>."
        },
        {
            "title": "Summon Earth Elemental",
            "type": "ranked",
            "rank": 0,
            "description": "Summon an earth elemental with <%= rank * 10 %> HP and <%= rank * 10 %> armor which taunts or 50 INI random targets and attacks for 1d4 per 20 INI."
        },
        {
            "title": "Slow to Anger",
            "type": "ranked",
            "rank": 0,
            "description": "When your Earth Elemental taunts a target this taunt continues onto you after the elemental dies."
        },
        {
            "title": "Listen to the earth",
            "type": "ranked",
            "rank": 0,
            "description": "Listen carefully for footsteps or other things which make minute waves int he earth. You can listen for <%= (rank + PER) * 100 %>ft."
        },
        {
            "title": "Earth Shock",
            "type": "ranked",
            "rank": 0,
            "description": "<%= rank %>d4 dmg to everyone in <%= rank * 10 %>ft radius centered around the caster."
        },
        {
            "title": "Eruption",
            "type": "ranked",
            "rank": 0,
            "description": "<%= rank %>d6 dmg to everyone in <%= rank * 10 %>ft radius centered around the caster every recuperation."
        },
        {
            "title": "Destroy Armor",
            "type": "ranked",
            "rank": 1,
            "baseRank": 1,
            "description": "Destroy <%= rank %>d4% of the target's armor."
        },
        {
            "title": "Stable Earth",
            "type": "ranked",
            "rank": 1,
            "baseRank": 1,
            "description": "In a cicle of <%= rank * 10 %>ft radius centered around the caster friendly characters can't be knocked down."
        }
    ],
    "specials": [
        {
            "title": "Cast Magic",
            "description": "You can cast earth magic and choose from the list of general spells."
        },
        {
            "title": "Fortified",
            "description": "+1 Stamina and +3 Toughness",
            "Toughness": 3,
            "Stamina": 1
        }
    ]
}