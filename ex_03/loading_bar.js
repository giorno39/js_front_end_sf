function createLoadingBar(percentege) {
  result = "[";
  result += "%".repeat(percentege / 10);
  result += ".".repeat(10 - percentege / 10);
  result += "]";
  let firstLine, secondLine;

  if (percentege === 100) {
    firstLine = `100% Complete!`;
    secondLine = result;
  } else {
    firstLine = `${percentege}% ${result}`;
    secondLine = "Still loading...";
  }

  console.log(firstLine);
  console.log(secondLine);
}

createLoadingBar(90);
