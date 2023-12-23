let num = parseInt((Math.random()*100)+1); // take random num between 1 to 100. you can use parseInt or tofixed(0)
console.log(num);
const submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let guessSlot = document.querySelector('.guesses'); // prev Guesses in resultParas.
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

//create a para we will use it afterwords to insert.
let p = document.createElement('p');
let prevGuess =[];// will take previous guesses in an array.
let numGuess = 1;//default setting to 1.
let  playgame = true;

if(playgame){
     submit.addEventListener('click',function(e){
        e.preventDefault(); // values ko server p jane se roko kuch operations karne h.
        const guess = parseInt(userInput.value);
        //console.log(guess);
        validateGuess(guess);// pehle check karo 1 to 100 m h na. agr h to aage k function usi m call karo.
     });
}

function validateGuess(guess){  /// for checking num between 1 and 100.
    if(guess<1 || guess>100 || isNaN(guess) ){
        alert('please enter a valid no. between 1 and 100.');
    }
    else{ // if valid guess push it in array created.
        
        if(numGuess === 10){
            if(num === guess){
                displayGuess(guess);
                displayMessage(`You won: Random number was ${num}.`);
                endGame();
            }
            else{
                displayGuess(guess);
            displayMessage(`Game Over: Random number was ${num}.`);
            endGame();
            }
            
        }
        else{
            prevGuess.push(guess);
            checkGuess(guess);
            displayGuess(guess);
            
        }
    }

}

function checkGuess(guess){ // for checking num === guess and display message accordingly.
    if(guess === num){
        displayMessage(`You won: Random number was ${num}.`);
        endGame();
    }
    else if(guess > num){
        displayMessage(`you guessed the number too high.`);
    }
    else if(guess < num){
        displayMessage(`you gessed the number too low.`);
    }
}

function displayGuess(guess){ // cleaning the space for new guess.
    userInput.value='';
    guessSlot.innerHTML += ` ${guess}   `; // adding guess  in previous guess array
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`; //  updating guesses remaining in result para.

}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
     userInput.value = ''
     userInput.setAttribute('disabled','') // we give key value pair here so thats why, and disabling the input box here so user cant enter value unneccesory.
     p.classList.add('button')     // creating a new game button which will occur when game over.
     p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
     startOver.appendChild(p);
     playgame=false;
     newGame();
}
function newGame(guess){
    const newGamebutton = document.querySelector('#newGame');
    newGamebutton.addEventListener('click',function(e){
        num = parseInt((Math.random()*100)+1);
        prevGuess =[];
        numGuess = 1;
        guessSlot.innerHTML ='';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playgame = true;
    })
    
}