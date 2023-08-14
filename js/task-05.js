const inputEl = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

inputEl.addEventListener("input", onChangeInput);

function onChangeInput(event) {
  if (event.currentTarget.value) {
    nameLabel.textContent = event.currentTarget.value;
  } else {
    nameLabel.textContent = "Anonymous";
  }
}
