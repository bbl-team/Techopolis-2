// priority: 3

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

	//Jumbo Furnace

	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "forge:nbt", item: "minecraft:cobblestone", count: 1}], result:{item: "minecraft:stone"},experience: 0.1}).id('minecraft:stone')
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "forge:nbt", item: "minecraft:stone", count: 1}], result:{item: "minecraft:smooth_stone"},experience: 0.1}).id('minecraft:smooth_stone')

	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "forge:nbt", item: "techopolis:grout", count: 1}], result:{item: "techopolis:grout_dust", count:2},experience: 0.1}).id('techopolis:grout_dust')

	//Jumbo Furnace Technium

	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[
		{type: "forge:nbt", item: "minecraft:smooth_stone", count: 32},
		{type: "forge:nbt", item: "minecraft:lapis_lazuli", count: 16},
		{type: "forge:nbt", item: "immersiveengineering:coal_coke", count: 16},
		{type: "forge:nbt", item: "minecraft:clay_ball", count: 16},
		{type: "forge:nbt", item: "immersiveengineering:treated_wood_horizontal", count: 16},
		{type: "forge:nbt", item: "alltheores:bronze_block", count: 2}
	], 
	result:{item: "techopolis:basic_technium_ingot"},experience: 0.5}).id('techopolis:basic_technium_ingot')



	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[
		{type: "forge:nbt", item: "alltheores:tin_ingot", count: 1},
		{type: "forge:nbt", item: "minecraft:copper_ingot", count: 3}
	], 
	result:{item: "alltheores:bronze_ingot"},experience: 0.5}).id('techopolis:bronze_ingot')

	//Immersive 

	event.shaped('8x immersiveengineering:conveyor_basic', ['L L','CCC','SSS'], {S:'minecraft:smooth_stone_slab', C: coal, L: lapis}).id('immersiveengineering:crafting/conveyor_basic')
	event.shaped('1x immersiveengineering:conveyor_dropper', ['C','W'], {C:conveyor, W: wooden_hopper}).id('immersiveengineering:crafting/conveyor_dropper')
	event.shaped('1x immersiveengineering:sorter', ['WCW','CHC', 'WCW'], {C:conveyor, W: wooden_hopper, H:chest}).id('immersiveengineering:crafting/sorter')
	event.shaped('3x immersiveengineering:conveyor_splitter', ['C C',' C '], {C:conveyor}).id('immersiveengineering:crafting/conveyor_splitter')
	event.shaped('3x immersiveengineering:conveyor_extract', ['CW'], {C:conveyor, W: wooden_hopper}).id('immersiveengineering:crafting/conveyor_extract')
	event.shaped('3x immersiveengineering:conveyor_vertical', ['C','C','C'], {C:conveyor}).id('immersiveengineering:crafting/conveyor_vertical')
	
	event.shaped('3x immersiveengineering:cokebrick', [' G ','GBG',' G '], {G:'techopolis:grout', B:'minecraft:bricks'}).id('immersiveengineering:crafting/cokebrick')
	event.shaped('9x immersiveengineering:blastbrick', ['AGA','GBG','AGA'], {A:'#forge:ingots/aluminum', G:'minecraft:brick', B:'immersiveengineering:cokebrick'}).id('immersiveengineering:crafting/blastbrick')


	event.shaped('8x immersiveengineering:treated_wood_horizontal', ['PPP','PBP','PPP'], {P: planks, B: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"immersiveengineering:creosote"}}').strongNBT()}).id('techopolis:crafting/treated_wood_horizontal')

	// Misc Crafting

	event.shaped('1x techopolis:grout', ['SGS','GCG','SGS'], {G: gravel, S: sand, C:'minecraft:clay'}).id('techopolis:grout')
	event.shaped('1x minecraft:clay', ['GG','GG'], {G:'techopolis:grout_dust'}).id('techopolis:clay_from_grout')
	event.shaped('1x minecraft:gravel', ['G G','   ','G G'], {G:'techopolis:grout_dust'}).id('techopolis:gravel_from_grout')
	event.shaped('1x minecraft:sand', [' G ','G G',' G '], {G:'techopolis:grout_dust'}).id('techopolis:sand_from_grout')
	event.shaped('1x minecraft:clay_ball', ['G'], {G:'techopolis:grout_dust'}).id('techopolis:clay_ball_from_grout')

	//Replace 

	event.replaceInput({id: 'craftingautomat:autocrafter'}, 'minecraft:dropper', 'minecraft:crafting_table')
	event.replaceInput({id: 'immersiveengineering:crafting/hammer'}, 'minecraft:iron_ingot', 'alltheores:bronze_ingot')

	//Reaserch Pappers

	event.shaped('techopolis:reaserch_pappers_copper_and_tin', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_pappers', C:'#forge:storage_blocks/coal', L:'#forge:storage_blocks/lapis'}).id('techopolis:rp_copper_and_tin')
	event.shaped('techopolis:reaserch_pappers_iron_and_aluminum', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_pappers', C:'#forge:storage_blocks/bronze', L:basic_technium}).id('techopolis:rp_iron_and_alumium')
	event.shaped('techopolis:reaserch_pappers_redstone', ['CLC','LPL','CLC'], {P:'techopolis:blank_research_pappers', C:'#forge:storage_blocks/steel', L:basic_technium}).id('techopolis:rp_redstone')

	//Miners

	event.shaped('1x miners:miner_tier_2', ['SCS','LPL','SCS'], {S:'minecraft:smooth_stone', L:'#forge:ores/lapis', C:'#forge:ores/coal', P:'minecraft:stone_pickaxe'}).id('miners:miners/miner_tier_2')
	event.shaped('1x miners:miner_tier_4', ['SCS','LPL','SCS'], {S:'minecraft:smooth_stone', L:'#forge:storage_blocks/copper', C:'#forge:ores/coal', P:basic_technium}).id('miners:miners/miner_tier_4')

	//Recipe Remove

	event.remove({id:'opolisutilities:resource_generator/resource_generator'})
	event.remove({id:'opolisutilities:resource_generator_2'})
	event.remove({id:'alltheores:steel_dust_from_alloy_blending'})


})
