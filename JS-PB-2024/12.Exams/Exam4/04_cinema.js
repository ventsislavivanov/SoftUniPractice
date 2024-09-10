function solve(input) {
  let volume = +input.shift();
  let index = 0;
  let command = input[index++];
  let ticketPrice = 5;
  let income = 0;

  while (true) {
    if (command === "Movie time!") {
      console.log(`There are ${volume} seats left in the cinema.`);
      break;
    }

    let currentPeople = Number(command);
    volume -= currentPeople;

    if (volume < 0) {
        console.log("The cinema is full.");
        break;
    }

    income += currentPeople * ticketPrice;
    if (currentPeople % 3 === 0) {
      income = income - 5;
    }

    command = input[index++];
  }

  console.log(`Cinema income - ${income} lv.`);
}

// solve(["60", "10", "6", "3", "20", "15", "Movie time!"]);
solve(["50", "15", "10", "10", "15", "5"]);
// solve(["100", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "Movie time!"]);
// solve(['100', '15', '15', '15', '15', '15', '15', '15']);
