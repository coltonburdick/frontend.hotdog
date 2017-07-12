// Main Application.

// Anonymous function.
(function(modMain) {
    // Module initialized.
    c.log("Main module successfully initialized.");

    // Onload (start program).
    window.onload = function() {
        // Testing.
        modMenu.moduleEnsure();
        modCart.moduleEnsure();
        modUser.moduleEnsure();
        c.log("Program wholly loaded and initiated.");

        // Adding menu items.
        sysAddItem("Hot Dog", 0.99, "meal");
        sysAddItem("Hot Dog w/ Yellow Mustard", 1.49, "meal");
        sysAddItem("Hot Dog w/ Spicy Brown Mustard", 1.49, "meal");
        sysAddItem("The King Special with a Ton of Ketchup and Mustard", 5.00, "meal");
        sysAddItem("Decked Out Hot Dog", 12.29, "meal");
        sysAddItem("Hot Dog Hair Clip", 11.07, "meal");
        sysAddItem("Spring Water", 0.49, "drink");
        sysAddItem("Coca-Cola", 1.49, "drink");
        sysAddItem("Sprite", 1.49, "drink");
        sysAddItem("Hi-C Orange Lavaburst", 1.49, "drink");
        sysAddItem("Coffee", 12.29, "drink");
        sysAddItem("Ketchup Water", 0.04, "drink");
        sysAddItem("Ketchup on Someone's Head While They're Eating a Hot Dog", 0, "snack");
        sysAddItem("Corn Dog", 0.74, "snack");
        sysAddItem("Sachertorte", 12.29, "snack");
    }

    // Module end.
})(window.modMenu || (window.modMenu = {}) || window.modCart || (window.modCart = {}) || window.modUser || (window.modUser = {})); // IIFE Function

// Adding item to system.
function sysAddItem(inName, inPrice, inCat) {
    // Adding to menu app.
    modMenu.menuAddItem(inName, inPrice, inCat);

    // Adding to cart app.
    modCart.cartAddItem(inName, inPrice);

    // DOM Boss.
    domAddMenu(inName, inPrice, inCat);
    //domAddCart(inName, inPrice);
}

// Adding menu item to DOM Boss.
function domAddMenu(inName, inPrice, inCat) {
    // Initialize row.
    var tempRow = document.createElement("tr");
    tempRow.setAttribute("id", "menuItem");

    // Adding name.
    var tempAdd = document.createElement("td");
    tempAdd.innerHTML = inName;
    tempRow.appendChild(tempAdd);

    // Adding price.
    tempAdd = document.createElement("td");
    tempAdd.innerHTML = "$" + inPrice;
    tempRow.appendChild(tempAdd);

    // Adding button.
    tempAdd = document.createElement("button");
    tempAdd.textContent = "Add";
    tempAdd.buttonId = modMenu.menuGetLength() - 1;
    tempAdd.addEventListener('click', function() { buttonAdd(this.buttonId);} );
    tempRow.appendChild(tempAdd);

    // Finalizing.
    document.getElementById("tablemenubody" + inCat).appendChild(tempRow);
}

// Adding cart item to DOM Boss.
function domAddCart(inName, inPrice, inId) {
    // Initialize row.
    var tempRow = document.createElement("tr");
    tempRow.setAttribute("id", "cartItem" + inId);

    // Adding name.
    var tempAdd = document.createElement("td");
    tempAdd.innerHTML = inName;
    tempRow.appendChild(tempAdd);

    // Adding price.
    tempAdd = document.createElement("td");
    tempAdd.innerHTML = "$" + inPrice;
    tempRow.appendChild(tempAdd);

    // Adding quantity.
    tempAdd = document.createElement("input");
    tempAdd.setAttribute("type", "number");
    tempAdd.setAttribute("min", "1");
    tempAdd.setAttribute("max", "10");
    tempAdd.setAttribute("disabled", "true");
    tempAdd.setAttribute("id", "cartQuant" + inId);
    tempAdd.value = 1;
    tempRow.appendChild(tempAdd);

    // Adding remove button.
    tempAdd = document.createElement("button");
    tempAdd.textContent = "Remove";
    tempAdd.buttonId = inId;
    tempAdd.addEventListener('click', function() { buttonRemove(this.buttonId);} );
    tempRow.appendChild(tempAdd);

    // Finalizing.
    document.getElementById("tablecartbody").appendChild(tempRow);
}

// Add to cart button.
function buttonAdd(inId) {
    c.log("Add button pressed. ID " + inId);

    // Activating.
    if (modCart.cartGetQuant(inId) < 1) {
        modCart.cartUpdateItem(inId, 1);
        domAddCart(modMenu.menuGetName(inId), modMenu.menuGetPrice(inId), inId);
    }

    // Incrementing.
    else if (modCart.cartGetQuant(inId) < 10) {
        modCart.cartUpdateItem(inId, modCart.cartGetQuant(inId) + 1);
    }

    // DOM Boss.
    document.getElementById("cartQuant" + inId).value = modCart.cartGetQuant(inId);
    updateTotal();
}

// Remove from cart button.
function buttonRemove(inId) {
    // Cart.
    modCart.cartUpdateItem(inId, 0);

    // DOM Boss.
    document.getElementById("tablecartbody").removeChild(document.getElementById("cartItem" + inId));
    updateTotal();
}

// Updating quantity.
function updateQuant() {
    //
}

// Updating cart total.
function updateTotal() {
    c.log(document.getElementById("carttotal"));
    c.log(document.getElementById("carttotal").innerHtml);
    c.log(document.getElementById("carttotal").value);
    tV = modCart.cartGetTotal();
    if (Math.round(tV) == tV) tV += ".00";
    else if (Math.round(tV * 10) == (tV * 10)) tV += "0";
    document.getElementById("carttotal").innerText = "Total Price: $" + tV;
}