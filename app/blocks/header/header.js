/* const currencySelector = document.getElementsByClassName('currency-selector__selector')[0];

const selectorOuptut = document.getElementsByClassName('currency-selector__value')[0];



currencySelector.addEventListener('change', function () {

	const selectedValue = currencySelector.options[currencySelector.selectedIndex].value;

	selectorOuptut.innerHTML = selectedValue;
}); */

import $ from 'jquery';

const valueList = $('.currency-selector__value');

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

function hideMenu() {
	console.log('I"m clicked');
	$('.main-menu__menu').slideUp(600);
	$('.main-menu').off('click', hideMenu);
}

function showMenu() {
	console.log('I"m button');
	$('.main-menu__menu').slideDown(600);
	$('.main-menu').on('click', hideMenu);
}

$('.main-menu').on('click', showMenu);
