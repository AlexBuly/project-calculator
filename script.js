// operator functions 
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log(add);
console.log(subtract);
console.log(multiply);
console.log(divide);

 const operate = (num1, op, num2) => {
    op = ["+", "-", "*", "/"]
    if (op === "+") {
        return num1 + add + num2;
    }
 }
 console.log(operate);

// takes in numbers to run the calculator with one function 
// calculator buttons
// populate display 
// use result and new number as new number pair 
// works when dividing by 0 