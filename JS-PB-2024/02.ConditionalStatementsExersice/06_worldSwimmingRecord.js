function solve(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timesToSwim = Number(input[2]);

    let timeWithoutDaley = distance * timesToSwim;
    let delay = Math.floor(distance / 15) * 12.5;
    
    let swimTime = timeWithoutDaley + delay;

    if(swimTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${(swimTime).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(swimTime - record).toFixed(2)} seconds slower.`);
    }
}

solve(["10464",
    "1500",
    "20"])
    