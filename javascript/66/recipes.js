/*global $, pcs*/
(function () {
    'use strict';

    const recipeImage = $('#recipe img');
    const recipeTitle = $('#recipe h2');
    const ingredientsUl = $('#recipe ul');

    fetch('recipes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(recipes => {
            const recipeDiv = $('#recipes');
            recipes.forEach(recipe => {
                recipeDiv.append(`<input name="recipes" type="radio" value="${recipe}"> ${recipe}`);
            });

            $('input[name="recipes"]').change(event => {
                //console.log(event.target.value);
                //console.log($('input[name="recipes"]:checked').val());
                fetch(`${event.target.value}.json`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`${response.status} ${response.statusText}`);
                        }
                        return response.json();
                    })
                    .then(recipe => {
                        //console.log(recipe);
                        recipeImage.attr('src', recipe.pictureUrl);
                        recipeTitle.text(recipe.name);
                        ingredientsUl.empty();
                        recipe.ingredients.forEach(ingredient => {
                            ingredientsUl.append(`<li>${ingredient}</li>`);
                        });
                    })
                    .catch(err => pcs.messageBox.show(err, true));
            });
        })
        .catch(err => pcs.messageBox.show(err, true));
}());