import { MealCompositeProps } from "../interfaces/meal-composite-props";

export abstract class AbstractMeal implements MealCompositeProps {
  constructor(private name: string, private price: number) {}
  
  getPrice(): number {
    return this.price;
  }
}
