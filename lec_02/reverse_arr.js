function reverse_n_numbers (to_reverse, numbers){
  let arr = []
  for(let i = 0; i < to_reverse; i++){
    arr.unshift(numbers[i]);
  }
  console.log(arr.join(" "));
}

reverse_n_numbers(3, [10, 20, 30, 40, 50]);