
const plus = document.querySelector('.operatorPlus');
const nums = document.querySelectorAll('.num');
const equal = document.querySelector('.results');
const clr = document.querySelector('.clear');
const del=document.querySelector('.delete');
const minus=document.querySelector('.operatorMinus');
const multiply=document.querySelector('.operatorMultiply');
const divide=document.querySelector('.operatorDivide');
let operators=document.querySelectorAll('.operator')

function displayResult(value) {
  document.querySelector('.displayResults').textContent = value;
}

let currentNum = '';
let firstnumber = null;
let operator = null;
let secondnumber = null;

let result = null;

nums.forEach((num1) => {
  num1.addEventListener('click', ()=> {
    currentNum += num1.textContent;
    displayResult(currentNum);
  });
});

operators.forEach((operato1) => {
  operato1.addEventListener('click', () => {
    if (currentNum === '') return; 
    if (firstnumber === null) {
      firstnumber = currentNum;
    } else if (secondnumber === null) {
      secondnumber = currentNum;
      result = equations();
      displayResult(result);
      firstnumber = result;
    }
    operator = operato1.textContent;
    currentNum = '';  
  });
});

equal.addEventListener('click', Equal);

function Equal() {
  if (currentNum === '' || firstnumber === null || operator === null) return;
  secondnumber = currentNum;
  result = equations();
  displayResult(result);
  firstnumber = result;  
  secondnumber = null;   
  currentNum = '';       
}

clr.addEventListener('click', Reset);

function Reset() {
  currentNum = '';
  firstnumber = null;
  operator = null;
  secondnumber = null;
  result = null;
  displayResult('0');
}

del.addEventListener('click', () => {
  currentNum = currentNum.slice(0, -1);  
  displayResult(currentNum || '0');      
});

function equations() {
  let result = 0;
  if (operator === '-') {
    result = Number(firstnumber) - Number(secondnumber);
  } else if (operator === '+') {
    result = Number(firstnumber) + Number(secondnumber);
  } else if (operator === 'X') {
    result = Number(firstnumber) * Number(secondnumber);
  } else if (operator === '/') {
    if (Number(secondnumber) === 0) {
      return 'Error'; 
    }
    result = Number(firstnumber) / Number(secondnumber);
  }
  return result;
}
