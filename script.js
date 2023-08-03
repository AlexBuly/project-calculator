// operator functions 
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log(add);
console.log(subtract);
console.log(multiply);
console.log(divide);

// takes in numbers to run the calculator with one function 
const num1 = operate;
const op = operate;
const num2 = operate;

function operate(num1, op, num2) {
    return op === "+" ? add(num1, num2)
        : op === "-" ? subtract(num1, num2)
        : op === "*" ? multiply(num1, num2)
        : op === "/" ? divide(num1, num2)
        : null;
 }

 const result = operate(num1, op, num2);
 console.log(result);

// calculator buttons
const calculator = document.querySelector(".calculator");

const display = document.createElement("div");
display.classList.add("display");
calculator.appendChild(display);

const numBtns = document.createElement("div");
numBtns.classList.add("numBtns");
calculator.appendChild(numBtns);

const operations = document.createElement("div");
operations.classList.add("operation");
numBtns.appendChild(operations);

for (let i = 0; i < 5; ++i) {
    const operateBtns = document.createElement("button");
    operateBtns.classList.add("operateBtns");
    operations.appendChild(operateBtns);
    operateBtns.style.cssText = "height: calc(100% / 5); width: calc(100%)";
}
// populate display 
// use result and new number as new number pair 
// works when dividing by 0 