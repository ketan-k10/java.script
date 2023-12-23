
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
