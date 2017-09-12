export default {

	"name": "monk",
	"title": "Monk",

	"APName": "Chi",
	"skillPoints": 3,

	"stats": {
		"STR": 8,
		"AGI": 14,
		"INU": 3,
		"PER": 4
	},

	"weapons": [
		{
			"title": "Fists",
			"numberOfDice": 1,
			"diceSides": 4,
			"constant": 1,
			"initiative": 8,
			"isActive": true
		}
	],

	"skills": ["Weapon Skill", "Religion"],
	"specials": [
		{
			"title": "Skilled Combat",
			"description": "Offensive and Defenseive actions cost no AP. Cannot benefit from other AP reducing things.",
			"AP Offense": -3,
			"AP Defense": -3
		},
		{
			"title": "Recovery",
			"description": "When you do nothing, are not in combat, are not the target of an attack and are meditating; you regenerate 10 AP per 10 INI."
		},
		{
			"level": 5,
			"title": "Charged",
			"description": ""
		}
	],
	"spells": [
		{
			"level": 1,
			"type": "level",
			"title": "Meditate",
			"description": "Regenerate 1 Chi per INI while you are meditating. You cannot do anything else. Movement and fighting will break meditation."
		},
		{
			"level": 1,
			"type": "level",
			"title": "Spirit Sprint",
			"description": "As long as there is a surface you can run on/against it, this can be water, tree tops, walls or the heads of people. While spirit sprinting your attacks cost 3 Chi and you weigh next to nothing making you vulnerableto elemental attacks especially wind attacks, you take 50% more dmg from elemental attacks. Spirit Sprint costs 3 Chi per 30 INI. You do not regenerate Chi whilst sprinting."
		},
		{
			"level": 1,
			"type": "level",
			"title": "Astral Projection",
			"description": "While meditating you can Astral Project your spirit. While astral projecting you can ignore walls and other physical obstacles, even most low level wards. You are visible to other monks or magic users who have their magic sight enabled. To other people with minor magical abilities you can manifest in their dreams."
		},
		{
			"level": 1,
			"type": "level",
			"title": "Float like a butterfly",
			"description": "For 3 Chi you get a (+<%= lvl %>) (+level) to your defensive skills and resistance checks for 30 INI."
		},
		{
			"level": 1,
			"type": "level",
			"title": "Sting like a bee",
			"description": "For each extra chi point you spend on an attack you gain 10% crit chance."
		},
		{
			"level": 1,
			"type": "level",
			"title": "Ignore Armor",
			"description": "For each chi point reduce the target's armor by 33%."
		},
		{
			"level": 1,
			"type": "level",
			"title": "Lightning Reflexes",
			"description": "For 3 chi you gain 'Lightning Reflexes' for 50 INI. While not wearing any armor your armor is 50%. You cannot benefit from things like 'Stone Skin'; Priest's 'Aura' which increases magical resistance does work."
		},
		{
			"level": 1,
			"type": "level",
			"title": "Earth, Wind and Fire",
			"description": "For 1 chi your punch counts as either Earth, Wind or Fire. Transforms your normal punch into a magical attack."
		},
		{
			"level": 1,
			"type": "level",
			"title": "Water Punch",
			"description": "Deliver a healing punch, healing for you punch dmg, costs 3 chi."
		},
		{
			"level": 1,
			"type": "level",
			"title": "Sucker Punch",
			"description": "For 3 chi you gain 50% chance to stun a target pushing their INI with +10."
		},
		{
			"level": 1,
			"type": "choice",
			"choices": [
				{
					"title": "Way of Water",
					"description": "Healing costs 1 less Chi and you get a +20% Extra Attack.",
					"Extra Attack": 1
				},
				{
					"title": "Way of the Iron Fist",
					"description": "+5 Weapon Skill and a +1 DMG. Your attacks with fists do 1d6 instead of 1d4.",
					"Weapon Skill": 5,
					"DMG adjstm": 1
				},
				{
					"title": "Way of Stone",
					"description": "Increase your Defense permanently by +5, Armor +10% and Aura +10%.",
					"Defense": 5,
					"Toughness": 4,
					"Aura": 2
				}
			]
		}
	]
}