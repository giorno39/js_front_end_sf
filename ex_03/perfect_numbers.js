function perfectNumberValidator(number) {
  let halfNum = Math.ceil(number / 2);

  let sumOfPartials = 0;

  for (let i = 0; i <= halfNum; i++) {
    if (number % i === 0) {
      sumOfPartials += i;
    }
  }

  if (sumOfPartials === number) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}

perfectNumberValidator(29);
