let resultField = document.getElementById('result');
let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
let resetDisplay = false;


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error";
  return a / b;
}


function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return null;
  }
}


function appendSymbol(symbol) {
  if (resetDisplay) {
    resetDisplay = false;
  }

  if (currentOperator) {
    resultField.value += symbol;
  } else {
    if (resultField.value === '0') {
      resultField.value = symbol; 
    } else {
      resultField.value += symbol; 
    }
  }
}

function clearAll() {
  resultField.value = '0';
  firstNumber = null;
  secondNumber = null;
  currentOperator = null;
  resetDisplay = false;
}


function deleteLast() {
  resultField.value = resultField.value.slice(0, -1) || '0';
}


function setOperator(operator) {
    if (currentOperator !== null && !resetDisplay) {
      currentOperator = operator; 
      resultField.value = `${firstNumber} ${currentOperator} `;
      return;
    }
  
    if (firstNumber === null) {
      firstNumber = parseFloat(resultField.value);
    }
  
    currentOperator = operator;
    resultField.value += ` ${operator} `;
    resetDisplay = true;
  }
  

function calculate() {
  if (currentOperator === null || firstNumber === null) return;

  const expression = resultField.value.split(` ${currentOperator} `);
  secondNumber = parseFloat(expression[1]);

  if (!secondNumber && secondNumber !== 0) return;
  let result = operate(currentOperator, firstNumber, secondNumber);

  if (typeof result === 'string') {
    resultField.value = result; 
  } else {
    resultField.value = `${firstNumber} ${currentOperator} ${secondNumber} = ${parseFloat(result)}`;
  }

  firstNumber = result;
  secondNumber = null;
  currentOperator = null;
  resetDisplay = true;
}
