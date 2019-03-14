import CanvasCircularCountdown from "canvas-circular-countdown";

window.addEventListener('DOMContentLoaded', init);

const canvas = document.getElementById('countdown-canvas');
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


form.addEventListener('submit', e => {
  let todayDate = new Date();
  //console.log(todayDate)
  //console.log(form.elements.date.value);
  //console.log(form.elements.time.value);
  //console.log(todayDate.getTime())

  
  let finalDate = new Date(form.elements.date.value + ' ' + form.elements.time.value);
  //Getting date difference
  let milliSecondsDifference = finalDate.getTime()-todayDate.getTime();
  //console.log(finalDate)
console.log(milliSecondsDifference);
  //setDate(milliSecondsDifference);

  createNewCanvas(milliSecondsDifference);
  e.preventDefault();




})

/*

function setDate ( milliseconds ) {
  countdown.options.duration = milliseconds
}

*/

function createNewCanvas (milliseconds) {
  countdown = new CanvasCircularCountdown(canvas, {
    duration: milliseconds
    });
    countdown.start();
}

//countdown.start();

//console.log(CanvasCircularCountdown)

//onsole.log(startBtn)
//countdown.start();

/*

function createButton(){
  console.log('button should be made')
  let startBtn = document.createElement('BUTTON');
    startBtn.addEventListener('click', ()=>{
      console.log(countdown)
      
    
    })

    document.body.appendChild(startBtn);
}

*/