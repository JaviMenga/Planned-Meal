class Recetas {
    constructor(nombre, imagen, calorias, instrucciones, categoria) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.calorias = calorias;
        this.instrucciones = instrucciones;
        this.categoria = categoria;
    }
}
const URL_receta = "../recetas.json";

let i = 1;
creando_cartas(i);


// let foto_recetaNueva = document.getElementById(`foto_recetaNueva`).value;
// let nombre_recetaNueva = document.getElementById(`nombre_recetaNueva`).value;
// let instrucciones_recetaNueva = document.getElementById(`instrucciones_recetaNueva`).value;
// let categoria_recetaNueva = document.getElementById(`feeding_type`).value;

// function crear_receta() {
//     let nuevaReceta = new Recetas(nombre_recetaNueva, foto_recetaNueva, 100, instrucciones_recetaNueva, categoria_recetaNueva)
// }
// crear_receta()










// No está terminado
// function buscar_receta() {
//     let busqueda_receta = document.getElementById("busqueda_receta").value;
//     let recetas_buscadas = recetas.filter(recetas => recetas.nombre.includes(busqueda_receta));
//     for (const receta of recetas_buscadas) {
//         creando_cartas(receta, i)
//         i++
//     }

// }