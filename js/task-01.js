const ulRef = document.querySelector('ul#categories').children.length;
 
console.log(`В списке ${ulRef} категории.`);

const ulItemsRefs = document.querySelectorAll("#categories li.item");

ulItemsRefs.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
    }
)