// priority: 99

//Recipes Restrictions Handled by Kubejs 

//Superflat right click grass for pebbles

BlockEvents.rightClicked(event => {
    const {player, server} = event
    if(event.block.hasTag('minecraft:dirt')){
        if (event.player.stages.has('superflat_recipes') && event.player.isCrouching()) {
            server.runCommandSilent(`give @p caveopolis:cobblestone_pebble`)

        }
    }
})

BlockEvents.rightClicked(event => {
    const {player, server} = event
    if(event.block.hasTag('forge:cobblestone')){
        if (player.mainHandItem == 'techopolis:prospectors_pickaxe') {
            if (event.player.stages.has('skyblock_recipes')) {
                server.runCommandSilent(`give @p caveopolis:cobblestone_pebble 3`)
            }
        }
    }
})


ServerEvents.recipes(event => {

    event.shaped('1x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: basic_technium}).id('techopolis:b_bucks_1').stage('b_bucks_1')
    event.shaped('1x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: advanced_technium}).id('techopolis:b_bucks_2').stage('b_bucks_2')
    event.shaped('1x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: elite_technium}).id('techopolis:b_bucks_3').stage('b_bucks_3')
    event.shaped('1x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: ultimate_technium}).id('techopolis:b_bucks_4').stage('b_bucks_4')
    event.shaped('1x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: hellish_technium}).id('techopolis:b_bucks_5').stage('b_bucks_5')
    event.shaped('1x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: voided_technium}).id('techopolis:b_bucks_6').stage('b_bucks_6')


//World Exclusive recipes

//    event.shaped('1x minecraft:diamond', ['BBB','BBB','BBB'], {B:'minecraft:dirt'}).id('techopolis:hexlands_diamond').stage('hexland_recipes')

    //Superflat Recipes

    event.shaped('3x minecraft:gravel', ['D C','   ','C D'], {D:'minecraft:dirt',C:cobblestone}).id('techopolis:flatlands_gravel').stage('superflat_recipes')
    event.shaped('3x minecraft:sand', ['D C','   ','C D'], {D:'minecraft:dirt',C:gravel}).id('techopolis:flatlands_sand').stage('superflat_recipes')
    event.shaped('3x minecraft:clay_ball', ['D C','   ','C D'], {D:'minecraft:dirt',C:sand}).id('techopolis:flatlands_clay').stage('superflat_recipes')
    event.shaped(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'), [' L ','LCL',' L '], {L:lapis, C:'ceramicbucket:ceramic_bucket'}).id('techopolis:flatlands_water_bucket').stage('superflat_recipes')
    event.shaped(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}'), [' L ','LCL',' L '], {L:redstone, C:'ceramicbucket:ceramic_bucket'}).id('techopolis:flatlands_lava_bucket').stage('superflat_recipes')
    event.shapeless('1x minecraft:birch_sapling', ['minecraft:oak_sapling']).id('techopolis:flatlands_birch').stage('superflat_recipes')
    event.shapeless('1x minecraft:jungle_sapling', ['minecraft:birch_sapling']).id('techopolis:flatlands_jungle').stage('superflat_recipes')
    event.shapeless('1x minecraft:dark_oak_sapling', ['minecraft:jungle_sapling']).id('techopolis:flatlands_dark_oak').stage('superflat_recipes')
    event.shapeless('1x minecraft:acacia_sapling', ['minecraft:dark_oak_sapling']).id('techopolis:flatlands_acacia').stage('superflat_recipes')
    event.shapeless('1x minecraft:spruce_sapling', ['minecraft:acacia_sapling']).id('techopolis:flatlands_spruce').stage('superflat_recipes')
    event.shapeless('1x minecraft:oak_sapling', ['minecraft:spruce_sapling']).id('techopolis:flatlands_oak').stage('superflat_recipes')

    //Skyblock Recipes

    event.shaped('1x minecraft:dirt', ['LLL','L L','LLL'], {L:'#minecraft:leaves'}).id('techopolis:skyblock_dirt').stage('skyblock_recipes')
    event.shaped('1x minecraft:gravel', ['D'], {D:'minecraft:dirt'}).id('techopolis:skyblock_gravel').stage('skyblock_recipes')
    event.shaped('1x minecraft:sand', ['D'], {D:'minecraft:gravel'}).id('techopolis:skyblock_sand').stage('skyblock_recipes')
    event.shaped('1x minecraft:clay', ['D'], {D:'minecraft:sand'}).id('techopolis:skyblock_clay').stage('skyblock_recipes')
    event.shaped(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'), [' L ','LCL',' L '], {L:lapis, C:'ceramicbucket:ceramic_bucket'}).id('techopolis:skyblock_water_bucket').stage('skyblock_recipes')
    event.shaped(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}'), [' L ','LCL',' L '], {L:redstone, C:'ceramicbucket:ceramic_bucket'}).id('techopolis:skyblock_lava_bucket').stage('skyblock_recipes')
    event.shapeless('1x minecraft:birch_sapling', ['minecraft:oak_sapling']).id('techopolis:skyblock_birch').stage('skyblock_recipes')
    event.shapeless('1x minecraft:jungle_sapling', ['minecraft:birch_sapling']).id('techopolis:skyblock_jungle').stage('skyblock_recipes')
    event.shapeless('1x minecraft:dark_oak_sapling', ['minecraft:jungle_sapling']).id('techopolis:skyblock_dark_oak').stage('skyblock_recipes')
    event.shapeless('1x minecraft:acacia_sapling', ['minecraft:dark_oak_sapling']).id('techopolis:skyblock_acacia').stage('skyblock_recipes')
    event.shapeless('1x minecraft:spruce_sapling', ['minecraft:acacia_sapling']).id('techopolis:skyblock_spruce').stage('skyblock_recipes')
    event.shapeless('1x minecraft:oak_sapling', ['minecraft:spruce_sapling']).id('techopolis:skyblock_oak').stage('skyblock_recipes')



    

//    event.shaped('1x minecraft:diamond', ['BBB','BBB','BBB'], {B:'minecraft:oak_log'}).id('techopolis:flatlands_diamond').stage('skyblock_recipes')



//Recipe Staging (Credit EnigmaQuip for the assist )

    const $CraftingRecipe = Java.loadClass('net.minecraft.world.item.crafting.CraftingRecipe')
    function addStageByMod(stage, modid) {
       event.forEachRecipe({ mod: modid }, recipe => {
            if (recipe.originalRecipe instanceof $CraftingRecipe) {
                recipe.stage(stage)
            }
        })
    }

    //(stage, modid)

    addStageByMod("storage_drawers", "storagedrawers")
    addStageByMod("storage_drawers", "framedcompactdrawers")
    addStageByMod("littlelogistics", "little_logistics")
    addStageByMod("thermal", "thermal")
    addStageByMod("ae2", "ae2")
    addStageByMod("refinedastorage", "refinedstorage")
    addStageByMod("mekanism", "mekanism")
    addStageByMod("waystones", "waystones")
    addStageByMod("powah", "powah")
    addStageByMod("beyond_earth", "beyond_earth")
    addStageByMod("compressium", "compressium")
    addStageByMod("constructionwand", "construction_wand")
    addStageByMod("nether", "nether")
    addStageByMod("debris", "debris")
    addStageByMod("extended_crafting", "extended_crafting")
    addStageByMod("framed_blocks", "framedblocks")
    addStageByMod("simple_storage", "storagenetwork")
    addStageByMod("tempad", "tempad")
    addStageByMod("tiab", "tiab")
    addStageByMod("flux_networks", "fluxnetworks")

    // clear stages from certain tag based recipes
    let storageTags = AlmostUnified.getTags().filter(tag => {
        return /forge:storage_blocks/.test(tag)
    })
    storageTags.forEach(tag => {
        let item = AlmostUnified.getPreferredItemForTag(tag)
        event.forEachRecipe({ output: item }, recipe => {
            recipe.stage("")
        })
    })

    let ingotTags = AlmostUnified.getTags().filter(tag => {
        return /forge:ingots/.test(tag)
    })
    ingotTags.forEach(tag => {
        let item = AlmostUnified.getPreferredItemForTag(tag)
        event.forEachRecipe({ output: item }, recipe => {
            recipe.stage("")
        })
    })

    let nuggetsTags = AlmostUnified.getTags().filter(tag => {
        return /forge:nuggets/.test(tag)
    })
    nuggetsTags.forEach(tag => {
        let item = AlmostUnified.getPreferredItemForTag(tag)
        event.forEachRecipe({ output: item }, recipe => {
            recipe.stage("")
        })
    })

    let dustTags = AlmostUnified.getTags().filter(tag => {
        return /forge:dusts/.test(tag)
    })
    dustTags.forEach(tag => {
        let item = AlmostUnified.getPreferredItemForTag(tag)
        event.forEachRecipe({ output: item }, recipe => {
            recipe.stage("")
        })
    })

})


//Login Event

PlayerEvents.loggedIn(event => {

    const {server} = event
    var worldType = server.worldData.worldGenSettings().overworld().getTypeNameForDataFixer().toString().replace("Optional[ResourceKey[minecraft:worldgen/chunk_generator / ", "").replace("]]", "")

    if (!event.player.stages.has('starting_items')) {

        event.player.stages.add('starting_items')
        event.player.give('minecraft:wooden_sword')
        event.player.give('16x minecraft:apple')
        server.runCommandSilent(`gamerule doMobSpawning false`)
        server.runCommandSilent(`gamerule doTraderSpawning false`)
        server.runCommandSilent(`gamerule doWeatherCycle false`)

        //World Type Specific Items To Start With

        if (worldType.contains("minecraft:flat")) {
            event.player.give('1x minecraft:oak_sapling')   
        }
    }


    if (worldType.contains("hexlands:hexlands")) {
        event.player.tell('You are playing Techopolis 2 (Hexlands Mode)')
        event.player.stages.add('hexland_recipes')
    }

    if (worldType.contains("minecraft:flat")) {
        event.player.tell('You are playing Techopolis 2 (Superflat Mode). Additional recipes loaded :)')
        event.player.stages.add('superflat_recipes')        
    }

    if (worldType.contains("minecraft:noise")) {
        event.player.tell('You are playing Techopolis 2 (Default Mode)')
        event.player.stages.add('default_recipes')

    }

    if (worldType.contains("skyblockbuilder:noise_based")) {
        event.player.tell('You are playing Techopolis 2 (Skyblock Mode). Additional recipes loaded :)')
        event.player.stages.add('skyblock_recipes')

    }

    console.log(`Current world type is ${worldType}`)
})	

//Stage Coal & Lapis

BlockEvents.broken(event => {
    const {server, player} = event
    if(event.player.stages.has('coal_and_lapis')) {
        if (player.mainHandItem === 'techopolis:prospectors_pickaxe') {
            if (event.block.hasTag(`techopolis:colored_stone`)){
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/coal_and_lapis`)
            }
        }
    }
})

//Stage Copper and Tin

BlockEvents.broken(event => {
    const {server, player} = event
    if(event.player.stages.has('copper_and_tin')) {
        if (player.mainHandItem === 'techopolis:prospectors_pickaxe') {
            if (event.block.hasTag(`techopolis:colored_stone`)){
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/copper_and_tin`)
            }
        }
    }
})

//Stage Iron and Alumium

BlockEvents.broken(event => {
    const {server, player} = event
    if(event.player.stages.has('iron_and_aluminum')) {
        if (player.mainHandItem === 'techopolis:prospectors_pickaxe') {
            if (event.block.hasTag(`techopolis:colored_stone`)){
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/iron_and_aluminum`)
            }
        }
    }
})

//Stage Redstone

BlockEvents.broken(event => {
    const {server, player} = event
    if(event.player.stages.has('redstone')) {
        if (player.mainHandItem === 'techopolis:prospectors_pickaxe') {
            if (event.block.hasTag(`techopolis:colored_stone`)){
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/redstone`)
            }
        }
    }
})

//Stage Nickel

BlockEvents.broken(event => {
    const {server, player} = event
    if(event.player.stages.has('nickel')) {
        if (player.mainHandItem === 'techopolis:prospectors_pickaxe') {
            if (event.block.hasTag(`techopolis:colored_stone`)){
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/nickel`)
            }
        }
    }
})

//Stage Silver and Iron

BlockEvents.broken(event => {
    const {server, player} = event
    if(event.player.stages.has('silver_and_gold')) {
        if (player.mainHandItem === 'techopolis:prospectors_pickaxe') {
            if (event.block.hasTag(`techopolis:colored_stone`)){
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/silver_and_gold`)
            }
        }
    }
})

//Stage Lead

BlockEvents.broken(event => {
    const {server, player} = event
    if(event.player.stages.has('lead')) {
        if (player.mainHandItem === 'techopolis:prospectors_pickaxe') {
            if (event.block.hasTag(`techopolis:colored_stone`)){
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/lead`)
            }
        }
    }
})

//Stage Crystal

BlockEvents.broken(event => {
    const {server, player} = event
    if(event.player.stages.has('lead')) {
        if (player.mainHandItem === 'techopolis:prospectors_pickaxe') {
            if (event.block.hasTag(`techopolis:colored_stone`)){
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/crystal`)
            }
        }
    }
})

//Stage Diamond and Emerald

BlockEvents.broken(event => {
    const {server, player} = event
    if(event.player.stages.has('diamond_and_emerald')) {
        if (player.mainHandItem === 'techopolis:prospectors_pickaxe') {
            if (event.block.hasTag(`techopolis:colored_stone`)){
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/diamond_and_emerald`)
            }
        }
    }
})

//Stage Osmium

BlockEvents.broken(event => {
    const {server, player} = event
    if(event.player.stages.has('osmium')) {
        if (player.mainHandItem === 'techopolis:prospectors_pickaxe') {
            if (event.block.hasTag(`techopolis:colored_stone`)){
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/osmium`)
            }
        }
    }
})

//Stage Uranium

BlockEvents.broken(event => {
    const {server, player} = event
    if(event.player.stages.has('uranium')) {
        if (player.mainHandItem === 'techopolis:prospectors_pickaxe') {
            if (event.block.hasTag(`techopolis:colored_stone`)){
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/uranium`)
            }
        }
    }
})