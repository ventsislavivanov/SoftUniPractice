function solve(input) {
    let totalTime = 0;
    for(let i = 0; i < input.length; i++) {
        totalTime += Number(input[i])
    }

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if(seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

solve(
    ["35",
        "45",
        "44"]
        
);