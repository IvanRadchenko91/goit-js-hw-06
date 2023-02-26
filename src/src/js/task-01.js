const categoriesEl = document.querySelector("#categories");
const categoriesIt = categoriesEl.querySelectorAll(".item");

const numberChildElements = categoriesEl.children.length;
console.log(`Number of categories: ${numberChildElements}`);

categoriesIt.forEach((item) => {
  const titleItem = item.firstElementChild.textContent;
  const numberItemsInCategory = item.lastElementChild.children.length;

  console.log(`Category: ${titleItem} \nElements: ${numberItemsInCategory}`);
});
