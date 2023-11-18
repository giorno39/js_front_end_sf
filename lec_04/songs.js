function solve(data) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let until = data.shift();
  let songs = [];

  for (let i = 0; i < until; i++) {
    let [type, name, time] = data[i].split("_");
    songs.push(new Song(type, name, time));
  }

  let typToPrint = data.pop();

  if (typToPrint === "all") {
    songs.forEach((element) => {
      console.log(element.name);
    });
  } else {
    songs.forEach((element) => {
      if (element.typeList === typToPrint) console.log(element.name);
    });
  }
}

solve([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
