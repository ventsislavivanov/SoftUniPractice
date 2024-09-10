function solve(input) {
    let initialEggs = +input.shift();
    let index = 0;
    let command = input[index++];
    let currentEggs = Number(input[index++]);
    let soldEggs = 0;

    while (command !== "Close") {    
        if (command === 'Buy') {
            if (initialEggs < currentEggs) {
                console.log("Not enough eggs in store!");
                console.log(`You can buy only ${initialEggs}.`);
                break;
            }

            initialEggs -= currentEggs;
            soldEggs += currentEggs;
        } else if (command === 'Fill') {
            initialEggs += currentEggs;
        }

        command = input[index++];
        currentEggs = Number(input[index++]);
    }

    if (command === "Close") {
        console.log("Store is closed!");
        console.log(`${soldEggs} eggs sold.`);
    }    
}

// solve(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
solve(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);
