

let favoriteRecipes = [];

function saveFavorites(input) {
    let savedFavorites = localStorage.getItem("favoriteRecipes")
    if (!savedFavorites) {
        savedFavorites = [];
    } else {
        savedFavorites = JSON.parse(savedFavorites);
    }

    savedFavorites.push(input);
    localStorage.setItem("favoriteRecipes", JSON.stringify(savedFavorites));
}

function removeFavorites(input) {

}

function getRecipe() {
    // grabs user input
    userInputValue= document.querySelector('.user-input').value;
    // turn user input as all lowercase to reduce errors 
    userInputValue = userInputValue.toLowerCase();

    requestUrl = "https://api.spoonacular.com/recipes/" + userInputValue

}