document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("Form_E").addEventListener("submit", function(event) {

        event.preventDefault();


        var restaurantSelect = document.getElementById("PR");
        var selectedRestaurant = restaurantSelect.options[restaurantSelect.selectedIndex].value;
        if (!selectedRestaurant) {
            alert("Please select a restaurant.");
            return;
        }


        var ratingInput = document.getElementById("rating").value;
        if (!ratingInput) {
            alert("Please provide a rating.");
            return;
        }


        var restaurantName = restaurantSelect.options[restaurantSelect.selectedIndex].text;
        alert("Thank you for your feedback!\nYour rating for restaurant " + restaurantName + " is " + ratingInput);


        window.location.href = "index.html";
    });
});
