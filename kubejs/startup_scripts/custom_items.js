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

	event.create('techopolis:reaserch_pappers_copper_and_tin').displayName('Research Pappers: Copper and Tin').texture("minecraft:item/enchanted_book").color(0, 0x9A4D30).glow(true).tooltip("§2Unlocks Copper and Tin collection with your prospectors pickaxe§r")
	event.create('techopolis:reaserch_pappers_storage_drawers').displayName('Research Pappers: Storage Drawers').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Storage Drawers§r")
	event.create('techopolis:reaserch_pappers_iron_and_aluminum').displayName('Research Pappers: Iron and Aluminum').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Iron and Aluminum collection with your prospectors pickaxe§r")
	event.create('techopolis:reaserch_pappers_redstone').displayName('Research Pappers: Redstone').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Redstone collection with your prospectors pickaxe§r")
	
	event.create('techopolis:blank_research_pappers').texture("minecraft:item/paper").color(0, 0x9A4D00).tooltip("§2Unlocks Storage Drawers§r")

	event.create('techopolis:aluminum_fragment').texture("caveopolis:item/gold_fragment").color(0, 0xF6FCFC)

	//event.create('techopolis:ore_remover_tier_1').glow(true)
	
	event.create('techopolis:grout_dust')

	event.create('techopolis:prospectors_pickaxe', 'pickaxe').tier('stone')

//	event.create('techopolis:final_technium_ingot') (something domonic?)


})

StartupEvents.registry('block', event => {
	event.create('techopolis:grout').material('dirt').hardness(1.0).displayName('Grout')
})