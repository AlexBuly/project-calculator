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
display.textContent = "0123456789";

const btns = document.createElement("div");
btns.classList.add("btns");
calculator.appendChild(btns);

const operations = document.createElement("div");
operations.classList.add("operation");
btns.appendChild(operations);

const opLabels = ["/", "*", "-", "+", "="]

for (let i = 0; i < opLabels.length; ++i) {
    const operateBtns = document.createElement("button");
    operateBtns.classList.add("operateBtns");
    operations.appendChild(operateBtns);
    operateBtns.style.cssText = "height: calc(100% / 5); width: calc(100%); font-size: 4vh; color: white";
    operateBtns.textContent = opLabels[i];
}

const left = document.createElement("div");
left.classList.add("left");
operations.insertAdjacentElement("beforebegin", left);

const nums = document.createElement("div");
nums.classList.add("nums");
left.appendChild(nums);
nums.style.cssText = "height: 60%"

const numLables = [7, 8, 9, 4, 5, 6, 1, 2, 3];

for (let n = 0; n < numLables.length; ++n) {
    const leftBtns = document.createElement("button");
    leftBtns.classList.add("leftBtns");
    nums.appendChild(leftBtns);
    leftBtns.style.cssText = "height: calc(100% / 3); width: calc(100% / 3); display: inline-flex; background-color: darkblue; border: none; color: white; font-size: 4vh; align-items: center; justify-content: center; border-radius: 3vh";
    leftBtns.textContent = numLables[n];
}

nums.addEventListener("mouseover", (event) => {
    const target = event.target;
    if (target.classList.contains("leftBtns")) {
        target.style.backgroundColor = "rgb(0, 0, 100)";
    }
});

nums.addEventListener("mouseout", (event) => {
    const target = event.target;
    if (target.classList.contains("leftBtns")) {
        target.style.backgroundColor = "darkblue";
    }
});

const leftTop = document.createElement("div");
leftTop.classList.add("leftTop");
nums.insertAdjacentElement("beforebegin", leftTop);
leftTop.style.cssText = "height: 20%; background-color: rgb(18, 126, 103)";

const topLables = ["C", "DEL"];

for (let t = 0; t < topLables.length; ++t) {
    const topBtns = document.createElement("button");
    topBtns.classList.add("topBtns");
    leftTop.appendChild(topBtns);
    topBtns.textContent = topLables[t];
}

const leftBottom = document.createElement("div");
leftBottom.classList.add("leftBottom");
left.appendChild(leftBottom)
leftBottom.style.cssText = "height: 20%";

leftBottom.addEventListener("mouseover", (event) => {
    const target = event.target;
    if (target.classList.contains("bottomBtns")) {
        target.style.backgroundColor = "rgb(0, 0, 100)";
    }
});

leftBottom.addEventListener("mouseout", (event) => {
    const target = event.target;
    if (target.classList.contains("bottomBtns")) {
        target.style.backgroundColor = "darkblue";
    }
});

const bottomLables = ["%", "0", "."];

for (let b = 0; b < bottomLables.length; ++b) {
    const bottomBtns = document.createElement("button");
    bottomBtns.classList.add("bottomBtns");
    leftBottom.appendChild(bottomBtns);
    bottomBtns.textContent = bottomLables[b];
}

// populate display

// use result and new number as new number pair 
// works when dividing by 0 