import {calculate} from "./calculator.js";
// TODO: Faire la manipulation du DOM dans ce fichier
const buttonCal = document.getElementById("calcul");
const buttonInput = document.getElementById("input");
const buttonAc = document.getElementById("reset");
const buttonClear = document.getElementById("clear");
const buttonPlusoumoins = document.getElementById("plusoumoins");
const buttonPourcentage = document.getElementById("percentage");
const buttonDiv = document.getElementById("divideby");
const buttonChiffres = document.querySelectorAll(".numpad");
const buttonMult = document.getElementById("times");
const buttonSoustrac = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const buttonEgal = document.getElementById("equals");
plusButton.addEventListener('click', (event) => {
  event.preventDefault();
  buttonCal.innerHTML = `${(buttonInput.value)}+`;
  buttonInput.value = "";
})
buttonMult.addEventListener('click', (event) => {
  event.preventDefault();
  buttonCal.innerHTML = `${(buttonInput.value)}×`;
  buttonInput.value = "";
})
buttonDiv.addEventListener('click', (event) => {
  event.preventDefault();
  buttonCal.innerHTML = `${(buttonInput.value)}÷`;
  buttonInput.value = "";
})
buttonSoustrac.addEventListener('click', (event) => {
  event.preventDefault();
  buttonCal.innerHTML = `${(buttonInput.value)}-`;
  buttonInput.value = "";
})
let currentValue;
let previousValue;
let operatorSign = '';
let display = '';
buttonChiffres.forEach((button) => {
  button.addEventListener('click', () => {
    buttonInput.value += button.textContent
  });
});
//  clear function
function clear() {
  buttonInput.value = '';
  display = '';
}
buttonClear.addEventListener('click', clear);
//  reset function
function reset() {
  location.reload;
}
buttonAc.addEventListener('click', reset);
// function pour addition
function addition(event) {
  event.preventDefault();
  if (display) {
    operatorSign = '+';
    buttonCal.innerText = buttonCal.innerText + ' ' + buttonInput.value + ' +';
    clear();
  } else {
    clear();
  }
}
plusButton.addEventListener('click', addition);
// function pour soustraction
function soustraction(event) {
  event.preventDefault();
  if (display) {
    operatorSign = '-';
    buttonCal.innerText = buttonCal.innerText + ' ' + buttonInput.value + '-';
    clear();
  } else {
    clear();
  }
}
buttonSoustrac.addEventListener('click', soustraction);
// function pour division
function division(event) {
  event.preventDefault();
  if (display) {
    operatorSign = '/';
    buttonCal.innerText = buttonCal.innerText + ' ' + buttonInput.value + ' /';
    clear();
  } else {
    clear();
  }
}
buttonDiv.addEventListener('click', division);
// function pour multiplication
function multiplication(event) {
  event.preventDefault();
  if (display) {
    operatorSign = '*';
    buttonCal.innerText = buttonCal.innerText + ' ' + buttonInput.value + ' *';
    clear();
  } else {
    clear();
  }
}
buttonMult.addEventListener('click', multiplication);
// function pour plusoumoins
function plusoumoins(event) {
  event.preventDefault();
  if (display) {
    if (buttonInput.value.includes('-')) {
    }
    buttonInput.value = display;
  } else {
    buttonInput.value = '.' + display;
  }
}
buttonPlusoumoins.addEventListener('click', plusoumoins);
// function pourcentage
function pourcentage(event) {
  event.preventDefault();
  // display.innerText
  HTMLButtonElement.pourcentage = buttonInput.value + '%';
  buttonInput.value = parseInt(buttonInput.value) / 100;
}
buttonPourcentage.addEventListener('click', pourcentage);
// function egal
function egal(event) {
  event.preventDefault();
  if (buttonCal.innerText.includes('=')) {
  } else {
    buttonCal.innerText = buttonCal.innerText + ' ' + buttonInput.value;
    buttonInput.value = eval(buttonCal.innerText);
    buttonCal = buttonCal.innerText + ' ' + '=';
  }
}
buttonEgal.addEventListener('click', egal);