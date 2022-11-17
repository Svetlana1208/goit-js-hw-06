const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const containerIngredients = document.querySelector('ul#ingredients');

const makeListIngredients = elements => {
  return elements.map(element => {
    const ingredient = document.createElement('li');
    ingredient.textContent = element;
    ingredient.classList.add('item');

    return ingredient;
  });
};

const el = makeListIngredients(ingredients);
containerIngredients.append(...el);