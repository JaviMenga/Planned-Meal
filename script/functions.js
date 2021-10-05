// FUNCIONES DEFINIDAS

// B

// Puedo sustituir el While por un for! HACER
function buscar_usuario(usuario_ingresado) {
    if (!localStorage.getItem(`lista_usuarios`)) {
        return false
    } else {
        let usuarios_almacenados = JSON.parse(localStorage.getItem(`lista_usuarios`));
        let i = 0
        let encontrado = false;
        while (!encontrado && i != usuarios_almacenados.length) {
            if (usuarios_almacenados[i].usuario == usuario_ingresado) {
                encontrado = usuarios_almacenados[i];
                return encontrado;
            }
            i++;
        }
        return encontrado;
    }
}

// C
function creando_cartas(i) {
    $.getJSON(URL_receta, function(respuesta, estado) {
        if (estado === "success") {
            let misRecetas = respuesta;
            for (const receta of misRecetas) {
                let contenedor_cartas = $(`#contenedor-cartas`);
                contenedor_cartas.append(`<div class="card-header m-2 card--style">
                                        <img class="card-img-top card__img--size" src="${receta.imagen}" alt="Foto de ${receta.nombre}">
                                        <div class="card-body">
                                        <h5 class="card-title card-title--style">${receta.nombre}</h5>
                                        <div class="card-body d-flex flex-column">
                                            <button class="btn btn-color m-1" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">Ver receta</button>
                                            <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labellebdy="exampleModalLabel" aria-hidden="true">
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
    })
}

function chequear_dato(usuario, nombre, apellido, clave, edad, alimentacion, mail) {
    let mjs = ``;
    if ((usuario) && (nombre) && (apellido) && (clave) && (edad) && (alimentacion) && (mail)) {
        let dato = buscar_usuario(usuario);
        if (dato != false) {
            mjs = `Usuario existente`;
        }
    } else {
        mjs = `Tenés que ingresar todos los datos`;
    }
    return mjs;
}

// E
function enter(event) {
    let tecla_enter = event.keyCode;
    if (event.target == clave_input && tecla_enter == 13) {
        ingresar();
    } else if (event.target == mail_input && tecla_enter == 13) {
        registrar();
    }
}

// G
function guardar_usuario(nuevo_usuario_ingresado) {
    if (localStorage.getItem(`lista_usuarios`)) {
        let usuarios_almacenados = JSON.parse(localStorage.getItem(`lista_usuarios`));
        usuarios_almacenados.push(nuevo_usuario_ingresado);
        let usuarios_almacenados_string = JSON.stringify(usuarios_almacenados);
        localStorage.setItem(`lista_usuarios`, usuarios_almacenados_string);
    } else {
        usuarios_almacenados = new Array();
        usuarios_almacenados.push(nuevo_usuario_ingresado);
        let usuarios_almacenados_string = JSON.stringify(usuarios_almacenados);
        localStorage.setItem(`lista_usuarios`, usuarios_almacenados_string);
    }
}

// H
function habilitar_inputs() {
    let hidden = $(`#register_input`);
    hidden.fadeIn(1000, function() {
        login.fadeOut();
    });
    $(`#titulo_login`).text(`Registrar`);
}

// I
function ingresar() {
    let usuario = document.getElementById(`user`).value;
    let clave = document.getElementById(`password`).value;
    usuarioActivo = buscar_usuario(usuario);
    let clave2 = validar_clave(clave, usuario);
    if (usuarioActivo && clave2) {
        plasmar_usuario();
    } else if (!usuarioActivo) {
        alert(`El usuario que ingresaste no existe`);
    } else if (!clave2) {
        alert(`Ingresá una contraseña correcta`);
    }
    return usuarioActivo;
}

// P
function plasmar_usuario() {
    let contenedor_usuario = $(`#userIcon`);
    contenedor_usuario.append(`<p class="active_user">${usuarioActivo.usuario}</p>`)
}

// R
function registrar() {
    let usuario = document.getElementById(`user`).value;
    let nombre = document.getElementById(`name`).value.toLowerCase();
    let apellido = document.getElementById(`lastName`).value.toLowerCase();
    let clave = document.getElementById(`password`).value;
    let edad = document.getElementById(`age`).value;
    let alimentacion = document.getElementById(`feeding_type`).value;
    let mail = document.getElementById(`email`).value;
    let mjs = chequear_dato(usuario, nombre, apellido, clave, edad, alimentacion, mail);
    if (mjs == ``) {
        usuarioActivo = new Clientes(usuario, nombre, apellido, clave, edad, alimentacion, mail)
        guardar_usuario(usuarioActivo);
        alert(`Usuario creado con éxito!`);
        plasmar_usuario();
    } else {
        alert(mjs);
    }
}

// V
function validar_clave(clave_ingresada, usuario_ingresado) {
    let dato = buscar_usuario(usuario_ingresado);
    let comparacion = false;
    if (dato != false) {
        if (dato.clave == clave_ingresada) {
            comparacion = true;
            return comparacion
        }
    }
    return comparacion;
}