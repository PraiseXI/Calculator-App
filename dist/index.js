"use strict";
const numButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
let displayInput = document.getElementById('display');
const clearButton = document.querySelector('.clear');
//functions
function addition(x, y) {
    let sum = x + y;
    return sum;
}
function subtraction(x, y) {
    let difference = x - y;
    return difference;
}
function division(dividend, divisor) {
    if (divisor === 0) {
        return "Cannot divide by zero";
    }
    const quotient = dividend / divisor;
    return quotient;
}
function multiplication(factor1, factor2) {
    const product = factor1 * factor2;
    return product;
}
function clearScreen() {
    console.log(displayInput.value);
    displayInput.value = "";
}
//eventlisteners
// Event listener for number buttons
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayInput.value += button.textContent;
    });
});
clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener('click', () => {
    clearScreen();
});
//# sourceMappingURL=index.js.map