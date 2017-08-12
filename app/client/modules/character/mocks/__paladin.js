export default {
    "title": "Paladin",
    "name": "Paladin",
    "HPFactor": 2,
    "description": "Paladins are holy warriors. They are specialized in the eradication of evil like demons and undead. There are three paths a paladin can follow and every level they gain they should choose one spell from that level of any path. Level 5 is a big step in the paladin's abilities. At level 5 you select a specialization. Choosing this specialization unlocks perks you can choose from within the tree of perks.",
    "skillPoints": 2,
    "professionPoints": 0,
    "stats": {
        "STR": 7,
        "AGI": 0,
        "INU": 7,
        "PER": 0
    },
    "skills": [
        "Weapon Skill",
        "Ballistic Skill"
    ],
    "languages": [],
    "specials": [
        { "title": "Regenerate", "level": 1, "Regenerate": 1, "description": "Regenerate 1 HP per recuperation." },
        { "title": "Protect", "level": 1, "Toughness": 2.5, "description": "5% extra armor" },
        { "title": "Destroy Evil", "level": 1, "DMG adjstm": 1, "description": "+1 DMG against everything." }
    ],
    "spells": [
        {
            "level": 0,
            "type": "special",
            "title": "Regenerate",
            "description": "Regenerate 1 hit point per recuperation. This ability is always active on the paladin."
        },
        {
            "level": 0,
            "type": "special",
            "title": "Protect",
            "description": "+1 armor. (always on)",
        },
        {
            "level": 0,
            "type": "special",
            "title": "Destroy Evil",
            "description": "Do +2 DMG agains undead and demons, +1 DMG to everyone else when attacking. This spell is always on, even if you shake the hand of a demon or undead you will inflict +2 DMG. (Normal armor rules apply). (The charactersheet automatically incorporates +1 DMG, you should count an extra +1 against undead or deamons yourself)",
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
                    "title": "Bless",
                    "description": "Bless yourself gaining +2 armor. (This bless replaces the standard +1 armor a Paladin gets.)"
                },
                {
                    "title": "Bane of Evil",
                    "description": "Your crittical strikes against undead or demons allow you to roll an aditional weapon die. (So normally 3 in total)"
                }
            ]
        },
        {
            "level": 2,
            "type": "choice",
            "choices": [
                {
                    "title": "Recovery",
                    "description": "+1 AP per recuperation for every party member.",
                    "feats": {
                        "endurance": 1
                    }
                },
                {
                    "title": "Taunt",
                    "description": "Taunt, causes a target to attack you for 50 INI. Target will not kill itself to get to you and when he/she can't reach you it will attack someone else. Taunt has a separate cooldown of <%= 8 * ((100 - INI) / 100) %> seconds. You can taunt "
                },
                {
                    "title": "Crusader",
                    "description": "Gain a +2 Weapon Skill (+1 Weapon Expertise) when fighting undead or demons"
                }
            ]
        },
        {
            "level": 3,
            "type": "choice",
            "choices": [
                {
                    "title": "Bless",
                    "description": "Bless, Regenerate +(lvl) HP per recuperation, can be cast on others. (Counts as a Defensive Spell)"
                },
                {
                    "title": "Bless",
                    "description": "Gain +4 armor, can be cast on others. (Counts as a Defensive Spell)."
                },
                {
                    "title": "Bless",
                    "description": "+4 DMG agains undead and demons. +2 DMG agains other opponents. Casting this spell replaces the standard Destroy evil of the Paladin. Can be cast on others and counts as a defensive action."
                }
            ]
        },
        {
            "level": 4,
            "type": "choice",
            "choices": [
                {
                    "title": "Lay on hands",
                    "description": "Return a  non dead target to full health. Target must be within 10 meters and not dead. Once per day."
                },
                {
                    "title": "Divine Protection",
                    "description": "Gain 1d4 HP and 1d4 armor for 20 INI, 30 INI cooldown. Instant cast does not cost any AP."
                },
                {
                    "title": "Smite",
                    "description": "Smite a target for 1d4 DMG per extra AP you spend. You can spend a maximum of your lvl AP"
                }
            ]
        },
        {
            "level": 5,
            "type": "choice",
            "choices": [
                {
                    "title": "Efficient",
                    "description": "Healing costs -1 AP.",
                    "feats": {
                        "endurance": 1
                    }
                },
                {
                    "title": "Efficient",
                    "description": "Defensive actions cost -1 AP."
                },
                {
                    "title": "Efficient",
                    "description": "Offensive actions cost -1 AP."
                }
            ]
        },
        {
            "level": 6,
            "type": "choice",
            "choices": [
                {
                    "title": "Bleed for you",
                    "description": "Take someone else’s incoming DMG, armor does not count, so full DMG. While wounded always increase your regeneration by your level per recuperation. You must remain “praying” for the regeneration to work. You do not need to touch the target(s) to take their wounds. Can take 1 attack per 10 INI"
                },
                {
                    "title": "Protect the Weak",
                    "description": "Your resolve allows you to parry for other players and you gain a +5 on every melee defensive roll. You are allowed to parry for party members, even in situations otherwise difficult. You can't parry over large distance and you can't parry extreme situations."
                },
                {
                    "title": "Judge and Juror",
                    "description": "Gain insight into the crimes and actions of your targets sending them into repentance. Repentance cause -5 to all actions against you (-12 for undead and demons). Hits against these targets cause them to gain -1 AP per recuperation for the duration of the repentance."
                }
            ]
        },
        {
            "level": 7,
            "type": "choice",
            "choices": [
                {
                    "title": "Recovery II",
                    "description": "+4 AP, self only.",
                    "feats": {
                        "endurance": 1
                    }
                },
                {
                    "title": "Hardened",
                    "description": "Reduce 2 DMG per extra AP you use to reduce DMG."
                },
                {
                    "title": "Scarred",
                    "description": "Do +2 DMG per AP."
                }
            ]
        },
        {
            "level": 8,
            "type": "choice",
            "choices": [
                {
                    "title": "Revive",
                    "description": "Return a target to life with 1 HP. Works on targets who have died within the last hour.",
                    "feats": {
                        "endurance": 1
                    }
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