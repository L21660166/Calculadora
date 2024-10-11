let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function calculate() {
    if (previousOperand === '' || currentOperand === '') return;
    const expression = `${previousOperand} ${operation} ${currentOperand}`;
    currentOperand = eval(expression); // Utiliza eval para evaluar la expresión
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function updateDisplay() {
    if (operation) {
        display.innerText = `${previousOperand} ${operation} ${currentOperand}`; // Muestra la operación completa
    } else {
        display.innerText = currentOperand || '0';
    }
}
