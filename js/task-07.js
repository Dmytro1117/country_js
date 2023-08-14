const inputEl = document.querySelector("#font-size-control");
const outputEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
    // console.log(event.target.value)
  outputEl.style.fontSize = event.target.value+"px";
});






