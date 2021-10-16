// FUNCIONES DEFINIDAS

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

// L
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

function save_user(new_user_loggedIn) {
    if (localStorage.getItem(`users_list`)) {
        console.log(`ya está`)
        let stored_users = JSON.parse(localStorage.getItem(`users_list`));
        stored_users.push(new_user_loggedIn);
        let stored_users_string = JSON.stringify(stored_users);
        localStorage.setItem(`users_list`, stored_users_string);
    } else {
        console.log(`no está`)
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


// A
// esto esta mal!! resolver esto!
function agregar_receta(imagen_recetaNueva, nombre_recetaNueva, instrucciones_recetaNueva) {
    let receta_nueva = new Recetas(nombre_recetaNueva, imagen_recetaNueva, 100, instrucciones_recetaNueva, `carnivoro`);
    let receta_nueva_JSON = JSON.stringify(receta_nueva);
    $.post(URL_receta, receta_nueva_JSON, (respuesta, estado) => {
        if (estado === `success`) {
            $(".modal-footer").prepend(`<div>La receta de ${respuesta.nombre} ha sido creada con éxito!</div>`);
        }
    }, `json`);
}


function buscando_receta() {
    $.getJSON(URL_receta, function(respuesta, estado) {
        if (estado === `success`) {
            let misRecetas = respuesta;
            user_filter = $(`#user_filter`).val().toLowerCase();
            for (const receta of misRecetas) {
                let nombre_misRecetas = receta.nombre.toLowerCase();
                if (nombre_misRecetas.indexOf(user_filter) !== -1) {
                    contenedor_cartas.append(`<div class="card-header m-2 card--style">
                                        <img class="card-img-top card__img--size" src="${receta.imagen}" alt="Foto de ${receta.nombre}">
                                        <div class="card-body">
                                        <h5 class="card-title card-title--style">${receta.nombre}</h5>
                                        <div class="card-body d-flex flex-column">
                                            <button class="btn btn-color m-1" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal${receta.id}">Ver receta</button>
                                            <div class="modal fade" id="exampleModal${receta.id}" tabindex="-1" aria-labellebdy="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl">
                                                    <div class="modal-content modal-content--color">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title card-title--style" id="exampleModalLabel">${receta.nombre}</h5>
                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body text-start">
                                                            <ul>
                                                                <li>${receta.instrucciones}</li>
                                                            </ul>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button class="btn btn-color m-1" type="button" data-bs-dismiss="modal">Volver</button>
                                                            <button class="btn btn-color m-1" type="button">Agregar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a class="btn btn-color a-style m-1">Agregar</a>
                                        </div>
                                        </div>
                                    </div>`);
                }
            }

        }
    })
}

// C
// function creando_cartas() {
//     $.getJSON(URL_receta, function(respuesta, estado) {
//         if (estado === `success`) {
//             let misRecetas = respuesta;
//             for (const receta of misRecetas) {
//     contenedor_cartas.append(`<div class="card-header m-2 card--style">
//                                         <img class="card-img-top card__img--size" src="${receta.imagen}" alt="Foto de ${receta.nombre}">
//                                         <div class="card-body">
//                                         <h5 class="card-title card-title--style">${receta.nombre}</h5>
//                                         <div class="card-body d-flex flex-column">
//                                             <button class="btn btn-color m-1" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal${receta.id}">Ver receta</button>
//                                             <div class="modal fade" id="exampleModal${receta.id}" tabindex="-1" aria-labellebdy="exampleModalLabel" aria-hidden="true">
//                                                 <div class="modal-dialog modal-xl">
//                                                     <div class="modal-content modal-content--color">
//                                                         <div class="modal-header">
//                                                             <h5 class="modal-title card-title--style" id="exampleModalLabel">${receta.nombre}</h5>
//                                                             <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
//                                                         </div>
//                                                         <div class="modal-body text-start">
//                                                             <ul>
//                                                                 <li>${receta.instrucciones}</li>
//                                                             </ul>
//                                                         </div>
//                                                         <div class="modal-footer">
//                                                             <button class="btn btn-color m-1" type="button" data-bs-dismiss="modal">Volver</button>
//                                                             <button class="btn btn-color m-1" type="button">Agregar</button>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <a class="btn btn-color a-style m-1">Agregar</a>
//                                         </div>
//                                         </div>
//                                     </div>`);
// }
//         }
//     })
// }

function creando_cartas_filtradas() {
    for (const receta of misRecetasFiltradas) {
        contenedor_cartas_filtradas.append(`<div class="card-header m-2 card--style">
                                        <img class="card-img-top card__img--size" src="${receta.imagen}" alt="Foto de ${receta.nombre}">
                                        <div class="card-body">
                                        <h5 class="card-title card-title--style">${receta.nombre}</h5>
                                        <div class="card-body d-flex flex-column">
                                            <button class="btn btn-color m-1" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal${receta.id}">Ver receta</button>
                                            <div class="modal fade" id="exampleModal${receta.id}" tabindex="-1" aria-labellebdy="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl">
                                                    <div class="modal-content modal-content--color">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title card-title--style" id="exampleModalLabel">${receta.nombre}</h5>
                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body text-start">
                                                            <ul>
                                                                <li>${receta.instrucciones}</li>
                                                            </ul>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button class="btn btn-color m-1" type="button" data-bs-dismiss="modal">Volver</button>
                                                            <button class="btn btn-color m-1" type="button">Agregar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a class="btn btn-color a-style m-1">Agregar</a>
                                        </div>
                                        </div>
                                    </div>`);
    }
}

function crear_receta() {
    let imagen_recetaNueva = $(`#foto_recetaNueva`).val();
    let nombre_recetaNueva = $(`#nombre_recetaNueva`).val();
    let instrucciones_recetaNueva = $(`#instrucciones_recetaNueva`).val();
    // hay que hacer otra cosa para tomar el valor de un Select
    let feeding_type_recetaNueva = $(`#feeding_type_recetaNueva`).val();

    if ((imagen_recetaNueva) && (nombre_recetaNueva) && (instrucciones_recetaNueva)) {
        agregar_receta(imagen_recetaNueva, nombre_recetaNueva, instrucciones_recetaNueva);
    }
}