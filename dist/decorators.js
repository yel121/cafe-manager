"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhippedCreamDecorator = exports.SugarDecorator = exports.MilkDecorator = void 0;
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
}
class MilkDecorator extends CoffeeDecorator {
    getDescription() {
        return this.coffee.getDescription() + ", Milk";
    }
    getPrice() {
        return this.coffee.getPrice() + 0.5;
    }
}
exports.MilkDecorator = MilkDecorator;
class SugarDecorator extends CoffeeDecorator {
    getDescription() {
        return this.coffee.getDescription() + ", Sugar";
    }
    getPrice() {
        return this.coffee.getPrice() + 0.2;
    }
}
exports.SugarDecorator = SugarDecorator;
class WhippedCreamDecorator extends CoffeeDecorator {
    getDescription() {
        return this.coffee.getDescription() + ", Whipped Cream";
    }
    getPrice() {
        return this.coffee.getPrice() + 0.7;
    }
}
exports.WhippedCreamDecorator = WhippedCreamDecorator;
