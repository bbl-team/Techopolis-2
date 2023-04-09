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

	//Black Iron Frame

	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "AAAAAAAAA",
		  "AABBBBBAA",
		  "AB     BA",
		  "AB     BA",
		  "AB  C  BA",
		  "AB     BA",
		  "AB     BA",
		  "AABBBBBAA",
		  "AAAAAAAAA"
		],
		"key": {
		  "A": {
			"item": "extendedcrafting:black_iron_ingot"
		  },
		  "B": {
			"item": "minecraft:tinted_glass"
		  },
		  "C": {
			"item": "techopolis:ultimate_technium_ingot"
		  }
		},
		"result": {
		  "item": "extendedcrafting:frame"
		}
	}).id('extendedcrafting:frame')


	//Crafting Core

	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "AAAAAAAAA",
		  " ABBBBBA ",
		  "AAAAAAAAA",
		  " ABBBBBA ",
		  "AAAACAAAA",
		  " ABBBBBA ",
		  "AAAAAAAAA",
		  " ABBBBBA ",
		  "AAAAAAAAA"
		],
		"key": {
		  "A": {
			"item": "extendedcrafting:black_iron_ingot"
		  },
		  "B": {
			"item": "mekanism:enriched_diamond"
		  },
		  "C": {
			"item": "extendedcrafting:frame"
		  }
		},
		"result": {
		  "item": "extendedcrafting:crafting_core"
		}
	}).id('extendedcrafting:crafting_core')

	//Pedestal

	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  " AAAAAAA ",
		  " AAAAAAA ",
		  "   AAA   ",
		  "   AAA   ",
		  "   AAA   ",
		  "   AAA   ",
		  "   AAA   ",
		  "AAAABAAAA",
		  "AAAAAAAAA"
		],
		"key": {
		  "A": {
			"item": "extendedcrafting:black_iron_ingot"
		  },
		  "B": {
			"item": "extendedcrafting:frame"
		  }
		},
		"result": {
		  "item": "extendedcrafting:pedestal"
		}
	}).id('extendedcrafting:pedestal')

	//Compressor

	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "AAAAAAAAA",
		  "AAAAAAAAA",
		  "AAAAAAAAA",
		  "AABBBBBAA",
		  "AABBBBBAA",
		  "AABBCBBAA",
		  "AABBBBBAA",
		  "AABBBBBAA",
		  "AAAAAAAAA"
		],
		"key": {
		  "A": {
			"item": "extendedcrafting:black_iron_ingot"
		  },
		  "B": {
			"item": "mekanism:enriched_diamond"
		  },
		  "C": {
			"item": "extendedcrafting:frame"
		  }
		},
		"result": {
		  "item": "extendedcrafting:compressor"
		}
	}).id('extendedcrafting:compressor')
	
	//Hellish Technium

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
			"item": "minecraft:netherite_block"
		  },
		  "B": {
			"item": "extendedcrafting:black_iron_ingot"
		  },
		  "C": {
			"item": "mekanism:ingot_refined_glowstone"
		  },
		  "D": {
			"item": "minecraft:soul_sand"
		  },
		  "E": {
			"type": "forge:nbt",
			"item": "extendedcrafting:singularity",
			"count": 1,
			"nbt": "{Id:\"extendedcrafting:technium\"}"
		  }
		},
		"result": {"item": "techopolis:hellish_technium_ingot"
		}
	}).id('techopolis:hellish_technium_ingot')

	//Voided Technium

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
			"item": "beyond_earth:desh_block"
		  },
		  "B": {
			"item": "beyond_earth:calorite_block"
		  },
		  "C": {
			"item": "beyond_earth:ostrum_block"
		  },
		  "D": {
			"item": "minecraft:nether_star"
		  },
		  "E": {
			"item": "techopolis:hellish_technium_ingot"
		  }
		},
		"result": {
		  "item": "techopolis:voided_technium_ingot"
		}
	}).id('techopolis:voided_technium_ingot')

	//Bone

	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "         ",
		  "         ",
		  "AA     AA",
		  "AAAAAAAAA",
		  "AAAAAAAAA",
		  "AAAAAAAAA",
		  "AA     AA",
		  "         ",
		  "         "
		],
		"key": {
		  "A": {
			"item": "essence:basic_mob_essence"
		  }
		},
		"result": {
		  "item": "minecraft:bone"
		}
	}).id('techopolis:bone')

	//Nether Star

	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "    A    ",
		  "   AAA   ",
		  "   AAA   ",
		  " AAAAAAA ",
		  "AAAAAAAAA",
		  " AAAAAAA ",
		  "   AAA   ",
		  "   AAA   ",
		  "    A    "
		],
		"key": {
		  "A": {
			"item": "essence:elite_mob_essence"
		  }
		},
		"result": {
		  "item": "minecraft:nether_star"
		}
	}).id('techopolis:nether_star')

	//Final Technium

	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "AAABBBAAA",
		  "ABBCCCBBA",
		  "ABDDEDDBA",
		  "BCDEFEDCB",
		  "BCEFFFECB",
		  "BCDEFEDCB",
		  "ABDDEDDBA",
		  "ABBCCCBBA",
		  "AAABBBAAA"
		],
		"key": {
		  "A": {
			"item": "techopolis:basic_technium_ingot"
		  },
		  "B": {
			"item": "techopolis:advanced_technium_ingot"
		  },
		  "C": {
			"item": "techopolis:elite_technium_ingot"
		  },
		  "D": {
			"item": "techopolis:ultimate_technium_ingot"
		  },
		  "E": {
			"item": "techopolis:hellish_technium_ingot"
		  },
		  "F": {
			"item": "techopolis:voided_technium_ingot"
		  }
		},
		"result": {
		  "item": "techopolis:final_technium_ingot"
		}
	}).id('techopolis:final_technium_ingot')




	
})