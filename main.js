//Condtion: Receive the Time to Set our Timer and Start the Count Down
//When time's up, set alert message
//Time Function to be Called on setTimeout in our hydrator.html Timeout Method

console.log('hi from main.js');

document.getElementById('15min').addEventListener('click', function () {
  console.log('clicked 15 min');
  // setTimer(5000);
  duration(5000);
});

document
  .getElementById('30min')
  .addEventListener('click', () => duration(10000));
document
  .getElementById('45min')
  .addEventListener('click', () => duration(15000));
document
  .getElementById('60min')
  .addEventListener('click', () => duration(20000));

// function to set the timer
// function setTimer(milliseconds) {
//   setTimeout(() => alert('drink water, you fool!'), milliseconds);
// }

//Duration Function
function duration(milliseconds) {
  if (!checkIfActive()) return;

  let timeRemaining = milliseconds;

  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById('countDown').innerHTML =
    minutes + 'm' + seconds + 's ';

  //manually set the countdown timer - maybe
  let timer = setInterval(function () {
    timeRemaining -= 1000; //maybe won't work with setInterval?
    console.log('timeRemaining', timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(timer);
      console.log('hi from zero');
      document.getElementById('countDown').innerHTML = 'Drink!';
      setTimeout(() => alert('drink water, you fool!'), 500); //mystery solution
      return;
    }

    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('countDown').innerHTML =
      minutes + 'm' + seconds + 's ';
  }, 1000);
}

//helper function checkIfActive
//invoke on interval (every one minute)
//invoke on start of duration function
//fromTime, toTime
function checkIfActive() {
  const currTime = new Date().getHours();
  console.log('currentTime =', currTime);
  const fromTime = Number(document.querySelector('#fromTime').value);
  console.log('fromTime =', fromTime);
  const toTime = Number(document.querySelector('#toTime').value);
  console.log('toTime =', toTime);

  //Conditions
  if (currTime > fromTime && currTime < toTime) {
    return true;
  } else return false;
}
//if (currentTime > fromTime && currentTime < toTime)
// if (9:30 > 9:00 && 9:30 < 12 pm)
//extension is active
//else extension is inactive
