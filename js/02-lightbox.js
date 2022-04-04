import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsEl = document.querySelector(".gallery");
const galleryImg = (images) => {
  return images
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" title = "${description}" />
        </a></li>`;
    })
    .join("");
};
const imgCards = galleryImg(galleryItems);
galleryItemsEl.insertAdjacentHTML("afterbegin", imgCards);
galleryItemsEl.addEventListener("click", onImgClick);

const lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 });
function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  lightbox();
}
console.log(galleryItems);
