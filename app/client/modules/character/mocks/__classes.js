export default [
    {
        "title": "Warrior",
        "name": "Warrior",
        "description": "Warriors are the masters of a battlefield. They dominate a battle with strength and tactics. There are three types of warriors: Barbarians, Soldiers and Defenders.",
        "skillPoints": 1,
        "HPFactor": 2,
        "professionPoints": 0,
        "stats": {
            "STR": 7,
            "AGI": 7,
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
                "spells": [
                    {
                        "level": 1,
                        "title": "Rage I",
                        "description": "Every 5 HP you loose grants +1 DMG per attack (with a maximum of 2 * lvl damage)"
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
                        "description": "+2.5% crit chance"
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
                "spells": []
            }
        ],
        "languages": [],
        "specials": []
    },
    {
        "title": "Rogue",
        "name": "Rogue",
        "description": "Rogues are different from every other class. Rogues begin with every spell they will get. These spells will become better when they level up but otherwise you will have a full range of abilities right off the bat!",
        "skillPoints": 2,
        "professionPoints": 1,
        "stats": {
            "STR": 3,
            "AGI": 7,
            "INU": 3,
            "PER": 3
        },
        "skills": [
            "Weapon Skill",
            "Ballistic Skill",
            "Concoct Poison"
        ],
        "languages": [
            {
                "name": "Language Signal",
                "bought": true,
                "expertise": false,
                "boughtSource": "class"
            }
        ],
        "spells": [
            {
                "level": 1,
                "title": "Expose Armor",
                "description": "Attack doing no DMG but reducing the physical armor of the target by <%= lvl*5 %>% for all enemies attacking that target. Does not work against magical armor like a mage aura or a stone skin. Does not naturally stack. Costs 3 AP"
            },
            {
                "level": 2,
                "title": "Vanish",
                "description": "Hide by walking into the Shadow Realm and emerge hidden. You step through the Shadow Realm and emerge <%= AGI+lvl %> meters in max <%= lvl %> INI. This means that the higher level you are, the longer you can stay hidden in the Shadow Realm. You emerge hidden. Cost 5 AP, cannot attack or do other things whilst hidden. Cast time is 0 INI but a cooldown of <%= 1000 / lvl %> INI."
            },
            {
                "level": 3,
                "title": "Interrupt",
                "description": "The offensive action the target was about to do gets a +<%= 10+lvl %> INI, cost 3 AP. If the action was a spell the target must make an Magic check with a -10 to see if the spell is interrupted."
            },
            {
                "level": 4,
                "title": "Recuperate",
                "description": "Drain AP from the target and give yourself a fraction of these AP with per 10 IP as a bonus. Each AP you spend leaches 1 AP from the target with a max of <%= 2 * lvl + 2 %>. Needs a successful hit and must be called in advance. Starting level 3, while your recuperate is active every action costs 1AP less."
            },
            {
                "level": 5,
                "title": "Ignore Armor",
                "description": "Ignore Armor lowers the target’s PV with (25+lvl)% on a successful hit. Costs 1AP. (Details: For this 1 extra action point you can ignore a good portion of the target's armor)."
            },
            {
                "level": 6,
                "title": "Stronger from behind",
                "description": "When attacking from behind a Rogue gets (lvl + 1) bonus DMG and Skill."
            },
            {
                "level": 7,
                "title": "Precision",
                "description": "A Rogue can ignore $AGI$d4 of the target’s armor on each attack. Imagine having 11 AGI, on each attack you do you can now ignore 1d4 of the target’s armor."
            }
        ],
        "specials": [
            {
                "name": "Hide in plain sight"
            }
        ]
    },
    {
        "title": "Paladin",
        "name": "Paladin",
        "HPFactor": 2,
        "description": "Paladins are holy warriors. They are specialized in the eradication of evil like demons and undead. There are three paths a paladin can follow and every level they gain they should choose one spell from that level of any path. Level 5 is a big step in the paladin's abilities. At level 5 you select a specialization. Choosing this specialization unlocks perks you can choose from within the tree of perks.",
        "skillPoints": 2,
        "professionPoints": 0,
        "stats": {
            "STR": 7,
            "AGI": 4,
            "INU": 4,
            "PER": 4
        },
        "skills": [
            "Weapon Skill",
            "Ballistic Skill"
        ],
        "languages": [],
        "spells": [
            {
                "level": 0,
                "title": "Regenerate",
                "description": "Regenerate 1 hit point per recuperation. This ability is always active on the paladin.",
                "feats": {
                    "regenerate": 1
                }
            },
            {
                "level": 0,
                "title": "Protect",
                "description": "+1 armor. (always on)",
                "feats": {
                    "toughness": 1
                }
            },
            {
                "level": 0,
                "title": "Destroy Evil",
                "description": "Do +2 DMG agains undead and demons, +1 DMG to everyone else when attacking. This spell is always on, even if you shake the hand of a demon or undead you will inflict +2 DMG. (Normal armor rules apply)",
                "feats": {
                    "DMG adjstm.": 1
                }
            },
            {
                "type": "choice",
                "level": 1,
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
                "type": "choice",
                "level": 2,
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
                        "description": "Taunt, causes a target to attack you for 50 INI. Target will not kill itself to get to you and when he/she can't reach you it will attack someone else."
                    },
                    {
                        "title": "Crusader",
                        "description": "Gain a +2 Weapon Skill (+1 Weapon Expertise) when fighting undead or demons"
                    }
                ]
            },
            {
                "type": "choice",
                "level": 3,
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
                "type": "choice",
                "level": 4,
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
                "type": "choice",
                "level": 5,
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
                "type": "choice",
                "level": 6,
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
                "type": "choice",
                "level": 7,
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
                "type": "choice",
                "level": 8,
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
                "type": "choice",
                "level": 9,
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
                "type": "choice",
                "level": 10,
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
        ],
        "specials": [
            {
                "title": "Can cast Paladin Spells"
            }
        ]
    },
    {
        "title": "Priest",
        "name": "Priest",
        "type": "caster",
        "description": "A priest is a powerful healer and caster. A classic and a powerful ally in every party.",
        "skillPoints": 2,
        "professionPoints": 0,
        "stats": {
            "STR": 3,
            "AGI": 3,
            "INU": 7,
            "PER": 3
        },
        "skills": [
            "Magic",
            "Concoct Poison"
        ],
        "resistances": [
            "Magic"
        ],
        "languages": [],
        "spells": [
            {
                "title": "Heal",
                "rank": 0,
                "ranks": [
                    {
                        "rank": 0,
                        "level": 0,
                        "description": "Heal for weapon DMG as healing. It does not matter which weapon you choose, but you must attune yourself with that weapon. You can have a maximum of two weapon attunement."
                    },
                    {
                        "rank": 1,
                        "level": 1,
                        "description": "Range becomes intuition meters"
                    },
                    {
                        "rank": 2,
                        "level": [
                            3,
                            5,
                            7,
                            10
                        ],
                        "description": "You can split your heal over <%= rank %> targets. Targets must be within range and the heal must split evenly between all the targets."
                    }
                ]
            },
            {
                "title": "Regenerate",
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
                            9,
                            10
                        ],
                        "description": "Regenerate <%= rank + 1 %> HP per recuperation"
                    }
                ]
            },
            {
                "title": "Shield",
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
                "title": "Haste",
                "rank": -1,
                "ranks": [
                    {
                        "rank": 0,
                        "level": [
                            2,
                            4,
                            6,
                            8,
                            10,
                            12
                        ],
                        "description": "+<%= rank %> AP per recuperation and weapon speed -<%= rank %>."
                    }
                ]
            },
            {
                "title": "Seek truth",
                "rank": -1,
                "ranks": [
                    {
                        "rank": 0,
                        "level": [
                            1,
                            2,
                            4,
                            6,
                            8,
                            10,
                            12
                        ],
                        "description": "+<%= rank %>d4 question to which the target mut answer truthfully. Magic resist."
                    }
                ]
            },
            {
                "title": "Dominate",
                "rank": -1,
                "ranks": [
                    {
                        "rank": 0,
                        "level": [
                            3,
                            5,
                            7,
                            9,
                            11,
                            13
                        ],
                        "description": "Control a target for <%= rank + 1 %>d10 INI. Magic resist."
                    }
                ]
            },
            {
                "title": "Revive",
                "rank": -1,
                "ranks": [
                    {
                        "rank": 0,
                        "level": [
                            5,
                            10,
                            15,
                            20,
                            25
                        ],
                        "description": "Revives a target after death. Cannot be dead for more than rank 1: 5 minutes, rank 2: 1 hour, rank 3: six hours, rank 4: day, rank 5: week."
                    }
                ]
            }
        ],
        "specials": [
            {
                "title": "Cast Magic",
                "description": "You can cast priestly magic and choose from the list of general spells."
            }
        ]
    },
    {
        "title": "Earth Mage",
        "name": "Earth Mage",
        "type": "caster",
        "description": "A caster who can manipulate the very stone and bedrock of the earth..",
        "skillPoints": 2,
        "professionPoints": 0,
        "stats": {
            "STR": 7,
            "AGI": 2,
            "INU": 7,
            "PER": 2
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
]