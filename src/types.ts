// types.ts
import { Coffee } from "./coffee";

export class Espresso implements Coffee {
  getDescription(): string {
    return "Espresso";
  }

  getPrice(): number {
    return 2;
  }
}

export class Latte implements Coffee {
  getDescription(): string {
    return "Latte";
  }

  getPrice(): number {
    return 3;
  }
}

export class Cappuccino implements Coffee {
  getDescription(): string {
    return "Cappuccino";
  }

  getPrice(): number {
    return 3.5;
  }
}
