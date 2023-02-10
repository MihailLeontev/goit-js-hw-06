const categoriesRef = document.getElementById("categories");
const listCategories = categoriesRef.children;
const lengthAmountCategories = listCategories.length;
console.log("Number of categories: ", lengthAmountCategories);
for (let category of listCategories) {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Elements: ", category.lastElementChild.children.length);
}