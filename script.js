const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

let operandOne = "";
let operandTwo = "";
let operator = "";
let theNumber = "";
let hasDecimal = false;

const operate = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
  }
};

const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

const updateScreen = (newOutput) => {
  screen.innerText = newOutput;
  if (screen.innerText.length > 10) {
    screen.innerText = screen.innerText.substring(0, 10);
  }
};

buttons.forEach((button) => {
  if (button.classList.contains("number")) {
    button.addEventListener("click", () => {
      if (screen.innerText === "0") {
        updateScreen("");
      }
      theNumber += button.value;
      if (theNumber === "00") {
        theNumber = "0";
      }
      updateScreen(theNumber);
    });
  } else if (button.classList.contains("operator")) {
    button.addEventListener("click", () => {
      operandOne = screen.innerText;
      operator = button.value;
      theNumber = "";
      hasDecimal = false;
    });
  } else if (button.classList.contains("equals")) {
    button.addEventListener("click", () => {
      operandTwo = screen.innerText;
      if (!operandOne || !operator) {
        return;
      }
      updateScreen(operate(operator, Number(operandOne), Number(operandTwo)));
      operator = "";
      theNumber = "";
      hasDecimal = false;
    });
  } else if (button.classList.contains("clear")) {
    button.addEventListener("click", () => {
      updateScreen("0");
      theNumber = "";
      operandOne = "";
      operandTwo = "";
      operator = "";
      hasDecimal = false;
    });
  } else if (button.classList.contains("decimal")) {
    button.addEventListener("click", () => {
      if (!hasDecimal) {
        if (!theNumber) {
          return;
        } else {
          theNumber += button.value;
          hasDecimal = true;
          updateScreen(theNumber);
        }
      }
    });
  }
});
