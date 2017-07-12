// Menu Application.

// Anonymous function.
window.modMenu = (function() {
    // Variables.
    var menuFoodName = [];
    var menuFoodPrice = [];
    var menuFoodCat = [];

    // Ensurement function.
    function moduleEnsure() {
        c.log("The Menu Module is working correctly.");
    }

    // Adding a menu item.
    function menuAddItem(inName, inPrice, inCat) {
        menuFoodName[menuFoodName.length] = inName;
        menuFoodPrice[menuFoodPrice.length] = inPrice;
        menuFoodCat[menuFoodPrice.length] = inCat;
    }

    // Getting the name of a menu item.
    function menuGetName(inId) {
        return(menuFoodName[inId]);
    }

    // Getting the price of a menu item.
    function menuGetPrice(inId) {
        return(menuFoodPrice[inId]);
    }

    // Getting the category of a menu item.
    function menuGetCat(inId) {
        return(menuFoodCat[inId]);
    }

    // Getting array length.
    function menuGetLength() {
        return(menuFoodName.length);
    }

    // Return.
    return {
        moduleEnsure: moduleEnsure,
        menuAddItem: menuAddItem,
        menuGetName: menuGetName,
        menuGetPrice: menuGetPrice,
        menuGetCat: menuGetCat,
        menuGetLength: menuGetLength
    }

    // Module end.
})();