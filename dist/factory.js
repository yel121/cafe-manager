"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeFactory = void 0;
// factory.ts
const types_1 = require("./types");
class CoffeeFactory {
    static createCoffee(type) {
        switch (type.toLowerCase()) {
            case "espresso":
                return new types_1.Espresso();
            case "latte":
                return new types_1.Latte();
            case "cappuccino":
                return new types_1.Cappuccino();
            default:
                throw new Error("Unknown coffee type");
        }
    }
}
exports.CoffeeFactory = CoffeeFactory;
