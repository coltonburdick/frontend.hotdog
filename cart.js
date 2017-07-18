// Cart Application.

// Anonymous function.
window.modCart = (function() {
    // Variables.
    var cartItem = [];

    // Ensurement function.
    function moduleEnsure() {
        c.log("The Cart Module is working correctly.");
    }

    // Add item.
    function cartAddItem(inName, inPrice) {
        cartItem[cartItem.length] = new objCartItem(inName, inPrice);
    }

    // Get quantity.
    function cartGetQuant(inId) {
        return(cartItem[inId].itemQuant);
    }

    // Get entire array.
    function cartGetArray() {
        return(cartItem);
    }
	
	// Get one item.
    function cartGetItem(inId) {
        return(cartItem[inId]);
    }

    // Update item.
    function cartUpdateItem(inId, inQuant) {
        cartItem[inId].itemQuant = inQuant;
    }

    // Load cart.
    function cartLoadCart() {
        //
    }

    // Get total.
    function cartGetTotal() {
        var tre = 0;
        for(var i = 0; i < cartItem.length; i++) {
            tre += (cartItem[i].itemPrice * cartItem[i].itemQuant);
        }
        return(Math.round(tre * 100) / 100);
    }

    // Return.
    return {
        moduleEnsure: moduleEnsure,
        cartAddItem: cartAddItem,
        cartGetQuant: cartGetQuant,
        cartUpdate: cartUpdateItem,
        cartLoadCart: cartLoadCart,
        cartGetTotal: cartGetTotal,
        cartUpdateItem: cartUpdateItem,
        cartGetArray: cartGetArray,
		cartGetItem: cartGetItem
    }
	
	// Item class.
	function objCartItem(inName, inPrice) {
		this.itemName = inName;
		this.itemPrice = inPrice;
		this.itemQuant = 0;
	}

    // Module end.
})();