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


class recipe {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
    }

    mensaje() {
        return "Esta receta contiene aproximadamente " + this.calories + " kcal";
    }
}

let recipe_user;
let total_calories = 0;
let dessert = 300;


function request_ingredients() {
    request_recipe_name = prompt("Qué receta querés hacer? OPCIONES: POLLO CON PAPAS - FIDEOS CON CREMA - BERENJENAS CON PURÉ");
    if (request_recipe_name === "pollo con papas") {
        recipe_user = new recipe(request_recipe_name, 200);
        alert(recipe_user.mensaje());
    } else if (request_recipe_name === "fideos con crema") {
        recipe_user = new recipe(request_recipe_name, 300);
        alert(recipe_user.mensaje());
    } else if (request_recipe_name === "berenjenas con pure" || request_recipe_name === "berenjenas con puré") {
        recipe_user = new recipe(request_recipe_name, 150);
        alert(recipe_user.mensaje());
    } else {
        alert("No ingresaste una receta válida, por favor ingrese nuevamente");
        request_ingredients();
    }
}

function add_dessert() {
    if ((recipe_user.calories + dessert) <= 500) {
        total_calories = recipe_user.calories + dessert;
        alert("Con la comida que elegiste podrías comer de postre un FLAN CON DULCE DE LECHE y la suma de calorías de ambas comidas es de: " + total_calories + "kcal");
    } else {
        alert("La comida que elegiste ya tiene demasiadas calorías para comer postre");
    }
}

request_ingredients();
add_dessert();