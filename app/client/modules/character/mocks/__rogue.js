export default {
    "title": "Rogue",
    "name": "Rogue",
    "description": "Rogues are different from every other class. Rogues begin with every spell they will get. These spells will become better when they level up but otherwise you will have a full range of abilities right off the bat!",
    "skillPoints": 2,
    "professionPoints": 1,
    "stats": {
        "STR": 0,
        "AGI": 10,
        "INU": 0,
        "PER": 4
    },
    "skills": [
        "Weapon Skill",
        "Ballistic Skill",
        "Concoct Poison"
    ],
    "languages": [
        {
            "title": "Language Signal",
            "bought": "profession",
            "expertise": false,
            "boughtSource": "class"
        }
    ],
    "spells": [
        {
            "level": 1,
            "type": "level",
            "title": "Expose Armor",
            "description": "Attack doing no DMG but reducing the physical armor of the target by <%= lvl*5 %>% for all enemies attacking that target. Does not work against magical armor like a mage aura or a stone skin. Does not naturally stack. Costs 3 AP. Against targets with an AC you reduce this AC with your level (<%= lvl %>)."
        },
        {
            "level": 1,
            "type": "level",
            "title": "Vanish",
            "description": "Hide by walking into the Shadow Realm and emerge hidden. You step through the Shadow Realm and emerge <%= (AGI*2)+lvl %> meters in max <%= lvl * 3 %> INI. This means that the higher level you are, the longer you can stay hidden in the Shadow Realm. You emerge hidden. Cost 5 AP, cannot attack or do other things whilst hidden. Cast time is 0 INI but a cooldown of 30 INI."
        },
        {
            "level": 1,
            "type": "level",
            "title": "Interrupt",
            "description": "When you successfully attack you can push your target's offensive action with +<%= 10+lvl %> INI, cost 3 AP (on top of the AP for the original attack). If the action was a spell the target must make an Magic check with a -10 to see if the spell is interrupted."
        },
        {
            "level": 1,
            "type": "level",
            "title": "Recuperate",
            "description": "Drain AP from the target and give yourself 50% of these AP per 10 INI. Each AP you spend leaches 1 AP from the target with a max of <%= 2 * lvl + 2 %>. Needs a successful hit and must be called in advance. Starting level 3, while your recuperate is active every action costs 1AP less."
        },
        {
            "level": 1,
            "type": "level",
            "title": "Ignore Armor",
            "description": "Reduce target's Armor lowers the target’s DMG reduction by <%= 25+(lvl * 10) %>% on a successful hit. Costs 1AP. (Details: For this 1 extra action point you can ignore a good portion of the target's armor)."
        },
        {
            "level": 1,
            "type": "level",
            "title": "Stronger from behind",
            "description": "When attacking from behind a Rogue gets +<%= lvl %> bonus to DMG and Skill. You also get a +<%= 10 + lvl %>% crit chance."
        }
    ],
    "specials": [
        {
            "name": "Hide in plain sight"
        }
    ]
}