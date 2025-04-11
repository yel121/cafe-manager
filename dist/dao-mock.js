"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockCoffeeDAO = void 0;
class MockCoffeeDAO {
    constructor() {
        this.storage = [];
    }
    async addCoffee(data) {
        this.storage.push(data);
    }
    async getCoffees() {
        return this.storage;
    }
}
exports.MockCoffeeDAO = MockCoffeeDAO;
