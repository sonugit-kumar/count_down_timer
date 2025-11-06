const days = document.getElementById('days');
const hours= document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

const formatTime = (time) => {
  return time < 10  ? `0${time}`:time;
}

const updateCountdown =(deadline) => {
  const currentTime =new Date();
  const timeDifference = deadline - currentTime; // milliseconds

  //  calculate days, hours, mins ,secs from timeDiffrence
  let calSecs = Math.floor (timeDifference/1000)%60;
  let calMins = Math.floor (timeDifference/1000/60)%60;
  let calHours = Math.floor (timeDifference/1000/60/60)%24;
  let calcDays = Math.floor (timeDifference/1000/60/60/24);

  days.textContent =formatTime(calcDays);
  mins.textContent= formatTime(calMins);
  hours.textContent = formatTime(calHours);
  secs.textContent = formatTime(calSecs);
}

const countDown =(targetDate) => {
  setInterval(() => updateCountdown(targetDate),1000);
}

const targetDate = new Date("jan 1 2026 05:07");
countDown(targetDate);