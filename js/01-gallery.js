import { galleryItems } from "./gallery-items.js";
// console.log(createGallery(galleryItems));

const containerEl = document.querySelector(".gallery");
const markupEl = createGallery(galleryItems);
containerEl.insertAdjacentHTML("beforeend", markupEl);

containerEl.addEventListener("click", onContainer);

let instance;

function createGallery(images) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            loading="lazy"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>
    `;
    })
    .join("");
}

function onContainer(e) {
  e.preventDefault();
  // const isGalery = e.target.classList.contains("gallery");

  // if (isGalery) {
  //   return;
  // }
  if (e.target.nodeName !== "IMG") return;

  const largeImage = e.target.dataset.source;
  instance = basicLightbox.create(`
		<img src="${largeImage}">
	`);
  instance.show();
  // console.log(largeImage);
  document.addEventListener("keydown", closeModal);
}

function closeModal(e) {
  if (e.code === "Escape") {
    instance.close();
    // console.log(e.code);
    document.removeEventListener("keydown", closeModal);
  }
}
