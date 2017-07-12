// User Application.

// Anonymous function.
window.modUser = (function() {
    // Variables.

    // Ensurement function.
    function moduleEnsure() {
        c.log("The User Module is working correctly.");
    }

    // Return.
    return {
        moduleEnsure: moduleEnsure
    }

    // Module end.
})();