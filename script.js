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
 console.log(operateArray);

 // calculator buttons
const calculator = document.querySelector(".calculator");
const opLabels = ["/", "*", "-", "+"];

let num1;
let num2;
let op;
let result;

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
            console.log(result);
            display.textContent = operate(num1, op, num2);
            displayArray.length = 0;
        } else if (operateArray.length > 2) {
            secondNum();
            op = operateArray.at(-2);
            result = operate(result, op, num2);
            display.textContent = result;
            console.log(result);
            displayArray.length = 0;
        }
    });
});



function firstNum() {
    num1 = Number(displayArray.join(''));
    displayArray.push(num1);
    console.log(num1);

    if (operateArray.length > 2) {
        num1 = result;
        //num2 = Number(displayArray.join(''));
        //console.log(num2);
    }
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
        display.textContent =  Number(displayArray.join(''));
    });
});

let percent;
  
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    displayArray.length = 0;
    operateArray.length = 0;
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
    num1 = '';
    num2 = '';
    num = '';
    ze = '';
    percent = '';
    dec = '';
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
    display.textContent = percent;
    displayArray.length = 0;
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    if (operateArray.length === 1) {
        secondNum();
        display.textContent = operate(num1, op, num2);
        console.log(operate(num1, op, num2));
        displayArray.length = 0;
    } else if (operateArray.length > 1) {
        secondNum();
        num1 = result; 
        op = operateArray.at(-1);
        display.textContent = operate(num1, op, num2);
        displayArray.length = 0;
    }
});
     
const secondNum = () => {
    num2 = Number(displayArray.join(''));
    displayArray.push(num2);
    console.log(num2);
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