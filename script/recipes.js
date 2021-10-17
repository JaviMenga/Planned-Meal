class Recipes {
    constructor(id, name, image, calories, instructions) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.calories = calories;
        this.instructions = instructions;
    }
}
const URL_recipe = "../recetas.json";

let creating_recipes = $(`#creating_recipes`);
let cards_container = $(`#cards_container`);
let search_recipe = $(`#search_recipe`);
let user_filter = ``;

$(document).ready(function() {
    search_recipe.on(`click`, searching_recipe);
    searching_recipe();
    creating_recipes.on(`click`, validate_recipe)

});