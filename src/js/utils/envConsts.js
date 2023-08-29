import * as dotenv from 'dotenv';

dotenv.config();

export const pixabayKey = process.env.KEY;

export const IMAGES_PER_PAGE = 40;
export const LIGHTBOX_PARAMS = {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
};
