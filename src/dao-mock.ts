export interface CoffeeData {
    description: string;
    price: number;
  }
  
  export class MockCoffeeDAO {
    private storage: CoffeeData[] = [];
  
    async addCoffee(data: CoffeeData): Promise<void> {
      this.storage.push(data);
    }
  
    async getCoffees(): Promise<CoffeeData[]> {
      return this.storage;
    }
  }
  