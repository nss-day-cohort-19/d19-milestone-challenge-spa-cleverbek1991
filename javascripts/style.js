'use strict'
var CarLot = (function (style) {
var input = document.getElementById('input');
var btn = document.getElementById('btn');
var currentClass = '';
var description = '';


		style.addBorder = (event, className) => {
			currentClass = event.currentTarget;
			description = currentClass.querySelector('.description');
			input.value = '';
			input.addEventListener('keyup', () => {
				description.innerHTML = '';
				description.innerHTML += input.value;
			});

			currentClass.classList.add(className);
			input.focus();
		},

		style.textInput = (event, className) => {
			input.addEventListener('keyup', (e) => {
				if (e.keyCode === 13) {
					description.innerHTML = input.value;
					currentClass.classList.remove(className);
					input.blur();
				}

			btn.addEventListener('click', () => {
				description.innerHTML = input.value;
				currentClass.classList.remove(className);
			})

			})

		}

		return style;

})(CarLot || {});