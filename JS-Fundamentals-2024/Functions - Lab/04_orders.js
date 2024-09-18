function solve(product, quantity) {
    let singlePrice = 0;
    switch (product) {
        case 'coffee': singlePrice = 1.5; break;
        case 'water': singlePrice = 1; break;
        case 'coke': singlePrice = 1.4; break;
        case 'snacks': singlePrice = 2; break;
    }

    console.log((singlePrice * quantity).toFixed(2));
}