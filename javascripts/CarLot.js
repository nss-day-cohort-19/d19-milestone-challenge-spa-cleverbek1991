'use strict'
var CarLot = (function (original) {
	var inventory = [];

		original.loadInventory = (loadJSON) => {
			var inventoryLoader = new XMLHttpRequest();

			inventoryLoader.addEventListener("load", function (event) {
				inventory = JSON.parse(event.target.responseText).cars;
				loadJSON(inventory);
			})

			inventoryLoader.addEventListener("error", function() {
	            console.log("ERROR-CANNOT LOAD")
	        })

			inventoryLoader.open("GET", "inventory.json");
			inventoryLoader.send();

    	},

		original.getInventory = function () {
			console.log(inventory);
			return inventory;
        };

		return original;

})(CarLot || {});