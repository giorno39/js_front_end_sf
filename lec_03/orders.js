function orderCalculator(item, count){
  orders = {
    "water": 1,
    "coffee": 1.5,
    "coke": 1.4,
    "snacks":2
  }
  let price = orders[item]
  let result = price * count
  console.log(result.toFixed(2))
}

orderCalculator("coffee", 2)