"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeDAO = void 0;
class CoffeeDAO {
    constructor() {
        this.dbName = "CafeDB";
        this.storeName = "coffees";
    }
    async initDB() {
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
    async addCoffee(data) {
        const db = await this.initDB();
        const tx = db.transaction(this.storeName, "readwrite");
        tx.objectStore(this.storeName).add(data);
        await tx.oncomplete;
    }
    async getCoffees() {
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
exports.CoffeeDAO = CoffeeDAO;
