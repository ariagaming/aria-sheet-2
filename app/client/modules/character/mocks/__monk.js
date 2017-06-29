export default {

    "name": "monk",
    "title": "Monk",

    "APName": "Chi",

    "stats": {
    	"STR": 4,
    	"AGI": 10,
    	"INU": 3,
    	"PER": 4
    },

    "weapons": [
    	{
    		"title": "Fists",
    		"numberOfDice": 1,
    		"diceSides": 6,
    		"constant": 1
    	}
    ],

    "specializations": [
    	{
    		"title": "Path of the Iron Fist",
    		"description": "Path of the Iron Fist is a well trained battle monk. An Iron Fist monk you join Fire and Earth to focus on maximising your damage and effectiveness. As an Iron Fist monk you can break wood and stone with your hands as feet. Each attack always counts as both of these elements and in addition to this your fists now do 1d6 + level damage. You can no longer Water Punch.",
    		"spells": [
    			{ "title": "Water Punch", "remove": true }
    		]
    	},
    	{
    		"title": "Path of the Windwalker",
    		"description": "A windwalker can use Spirit Sprint without it costing Chi. While Spirit Sprinting you can now attack and defend normally, your movement rate is doubled. Your Water Punch now automatically crits and your Water Punches have a 20% bonus chance to trigger a second attack.",
    		"spells": [
    		    { 
    		    	"title": "Spirit Sprint", 
    		    	"replace": true,
    		    	"description": "As long as there is a surface you can run on/against it, this can be water, tree tops, walls or the heads of people. While spirit sprinting your movement speed is 2 times your movement. Attacks cost 3 Chi and you weigh next to nothing making you vulnerableto elemental attacks especially wind attacks, you take 50% more dmg from elemental attacks. Spirit Sprint costs 3 Chi per 30 INI. You do not regenerate Chi whilst sprinting."
    		    },
    		    { 
    		    	"title": "Water Punch", 
    		    	"replace": true,
    		    	"description": "Deliver a healing punch, healing for you punch dmg, costs 3 chi. While 'Spirit Sprint' is on your Water Punch is an automatic crit and has a 20% increased chance of triggering a second attack." 
    		    }
    		],
    		"feats": []
    	},
    	{
    		"title": "Path of the Snake",
    		"description": "You are nimble and fexible. You now always have Lightning Reflexes on. In addition to this you can spend 2 Chi to force targets to attack you for 40 INI. This effect can stack. Your defensive actions and your dodge get your level as an extra bonus. While regenerating Chi you now also regenerate 1 HP per INI.",
    		"STRFactor": 2,
    		"spells": [
    			{
    				"title": "Meditate",
    				"replace": true,
    				"description": "Regenerate 1 Chi and 1 HP per INI while you are meditating. You cannot do anything else. Movement and fighting will break meditation."
    			}
    		]
    	}
    ],

    "spells": [
	    {
	    	"level": 0,
	    	"title": "Meditate",
	    	"description": "Regenerate 1 Chi per INI while you are meditating. You cannot do anything else. Movement and fighting will break meditation."
	    },
		{
		    "level": 0,
		    "title": "Spirit Sprint",
		    "description": "As long as there is a surface you can run on/against it, this can be water, tree tops, walls or the heads of people. While spirit sprinting your attacks cost 3 Chi and you weigh next to nothing making you vulnerableto elemental attacks especially wind attacks, you take 50% more dmg from elemental attacks. Spirit Sprint costs 3 Chi per 30 INI. You do not regenerate Chi whilst sprinting."
		},
		{
		    "level": 0,
		    "title": "Astral Projection",
		    "description": "While meditating you can Astral Project your spirit. While astral projecting you can ignore walls and other physical obstacles, even most low level wards. You are visible to other monksor magic users who have their magic sight enabled. To other people you can manifest in theirdreams."
		},
		{
		    "level": 0,
		    "title": "Float like a butterfly",
		    "description": "For 3 Chi you get a +lvl to your defensive skills and resistance checks for 30 INI."
		},
		{
		    "level": 0,
		    "title": "Sting like a bee",
		    "description": "While 'Float like a butterfly' is active your crit chance is doubled. For each extra chi point you spend on an attack you gain 10% crit chance."
		},
		{
		    "level": 0,
		    "title": "Ignore Armor",
		    "description": "For each chi point reduce the target's armor by 33%."
		},
		{
		    "level": 0,
		    "title": "Lightning Reflexes",
		    "description": "For 3 chi you gain 'Lightning Reflexes' for 50 INI. While not wearing any armor your armor is 50%. You cannot benefit from things like 'Stone Skin'; Priest's 'Aura' which increases magical resistance does work."
		},
		{
		    "level": 0,
		    "title": "Earth, Wind and Fire",
		    "description": "For 1 chi your punch counts as either Earth, Wind or Fire. Transforms your normal punch into a magical attack."
		},
		{
		    "level": 0,
		    "title": "Water Punch",
		    "description": "Deliver a healing punch, healing for you punch dmg, costs 3 chi."
		},
		{
		    "level": 0,
		    "title": "Sucker Punch",
		    "description": "For 3 chi you gain 50% chance to stun a target pushing their INI with +10."
		}
    ]
}