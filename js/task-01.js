const list = document.querySelectorAll(".item");

console.log(`Number of categories:`, list.length);

for (let li of list) {
  console.log(`Category: ${li.firstElementChild.textContent}`);
  console.log(`Elements: ${li.lastElementChild.children.length}`);
}
