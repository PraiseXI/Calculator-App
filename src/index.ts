const numButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const equalButton = document.querySelector('.equal')
let displayInput = document.getElementById('display') as HTMLInputElement
const clearButton = document.querySelector('.clear')

//functions
function addition (x: number, y: number): number {
    let sum: number = x + y
    return sum
}

function subtraction (x: number, y: number): number {
    let difference: number = x - y
    return difference
}

function division(dividend: number, divisor: number): number | string {
    if (divisor === 0) {
        return "Cannot divide by zero";
    }
    const quotient: number = dividend / divisor;
    return quotient;
}


function multiplication(factor1: number, factor2: number): number {
    const product: number = factor1 * factor2;
    return product;
}

function clearScreen() {
    console.log(displayInput.value)
    displayInput.value = ""
}

//eventlisteners
 // Event listener for number buttons
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayInput.value += button.textContent;
    });
});

clearButton?.addEventListener('click', () => {
    clearScreen()
})





