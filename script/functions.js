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
    usuario_activo.textContent = usuarioActivo.nombre;
    contenedor_usuario.appendChild(usuario_activo);
    usuario_activo.classList.add("active_user");
}

// R
function registrar() {

    let usuario = document.getElementById("user").value;
    console.log(usuario);
    let nombre = document.getElementById("name").value.toLowerCase();
    console.log(nombre);
    let apellido = document.getElementById("lastName").value.toLowerCase();
    console.log(apellido);
    let clave = document.getElementById("password").value;
    console.log(clave);
    let edad = document.getElementById("age").value;
    console.log(edad);
    let alimentacion = document.getElementById("feeding_type").value;
    console.log(alimentacion);
    let mail = document.getElementById("email").value;
    console.log(mail);
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