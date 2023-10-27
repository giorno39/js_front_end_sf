function same_numbers(number){
  let sum = 0;
  number = String(number);
  for(let i = 0; i < number.length; i ++){
    sum += Number(number[i]);
  }
  if(sum/number.length == number[0]){
    console.log("true");
  }else{
    console.log('false');
  }
  console.log(sum);
}

same_numbers(2222222);