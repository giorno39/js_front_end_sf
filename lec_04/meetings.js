function scheduleMeeting(data) {
  let schedule = {};

  data.forEach((element) => {
    let [weekday, name] = element.split(" ");
    if (!schedule.hasOwnProperty(weekday)) {
      schedule[weekday] = name;
      console.log(`Scheduled for ${weekday}`);
    } else {
      console.log(`Conflict on ${weekday}!`);
    }
  });

  for (const [key, value] of Object.entries(schedule)) {
    console.log(`${key} -> ${value}`);
  }
}

scheduleMeeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
