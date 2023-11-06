function sum_of_boundary(numbers){
  let result = 0;
  result += numbers.shift();
  result += numbers.pop();
  console.log(result);
}

sum_of_boundary([11, 58, 69])