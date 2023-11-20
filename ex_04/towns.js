function solve(data) {
  let towns = [];
  data.forEach((element) => {
    let [town, latitude, longitude] = element.split(" | ");
    latitude = Number(latitude);
    longitude = Number(longitude);
    towns.push({ town, latitude, longitude });
  });

  towns.forEach((element) => {
    console.log(
      `{ town: '${element.town}', latitude: '${element.latitude.toFixed(
        2
      )}', longitude: '${element.longitude.toFixed(2)}' }`
    );
  });
}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
