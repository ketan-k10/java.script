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

```
 ## project 4 (Guess The Number) solution 

```javascript

```

