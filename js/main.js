'use strict';
const select = document.querySelector('.js_select');
const button = document.querySelector('.js_button');
const message = document.querySelector('.js_message');

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

button.addEventListener('click', (event) => {
  event.preventDefault();
  winnerOrNot();
});

// function addSmileTitle() {
//   title.innerHTML = select.value;
// }

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// function addOrange() {
//   main.classList.remove('yellow');
//   main.classList.add('orange');
// }

// function addYellow() {
//   main.classList.add('yellow');
//   main.classList.remove('orange');
// }

// function changeBackground() {
//   let giveMeNumber = getRandomInt(100);
//   if (giveMeNumber % 2 !== 0) {
//     addOrange();
//   } else {
//     addYellow();
//   }
// }

// function handleClickButton(event) {
//   event.preventDefault();
//   addSmileTitle();
//   changeBackground();
// }

// button.addEventListener('click', handleClickButton);
