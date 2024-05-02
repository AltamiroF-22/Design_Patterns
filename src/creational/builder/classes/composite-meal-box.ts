import { MealCompositeProps } from "../interfaces/meal-composite-props";

export class MealBox implements MealCompositeProps {
  private readonly _children: MealCompositeProps[] = [];

  getPrice(): number {
    return this._children.reduce(
      (accumulatorTotal, currentMeal) =>
        accumulatorTotal + currentMeal.getPrice(),
      0
    );
  }

  add(...meal: MealCompositeProps[]): void {
    meal.forEach((item) => this._children.push(item));
  }
}
