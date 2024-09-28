const del = document.querySelector('.delete');
const plus = document.querySelector('.operatorPlus');
const nums = document.querySelectorAll('.num');
const equal = document.querySelector('.results');
const clr = document.querySelector('.clear');

function displayResult(value) {
  document.querySelector('.displayResults').textContent = value;
}

let currentNum = '';
let firstnumber = null;
let operator = null;
let secondnumber = null;

nums.forEach((num1) => {
  num1.addEventListener('click', ()=> {
    currentNum += num1.textContent; 
    displayResult(currentNum);
    handleNumberClick(num1.textContent);
  });
});

plus.addEventListener('click', () => {
 
    firstnumber = currentNum;  
    currentNum = '';           
    operator = '+';            
  
});

equal.addEventListener('click', () => {
  
    secondnumber = currentNum;  
    const result = Number(firstnumber) + Number(secondnumber); 
    displayResult(result);    

 firstnumber=result;
 

});
