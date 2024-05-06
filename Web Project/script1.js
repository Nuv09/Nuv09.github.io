
let form = document.getElementById("form");
let mname = document.getElementById("meal_name");
let price = document.getElementById("meal_price");
let calories = document.getElementById("meal_calories");
let description = document.getElementById("meal_description");
let photo = document.getElementById("meal_photo");

form.addEventListener("submit", (e) => {
e.preventDefault();
   validation(); });


function validation() {
let mName = mname.value.trim();
let mPrice = price.value.trim();
let mCalories = calories.value.trim();
let mDescription = description.value.trim();
let mPhoto = photo.value;
var newPath = mPhoto.replace("C:\\fakepath\\", "");

  if (mName == "") {
    alert("Please provide the meal name"); } 

  else if (isNaN(mPrice) || mPrice == "") {
    alert("Please write the price"); } 

  else if (isNaN(mCalories) || mCalories == "") {
    alert("Please write the meal calories");} 

  else if (mDescription == "") {
    alert("Please write meal description ");} 

  else if (mPhoto == "") {
    alert("Please upload the meal photo ");}


  else {
    let localItems = JSON.parse(localStorage.getItem("localItem"));
    if (localItems === null) {
      itemsList = [];
    } else {
      itemsList = localItems;
    }

    itemsList.push(mname.value);
    itemsList.push(price.value);
    itemsList.push(calories.value);
    itemsList.push(description.value);
    itemsList.push(newPath);
    localStorage.setItem("localItem", JSON.stringify(itemsList));
    alert("the name of the new meal that has been added successfully");
    clearItems();
  }
}

function clearItems() {
  document.getElementById("meal_name").value = "";
  document.getElementById("meal_price").value = "";
  document.getElementById("meal_calories").value = "";
  document.getElementById("meal_description").value = "";
  document.getElementById("meal_photo").value = "";
}
