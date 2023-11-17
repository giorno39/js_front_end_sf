function factiorielDivision(firstNumber, secondNumber) {
  function factoriel(number) {
    if (number === 1) {
      return 1;
    }
    return number * factoriel(number - 1);
  }

  let firstFactoriel = factoriel(firstNumber);
  let secondFactoriel = factoriel(secondNumber);

  let result = firstFactoriel / secondFactoriel;
  console.log(result.toFixed(2));
}

factiorielDivision(6, 2);
