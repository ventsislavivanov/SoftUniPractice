function solve(input) {
    let base = 5364;
    let top = 8848;
    let maxDays = 5

    let climbedMeters = base;
    let index = 0;
    let command = input[index++];
    let meters = +input[index++];
    let days = 1;
    let isOnTop = false;

    while (true) {
        if (command === 'END') {
            break;
        }
        if (command === 'Yes') {
            days++;
        }
        if (days > maxDays) {
            break;
        }
        
        climbedMeters += meters;
        if (climbedMeters >= top) {
            isOnTop = true;
            break;
        }

        command = input[index++];
        meters = +input[index++];
    }

    if (isOnTop) {
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log("Failed!")
        console.log(climbedMeters);
    }
}

// solve(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"])
// solve(["Yes", "1000", "Yes", "945", "No", "1200", "END"])
solve(["Yes", "535", "Yes", "849", "Yes", "499", "Yes", "400", "Yes", "500"]);
// solve(["Yes", "700", "END"])
