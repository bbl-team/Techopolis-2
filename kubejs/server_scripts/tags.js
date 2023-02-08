// priority: -1000


ServerEvents.tags('block', event => {

	event.get('miners:miner_tier_1').add()
	event.get('miners:miner_tier_2').add('#forge:ores/coal', '#forge:stone', '#techopolis:colored_stone')
	event.get('miners:miner_tier_3').add('#forge:ores/tin', 'techopolis:grout')
	event.get('miners:miner_tier_4').add('#forge:ores/aluminum')
	event.get('miners:miner_tier_5').add('#forge:ores/redstone', '#forge:ores/nickel', '#forge:ores/silver')
	event.get('miners:miner_tier_6').add('#forge:ores/lead')
	event.get('miners:miner_tier_7').add('')
	event.get('miners:miner_tier_8').add('#forge:ores/osmium', '#forge:ores/uranium')
	
    event.get('techopolis:colored_stone').add('caveopolis:white_colored_stone', 'caveopolis:black_colored_stone', 'caveopolis:lime_colored_stone', 'caveopolis:green_colored_stone', 'caveopolis:orange_colored_stone', 'caveopolis:brown_colored_stone', 'caveopolis:gray_colored_stone', 'caveopolis:light_gray_colored_stone', 'caveopolis:light_blue_colored_stone', 'caveopolis:cyan_colored_stone', 'caveopolis:magenta_colored_stone', 'caveopolis:purple_colored_stone', 'caveopolis:pink_colored_stone', 'caveopolis:blue_colored_stone', 'caveopolis:yellow_colored_stone', 'caveopolis:red_colored_stone')
	event.get('forge:ores/crystals').add('techopolis:crystal_ore')

})

ServerEvents.tags('item', event => {

	event.get('miners:miner_tier_1').add()
	event.get('miners:miner_tier_2').add('#forge:ores/coal', '#forge:stone', '#techopolis:colored_stone')
	event.get('miners:miner_tier_3').add('#forge:ores/tin', 'techopolis:grout')
    event.get('miners:miner_tier_4').add('#forge:ores/aluminum')
	event.get('miners:miner_tier_5').add('#forge:ores/redstone', '#forge:ores/nickel', '#forge:ores/silver')
	event.get('miners:miner_tier_6').add('#forge:ores/lead')
	event.get('miners:miner_tier_7').add('')
	event.get('miners:miner_tier_8').add('#forge:ores/osmium')

	event.get('techopolis:colored_stone').add('caveopolis:white_colored_stone', 'caveopolis:black_colored_stone', 'caveopolis:lime_colored_stone', 'caveopolis:green_colored_stone', 'caveopolis:orange_colored_stone', 'caveopolis:brown_colored_stone', 'caveopolis:gray_colored_stone', 'caveopolis:light_gray_colored_stone', 'caveopolis:light_blue_colored_stone', 'caveopolis:cyan_colored_stone', 'caveopolis:magenta_colored_stone', 'caveopolis:purple_colored_stone', 'caveopolis:pink_colored_stone', 'caveopolis:blue_colored_stone', 'caveopolis:yellow_colored_stone', 'caveopolis:red_colored_stone')
	event.get('forge:ores/crystals').add('techopolis:crystal_ore')

})

ServerEvents.blockLootTables(event => {

	event.addSimpleBlock('#forge:ores', 'minecraft:cobblestone')
	event.addSimpleBlock('#techopolis:samples')
	event.addSimpleBlock('minecraft:gravel')
	
})