function vacation_calculator(people, type, day){
  let price = 0;
  let result = 0;
  if(type === "Students"){
    if(day == "Friday"){
        price = 8.45;
    }else if(day === "Saturday"){
      price = 9.80;
    }else{
      price = 10.46;
    }
    if(people >= 30){
      result = price * people * 0.85;
    }else{
      result = price * people;
    }
    console.log(`Total price: ${result.toFixed(2)}`);

  }else if(type === "Business"){
      if(day == "Friday"){
        price = 10.90;
      }else if(day === "Saturday"){
        price = 15.60;
      }else{
        price = 16;
      }

      if(people >= 100){
        result = price * (people - 10)
      }else{
        result = price * people;
      }
      console.log(`Total price: ${result.toFixed(2)}`);

  }else {
      if(day == "Friday"){
        price = 15;
      }else if(day === "Saturday"){
        price = 20;
      }else{
        price = 22.50;
      }
      
      if(people >= 10 && people <= 20){
        result = price * people * 0.95;
      }else{
        result = price * people;
      }
      console.log(`Total price: ${result.toFixed(2)}`);

  }
}