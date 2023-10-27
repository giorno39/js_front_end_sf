function print_and_sum(start, end){
  let sum = 0;
  let string_of_nums = "";
  for(let i = start; i <= end; i++){
    sum += i;
    string_of_nums = string_of_nums + i + " ";
  }
  console.log(string_of_nums);
  console.log(`Sum: ${sum}`);
}

print_and_sum(5, 10)