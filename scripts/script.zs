import mods.itemstages.ItemStages;
import mods.itemstages.Restriction;

//RECIPE STAGES

mods.recipestages.Recipes.setRecipeStageByMod("storage_drawers", "storagedrawers");
mods.recipestages.Recipes.setRecipeStageByMod("storage_drawers", "framedcompactdrawers");


//BLOCKS ITEM STAGES

ItemStages.createModRestriction("storagedrawers", "storage_drawers");
ItemStages.createModRestriction("framedcompactdrawers", "storage_drawers");

ItemStages.createModRestriction("extendedcrafting", "all");
ItemStages.createModRestriction("immersive_aircraft", "all");


ItemStages.createModRestriction("littlelogistics", "little_logistics");
ItemStages.createModRestriction("thermal", "thermal");
ItemStages.createModRestriction("ae2", "all");
ItemStages.createModRestriction("refinedstorage", "all");
ItemStages.createModRestriction("mekanism", "mekanism");
ItemStages.createModRestriction("waystones", "waystones");
ItemStages.createModRestriction("powah", "powah");
ItemStages.createModRestriction("beyond_earth", "beyond_earth");
ItemStages.createModRestriction("compressium", "beyond_earth");









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