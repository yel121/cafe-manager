"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cappuccino = exports.Latte = exports.Espresso = void 0;
class Espresso {
    getDescription() {
        return "Espresso";
    }
    getPrice() {
        return 2;
    }
}
exports.Espresso = Espresso;
class Latte {
    getDescription() {
        return "Latte";
    }
    getPrice() {
        return 3;
    }
}
exports.Latte = Latte;
class Cappuccino {
    getDescription() {
        return "Cappuccino";
    }
    getPrice() {
        return 3.5;
    }
}
exports.Cappuccino = Cappuccino;
