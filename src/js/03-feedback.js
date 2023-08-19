import throttle from 'lodash.throttle';

const KEY_LS = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const textEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('submit', handleFormSubmit);
formEl.addEventListener('input', throttle(handleFormInputLS, 1000));

let object = {};
savDataFromLS();

function handleFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(KEY_LS);
  console.log(object);
}

function handleFormInputLS(e) {
  object[e.target.name] = e.target.value;
  const stringifyObject = JSON.stringify(object);
  localStorage.setItem(KEY_LS, stringifyObject);
}

function savDataFromLS() {
  const savedForm = JSON.parse(localStorage.getItem(KEY_LS));
  object = savedForm || {};

  if (savedForm) {
    emailEl.value = savedForm.email || '';
    textEl.value = savedForm.message || '';
  }
}
