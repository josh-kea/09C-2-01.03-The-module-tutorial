import CanvasCircularCountdown from "canvas-circular-countdown";

window.addEventListener('DOMContentLoaded', init);

const canvas = document.getElementById('countdown-canvas');
const startBtn = document.querySelector('#start-btn');
const form = document.querySelector('form');
let countdown;


function init(){
  countdown = new CanvasCircularCountdown(canvas, {
    duration: 0,    
    });
    //
    console.log(countdown)
};


/* 
function init(){
  countdown = new CanvasCircularCountdown(canvas, {
    duration: 15058.00000000454,
    showCaption: true
    
    };, (percentage, time, instance) => {
        if (time.elapsed >= 5000 ) {
          instance.stop();
        }
      });
};

*/


form.addEventListener('submit', () => {
  let todayDate = new Date();
  //console.log(todayDate)
  let finalDate = new Date(form.elements.date.value);
  //Getting date difference
  let dateDifference = Math.abs(finalDate - todayDate) / 1000;
  let secondsDifference = dateDifference % 60;
  let milliSecondsDifference = secondsDifference * 1000;
  //console.log(finalDate)

  setDate(milliSecondsDifference);
  console.log(countdown)




})

function setDate ( milliseconds ) {
  countdown.options.duration = milliseconds
}

//console.log(CanvasCircularCountdown)

//onsole.log(startBtn)
//countdown.start();

startBtn.addEventListener('click', ()=>{
  console.log(countdown)
  countdown.start();

})
