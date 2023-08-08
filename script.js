// operator functions 
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

add();
subtract();
multiply();
divide();

 const display = document.querySelector(".display");
 const displayArray = [];
 display.textContent = 0;

// calculator buttons
const calculator = document.querySelector(".calculator");
const opLabels = ["/", "*", "-", "+", "="];

const operateBtns = document.querySelectorAll(".operateBtns");
operateBtns.forEach((btn, index) => {
    btn.textContent = opLabels[index];
    btn.addEventListener("click", () => {
        op = opLabels[index];
    })
});

const numLabels = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const leftBtns = document.querySelectorAll(".leftBtns");
leftBtns.forEach((btn, index) => {
    btn.textContent = numLabels[index];
    btn.addEventListener("click", () => {
        num1 = numLabels[index];
        num2 = numLabels[index];
        displayArray.push(num1);
        display.textContent = displayArray.join('');
    });
});

console.log(displayArray);

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    displayArray.length = 0;
    display.textContent = 0;

});

// takes in numbers to run the calculator with one function 
function operate(num1, op, num2) {
    return op === "+" ? add(num1, num2)
    : op === "-" ? subtract(num1, num2)
    : op === "*" ? multiply(num1, num2)
    : op === "/" ? divide(num1, num2)
    : 0; 
}



// populate display
// use result and new number as new number pair 
// works when dividing by 0 