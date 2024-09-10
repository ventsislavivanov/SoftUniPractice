function solve(input) {
    let n = +input.shift();

    let point = 0;
    let redCount = 0;
    let orangeCount = 0;
    let yellowCount = 0;
    let whiteCount = 0;
    let blackCount = 0;
    let otherCount = 0;


    for (let i = 0; i < n; i++) {
        let color = input[i];

        switch (color) {
            case 'red':
                point += 5;
                redCount++;
                break;
            case 'orange':
                point += 10;
                orangeCount++;
                break;
            case 'yellow':
                point += 15;
                yellowCount++;
                break;
            case 'white':
                point += 20;
                whiteCount++;
                break;
            case 'black':
                point = Math.floor((point / 2));
                blackCount++;
                break;
            default:
                otherCount++;
        }
    }

    console.log(`Total points: ${point}`);
    console.log(`Red balls: ${redCount}`);
    console.log(`Orange balls: ${orangeCount}`);
    console.log(`Yellow balls: ${yellowCount}`);
    console.log(`White balls: ${whiteCount}`);
    console.log(`Other colors picked: ${otherCount}`);
    console.log(`Divides from black balls: ${blackCount}`);
}

//solve(["3", "white", "black", "pink"]);
solve(["5", "red", "red", "ddd", "ddd", "ddd"]);

