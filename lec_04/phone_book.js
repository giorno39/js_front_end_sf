function createPhoneBookViaInformation(data) {
  let phoneBook = {};

  data.forEach((element) => {
    let [name, number] = element.split(" ");
    phoneBook[name] = number;
  });

  for (const [key, value] of Object.entries(phoneBook)) {
    console.log(`${key} -> ${value}`);
  }
}

createPhoneBookViaInformation([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
