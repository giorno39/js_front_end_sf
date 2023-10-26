function largest_of_three(num1, num2, num3){
  let largest_num = Number.MIN_VALUE;
  let numbers = [num1, num2, num3];
  for(let i = 0; i < numbers.length; i++){
      if(numbers[i] > largest_num){
        largest_num = numbers[i]
      }
  }
  console.log(`The largest number is ${largest_num}.`);
}

largest_of_three(1, 2, 4)