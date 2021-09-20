// FUNCIONES DEFINIDAS

// B
function buscar_usuario(usuario_ingresado) {
    if (!localStorage.getItem("lista_usuarios")) {
        return false
    } else {
        let usuarios_almacenados = JSON.parse(localStorage.getItem("lista_usuarios"));
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
function creando_cartas(x, i) {
    let contenedor_cartas = document.getElementById(`contenedor-cartas`);
    let contenedor_carta = document.createElement(`div`);
    contenedor_carta.classList.add(`card-header`, `m-2`, `card--style`)
    contenedor_cartas.appendChild(contenedor_carta);

    let imagen_carta = document.createElement(`img`);
    imagen_carta.classList.add(`card-img-top`, `card__img--size`);
    imagen_carta.setAttribute(`src`, x.imagen);
    imagen_carta.setAttribute(`alt`, `Foto de ${x.nombre}`);
    contenedor_carta.appendChild(imagen_carta);

    let cuerpo_carta = document.createElement(`div`);
    cuerpo_carta.classList.add(`card-body`);
    contenedor_carta.appendChild(cuerpo_carta);

    let nombre_carta = document.createElement(`h5`);
    nombre_carta.classList.add(`card-title`, `card-title--style`);
    nombre_carta.textContent = x.nombre;
    cuerpo_carta.appendChild(nombre_carta);

    let contenedor_botones_carta = document.createElement(`div`);
    contenedor_botones_carta.classList.add(`card-body`, `d-flex`, `flex-column`);
    cuerpo_carta.appendChild(contenedor_botones_carta);

    let botones_carta = document.createElement(`button`);
    botones_carta.classList.add(`btn`, `btn-color`, `m-1`);
    botones_carta.setAttribute(`type`, `button`);
    botones_carta.setAttribute(`data-bs-toggle`, `modal`);
    botones_carta.setAttribute(`data-bs-target`, `#exampleModal${i}`);
    botones_carta.textContent = `Ver receta`;
    contenedor_botones_carta.appendChild(botones_carta);
    console.log(botones_carta);

    let contenedor_instrucciones_carta = document.createElement(`div`);
    contenedor_instrucciones_carta.classList.add(`modal`, `fade`);
    contenedor_instrucciones_carta.setAttribute(`id`, `exampleModal${i}`);
    contenedor_instrucciones_carta.setAttribute(`tabindex`, `-1`);
    contenedor_instrucciones_carta.setAttribute(`aria-labelledby`, `exampleModalLabel`);
    contenedor_instrucciones_carta.setAttribute(`aria-hidden`, `true`);
    contenedor_botones_carta.appendChild(contenedor_instrucciones_carta);

    let div1_contenedor_instrucciones_carta = document.createElement(`div`);
    div1_contenedor_instrucciones_carta.classList.add(`modal-dialog`, `modal-dialog`, `modal-xl`);
    contenedor_instrucciones_carta.appendChild(div1_contenedor_instrucciones_carta);

    let div2_contenedor_instrucciones_carta = document.createElement(`div`);
    div2_contenedor_instrucciones_carta.classList.add(`modal-content`, `modal-content--color`);
    div1_contenedor_instrucciones_carta.appendChild(div2_contenedor_instrucciones_carta);

    let div3_contenedor_instrucciones_carta = document.createElement(`div`);
    div3_contenedor_instrucciones_carta.classList.add(`modal-header`);
    div2_contenedor_instrucciones_carta.appendChild(div3_contenedor_instrucciones_carta);

    let titulo_intrucciones_carta = document.createElement(`h5`);
    titulo_intrucciones_carta.classList.add(`modal-title`, `card-title--style`);
    titulo_intrucciones_carta.setAttribute(`id`, `exampleModalLabel`);
    titulo_intrucciones_carta.textContent = x.nombre;
    div3_contenedor_instrucciones_carta.appendChild(titulo_intrucciones_carta);

    let boton_instrucciones_carta = document.createElement(`button`);
    boton_instrucciones_carta.classList.add(`btn-close`);
    boton_instrucciones_carta.setAttribute(`type`, `button`);
    boton_instrucciones_carta.setAttribute(`data-bs-dismiss`, `modal`);
    boton_instrucciones_carta.setAttribute(`aria-label`, `Close`);
    div3_contenedor_instrucciones_carta.appendChild(boton_instrucciones_carta);

    let div4_contenedor_instrucciones_carta = document.createElement(`div`);
    div4_contenedor_instrucciones_carta.classList.add(`modal-body`, `text-start`);
    div2_contenedor_instrucciones_carta.appendChild(div4_contenedor_instrucciones_carta);

    // Acá irian las instrucciones
    let lista_instrucciones_carta = document.createElement(`ul`);
    div4_contenedor_instrucciones_carta.appendChild(lista_instrucciones_carta)

    let instrucciones_carta = document.createElement(`li`);
    instrucciones_carta.textContent = x.instrucciones;
    div4_contenedor_instrucciones_carta.appendChild(instrucciones_carta);

    let link_carta = document.createElement(`a`);
    link_carta.classList.add(`btn`, `btn-color`, `a-style`, `m-1`)
    link_carta.setAttribute(`href`, `#`)
    link_carta.textContent = "Agregar";
    contenedor_botones_carta.appendChild(link_carta);

    let div5_contenedor_instrucciones_carta = document.createElement(`div`);
    div5_contenedor_instrucciones_carta.classList.add(`modal-footer`);
    div2_contenedor_instrucciones_carta.appendChild(div5_contenedor_instrucciones_carta);

    let boton1_contenedor_carta = document.createElement(`button`);
    boton1_contenedor_carta.classList.add(`btn`, `btn-color`, `m-1`);
    boton1_contenedor_carta.setAttribute(`type`, `button`);
    boton1_contenedor_carta.setAttribute(`data-bs-dismiss`, `modal`);
    boton1_contenedor_carta.textContent = `Volver`;
    div5_contenedor_instrucciones_carta.appendChild(boton1_contenedor_carta);

    let boton2_contenedor_carta = document.createElement(`button`);
    boton2_contenedor_carta.classList.add(`btn`, `btn-color`, `m-1`);
    boton2_contenedor_carta.setAttribute(`type`, `button`);
    boton2_contenedor_carta.textContent = `Agregar`;
    div5_contenedor_instrucciones_carta.appendChild(boton2_contenedor_carta);
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
        // esto no está funcionando
    } else if (event.target == mail_input && tecla_enter == 13) {
        registrar();
    }
}

// G
function guardar_usuario(nuevo_usuario_ingresado) {
    if (localStorage.getItem("lista_usuarios")) {
        let usuarios_almacenados = JSON.parse(localStorage.getItem("lista_usuarios"));
        usuarios_almacenados.push(nuevo_usuario_ingresado);
        let usuarios_almacenados_string = JSON.stringify(usuarios_almacenados);
        localStorage.setItem("lista_usuarios", usuarios_almacenados_string);
    } else {
        usuarios_almacenados = new Array();
        usuarios_almacenados.push(nuevo_usuario_ingresado);
        let usuarios_almacenados_string = JSON.stringify(usuarios_almacenados);
        localStorage.setItem("lista_usuarios", usuarios_almacenados_string);
    }
}

// H
function habilitar_inputs() {
    let hidden = document.getElementsByClassName("hidden");
    for (const x of hidden) {
        x.classList.replace("hidden", "visible");
    }
}

// I
function ingresar() {
    let usuario = document.getElementById("user").value;
    let clave = document.getElementById("password").value;
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

function inhabilitar_ingreso() {
    login.classList.add("hidden");
}

// P
function plasmar_usuario() {
    // Visualizar en HTML el usuario ingresado/registrado
    let contenedor_usuario = document.getElementById("userIcon");
    let usuario_activo = document.createElement("p");
    usuario_activo.textContent = usuarioActivo.usuario;
    contenedor_usuario.appendChild(usuario_activo);
    usuario_activo.classList.add("active_user");
}

// R
function registrar() {

    let usuario = document.getElementById("user").value;
    let nombre = document.getElementById("name").value.toLowerCase();
    let apellido = document.getElementById("lastName").value.toLowerCase();
    let clave = document.getElementById("password").value;
    let edad = document.getElementById("age").value;
    let alimentacion = document.getElementById("feeding_type").value;
    let mail = document.getElementById("email").value;
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