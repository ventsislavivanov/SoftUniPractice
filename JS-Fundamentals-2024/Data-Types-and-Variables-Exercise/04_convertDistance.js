function solve(m) {
    let km = m / 1000;
    let miles = km * 0.621371;

    console.log(`${m} meters is equal to ${km} kilometers.`);
    console.log(`${km} kilometers is equal to ${miles.toFixed(2)} miles.`);
}

solve(1852)