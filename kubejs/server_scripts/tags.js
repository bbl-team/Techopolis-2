// priority: 0


ServerEvents.tags('block', event => {

	event.get('miners:miner_tier_1').add()
	event.get('miners:miner_tier_2').add(['#forge:ores/coal', '#forge:stone'])
	event.get('miners:miner_tier_3').add('#forge:ores/tin', 'techopolis:grout')
	event.get('miners:miner_tier_4').add('#forge:ores/aluminum')
	event.get('miners:miner_tier_5').add('#forge:ores/redstone')
	
    
    event.get('techopolis:colored_stone').add('caveopolis:white_colored_stone', 'caveopolis:black_colored_stone', 'caveopolis:lime_colored_stone', 'caveopolis:green_colored_stone', 'caveopolis:orange_colored_stone', 'caveopolis:brown_colored_stone', 'caveopolis:gray_colored_stone', 'caveopolis:light_gray_colored_stone', 'caveopolis:light_blue_colored_stone', 'caveopolis:cyan_colored_stone', 'caveopolis:magenta_colored_stone', 'caveopolis:purple_colored_stone', 'caveopolis:pink_colored_stone', 'caveopolis:blue_colored_stone', 'caveopolis:yellow_colored_stone', 'caveopolis:red_colored_stone')
})

ServerEvents.tags('item', event => {

	event.get('miners:miner_tier_1').add()
	event.get('miners:miner_tier_2').add(['#forge:ores/coal', '#forge:stone'])
	event.get('miners:miner_tier_3').add('#forge:ores/tin', 'techopolis:grout')
    event.get('miners:miner_tier_4').add('#forge:ores/aluminum')
    event.get('miners:miner_tier_5').add('#forge:ores/redstone')

})

ServerEvents.blockLootTables(event => {

	event.addSimpleBlock('#forge:ores', 'minecraft:cobblestone')
	event.addSimpleBlock('#techopolis:samples')
	event.addSimpleBlock('minecraft:gravel')
	event.addSimpleBlock('minecraft:clay') 
	
})