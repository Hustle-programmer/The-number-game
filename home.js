/*
TODO: Get the number from user entered in the input field and store it in a variable
TODO: Generate a random number and store it to a variable(global).   
TODO: Console output the messages if the result is less than,greater than or equal to.
TODO: Put the if logic inside the displayResult function and call it in the playGame function.
*/

let guesses=[];

let correctNumber=getRandomNumber();
console.log(correctNumber);

window.onload = function(){
    document.getElementById('number-submit').addEventListener("click",palygame);
    document.getElementById('restart-game').addEventListener("click",init);
   
}

function palygame(){
    let numberGuess = document.getElementById("number-guess").value;
     displayResult(numberGuess);
     saveGuessHistory(numberGuess);
     displayHistory(guesses);
     
}

function displayResult(numberGuess){    
    if(numberGuess < correctNumber){
      showNumberBelow();
     } else if (numberGuess > correctNumber) {
       showNumberAbove();   
    } else  {
       showWon();
    }
}

function getRandomNumber(){
let randonNumber= Math.floor(Math.random()*100)+1;
return randonNumber;
}

function getDialog(dialogType,text){
    let dialog;
    switch(dialogType)
    {
        case "warning":
            dialog="<div class='alert alert-warning' role='alert' ><h2>";
            break;
        case "won":
            dialog="<div class='alert alert-success' role='alert'><h2>";
            break;
    }
    dialog += text;
    dialog += "<h2></div>";
    return dialog;
}

function showWon(){
    const text="You guessed it right!";
    let dialog=getDialog("won",text);
    document.getElementById('hint').innerHTML=dialog;
    
}

function showNumberAbove(){
    const text = "You guessed high";
    let dialog=getDialog('warning',text);
    document.getElementById('hint').innerHTML=dialog;
    
}

function showNumberBelow(){
    const text = "You guessed it low";
    let dialog=getDialog('warning',text);
    document.getElementById('hint').innerHTML=dialog;
    
}

function saveGuessHistory(guess)
{
    guesses.push(guess);
}

function init(){
    correctNumber=getRandomNumber();
    guesses=[];
    document.getElementById('Guessed-history').innerHTML="";
    document.getElementById('hint').innerHTML="";
    document.getElementById('number-guess').value="";
    
}

function displayHistory()
{
    let index=guesses.length-1;
    let list = "<ul class='list-group'>";
    while(index >= 0)
    {
        list += "<li class='list-group-item'>" + "<b> You guessed <b>"+guesses[index] + "</li>"
        index--;        
    }
    list += "</ul";
    document.getElementById('Guessed-history').innerHTML = list;
}


