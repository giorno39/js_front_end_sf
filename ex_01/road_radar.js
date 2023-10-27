function road_radar(speed, place){
  let speed_limit = 0;
  switch (place){
    case 'motorway':
      speed_limit = 130;
      break;
    case 'interstate':
      speed_limit = 90;
      break;
    case 'city':
      speed_limit = 50;
      break;
    case 'residential':
      speed_limit = 20;
      break;
  }
  
  let diff = speed - speed_limit;
  if(diff <= 0){
    console.log(`Driving ${speed} km/h in a ${speed_limit} zone`)
  }else {
    let status;
    if(diff <= 20){
      status = 'speeding';
    } else if(diff <= 40){
      status = 'excessive speeding';
    } else {
      status = 'reckless driving'
    }
    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speed_limit} - ${status}`)

  }
}
