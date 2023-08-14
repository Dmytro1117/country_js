const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onChangeInput);

function onChangeInput(event) {
  if (event.currentTarget.value.length < event.currentTarget.dataset.length) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
}
