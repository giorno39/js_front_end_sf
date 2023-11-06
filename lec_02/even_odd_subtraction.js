function even_odd_subtraction(numbers){
  let odd_sum = 0;
  let even_sum = 0;
  let arr_length = numbers.length;
  for(let i = 0; i < arr_length; i++){
    if(numbers[i] % 2 == 0){
      even_sum += numbers[i];
    }else{
      odd_sum += numbers[i]
    }
  }

  console.log(even_sum - odd_sum)

}

even_odd_subtraction([2,4,6,8,10])