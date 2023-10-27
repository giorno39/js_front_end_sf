function sum_digits(num){
  num = String(num);
  let result = 0;
  for(let i = 0; i < num.length; i++){
      result += Number(num[i]);
  }
  console.log(result);
}

sum_digits(245678);