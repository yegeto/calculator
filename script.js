const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

let operandOne = "";
let operandTwo = "";
let operator = "";
let theNumber = "";

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

buttons.forEach((button) => {
  if (button.classList.contains("number")) {
    button.addEventListener("click", () => {
      if (screen.innerText === "0") {
        screen.innerText = "";
      }
      theNumber += button.value;
      screen.innerText = theNumber;
    });
  } else if (button.classList.contains("operator")) {
    button.addEventListener("click", () => {
      operandOne = screen.innerText;
      operator = button.value;
      theNumber = "";
    });
  } else if (button.classList.contains("equals")) {
    button.addEventListener("click", () => {
      operandTwo = screen.innerText;
      screen.innerText = operate(
        operator,
        Number(operandOne),
        Number(operandTwo)
      );
    });
  } else if (button.classList.contains("clear")) {
    button.addEventListener("click", () => {
      screen.innerText = "0";
      theNumber = "";
    });
  }
});
