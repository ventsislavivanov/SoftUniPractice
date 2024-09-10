function solve(input) {
  let season = input.shift();
  let typeGroup = input.shift();
  let nStudents = Number(input.shift());
  let nOvernight = Number(input.shift());

  let pricePerOvernight = 0;
  let sprot = "";
  if (season === "Winter") {
    if (typeGroup === "girls") {
      pricePerOvernight = 9.6;
      sprot = "Gymnastics";
    } else if (typeGroup === "boys") {
      pricePerOvernight = 9.6;
      sprot = "Judo";
    } else if (typeGroup === "mixed") {
      pricePerOvernight = 10;
      sprot = "Ski";
    }
  } else if (season === "Spring") {
    if (typeGroup === "girls") {
      pricePerOvernight = 7.2;
      sprot = "Athletics";
    } else if (typeGroup === "boys") {
      pricePerOvernight = 7.2;
      sprot = "Tennis";
    } else if (typeGroup === "mixed") {
      pricePerOvernight = 9.5;
      sprot = "Cycling";
    }
  } else if (season === "Summer") {
    if (typeGroup === "girls") {
      pricePerOvernight = 15;
      sprot = "Volleyball";
    } else if (typeGroup === "boys") {
      pricePerOvernight = 15;
      sprot = "Football";
    } else if (typeGroup === "mixed") {
      pricePerOvernight = 20;
      sprot = "Swimming";
    }
  }

  let totalPrice = pricePerOvernight * nOvernight * nStudents;

  if (nStudents >= 50) {
    totalPrice = totalPrice - totalPrice * 0.5;
  } else if (nStudents >= 20 && nStudents < 50) {
    totalPrice = totalPrice - totalPrice * 0.15;
  } else if (nStudents >= 10 && nStudents < 20) {
    totalPrice = totalPrice - totalPrice * 0.05;
  }

  console.log(`${sprot} ${totalPrice.toFixed(2)} lv.`);
}

solve(["Spring", "girls", "20", "7"]);
