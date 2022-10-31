let inputNum = document.getElementById('inputNum');
let inputMaster = document.getElementById('inputMaster');
let masterInput = '';
let masterInputNum = 0;
let input = '';

//Select buttons
let btnClear = document.getElementById('btnClear');
let btnNum = document.querySelectorAll('.btnNum');
let btnOp = document.querySelectorAll('.btnOp');
let btnResult = document.getElementById('btnResult');
let btnDelete = document.getElementById('btnDelete');

//Inputting new set of numbers
for(num of btnNum){
    num.onclick = defNumInput};  

//Inputting operation
for(op of btnOp){
    op.onclick = defGeneral
};

//Result Logic
btnResult.onclick = function(){
    if(masterInput ==='') return
    inputMaster.innerHTML = masterInput + input + ' = ';
    masterInputNum = defCalc(masterInputNum,Number(input));
    inputNum.innerHTML = masterInputNum;
};

//Clear Logic
btnClear.onclick = function(){
    input = '';
    masterInput = '';
    masterInputNum = 0;
    inputNum.innerHTML = input;
    inputMaster.innerHTML = masterInput;
};

//Delete
btnDelete.onclick = function(){
    input = input.slice(0,-1);
    inputNum.innerHTML = input;
    console.log('hakdog')
}


//Functions

//For the current input of user
function defNumInput(e){
    input = input + e.target.innerHTML;
    inputNum.innerHTML = input;
};


//This function is for setting up the history of inputs and the result of those inputs
let currentOperation = '';
let firstNum = true;
function defGeneral(e){       
    //Input is set to blank after clicking any of the operations button (meaning it was repeated or changed) then
    //avoid running of operation and avoid multiply displays of operation in the history inputs
    let opRepeat = true;
    if(input === ''){
        masterInput = masterInput.slice(0,-3);
        opRepeat = false;
    } 

    //Complete copy of all inputs
    masterInput = masterInput + input + e.target.innerHTML;
    inputMaster.innerHTML = masterInput;

    //If this is the first number, then get only the input, else perform operation
    if(opRepeat){
        if(!firstNum){
            masterInputNum = defCalc(masterInputNum,Number(input));
            
        } else {
            masterInputNum = Number(input);
            firstNum = false;
        };
    };
    

    //Logic for operation used
    if(e.target.innerHTML === '+'){
        currentOperation = 'add';
    } else if(e.target.innerHTML === '-') {
        currentOperation = 'subtract';
    } else if(e.target.innerHTML === '×') {
        currentOperation = 'multiply';
    } else if(e.target.innerHTML === '÷') {
        currentOperation = 'divide';
    }
    ;

    //Set input to none then change the inputNum to the result of the operation function
    input = '';
    inputNum.innerHTML = masterInputNum
};


//Setting operation logic
let totalNum = 0
function defCalc(num1,num2){
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
    
};