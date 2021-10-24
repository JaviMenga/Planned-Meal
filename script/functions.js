// FUNCIONES DEFINIDAS

// A
function add_recipe(recipe_user) {
    let recipe_selected = new Recipes(recipe_user.querySelector(`.btn_Add`).getAttribute(`data-id`), recipe_user.querySelector(`h5`).textContent, recipe_user.querySelector(`img`).src, 100, recipe_user.querySelector(`li`).textContent);
    recipes_selected_byUSer.push(recipe_selected);
    console.log(recipes_selected_byUSer);
    for (const recipe of recipes_selected_byUSer) {
        add_toBasket(recipe);
        recipes_selected_byUSer2.push(recipe);
    }

    recipes_selected_byUSer = [];
}


function add_toBasket(recipe) {
    basket.append(`<div class="card-header m-2 card--style">
                                        <img class="card-img-top card__img--size" src="${recipe.image}" alt="Foto de ${recipe.name}">
                                        <div class="card-body">
                                        <h5 class="card-title card-title--style">${recipe.name}</h5>
                                        <div class="card-body d-flex flex-column">
                                            <button id="btn_add" class="btn btn-color" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal${recipe.id}">Ver receta</button>
                                            <div class="modal fade" id="exampleModal${recipe.id}" tabindex="-1" aria-labellebdy="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl">
                                                    <div class="modal-content modal-content--color">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title card-title--style" id="exampleModalLabel">${recipe.name}</h5>
                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body text-start">
                                                            <ul>
                                                                <li>${recipe.instructions}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="btn-erase btn btn-color " data-id=${recipe.id}>Borrar</button>
                                        </div>
                                    </div>`);
}

// C
function checkIn() {
    let user = document.getElementById(`user`).value;
    let name = document.getElementById(`name`).value.toLowerCase();
    let lastname = document.getElementById(`lastName`).value.toLowerCase();
    let password = document.getElementById(`password`).value;
    let age = document.getElementById(`age`).value;
    let email = document.getElementById(`email`).value;
    let mjs = check_facts(user, name, lastname, password, age, email);
    if (mjs == ``) {
        activeUser = new Clients(user, name, lastname, password, age, email)
        save_user(activeUser);
        alert(`Usuario creado con éxito!`);
        translate_user();
    } else {
        alert(mjs);
    }
}

function check_facts(user, name, lastname, password, age, email) {
    let mjs = ``;
    if ((user) && (name) && (lastname) && (password) && (age) && (email)) {
        let fact = search_user(user);
        if (fact != false) {
            mjs = `Usuario existente`;
        }
    } else {
        mjs = `Tenés que ingresar todos los datos`;
    }
    return mjs;
}

// E
function enter(event) {
    let enter_key = event.keyCode;
    if (event.target == password_input && enter_key == 13) {
        log_in();
    } else if (event.target == email_input && enter_key == 13) {
        checkIn();
    }
}


function enable_inputs() {
    let hidden = $(`#register_input`);
    hidden.fadeIn(1000, function() {
        login.fadeOut();
    });
    $(`#title_login`).text(`Registrar`);
}

// I
function inject_html(recipe) {
    cards_container.append(`<div class="card-header m-2 card--style">
                                        <img class="card-img-top card__img--size" src="${recipe.image}" alt="Foto de ${recipe.name}">
                                        <div class="card-body">
                                        <h5 class="card-title card-title--style">${recipe.name}</h5>
                                        <div class="card-body d-flex flex-column">
                                            <button id="btn_add" class="btn btn-color" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal${recipe.id}">Ver receta</button>
                                            <div class="modal fade" id="exampleModal${recipe.id}" tabindex="-1" aria-labellebdy="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl">
                                                    <div class="modal-content modal-content--color">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title card-title--style" id="exampleModalLabel">${recipe.name}</h5>
                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body text-start">
                                                            <ul>
                                                                <li>${recipe.instructions}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <button class="btn_Add btn btn-color" type="button" data-id=${recipe.id}>Agregar</button>
                                    </div>`);
}
// L

// esto esta mal!! resolver!!
function load_recipe(newRecipe_id, newRecipe_image, newRecipe_name, newRecipe_instructions) {
    let new_recipe = new Recipes(newRecipe_id, newRecipe_name, newRecipe_image, 100, newRecipe_instructions);
    let new_recipe_JSON = JSON.stringify(new_recipe);
    $.post(URL_recipe, new_recipe_JSON, function(answer, state) {
        if (state === `success`) {
            $(".modal-footer").prepend(`<div>La receta de ${answer.name} ha sido creada con éxito!</div>`);
        }
    }, `json`);
}

function log_in() {
    let user = document.getElementById(`user`).value;
    let password = document.getElementById(`password`).value;
    activeUser = search_user(user);
    let password2 = validate_password(password, user);
    if (activeUser && password2) {
        translate_user();
    } else if (!activeUser) {
        alert(`El usuario que ingresaste no existe`);
    } else if (!password2) {
        alert(`Ingresá una contraseña correcta`);
    }
    return activeUser;
}

// S
function search_user(user_loggedIn) {
    if (!localStorage.getItem(`users_list`)) {
        return false
    } else {
        let stored_users = JSON.parse(localStorage.getItem(`users_list`));
        let found = false;
        for (const user of stored_users) {
            if (user.user == user_loggedIn) {
                found = user;
                return found
            }
        }
        return found
    }
}

function searching_recipe() {
    $.getJSON(URL_recipe, function(answer, state) {
        if (state === `success`) {
            let myRecipes = answer;
            user_filter = $(`#user_filter`).val().toLowerCase();
            for (const recipe of myRecipes) {
                let myRecipes_name = recipe.name.toLowerCase();
                if (myRecipes_name.indexOf(user_filter) !== -1) {
                    inject_html(recipe)
                }
            }

        }
    })
}

function save_user(new_user_loggedIn) {
    if (localStorage.getItem(`users_list`)) {
        let stored_users = JSON.parse(localStorage.getItem(`users_list`));
        stored_users.push(new_user_loggedIn);
        let stored_users_string = JSON.stringify(stored_users);
        localStorage.setItem(`users_list`, stored_users_string);
    } else {
        stored_users = new Array();
        stored_users.push(new_user_loggedIn);
        let stored_users_string = JSON.stringify(stored_users);
        localStorage.setItem(`users_list`, stored_users_string);
    }
}

// T
function translate_user() {
    let userIcon = $(`#userIcon`);
    userIcon.append(`<p class="active_user">${activeUser.user}</p>`)
}

// V
function validate_password(password_loggedIn, user_loggedIn) {
    let fact = search_user(user_loggedIn);
    let comparison = false;
    if (fact != false) {
        if (fact.password == password_loggedIn) {
            comparison = true;
            return comparison
        }
    }
    return comparison;
}

function validate_recipe() {
    $.getJSON(URL_recipe, function(answer, state) {
        if (state === `success`) {
            let newRecipe_image = $(`#newRecipe_image`).val();
            let newRecipe_name = $(`#newRecipe_name`).val();
            let newRecipe_instructions = $(`#newRecipe_instructions`).val();
            let newRecipe_id;
            let myRecipes = answer;
            let id;
            for (const recipe of myRecipes) {
                id = recipe.id;
            }
            newRecipe_id = id + 1;

            if ((newRecipe_id) && (newRecipe_image) && (newRecipe_name) && (newRecipe_instructions)) {
                load_recipe(newRecipe_id, newRecipe_image, newRecipe_name, newRecipe_instructions);
            }
        }
    });
}