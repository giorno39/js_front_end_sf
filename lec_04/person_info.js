function createPersonInstance(firstName, lastName, age) {
  let person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  return person;
}

let p1 = createPersonInstance("asd", "asd0", 2);
console.log(p1.firstName, p1.lastName, p1.age);
