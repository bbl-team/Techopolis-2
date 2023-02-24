import mods.itemstages.ItemStages;
import mods.itemstages.Restriction;

//RECIPE STAGES  (stage, mod id)

//mods.recipestages.Recipes.setRecipeStageByMod("storage_drawers", "storagedrawers");
//mods.recipestages.Recipes.setRecipeStageByMod("storage_drawers", "framedcompactdrawers");
//mods.recipestages.Recipes.setRecipeStageByMod("littlelogistics", "little_logistics");
//mods.recipestages.Recipes.setRecipeStageByMod("thermal", "thermal");
//mods.recipestages.Recipes.setRecipeStageByMod("ae2", "ae2");
//mods.recipestages.Recipes.setRecipeStageByMod("refinedstorage", "refinedstorage");
//mods.recipestages.Recipes.setRecipeStageByMod("mekanism", "mekanism");
//mods.recipestages.Recipes.setRecipeStageByMod("waystones", "waystones");
//mods.recipestages.Recipes.setRecipeStageByMod("powah", "powah");
//mods.recipestages.Recipes.setRecipeStageByMod("beyond_earth", "beyond_earth");
//mods.recipestages.Recipes.setRecipeStageByMod("compressium", "compressium");
//mods.recipestages.Recipes.setRecipeStageByMod("framed_blocks", "framedblocks");


//REMOVED DONT NEED TO

ItemStages.createModRestriction("ftbquests", "null");
ItemStages.createModRestriction("itemfilters", "null");

//BLOCKS ITEM STAGES (mod id, stage)

ItemStages.createModRestriction("storagedrawers", "storage_drawers");
ItemStages.createModRestriction("framedcompactdrawers", "storage_drawers");
ItemStages.createModRestriction("framedblocks", "framed_blocks");
ItemStages.createModRestriction("storagenetwork", "simple_storage");
ItemStages.createModRestriction("fluxnetworks", "flux_networks");
ItemStages.createModRestriction("tempad", "tempad");

ItemStages.createModRestriction("littlelogistics", "little_logistics");
ItemStages.createModRestriction("thermal", "thermal");
ItemStages.createModRestriction("ae2", "ae2");
ItemStages.createModRestriction("refinedstorage", "refinedstorage");
ItemStages.createModRestriction("mekanism", "mekanism");
ItemStages.createModRestriction("waystones", "waystones");
ItemStages.createModRestriction("powah", "powah");

ItemStages.createModRestriction("beyond_earth", "beyond_earth");
ItemStages.createModRestriction("constructionwand", "construction_wand");
ItemStages.restrict(<item:beyond_earth:nasa_workbench>, "beyond_earth");


ItemStages.createModRestriction("compressium", "compressium");
ItemStages.createModRestriction("immersive_aircraft", "immersive_aircraft");

ItemStages.restrict(<tag:items:techopolis:extended_crafting>, "extended_crafting");









val storage_drawers = ItemStages.createModRestriction("storagedrawers", "storage_drawers");
val framed_drawers = ItemStages.createModRestriction("framedcompactdrawers", "storage_drawers");

//storage_drawers.preventInventory(false);   // Allows item to be kept in inventories.
//storage_drawers.preventAttacking(false);   // Allows item to be used as a weapon.
//storage_drawers.preventPickup(false);      // Allows item to be picked up.
//storage_drawers.preventUsing(false);       // Allows item to be used (left/right click).
//storage_drawers.setHiddenInJEI(true);     // Allows item to be visible in JEI.



//framed_drawers.preventInventory(false);   // Allows item to be kept in inventories.
//framed_drawers.preventAttacking(false);   // Allows item to be used as a weapon.
//framed_drawers.preventPickup(false);      // Allows item to be picked up.
//framed_drawers.preventUsing(false);       // Allows item to be used (left/right click).
//framed_drawers.setHiddenInJEI(false);     // Allows item to be visible in JEI.

