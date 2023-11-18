function personAdresses(data) {
  let NameAdressPairs = {};

  data.forEach((element) => {
    let [name, adress] = element.split(":");
    NameAdressPairs[name] = adress;
  });

  NameAdressPairs = Object.entries(NameAdressPairs);
  NameAdressPairs = NameAdressPairs.sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });

  for (const element of NameAdressPairs) {
    let [name, adress] = element;
    console.log(`${name} -> ${adress}`);
  }
}

//stored alphabeticly
personAdresses([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
