function solve(input) {
    const size = Number(input.shift());
    const sheetsN = Number(input.shift());

    const boxArea = size * size * 6;
    let paperArea = 0;
    let counter = 0;

    while (input.length) {
        if (sheetsN === counter) {
            break;
        }

        counter++;
        const length = Number(input.shift());
        const wight = Number(input.shift());

        let area = length * wight;
        if (counter % 3 === 0) {
            area = area * 0.75;

        }
        if (counter % 5 === 0) {
            continue;
        }

        paperArea += area;
    }

    if (paperArea >= boxArea) {
        let percentage = ((paperArea - boxArea) / paperArea) * 100;
        console.log("You've covered the gift box!");
        console.log(`${percentage.toFixed(2)}% wrap paper left.`);
    } else {
        const totalAreaCovered = (paperArea / boxArea) * 100;
        console.log("You are out of paper!");
        console.log(`${(100 - totalAreaCovered).toFixed(2)}% of the box is not covered.`);
    }
}

solve(["10", "5", "3", "0.5", "2.4", "5", "3.7", "1", "3", "34.7", "5", "80"]);
//You are out of paper!
// 79.94% of the box is not covered.
console.log('-----------')
solve(["2", "2", "0.2", "7", "6", "8.5"]);
// You've covered the gift box!
// 54.20% wrap paper left.