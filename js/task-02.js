const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
// console.log(ingredientsEl)

const elem = ingredients.map((optio) => {
  const El = document.createElement("li");
  El.classList.add("item");
  El.textContent = optio;
  return El;
});
ingredientsEl.append(...elem);
