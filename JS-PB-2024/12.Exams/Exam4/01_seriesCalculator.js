function solve(input) {
    let series = input.shift();
    let nSeasons = +input.shift();
    let nEpisode = +input.shift();
    let duration = +input.shift();

    let advertisement = duration * 0.2;
    duration = duration + advertisement;
    let specialTime = nSeasons * 10;

    let totalTime = duration * nEpisode * nSeasons + specialTime;
    console.log(`Total time needed to watch the ${series} series is ${totalTime} minutes.`);
}

solve(["Lucifer", "3", "18", "55"]);
solve(["Game of Thrones", "7", "10", "50"]);
solve(["Riverdale", "3", "21", "45"]);
