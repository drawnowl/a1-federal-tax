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
  
    for (let i = bracketsArray.length; i >= 0; i--) {
      let bracket = bracketsArray[i];
      let rate = rates[i];
      if (inputValue > bracket) {
        let diff = inputValue - bracket;
        result += diff * rate;
        inputValue -= diff;
      }
    }
  } else {
    result = 'No tax for you'
  }

  return result;
}

function printResult() {
  resultOutput.innerHTML = 'Your tax is: ' + calculate(inputValue.value);
};

calculateBtn.addEventListener('click', printResult);
