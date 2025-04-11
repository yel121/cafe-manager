"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryManager = void 0;
// inventory.ts
class InventoryManager {
    constructor() {
        this.ingredients = new Map();
    }
    static getInstance() {
        if (!InventoryManager.instance) {
            InventoryManager.instance = new InventoryManager();
        }
        return InventoryManager.instance;
    }
    addIngredient(name, quantity) {
        const current = this.ingredients.get(name) || 0;
        this.ingredients.set(name, current + quantity);
    }
    useIngredient(name, quantity) {
        const current = this.ingredients.get(name) || 0;
        if (current < quantity)
            return false;
        this.ingredients.set(name, current - quantity);
        return true;
    }
    getInventory() {
        return this.ingredients;
    }
}
exports.InventoryManager = InventoryManager;
