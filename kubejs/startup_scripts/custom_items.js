// priority: 100

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	event.create('techopolis:basic_technium_ingot')
	event.create('techopolis:advanced_technium_ingot')
	event.create('techopolis:elite_technium_ingot')
	event.create('techopolis:ultimate_technium_ingot')
	event.create('techopolis:hellish_technium_ingot')
	event.create('techopolis:voided_technium_ingot')
	event.create('techopolis:final_technium_ingot')

	//research Prospectors Pickaxe

	event.create('techopolis:research_papers_copper_and_tin').displayName('Research Papers: Copper and Tin').texture("minecraft:item/enchanted_book").color(0, 0x9A4D30).glow(true).tooltip("§2Unlocks Copper and Tin collection with your prospectors pickaxe§r")
	event.create('techopolis:research_papers_iron_and_aluminum').displayName('Research Papers: Iron and Aluminum').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Iron and Aluminum collection with your prospectors pickaxe§r")
	event.create('techopolis:research_papers_redstone').displayName('Research Papers: Redstone').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Redstone collection with your prospectors pickaxe§r")
	event.create('techopolis:research_papers_nickel').displayName('Research Papers: Nickel').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Nickel collection with your prospectors pickaxe§r")
	event.create('techopolis:research_papers_silver_and_gold').displayName('Research Papers: Silver and Gold').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Silver and Gold collection with your prospectors pickaxe§r")
	event.create('techopolis:research_papers_lead').displayName('Research Papers: Lead').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Lead collection with your prospectors pickaxe§r")
	event.create('techopolis:research_papers_crystal').displayName('Research Papers: Crystal').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Crystal collection with your prospectors pickaxe§r")
	event.create('techopolis:research_papers_diamond_and_emerald').displayName('Research Papers: Diamond and Emerald').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Diamond and Emerald collection with your prospectors pickaxe§r")
	event.create('techopolis:research_papers_osmium').displayName('Research Papers: Osmium').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Osmium collection with your prospectors pickaxe§r")
	
	event.create('techopolis:research_papers_sulfur').displayName('Research Papers: Sulfur').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2You can now craft sulfur ore§r")
	event.create('techopolis:research_papers_uranium').displayName('Research Papers: Uranium').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2You can now craft sulfur ore§r")
	
	
	//research Mods

	event.create('techopolis:research_papers_storage_drawers').displayName('Research Papers: Storage Drawers').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Storage Drawers§r")
	event.create('techopolis:research_papers_little_logistic').displayName('Research Papers: Little Logistics').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Little Logistics§r")
	event.create('techopolis:research_papers_thermal').displayName('Research Papers: Thermal Series').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Thermal Series Mods§r")
	event.create('techopolis:research_papers_ae2').displayName('Research Papers: Applied Energistcs').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Applied Energistics§r")
	event.create('techopolis:research_papers_rs').displayName('Research Papers: Refined Storage').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Refined Storage§r")
	event.create('techopolis:research_papers_mekanism').displayName('Research Papers: Mekanism').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Mekanism§r")
	event.create('techopolis:research_papers_powah').displayName('Research Papers: Powah').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Powah§r")

	event.create('techopolis:research_papers_metal_press').displayName('Research Pappers: Metal Press').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Provides the blocks needed to make the Metal Press§r")

	event.create('techopolis:blank_research_papers').texture("minecraft:item/paper").color(0, 0x9A4D00).tooltip("§2Used to make research papers §r")

	event.create('techopolis:aluminum_fragment').texture("caveopolis:item/mixed_stone_fragment").color(0, 0xF6FCFC)
	event.create('techopolis:crystal_fragment').texture("caveopolis:item/mixed_stone_fragment").color(0, 0xF6FCFC)

	//event.create('techopolis:ore_remover_tier_1').glow(true)
	
	event.create('techopolis:grout_dust')
	event.create('techopolis:lava_bottle')
	event.create('techopolis:crystalline')
	event.create('techopolis:crystalline_dust')
	event.create('techopolis:crystal_base')
	event.create('techopolis:infused_crystalline')
	event.create('techopolis:prismarine_dust').texture("alltheores:item/uranium_dust").color(0, 0xF6FCFC)

	event.create('techopolis:prospectors_pickaxe', 'pickaxe').tier('diamond')

//	event.create('techopolis:final_technium_ingot') (something domonic?)


})

StartupEvents.registry('block', event => {
	event.create('techopolis:grout').material('dirt').hardness(1.0).displayName('Grout')
	event.create('techopolis:crystal_ore').material('stone').hardness(1.0).displayName('Crystal Ore')
})


StartupEvents.registry('fluid', event => {
	
    event.create('techopolis:liquid_glass').thinTexture(0xFFF2E2).bucketColor(0xFFF2E2).displayName('Liquid Glass')

  
  
  })