// console.log('moduls.js it work')
// 1
// Модуль галлереи
const gallery = document.querySelector(".object-page__block-gal");
const galleryBlock = document.querySelector(".object-page__block-img");

if (gallery) {
  if(galleryBlock){
    let createImg = gallery.querySelector('img')
    let textTest = createImg
    galleryBlock.innerHTML = `${textTest.outerHTML}`;
  }
  galleryImg = gallery.querySelectorAll("img");
  galleryImg.forEach(function (item,) {
    item.addEventListener("click", (event) => {
      galleryBlock.innerHTML = `${event.target.outerHTML}`;
    });
  });
}
