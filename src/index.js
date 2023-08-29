import { fetchPixabayImages } from "./js/fetchPixabay.js";
import { IMAGES_PER_PAGE, LIGHTBOX_PARAMS } from "./js/utils/envConsts.js";

import { Notify } from "notiflix";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.css";

import cardTpl from "./js/templates/cardTpl.hbs";

import "./css/styles.css";

const formEl = document.querySelector(".search-form");
const galleryEl = document.querySelector(".gallery");
const sentEl = document.querySelector("#sentinel");
formEl.addEventListener("submit", handleFormSubmit);

let page = null;
let query = null;
let pagesAvailable = null;

const lightbox = new SimpleLightbox(".gallery a", LIGHTBOX_PARAMS);

async function handleFormSubmit(e) {
  e.preventDefault();
  page = 1;
  query = e.target.elements.searchQuery.value.trim();
  observer.observe(sentEl);
  if (!query) {
    Notify.failure("Input somethink and please try again.");
    return;
  }
  try {
    const { hits, totalHits } = await fetchPixabayImages(query, page);
    pagesAvailable = Math.ceil(totalHits / IMAGES_PER_PAGE);
    galleryEl.innerHTML = "";

    if (!hits.length) {
      Notify.failure(
        "Sorry, there are no images matching your search query. Please try again."
      );
      return;
    }
    const markup = hits.map((image) => cardTpl(image)).join("");
    galleryEl.innerHTML = markup;
    lightbox.refresh();
    Notify.info(`Hooray! We found ${totalHits} images.`);
  } catch (error) {
    Notify.failure(error.message);
  }
}

function onEntry(entries) {
  entries.forEach(async (entry) => {
    if (entry.isIntersecting && query !== null) {
      page += 1;
      try {
        const { hits, totalHits } = await fetchPixabayImages(query, page);
        pagesAvailable = Math.ceil(totalHits / IMAGES_PER_PAGE);
        if (page === pagesAvailable) {
          Notify.info(`Oupps! Last "${query}" images.`);
          observer.disconnect();
        }
        const markup = hits.map((image) => cardTpl(image)).join("");
        galleryEl.insertAdjacentHTML("beforeend", markup);

        lightbox.refresh();
      } catch (error) {
        Notify.failure(error.message);
      }
    }
  });
}

const observer = new IntersectionObserver(onEntry, {
  rootMargin: "500px",
});
observer.observe(sentEl);
