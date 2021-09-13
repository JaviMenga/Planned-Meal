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
let resp = confirm(`Bienvenido, ¿Ya estás registrado?`);
if (resp) {
    ingresar();
} else {
    let resp = confirm(`¿Querés registrarte?`);
    if (resp) {
        registrar();
    }
}

// Activar el usuario ingresado/registrado
let contenedor_usuario = document.getElementById("userIcon");
let usuario_activo = document.createElement("p")
usuario_activo.textContent = usuarioActivo.nombre;
contenedor_usuario.appendChild(usuario_activo);
usuario_activo.classList.add("hola");


// FUNCIONES DEFINIDAS
function ingresar() {
    let usuario = prompt("Ingresá tu usuario");
    let clave = prompt("Ingresá tu contraseña");
    usuarioActivo = buscar_usuario(usuario);
    let clave2 = validar_clave(clave, usuario);
    if (usuarioActivo && clave2) {
        alert(`Bienvenido ${usuarioActivo.nombre} ${usuarioActivo.apellido}`);
    } else if (!usuarioActivo) {
        let esc = confirm("El usuario que ingresaste no existe. Querés volver a intentarlo?");
        if (esc) {
            ingresar();
        }
    } else if (!clave2) {
        alert("Ingresá una contraseña correcta");
        ingresar();
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
                console.log(encontrado);
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

function registrar() {

    let usuario = prompt("Ingresá un usuario");
    let nombre = prompt("Ingresá tu nombre").toLowerCase();
    let apellido = prompt("Ingresá tu apellido").toLowerCase();
    let clave = prompt("Ingresá tu contraseña");
    let edad = prompt("Ingresá tu edad");
    let alimentacion = prompt("Ingresá tu tipo de alimentación. Opciones: carnívora/vegetariana/vegana/celíaca/mixta").toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
    let mjs = chequear_dato(usuario, nombre, apellido, clave, edad, alimentacion);
    if (mjs == ``) {
        usuarioActivo = new Clientes(usuario, nombre, apellido, clave, parseInt(edad), alimentacion)
        guardar_usuario(usuarioActivo);
        alert(`Usuario creado con éxito!`);
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
        } else {
            alert(mjs);
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