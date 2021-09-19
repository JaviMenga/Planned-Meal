class Clientes {
    constructor(usuario, nombre, apellido, clave, edad, alimentacion, mail) {
        this.usuario = usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.clave = clave;
        this.edad = edad;
        this.alimentacion = alimentacion;
        this.mail = mail;
    }
}

let usuarioActivo;
let tipo_dieta = ["carnivora", "vegetariana", "vegana", "celiaca", "mixta"];

// INGRESAR
let login = document.getElementById("login");
login.addEventListener("click", ingresar);
let clave_input = document.getElementById("password");
clave_input.addEventListener("keydown", enter);

// REGISTRAR
let register = document.getElementById("register");
register.addEventListener("mousedown", habilitar_inputs);
// register.addEventListener("mousedown", inhabilitar_ingreso);
register.addEventListener("click", registrar);
let mail_input = document.getElementById("email");
mail_input.addEventListener("keydown", enter);