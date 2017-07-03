const currencySelector = document.getElementsByClassName('currency-selector__selector')[0];

const selectorOuptut = document.getElementsByClassName('currency-selector__value')[0];



currencySelector.addEventListener('change', function () {

	const selectedValue = currencySelector.options[currencySelector.selectedIndex].value;

	selectorOuptut.innerHTML = selectedValue;
});


