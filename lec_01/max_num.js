function largest_of_three(num1, num2, num3){
  let largest_num = -1000
  let numbers = [num1, num2, num3];
  for(let i = 0; i < numbers.length; i++){
      if(numbers[i] > largest_num){
        largest_num = numbers[i]
      }
  }
  console.log(`The largest number is ${largest_num}.`);
}

largest_of_three(-3, -5, -7)