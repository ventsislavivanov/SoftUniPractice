function solve(arr) {
    const sorted = arr.sort();
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }
}

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
// solve(['Watermelon', 'Banana', 'Apples']);