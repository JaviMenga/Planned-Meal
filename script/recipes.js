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
let btns_add = [];
let recipes_selected_byUSer = [];
// Aquí se van guardando todas las recetas que el usuario agregar a su canasta
let recipes_selected_byUSer2 = [];
let basket = $(`#basket`);

search_recipe.on(`click`, searching_recipe);
searching_recipe();

$(document).ready(function() {

    btns_add = document.querySelectorAll(`.btn_Add`);
    btns_add.forEach((e) => e.addEventListener(`click`, (e) => {
        add_recipe(e.target.parentElement);
    }));

    create_recipes.on(`click`, validate_recipe);
});