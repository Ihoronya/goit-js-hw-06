
const categories = document.querySelector("#categories");

console.log(`Number of categories: ${categories.children.length}`);

[...categories.children].forEach(item => {
    console.log(`Category: ${item.firstElementChild.innerText}`);
    const test = item.lastElementChild;
    console.log(`Elements: ${test.children.length}`);
});


