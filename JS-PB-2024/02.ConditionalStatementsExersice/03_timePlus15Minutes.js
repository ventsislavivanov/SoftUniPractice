function solve(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    const afterMinutes = 15;
    minutes = minutes + afterMinutes

    if(minutes >= 60) {
        minutes = minutes - 60;
        hours = hours + 1;
    }
    if (hours >= 24) {
        hours = hours - 24
    }

    if(minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}

solve(["1", "46"]);
solve(["0", "01"]);
solve(["23", "59"]);
solve(["11", "08"]);
solve(["12", "49"]);