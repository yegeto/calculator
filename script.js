const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

let firstNum;
let operator;
let secondNum;

const operate = (num1, operator, num2) => operator(num1, num2);

const btnOne = document.querySelector('#one');
const btnTwo = document.querySelector('#two');
const btnThree = document.querySelector('#three');
const btnFour = document.querySelector('#four');
const btnFive = document.querySelector('#five');
const btnSix = document.querySelector('#six');
const btnSeven = document.querySelector('#seven');
const btnEight = document.querySelector('#eight');
const btnNine = document.querySelector('#nine');
const btnZero = document.querySelector('#zero');
const btnAdd = document.querySelector('#addition');
const btnSubtract = document.querySelector('#subtraction');
const btnMultiply = document.querySelector('#multiplication');
const btnDivide = document.querySelector('#division');
const btnCalculate = document.querySelector('#calculation');
const btnClear = document.querySelector('#clear');
const btnBackspace = document.querySelector('#backspace');
const displayValue = document.querySelector('#display');
const processValue = document.querySelector('#process');

btnBackspace.addEventListener('click', () => {
  displayValue.textContent = displayValue.textContent.slice(0, -1);
})

btnOne.addEventListener('click', () => {
  displayValue.textContent += '1';
});

btnTwo.addEventListener('click', () => {
  displayValue.textContent += '2';
});

btnThree.addEventListener('click', () => {
  displayValue.textContent += '3';
});

btnFour.addEventListener('click', () => {
  displayValue.textContent += '4';
});

btnFive.addEventListener('click', () => {
  displayValue.textContent += '5';
});

btnSix.addEventListener('click', () => {
  displayValue.textContent += '6';
});

btnSeven.addEventListener('click', () => {
  displayValue.textContent += '7';
});

btnEight.addEventListener('click', () => {
  displayValue.textContent += '8';
});

btnNine.addEventListener('click', () => {
  displayValue.textContent += '9';
});

btnZero.addEventListener('click', () => {
  displayValue.textContent += '0';
});

btnClear.addEventListener('click', () => {
  displayValue.textContent = '';
  processValue.textContent = '';
  firstNum = '';
  operator = '';
  secondNum = '';
})

btnAdd.addEventListener('click', () => {
  firstNum = Number(displayValue.textContent);
  displayValue.textContent += ' +'
  processValue.textContent = displayValue.textContent;
  displayValue.textContent = '';
  operator = add;
});

btnSubtract.addEventListener('click', () => {
  firstNum = Number(displayValue.textContent);
  displayValue.textContent += ' -'
  processValue.textContent = displayValue.textContent;
  displayValue.textContent = '';
  operator = subtract;
});

btnMultiply.addEventListener('click', () => {
  firstNum = Number(displayValue.textContent);
  displayValue.textContent += ' *'
  processValue.textContent = displayValue.textContent;
  displayValue.textContent = '';
  operator = multiply;
});

btnDivide.addEventListener('click', () => {
  firstNum = Number(displayValue.textContent);
  displayValue.textContent += ' /'
  processValue.textContent = displayValue.textContent;
  displayValue.textContent = '';
  operator = divide;
});

btnCalculate.addEventListener('click', () => {
  secondNum = Number(displayValue.textContent);
  processValue.textContent = '';
  displayValue.textContent = `${operate(firstNum, operator, secondNum)}`;
});