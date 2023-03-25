const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
const ingredientsList = document.getElementById("ingredients");

const list = ingredients.map((ingredients) => `<li class="item">${ingredients}</li>`)
.join("");

console.log(list);

ingredientsList.innerHTML = list;