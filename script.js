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
const opLabels = ["/", "*", "-", "+"];

let num1;
let num2;

const operateBtns = document.querySelectorAll(".operateBtns");
operateBtns.forEach((btn, index) => {
    btn.textContent = opLabels[index];
    btn.addEventListener("click", () => {
        op = opLabels[index];
        num1 = displayArray.join('');
        firstNum();
        displayArray.length = 0;
    });
});

const firstNum = () => {
    const values = {
        value1: num1,
        per: percent
    }
    displayArray.push(values);
    console.log(values);
}

// populate display

let num;

const numLabels = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const leftBtns = document.querySelectorAll(".leftBtns");
leftBtns.forEach((btn, index) => {
    btn.textContent = numLabels[index];
    btn.addEventListener("click", () => {
        num = numLabels[index];
        displayArray.push(num);
        displayArray.splice(10);
        display.textContent =  displayArray.join('');
    });
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    displayArray.length = 0;
    display.textContent = 0;
    num1 = '';
    enableDecimal();
});

const del = document.querySelector(".del");
del.addEventListener("click", () => {
    displayArray.splice(-1);
    display.textContent = displayArray.join('');
    num1 = '';
    enableDecimal();
});

const decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    dec = ".";
    displayArray.push(dec);
    display.textContent = displayArray.join('');
    disableDecimal();
});

const disableDecimal = () => {
    decimal.disabled = true;
    decimal.classList.add("disabed");
}

const enableDecimal = () => {
    decimal.disabled = false;
    decimal.classList.remove("disabled")
}
let percent;

const percentage = document.querySelector("#percentage");
percentage.addEventListener("click", () => {
    percent = displayArray.join('') / 100;
    display.textContent = percent;
    displayArray.length = 0;
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    num2 = displayArray.join('');
    secondNum();
});

const secondNum = () => {
    const values2 = {
        value2: num2,
        per2: percent
    }
    displayArray.push(values2);
    console.log(values2);
}

// takes in numbers to run the calculator with one function 
function operate(num1, op, num2) {
    return op === "+" ? add(num1, num2)
    : op === "-" ? subtract(num1, num2)
    : op === "*" ? multiply(num1, num2)
    : op === "/" ? divide(num1, num2)
    : 0; 
}

// use result and new number as new number pair 
// works when dividing by 0 