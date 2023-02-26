const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const createListItems = (items) => {
  return items.map((item) => {
    const listEl = document.createElement("li");
    listEl.classList.add("item");
    listEl.textContent = item;

    return listEl;
  });
};

const listElements = createListItems(ingredients);

ingredientsEl.append(...listElements);
