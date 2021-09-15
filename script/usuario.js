class Clientes {
    constructor(usuario, nombre, apellido, clave, edad, alimentacion) {
        this.usuario = usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.clave = clave;
        this.edad = edad;
        this.alimentacion = alimentacion;
    }
}

let usuarioActivo;

// Ingresar al clickear el botón INGRESAR
let login = document.getElementById("login");
login.addEventListener("click", ingresar);
let clave_input = document.getElementById("password");
clave_input.addEventListener("keydown", enter)

// Enviar a la página de registro al clickear el botón REGISTRAR
let register = document.getElementById("register");
register.addEventListener("mousedown", habilitar_inputs);
register.addEventListener("mousedown", inhabilitar_ingreso);
register.addEventListener("click", registrar);
let mail_input = document.getElementById("email");
mail_input.addEventListener("keydown", enter)


// FUNCIONES DEFINIDAS
function ingresar() {
    let usuario = document.getElementById("user").value;
    let clave = document.getElementById("password").value;
    usuarioActivo = buscar_usuario(usuario);
    let clave2 = validar_clave(clave, usuario);
    if (usuarioActivo && clave2) {
        plasmar_usuario();
    } else if (!usuarioActivo) {
        alert("El usuario que ingresaste no existe");
    } else if (!clave2) {
        alert("Ingresá una contraseña correcta");
    }
    return usuarioActivo;
}

function enter(event) {
    tecla_enter = event.keyCode;
    if (event.currentTarget = clave_input && tecla_enter == 13) {
        ingresar();
    } else if (event.currentTarget = mail_input && tecla_enter == 13) {
        registrar();
    }
}

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

function habilitar_inputs() {
    let hidden = document.getElementsByClassName("hidden");
    for (const x of hidden) {
        x.classList.replace("hidden", "visible");
    }
}

function registrar() {

    let usuario = document.getElementById("user").value;
    let nombre = document.getElementById("name").value.toLowerCase();
    let apellido = document.getElementById("lastName").value.toLowerCase();
    let clave = document.getElementById("password").value;
    let edad = document.getElementById("age").value;
    let alimentacion = document.getElementById("feeding_type").value;
    let mjs = chequear_dato(usuario, nombre, apellido, clave, edad, alimentacion);
    if (mjs == ``) {
        usuarioActivo = new Clientes(usuario, nombre, apellido, clave, parseInt(edad), alimentacion)
        guardar_usuario(usuarioActivo);
        alert(`Usuario creado con éxito!`);
        plasmar_usuario();
    } else {
        alert(mjs);
    }
}

function chequear_dato(usuario, nombre, apellido, clave, edad, alimentacion) {
    let mjs = ``;
    if ((usuario) && (nombre) && (apellido) && (clave) && (edad) && (alimentacion)) {
        let dato = buscar_usuario(usuario);
        if (dato != false) {
            mjs = `Usuario existente`;
        } else if (isNaN(parseInt(edad))) {
            mjs = `No ingresaste una edad válida`;
            // NO PUEDO HACER FUNCIONAR ESTE BLOQUE DE CODIGO!--------------------------------------------------

            // } else if (alimentacion != "carnivora" || alimentacion != "vegetariana" || alimentacion != "vegana" || alimentacion != "celiaca" || alimentacion != "mixta") {
            //     mjs = "No ingresaste un tipo de alimentación válido";
        }

    } else {
        mjs = `Tenés que ingresar todos los datos`;
    }
    return mjs;
}

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

function plasmar_usuario() {
    // Visualizar en HTML el usuario ingresado/registrado
    let contenedor_usuario = document.getElementById("userIcon");
    let usuario_activo = document.createElement("p");
    usuario_activo.textContent = usuarioActivo.nombre;
    contenedor_usuario.appendChild(usuario_activo);
    usuario_activo.classList.add("active_user");
}

function inhabilitar_ingreso() {
    login.classList.add("hidden");
}