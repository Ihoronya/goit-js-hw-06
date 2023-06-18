const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

const htmlIngredients = ingredients.map(ingredient => {
const createIngredient = document.createElement("li");
createIngredient.classList.add("item")
createIngredient.textContent = ingredient

return createIngredient
})

ingredientsEl.append(...htmlIngredients)
