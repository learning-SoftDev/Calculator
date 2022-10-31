let inputNum = document.getElementById('inputNum');
let inputMaster = document.getElementById('inputMaster');
let masterInput = '';
let masterInputNum = 0;
let input = '0';

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
let resultClicked = false;
btnResult.onclick = function(){
    //If there's no history, then do not perform anything beyond this line
    if(masterInput ==='') return

    if(resultClicked) return

    //If lastClicked is operation, then remove the operator then equals, else do not remove anything then equals
    if(lastClicked === 'Operation'){
        inputMaster.innerHTML = (masterInput + input).slice(0,-1) + ' = ';
    } else {
        inputMaster.innerHTML = masterInput + input + ' = ';
    }
    masterInputNum = defCalc(masterInputNum,Number(input));
    inputNum.innerHTML = masterInputNum;
    
    masterInput = masterInputNum.toString()
    resultClicked = true;
    console.log(masterInput)
};

//Clear Logic
btnClear.onclick = defClear;


function defClear(){
    input = '0';
    masterInput = '';
    masterInputNum = 0;
    inputNum.innerHTML = input;
    inputMaster.innerHTML = masterInput;
    resultClicked =false;
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
    if(resultClicked){
        defClear() 
    };

    if(input==='0'){
        input = 
    }
    input = input + e.target.innerHTML;
    inputNum.innerHTML = input;
    lastClicked = 'Input';
    
};


//This function is for setting up the history of inputs and the result of those inputs
let currentOperation = '';
let firstNum = true;
let lastClicked = 'Input';
function defGeneral(e){       
    //Input is set to blank after clicking any of the operations button (meaning it was repeated or changed) then
    //avoid running of operation and avoid multiply displays of operation in the history inputs
    let opRepeat = true;
    if(input === '' && !resultClicked){
        masterInput = masterInput.slice(0,-1);
        opRepeat = false;
    } 

    //Complete copy of all inputs
    if(!resultClicked){
        masterInput = masterInput + input + e.target.innerHTML;
    } else {
        console.log(masterInput);
        masterInput = masterInput + e.target.innerHTML;
    }
    
    inputMaster.innerHTML = masterInput;

    //If this is the first number, then get only the input, else perform operation
    if(!resultClicked){
        if(opRepeat){
            if(!firstNum){
                masterInputNum = defCalc(masterInputNum,Number(input));
                
            } else {
                masterInputNum = Number(input);
                firstNum = false;
            };
        };
    }
    
    

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
    inputNum.innerHTML = masterInputNum;
    lastClicked = 'Operation';
    resultClicked = false;
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