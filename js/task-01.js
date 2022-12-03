const numberOfCategories = document.querySelectorAll('.item');
console.log("Number of categories: ", numberOfCategories.length);

for (let i = 0; i < numberOfCategories.length; i+=1) {
    const element = numberOfCategories[i];
    console.log("Category: ", element.firstElementChild.textContent);
    const list = element.lastElementChild.children;
    console.log("Elements: ", list.length);
}