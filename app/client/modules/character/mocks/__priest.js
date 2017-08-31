export default {
    "title": "Priest",
    "name": "Priest",
    "type": "caster",
    "description": "A priest is a powerful healer and caster. A classic and a powerful ally in every party.",
    "skillPoints": 4,
    "professionPoints": 0,
    "stats": {
        "STR": 0,
        "AGI": 0,
        "INU": 10,
        "PER": 4
    },
    "skills": [
        "Magic",
        "Concoct Poison"
    ],
    "resistances": [
        "Magic",
        "Mental",
        "Holy"
    ],
    "professions": [
        "Medic"
    ],
    "languages": [],
    "spells": [
        {
            "rank": 1,
            "type": "ranked",
            "baseRank": 1,
            "title": "Heal",
            "description": "Heal for weapon damage. The range of your heal spell is your movement: <%= movement %>ft. For the duration of the combat you gain a +<%= rank %>% bonus to your heals."
        },
        {
            "rank": 1,
            "type": "ranked",
            "baseRank": 1,
            "title": "Shield",
            "description": "Protect agains magical attacks granting +<%= rank * 5 %>% aura and +<%= rank %> to all resistance checks."
        },
        {
            "rank": 0,
            "type": "ranked",
            "baseRank": 0,
            "title": "Dominate",
            "description": "Control another humanoid. Duration <%= 15 + (5 * rank) %> INI. Targets can resist with mental resistance. When you want to do more invasive actions like casting spells or suicide the target get's extra bonusses. Using skills other than listening, walking and talking +3, with a +10 resistance roll you can talk and act like the target using their memories. With a +5 you can use their spells. With a +10 you can attack friends. Suicide takes an extra +20 resistance roll."
        },
        {
            "rank": 0,
            "type": "ranked",
            "baseRank": 0,
            "title": "Bane",
            "description": "Weapons do +<%= rank %> DMG and +<%= rank * 2 %> DMG against deamons and undead. Duration 30 INI. 1 target and 2 targets per extra AP spend."
        },
        {
            "rank": 0,
            "type": "ranked",
            "baseRank": 0,
            "title": "Guardian",
            "description": "Once per day you can transform into a guardian angel. +100% extra attack for all of your heals for the next <%= rank %> heals."
        },
        {
            "rank": 1,
            "type": "ranked",
            "baseRank": 1,
            "title": "Cleanse",
            "description": "Remove <%= rank %> status effect ranks from a target; this will cost <%= 3 + rank %> AP. For example, if you have four stacks of Dehydration, Cleanse rank two will lower your Dehydration ranks to 2 and the spell will cost 5 AP."
        },
        {
            "rank": 0,
            "type": "ranked",
            "baseRank": 0,
            "title": "Haste",
            "description": "Per rank +10% extra attack and +1 defensive skill. +<%= 10 * rank %> Extra Attack, +<%= rank %> Defensive skills."
        },
        {
            "rank": 1,
            "type": "ranked",
            "baseRank": 1,
            "title": "True Sight",
            "description": "Can see through minor illusions. at rank 3 you can see through normal illusions. At rank 7 you can see through major illusions. Duration <%= 20 + (rank * 5) %> INI."
        },
        {
            "rank": 1,
            "type": "ranked",
            "baseRank": 1,
            "title": "Mind Flay",
            "description": "Rank d4 dmg per 10 INI, double against demons and undead. Must remain channeling, reduces movement speed by 50%. Currently <%= rank %>d4 dmg per 10 INI."
        },
        {
            "rank": 1,
            "type": "ranked",
            "baseRank": 1,
            "title": "Revive",
            "description": "Rank 1, can revive after max 30 INI of death. Rank 2, can revive after 60 INI of death; THe next ranks: 3-5 minutes, 4-15 minutes, 5-30 minutes, 6-1 day, 7-1 week, 8-month, 9-year, 10-5 years. When reviving someone there is a chance of (rank * 10)% chance of the target being raised as an undead. Spending a day preparing and using personal items of the target will decrease the chance of raiding an undead by 5%. So to safely resurrect someone who has dies a year ago you would need 19 days of preperation and a few very personal items."
        },
        {
            "rank": 1,
            "baseRank": 1,
            "type": "powerWord",
            "title": "Power Word Glory",
            "description": "Instantly allow a party member to take an action."
        },
        {
            "rank": 1,
            "baseRank": 1,
            "type": "powerWord",
            "title": "Power Word Charm",
            "description": "A target is charmed and will not attack you. Does not work on Undead."
        },
        {
            "rank": 1,
            "baseRank": 1,
            "type": "powerWord",
            "title": "Power Word Heal",
            "description": "Instantly heal a target for <%= rank %>d4 HP."
        },
        {
            "rank": 1,
            "baseRank": 1,
            "type": "powerWord",
            "title": "Power Word Shield",
            "description": "Reduce the next attack the target takes by <%= rank %>d10 works on both magical and physical DMG."
        }
    ],
    "specials": [
        {
            "title": "Cast Priestly Magic",
            "description": "You can cast priestly magic and choose from the list of general spells."
        }
    ]
}