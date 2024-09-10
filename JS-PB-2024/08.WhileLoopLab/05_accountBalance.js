function solve(input) {
    let index = 0;
    let total = 0;

    while(input[index] !== "NoMoreMoney") {
        let digit = Number(input[index]);
        if (digit > 0) {
            total += digit;
            console.log("Increase: " + digit.toFixed(2));
        } else {
            console.log("Invalid operation!");
            break;
        }

        index++;
    }

    console.log("Total: " + total.toFixed(2));
}


solve(["120",
    "45.55",
    "-150"])
    
    
    