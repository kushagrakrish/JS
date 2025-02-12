// example1
const btnText = document.getElementById("changeTextButton");
const para = document.getElementById("myParagraph");

btnText?.addEventListener("click", () => {
  para.textContent = "This is a changed para graph";
});

// example 2
const getFirstCity = document.getElementById("citiesList").firstElementChild;
const cityButtonText = document.getElementById("highlightFirstCity");

cityButtonText?.addEventListener("click", () => {
  getFirstCity.classList.add("highlight");
});
// console.log(getFirstCity);

// example 3
const shoppingListButton = document.getElementById("addNewItem");
const getShoppingList = document.getElementById("shoppingList");
const newShoppingItem = document.createElement("li");
const newItem = (newShoppingItem.textContent = "asd");
console.log(newItem);

shoppingListButton.addEventListener("click", () => {
  getShoppingList.appendChild(newShoppingItem);
});

// example 4
const removeItemButton = document.getElementById("removeItem");
const getTaskList = document.getElementById("taskList");

removeItemButton.addEventListener("click", () => {
  getTaskList.lastElementChild.remove();
  console.log(getTaskList);
});

// Example 5

const getClickMeBtn = document.getElementById("clickMeButton");
getClickMeBtn.addEventListener("click", () => {
  alert("Button is clicked");
});

// Example 6

const getTeaList = document.getElementById("teaList");

getTeaList?.addEventListener("click", (event) => {
  if (event.target && event.target.matches("#teamItem")) {
    event.target.classList.add("highlight");
  }
});

// example 7
const form = document.getElementById("feedbackForm");
const displayOutput = document.getElementById("displayFeedback");
form.addEventListener("submit", (e) => {
  const inputVal = document.getElementById("feedbackInput").value;
  e.preventDefault();
  displayOutput.textContent = `Output is : ${inputVal}`;
});

// example8

document.addEventListener("DOMContentLoaded", () => {
  const domStatus = (document.getElementById("domStatus").textContent =
    "Dom is Loaded fully");
});

// example9

const descText = document.getElementById("descText");
const changeColorBtn = document.getElementById("changeColor");
changeColorBtn.addEventListener("click", () => {
  descText.classList.toggle("highlight");
});
