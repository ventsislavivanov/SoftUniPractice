function solve(yield) {
    let days = 0;
    let totalExtract = 0;

    while (yield >= 100) {
        days++
        totalExtract += yield - 26;

        yield -= 10;
    }

    totalExtract -= 26;
    if (totalExtract < 0) {
        totalExtract = 0;
    }

    console.log(days);
    console.log(totalExtract);
}
