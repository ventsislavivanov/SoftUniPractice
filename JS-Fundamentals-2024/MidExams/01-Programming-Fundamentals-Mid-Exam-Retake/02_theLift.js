function solve(input) {
    let people = Number(input.shift());
    let wagons = input.shift().split(' ').map(Number);

    for (let i = 0; i < wagons.length; i++) {
        let wagon = Number(wagons[i]);
        if (wagon < 4) {
            if (people >= 4 - wagon) {
                people -= 4 - wagon
                wagons[i] = 4;
            } else {
                wagons[i] += people;
                people = 0;
            }
        }
    }

    let isNotFull = false;

    for (let i = 0; i < wagons.length; i++) {
        let wagon = Number(wagons[i]);;
        if (wagon < 4) {
            isNotFull = true;
        }
    }

    if (!isNotFull && people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }

    if (isNotFull && people === 0) {
        console.log("The lift has empty spots!");
    }

    console.log(wagons.join(" "));
}

// solve(["15", "0 0 0 0 0"]);
solve(["20", "0 2 0"]);