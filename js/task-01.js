const itemsCategories = document.querySelector('#categories').children;
console.log('Number of categories: ', itemsCategories.length); // Number of categories: 3

const titlesCategories = [...itemsCategories].map(element => element.querySelector('h2'));

const elementsCategories = [...itemsCategories].map(element => element.querySelectorAll('li'));

console.log(`Category: ${titlesCategories[0].textContent}`); // Category: Animals
console.log(`Elements: ${elementsCategories[0].length}`); // Elements: 4

console.log(`Category: ${titlesCategories[1].textContent}`); // Category: Products
console.log(`Elements: ${elementsCategories[1].length}`); // Elements: 3

console.log(`Category: ${titlesCategories[2].textContent}`); // Category: Technologies
console.log(`Elements: ${elementsCategories[2].length}`); // Elements: 5

