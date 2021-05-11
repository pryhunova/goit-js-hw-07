const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const makeIngredientsItems = items => {
  return items.map(item => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = item;
    
    return itemEl;
  });
};

const elements = makeIngredientsItems(ingredients);
ingredientsRef.append(...elements);

console.log(ingredientsRef);