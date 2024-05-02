import { MealBuilderProps } from "../interfaces/meal-builder";
import { MealBox } from "./composite-meal-box";
import { Beans, Beverage, Dessert, Meat, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderProps {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage("bebida", 10);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert("sobremesa", 15);
    this._meal.add(dessert);
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("arroz", 2.55);
    const beans = new Beans("feijão", 1.99);
    const meat = new Meat("carne", 6.49);

    this._meal.add(rice, beans, meat);

    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getTotal(): number {
    return this._meal.getPrice();
  }
}
