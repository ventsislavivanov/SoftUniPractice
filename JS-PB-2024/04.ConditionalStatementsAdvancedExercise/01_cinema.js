function solve(input) {
    let projection = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());
    let tiketPrice = 0;

    if(projection === 'Premiere') {
        tiketPrice = 12;
    } else if(projection === 'Normal') {
        tiketPrice = 7.5;
    } else if(projection === 'Discount') {
        tiketPrice = 5;
    }

    console.log((rows * columns * tiketPrice).toFixed(2) + " leva");
}

solve(["Premiere",
    "10",
    "12"])
    