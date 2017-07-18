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

        // Event handler (add to cart).
        document.getElementById("menudiv").addEventListener("click", function(event) {
			if (event.target.getAttribute("class") == "butAdd") {buttonAdd(event.target.buttonId);}
        });
		
		// Event handler (remove from cart).
        document.getElementById("cartdiv").addEventListener("click", function(event) {
			if (event.target.getAttribute("class") == "butRem") {buttonRemove(event.target.buttonId);}
        });

		// Initializing menu.
		modMenu.menuInitiailize();
		
		// Adding menu items to cart and DOM Boss.
		tempMenu = modMenu.menuGetArray();
		for(i = 0; i < tempMenu.length; i++) {
			domAddMenu(tempMenu[i].itemName, tempMenu[i].itemPrice, tempMenu[i].itemCat, i);
			modCart.cartAddItem(tempMenu[i].itemName, tempMenu[i].itemPrice);
		}
    }

    // Module end.
})(window.modMenu || (window.modMenu = {}) || window.modCart || (window.modCart = {}) || window.modUser || (window.modUser = {})); // IIFE Function

// Adding item to system.
/*function sysAddItem(inName, inPrice, inCat) {
    // Adding to menu app.
    modMenu.menuAddItem(inName, inPrice, inCat);

    // Adding to cart app.
    modCart.cartAddItem(inName, inPrice);

    // DOM Boss.
    domAddMenu(inName, inPrice, inCat);
    //domAddCart(inName, inPrice);
}*/

// Adding menu item to DOM Boss.
function domAddMenu(inName, inPrice, inCat, inId) {
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
    tempData = document.createElement("td");
    tempAdd = document.createElement("button");
    tempAdd.setAttribute("class", "butAdd");
    tempAdd.textContent = "Add";
    tempAdd.buttonId = inId;
    //tempAdd.addEventListener('click', function() { buttonAdd(this.buttonId);} );
    tempData.appendChild(tempAdd);
    tempRow.appendChild(tempData);

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
    tempData = document.createElement("td");
    tempAdd = document.createElement("input");
    tempAdd.setAttribute("type", "number");
    tempAdd.setAttribute("min", "1");
    tempAdd.setAttribute("max", "10");
    tempAdd.setAttribute("disabled", "true");
    tempAdd.setAttribute("id", "cartQuant" + inId);
    tempAdd.value = 1;
    tempData.appendChild(tempAdd);
    tempRow.appendChild(tempData);

    // Adding remove button.
    tempData = document.createElement("td");
    tempAdd = document.createElement("button");
    tempAdd.setAttribute("class", "butRem");
    tempAdd.textContent = "Remove";
    tempAdd.buttonId = inId;
    //tempAdd.addEventListener('click', function() { buttonRemove(this.buttonId);} );
    tempData.appendChild(tempAdd);
    tempRow.appendChild(tempData);

    // Finalizing.
    document.getElementById("tablecartbody").appendChild(tempRow);
}

// Add to cart button.
function buttonAdd(inId) {
    c.log("Add button pressed. ID " + inId);

    // Activating.
    if (modCart.cartGetQuant(inId) < 1) {
        modCart.cartUpdateItem(inId, 1);
        domAddCart(modMenu.menuGetItem(inId).itemName, modMenu.menuGetItem(inId).itemPrice, inId);
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

// Main event handler. [put in stasis]
/*function clickHandle(butIn) {
    if (butIn.getAttribute("class") == "butAdd") {buttonAdd(butIn.buttonId);}
    else if (butIn.getAttribute("class") == "butRem") {buttonRemove(butIn.buttonId);}
}*/