function age_mapper(years){
  if(years < 0){
    console.log("out of bounds");
  } else if(years <= 2){
    console.log("baby");
  } else if(years <= 13){
    console.log("child");
  }
   else if(years <= 19){
    console.log("teenager");
  }
   else if(years <= 65){
    console.log("adult");
  }
   else {
    console.log("elder");
  }
}
  age_mapper(-1);