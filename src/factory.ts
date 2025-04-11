// factory.ts
import { Espresso, Latte, Cappuccino } from "./types";
import { Coffee } from "./coffee";

export class CoffeeFactory {
  static createCoffee(type: string): Coffee {
    switch (type.toLowerCase()) {
      case "espresso":
        return new Espresso();
      case "latte":
        return new Latte();
      case "cappuccino":
        return new Cappuccino();
      default:
        throw new Error("Unknown coffee type");
    }
  }
}
