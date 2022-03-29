'use strict';
const selectNumber = document.querySelector('.js_selectNumber');
const playButton = document.querySelector('.js_playButton');
const howMuchMoney = document.querySelector('.js_howMoney');
const message = document.querySelector('.js_message');
const totalMoney = document.querySelector('.js_totalMoney');

//el saldo debe estar por defecto en 50. El valor del saldo debe ser 50 al iniciar el juego
//se debe ir actualizando
const initialNumber = 50;
totalMoney.innerHTML = `Saldo: ${initialNumber}`;
//generar un número aleatorio del 1 al 6
//comparar el número con el seleccionado
//si coincide pintar Has ganado el doble de lo apostado :D
//sino Has perdido lo apostado :(
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//si pierdo restará lo apostado
//si gano sumará al saldo total
function resultPossitive() {
  let totalNumber = parseInt(initialNumber) + parseInt(howMuchMoney.value) * 2;

  totalMoney.innerHTML = `Saldo: ${totalNumber}`;
}
function resultNegative() {
  let totalNumber = parseInt(initialNumber) - parseInt(howMuchMoney.value);

  totalMoney.innerHTML = `Saldo: ${totalNumber}`;
}
function giveText(text) {
  message.innerHTML = text;
}

function randomNumber() {
  let giveMeNumber = getRandomNumber(6);
  if (giveMeNumber == selectNumber.value) {
    giveText('Has ganado el doble de lo apostado :D');
    resultPossitive();
  } else {
    giveText('Has perdido lo apostado :(');
    resultNegative();
  }
}

function handleClickButton(event) {
  event.preventDefault();
  randomNumber();
}

playButton.addEventListener('click', handleClickButton);

//el juego finaliza cuando totalMoney es = 200 // no se puede apostar +de 100

// //solo se puede apostar si totalMoney <= howMuchMoney
// //si totalMoney es <=200
// function maxMoney() {
//   if (howMuchMoney.value < totalMoney) {
//     totalMoney.innerHTML = 'No tienes suficiente dinero, inténtalo de nuevo';
//     playButton.innerHTML = 'Reiniciar Juego';
//   }
// }
