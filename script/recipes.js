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

let create_recipes = $(`#create_recipes`);
let cards_container = $(`#cards_container`);
let search_recipe = $(`#search_recipe`);
let user_filter = ``;
let btn_add = $(`btn_add`);


$(document).ready(function() {

    search_recipe.on(`click`, searching_recipe);
    searching_recipe();
    create_recipes.on(`click`, validate_recipe);
    // no escucha el evento
    btn_add.on(`click`, add_recipe);
});