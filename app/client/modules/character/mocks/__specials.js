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
                "description": "Teleport"
            },
            {
                "title": "Stone Skin",
                "type": "ranked",
                "rank": 0,
                "description": "Increase Armor by <%= 3 * rank %>% for 60 INI."
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
        "description": "Increase armor by 10% and increase resistances by 1.",
        "Toughness": 4
    }
]