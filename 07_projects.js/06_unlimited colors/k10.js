// simple target.
// settimeinterval() on clicking start
// random color generate karne padenge.
// clearinterval on clicking stop

let colors = '0123456789ABCDEF';
// colors ids are in hexadecimal thatswhy.
let hex = '';
let interval;

const changeColor = function () {
  if (!interval) {
    interval = setInterval(() => {
      for (let i = 0; i < 6; i++) {
        hex += colors[Math.floor(Math.random() * 16)];
      }
      document.body.style.backgroundColor = `#${hex}`;
      hex = '';
    }, 1000);
  }
};
const stopChanging = function () {
  clearInterval(interval);
  interval = null;
};

document.querySelector('#start').addEventListener('click', changeColor);
document.querySelector('#stop').addEventListener('click', stopChanging);
