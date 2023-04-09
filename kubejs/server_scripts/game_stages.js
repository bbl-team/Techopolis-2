// priority: 99

//Recipes Restrictions Handled by Kubejs 

//Reloading the recipes

ServerEvents.loaded((event) => {
    event.server.runCommandSilent('reload')
})

//No Trading

MoreJSEvents.playerStartTrading((event) => {
    // We don't have the stage, so no trades for us :(
    if (!event.player.stages.has("villager_trades")) {
        event.forEachOffers((o, i) => {
            o.disabled = true;
        });
    }
});

//Superflat right click grass for pebbles

BlockEvents.rightClicked(event => {
    const {player, server} = event
    if(event.block.hasTag('minecraft:dirt')){
        if (event.player.stages.has('superflat_recipes') && event.player.isCrouching() && player.mainHandItem === 'minecraft:air' && player.offHandItem === 'minecraft:air') {
            event.player.give('caveopolis:cobblestone_pebble')
        }
    }
})

ServerEvents.recipes(event => {

    event.shaped('1x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: basic_technium}).id('techopolis:b_bucks_1').stage('b_bucks_1')
    event.shaped('4x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: advanced_technium}).id('techopolis:b_bucks_2').stage('b_bucks_2')
    event.shaped('8x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: elite_technium}).id('techopolis:b_bucks_3').stage('b_bucks_3')
    event.shaped('12x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: ultimate_technium}).id('techopolis:b_bucks_4').stage('b_bucks_4')
    event.shaped('16x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: hellish_technium}).id('techopolis:b_bucks_5').stage('b_bucks_5')
    event.shaped('20x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: voided_technium}).id('techopolis:b_bucks_6').stage('b_bucks_6')


//World Exclusive recipes

//    event.shaped('1x minecraft:diamond', ['BBB','BBB','BBB'], {B:'minecraft:dirt'}).id('techopolis:hexlands_diamond').stage('hexland_recipes')


    //Skyblock Recipes

    event.shaped('1x minecraft:dirt', ['LLL','L L','LLL'], {L:'#minecraft:leaves'}).stage('skyblock_recipes')
    event.shaped('1x minecraft:grass_block', ['LLL','LDL','LLL'], {L:'#minecraft:leaves', D:'minecraft:dirt'}).id('techopolis:sky_grass').stage('skyblock_recipes')
    event.shaped('1x minecraft:gravel', ['D'], {D:'minecraft:dirt'}).stage('skyblock_recipes')
    event.shaped('1x minecraft:sand', ['D'], {D:'minecraft:gravel'}).stage('skyblock_recipes')
    event.shaped('1x minecraft:clay', ['D'], {D:'minecraft:sand'}).stage('skyblock_recipes')
    event.shaped(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'), [' L ','LCL',' L '], {L:lapis, C:'ceramicbucket:ceramic_bucket'}).stage('skyblock_recipes')
    event.shaped(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}'), [' L ','LCL',' L '], {L:redstone, C:'ceramicbucket:ceramic_bucket'}).stage('skyblock_recipes')
    
    event.shapeless('1x minecraft:birch_sapling', ['minecraft:oak_sapling']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:jungle_sapling', ['minecraft:birch_sapling']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:dark_oak_sapling', ['minecraft:jungle_sapling']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:acacia_sapling', ['minecraft:dark_oak_sapling']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:spruce_sapling', ['minecraft:acacia_sapling']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:oak_sapling', ['minecraft:spruce_sapling']).stage('skyblock_recipes')

    event.shapeless('1x minecraft:wheat_seeds', ['minecraft:beetroot_seeds']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:beetroot_seeds', ['minecraft:pumpkin_seeds']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:pumpkin_seeds', ['minecraft:melon_seeds']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:melon_seeds', ['immersiveengineering:seed']).stage('skyblock_recipes')
    event.shapeless('1x immersiveengineering:seed', ['minecraft:wheat_seeds']).stage('skyblock_recipes')

    event.shapeless('1x minecraft:apple', ['minecraft:carrot']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:carrot', ['minecraft:potato']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:potato', ['minecraft:sweet_berries']).stage('skyblock_recipes')
    event.shapeless('1x minecraft:sweet_berries', ['minecraft:apple']).stage('skyblock_recipes')

    event.shapeless('2x minecraft:cactus', ['#minecraft:leaves', '#minecraft:leaves']).stage('skyblock_recipes')
    event.shapeless('2x minecraft:kelp', ['minecraft:cactus', 'minecraft:cactus']).stage('skyblock_recipes')
    event.shapeless('2x minecraft:bamboo', ['minecraft:kelp', 'minecraft:kelp']).stage('skyblock_recipes')
    event.shapeless('2x minecraft:sugar_cane', ['minecraft:bamboo','minecraft:bamboo']).stage('skyblock_recipes')

    event.shaped('9x techopolis:grout', ['GSG','SCS','GSG'], {G: gravel, S: sand, C:'minecraft:clay'}).id('techopolis:grout_crafting').stage('skyblock_recipes')
    event.shaped('8x fluxnetworks:flux_dust', ['RRR','ROR','RRR'], {R: redstone, O: 'minecraft:obsidian'}).id('techopolis:flux_in_skyblock').stage('skyblock_recipes')


    
    //Superflat Recipes

    event.shaped('3x minecraft:gravel', ['D C','   ','C D'], {D:'minecraft:dirt',C:cobblestone}).stage('superflat_recipes')
    event.shaped('3x minecraft:grass_block', ['LDL','LDL','LDL'], {L:'#minecraft:leaves', D:'minecraft:dirt'}).id('techopolis:flat_grass').stage('superflat_recipes') //FIX
    event.shaped('3x minecraft:sand', ['D C','   ','C D'], {D:'minecraft:dirt',C:gravel}).stage('superflat_recipes')
    event.shaped('3x minecraft:clay_ball', ['D C','   ','C D'], {D:'minecraft:dirt',C:sand}).stage('superflat_recipes')
    event.shaped(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'), ['L L',' C ','L L'], {L:lapis, C:'ceramicbucket:ceramic_bucket'}).stage('superflat_recipes')
    event.shaped(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}'), ['L L',' C ','L L'], {L:redstone, C:'ceramicbucket:ceramic_bucket'}).stage('superflat_recipes')
   
    event.shapeless('2x minecraft:oak_sapling', ['minecraft:birch_sapling','minecraft:birch_sapling']).stage('superflat_recipes')
    event.shapeless('2x minecraft:birch_sapling', ['minecraft:jungle_sapling','minecraft:jungle_sapling']).stage('superflat_recipes')
    event.shapeless('2x minecraft:jungle_sapling', ['minecraft:dark_oak_sapling','minecraft:dark_oak_sapling']).stage('superflat_recipes')
    event.shapeless('2x minecraft:dark_oak_sapling', ['minecraft:acacia_sapling','minecraft:acacia_sapling']).stage('superflat_recipes')
    event.shapeless('2x minecraft:acacia_sapling', ['minecraft:spruce_sapling','minecraft:spruce_sapling']).stage('superflat_recipes')
    event.shapeless('2x minecraft:spruce_sapling', ['minecraft:oak_sapling','minecraft:oak_sapling']).stage('superflat_recipes')

    
    event.shapeless('3x minecraft:cactus', ['#minecraft:leaves', '#minecraft:leaves', '#minecraft:leaves']).stage('superflat_recipes')
    event.shapeless('3x minecraft:kelp', ['minecraft:cactus', 'minecraft:cactus', 'minecraft:cactus']).stage('superflat_recipes')
    event.shapeless('3x minecraft:bamboo', ['minecraft:kelp', 'minecraft:kelp', 'minecraft:kelp']).stage('superflat_recipes')
    event.shapeless('3x minecraft:sugar_cane', ['minecraft:bamboo','minecraft:bamboo','minecraft:bamboo']).stage('superflat_recipes')

    

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
    addStageByMod("refinedstorage", "refinedstorage")
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
    addStageByMod("kubejs", "skyblock_recipes")
    addStageByMod("kubejs", "superflat_recipes")
    addStageByMod("trash_cans", "trashcans")
    addStageByMod("angel_ring", "angelring")
    addStageByMod("laserio", "laserio")
    addStageByMod("xnet", "xnet")
    addStageByMod("xnet", "rftoolsbase")
    addStageByMod("building_gadgets", "buildinggadgets")
    addStageByMod("elevators", "elevatorid")
    addStageByMod("ender_storage", "enderstorage")
    addStageByMod("chipped", "chipped")

    addStageByMod("ae2", "appmek")
    addStageByMod("ae2", "ae2wtlib")
    addStageByMod("ae2", "aeinfinitybooster")
    addStageByMod("ae2", "merequester")

    addStageByMod("refinedstorage", "rsrequestify")
    addStageByMod("refinedstorage", "extrastorage")
    addStageByMod("refinedstorage", "rsinfinitybooster")
    addStageByMod("refinedstorage", "refinedstorageaddons")
 
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
        event.player.give('minecraft:wooden_axe')
        event.player.give('16x minecraft:apple')
        event.player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:world_types"}'))
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

/* OLD
BlockEvents.broken(event => {
    const {server, player} = event
    if(event.player.stages.has('coal_and_lapis')) {
        if (player.mainHandItem === 'techopolis:prospectors_pickaxe') {
            if (event.block.hasTag(`techopolis:colored_stone`)){
                event.cancel()
                server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} air`)
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/coal_and_lapis`)
            }
        }
    }
})

//Stage Copper and Tin

BlockEvents.broken(event => {
    const {server, player} = event
    if(event.player.stages.has('copper_and_tin') && event.player.stages.has('coal_and_lapis')) {
        if (player.mainHandItem === 'techopolis:prospectors_pickaxe') {
            if (event.block.hasTag(`techopolis:colored_stone`)){
                server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} air`)
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/copper_and_tin`)
                event.player.stages.remove('coal_and_lapis')
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
                server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} air`)
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
                server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} air`)
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
                server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} air`)
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
                server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} air`)
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/silver_and_gold`)
                event.player.stages.remove('iron_and_aluminum')
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
                server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} air`)
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/lead`)
            }
        }
    }
})

//Stage Crystal

BlockEvents.broken(event => {
    const {server, player} = event
    if(event.player.stages.has('crystal')) {
        if (player.mainHandItem === 'techopolis:prospectors_pickaxe') {
            if (event.block.hasTag(`techopolis:colored_stone`)){
                server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} air`)
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
                server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} air`)
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/diamond_and_emerald`)
                event.player.stages.remove('silver_and_gold')

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
                server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} air`)
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
                server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} air`)
                server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot techopolis:ores/uranium`)
            }
        }
    }
})
*/

BlockEvents.broken(event => {
    const { server, player } = event;
    const stages = {
      coal_and_lapis: { loot: 'techopolis:ores/coal_and_lapis'},
      copper_and_tin: { loot: 'techopolis:ores/copper_and_tin'},
      iron_and_aluminum: { loot: 'techopolis:ores/iron_and_aluminum' },
      redstone: { loot: 'techopolis:ores/redstone' },
      nickel: { loot: 'techopolis:ores/nickel' },
      silver_and_gold: { loot: 'techopolis:ores/silver_and_gold'},
      lead: { loot: 'techopolis:ores/lead' },
      crystal: { loot: 'techopolis:ores/crystal' },
      osmium: { loot: 'techopolis:ores/osmium' },
      uranium: { loot: 'techopolis:ores/uranium' },
      diamond_and_emerald: { loot: 'techopolis:ores/diamond_and_emerald'}
    };
  
    for (const [stage, { loot}] of Object.entries(stages)) {
      if (event.player.stages.has(stage)) {
        if (player.mainHandItem === 'techopolis:prospectors_pickaxe') {
          if (event.block.hasTag(`techopolis:colored_stone`)) {
            server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} air`);
            server.runCommandSilent(`loot spawn ${event.block.x} ${event.block.y} ${event.block.z} loot ${loot}`);
          }
        }
      }
    }
})
  
  
  
  