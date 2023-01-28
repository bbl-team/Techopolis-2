// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

	//Jumbo Furnace

	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "forge:nbt", item: "minecraft:cobblestone", count: 1}], result:{item: "minecraft:stone"},experience: 0.1}).id('minecraft:stone')
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "forge:nbt", item: "minecraft:stone", count: 1}], result:{item: "minecraft:smooth_stone"},experience: 0.1}).id('minecraft:smooth_stone')

	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/lapis", count: 5}], result:{item: "minecraft:lapis_lazuli"},experience: 0.1}).id('minecraft:lapis_lazuli_from_smelting_deepslate_lapis_ore')
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/coal", count: 5}], result:{item: "minecraft:coal"},experience: 0.1}).id('minecraft:coal_from_smelting_deepslate_coal_ore')
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/tin", count: 5}], result:{item: "geolosys:tin_ingot"},experience: 0.1}).id('techopolis:jumbo_furnace_tin_ingot')
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/copper", count: 5}], result:{item: "minecraft:copper_ingot"},experience: 0.1}).id('techopolis:jumbo_furnace_copper_ingot')

	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "forge:nbt", item: "techopolis:grout", count: 1}], result:{item: "techopolis:grout_dust", count:2},experience: 0.1}).id('techopolis:grout_dust')


	//Jumbo Furnace Technium

	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[
		{type: "forge:nbt", item: "minecraft:smooth_stone", count: 32},
		{type: "forge:nbt", item: "minecraft:lapis_lazuli", count: 16},
		{type: "forge:nbt", item: "minecraft:coal", count: 16},
		{type: "forge:nbt", item: "minecraft:clay_ball", count: 16},
		{type: "forge:nbt", item: "immersiveengineering:treated_wood_horizontal", count: 16},
		{type: "forge:nbt", item: "thermal:bronze_block", count: 2}
	], 
	result:{item: "techopolis:basic_technium_ingot"},experience: 0.5}).id('techopolis:basic_technium_ingot')

	


	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[
		{type: "forge:nbt", item: "thermal:tin_ingot", count: 1},
		{type: "forge:nbt", item: "minecraft:copper_ingot", count: 3}
	], 
	result:{item: "thermal:bronze_ingot"},experience: 0.5}).id('techopolis:bronze_ingot')

	//Ore Remmove Recipes (Smelting)

	event.remove({id:'minecraft:lapis_lazuli_from_blasting_lapis_ore'})
	event.remove({id:'minecraft:lapis_lazuli_from_blasting_deepslate_lapis_ore'})
	event.remove({id:'minecraft:lapis_lazuli_from_smelting_lapis_ore'})

	//Ore Remmove Recipes (Blasing)

	event.remove({id:'minecraft:coal_from_blasting_coal_ore'})
	event.remove({id:'minecraft:coal_from_blasting_deepslate_coal_ore'})
	event.remove({id:'minecraft:coal_from_smelting_coal_ore'})

	//Immersive 

	event.shaped('8x immersiveengineering:conveyor_basic', ['L L','CCC','SSS'], {S:'minecraft:smooth_stone_slab', C: coal, L: lapis}).id('immersiveengineering:crafting/conveyor_basic')
	event.shaped('1x immersiveengineering:conveyor_dropper', ['C','W'], {C:conveyor, W: wooden_hopper}).id('immersiveengineering:crafting/conveyor_dropper')
	event.shaped('1x immersiveengineering:sorter', ['WCW','CHC', 'WCW'], {C:conveyor, W: wooden_hopper, H:chest}).id('immersiveengineering:crafting/sorter')
	event.shaped('3x immersiveengineering:conveyor_splitter', ['C C',' C '], {C:conveyor}).id('immersiveengineering:crafting/conveyor_splitter')
	event.shaped('3x immersiveengineering:conveyor_extract', ['CW'], {C:conveyor, W: wooden_hopper}).id('immersiveengineering:crafting/conveyor_extract')
	event.shaped('3x immersiveengineering:conveyor_vertical', ['C','C','C'], {C:conveyor}).id('immersiveengineering:crafting/conveyor_vertical')

	event.shaped('8x immersiveengineering:treated_wood_horizontal', ['PPP','PBP','PPP'], {P: planks, B: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"immersiveengineering:creosote"}}').strongNBT()}).id('techopolis:crafting/treated_wood_horizontal')


	//Crafting

	event.shaped('1x techopolis:grout', ['SGS','GCG','SGS'], {G: gravel, S: sand, C:'minecraft:clay'}).id('techopolis:grout')

	event.shaped('1x minecraft:clay', ['GG','GG'], {G:'techopolis:grout_dust'}).id('techopolis:clay_from_grout')
	event.shaped('1x minecraft:gravel', ['G G','   ','G G'], {G:'techopolis:grout_dust'}).id('techopolis:gravel_from_grout')
	event.shaped('1x minecraft:sand', [' G ','G G',' G '], {G:'techopolis:grout_dust'}).id('techopolis:sand_from_grout')
	event.shaped('1x minecraft:clay_ball', ['G'], {G:'techopolis:grout_dust'}).id('techopolis:clay_ball_from_grout')

	event.shaped('1x techopolis:ore_remover_tier_1', ['MMM', ' S ', ' S '], {S: stick, M:'miners:miner_tier_2'}).id('techopolis:clay_ball_from_grout')


	//Replace 

	event.replaceInput({id: 'craftingautomat:autocrafter'}, 'minecraft:dropper', 'minecraft:crafting_table')
	event.replaceInput({id: 'immersiveengineering:crafting/hammer'}, 'minecraft:iron_ingot', 'thermal:bronze_ingot')


	// Change recipes here






})

ServerEvents.tags('block', event => {

	event.get('miners:miner_tier_1').add('techopolis:grout')
	event.get('miners:miner_tier_2').add(['#forge:ores/coal', '#forge:stone'])
	event.get('miners:miner_tier_3').add('#forge:ores/tin')

})

ServerEvents.tags('item', event => {

	event.get('miners:miner_tier_1').add('techopolis:grout')
	event.get('miners:miner_tier_2').add(['#forge:ores/coal', '#forge:stone'])
	event.get('miners:miner_tier_3').add('#forge:ores/tin')

})

ServerEvents.blockLootTables(event => {

	event.addSimpleBlock('#forge:ores', 'minecraft:cobblestone')
	event.addSimpleBlock('#techopolis:samples')
	event.addSimpleBlock('minecraft:gravel')
	event.addSimpleBlock('minecraft:clay') 
	
})

function oreChange(oreTag, oreBlock, tier) {

	BlockEvents.rightClicked(event => {

		const {block} = event

		if (event.block.hasTag(`forge:ores/${oreTag}`)){
        	if (event.item.id === `techopolis:ore_remover_tier_${tier}`){
				event.player.give(oreBlock)
            	block.set('minecraft:air')
        	}
    	}
	})
}

oreChange('coal', 'minecraft:coal_ore', 1)
oreChange('lapis', 'minecraft:lapis_ore', 1)
/*

	BlockEvents.rightClicked(event => {
		if(event.block.id === 'kubejs:negativematter' && event.player.mainHandItem.isEmpty() && event.player.crouching && Math.random() < 0.2) {
		  event.player.give('kubejs:negativepowder')
		}
	  })
	  */
