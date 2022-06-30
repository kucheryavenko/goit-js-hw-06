const listEl = document.querySelector('#categories');

const itemCategories = listEl.children.length;
console.log('Number of categories: ', itemCategories);

const getInfoCategories = [...listEl.children].map((item) => {
    const titleCategories = item.firstElementChild.textContent;
    const elmentsInCategories = item.lastElementChild.children.length;

    console.log('Category: ', titleCategories);
    console.log('Elements: ', elmentsInCategories);
});






