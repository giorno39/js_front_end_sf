// '+', '-', '*', '/', '%', '**'

function math_operation(num1, num2, operation){
  switch(operation){
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    case "%":
      console.log(num1 % num2);
      break;
    case "**":
      console.log(num1 ** num2);
      break;
  }
}

math_operation(1, 2, "+")
math_operation(2, 1, "-")