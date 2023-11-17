function sumOfOddAndEven(number){
  let numbers = [];
  while(number >= 10){
      numbers.push(number % 10);
      number = number / 10;
      number = Math.floor(number);
  }
  numbers.push(number)
  let length = numbers.length

  let odd_sum = 0;
  let even_sum = 0;

  for(let i = 0; i < length; i++){
    if(numbers[i] % 2 == 0){
        even_sum += numbers[i];
    }else{
      odd_sum += numbers[i];
    }
  }
  console.log(` Odd sum = ${odd_sum}, Even sum = ${even_sum}`);
}

sumOfOddAndEven(3495892137259234);