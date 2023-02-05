// priority: 0

//Login Event

PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('starting_items')) {

      event.player.stages.add('starting_items')
      event.player.give('minecraft:stone_sword')
      event.player.give(Item.of('minecraft:stone_pickaxe', "{Damage: 10}"))
      event.player.give('30x minecraft:apple')
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