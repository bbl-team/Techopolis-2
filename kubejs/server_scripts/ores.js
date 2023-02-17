// priority: 2

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {


	//Ore Remmove Recipes (Smelting)

	event.remove({type:'minecraft:smelting', input:'#forge:ores'})

	//Ore Remmove Recipes (Blasing)

	event.remove({type:'minecraft:blasting', input:'#forge:ores'})

	//Ore Crafting

	event.shaped('1x minecraft:coal_ore', [' F ','FSF',' F '], {S:stone, F: 'caveopolis:coal_fragment'}).id('techopolis:coal_ore')
	event.shaped('1x minecraft:deepslate_coal_ore', [' F ','FSF',' F '], {S:deepslate, F: 'caveopolis:coal_fragment'}).id('techopolis:deepslate_coal_ore')

	event.shaped('1x minecraft:copper_ore', [' F ','FSF',' F '], {S:stone, F: 'caveopolis:copper_fragment'}).id('techopolis:copper_ore')
	event.shaped('1x minecraft:deepslate_copper_ore', [' F ','FSF',' F '], {S:deepslate, F: 'caveopolis:copper_fragment'}).id('techopolis:deepslate_copper_ore')

	event.shaped('1x minecraft:lapis_ore', [' F ','FSF',' F '], {S:stone, F: 'caveopolis:lapis_lazuli_fragment'}).id('techopolis:lapis_ore')
	event.shaped('1x minecraft:deepslate_lapis_ore', [' F ','FSF',' F '], {S:deepslate, F: 'caveopolis:lapis_lazuli_fragment'}).id('techopolis:deepslate_lapis_ore')

	event.shaped('1x alltheores:tin_ore', [' F ','FSF',' F '], {S:stone, F: 'caveopolis:tin_fragment'}).id('techopolis:tin_ore')
	event.shaped('1x alltheores:deepslate_tin_ore', [' F ','FSF',' F '], {S:deepslate, F: 'caveopolis:tin_fragment'}).id('techopolis:deepslate_tin_ore')

	event.shaped('1x minecraft:iron_ore', [' F ','FSF',' F '], {S:stone, F: 'caveopolis:iron_fragment'}).id('techopolis:iron_ore')
	event.shaped('1x minecraft:deepslate_iron_ore', [' F ','FSF',' F '], {S:deepslate, F: 'caveopolis:iron_fragment'}).id('techopolis:deepslate_iron_ore')

	event.shaped('1x alltheores:aluminum_ore', [' F ','FSF',' F '], {S:stone, F: 'techopolis:aluminum_fragment'}).id('techopolis:aluminum_ore')
	event.shaped('1x alltheores:deepslate_aluminum_ore', [' F ','FSF',' F '], {S:deepslate, F: 'techopolis:aluminum_fragment'}).id('techopolis:deepslate_aluminum_ore')

	event.shaped('1x minecraft:redstone_ore', [' F ','FSF',' F '], {S:stone, F: 'caveopolis:redstone_fragment'}).id('techopolis:redstone_ore')
	event.shaped('1x minecraft:deepslate_redstone_ore', [' F ','FSF',' F '], {S:deepslate, F: 'caveopolis:redstone_fragment'}).id('techopolis:deepslate_redstone_ore')

	event.shaped('1x alltheores:nickel_ore', [' F ','FSF',' F '], {S:stone, F: 'caveopolis:nickel_fragment'}).id('techopolis:nickel_ore')
	event.shaped('1x alltheores:deepslate_nickel_ore', [' F ','FSF',' F '], {S:deepslate, F: 'caveopolis:nickel_fragment'}).id('techopolis:deepslate_nickel_ore')

	event.shaped('1x minecraft:gold_ore', [' F ','FSF',' F '], {S:stone, F: 'caveopolis:gold_fragment'}).id('techopolis:gold_ore')
	event.shaped('1x minecraft:deepslate_gold_ore', [' F ','FSF',' F '], {S:deepslate, F: 'caveopolis:gold_fragment'}).id('techopolis:deepslate_gold_ore')

	event.shaped('1x alltheores:silver_ore', [' F ','FSF',' F '], {S:stone, F: 'caveopolis:silver_fragment'}).id('techopolis:silver_ore')
	event.shaped('1x alltheores:deepslate_silver_ore', [' F ','FSF',' F '], {S:deepslate, F: 'caveopolis:silver_fragment'}).id('techopolis:deepslate_silver_ore')

	event.shaped('1x alltheores:lead_ore', [' F ','FSF',' F '], {S:stone, F: 'caveopolis:lead_fragment'}).id('techopolis:lead_ore')
	event.shaped('1x alltheores:deepslate_lead_ore', [' F ','FSF',' F '], {S:deepslate, F: 'caveopolis:lead_fragment'}).id('techopolis:deepslate_lead_ore')

	event.shaped('1x techopolis:crystal_ore', [' F ','FSF',' F '], {S:stone, F: 'techopolis:crystal_fragment'}).id('techopolis:crystal_ore')
//	event.shaped('1x alltheores:deepslate_crystal_ore', [' F ','FSF',' F '], {S:deepslate, F: 'caveopolis:crystal_fragment'}).id('techopolis:deepslate_crystal_ore')
	
    //Caveopolis removed fragments to ores

    event.remove({id:/caveopolis:fragments/})

    //Ores In Jumbo Furnace


	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/lapis", count: 3}], result:{item: "minecraft:lapis_lazuli"},experience: 0.1}).id('techopolis:jumbo_furnace_lapis_ingot')
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/coal", count: 3}], result:{item: "minecraft:coal"},experience: 0.1}).id('techopolis:jumbo_furnace_coal_ingot')
	
    event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/tin", count: 4}], result:{item: "alltheores:tin_ingot"},experience: 0.1}).id('techopolis:jumbo_furnace_tin_ingot')
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/copper", count: 5}], result:{item: "minecraft:copper_ingot"},experience: 0.1}).id('techopolis:jumbo_furnace_copper_ingot')
	
    event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/aluminum", count: 5}], result:{item: "alltheores:aluminum_ingot"},experience: 0.1}).id('techopolis:jumbo_furnace_aluminum_ingot')
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/iron", count: 5}], result:{item: "minecraft:iron_ingot"},experience: 0.1}).id('techopolis:jumbo_furnace_iron_ingot')
	
    event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/redstone", count: 3}], result:{item: "minecraft:redstone"},experience: 0.1}).id('techopolis:jumbo_furnace_redstone')
    event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/nickel", count: 5}], result:{item: "alltheores:nickel_ingot"},experience: 0.1}).id('techopolis:jumbo_furnace_nickel_ingot')
   
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/gold", count: 5}], result:{item: "minecraft:gold_ingot"},experience: 0.1}).id('techopolis:jumbo_furnace_gold_ingot')
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/silver", count: 5}], result:{item: "alltheores:silver_ingot"},experience: 0.1}).id('techopolis:jumbo_furnace_silver_ingot')
	
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/lead", count: 5}], result:{item: "alltheores:lead_ingot"},experience: 0.1}).id('techopolis:jumbo_furnace_lead_ingot')
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/crystals", count: 5}], result:{item: "techopolis:crystalline"},experience: 0.1}).id('techopolis:jumbo_furnace_crystalline_ingot')
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/niter", count: 5}], result:{item: "thermal:niter"},experience: 0.1}).id('techopolis:jumbo_furnace_niter')
	
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/diamond", count: 8}], result:{item: "minecraft:diamond"},experience: 0.1}).id('techopolis:jumbo_furnace_diamond')
	event.custom({type: "jumbofurnace:jumbo_smelting",ingredients:[{"type": "jumbofurnace:tag_stack", tag: "forge:ores/emerald", count: 8}], result:{item: "miencraft:emerald"},experience: 0.1}).id('techopolis:jumbo_furnace_emerald')

})