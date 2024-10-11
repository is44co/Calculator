
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

nums.forEach((num1) => {
  num1.addEventListener('click', ()=> {
    currentNum += num1.textContent; 
    displayResult(currentNum);
 
  });
});


operators.forEach((operato1) => {
  operato1.addEventListener('click', () => {
    if (firstnumber === null) {
      firstnumber = currentNum;
    } else {
      secondnumber = currentNum;
      result = equations();      
      displayResult(result);
      firstnumber = result;
    }
    operator = operato1.textContent;
    currentNum = ''
  });
});



equal.addEventListener('click', Equal );


function Equal(){

  

    secondnumber = currentNum;  
     let result=equations()
    displayResult(result);   
  
console.log(result)
 firstnumber=result;
 secondnumber=currentNum
 

}

clr.addEventListener('click',Reset )
function Reset(){
  currentNum = '';
  firstnumber = null;
  operator = null;
  secondnumber = null;
  
  displayResult(currentNum)
}
del.addEventListener('click', () => {
  
  currentNum = currentNum.slice(0, -1);
  displayResult(currentNum ); 
});

function equations(){
  let result=0
  if(operator=='-'){
   
   result = Number(firstnumber)- Number(secondnumber)
  }
  if(operator==='+'){
    
   result=Number(firstnumber)+ Number(secondnumber)
  }
  if(operator=='X'){
    
   result=  Number(firstnumber)* Number(secondnumber)
  }
  if(operator=='/'){
   
    result= Number(firstnumber)/ Number(secondnumber)
  }
  return result
  
   }
