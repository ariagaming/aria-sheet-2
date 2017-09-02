export default {
    "title": "Paladin",
    "name": "Paladin",
    "HPFactor": 2,
    "description": "Paladins are holy warriors. They are specialized in the eradication of evil like demons and undead. There are three paths a paladin can follow and every level they gain they should choose one spell from that level of any path. Level 5 is a big step in the paladin's abilities. At level 5 you select a specialization. Choosing this specialization unlocks perks you can choose from within the tree of perks.",
    "skillPoints": 4,
    "professionPoints": 0,
    "stats": {
        "STR": 14,
        "AGI": 4,
        "INU": 8,
        "PER": 4
    },
    "skills": [
        "Weapon Skill",
        "Ballistic Skill"
    ],
    "languages": [],
    "specials": [
        { "title": "Regenerate", "level": 1, "Regenerate": 1, "description": "Regenerate 1 HP per recuperation." },
        { "title": "Protect", "level": 1, "Toughness": 2, "description": "5% extra armor" },
        { "title": "Destroy Evil", "level": 1, "DMG adjstm": 1, "description": "+1 DMG against everything." }
    ],
    "spells": [

        {
            //"level": 1,
            "rank": 1,
            "baseRank": 1,
            "type": "ranked",
            "title": "Riposte",
            "description": "On every parried attack (Defense), you deal <%= rank %>d4 + <%= AGI %> DMG."
        },
        {
            "level": 1,
            "type": "choice",
            "choices": [
                {
                    "title": "Heal",
                    "description": "Heal for weapon DMG as healing. It does not matter which weapon you choose, but you must attune yourself with that weapon. You can have a maximum of two weapon attunemnet."
                },
                {
                    "title": "Taunt",
                    "description": "You can taunt a target to attack you for 20 INI. Every time your Spash hits hits a target with a Taunt on them this taunt refreshes. Taunt has a CD of 8 INI but is a different CD than the weapons and actions."
                },
                {
                    "title": "Smite",
                    "description": "Each extra AP does 1d4 extra Holy DMG. (Max <%= lvl %> AP, so max <%= lvl %>d4."
                }
            ]
        },
        {
            "level": 2,
            "type": "choice",
            "choices": [
                {
                    "title": "Efficient Healing",
                    "description": "Healing costs -1 AP"
                },
                {
                    "title": "Forgiving",
                    "description": "Increase armor by 40% for 1 attack of the opponent, 80 INI CD. The INI resets to 0 when you critically attack."
                },
                {
                    "title": "Vengeance",
                    "description": "Gain a +2 Weapon Skill (+1 Weapon Expertise) and +5 DMG when fighting undead or demons"
                }
            ]
        },
        {
            "level": 3,
            "type": "choice",
            "choices": [
                {
                    "title": "Holy Fire",
                    "description": "Purge a target causing either 2d10 DMG or healing to either an enimy or a friendly. 80 INI CD, resets on crit."
                },
                {
                    "title": "Devine Protection",
                    "description": "Take the DMG of another target for the next attack which is going to hit him or her, shares the CD of taunt."
                },
                {
                    "title": "Righteous Fury",
                    "description": "Crit chance increased by 5% for every time you do not crit. Resets on Crit."
                }
            ]
        },
        {
            "level": 4,
            "type": "choice",
            "choices": [
                {
                    "title": "Divine Field",
                    "description": "Draw symbols on the floor (takes 1 minute) maximum size 10 square feet. Increase DMG and Healing by 1d8 while standing in the field."
                },
                {
                    "title": "Hammer of Justice",
                    "description": "Reduce movement of target by 15% for 30 INI."
                },
                {
                    "title": "Fist of Justice",
                    "description": "Every crit lowers the target's armor by 10%."
                }
            ]
        },
        {
            "level": 5,
            "type": "choice",
            "choices": [
                {
                    "title": "Bless",
                    "description": "Regenerate 10 HP per recuperation, 10 INI cast, lasts 50 INI."
                },
                {
                    "title": "Bless",
                    "description": "+10% Armor & 10% Aura for 50 INI, cast time 10 INI."
                },
                {
                    "title": "Bless",
                    "description": "1d6 extra DMG for 50 INI, cast time 10 INI."
                }
            ]
        },
        {
            "level": 6,
            "type": "choice",
            "choices": [
                {
                    "title": "Lay on Hnads",
                    "description": "Instantly heal a target to 100% health. Can only be cast 1ce per day."
                },
                {
                    "title": "Stay the Hounds",
                    "description": "When brought to 0 or lower health, return to 1 health and reduce DMG taken by 100% from both magical or physical attacks for 12 INI. Can only be cast 1ce per day."
                },
                {
                    "title": "Sacrifice",
                    "description": "Sacrifice yourself, you do all of your remaining HP as DMG to the target. You lose all but 1 HP. Can only be cast 1ce per day."
                }
            ]
        },
        {
            "level": 7,
            "type": "choice",
            "choices": [
                {
                    "title": "Expert Healer",
                    "description": "Gealing costs -1 AP"
                },
                {
                    "title": "Expert defender",
                    "description": "Defensive actions cost -1 AP.",
                    "AP Defense": -1
                },
                {
                    "title": "Expert Attacker",
                    "description": "Offensive actions cost -1 AP.",
                    "AP Offense": -1
                }
            ]
        },
        {
            "level": 8,
            "type": "choice",
            "choices": [
                {
                    "title": "Flash of Light",
                    "description": "When using a shield and a 1-H weapon the INI of your weapon is reduced by 20%.",
                    "Initiative": 4
                },
                {
                    "title": "Second Chances",
                    "description": "A fatal blow brings you to 1 HP instead."
                },
                {
                    "title": "Smite II",
                    "description": "Smite does 1d6 DMG."
                }
            ]
        },
        {
            "level": 9,
            "type": "choice",
            "choices": [
                {
                    "title": "Cure poison and disease",
                    "description": "You can cure poisons and diseases up to your level. You need to make a skill check with a +5 against the poisoner."
                },
                {
                    "title": "Indimitable",
                    "description": "For the next 30 INI: your AGI counts double for Protective Value, your defensive actions cost no AP and you can't be brought below0 HP."
                },
                {
                    "title": "Indomitable might",
                    "description": "For the next 30 INI: your PHY counts double for DMG, your crit chance is increased by 25% and every 1 with your DMG die can de rerolled."
                }
            ]
        },
        {
            "level": 10,
            "type": "choice",
            "choices": [
                {
                    "title": "Summon protector",
                    "description": "Summon a healer",
                    "feats": {
                        "endurance": 1
                    }
                },
                {
                    "title": "Summon protector",
                    "description": "Summon a protector"
                },
                {
                    "title": "Summon protector",
                    "description": "Someone who can attack. Will automatically attack undead or demons but will help on other targets when there are no more undead or demons."
                }
            ]
        }
    ]
};