function circle_area(value){
  let type = typeof(value);
  if(type === "number"){
    let result = Math.pow(value, 2) * Math.PI;
    console.log(result.toFixed(2));
  }else{
    console.log(`We can not calculate the circle area, because we receive a ${type}.`)
  }

}

circle_area(5);