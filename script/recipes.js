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

let creando_receta = $(`#creando_receta`);
let contenedor_cartas = $(`#contenedor-cartas`);
let buscar_receta = $(`#search_recipe`);
let user_filter = ``;

$(document).ready(function() {
    buscar_receta.on(`click`, buscando_receta);
    buscando_receta();
    // creando_cartas();
    // creando_receta.on(`click`, crear_receta);

});