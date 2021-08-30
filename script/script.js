// // OPCION1

// let total_ingredients = "";
// let counter = 0;

// function request_ingredients() {
//     do {
//         ingredients = prompt("Ingrese de a uno los ingredientes que necesitas para esta receta. (Para finalizar la lista de ingredientes, escriba 'ok')").toLowerCase();
//         if (ingredients != "ok" || ingredients === "") {
//             total_ingredients = total_ingredients + " - " + ingredients;
//             counter++;
//         }
//     } while (ingredients !== "ok")

//     alert("Para hacer esta receta necesitaremos lo siguiente: " + total_ingredients);
// }

// request_ingredients();
// if (confirm("Tenes los " + counter + " ingredientes necesarios?")) {
//     alert("Entonces A COCINAR!");
// } else {
//     alert("Y qué esperás para ir a comprarlos?");
// }

// // OPCION2

// let lifestyle;
// // estas serían algunas de las recetas. La idea sería poder filtrar las recetas
// let carnivore = "Carne al horno con papas";
// let vegan = "hamburguesa de lentejas con puré de choclo";
// let vegetarian = "Malfati de espinaca con salsa de 4 quesos";
// let mixed = "Hamburguesa de calabaza y atún con papas fritas";
// let celiac = "Mini pizzas de berenjena";

// function request_lifestyle() {
//     lifestyle = prompt(("¿Qué tipo de alimentación tenés? Opciones: carnívora-vegana-vegetariana-mixta-celíaca")).toLowerCase();
//     switch (lifestyle) {
//         case ("carnivora" || "carnívora"):
//             alert("Vamos a armar un menú acorde a tu alimentación: CARNÍVORA");
//             if (carnivore) {
//                 alert("Esta es una receta que te puede gustar: " + carnivore);
//             }
//             break;
//         case "vegana":
//             alert("Vamos a armar un menú acorde a tu alimentación: VEGANA");
//             if (vegan) {
//                 alert("Esta es una receta que te puede gustar: " + vegan);
//             }
//             break;
//         case "vegetariana":
//             alert("Vamos a armar un menú acorde a tu alimentación: VEGETARIANA");
//             if (vegetarian) {
//                 alert("Esta es una receta que te puede gustar: " + vegetarian);
//             }
//             break;
//         case "mixta":
//             alert("Vamos a armar un menú acorde a tu alimentación: MIXTA");
//             if (mixed) {
//                 alert("Esta es una receta que te puede gustar: " + mixed);
//             }
//             break;
//         case ("celiaca" || "celíaca"):
//             alert("Vamos a armar un menú acorde a tu alimentación: CELÍACA");
//             if (celiac) {
//                 alert("Esta es una receta que te puede gustar: " + celiac);
//             }
//             break;
//         default:
//             alert("No ingresaste una opción válida, por favor ingrese la opción que más se ajusta a tu alimentación actual");
//             request_lifestyle();
//     }
// }

// request_lifestyle();

// OPCION3

let recipe;
let calories = 0;
let dessert = 300;

function request_ingredients() {
    recipe = (prompt("Qué receta querés hacer? OPCIONES: POLLO CON PAPAS - FIDEOS CON CREMA - BERENJENAS CON PURÉ")).toLowerCase();
    if (recipe == "pollo con papas") {
        alert("Esta receta contiene aproximadamente 300 kcal");
        calories = calories + 200;
    } else if (recipe == "fideos con crema") {
        alert("Esta receta contiene aproximadamente 200 kcal");
        calories = calories + 300;
    } else if (recipe == "berenjenas con puré" || recipe == "berenjenas con pure") {
        alert("Esta receta contiene aproximadamente 150kcal");
        calories = calories + 150;
    } else {
        alert("No ingresaste una receta válida, por favor intentelo nuevamente");
        request_ingredients();
    }
}

function add_dessert() {
    if ((calories + dessert) <= 500) {
        total_calories = calories + dessert;
        alert("Con la comida que elegiste podrías comer de postre un FLAN CON DULCE DE LECHE y la suma de calorías de ambas comidas es de: " + total_calories + "kcal");
    } else {
        alert("La comida que elegiste ya tiene demasiadas calorías para comer postre");
    }
}



request_ingredients();
add_dessert();