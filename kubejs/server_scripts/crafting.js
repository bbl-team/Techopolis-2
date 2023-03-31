// priority: 3

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

	event.shaped('1x minecraft:feather', ['  S',' SS','SS '], {S:string}).id('techopolis:feather')
	event.custom({"type": "thermal:pulverizer","ingredient": {"item": "thermal:rf_coil"},"result": [{"item": "minecraft:blaze_powder","count": 1}],"energy_mod": 0.5}).id('techopolis:thermal/machines/pulverizer/blaze_powder')

	event.shaped('9x minecraft:furnace', ['CCC','C C','CCC'], {C:'compressium:cobblestone_1'}).id('techopolis:furnace_9')

	//LaserIO

	event.shaped('2x laserio:logic_chip_raw', ['RGR','TST','RGR'], {R:redstone, G:gold_nugget, S:elite_technium, T:'thermal:signalum_ingot'}).id('laserio:logic_chip_raw')

	event.shaped('1x laserio:card_energy', ['RBR','TST','GGG'], {R:redstone, B:redstone_block, T:'thermal:signalum_ingot', G:gold_nugget, S:'laserio:logic_chip'}).id('laserio:card_energy')
	event.shaped('1x laserio:card_fluid', ['RBR','TST','GGG'], {R:redstone, B:bucket, T:'thermal:signalum_ingot', G:gold_nugget, S:'laserio:logic_chip'}).id('laserio:card_fluid')
	event.shaped('1x laserio:card_item', ['RBR','TST','GGG'], {R:redstone, B:chest, T:'thermal:signalum_ingot', G:gold_nugget, S:'laserio:logic_chip'}).id('laserio:card_item')
	event.shaped('1x laserio:card_redstone', ['RBR','TST','GGG'], {R:redstone_block, B:redstone_block, T:'thermal:signalum_ingot', G:gold_nugget, S:'laserio:logic_chip'}).id('laserio:card_redstone')


	//Building Gadgets

	event.shaped('1x buildinggadgets:gadget_building', ['IRI','TRT','ILI'], {I:iron_ingot, T:advanced_technium, R:redstone, L:lapis}).id('buildinggadgets:gadget_building')
	event.shaped('1x buildinggadgets:gadget_exchanging', ['IRI','TLT','ILI'], {I:iron_ingot, T:advanced_technium, R:redstone, L:lapis}).id('buildinggadgets:gadget_exchanging')
	event.shaped('1x buildinggadgets:gadget_copy_paste', ['IRI','TRT','ILI'], {I:iron_ingot, T:'techopolis:blank_research_papers', R:advanced_technium, L:lapis}).id('buildinggadgets:gadget_copy_paste')
	event.shaped('1x buildinggadgets:gadget_destruction', ['IRI','TRT','ILI'], {I:iron_ingot, T:'#forge:storage_blocks/redstone', R:advanced_technium, L:lapis}).id('buildinggadgets:gadget_destruction')
	event.shaped('1x buildinggadgets:template_manager', ['TRT','TLT','TLT'], {T:advanced_technium, R:redstone, L:lapis}).id('buildinggadgets:template_manager')





	//Smelting

	event.smelting('minecraft:charcoal', '#minecraft:logs').id('techopolis:charcoal').xp(0.1)  
	event.smelting('techopolis:prospectors_pickaxe', 'minecraft:stone_pickaxe').id('techopolis:prospectors_pickaxe').xp(0.1)  
	event.smelting('ae2:certus_quartz_crystal', 'minecraft:quartz').id('techopolis:certus_quartz').xp(0.1)  

	//Drying table

	event.custom({type: "opolisutilities:drying_table",ingredients: [{item: "opolisutilities:log_sheet"}],duration: 200, "output": {item: "minecraft:leather"}}).id('techopolis:leather_in_drying_table')
	//Jumbo Furnace

	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "forge:nbt", item: "minecraft:cobblestone", count: 1}], result:{item: "minecraft:stone"},experience: 0.1}).id('minecraft:stone')
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "forge:nbt", item: "minecraft:stone", count: 1}], result:{item: "minecraft:smooth_stone"},experience: 0.1}).id('minecraft:smooth_stone')

	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "forge:nbt", item: "techopolis:grout", count: 1}], result:{item: "techopolis:grout_dust", count:2},experience: 0.1}).id('techopolis:grout_dust')

	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{type: "forge:nbt", item: "alltheores:tin_ingot", count: 1},{type: "forge:nbt", item: "minecraft:copper_ingot", count: 3}],result:{item: "alltheores:bronze_ingot", count:4},experience: 0.5}).id('tecbronzehopolis:_ingot')
	
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "minecraft:sand", count: 1}], result:{item: "minecraft:glass"},experience: 0.1}).id('minecraft:glass')

	//Immersive 

	event.shaped('1x immersiveengineering:hammer', [' B ',' SB','S  '], {S:stick, B: '#forge:ingots/bronze'}).id('immersiveengineering:crafting/hammer')
	event.shaped('24x immersiveengineering:conveyor_basic', ['L L','CCC','SSS'], {S:'minecraft:smooth_stone_slab', C: coal, L: lapis}).id('immersiveengineering:crafting/conveyor_basic')
	event.shaped('1x immersiveengineering:conveyor_dropper', ['C','W'], {C:conveyor, W: wooden_hopper}).id('immersiveengineering:crafting/conveyor_dropper')
	event.shaped('1x immersiveengineering:sorter', ['WCW','CHC', 'WCW'], {C:conveyor, W: wooden_hopper, H:chest}).id('immersiveengineering:crafting/sorter')
	event.shaped('3x immersiveengineering:conveyor_splitter', ['C C',' C '], {C:conveyor}).id('immersiveengineering:crafting/conveyor_splitter')
	event.shaped('3x immersiveengineering:conveyor_extract', ['CW'], {C:conveyor, W: wooden_hopper}).id('immersiveengineering:crafting/conveyor_extract')
	event.shaped('3x immersiveengineering:conveyor_vertical', ['C','C','C'], {C:conveyor}).id('immersiveengineering:crafting/conveyor_vertical')

	event.shaped('1x immersiveengineering:jerrycan', ['CC','CC'], {C:'ceramicbucket:ceramic_bucket'}).id('immersiveengineering:crafting/jerrycan')
	
	event.shaped('3x immersiveengineering:cokebrick', [' G ','GBG',' G '], {G:'techopolis:grout_dust', B:'minecraft:bricks'}).id('immersiveengineering:crafting/cokebrick')
	event.shaped('9x immersiveengineering:blastbrick', ['AGA','GBG','AGA'], {A:'#forge:ingots/aluminum', G:'minecraft:brick', B:'immersiveengineering:cokebrick'}).id('immersiveengineering:crafting/blastbrick')

	event.shaped('8x immersiveengineering:treated_wood_horizontal', ['PPP','PBP','PPP'], {P: planks, B: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"immersiveengineering:creosote"}}').strongNBT()}).id('techopolis:crafting/treated_wood_horizontal')

	event.custom({"type":"immersiveengineering:bottling_machine","fluid":{"amount":200,"tag":"minecraft:lava"},"input":{"item":"minecraft:glass_bottle"},"results":[{"item":"techopolis:lava_bottle"}]})
	event.custom({"type":"immersiveengineering:bottling_machine","fluid":{"amount":125,"tag":"forge:creosote"},"input":{"tag":"minecraft:planks"},"results":[{"item":"immersiveengineering:treated_wood_horizontal"}]})

	event.shaped('4x immersiveengineering:wirecoil_copper', ['CCC','CTC','CCC'], {C: copper_ingot, T: stick}).id('techopolis:additional_copper_wire_recipe')
	event.shaped('1x immersiveengineering:mold_plate', ['SSS','S S','SSS'], {S: steel_ingot}).id('techopolis:mold_plate')

	event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'), [' E ','BBB','PPP'], {B: '#forge:dyes/blue', P:'minecraft:paper', E:'immersiveengineering:graphite_electrode'}).id('techopolis:electrode_blueprint')



	//IE Metal Press

	event.custom({"type":"immersiveengineering:metal_press","energy":2400,"input":{"tag":"forge:ingots/signalum"},"mold":"immersiveengineering:mold_plate","result":{"tag":"forge:plates/signalum"}})
	event.custom({"type":"immersiveengineering:metal_press","conditions":[{"type":"forge:not","value":{"type":"forge:tag_empty","tag":"forge:gears/signalum"}}],"energy":2400,"input":{"base_ingredient":{"tag":"forge:ingots/signalum"},"count":4},"mold":"immersiveengineering:mold_gear","result":{"tag":"forge:gears/signalum"}})
	event.custom({"type":"immersiveengineering:metal_press","conditions":[{"type":"forge:not","value":{"type":"forge:tag_empty","tag":"forge:rods/signalum"}}],"energy":2400,"input":{"tag":"forge:ingots/signalum"},"mold":"immersiveengineering:mold_rod","result":{"base_ingredient":{"tag":"forge:rods/signalum"},"count":2}})

	// Misc Crafting

	event.shaped('1x techopolis:grout', ['SGS','GCG','SGS'], {G: gravel, S: sand, C:'minecraft:clay'}).id('techopolis:grout_crafting')
	event.shaped('1x minecraft:clay', ['GG','GG'], {G:'techopolis:grout_dust'}).id('techopolis:clay_from_grout')
	event.shaped('1x minecraft:gravel', ['G G','   ','G G'], {G:'techopolis:grout_dust'}).id('techopolis:gravel_from_grout')
	event.shaped('1x minecraft:sand', [' G ','G G',' G '], {G:'techopolis:grout_dust'}).id('techopolis:sand_from_grout')
	event.shaped('1x minecraft:clay_ball', ['G'], {G:'techopolis:grout_dust'}).id('techopolis:clay_ball_from_grout')
	event.shaped('1x minecraft:nether_star', ['WWW', 'SIS', ' S '], {W:'minecraft:wither_skeleton_skull', S:'minecraft:soul_sand', I:hellish_technium}).id('techopolis:nether_star')

	event.shaped('3x opolisutilities:soaked_paper', [' L ', 'LBL', ' L '], {B:Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').strongNBT(), L:'opolisutilities:log_sheet'}).id('techopolis:nether_star')

	event.shaped('1x minecraft:netherrack', [' L ','LSL',' L '], {L:'techopolis:lava_bottle', S:'#techopolis:colored_stone'}).id('techopolis:netherrack').stage('nether')
	event.shaped('1x minecraft:soul_sand', [' L ','LSL',' L '], {L:'techopolis:lava_bottle', S:'#minecraft:sand'}).id('techopolis:sand').stage('nether')
	event.shaped('1x minecraft:basalt', [' L ','LSL',' L '], {L:'techopolis:lava_bottle', S:'minecraft:smooth_stone'}).id('techopolis:basalt').stage('nether')
	event.shaped('1x minecraft:glowstone', [' L ','LSL',' L '], {L:'techopolis:lava_bottle', S:'minecraft:redstone_block'}).id('techopolis:glowstone').stage('nether')

	event.shaped('6x minecraft:netherite_scrap', ['BBB','SSS','BBB'], {B:'minecraft:nether_brick', S:'minecraft:soul_sand'}).id('techopolis:netherite_scrap').stage('debris')
	event.shaped('1x minecraft:ancient_debris', [' S ','SBS',' S '], {S:'minecraft:netherite_scrap', B:'minecraft:basalt'}).id('techopolis:ancient_debris').stage('debris')

	//Extended Crafting

	event.shaped('1x extendedcrafting:basic_table', ['CCC','TCT','CCC'], {C: 'immersiveengineering:coal_coke', T: 'minecraft:crafting_table'}).id('extendedcrafting:basic_table')
	event.shaped('1x extendedcrafting:basic_auto_table', [' H ','HBH',' H '], {H: wooden_hopper, B: 'extendedcrafting:basic_table'}).id('extendedcrafting:basic_auto_table')

	event.shaped('1x extendedcrafting:advanced_table', ['CCC','TCT','CCC'], {C: 'immersiveengineering:coal_coke', T: 'extendedcrafting:basic_table'}).id('extendedcrafting:advanced_table')
	event.shaped('1x extendedcrafting:advanced_auto_table', [' H ','HBH',' H '], {H: wooden_hopper, B: 'extendedcrafting:advanced_table'}).id('extendedcrafting:advanced_auto_table')

	event.shaped('1x extendedcrafting:elite_table', ['CCC','TCT','CCC'], {C: 'techopolis:ultimate_technium_ingot', T: 'extendedcrafting:advanced_table'}).id('extendedcrafting:elite_table')
	event.shaped('1x extendedcrafting:elite_auto_table', [' H ','HBH',' H '], {H: hopper, B: 'extendedcrafting:elite_table'}).id('extendedcrafting:elite_auto_table')
	event.shaped('1x extendedcrafting:advanced_auto_table', [' H ','HBH',' H '], {H: wooden_hopper, B: 'extendedcrafting:advanced_table'}).id('extendedcrafting:advanced_auto_table')

	event.shaped('1x extendedcrafting:ultimate_table', ['CCC','TCT','CCC'], {C: 'techopolis:ultimate_technium_ingot', T: 'extendedcrafting:elite_table'}).id('extendedcrafting:ultimate_table')
	event.shaped('1x extendedcrafting:ultimate_auto_table', [' H ','HBH',' H '], {H: hopper, B: 'extendedcrafting:ultimate_table'}).id('extendedcrafting:ultimate_auto_table')

	event.shaped('4x extendedcrafting:black_iron_ingot', ['NIN','INI','NIN'], {N: netherite_ingot, I: iron_ingot}).id('extendedcrafting:black_iron_ingot')
	
	

	
	//Replace 

	event.replaceInput({id: 'craftingautomat:autocrafter'}, 'minecraft:dropper', 'minecraft:crafting_table')
	event.replaceInput({id: 'littlelogistics:transmitter_component'}, 'minecraft:ender_pearl', 'minecraft:redstone')
	event.replaceInput({id: 'littlelogistics:rapid_hopper'}, '#forge:ingots/gold', basic_technium)
	event.replaceInput({mod: 'storagenetwork'}, '#forge:ingots/aluminum', '#forge:ingots/aluminum')
	event.replaceInput({mod: 'storagenetwork'}, '#forge:gems/diamond', advanced_technium)
	event.replaceInput({mod: 'storagenetwork'}, 'minecraft:quartz', '#forge:gears/steel')
	event.replaceInput({mod: 'storagenetwork'}, 'minecraft:blaze_powder', '#forge:dusts/aluminum')
	event.replaceInput({mod: 'tempad'}, 'minecraft:quartz', elite_technium)
	event.replaceInput({mod: 'tempad'}, 'minecraft:glowstone', 'minecraft:clock')
	event.replaceInput({mod: 'elevatorid'}, 'minecraft:ender_pearl', basic_technium)

	event.replaceInput({id: 'thermal:machine_chiller'}, 'minecraft:packed_ice', advanced_technium)
	event.replaceInput({id: 'immersiveengineering:crafting/dynamo'}, 'immersiveengineering:component_iron', '#forge:ingots/aluminum')
	event.replaceInput({id: 'laserio:filter_count'}, 'minecraft:observer', 'minecraft:dropper')


	
	//Thermal

	event.replaceInput({id: 'thermal:machine_frame'}, 'minecraft:iron_ingot', 'alltheores:silver_ingot')
	event.replaceInput({id: 'thermal:machine_frame'}, '#forge:gears/tin', '#forge:gears/electrum')
	event.replaceInput({id: 'thermal:machine_crucible'}, 'minecraft:nether_bricks', 'thermal:obsidian_glass')

	event.custom({"type": "thermal:smelter","ingredients": [{"tag": "minecraft:sand","count": 1}],"result": [{"item": "minecraft:glass","count": 1}],"energy": 800}).id('techopolis:machines/smelter/glass')

	event.custom({"type": "thermal:smelter","ingredients": [{"tag": "forge:obsidian","count": 1},{"value": [{"tag": "forge:dusts/steel"}],"count": 1},{"tag": "forge:sand",
			"count": 1}],"result": [{"item": "thermal:obsidian_glass","count": 2}],"energy": 4800}).id('thermal:machines/smelter/smelter_glass_obsidian')

	event.custom({"type": "thermal:smelter","ingredients": [{"item": "techopolis:crystalline_dust","count": 1},{"value": [{"item": "techopolis:crystal_base"}],"count": 1},{"item": "minecraft:redstone",
			"count": 1}],"result": [{"item": "alltheores:ruby_dust","count": 1}],"energy": 2400}).id('techopolis:thermal_ruby_dust')

	event.custom({"type": "thermal:smelter","ingredients": [{"item": "techopolis:crystalline_dust","count": 1},{"value": [{"item": "techopolis:crystal_base"}],"count": 1},{"item": "thermal:lapis_dust",
			"count": 1}],"result": [{"item": "alltheores:sapphire_dust","count": 1}],"energy": 2400}).id('techopolis:thermal_sapphire_dust')

	event.custom({"type": "thermal:smelter","ingredients": [{"item": "techopolis:crystalline_dust","count": 1},{"value": [{"item": "techopolis:crystal_base"}],"count": 1},{"item": "techopolis:prismarine_dust",
			"count": 1}],"result": [{"item": "alltheores:peridot_dust","count": 1}],"energy": 2400}).id('techopolis:thermal_peridot_dust')

	event.custom({"type": "thermal:smelter","ingredients": [{"item": "techopolis:crystalline_dust","count": 1},{"value": [{"item": "minecraft:diamond"}],"count": 1},{"item": "minecraft:emerald",
			"count": 1}],"result": [{"item": "techopolis:infused_crystalline","count": 1}],"energy": 5000}).id('techopolis:infused_crystalline')

	event.custom({"type": "thermal:smelter","ingredients": [{"item": "alltheores:ruby","count": 1},{"value": [{"item": "alltheores:sapphire"}],"count": 1},{"item": "alltheores:peridot",
			"count": 1}],"result": [{"item": "minecraft:amethyst_shard","count": 1}],"energy": 5000}).id('techopolis:amethyst')

	event.custom({"type": "thermal:smelter","ingredients": [{"item": "alltheores:ruby","count": 1},{"value": [{"item": "alltheores:sapphire"}],"count": 1},{"item": "alltheores:peridot",
			"count": 1}],"result": [{"item": "minecraft:amethyst_shard","count": 1}],"energy": 5000}).id('techopolis:amethyst')

	event.custom({"type": "thermal:crystallizer","ingredients": [{"fluid": "techopolis:liquid_glass","amount": 250},{"item": "thermal:niter"}],"result": [{"item": "techopolis:crystal_base"}],"energy": 2500})
	event.custom({"type": "thermal:crystallizer","ingredients": [{"fluid": "techopolis:liquid_glass","amount": 250},{"item": "alltheores:ruby_dust"}],"result": [{"item": "alltheores:ruby"}],"energy": 2500})
	event.custom({"type": "thermal:crystallizer","ingredients": [{"fluid": "techopolis:liquid_glass","amount": 250},{"item": "alltheores:sapphire_dust"}],"result": [{"item": "alltheores:sapphire"}],"energy": 2500})
	event.custom({"type": "thermal:crystallizer","ingredients": [{"fluid": "techopolis:liquid_glass","amount": 250},{"item": "alltheores:peridot_dust"}],"result": [{"item": "alltheores:peridot"}],"energy": 2500})

	event.custom({"type": "thermal:crystallizer","ingredients": [{"fluid": "minecraft:water","amount": 250},{"item": "techopolis:crystal_base"}],"result": [{"item": "minecraft:prismarine_shard"}],"energy": 2500})

	event.custom({"type": "thermal:crucible","ingredient": {"tag": "forge:sand"},"result": [{"fluid": "techopolis:liquid_glass","amount": 500}],"energy": 2000})
	event.custom({"type": "thermal:crucible","ingredient": {"tag": "forge:glass"},"result": [{"fluid": "techopolis:liquid_glass","amount": 1000}],"energy": 2000})

	event.custom({"type": "thermal:crucible","ingredient": {"item": "techopolis:hellish_technium_ingot"},"result": [{"fluid": "beyond_earth:oil","amount": 6000}],"energy": 5000})


	event.custom({"type": "thermal:pulverizer","ingredient": {"item": "techopolis:crystalline"},"result": [{"item": "techopolis:crystalline_dust","count": 1}],"energy_mod": 0.5})
	event.custom({"type": "thermal:pulverizer","ingredient": {"item": "minecraft:prismarine_shard"},"result": [{"item": "techopolis:prismarine_dust","count": 1}],"energy_mod": 0.5})

	event.custom({"type": "thermal:pulverizer","ingredient": {"item": "techopolis:crystal_ore"},"result": [{"item": "techopolis:crystalline","count": 1}],"energy_mod": 0.5})

	//Mekanism

	event.replaceInput({id: 'mekanism:steel_casing'}, '#forge:ingots/osmium', elite_technium)
	event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":10,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"item":"techopolis:infused_crystalline"}},"output":{"item":"mekanism:alloy_infused"}}).id('mekanism:metallurgic_infusing/alloy/infused')
	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"item":"minecraft:polished_basalt"}},"output":{"item":"ae2:sky_stone_block"}}).id('techopolis:sky_stone')

	//Powah

	event.custom({"type": "powah:energizing","ingredients": [{"item": "alltheores:steel_ingot"},{"item": "minecraft:gold_ingot"}],"energy": 10000,"result": {"item": "powah:steel_energized","count": 2}}).id('powah:energizing/energized_steel')
	event.replaceInput({id: 'powah:crafting/energizing_rod_starter'}, 'minecraft:quartz', '#forge:ingots/steel')
	

	//Reseach Papers (ores + quest progression)

	event.shaped('techopolis:blank_research_papers', ['PPP','P P','PPP'], {P:'minecraft:paper'}).id('techopolis:research_papers')


	event.shaped('techopolis:research_papers_copper_and_tin', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/coal', L:'#forge:storage_blocks/lapis'}).id('techopolis:rp_copper_and_tin')
	event.shaped('techopolis:research_papers_iron_and_aluminum', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/bronze', L:basic_technium}).id('techopolis:rp_iron_and_alumium')	
	event.shaped('techopolis:research_papers_redstone', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/steel', L:basic_technium}).id('techopolis:rp_redstone')
	event.shaped('techopolis:research_papers_nickel', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/aluminum', L:basic_technium}).id('techopolis:rp_nickel')
	event.shaped('techopolis:research_papers_metal_press', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/redstone', L:basic_technium}).id('techopolis:rp_metal_press')
	event.shaped('techopolis:research_papers_silver_and_gold', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/constantan', L:advanced_technium}).id('techopolis:rp_silver_and_gold')
	event.shaped('techopolis:research_papers_lead', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:dusts/lead', L:advanced_technium}).id('techopolis:rp_lead')
	event.shaped('techopolis:research_papers_niter', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:gems/niter', L:advanced_technium}).id('techopolis:rp_niter')
	event.shaped('techopolis:research_papers_crystal', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'techopolis:crystal_base', L:advanced_technium}).id('techopolis:rp_crystal')
	event.shaped('techopolis:research_papers_diamond_and_emerald', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/ruby', L:advanced_technium}).id('techopolis:rp_diamond_and_emerald')
	event.shaped('techopolis:research_papers_osmium', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/emerald', L:elite_technium}).id('techopolis:rp_osmium')
	event.shaped('techopolis:research_papers_mekanism', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/osmium', L:elite_technium}).id('techopolis:rp_mekanism')
	event.shaped('techopolis:research_papers_powah', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/uranium', L:elite_technium}).id('techopolis:rp_powah')
	event.shaped('techopolis:research_papers_uranium', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'mekanism:alloy_atomic', L:elite_technium}).id('techopolis:rp_uranium')
	event.shaped('techopolis:research_papers_debris', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:netherrack', L:ultimate_technium}).id('techopolis:rp_debris')
	event.shaped('techopolis:research_papers_nether', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'techopolis:lava_bottle', L:ultimate_technium}).id('techopolis:rp_nether')
	
	
	event.shaped('techopolis:research_papers_waystones', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/redstone', L: '#forge:plates/iron'}).id('techopolis:rp_waystones')
	event.shaped('techopolis:research_papers_flux_networks', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:ender_pearl', L: elite_technium}).id('techopolis:rp_flux_networks')
	event.shaped('techopolis:research_papers_tempad', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'waystones:waystone', L: elite_technium}).id('techopolis:rp_tempad')
	event.shaped('techopolis:research_papers_building_gadgets', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'constructionwand:diamond_wand', L: advanced_technium}).id('techopolis:rp_building_gadgets')
	event.shaped('techopolis:research_papers_tiab', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:advanced_technium, L: advanced_technium}).id('techopolis:rp_tiab')
	event.shaped('techopolis:research_papers_trash_cans', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'compressium:cobblestone_2', L: basic_technium}).id('techopolis:rp_trash_cans')
	event.shaped('techopolis:research_papers_angel_ring', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/gold', L: elite_technium}).id('techopolis:rp_angel_ring')
	event.shaped('techopolis:research_papers_ender', ['LCL','CPC','LCL'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/gold', L: elite_technium}).id('techopolis:rp_ender')

	event.shaped('techopolis:research_papers_villager_trades', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/emerald', L: ultimate_technium}).id('techopolis:rp_villager_trades')
	event.shaped('techopolis:research_papers_laserio', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:elite_technium, L: '#forge:storage_blocks/quartz'}).id('techopolis:rp_laserio')
	event.shaped('techopolis:research_papers_xnet', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/quartz', L: elite_technium}).id('techopolis:rp_xnet')

	//Reseach Papers (mods)

	event.shaped('techopolis:research_papers_thermal', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/electrum', L:advanced_technium}).id('techopolis:rp_thermal')
	event.shaped('techopolis:research_papers_little_logistic', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/redstone', L:'minecraft:rail'}).id('techopolis:rp_little_logistics')
	event.shaped('techopolis:research_papers_storage_drawers', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:chest', L:'compressium:cobblestone_2'}).id('techopolis:rp_storage_drawers')
	event.shaped('techopolis:research_papers_compressium', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#minecraft:logs', L:'minecraft:smooth_stone'}).id('techopolis:rp_compressium')
	event.shaped('techopolis:research_papers_immersive_aircraft', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'immersiveengineering:coal_coke', L:'immersiveengineering:treated_wood_horizontal'}).id('techopolis:rp_immersive_aircraft')
	event.shaped('techopolis:research_papers_extended_crafting', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:netherite_ingot', L:ultimate_technium}).id('techopolis:rp_extended_crafting')
	event.shaped('techopolis:research_papers_construction_wand', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/coal', L:'#forge:ingots/bronze'}).id('techopolis:rp_construction_wands')
	event.shaped('techopolis:research_papers_framed_blocks', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/tin', L:'immersiveengineering:treated_wood_horizontal'}).id('techopolis:rp_framed_blocks')
	event.shaped('techopolis:research_papers_simple_storage', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/steel', L:advanced_technium}).id('techopolis:rp_simple_storage')
	event.shaped('techopolis:research_papers_elevators', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#minecraft:wool', L:advanced_technium}).id('techopolis:rp_elevators')
	event.shaped('techopolis:research_papers_ender_chests', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'minecraft:ender_pearl', L:ultimate_technium}).id('techopolis:rp_ender_chests')
	event.shaped('techopolis:research_papers_gem_ores', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'techopolis:crystal_ore', L:elite_technium}).id('techopolis:rp_gem_ores')
	
	event.shaped('techopolis:research_papers_ae2', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'#forge:storage_blocks/diamond', L:ultimate_technium}).id('techopolis:rp_ae2')
	event.shaped('techopolis:research_papers_rs', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:ultimate_technium, L:'#forge:storage_blocks/diamond'}).id('techopolis:rp_refined_storage')

	
	//Research Papers (misc)
	
	event.shaped('techopolis:research_papers_b_bucks_1', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'opolisutilities:b_bucks', L:basic_technium}).id('techopolis:rp_b_bucks_1')
	event.shaped('techopolis:research_papers_b_bucks_2', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'opolisutilities:b_bucks', L:advanced_technium}).id('techopolis:rp_b_bucks_2')
	event.shaped('techopolis:research_papers_b_bucks_3', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'opolisutilities:b_bucks', L:elite_technium}).id('techopolis:rp_b_bucks_3')
	event.shaped('techopolis:research_papers_b_bucks_4', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'opolisutilities:b_bucks', L:ultimate_technium}).id('techopolis:rp_b_bucks_4')
	event.shaped('techopolis:research_papers_b_bucks_5', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'opolisutilities:b_bucks', L:hellish_technium}).id('techopolis:rp_b_bucks_5')
	event.shaped('techopolis:research_papers_b_bucks_6', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_papers', C:'opolisutilities:b_bucks', L:voided_technium}).id('techopolis:rp_b_bucks_6')

	//Miners

	event.shaped('1x miners:tree_absorber', ['SCS','LPL','SCS'], {S:'minecraft:smooth_stone', L:'#minecraft:planks', C:'#minecraft:planks', P:'minecraft:stone_axe'}).id('miners:miners/tree_absorber')
	event.custom({type: "miners:miner_blocks",blockTag: "forge:ores/niter","minerTier": 6})
	event.custom({type: "miners:miner_blocks",blockTag: "forge:ores/ender","minerTier": 5})
	event.custom({type: "miners:miner_blocks",blockTag: "forge:ores/ruby","minerTier": 6})
	event.custom({type: "miners:miner_blocks",blockTag: "forge:ores/sapphire","minerTier": 6})
	event.custom({type: "miners:miner_blocks",blockTag: "forge:ores/peridot","minerTier": 6})

	event.custom({type: "miners:miner_blocks",blockTag: "forge:sandstone/colorless","minerTier": 4})
	event.custom({type: "miners:miner_blocks",blockTag: "forge:storage_blocks/clay","minerTier": 4})
	event.custom({type: "miners:miner_blocks",blockTag: "forge:gravel","minerTier": 4})

	//Beyond Earth

	event.replaceInput({id: 'beyond_earth:nasa_workbench'}, '#forge:ingots/steel', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:compressor'}, '#forge:ingots/steel', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:rocket_nose_cone'}, '#forge:ingots/steel', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:rocket_launch_pad'}, '#forge:ingots/steel', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:fuel_refinery'}, '#forge:ingots/steel', 'techopolis:hellish_technium_ingot')

	event.replaceInput({id: 'beyond_earth:space_helmet'}, '#forge:plates/iron', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:space_suit'}, '#forge:plates/iron', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:space_leggings'}, '#forge:plates/iron', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:space_boots'}, '#forge:plates/iron', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:oxygen_loader'}, '#forge:plates/iron', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'beyond_earth:oxygen_tank'}, '#forge:plates/iron', 'techopolis:hellish_technium_ingot')
	event.replaceInput({id: 'angelring:leadstone_angel_ring'}, '#forge:storage_blocks/cinnabar', 'minecraft:redstone_block')
	event.replaceInput({id: 'angelring:resonant_angel_ring'}, 'thermal:blizz_powder', 'minecraft:blaze_powder')
	event.replaceInput({id: 'angelring:angel_ring'}, 'minecraft:nether_star', elite_technium)
	event.replaceInput({id: 'angelring:energetic_angel_ring'}, 'minecraft:nether_star', elite_technium)
	event.replaceInput({id: 'angelring:leadstone_angel_ring'}, 'minecraft:nether_star', elite_technium)
	event.replaceInput({id: 'angelring:hardened_angel_ring'}, 'minecraft:nether_star', elite_technium)
	event.replaceInput({id: 'angelring:reinforced_angel_ring'}, 'minecraft:nether_star', elite_technium)
	event.replaceInput({id: 'angelring:resonant_angel_ring'}, 'minecraft:nether_star', elite_technium)
	event.replaceInput({id: 'angelring:diamond_ring'}, 'minecraft:elytra', '#forge:gears/diamond')
	event.replaceInput({id: 'angelring:diamond_ring'}, 'minecraft:ghast_tear', elite_technium)



	//Smelting that was removed

	//Recipe Remove

	event.remove({id:'caveopolis:coal_fragment'})
	event.remove({id:'caveopolis:charcoal_fragment'})
	event.remove({id:'opolisutilities:resource_generator/resource_generator'})
	event.remove({id:'opolisutilities:resource_generator_2'})
	event.remove({id:'alltheores:steel_dust_from_alloy_blending'})
	event.remove({id:'beyond_earth:iron_plate'})
	event.remove({id:'minecraft:netherite_ingot'})
	event.remove({id:'beyond_earth:desh_plate'})
	event.remove({input:'alltheores:iron_ore_hammer'})
	event.remove({input:'alltheores:copper_ore_hammer'})
	event.remove({input:'alltheores:bronze_ore_hammer'})
	event.remove({input:'alltheores:invar_ore_hammer'})
	event.remove({input:'alltheores:platinum_ore_hammer'})
	event.remove({input:'minecraft:fire_charge', output: '#forge:ingots'})
	event.remove({input:'minecraft:fire_charge', output: '#forge:gems'})
	event.remove({input:'minecraft:fire_charge', output: '#forge:dusts'})
	event.remove({input:'minecraft:fire_charge', output: '#thermal:glass/hardened'})
	event.remove({input:'#forge:nuggets/iron', output: '#forge:gears'})
	event.remove({id:'/thermal:machines/press//'})
	event.remove({type:'opolisutilities:resource_generator'})
	event.remove({type:'opolisutilities:resource_generator_2'})
	event.remove({type:'opolisutilities:rg2_blocks'})
	event.remove({type:'opolisutilities:rg2_speed_blocks'})
	event.remove({type:'thermal:rock_gen'})
	event.remove({id:'storagenetwork:inventory_remote'})
	event.remove({id:'storagenetwork:crafting_remote'})
	event.remove({id:'storagenetwork:picker_remote'})
	event.remove({id:'storagenetwork:collector_remote'})
	event.remove({id:'storagenetwork:builder_remote'})
	event.remove({id:'beyond_earth:steel_ingot_blasting'})



})
