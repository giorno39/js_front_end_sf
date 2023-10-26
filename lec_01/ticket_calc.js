function ticket_price(day_type, age){
  if(age >= 0 && age <= 18){
    if(day_type === "Weekday"){
      console.log("12$");
    }else if(day_type === "Weekend"){
      console.log("15$");
    }else{
      console.log("5$");
    }
  }else if(age > 18 && age <= 64){
    if(day_type === "Weekday"){
      console.log("18$");
    }else if(day_type === "Weekend"){
      console.log("20$");
    }else{
      console.log("12$");
    } 
  }else if(age > 64 && age <= 122){
    if(day_type === "Weekday"){
      console.log("12$");
    }else if(day_type === "Weekend"){
      console.log("15$");
    }else{
      console.log("10$");
    } 
  }else{
    console.log("Error!")
  }
}
