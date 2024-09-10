function solve(input) {
    let movieName = input[0];
    let movieTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let relaxTime = breakTime / 4;

    let neededTime = lunchTime + relaxTime + movieTime;
    

    if(neededTime <= breakTime) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(breakTime - neededTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(neededTime - breakTime)} more minutes.`);
    }
}

solve(["Game of Thrones",
    "60",
    "96"])
    
    solve(["Teen Wolf",
        "48",
        "60"])
        