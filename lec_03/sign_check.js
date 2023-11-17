function signChecker(num1, num2, num3){
  let negative_nums = 0
  for(let i = 0; i < 3; i++){
    if(arguments[i] < 0){
      negative_nums ++;
    }
  }
  if(negative_nums % 2 == 0){
    console.log("Positive")
  }else{
    console.log("Negative")
  }
}

signChecker( -1,
  -2,
  -3
  
  
 )