import CanvasCircularCountdown from "canvas-circular-countdown";


const canvas = document.getElementById('countdown-canvas');

const form = document.querySelector('form');

let countdown = new CanvasCircularCountdown(canvas, {
  duration: 30* 100,
  showCaption: true
  
  }, (percentage, time, instance) => {
      if (time.elapsed >= 5000 ) {
        instance.stop();
      }
    });

form.addEventListener('submit', e  => {
let finalDate = new Date(form.elements.date.value);
console.log(Date.now())

console.log(finalDate)
e.preventDefault();
countdown.duration = Date.now();
countdown.start();

})

//console.log(CanvasCircularCountdown)

//onsole.log(startBtn)


