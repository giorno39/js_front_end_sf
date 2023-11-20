function solve(data) {
  let employees = [];

  data.forEach((element) => {
    employees.push({ name: element, personalNumber: element.length });
  });

  employees.forEach((element) => {
    console.log(
      `Name: ${element.name} -- Personal Number: ${element.personalNumber}`
    );
  });
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
