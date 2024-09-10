function solve(input) {
    let nDays = +input.shift();
    let startKm = +input.shift();

    let totalKm = startKm;
    for (let i = 0; i < nDays; i++) {
        let percent = input[i];
        startKm += startKm * percent / 100;
        totalKm += startKm;
    }

    if (totalKm >= 1000) {
        console.log(`You've done a great job running ${Math.ceil((totalKm - 1000))} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil((1000 - totalKm))} more kilometers`);
    }
}

// solve(["5", "30", "10", "15", "20", "5", "12"])
solve(["4", "100", "30", "50", "60", "80"])

