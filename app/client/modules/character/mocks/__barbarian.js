export default {
    "title": "Barbarian",
    "name": "Barbarian",
    "description": "A powerful dmg dealer .",
    "skillPoints": 4,
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
            "level": 1,
            "title": "Barbaric Strikes",
            "description": "Every time you crit your next two attacks roll one extra DMG die."
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
            "critDMG": "d6",
            "splashDMG": "d6"
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
        },
        {
            "title": "Amazing Offense",
            "level": 10,
            "AP Offense": -1,
            "description": "You offensive actions cost -1 AP"
        }
    ],
    "spells": [
        {
            "level": 1,
            "type": "level",
            "title": "Rage",
            "description": "Every 5 HP you loose grants +1 DMG per attack (with a maximum of <%= 2 * lvl %> damage)"
        },
        {
            "level": 2,
            "type": "level",
            "title": "Bleed",
            "description": "When you Crit your Crit DMG is is also a bleed which does it's DMG again on recuperate."
        },
        {
            "level": 2,
            "type": "choice",
            "title": "Cochise",
            "choices": [
                {
                    "title": "Charger",
                    "description": "You can take a -10 to skill to get a +10 DMG when you charge faster than 20ft."
                },
                {
                    "title": "Scarred",
                    "description": "Rage grants a +2 per 5 DMG instead of a +2."
                },
                {
                    "title": "Berserker",
                    "description": "Attack friend of foe within 5 ft. Your attacks roll double dice when you do not crit. You have one physical trigger to get you out of berserk."
                }
            ]
        },
        {
            "level": 3,
            "type": "level",
            "title": "Revenge",
            "description": "When you get hit you automatically hit for 1d6+<%= STR %> DMG."
        },
        {
            "level": 4,
            "type": "level",
            "title": "Whirlwind",
            "description": "+50% Splash costs 5 AP."
        },
        {
            "level": 5,
            "type": "level",
            "title": "Brutal Strikes",
            "description": "You are allowed to push +3 AP to DMG when you hit. (in normal circumstances this means that you can push <%= lvl + 3 %> AP as DMG."
        },
        {
            "level": 5,
            "type": "choice",
            "title": "Path",
            "choices": [
                {
                    "title": "Ancient",
                    "description": "You can call on the power of the Ancients once a day to have your spirit ancestors protect you can take all DMG for 30 INI. The DMG they take does count towards your rage. Every attack you do while the ancients help you counts as a taunt."
                },
                {
                    "title": "Elemental",
                    "description": "You can choose one Elemental source to guide your path. Your weapons will always do 1d4 extra DMG as that elemental type. You also gain +2 to all resistances.",
                    "Fire & Heat": 2,
                    "Cold & Ice": 2,
                    "Holy": 2,
                    "Mental": 2,
                    "Poison & Disease": 2,
                    "Demonic": 2,
                    "Necromantic": 2
                },
                {
                    "title": "Warmonger",
                    "description": "You have fully embraced War and Death. You can now enter rage by hurting yourself or getting hurt by your party members before combat. Healing does not lower your Rage. People tend to stand clear of a Warmonger."
                }
            ]
        },
        {
            "level": 6,
            "type": "level",
            "title": "?",
            "description": "?"
        },
        {
            "level": 7,
            "type": "level",
            "title": "Rampage",
            "description": "When you crit you can lower the INI of your next attack. Every AP you spend lowers the INI of your next attack by 20%."
        },
        {
            "level": 8,
            "type": "level",
            "title": "Bane to Magic",
            "description": "While raging you gain +30% aura."
        },
        {
            "level": 9,
            "type": "level",
            "title": "Living Blade",
            "description": "Roll an extra weapon dice on an extra attack."
        },
        {
            "level": 10,
            "type": "level",
            "title": "Summon Ancestors",
            "description": "Summon two ancestors with 10 HP to fight alongside you. They hit when you hit for 1d6 + 2 DMG where armor does not count. They have no armor and will attack anyone not in the party."
        },
        {
            "level": 11,
            "type": "level",
            "title": "Super Charged",
            "description": "When you charge you gain 20% Armor for 20 INI. Charging only suffers a -5 to skill instead of the normal -10."
        },
        {
            "level": 12,
            "type": "level",
            "title": "Overwhelming Odds",
            "description": "Every enemy within 5 ft gives +2 skill and +2 DMG."
        }
    ]
}