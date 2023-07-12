const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayForItems = [];

const list = document.querySelector('#ingredients');

for (let i = 0; i < ingredients.length; i += 1) {
  const newItem = document.createElement('li');
  newItem.textContent += ingredients[i];
  newItem.classList.add('item');
  arrayForItems.push(newItem);
}
list.append(...arrayForItems);
