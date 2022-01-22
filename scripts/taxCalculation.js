import { singlePersonTax } from '../scripts/taxes2021.js';

const calculateBtn = document.getElementById('calculateBtn');
const inputValue   = document.getElementById('inputSalary');
const resultOutput = document.getElementById('result');

function calculate(value) {
  let result = 0;
  let inputValue = value - singlePersonTax.denomination;

  if (inputValue > 0) { 
    const bracketsArray = singlePersonTax.brackets;
    const rates         = singlePersonTax.rates;
  
    for (let i = 1; i < bracketsArray.length; i++) {
      if (inputValue > bracketsArray[i - 1]) {
        if (inputValue > bracketsArray[i]) {
          result += (bracketsArray[i] - bracketsArray[i-1]) * rates[i];
          inputValue = inputValue - bracketsArray[i];
        } else {
          result += bracketsArray[i - 1] * rates[i - 1];
          inputValue = inputValue - bracketsArray[i - 1];
        }
      } else {
        result += inputValue * rates[i - 1];
        break;
      }
    }
  } else {
    result = 'No tax for you =)'
  }

  return result;
}

function printResult() {
  resultOutput.innerHTML = 'Your tax is: ' + calculate(inputValue.value);
};

calculateBtn.addEventListener('click', printResult);
