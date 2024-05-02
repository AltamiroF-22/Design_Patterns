import { MainDishBuilder } from "./classes/main-dish-builder";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert().makeBeverage();
console.log(mainDishBuilder.getMeal());
console.log(`Total: ${mainDishBuilder.getTotal()}R$`);

mainDishBuilder.reset();
console.log("");
console.log("----------------------");
console.log("");

const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);
console.log(`Total: ${mainDishBuilder.getTotal()}R$`);

console.log("--------- Vegan ------------");

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
console.log(`Total: ${veganDishBuilder.getTotal()}R$`);
