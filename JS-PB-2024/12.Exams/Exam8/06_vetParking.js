function solve(input) {
    let nDay= +input.shift();
    let nHours= +input.shift();

    let totalSum = 0;
    for (let days = 1; days <= nDay; days++) {
        let daySum = 0;
        for (let hours = 1; hours <= nHours; hours++) {
            let price = 0;
            if (days % 2 === 0 && hours % 2 !== 0) {
                price = 2.5
            } else if (days % 2 !== 0 && hours % 2 === 0) {
                price = 1.25;
            } else {
                price = 1;
            }
            daySum += price;
        }
        totalSum += daySum;
        console.log(`Day: ${days} - ${daySum.toFixed(2)} leva`)
    }

    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}

// solve(["2", "5"]);
solve(["5", "2"]);