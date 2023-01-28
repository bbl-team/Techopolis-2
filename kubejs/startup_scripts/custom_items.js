// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	event.create('techopolis:basic_technium_ingot')
	event.create('techopolis:advanced_technium_ingot')
	event.create('techopolis:elite_technium_ingot')
	event.create('techopolis:ultimate_technium_ingot')
	event.create('techopolis:hellish_technium_ingot')
	event.create('techopolis:voided_technium_ingot')
	event.create('techopolis:final_technium_ingot')

	event.create('techopolis:ore_remover_tier_1').glow(true)
	
	event.create('techopolis:grout_dust')

//	event.create('techopolis:final_technium_ingot') (something domonic?)


})

StartupEvents.registry('block', event => {
	event.create('techopolis:grout').material('dirt').hardness(1.0).displayName('Grout')
})