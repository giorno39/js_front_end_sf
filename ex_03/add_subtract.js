function solve(first_number,second_number , third_number){
    function sum(num1, num2){
        return num1 + num2;
    }

    function subtract(num1, num2){
      return num1 - num2;
    }

    let sum_result = sum(first_number, second_number);
    let result = subtract(sum_result, third_number)
    console.log(result)
}

solve(42,
  58,
  100
  
  )