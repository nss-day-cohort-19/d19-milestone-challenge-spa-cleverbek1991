'use strict'
function populatePage (inventory) {
	var container = document.querySelector('.container');

  // Loop over the inventory and populate the page


		for (var i = 0; i < inventory.length; i++) {
			var carInventory = inventory[i];
			container.innerHTML += `
										<div class="col-sm-4 carCard">
											<h2>${carInventory.make}</h2>
											<h3>${carInventory.model}</h3>
											<h4>${carInventory.year}</h4>
											<h4>$${carInventory.price}.00</h4>
											<p class="description">${carInventory.description}</p>
										</div>
									`;
		}
  // Now that the DOM is loaded, establish all the event listeners needed
CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);