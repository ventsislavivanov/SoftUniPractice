function solve(input) {
  let holidayDays = Number(input.shift());
  let daysInYear = 365;
  let workDays = daysInYear - holidayDays;
  let gameTimePerYear = 30000;
  let onWork = 63;
  let onHoliday = 127;

  let realGameTime = holidayDays * onHoliday + workDays * onWork;

  let diff = Math.abs(gameTimePerYear - realGameTime);
  let h = Math.floor(diff / 60);
  let m = diff % 60;

  if (gameTimePerYear >= realGameTime) {
    console.log("Tom sleeps well");
    console.log(`${h} hours and ${m} minutes less for play`);
  } else {
    console.log("Tom will run away");
    console.log(`${h} hours and ${m} minutes more for play`);
  }
}

solve(["20"]);
