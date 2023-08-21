import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

btnEl.addEventListener('click', handleStart);
inputEl.addEventListener('click', () => {});

let formatDate = null;
let timeDifference = 0;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectDate(selectedDates[0]);
  },
};

flatpickr(inputEl, options);

btnEl.disabled = true;

function handleStart() {
  inputEl.disabled = true;
  btnEl.disabled = true;
  timerId = setInterval(startTimer, 1000);
}

function startTimer() {
  timeDifference -= 1000;

  if (
    daysEl.textContent <= 0 &&
    secondsEl.textContent <= 0 &&
    minutesEl.textContent <= 0 &&
    hoursEl.textContent <= 0
  ) {
    Notiflix.Notify.success('Time end');
    clearInterval(timerId);
    inputEl.disabled = false;
  } else {
    formatDate = convertMs(timeDifference);
    renderDate(formatDate);
  }
}

function selectDate(selectedDates) {
  const dateNow = Date.now();
  if (selectedDates < dateNow) {
    Notiflix.Notify.failure('Please choose a date in the future');
    btnEl.disabled = true;
    return;
  } else {
    Notiflix.Notify.success('It іs Ok');
    btnEl.disabled = false;
    timeDifference = selectedDates.getTime() - dateNow;

    formatDate = convertMs(timeDifference);
    renderDate(formatDate);
  }
}

function renderDate({ days, hours, minutes, seconds }) {
  secondsEl.textContent = seconds;
  minutesEl.textContent = minutes;
  hoursEl.textContent = hours;
  daysEl.textContent = days;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

Notiflix.Notify.init({
  width: '400px',
  position: 'center-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  distance: '20px',
  opacity: 1,
  borderRadius: '3px',
  timeout: 2000,
  fontAwesomeIconStyle: 'shadow', // 'basic' - 'shadow'
  fontAwesomeIconSize: '35px',
  fontSize: '20px',
});
