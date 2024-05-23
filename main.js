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
      // before alert
      document.querySelector('.time-container').style.backgroundColor =
        'rgb(53, 174, 174)';
      // setTimeout()
      setTimeout(() => {
        // alert
        alert('drink water, you fool!');
        // after alert
        document.querySelector('.time-container').style.backgroundColor =
          '#fff';

        duration(milliseconds);
      }, 500);

      return;
    }

    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('countDown').innerHTML =
      minutes + 'm' + seconds + 's ';
  }, 1000);
}

//Function to compare current time of day to Active Duration settings (fromTime and toTime)
function checkIfActive() {
  const currTime = new Date().getHours();
  console.log('currentTime =', currTime);
  const fromTime = Number(document.querySelector('#fromTime').value);
  console.log('fromTime =', fromTime);
  const toTime = Number(document.querySelector('#toTime').value);
  console.log('toTime =', toTime);

  //Conditions
  if (currTime > fromTime && currTime < toTime) {
    // og url
    document.getElementById('img-dog').src =
      'https://ugokawaii.com/wp-content/uploads/2022/07/dog-drink-water.gif';
    return true;
  } else {
    // swich img url if outside Active Duration
    document.getElementById('img-dog').src =
      'https://media1.giphy.com/media/fAUvpKlrAftUIe4SQm/giphy.gif';

    //add functionality to disable current timer
    return false;
  }
}

//when we change either toTime or fromTime, invoke function

// //FUNCTION
// function timeSelectionFixer() {
//   const fromTime = Number(document.querySelector('#fromTime').value);
//   console.log('fromTime =', fromTime);
//   const toTime = Number(document.querySelector('#toTime').value);
//   console.log('toTime =', toTime);

//   if(fromTime > toTime)

// }
//if we changed from time
//Condition if(fromTime > toTime){ toTime = fromTime}

//if we changed to time
//if (fromTime > toTime) fromTime = toTime

//if(toTime(12am) = fromTime(11pm)){buttom work all day}

//invoke checkIfActive
