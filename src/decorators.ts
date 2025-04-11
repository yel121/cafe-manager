// decorators.ts
import { Coffee } from "./coffee";

abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract getDescription(): string;
  abstract getPrice(): number;
}

export class MilkDecorator extends CoffeeDecorator {
  getDescription(): string {
    return this.coffee.getDescription() + ", Milk";
  }
  getPrice(): number {
    return this.coffee.getPrice() + 0.5;
  }
}

export class SugarDecorator extends CoffeeDecorator {
  getDescription(): string {
    return this.coffee.getDescription() + ", Sugar";
  }
  getPrice(): number {
    return this.coffee.getPrice() + 0.2;
  }
}

export class WhippedCreamDecorator extends CoffeeDecorator {
  getDescription(): string {
    return this.coffee.getDescription() + ", Whipped Cream";
  }
  getPrice(): number {
    return this.coffee.getPrice() + 0.7;
  }
}
