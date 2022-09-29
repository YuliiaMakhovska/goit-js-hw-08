import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const refs = {
  gallery: document.querySelector('.gallery'),
};

const imgMarkup = createImgMarkup(galleryItems);

function createImgMarkup(item) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join('');
}
refs.gallery.insertAdjacentHTML('beforeend', imgMarkup);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
});
