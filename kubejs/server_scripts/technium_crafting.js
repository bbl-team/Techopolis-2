// priority: 3

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

	//Basic Technium

	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "ABCBA",
		  "BDEDB",
		  "CEFEC",
		  "BDEDB",
		  "ABCBA"
		],
		"key": {
		  "A": {
			"item": "minecraft:smooth_stone"
		  },
		  "B": {
			"item": "alltheores:bronze_ingot"
		  },
		  "C": {
			"item": "minecraft:clay"
		  },
		  "D": {
			"item": "immersiveengineering:coal_coke"
		  },
		  "E": {
			"item": "immersiveengineering:treated_wood_horizontal"
		  },
		  "F": {
			"item": "minecraft:lapis_lazuli"
		  }
		},
		"result": {
		  "item": basic_technium
		}
	}).id('techopolis:basic_technium_ingot')

	//Elite Technium

	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "ABABA",
		  "BCDCB",
		  "ADEDA",
		  "BCDCB",
		  "ABABA"
		],
		"key": {
		  "A": {
			"item": "immersiveengineering:sheetmetal_aluminum"
		  },
		  "B": {
			"item": "alltheores:invar_ingot"
		  },
		  "C": {
			"item": "alltheores:steel_gear"
		  },
		  "D": {
			"item": "techopolis:lava_bottle"
		  },
		  "E": {
			"item": "techopolis:basic_technium_ingot"
		  }
		},
		"result": {
		  "item": "techopolis:advanced_technium_ingot"
		}
	  }).id('techopolis:advanced_technium_ingot')

	//Elite Technium

	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "ABABA",
		  "BCDCB",
		  "ADEDA",
		  "BCDCB",
		  "ABABA"
		],
		"key": {
		  "A": {
			"item": "immersiveengineering:sheetmetal_lead"
		  },
		  "B": {
			"item": "alltheores:signalum_ingot"
		  },
		  "C": {
			"item": "alltheores:electrum_gear"
		  },
		  "D": {
			"item": "minecraft:amethyst_shard"
		  },
		  "E": {
			"item": "techopolis:advanced_technium_ingot"
		  }
		},
		"result": {
		  "item": "techopolis:elite_technium_ingot"
		}
	}).id('techopolis:elite_technium_ingot')
	  
	//Ultimate Technium

	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "ABABA",
		  "BCDCB",
		  "ADEDA",
		  "BCDCB",
		  "ABABA"
		],
		"key": {
		  "A": {
			"item": "immersiveengineering:sheetmetal_uranium"
		  },
		  "B": {
			"item": "techopolis:infused_crystalline"
		  },
		  "C": {
			"item": "powah:dielectric_paste"
		  },
		  "D": {
			"item": "mekanism:alloy_atomic"
		  },
		  "E": {
			"item": "techopolis:elite_technium_ingot"
		  }
		},
		"result": {
		  "item": "techopolis:ultimate_technium_ingot"
		}
	}).id('techopolis:ultimate_technium_ingot')

})