const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const items = ingredients.map((name) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = name;
  itemEl.classList.add("item");

  return itemEl;
});

console.log(items);

listEl.append(...items);
