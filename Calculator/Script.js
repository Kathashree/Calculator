// script.js
const display = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("button"));
let currentOperand = "";
let previousOperand = "";
let operation = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    console.log(`Button clicked: ${value}`); // Debugging line

    switch (value) {
    case "C":
        clear();
        break;

    case "=":
        compute();
        break;

    case "+":

    case "-":

    case "*":

    case "/":
        chooseOperation(value);
        break;

      default:
        appendNumber(value);
    }

    if (value === "C") {
      updateDisplay(true);
    } else {
      updateDisplay();
    }
  });
});

function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) return;

  currentOperand = currentOperand.toString() + number.toString();

  console.log(`Current Operand: ${currentOperand}`); // Debugging line
}

function chooseOperation(op) {
  if (currentOperand === "") return;

  if (previousOperand !== "") {
    compute();
  }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = "";
    console.log(`Operation: ${operation}`); // Debugging line
    console.log(`Previous Operand: ${previousOperand}`); // Debugging line
}

function compute() {
  let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case "+":
        result = prev + current;
        break;

    case "-":
        result = prev - current;
        break;

    case "*":
        result = prev * current;
        break;

    case "/":
        result = prev / current;
        break;

    default:
      return;
  }

    currentOperand = result.toString();
    operation = null;
    previousOperand = "";
    console.log(`Result: ${result}`); // Debugging line
}

function clear() {
    currentOperand = "";
    previousOperand = "";
    operation = null;
    console.log("Cleared"); // Debugging line
}

function updateDisplay(clearPressed) {
  if (clearPressed) {
    display.innerText = `0`;
    return;
  }
    display.innerText = `${previousOperand ?? ""} ${operation ?? ""} ${
    currentOperand ?? ""
  }`;
    console.log(`Display: ${display.innerText}`); // Debugging line
}