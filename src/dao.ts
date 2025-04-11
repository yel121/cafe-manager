// dao.ts
export interface CoffeeData {
    id?: number;
    description: string;
    price: number;
  }
  
  export class CoffeeDAO {
    private dbName = "CafeDB";
    private storeName = "coffees";
  
    async initDB(): Promise<IDBDatabase> {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(this.dbName, 1);
        request.onupgradeneeded = () => {
          const db = request.result;
          if (!db.objectStoreNames.contains(this.storeName)) {
            db.createObjectStore(this.storeName, { keyPath: "id", autoIncrement: true });
          }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    }
  
    async addCoffee(data: CoffeeData): Promise<void> {
      const db = await this.initDB();
      const tx = db.transaction(this.storeName, "readwrite");
      tx.objectStore(this.storeName).add(data);
      await tx.oncomplete;
    }
  
    async getCoffees(): Promise<CoffeeData[]> {
      const db = await this.initDB();
      const tx = db.transaction(this.storeName, "readonly");
      const store = tx.objectStore(this.storeName);
      const request = store.getAll();
      return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    }
  }
  