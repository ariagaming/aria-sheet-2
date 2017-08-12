export default [
    {
        "title": "Warrior",
        "name": "Warrior",
        "description": "Warriors are the masters of a battlefield. They dominate a battle with strength and tactics. There are three types of warriors: Barbarians, Soldiers and Defenders.",
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
        "specializations": [
            {
                "title": "Barbarian",
                "name": "Barbarian",
                "feats": [],
                "specials": [
                    {
                        "title": "Revenge I",
                        "level": 2,
                        "DMG adjstm": 2
                    },
                    {
                        "title": "Brutal Crits",
                        "level": 4,
                        "Crit": 2
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
                        "description": "Every point you spend using Brutal Strikes (so this is the extra AP you spend on DMG), lowers the target's weapon skill against you untill the next recuperation by that amount\footnote{If you posh 6AP into DMG after you hit the target, this target has -3 to his skill until the next recuperation.}. This stacks. Can only be used with two handed weapons."
                    },
                    {
                        "level": 7,
                        "title": "Revenge II",
                        "description": "Grants +4 DMG"
                    },
                    {
                        "level": 8,
                        "title": "Whirlwind",
                        "description": "+100% chance to attack a second target\footnote{This stacks with the feat bonus}."
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
            },
            {
                "title": "Soldier",
                "name": "Soldier",
                "feats": [
                    { "title": "WS Expertise", "value": 1 },
                    { "title": "BS Expertise", "value": 1 },
                    { "title": "Roll modifier", "value": 1 }
                ],
                "spells": [
                    {
                        "level": 1,
                        "title": "Tactician I",
                        "description": "Every 5 HP you loose grants +1 skill and +1 AP per recuperation."
                    },
                    {
                        "level": 2,
                        "title": "Expose weakness I",
                        "description": "-1 Armor for the target"
                    },
                    {
                        "level": 3,
                        "title": "Revenge I",
                        "description": "Grants +2 DMG"
                    },
                    {
                        "level": 4,
                        "title": "Effortless",
                        "description": "+25% chance to refund AP for an action, these AP you get refunded may be shared with the party."
                    },
                    {
                        "level": 5,
                        "title": "Divide and Conquer",
                        "description": "You get +2 AP per recuperation but you must give these AP to your party."
                    },
                    {
                        "level": 6,
                        "title": "Overflow",
                        "description": "Every action point you give to a party member counts as two action points."
                    },
                    {
                        "level": 7,
                        "title": "Survey the field",
                        "description": "When you concentrate on the battle and do not take any other actions then a slow walk you get 3AP per 10 Initiative and can devide these amongst the party."
                    },
                    {
                        "level": 8,
                        "title": "Intervene",
                        "description": "Force a target to attack another target in your party for 30 INI. This target automatically positions themselves to attack this new target; walking away from their original target."
                    },
                    {
                        "level": 9,
                        "title": "Indomitable will",
                        "description": "For the next 30 INI you regenerate 1 AP per Initiative which you can give to any party member or keep for yourself. Can only occur once per day."
                    },
                    {
                        "level": 10,
                        "title": "Disarray",
                        "description": "Every target of the party suffers a -6 to skill rolls for 30 INI, their damage is halved and they have a 50% chance their spells fail (World die check higher than 10). They will not intercept party members attacking other targets."
                    }
                ]
            },
            {
                "title": "Protector",
                "name": "Protector",
                "feats": [
                    { "title": "Toughness", "value": 2 },
                    { "title": "Endurance", "value": 1 }
                ],
                "spells": [
                    {
                        "level": 1,
                        "title": "Tactician I",
                        "description": "Every 5 HP you loose grants +1 skill and +1 AP per recuperation."
                    },
                    {
                        "level": 2,
                        "title": "Expose weakness I",
                        "description": "-1 Armor for the target"
                    },
                    {
                        "level": 3,
                        "title": "Revenge I",
                        "description": "Grants +2 DMG"
                    },
                    {
                        "level": 4,
                        "title": "Effortless",
                        "description": "+25% chance to refund AP for an action, these AP you get refunded may be shared with the party."
                    },
                    {
                        "level": 5,
                        "title": "Divide and Conquer",
                        "description": "You get +2 AP per recuperation but you must give these AP to your party."
                    },
                    {
                        "level": 6,
                        "title": "Overflow",
                        "description": "Every action point you give to a party member counts as two action points."
                    },
                    {
                        "level": 7,
                        "title": "Survey the field",
                        "description": "When you concentrate on the battle and do not take any other actions then a slow walk you get 3AP per 10 Initiative and can devide these amongst the party."
                    },
                    {
                        "level": 8,
                        "title": "Intervene",
                        "description": "Force a target to attack another target in your party for 30 INI. This target automatically positions themselves to attack this new target; walking away from their original target."
                    },
                    {
                        "level": 9,
                        "title": "Indomitable will",
                        "description": "For the next 30 INI you regenerate 1 AP per Initiative which you can give to any party member or keep for yourself. Can only occur once per day."
                    },
                    {
                        "level": 10,
                        "title": "Disarray",
                        "description": "Every target of the party suffers a -6 to skill rolls for 30 INI, their damage is halved and they have a 50% chance their spells fail (World die check higher than 10). They will not intercept party members attacking other targets."
                    }
                ]
            }
        ],
        "languages": [],
        "specials": []
    }


]