'use strict';
const select = document.querySelector('.js_select');
const button = document.querySelector('.js_button');
const message = document.querySelector('.js_message');
const amountOfMoney = document.querySelector('.js_input');
const money = document.querySelector('.js_money');
const balance = document.querySelector('.js_balance');

//selecciono el número que quiero apostar y le doy a jugar
//click en jugar genera un número aleatorio
//si el número aleatorio es igual al seleccionado mensaje en texto "Has ganado el doble de lo apostado . :)"
//sino "Has perdido lo apostado . :("

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//lo que yo escriba en amountOfMoney cuando le de a jugar
//si el número aleatorio es igual al que he elegido, gano y si gano muliplique *2 el amountOfMoney
//si pierdo el money = a 0

function editDom(text, num) {
  message.innerHTML = text;
  balance.value = num;
}

function winnerOrNot() {
  let giveMeNumber = getRandomNumber(6);
  if (giveMeNumber == select.value) {
    let total = parseInt(balance.value) + parseInt(amountOfMoney.value * 2);
    editDom('Has ganado el doble de lo apostado :).', total);
  } else {
    let total = 0;
    editDom('Has perdido lo apostado :(.', total);
  }
}

function handleClickButton(event) {
  event.preventDefault();
  winnerOrNot();
}

button.addEventListener('click', handleClickButton);
