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
            "title": "Charger",
            "level": 1,
            "description": "When moving faster than 20ft per 10 INI you can take a -10 to skill to gain +10 DMG, must run at least 10 INI."
        },
        {
            "title": "Rolling Crits",
            "level": 1,
            "description": "Every time you do not Crit you gain a +5% change to Crit, this resets when you Crit."
        },
        {
            "title": "Effective Offense",
            "level": 5,
            "AP Offense": -1,
            "description": "You offensive actions cost -1 AP"
        },
        {
            "title": "Brutality",
            "level": 6,
            "description": "Crit and Splash now do 1d6 instead of 1d4.",
            "critDMG": "1d6",
            "splashDMG": "1d6"
        },
        {
            "title": "Wirlwind",
            "level": 8,
            "Extra Attack": 1.5,
            "description": "30% extra chance of a second attack."
        },
        {
            "title": "Critical Moment",
            "level": 10,
            "Crit": 2,
            "description": "5% chance to Crit."
        }
    ],
    "spells": [
        {
            "level": 1,
            "title": "Rage",
            "description": "Every 5 HP you loose grants +1 DMG per attack (with a maximum of <%= 2 * lvl %> damage)"
        },
        {
            "level": 2,
            "title": "Bleed",
            "description": "When you Crit your Crit DMG is is also a bleed which does it's DMG again on recuperate."
        },
        {
            "level": 3,
            "title": "Revenge",
            "description": "When you get hit you automatically hit for 1d6+<%= STR %> DMG."
        },
        {
            "level": 4,
            "title": "Whirlwind",
            "description": "+50% Splash costs 5 AP."
        },
        {
            "level": 5,
            "title": "Brutal Strikes",
            "description": "You are allowed to push +3 AP to DMG when you hit. (in normal circumstances this means that you can push <%= lvl + 3 %> AP as DMG."
        },
        {
            "level": 6,
            "title": "Berserk",
            "description": "Attack friend of foe within 5 ft. Your attacks roll double dice when you do not crit. You have one physical trigger to get you out of berserk."
        },
        {
            "level": 7,
            "title": "Rampage",
            "description": "When you crit you can lower the INI of your next attack. Every AP you spend lowers the INI of your next attack by 20%."
        },
        {
            "level": 8,
            "title": "Bane to Magic",
            "description": "While raging you gain +30% aura."
        },
        {
            "level": 9,
            "title": "Living Blade",
            "description": "Roll an extra weapon dice on an extra attack."
        },
        {
            "level": 10,
            "title": "Summon Ancestors",
            "description": "Summon two ancestors with 10 HP to fight alongside you. They hit when you hit for 1d6 + 2 DMG where armor does not count. They have no armor and will attack anyone not in the party."
        },
        {
            "level": 11,
            "title": "Super Charged",
            "description": "When you charge you gain 20% Armor for 20 INI. Charging only suffers a -5 to skill instead of the normal -10."
        },
        {
            "level": 12,
            "title": "Overwhelming Odds",
            "description": "Every enemy within 5 ft gives +2 skill and +2 DMG."
        }
    ]
}