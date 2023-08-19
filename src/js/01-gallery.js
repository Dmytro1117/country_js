import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import cardsTplOne from '../templates/card.hbs';
import cardsTplMany from '../templates/cards.hbs';

// console.log(galleryItems);

const containerEl = document.querySelector('.gallery');
const markupEl = createGallery(galleryItems);
containerEl.insertAdjacentHTML('beforeend', markupEl);

function createGallery(gallery) {
  // return gallery.map(cardsTplOne).join('');
  return cardsTplMany(gallery);
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
