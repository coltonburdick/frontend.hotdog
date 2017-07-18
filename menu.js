// Menu Application.

// Anonymous function.
window.modMenu = (function() {
    // Variables.
    var menuItem = [];

    // Ensurement function.
    function moduleEnsure() {
        c.log("The Menu Module is working correctly.");
    }

    // Adding a menu item.
    function menuAddItem(inName, inPrice, inCat) {
		menuItem[menuItem.length] = new objMenuItem(inName, inPrice, inCat);
    }

    // Getting array length.
    function menuGetLength() {
        return(menuItem.length);
    }
	
	// Getting whole array.
	function menuGetArray() {
        return(menuItem);
    }
	
	// Getting one item.
	function menuGetItem(inId) {
        return(menuItem[inId]);
    }

	// Initializing menu.
	function menuInitiailize() {
		// Temporary hard code.
		menuAddItem("Hot Dog", 0.99, "meal");
        menuAddItem("Hot Dog w/ Yellow Mustard", 1.49, "meal");
        menuAddItem("Hot Dog w/ Spicy Brown Mustard", 1.49, "meal");
        menuAddItem("The King Special with a Ton of Ketchup and Mustard", 5.00, "meal");
        menuAddItem("Decked Out Hot Dog", 12.29, "meal");
        menuAddItem("Spring Water", 0.49, "drink");
        menuAddItem("Coca-Cola", 1.49, "drink");
        menuAddItem("Sprite", 1.49, "drink");
        menuAddItem("Hi-C Orange Lavaburst", 1.49, "drink");
        menuAddItem("Coffee", 12.29, "drink");
        menuAddItem("Ketchup Water", 0.04, "drink");
        menuAddItem("Corn Dog", 0.74, "snack");
	}
	
    // Return.
    return {
        moduleEnsure: moduleEnsure,
        menuGetLength: menuGetLength,
		menuGetArray: menuGetArray,
		menuGetItem: menuGetItem,
		menuInitiailize: menuInitiailize
    }

	// Item class.
	function objMenuItem(inName, inPrice, inCat) {
		this.itemName = inName;
		this.itemPrice = inPrice;
		this.itemCat = inCat;
	}
	
    // Module end.
})();