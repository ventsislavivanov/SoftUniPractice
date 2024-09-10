function solve(input) {
    let duration = +input.shift();
    let nScenes = +input.shift();
    let durationScenes = +input.shift();

    let preparation = duration * 0.15;
    let time = nScenes * durationScenes;
    let totalTime = time + preparation;

    if (duration >= totalTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.ceil((duration - totalTime))} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.ceil((totalTime - duration))} minutes.`);
    }
}

// solve(["120", "10", "11"])
// solve(["60", "15", "3"])
solve(["135", "5", "20"])
