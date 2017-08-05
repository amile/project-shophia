/* const currencySelector = document.getElementsByClassName('currency-selector__selector')[0];

const selectorOuptut = document.getElementsByClassName('currency-selector__value')[0];



currencySelector.addEventListener('change', function () {

	const selectedValue = currencySelector.options[currencySelector.selectedIndex].value;

	selectorOuptut.innerHTML = selectedValue;
}); */

import $ from 'jquery';

const valueList = $('.currency-selector__value');

/* work variant

$('.currency-selector').click(function () {
	Array.prototype.forEach.call(valueList, function (el) {
		$(el).addClass('currency-selector__value_selected');
	});
	Array.prototype.forEach.call(valueList, function (el) {
		$(el).click(changeSelectedValue);
	});
});
function changeSelectedValue(event) {
	event.stopPropagation();
	const currentValue = $(this).text();
	const lastValue = $(valueList[0]).text();
	$(this).text(lastValue);
	$(valueList[0]).text(currentValue);
	Array.prototype.forEach.call(valueList, function (el) {
		console.log('none');
		if (el !== valueList[0]) {
			$(el).removeClass('currency-selector__value_selected');
		}
	});
	Array.prototype.forEach.call(valueList, function (el) {
		$(el).off();
	});
} */
function changeSelectedValue(event) {
	event.stopPropagation();
	const currentValue = $(this).text();
	const lastValue = $(valueList[0]).text();
	$(this).text(lastValue);
	$(valueList[0]).text(currentValue);
	$('select').val(currentValue);
	$('.currency-selector__value').removeClass('currency-selector__value_display_block');
	$(valueList[0]).addClass('currency-selector__value_display_block');
	$('.currency-selector__value').off('click', changeSelectedValue);
	$('.currency-selector').submit();
}
$('.currency-selector').click(function () {

	$('.currency-selector__value').addClass('currency-selector__value_display_block');
	$('.currency-selector__value').on('click', changeSelectedValue);
});

