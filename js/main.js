'use strict';
const select = document.querySelector('.js_select');
const button = document.querySelector('.js_button');
const message = document.querySelector('.js_message');
const amountOfMoney = document.querySelector('.js_input');
const money = document.querySelector('.js_money');

//selecciono el número que quiero apostar y le doy a jugar
//click en jugar genera un número aleatorio
//si el número aleatorio es igual al seleccionado mensaje en texto "Has ganado el doble de lo apostado . :)"
//sino "Has perdido lo apostado . :("

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function winnerOrNot() {
  let giveMeNumber = getRandomNumber(6);
  if (giveMeNumber == select.value) {
    message.innerHTML = 'Has ganado el doble de lo apostado :).';
  } else {
    message.innerHTML = 'Has perdido lo apostado :(.';
  }
}

function handleClickButton(event) {
  event.preventDefault();
  winnerOrNot();
}

button.addEventListener('click', handleClickButton);
