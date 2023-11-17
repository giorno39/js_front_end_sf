function numCalc(num1, num2, operation){
  operations = {
    "add": (a, b) => {return a + b},
    "subtract": (a, b) => {return a - b},
    "divide": (a, b) => {return a / b},
    "multiply": (a, b) => {return a * b}
  }

  let chosenMathFunc = operations[operation]
  console.log(chosenMathFunc(num1, num2))

}