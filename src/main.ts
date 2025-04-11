import { CoffeeFactory } from "./factory";
import { MilkDecorator, SugarDecorator, WhippedCreamDecorator } from "./decorators";
import { InventoryManager } from "./inventory";
import { MockCoffeeDAO } from "./dao-mock"; // ou IndexedDBCoffeeDAO si tu es côté navigateur

async function main() {
  const inventory = InventoryManager.getInstance();

  // Remplir l'inventaire de départ
  inventory.addIngredient("milk", 10);
  inventory.addIngredient("sugar", 10);
  inventory.addIngredient("whipped cream", 5);

  // Création d’un café via la factory
  let coffee = CoffeeFactory.createCoffee("cappuccino");

  // Ajout dynamique de personnalisations
  coffee = new MilkDecorator(coffee);
  inventory.useIngredient("milk", 1);

  coffee = new SugarDecorator(coffee);
  inventory.useIngredient("sugar", 1);

  coffee = new WhippedCreamDecorator(coffee);
  inventory.useIngredient("whipped cream", 1);

  // Affichage de la commande
  console.log("🧾 Commande : ", coffee.getDescription());
  console.log("💰 Prix total : ", coffee.getPrice().toFixed(2), "€");

  // Sauvegarde dans la DAO (mockée ici)
  const dao = new MockCoffeeDAO();
  await dao.addCoffee({
    description: coffee.getDescription(),
    price: coffee.getPrice()
  });

  // Historique des commandes
  const commandes = await dao.getCoffees();
  console.log("\n📜 Historique des commandes :");
  commandes.forEach((c, i) => {
    console.log(`#${i + 1}: ${c.description} - ${c.price.toFixed(2)} €`);
  });

  // Affichage de l’inventaire restant
  console.log("\n📦 Ingrédients restants :");
  console.table(inventory.getInventory());
}

// Exécution
main().catch(err => console.error("❌ Erreur :", err));
