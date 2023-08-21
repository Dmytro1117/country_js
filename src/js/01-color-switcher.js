const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

btnStartEl.addEventListener('click', handleStartChangeColor);
btnStopEl.addEventListener('click', handleStopChange);

let timerId = null;

function handleStartChangeColor() {
  btnStartEl.disabled = true;
  btnStopEl.disabled = false;

  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function handleStopChange() {
  btnStopEl.disabled = true;
  btnStartEl.disabled = false;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
