
var offersData = [
  {
    id: 1,
    name: "meal1",
    image: "QwnerOffer1.png",
    description:
      "Offer from Oct 20th to Nov 30th: Get 20% off on our three signature drinks:Kopi Goula, Regular Run, and Hojicha Tea.",
    offer: 20,
  },
  {
    id: 2,
    name: "meal2",
    image: "QwnerOffer2.png",
    description:
      "Our new offer for Biryani enthusiasts: combo starts at 150 SR plus tax. We also introduced a combo for our rice meal.",
    offer: 10,
  },
  {
    id: 3,
    image: "QwnerOffer3.png",
    description:
      "For burger lovers, exclusive offer this weekend: 50% off our on our famous delicious Super Burger. Don't miss the offer!",
    offer: 30,
  },
];

function displayOffers() {
  var html = " ";

  setTimeout(() => {
  for (var i = 0; i < offersData.length; i++) {
      var no = i + 1;
      html += "<div class='offers'>";
      html += "<div class='content'>";
      html +=  "<img src='images/" + offersData[i].image + "' alt='Offer" + offersData[i].id + "'>";
      html += "<p class='offer-text'>" + offersData[i].description + "</p>";
      html += "<input class='checkinput' type='checkbox' id='offer" + offersData[i].id + "' name='offer' value =" + offersData[i].id + ">";
      html += "<span class='custom-checkbox'></span>";
      html += "<label for='offer" + offersData[i].id + "' class='Choose'>Choose</label>";
      html += " </div> </div>";
    }

    document.getElementById("offersForm").innerHTML = html;
  }, 200);
}

displayOffers();


var deleteB = document.getElementById("deleteOffers");
deleteB.addEventListener("click", (e) => {
  var checkboxs = document.querySelectorAll("input[type='checkbox']:checked");
if (checkboxs.length > 0) {
    var confirmDelete = confirm("Are you sure you want to delete?");
if (confirmDelete) {
  for (var i = 0; i < offersData.length; i++) {
        var no = i + 1;
        removeItem(checkboxs[i].value);
        displayOffers();
      }
    }
  } else { alert("Please select at least one offer "); }
});


function removeItem(rec) {
  var filter = offersData.filter((a, i) => {
  if (rec == a.id) {
      offersData.splice(i, 1);
    }
  });

}


var addForm = document.getElementById("addForm");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addOnClick(); });

function addOnClick() {
  let mName = document.getElementById("meal_name").value;
  let offer = document.getElementById("meal_offer").value;
  let description = document.getElementById("meal_description").value;
  let photo = document.getElementById("meal_photo").value;
  var newPath = photo.replace("C:\\fakepath\\", "");
  if (mName == "") {
    alert("Please provide the meal name");
  } 
  else if (isNaN(offer) || offer == "") {
    alert("Please write the offer %");
  } 
  else if (description == "") { 
    alert("Please write meal description ");
  } 
  else if (photo == "") {
    alert("Please upload the meal photo ");
  } 
  else {
    
    let id = offersData.length + 1;
    offersData.push({
      id: id,
      image: newPath,
      description: description,
      offer: offer,
    });

    console.log(offersData);
    displayOffers();
    clearItems();
  }
}


function clearItems() {
  document.getElementById("meal_name").value = "";
  document.getElementById("meal_offer").value = "";
  document.getElementById("meal_description").value = "";
  document.getElementById("meal_photo").value = "";
}
