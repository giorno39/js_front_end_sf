function objectIterator(obj) {
  for (const key of Object.keys(obj)) {
    console.log(`${key} -> ${obj[key]}`);
  }
}

objectIterator({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
