function solve(input) {
    let budget = Number(input[0]);
    let videocardCount  = Number(input[1]);
    let processorCount= Number(input[2]);
    let ramCount = Number(input[3]);

    let videoCardPrice = 250;
    let totalVideoPrice = videocardCount * videoCardPrice;

    let processorPrice = totalVideoPrice * 0.35;
    let ramPrice = totalVideoPrice * 0.1;

    let totalSum = totalVideoPrice + processorCount * processorPrice + ramCount * ramPrice;

    if(videocardCount > processorCount) {
        totalSum = totalSum - totalSum * 0.15;
    }

    if(budget >= totalSum) {
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`)
    }
}

solve(["920.45",
    "3",
    "1",
    "1"])
    