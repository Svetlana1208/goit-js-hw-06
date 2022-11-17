const numberOfCategories = document.querySelectorAll('.item');
console.log("Number of categories: ", numberOfCategories.length);

const firstElement = document.querySelector('.item');
const firstElementCategoryName = firstElement.firstElementChild;

const firstElementList = firstElementCategoryName.nextElementSibling;
const firstElementItems = firstElementList.children;

console.log("Category: ", firstElementCategoryName.textContent);
console.log("Elements: ", firstElementItems.length);

const secondElement = firstElement.nextElementSibling;
const secondElementCategoryName = secondElement.firstElementChild;

const secondElementList = secondElementCategoryName.nextElementSibling;
const secondElementItems = secondElementList.children;
    
console.log("Category: ", secondElementCategoryName.textContent);
console.log("Elements: ", secondElementItems.length);

const thirdElement = secondElement.nextElementSibling;
const thirdElementCategoryName = thirdElement.firstElementChild;

const thirdElementList = thirdElementCategoryName.nextElementSibling;
const thirdElementItems = thirdElementList.children;
    
console.log("Category: ", thirdElementCategoryName.textContent);
console.log("Elements: ", thirdElementItems.length);


