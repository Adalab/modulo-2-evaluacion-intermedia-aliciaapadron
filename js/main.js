'use strict';
const selectNumber = document.querySelector('.js_selectNumber');
const playButton = document.querySelector('.js_playButton');
const howMuchMoney = document.querySelector('.js_howMoney');
const message = document.querySelector('.js_message');
const totalMoney = document.querySelector('.js_totalMoney');
const whoWins = document.querySelector('.js_whoWins');

//el saldo debe estar por defecto en 50. El valor del saldo debe ser 50 al iniciar el juego
//se debe ir actualizando
let initialNumber = 50;
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
  initialNumber = parseInt(initialNumber) + parseInt(howMuchMoney.value) * 2;

  totalMoney.innerHTML = `Saldo: ${initialNumber}`;
}
function resultNegative() {
  initialNumber = parseInt(initialNumber) - parseInt(howMuchMoney.value);

  totalMoney.innerHTML = `Saldo: ${initialNumber}`;
}
function giveText(text) {
  message.innerHTML = text;
}
function giveSecondText(textSecond) {
  whoWins.innerHTML = textSecond;
}

function randomNumber() {
  let giveMeNumber = getRandomNumber(6);
  if (giveMeNumber == selectNumber.value) {
    giveText('Has ganado el doble de lo apostado 🤩');
    giveSecondText('Felicidades, ¡has haganado!🤑');
    resultPossitive();
  } else {
    giveText('Has perdido lo apostado 😭');
    giveSecondText('Ups...te ha ganado una máquina 🎰');
    resultNegative();
  }
}

//no se puede apostar + de lo que tengo
//el juego finaliza cuando totalMoney es = 200 // no se puede apostar +de 100

function canPlay(howMuchMoney, totalMoney) {
  if (parseInt(howMuchMoney) <= parseInt(totalMoney)) {
    return true;
  } else {
    return false;
  }
}

// si totalMoney <= 200 se ejecutará la función randonNumber //sino
function isMinus200(totalMoney) {
  if (parseInt(totalMoney) <= 200) {
    return true;
  } else {
    return false;
  }
}
//cuando click en botón reinicar vuelve a salir jugar
//en el select la primera opción
//howMuchMoney se vacíe
//totalMoney `Saldo: ${initialNumber}` initalNumber=50

function handleResertButton(event) {
  event.preventDefault();
  if (playButton.innerHTML == 'Reiniciar juego') {
    playButton.innerHTML = 'Jugar';
    selectNumber.selectedIndex = 0;
    howMuchMoney.value = '';
    initialNumber = 50;
    totalMoney.innerHTML = `Saldo: ${initialNumber}`;
    message.innerHTML = '';
    whoWins.innerHTML = '';
  }
}

function handleClickButton(event) {
  event.preventDefault();
  if (selectNumber.value == '' || howMuchMoney.value == '') {
    alert('Debes rellenar los campos');
    return;
  }
  let coin = totalMoney.innerHTML.split(' ');

  if (canPlay(howMuchMoney.value, coin[1])) {
    if (isMinus200(coin[1])) {
      randomNumber();
    } else {
      playButton.innerHTML = 'Reiniciar juego';
      totalMoney.innerHTML = 'Has llegado al tope,¡nos vemos otro día!';
    }
  } else {
    playButton.innerHTML = 'Reiniciar juego';
    totalMoney.innerHTML = 'No tienes sufienciente dinero, inténtalo de nuevo';
  }
}

playButton.addEventListener('click', handleClickButton);
playButton.addEventListener('click', handleResertButton);
