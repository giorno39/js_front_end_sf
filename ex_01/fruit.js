function fruits(type, grams, price){
  let kilos = (grams * 0.001);
  let result = kilos * price;
  console.log(`I need $${result.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${type}.`);

}

fruits('apple', 1563, 2.35);