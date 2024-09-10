function solve(input) {
    let size = input.shift();
    let color = input.shift();
    let countN = input.shift();
    let price = 0;

    switch (size) {
        case 'Large':
            switch (color) {
                case 'Red':
                    price = 16;
                    break;
                case 'Green':
                    price = 12;
                    break;
                case 'Yellow':
                    price = 9;
                    break;
            }
            break;
        case 'Medium':
            switch (color) {
                case 'Red':
                    price = 13;
                    break;
                case 'Green':
                    price = 9;
                    break;
                case 'Yellow':
                    price = 7;
                    break;
            }
            break;
        case 'Small':
            switch (color) {
                case 'Red':
                    price = 9;
                    break;
                case 'Green':
                    price = 8;
                    break;
                case 'Yellow':
                    price = 5;
                    break;
            }
            break;
    }

    let income = price * countN;
    let cost = income * 0.35;
    console.log(`${(income - cost).toFixed(2)} leva.`);
}

solve(["Large", "Red", "7"])
// solve(["Medium", "Green", "5"])
// solve(["Small", "Yellow", "3"])
