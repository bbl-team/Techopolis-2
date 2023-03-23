// priority: -1000


ServerEvents.tags('block', event => {

	event.get('miners:miner_tier_1').add()
	event.get('miners:miner_tier_2').add('#forge:ores/coal', '#forge:stone', '#techopolis:colored_stone','minecraft:dripstone_block', 'compressium:cobblestone_1')
	event.get('miners:miner_tier_3').add('#forge:ores/tin', 'techopolis:grout', 'compressium:cobblestone_2')
	event.get('miners:miner_tier_4').add('#forge:ores/aluminum')
	event.get('miners:miner_tier_5').add('#forge:ores/redstone', '#forge:ores/nickel', '#forge:ores/silver')
	event.get('miners:miner_tier_6').add('#forge:ores/lead', 'techopolis:crystal_ore')
	event.get('miners:miner_tier_7').add('minecraft:nether_quartz_ore', 'minecraft:obsidian')
	event.get('miners:miner_tier_8').add('#forge:ores/osmium', '#forge:ores/uranium', 'minecraft:glowstone')
	event.get('miners:miner_tier_9').add('minecraft:netherrack').remove('minecraft:beacon')
	event.get('miners:miner_tier_10').add('beyond_earth:mars_ostrum_ore', 'beyond_earth:moon_desh_ore', 'beyond_earth:venus_calorite_ore')
	
    event.get('techopolis:colored_stone').add('caveopolis:white_colored_stone', 'caveopolis:black_colored_stone', 'caveopolis:lime_colored_stone', 'caveopolis:green_colored_stone', 'caveopolis:orange_colored_stone', 'caveopolis:brown_colored_stone', 'caveopolis:gray_colored_stone', 'caveopolis:light_gray_colored_stone', 'caveopolis:light_blue_colored_stone', 'caveopolis:cyan_colored_stone', 'caveopolis:magenta_colored_stone', 'caveopolis:purple_colored_stone', 'caveopolis:pink_colored_stone', 'caveopolis:blue_colored_stone', 'caveopolis:yellow_colored_stone', 'caveopolis:red_colored_stone')

	event.get('miners:copper_support_cap').add('#forge:storage_blocks/tin')

})

ServerEvents.tags('item', event => {

	event.get('miners:miner_tier_1').add()
	event.get('miners:miner_tier_2').add('#forge:ores/coal', '#forge:stone', '#techopolis:colored_stone','minecraft:dripstone_block', 'compressium:cobblestone_1')
	event.get('miners:miner_tier_3').add('#forge:ores/tin', 'techopolis:grout','compressium:cobblestone_2')
    event.get('miners:miner_tier_4').add('#forge:ores/aluminum')
	event.get('miners:miner_tier_5').add('#forge:ores/redstone', '#forge:ores/nickel', '#forge:ores/silver')
	event.get('miners:miner_tier_6').add('#forge:ores/lead', 'techopolis:crystal_ore')
	event.get('miners:miner_tier_7').add('minecraft:nether_quartz_ore', 'minecraft:obsidian')
	event.get('miners:miner_tier_8').add('#forge:ores/osmium', '#forge:ores/uranium', 'minecraft:glowstone')
	event.get('miners:miner_tier_9').add('minecraft:netherrack').remove('minecraft:beacon')
	event.get('miners:miner_tier_10').add('beyond_earth:mars_ostrum_ore', 'beyond_earth:moon_desh_ore', 'beyond_earth:venus_calorite_ore')

	event.get('techopolis:colored_stone').add('caveopolis:white_colored_stone', 'caveopolis:black_colored_stone', 'caveopolis:lime_colored_stone', 'caveopolis:green_colored_stone', 'caveopolis:orange_colored_stone', 'caveopolis:brown_colored_stone', 'caveopolis:gray_colored_stone', 'caveopolis:light_gray_colored_stone', 'caveopolis:light_blue_colored_stone', 'caveopolis:cyan_colored_stone', 'caveopolis:magenta_colored_stone', 'caveopolis:purple_colored_stone', 'caveopolis:pink_colored_stone', 'caveopolis:blue_colored_stone', 'caveopolis:yellow_colored_stone', 'caveopolis:red_colored_stone')

	event.get('miners:copper_support_cap').add('#forge:storage_blocks/tin')
	
	event.get('techopolis:ultimate_technium_ingot').add('techopolis:ultimate_technium_ingot')
	
	event.get('forge:silicon').add('techopolis:silicon')

	event.get('techopolis:extended_crafting').add(['extendedcrafting:ultimate_singularity','extendedcrafting:singularity','extendedcrafting:ender_star','extendedcrafting:flux_star', 'extendedcrafting:the_ultimate_component','extendedcrafting:crystaltine_component', 'extendedcrafting:enhanced_ender_component','extendedcrafting:ender_component','extendedcrafting:enhanced_redstone_component','extendedcrafting:redstone_component','extendedcrafting:ultimate_component','extendedcrafting:elite_component','extendedcrafting:advanced_component','extendedcrafting:basic_component','extendedcrafting:the_ultimate_catalyst','extendedcrafting:crystaltine_catalyst','extendedcrafting:enhanced_ender_catalyst','extendedcrafting:the_ultimate_nugget', 'extendedcrafting:black_iron_slate', 'extendedcrafting:basic_catalyst', 'extendedcrafting:advanced_catalyst', 'extendedcrafting:elite_catalyst', 'extendedcrafting:ultimate_catalyst', 'extendedcrafting:redstone_catalyst', 'extendedcrafting:enhanced_redstone_catalyst', 'extendedcrafting:ender_catalyst', 'extendedcrafting:crystaltine_nugget','extendedcrafting:enhanced_ender_nugget', 'extendedcrafting:ender_nugget','extendedcrafting:enhanced_redstone_nugget','extendedcrafting:redstone_nugget','extendedcrafting:black_iron_nugget','extendedcrafting:enhanced_redstone_ingot','extendedcrafting:nether_star_block','extendedcrafting:the_ultimate_block','extendedcrafting:the_ultimate_ingot','extendedcrafting:crystaltine_ingot', 'extendedcrafting:enhanced_ender_ingot', 'extendedcrafting:black_iron_ingot','extendedcrafting:ender_ingot','extendedcrafting:redstone_ingot', 'extendedcrafting:luminessence','extendedcrafting:auto_flux_crafter','extendedcrafting:flux_crafter', 'extendedcrafting:flux_alternator', 'extendedcrafting:auto_ender_crafter','extendedcrafting:ender_crafter', 'extendedcrafting:ender_alternator', 'extendedcrafting:compressor', 'extendedcrafting:ultimate_auto_table','extendedcrafting:elite_auto_table','extendedcrafting:ultimate_table','extendedcrafting:elite_table','extendedcrafting:crafting_core','extendedcrafting:pedestal','extendedcrafting:frame', 'extendedcrafting:ender_star_block', 'extendedcrafting:flux_star_block', 'extendedcrafting:crystaltine_block', 'extendedcrafting:enhanced_redstone_ingot_block', 'extendedcrafting:ender_ingot_block', 'extendedcrafting:enhanced_ender_ingot_block','extendedcrafting:luminessence_block', 'extendedcrafting:black_iron_block', 'extendedcrafting:redstone_ingot_block'])
	
})

ServerEvents.tags('fluid', event => {

	event.get('miners:fluid_absorber_fluid').add('beyond_earth:oil')

})
ServerEvents.blockLootTables(event => {

	event.addSimpleBlock('#forge:ores', 'minecraft:cobblestone')
	event.addSimpleBlock('minecraft:gravel')
	
})

