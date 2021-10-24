class Clients {
    constructor(user, name, lastname, password, age, email, recipes_saved) {
        this.user = user;
        this.name = name;
        this.lastname = lastname;
        this.password = password;
        this.age = age;
        this.email = email;
        this.recipes_saved = recipes_saved;
    }
}

let activeUser;
let login = $(`#login`);
let password_input = document.getElementById(`password`);
let register = document.getElementById(`register`);
let email_input = document.getElementById(`email`);

$(document).ready(function() {

    login.on(`click`, log_in);
    password_input.addEventListener(`keydown`, enter);
    register.addEventListener(`mousedown`, enable_inputs);
    register.addEventListener(`click`, checkIn);
    email_input.addEventListener(`keydown`, enter);


});