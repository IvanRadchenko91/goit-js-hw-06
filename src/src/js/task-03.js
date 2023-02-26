const gallery = document.querySelector(".gallery");
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryEl = document.querySelector(".gallery");
galleryEl.style.padding = "0";
galleryEl.style.listStyle = "none";
galleryEl.style.display = "flex";
galleryEl.style.gap = "15px";

const galleryItems = images
  .map(
    (image) =>
      `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}"></li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", galleryItems);

const liEl = [...galleryEl.children];
liEl.forEach((li) => {
  li.style.maxWidth = "calc((100% - (15px * 2)) / 3)";

  const imgEl = li.firstElementChild;
  imgEl.style.display = "block";
  imgEl.style.width = "100%";
  imgEl.style.height = "auto";
  imgEl.style.objectFit = "cover";
});
