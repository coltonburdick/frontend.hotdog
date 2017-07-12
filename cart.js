// Cart Application.

// Anonymous function.
window.modCart = (function() {
    // Variables.
    var cartFoodName = [];
    var cartFoodPrice = [];
    var cartFoodQuant = [];

    // Ensurement function.
    function moduleEnsure() {
        c.log("The Cart Module is working correctly.");
    }

    // Add item.
    function cartAddItem(inName, inPrice) {
        cartFoodQuant[cartFoodName.length] = 0;
        cartFoodName[cartFoodName.length] = inName;
        cartFoodPrice[cartFoodPrice.length] = inPrice;
    }

    // Get name.
    function cartGetName(inId) {
        return(cartFoodName[inId]);
    }

    // Get price.
    function cartGetPrice(inId) {
        return(cartFoodPrice[inId]);
    }

    // Get quantity.
    function cartGetQuant(inId) {
        return(cartFoodQuant[inId]);
    }

    // Update item.
    function cartUpdateItem(inId, inQuant) {
        cartFoodQuant[inId] = inQuant;
    }

    // Load cart.
    function cartLoadCart() {
        //
    }

    // Get total.
    function cartGetTotal() {
        var tre = 0;
        for(var i = 0; i < cartFoodPrice.length; i++) {
            tre += (cartFoodPrice[i] * cartFoodQuant[i]);
        }
        return(Math.round(tre * 100) / 100);
    }

    // Return.
    return {
        moduleEnsure: moduleEnsure,
        cartAddItem: cartAddItem,
        cartGetName: cartGetName,
        cartGetPrice: cartGetPrice,
        cartGetQuant: cartGetQuant,
        cartUpdate: cartUpdateItem,
        cartLoadCart: cartLoadCart,
        cartGetTotal: cartGetTotal,
        cartUpdateItem: cartUpdateItem
    }

    // Module end.
})();