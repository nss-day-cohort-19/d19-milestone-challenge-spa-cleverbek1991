'use strict'
var CarLot = (function (events) {

		events.activateEvents = () => {
			var carCard = document.getElementsByClassName('carCard');
			for (var i = 0; i < carCard.length; i++) {
				carCard[i].addEventListener('click', (event) => {
					CarLot.addBorder(event, 'higherBorderWidth');

					CarLot.textInput(event, 'higherBorderWidth');
				});
			}
		}

		return events;

})(CarLot || {});