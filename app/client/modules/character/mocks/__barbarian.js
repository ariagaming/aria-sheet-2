export default {
    "title": "Barbarian",
    "name": "Barbarian",
    "description": "A powerful dmg dealer .",
    "skillPoints": 1,
    "HPFactor": 2,
    "professionPoints": 0,
    "stats": {
        "STR": 10,
        "AGI": 4,
        "INU": 0,
        "PER": 0
    },
    "skills": [
        "Weapon Skill",
        "Ballistic Skill"
    ],
    "resistances": [
        "Strength"
    ],
    "feats": [],
    "specials": [
        {
            "title": "Revenge I",
            "level": 2,
            "DMG adjstm": 2,
            "description": "Add a +2 to every dmg roll."
        },
        {
            "title": "Brutal Crits",
            "level": 4,
            "Crit": 2,
            "description": "Increase your critical strike chance by 5%."
        },
        {
            "title": "Revenge II",
            "level": 7,
            "DMG adjstm": 2,
            "description": "Increase your DMG by +4, replaces Revenge I."
        },
        {
            "title": "Wirlwind",
            "level": 8,
            "Extra Attack": 1.5,
            "description": "30% extra chance of a second attack."
        }
    ],
    "spells": [
        {
            "level": 1,
            "title": "Rage I",
            "description": "Every 5 HP you loose grants +1 DMG per attack (with a maximum of <%= 2 * lvl %> damage)"
        },
        {
            "level": 2,
            "title": "Revenge I",
            "description": "+2 damage"
        },
        {
            "level": 3,
            "title": "Expose weakness I",
            "description": "When you crit you reduce 1d4 of the target's armor."
        },
        {
            "level": 4,
            "title": "Brutal Crits",
            "description": "+5% crit chance"
        },
        {
            "level": 5,
            "title": "Brutal Strikes",
            "description": "You are allowed to push +3 AP to DMG when you hit. (in normal circumstances this means that you can push 5 AP (=6 DMG) on hit.)"
        },
        {
            "level": 6,
            "title": "Overpower",
            "description": "Every point you spend using Brutal Strikes (so this is the extra AP you spend on DMG), lowers the target's weapon skill against you untill the next recuperation by that amount. If you posh 6AP into DMG after you hit the target, this target has -3 to his skill until the next recuperation. This stacks. Can only be used with two handed weapons."
        },
        {
            "level": 7,
            "title": "Revenge II",
            "description": "Grants +4 DMG, replaces revenge I"
        },
        {
            "level": 8,
            "title": "Whirlwind",
            "description": "+30% chance to attack a second target. This stacks with the feat bonus."
        },
        {
            "level": 9,
            "title": "Indomitable might",
            "description": "For the next 30 INI: your PHY counts double for DMG, your crit chance is increased by 25% and every 1 for DMG can de rerolled. Can only happen once per day."
        },
        {
            "level": 10,
            "title": "Summon ancestors",
            "description": "Summon two ancestors with 10 HP to fight alongside you. They hit when you hit for 1d6 + 2 DMG where armor does not count. They have no armor and will attack anyone not in the party."
        }
    ]
}