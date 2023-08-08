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

 const display = document.querySelector(".display");

// calculator buttons
const calculator = document.querySelector(".calculator");
const opLabels = ["/", "*", "-", "*", "="];

const operateBtns = document.querySelectorAll(".operateBtns");
operateBtns.forEach((btn, index) => {
    btn.textContent = opLabels[index];
});

const numLabels = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const leftBtns = document.querySelectorAll(".leftBtns");
leftBtns.forEach((btn, index) => {
    btn.textContent = numLabels[index];
});

leftBtns.addEventListener("click", () => {
    num1 = numLabels.forEach((num) => numLabels[num]);
    //display.textContent = function for display 
});

// populate display
// use result and new number as new number pair 
// works when dividing by 0 