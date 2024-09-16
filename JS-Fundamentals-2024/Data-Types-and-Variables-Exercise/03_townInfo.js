function solve(town, population, area) {
    let isInvalid = false;
    if (town.length < 3) {
        isInvalid = true;
        console.log("Town name must be at least 3 characters!");
    }
    if (population < 0) {
        isInvalid = true;
        console.log("Population must be a positive number!");
    }
    if (area < 0) {
        isInvalid = true;
        console.log("Area must be a positive number!");
    }

    if (!isInvalid) {
        console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
    }
}

// solve('Sofia', 1286383, 492);
// solve('LA', 1481353, 512);
// solve('Plovdiv', -45000, 100);
solve('Ka', 3600, -50);