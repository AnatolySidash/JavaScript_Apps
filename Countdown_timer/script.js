const weeksEl = document.getElementById('weeks');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYears = "01 Jan 2023";

function formatTime(time) {
   return time < 10 ? `0${time}` : time;
}

function countdown() {
   const newYearsDate = new Date(newYears);
   const currentDate = new Date();

   const totalSeconds = (newYearsDate - currentDate) / 1000;

   const weeks = Math.floor(totalSeconds / 3600 / 24 / 7);
   const days = Math.floor(totalSeconds / 3600 / 24) % 7;
   const hours = Math.floor(totalSeconds / 3600) % 24;
   const minutes = Math.floor(totalSeconds / 60) % 60;
   const seconds = Math.floor(totalSeconds) % 60;

   weeksEl.innerHTML = formatTime(weeks);
   daysEl.innerHTML = formatTime(days);
   hoursEl.innerHTML = formatTime(hours);
   minutesEl.innerHTML = formatTime(minutes);
   secondsEl.innerHTML = formatTime(seconds);
}

countdown();

setInterval(countdown, 1000);