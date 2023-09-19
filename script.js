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
 const operateArray = [];
 const equalsArray = [];

 // calculator buttons
const calculator = document.querySelector(".calculator");
const opLabels = ["/", "*", "-", "+"];

let num1;
let num2;
let op;
let result;
let equalsResult;
let expo;

const operateBtns = document.querySelectorAll(".operateBtns");

operateBtns.forEach((btn, index) => {
    btn.textContent = opLabels[index];
    btn.addEventListener("click", () => {
        op = opLabels[index];
        operateArray.push(op);
        enableDecimal();
        if (operateArray.length === 1) {
            firstNum();
            displayArray.length = 0;
        } else if (operateArray.length === 2) {
            secondNum();
            op = operateArray.at(-2);
            result = operate(num1, op, num2);
            display.textContent = result.toFixed(9) * 1;
            displayArray.length = 0;
        } else if (operateArray.length > 2) {
            // use result and new number as new number pair
            secondNum();
            op = operateArray.at(-2);
            result = operate(result, op, num2);
            display.textContent = result.toFixed(9) * 1;
            displayArray.length = 0;
        }
        if (result > 9999999999) {
            expo = result.toExponential(0);
            display.textContent = expo;
        }
    });
});

function firstNum() {
    num1 = Number(displayArray.join(''));
    displayArray.push(num1);
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
        display.textContent = Number(displayArray.join(''));
    });
});

let percent;
  
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    displayArray.length = 0;
    operateArray.length = 0;
    equalsArray.length = 0;
    display.textContent = 0;
    num1 = '';
    num2 = '';
    num = '';
    ze = '';
    result = '';
    enableDecimal();
});

const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    ze = 0;
    displayArray.push(ze);
    displayArray.splice(10);
    display.textContent = Number(displayArray.join(''));
});


const del = document.querySelector(".del");
del.addEventListener("click", () => {
    displayArray.splice(-1);
    display.textContent = displayArray.join('');
    operateArray.length = 0;
    equalsArray.length = 0;
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

const percentage = document.querySelector("#percentage");
percentage.addEventListener("click", () => {
    percent = Number(displayArray.join('')) / 100;
    displayArray.length = 0;
    displayArray.push(percent);
    display.textContent = percent;
    disableDecimal();
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    eq = "=";
    equalsArray.push(eq);
    if (operateArray.length === 1) {
        secondNum();
        result = operate(num1, op, num2);
        display.textContent = result.toFixed(9) * 1;
        displayArray.length = 0;
    } else if (operateArray.length > 1) {
        secondNum();
        num1 = result; 
        op = operateArray.at(-1);
        equalsResult = operate(num1, op, num2);
        display.textContent = equalsResult.toFixed(9) * 1;
        num1 = equalsResult.toFixed(9) * 1;
        displayArray.length = 0;
    } else if (operateArray.length === 0) {
        num1 = Number(displayArray.join(''));
        num2 = 0;
    } if (result > 9999999999) {
        expo = result.toExponential(0);
        display.textContent = expo;
    }
});
     
const secondNum = () => {
    num2 = Number(displayArray.join(''));
    displayArray.push(num2);
}

// takes in numbers to run the calculator with one function 
function operate(num1, op, num2) {
    return op === "+" ? add(num1, num2)
    : op === "-" ? subtract(num1, num2)
    : op === "*" ? multiply(num1, num2)
    : op === "/" ? divide(num1, num2)
    : 0
}
// works when dividing by 0 