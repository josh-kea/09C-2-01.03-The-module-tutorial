import CanvasCircularCountdown from "canvas-circular-countdown";

const canvas = document.getElementById('countdown-canvas');

const form = document.querySelector('form');

let countdown = new CanvasCircularCountdown(canvas, {
  duration: 0,
  showCaption: true
  
  }, (percentage, time, instance) => {
      if (time.elapsed >= 5000 ) {
        instance.stop();
      }
    });

form.addEventListener('submit', e  => {
let todayDate = new Date();
//console.log(todayDate)
let finalDate = new Date(form.elements.date.value);

//Getting date difference
let dateDifference = Math.abs(finalDate - todayDate) / 1000;
let secondsDifference = dateDifference % 60;
let milliSecondsDifference = secondsDifference * 1000;
//console.log(finalDate)
countdown.options.duration = milliSecondsDifference;
//console.log(countdown.options.duration)
e.preventDefault();
countdown.start();

})

//console.log(CanvasCircularCountdown)

//onsole.log(startBtn)


