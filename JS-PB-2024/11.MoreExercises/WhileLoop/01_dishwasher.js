function solve(input) {
    let nDetergent = Number(input.shift());
    let dDish = 5;
    let dPot = 15;

    let volumeDetergent = nDetergent * 750;
    let index = 0;
    let potCount = 0;
    let dishCount = 0;
    let inputElement = input[index];

    while (volumeDetergent >= 0) {
        if (inputElement === 'End') {
            break;
        }
        inputElement = Number(inputElement);
        if ((index + 1) % 3 === 0) {
            volumeDetergent -= (inputElement * dPot);
            potCount += inputElement;
        } else {
            volumeDetergent -= (inputElement * dDish);
            dishCount += inputElement;
        }

        index++;
        inputElement = input[index]
    }

    if (volumeDetergent >= 0) {
        console.log("Detergent was enough!");
        console.log(`${dishCount} dishes and ${potCount} pots were washed.`);
        console.log(`Leftover detergent ${volumeDetergent} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(volumeDetergent)} ml. more necessary!`);
    }
}

solve(['2', '53', '65', '55', 'End']);
// solve(['1', '10', '15', '10', '12', '13', '30'])
