// inventory.ts
export class InventoryManager {
    private static instance: InventoryManager;
    private ingredients: Map<string, number> = new Map();
  
    private constructor() {}
  
    public static getInstance(): InventoryManager {
      if (!InventoryManager.instance) {
        InventoryManager.instance = new InventoryManager();
      }
      return InventoryManager.instance;
    }
  
    public addIngredient(name: string, quantity: number) {
      const current = this.ingredients.get(name) || 0;
      this.ingredients.set(name, current + quantity);
    }
  
    public useIngredient(name: string, quantity: number): boolean {
      const current = this.ingredients.get(name) || 0;
      if (current < quantity) return false;
      this.ingredients.set(name, current - quantity);
      return true;
    }
  
    public getInventory(): Map<string, number> {
      return this.ingredients;
    }
  }
  