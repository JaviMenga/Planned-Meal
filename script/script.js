class recipe {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
    }

    mensaje() {
        return "Esta receta contiene aproximadamente " + this.calories + " kcal";
    }
}
const meals = [{ name: "Risotto de hongos con hierbas", calories: 100 }, { name: "Tarta de jamón y queso", calories: 120 }, { name: "Zucchini condimentado", calories: 70 }, { name: "Milanesa de ternera con ensalada fresca", calories: 95 }, { name: "Hongos fritos con huevos poyet", calories: 97 }, { name: "Capelletti de verduras con salsa blanca", calories: 270 }, { name: "Ensalada de lentejas", calories: 85 }, { name: "Omelette caprese", calories: 105 }, { name: "Tortilla de espinaca y ricota", calories: 113 }];

let recipe_user;
let total_calories = 0;
let dessert = 300;

let resp = confirm("¿Querés hacer una comida? Tengo un par de recetas para ofrecerte.")
if (resp) {
    request_ingredients();
} else {
    resp = confirm("¿Te las puedo ofrecer de todos modos para que lo tengas en cuenta? Las ordené de menor a mayor en calorías")
    if (resp) {
        let orderedCalories_meals = meals.sort((a, b) => {
            if (a.calories < b.calories) {
                return -1;
            } else if (a.calories > b.calories) {
                return 1;
            } else {
                return 0;
            }
        })
        alert(orderedCalories_meals);
    }
}

let light_meals2 = "";

const light_meals = meals.filter(recipe => recipe.calories < 100);
light_meals.forEach(recipe => {
    light_meals2 = light_meals2 + "- " + recipe.name;
});
if (light_meals2 != "") {
    console.log("Las comidas con menos calorías son: " + light_meals2)
}



// FUNCIONES DEFINIDAS
function request_ingredients() {
    let request_recipe_name = (prompt("OPCIONES: \nPollo con papas \nFideos con crema \nBerenjenas empanadas con puré")).toLowerCase();
    if (request_recipe_name === "pollo con papas") {
        recipe_user = new recipe(request_recipe_name, 200);
        meals.push(recipe_user);
        alert(recipe_user.mensaje());
        add_dessert();
    } else if (request_recipe_name === "fideos con crema") {
        recipe_user = new recipe(request_recipe_name, 300);
        meals.push(recipe_user);
        alert(recipe_user.mensaje());
        add_dessert();
    } else if (request_recipe_name === "berenjenas empanadas con pure" || request_recipe_name === "berenjenas empanadas con puré") {
        recipe_user = new recipe(request_recipe_name, 150);
        inform_recipe(recipe_user);
    } else {
        alert("No ingresaste una receta válida, por favor ingrese nuevamente");
        request_ingredients();
    }
}

function inform_recipe(recipe_user) {
    meals.push(recipe_user);
    alert(recipe_user.mensaje());
    let resp = confirm("Querés comer un postre luego?")
    if (resp) {
        add_dessert();
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