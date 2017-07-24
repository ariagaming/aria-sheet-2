export default {
    "title": "Earth Mage",
    "name": "Earth Mage",
    "type": "caster",
    "description": "A caster who can manipulate the very stone and bedrock of the earth..",
    "skillPoints": 2,
    "professionPoints": 0,
    "stats": {
        "STR": 4,
        "AGI": 0,
        "INU": 10,
        "PER": 0
    },
    "skills": [
        "Magic"
    ],
    "resistances": [
        "Magic"
    ],
    "languages": [],
    "spells": [
        {
            "title": "Stone skin",
            "rank": 0,
            "ranks": [
                {
                    "rank": 0,
                    "level": [
                        0,
                        1,
                        3,
                        5,
                        7,
                        10
                    ],
                    "description": "Generates a shield granting <%= rank + 1%> armor"
                }
            ]
        },
        {
            "title": "Strength of the Earth",
            "rank": 0,
            "ranks": [
                {
                    "rank": 0,
                    "level": [
                        0,
                        1,
                        3,
                        5,
                        7,
                        10
                    ],
                    "description": "+<%= (rank + 1) * 7 %> STR, you recalculate your HP according to the new STR. When the spell ends and you fall below 0 HP you will die instantly."
                }
            ]
        },
        {
            "title": "Shatter Stone",
            "rank": 0,
            "ranks": [
                {
                    "rank": 0,
                    "level": [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                    ],
                    "description": "Break stone, In conjunction with the DM decide how long it takes and how much AP it costs. You can break bolders, walls, door frames"
                }
            ]
        },
        {
            "title": "Weight of the earth",
            "rank": -1,
            "ranks": [
                {
                    "rank": 0,
                    "level": [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                    ],
                    "description": "Weapon of the target is <%= rank + 1 %> INI slower."
                }
            ]
        },
        {
            "title": "Sink",
            "rank": -1,
            "ranks": [
                {
                    "rank": 0,
                    "level": 2,
                    "description": "On recuperate get -1 AP when in the affected area. Can only walk not run must remain walking or dien in 200 INI. 2m2"
                },
                {
                    "rank": 1,
                    "level": 4,
                    "description": "Weapon speed is increased by 3 INI. Area is now 6m2."
                },
                {
                    "rank": 2,
                    "level": 6,
                    "description": "Recuperate -2 AP. Area 12m2"
                },
                {
                    "rank": 3,
                    "level": 6,
                    "description": "Weapon speed is 6 INI slower when in the effected area. Area 20m2"
                },
                {
                    "rank": 4,
                    "level": 8,
                    "description": "-3 AP per recuperation. Area 40m2"
                }
            ]
        },
        {
            "title": "Summon Earth Elemental",
            "rank": -1,
            "ranks": [
                {
                    "rank": 0,
                    "level": 5,
                    "description": "Summon an Earth elemental you help you. This Elemental makes casting earth spells easier (-1 AP per cast) You regenerate +2 AP per recuperation and you have +2 Armor. The elemental has 6HP and 6 Armor."
                },
                {
                    "rank": 1,
                    "level": 10,
                    "description": "Summon an Earth elemental you help you. This Elemental makes casting earth spells easier (-2 AP per cast) You regenerate +4 AP per recuperation and the party has +2 Armor. The elemental has 6HP and 6 Armor."
                }
            ]
        },
        {
            "title": "Listen to the earth",
            "rank": -1,
            "ranks": [
                {
                    "rank": 0,
                    "level": [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                    ],
                    "description": "Put your ear to the ground and listen for <%= (INU || 1) * (rank + 1) * level * 10 %>m."
                }
            ]
        }
    ],
    "specials": [
        {
            "title": "Cast Magic",
            "description": "You can cast earth magic and choose from the list of general spells."
        }
    ]
}