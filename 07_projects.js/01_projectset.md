# projects related to DOM

## project link
[click here stackblits](https://stackblitz.com/edit/dom-project-chaiaurcode-oqzeka?file=index.html)  

# Solution Code

## Project 1 (Color Changer) solution 

```javascript

const buttons = document.querySelectorAll('.button'); // create a nodelist of all elements with class button.
const body = document.querySelector('body');

console.log(buttons);

// one correction here i have used document.addeventlistner but instead use  buttons.addEventListener for better functioning.

document.addEventListener('click', function (e) {
  //catch event then callback function taking event e as parameter then access it using e.target.
  console.log(e);

  // using switch case

  switch (e.target.id) {
    case 'grey':
      document.querySelector('body').style.backgroundColor = e.target.id;
    case 'white':
      document.querySelector('body').style.backgroundColor = e.target.id;
    case 'blue':
      document.querySelector('body').style.backgroundColor = e.target.id;
    case 'yellow':
      document.querySelector('body').style.backgroundColor = e.target.id;
  }

  // another way using if else.

  // if (e.target.id === 'grey') {
  //   document.querySelector('body').style.backgroundColor = e.target.id;
  // }
  // if (e.target.id === 'white') {
  //   document.querySelector('body').style.backgroundColor = e.target.id;
  // }
  // if (e.target.id === 'blue') {
  //   document.querySelector('body').style.backgroundColor = e.target.id;
  // }
  // if (e.target.id === 'yellow') {
  //   document.querySelector('body').style.backgroundColor = e.target.id;
  // }
  });
  ```
   ## project 2 (BMI Generator) solution 

```javascript
const form = document.querySelector('form');
//const height = parseInt(document.querySelector('#height').value);
// This usecase will give you empty result because you are declaring height variable outside form which in default is empty thats why.
form.addEventListener('submit', function (e) {
  e.preventDefault();
  //jab form submit krte ho to url me ya server k paas jata h to submit se pehle hame calculations krni h to jo bhi default action h form ka use roklo!!

  // to understand this line check the link :- https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

  const height = parseInt(document.querySelector('#id-height').innerText);
  const weight = parseInt(document.querySelector('#id-weight').innerText);
  const result = document.querySelector('#id-results');

  // ab hamko checks lgane padenge height or weight p varna code phat skta h.
  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height. its ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
    // innerhtml me span tag bhi use kr sakte h
     if (bmi < 18.6 || bmi < 0) {
      result.innerHTML = `${bmi}, which is Under Weight`;
    } else if (bmi === 18.6 || bmi > 18.6 || bmi < 24.9 || bmi === 24.9) {
      result.innerHTML = `${bmi}, which is Normal Weight`;
    }
    if (bmi > 24.9) {
      result.innerHTML = `${bmi}, which is Over Weight`;
    }
  }
});

```
 ## project 3 (Digital Clock) solution 

```javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);



```
 ## project 4 (Guess The Number) solution 

```javascript

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
```

