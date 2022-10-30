let result = document.getElementById('result');
let inputNum = document.getElementById('inputNum');
let inputMaster = document.getElementById('inputMaster');
// let btnAdd = document.getElementById('btnAdd');
// let btnSubtract = document.getElementById('btnSubtract');
let btnNum = document.querySelectorAll('.btnNum');
let btnOp = document.querySelectorAll('.btnOp');
let btnResult = document.getElementById('btnResult');

let masterInput = '';
let masterInputNum = 0;
let input = '';

//Inputting new set of numbers
for(num of btnNum){
    num.onclick = function(e){
        input = input + e.target.innerHTML;
        inputNum.innerHTML = input;
    }
};  

let currentOperation = '';
let firstNum = true;

//Inputting operation
for(op of btnOp){
    op.onclick = function(e){
        
        //Input is set to blank after clicking any of the operations button.
        //If operation button was clicked last, we have a if here to avoid multiple clicks of operations
        if(input === '') return

        //Complete copy of all inputs
        masterInput = masterInput + input + e.target.innerHTML;
        inputMaster.innerHTML = masterInput

        //If this is the first number, then get only the input, else perform operation
        if(!firstNum){
            masterInputNum = defResult(masterInputNum,Number(input));
            
        } else {
            masterInputNum = Number(input);
            firstNum = false;
        }

        //Logic for operation used
        if(e.target.innerHTML === '+'){
            currentOperation = 'add';
        } else if(e.target.innerHTML === '-') {
            currentOperation = 'subtract';
        } else if(e.target.innerHTML === 'x') {
            currentOperation = 'multiply';
        } else if(e.target.innerHTML === '÷') {
            currentOperation = 'divide';
        }
        ;
        console.log(e.target.innerHTML)
        //Set input to none then change the inputNum to the result of the operation function
        input = '';
        inputNum.innerHTML = masterInputNum
    }
};

let totalNum = 0
function defResult(num1,num2){
    if(currentOperation === 'add'){
        totalNum = num1 + num2; 
    } else if(currentOperation === 'subtract'){
        totalNum = num1 - num2;
    } else if(currentOperation === 'multiply'){
        totalNum = num1 * num2;
    } else if(currentOperation === 'divide'){
        totalNum = num1 / num2;
    };
    return totalNum 
    
}

//Input numbers > put operation > 

btnResult.onclick = function(){
    
}
