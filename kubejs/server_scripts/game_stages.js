// priority: 99

//Recipes Restrictions Handled by Kubejs 

ServerEvents.recipes(event => {

    event.shaped('1x opolisutilities:b_bucks', ['BBB','BTB','BBB'], {B:bronze_ingot, T: basic_technium}).id('techopolis:b_bucks_1').stage('b_bucks_1')



//Recipe Staging (Credit EnigmaQuip for the assist )

    const $CraftingRecipe = Java.loadClass('net.minecraft.world.item.crafting.CraftingRecipe')
    function addStageByMod(stage, modid) {
       event.forEachRecipe({ mod: modid }, recipe => {
            if (recipe.originalRecipe instanceof $CraftingRecipe) {
                recipe.stage(stage)
            }
        })
    }

    addStageByMod("storage_drawers", "storagedrawers")
    addStageByMod("storage_drawers", "framedcompactdrawers")
    addStageByMod("littlelogistics", "little_logistics")
    addStageByMod("thermal", "thermal")
    addStageByMod("all", "ae2")
    addStageByMod("all", "refinedstorage")
    addStageByMod("mekanism", "mekanism")
    addStageByMod("waystones", "waystones")
    addStageByMod("powah", "powah")
    addStageByMod("beyond_earth", "beyond_earth")
    addStageByMod("compressium", "compressium")


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

})


//Login Event

PlayerEvents.loggedIn(event => {

    const {server} = event
    if (!event.player.stages.has('starting_items')) {

      event.player.stages.add('starting_items')
      event.player.give('minecraft:wooden_sword')
      event.player.give('16x minecraft:apple')
      server.runCommandSilent(`gamerule doMobSpawning false`)
      server.runCommandSilent(`gamerule doTraderSpawning false`)
      server.runCommandSilent(`gamerule doWeatherCycle false`)

    }
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