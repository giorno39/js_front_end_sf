function solve(data) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  data.forEach((element) => {
    let [name, age] = element.split(" ");
    let currCat = new Cat(name, age);
    currCat.meow();
  });
}

solve(["Mellow 2", "Tom 5"]);
