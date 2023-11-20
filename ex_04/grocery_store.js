function fillStore(stored, toArrive) {
  let groceryStore = {};

  let storedLength = stored.length;

  for (let i = 0; i < storedLength; i += 2) {
    let product = stored[i];
    let quantity = Number(stored[i + 1]);
    groceryStore[product] = quantity;
  }
  storedLength = toArrive.length;

  for (let i = 0; i < storedLength; i += 2) {
    let product = toArrive[i];
    let quantity = Number(toArrive[i + 1]);
    if (groceryStore.hasOwnProperty(product)) {
      groceryStore[product] += quantity;
    } else {
      groceryStore[product] = quantity;
    }
  }

  for (const key in groceryStore) {
    console.log(`${key} -> ${groceryStore[key]}`);
  }
}

fillStore(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
