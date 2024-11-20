// script.js
const result = document.getElementById('result');

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  result.value += operator;
}

function clearScreen() {
  result.value = '';
}

function deleteChar() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    result.value = eval(result.value); // Use with caution, better alternatives exist for real apps.
  } catch {
    result.value = 'Error';
  }
}
