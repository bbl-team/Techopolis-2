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
	event.create('techopolis:research_papers_niter').displayName('Research Papers: Niter').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Niter purchasing from the ore shop§r")
	event.create('techopolis:research_papers_debris').displayName('Research Papers: Ancient Debris').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Ancient Debris Crafting Recipe§r")
	event.create('techopolis:research_papers_nether').displayName('Research Papers: Nether Materials').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Various New Crafting Recipes for nether items§r")
	event.create('techopolis:research_papers_essence').displayName('Research Papers: Essence').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Essence Mod§r")
	event.create('techopolis:research_papers_sulfur').displayName('Research Papers: Sulfur').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2You can now craft Sulfur ore§r")
	event.create('techopolis:research_papers_uranium').displayName('Research Papers: Uranium').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2You can now craft Uranium ore§r")
	
	event.create('techopolis:research_papers_ender').displayName('Research Papers: Ender Ore').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2You can now purchase ender ore§r")	
	event.create('techopolis:research_papers_b_bucks_1').displayName('Research Papers: Tech Bucks 1').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Allows the crafting of B Bucks§r")
	event.create('techopolis:research_papers_b_bucks_2').displayName('Research Papers: Tech Bucks 2').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Allows the crafting of B Bucks§r")
	event.create('techopolis:research_papers_b_bucks_3').displayName('Research Papers: Tech Bucks 3').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Allows the crafting of B Bucks§r")
	event.create('techopolis:research_papers_b_bucks_4').displayName('Research Papers: Tech Bucks 4').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Allows the crafting of B Bucks§r")
	event.create('techopolis:research_papers_b_bucks_5').displayName('Research Papers: Tech Bucks 5').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Allows the crafting of B Bucks§r")
	event.create('techopolis:research_papers_b_bucks_6').displayName('Research Papers: Tech Bucks 6').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Allows the crafting of B Bucks§r")

	//research Mods

	event.create('techopolis:research_papers_storage_drawers').displayName('Research Papers: Storage Drawers').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Storage Drawers§r")
	event.create('techopolis:research_papers_little_logistic').displayName('Research Papers: Little Logistics').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Little Logistics§r")
	event.create('techopolis:research_papers_thermal').displayName('Research Papers: Thermal Series').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Thermal Series Mods§r")
	event.create('techopolis:research_papers_ae2').displayName('Research Papers: Applied Energistcs').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Applied Energistics§r")
	event.create('techopolis:research_papers_rs').displayName('Research Papers: Refined Storage').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Refined Storage§r")
	event.create('techopolis:research_papers_mekanism').displayName('Research Papers: Mekanism').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Mekanism§r")
	event.create('techopolis:research_papers_powah').displayName('Research Papers: Powah').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Powah§r")
	event.create('techopolis:research_papers_compressium').displayName('Research Papers: Compressium').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Compressium§r")
	event.create('techopolis:research_papers_immersive_aircraft').displayName('Research Papers: Immersive Aircraft').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Immersive Aircraft§r")
	event.create('techopolis:research_papers_extended_crafting').displayName('Research Papers: Extended Crafting').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks All Remaining Extended Crafting Items and Blocks§r")
	event.create('techopolis:research_papers_construction_wand').displayName('Research Papers: Construction Wands').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Constructions Wands§r")
	event.create('techopolis:research_papers_waystones').displayName('Research Papers: Waystones').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Waystones§r")
	event.create('techopolis:research_papers_framed_blocks').displayName('Research Papers: Framed Blocks').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Framed Blocks§r")
	event.create('techopolis:research_papers_simple_storage').displayName('Research Papers: Simple Storage Networks').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Simple Storage Networks§r")
	event.create('techopolis:research_papers_flux_networks').displayName('Research Papers: Flux Networks').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Flux Networks§r")
	event.create('techopolis:research_papers_tempad').displayName('Research Papers: Tempad').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Tempad§r")
	event.create('techopolis:research_papers_building_gadgets').displayName('Research Papers: Building Gadgets').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Building Gadgets§r")
	event.create('techopolis:research_papers_beyond_earth').displayName('Research Papers: Beyond Earth').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Beyond Earth§r")
	event.create('techopolis:research_papers_tiab').displayName('Research Papers: Time In A Bottle').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Time In A Bottle§r")
	event.create('techopolis:research_papers_trash_cans').displayName('Research Papers: Trash Cans').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Trash Cans§r")
	event.create('techopolis:research_papers_angel_ring').displayName('Research Papers: Angel Ring').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Angel Ring§r")
	event.create('techopolis:research_papers_villager_trades').displayName('Research Papers: Villager Trades').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Villager Trading§r")
	event.create('techopolis:research_papers_laserio').displayName('Research Papers: LaserIO').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks LaserIO§r")
	event.create('techopolis:research_papers_xnet').displayName('Research Papers: XNet').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks XNet§r")
	event.create('techopolis:research_papers_ender_chests').displayName('Research Papers: Ender Chests').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Ender Chests§r")
	event.create('techopolis:research_papers_elevators').displayName('Research Papers: Elevators').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Elevators§r")
	event.create('techopolis:research_papers_gem_ores').displayName('Research Papers: Gem Ores').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Gem Ores§r")
	event.create('techopolis:research_papers_chipped').displayName('Research Papers: Chipped').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Chipped§r")
	
	
	event.create('techopolis:research_papers_metal_press').displayName('Research Papers: Metal Press').texture("minecraft:item/enchanted_book").color(0, 0x9A4D00).glow(true).tooltip("§2Unlocks Provides the blocks needed to make the Metal Press§r")
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
	event.create('techopolis:silicon').texture("ae2:item/silicon")

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

ItemEvents.modification(event => {

	event.modify('minecraft:oak_leaves', item => {item.burnTime = 100})
	event.modify('minecraft:birch_leaves', item => {item.burnTime = 100})
	event.modify('minecraft:jungle_leaves', item => {item.burnTime = 100})
	event.modify('minecraft:dark_oak_leaves', item => {item.burnTime = 100})
	event.modify('minecraft:acacia_leaves', item => {item.burnTime = 100})
	event.modify('minecraft:spruce_leaves', item => {item.burnTime = 100})

})



