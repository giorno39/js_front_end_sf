function NxNMatrixPrinter(n) {
  function printLine(m) {
    return `${m} `.repeat(m);
  }

  for (let i = 1; i <= n; i++) {
    console.log(printLine(n));
  }
}

NxNMatrixPrinter(7);
