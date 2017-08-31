export default [
    {
        "title": "Mighty Blow",
        "description": "You can take a -10 to skill to do +10 DMG."
    },
    {
        "title": "Mage",
        "description": "You can cast a small selection of general spells.",
        "spells": [
            {
                "title": "Teleport",
                "type": "ranked",
                "rank": 0,
                "description": "Teleport <%= rank * ((r) => { switch(r) { case 0: return 0; case 1: return 10; case 2: return 100; case 3: return 1000; case 4: return 10000; default: return 100000; } })(rank) %>m, maximally <%= rank %> people without horses or heavy armor. Cast time 30 INI. Must know the target location."
            },
            {
                "title": "Stone Skin",
                "type": "ranked",
                "rank": 0,
                "description": "Increase Armor by <%= 3 * rank %>% for 60 INI."
            },
            {
                "title": "Underwater Breathing",
                "type": "ranked",
                "rank": 0,
                "description": "You can beath underwater for <%= rank %> hours."
            },
            {
                "title": "Fire Bolt",
                "type": "ranked",
                "rank": 0,
                "description": "1d6 + <%= rank %> DMG, does 1 stack of embers."
            },
            {
                "title": "Aura",
                "type": "ranked",
                "rank": 0,
                "description": "+<%= 5 * rank %>% Aura"
            },
            {
                "title": "Telekenisis",
                "type": "ranked",
                "rank": 0,
                "description": "You can lift <%= rank * INU %>kg at <%= INU * 2 || 2 %>m."
            },
            {
                "title": "Minor Invisibility",
                "type": "ranked",
                "rank": 0,
                "description": "You gain a +<%= rank * 2 %> to Stealth."
            },
            {
                "title": "Telepathy",
                "type": "ranked",
                "rank": 0,
                "description": "You can create a telepathic bond with a maximum of <%= rank %>a people. You can always communicate telepathically with people in Line of Sight. All people you 'learned' you be contacted anytime at any length."
            },
            {
                "title": "Minor Illusion",
                "type": "ranked",
                "rank": 0,
                "description": "Create a minor illusion fo <%= rank %> hours."
            }
        ]
    },
    {
        "title": "Specialized Offense",
        "description": "Lowers the cost of an offensive action with 1 AP.",
        "AP Offense": -1
    },
    {
        "title": "Specialized Defense",
        "description": "Lowers the cost of an defense action with 1 AP.",
        "AP Defense": -1
    },
    {
        "title": "Lightning Reflexes",
        "description": "Increase armor by 5% and increase resistances by 1 also increase AGI with +10.",
        "Toughness": 2,
        "AGI": 10,
        "Fire & Heat": 1,
        "Cold & Ice": 1,
        "Holy": 1,
        "Mental": 1,
        "Poison & Disease": 1,
        "Demonic": 1,
        "Necromantic": 1
    },
    {
        "title": "Bane to Magic",
        "description": "10% chance to dispell a spell which targets you (even positive spells). +10% Aura and +5 to Investigate.",
        "Aura": 2,
        "Investigate": 5
    },
    {
        "title": "Lucky",
        "description": "At the start of a combat you can roll 2 d20 dice and these rolls can be used to replace a roll on the table."
    },
    {
        "title": "Bloodbath",
        "description": "+2 DMG and +10 STR",
        "DMG adjstm": 2,
        "STR": 10
    },
    {
        "title": "Bulwark",
        "description": "+5% Armor and +10 STR",
        "Toughness": 2,
        "STR": 10
    }
]