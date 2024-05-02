import { MealBuilderProps } from "../interfaces/meal-builder";
import { MealBox } from "./composite-meal-box";
import { Beans, Rice } from "./meals";

export class VeganDishBuilder implements MealBuilderProps {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("arroz", 2.55);
    const beans = new Beans("feijão", 1.99);

    this._meal.add(rice, beans);

    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getTotal(): number {
    return this._meal.getPrice();
  }
}
