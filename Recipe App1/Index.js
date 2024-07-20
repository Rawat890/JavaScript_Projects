const recipeListContainer = document.querySelector('.recipe-list');
const loader = document.querySelector('.loader');
const details = document.querySelector('.recipe-details');


async function fetchListOfRecipes() {
    const response = await fetch('https://dummyjson.com/recipes', {
        method: 'GET'
    });

    const result = await response.json();

    //recipes is the name of array the json returned
    if (result && result.recipes && result.recipes.length > 0) {

        displayRecipeList(result.recipes);

    }
    console.log(result);
}


//function display recipe list
function displayRecipeList(getRecipeList) {
    getRecipeList.forEach(recipeItem => {

        const { name,image, cuisine,ingredients, mealType, rating, id } = recipeItem;
        //definition


        const recipeItemWrapper = document.createElement("div");
        recipeItemWrapper.classList.add('recipe-item');

        //name
        const recipeName = document.createElement("p");
        recipeName.textContent=name;
        recipeName.classList.add('recipe-name');
        


        //image
        const recipeImage = document.createElement("img");
        recipeImage.src = image;
        recipeImage.classList.add('recipe-image');

        //cuisine
        const recipeCuisine = document.createElement("p");
        recipeCuisine.textContent = cuisine;
        recipeCuisine.classList.add('recipe-cuisine');

        //ingredients
        const recipeIngredient = document.createElement("p");
        recipeIngredient.textContent = ingredients.map(item => item).join(",");
        recipeIngredient.classList.add('recipe-ingredients');

        //mealType
        const recipeMealType = document.createElement("p");
        recipeMealType.textContent = mealType;
        recipeMealType.classList.add('recipe-meal-type');

        //rating
        const recipeRating = document.createElement("p");
        recipeRating.textContent = rating;
        recipeRating.classList.add('recipe-rating');


        //details button
        const recipeDetails= document.createElement('button');
        recipeDetails.classList.add('recipe-details-button');
        recipeDetails.classList.add('recipe-details-button-labeled');
        recipeDetails.addEventListener('click',()=> handleRecipeDetails(id));

        recipeItemWrapper.appendChild(recipeImage);
        recipeItemWrapper.appendChild(recipeName);
        recipeItemWrapper.appendChild(recipeCuisine);
        recipeItemWrapper.appendChild(recipeIngredient);
        recipeItemWrapper.appendChild(recipeMealType);
        recipeItemWrapper.appendChild(recipeRating);
        recipeItemWrapper.appendChild(recipeDetails);
        

        //showing on page
        recipeListContainer.appendChild(recipeItemWrapper);

    });
}



/*calling list function*/
fetchListOfRecipes();


//handle recipe details function
async function handleRecipeDetails(getId) {
    const response= await fetch('https://dummyjson.com/recipes/1');
    const result = await response.json();
    console.log(result);
}