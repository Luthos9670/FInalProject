document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const cocktailList = document.getElementById('cocktail');
    const cocktailDetailsContent = document.querySelector('.cocktail-details-content');
    const recipeCloseBtn = document.getElementById('recipe-close-btn');

    // Event Listeners
    searchBtn.addEventListener('click', getCocktailList);
    cocktailList.addEventListener('click', getCocktailRecipe);
    recipeCloseBtn.addEventListener('click', () => {
        cocktailDetailsContent.parentElement.classList.remove('showRecipe');
    });

    // Fetch cocktail list based on ingredient search
    function getCocktailList() {
        let searchInputTxt = document.getElementById('search-input').value.trim();
        if (searchInputTxt) {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    let html = "";
                    if (data.drinks) {
                        data.drinks.forEach(drink => {
                            html += `
                                <div class="cocktail-item" data-id="${drink.idDrink}">
                                    <div class="cocktail-img">
                                        <img src="${drink.strDrinkThumb}" alt="cocktail">
                                    </div>
                                    <div class="cocktail-name">
                                        <h3>${drink.strDrink}</h3>
                                        <a href="#" class="recipe-btn">Get Recipe</a>
                                    </div>
                                </div>
                            `;
                        });
                        cocktailList.classList.remove('notFound');
                    } else {
                        html = "Sorry, we couldn't find any cocktails.";
                        cocktailList.classList.add('notFound');
                    }
                    cocktailList.innerHTML = html;
                })
                .catch(error => console.error('Error fetching cocktail data:', error));
        } else {
            cocktailList.innerHTML = "<p>Please enter an ingredient.</p>";
        }
    }

    // Fetch cocktail recipe details by ID
    function getCocktailRecipe(e) {
        e.preventDefault();
        if (e.target.classList.contains('recipe-btn')) {
            let cocktailItem = e.target.parentElement.parentElement;
            let cocktailId = cocktailItem.dataset.id;

            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
                .then(response => response.json())
                .then(data => {
                    if (data.drinks && data.drinks.length > 0) {
                        cocktailRecipeModal(data.drinks[0]);
                    } else {
                        console.error('No recipe details found');
                    }
                })
                .catch(error => console.error('Error fetching cocktail recipe:', error));
        }
    }

    // Display the cocktail recipe modal with ingredients
    function cocktailRecipeModal(drink) {
        // Collect ingredients dynamically
        let ingredients = [];
        for (let i = 1; i <= 15; i++) {
            if (drink[`strIngredient${i}`]) {
                ingredients.push(`${drink[`strIngredient${i}`]} - ${drink[`strMeasure${i}`] || 'No measurement'}`);
            }
        }

        // Create HTML content with ingredients
        let html = `
            <h2 class="recipe-title">${drink.strDrink}</h2>
            <p class="recipe-category">${drink.strCategory || "Category Unavailable"}</p>
            <div class="recipe-instruct">
                <h3>Instructions</h3>
                <p>${drink.strInstructions || "No instructions available."}</p>
            </div>
            <div class="recipe-ingredients">
                <h3>Ingredients</h3>
                <ul>
                    ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            <div class="recipe-meal-img">
                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
            </div>
           
        `;
        
        // Display the modal with the recipe
        cocktailDetailsContent.innerHTML = html;
        cocktailDetailsContent.parentElement.classList.add('showRecipe');
    }
});
