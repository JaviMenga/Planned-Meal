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
let basket = {};
let basket_contains = document.getElementById(`basket`);
let btn_eraseAll = document.getElementById(`btn-erase`);


search_recipe.on(`click`, searching_recipe);
searching_recipe();

$(document).ready(function() {

    btns_add = document.querySelectorAll(`.btn_Add`);
    btns_add.forEach((e) => e.addEventListener(`click`, (e) => {
        add_recipe(e.target.parentElement);
    }));

    btn_eraseAll.addEventListener(`click`, erase_basket);

    basket_contains.addEventListener(`click`, e => {
        erase_recipe(e);
    });

    if (localStorage.getItem(`basket`)) {
        basket = JSON.parse(localStorage.getItem(`basket`));
        add_toBasket(basket);
    }
    create_recipes.on(`click`, validate_recipe);
});