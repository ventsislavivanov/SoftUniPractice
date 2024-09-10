function solve(input) {
    let nKuzonaci = Number(input.shift());
    let index = 0;
    let sugar = Number(input[index++]);
    let flour = Number(input[index++]);

    let totalSugar = 0;
    let totalFlour = 0;
    let maxSugar = Number.MIN_SAFE_INTEGER;
    let maxFlour = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nKuzonaci; i++) {
        totalSugar += sugar;
        totalFlour += flour;

        if (maxSugar < sugar) {
            maxSugar = sugar;
        }
        if (maxFlour < flour) {
            maxFlour = flour;
        }

        sugar = Number(input[index++]);
        flour = Number(input[index++]);
    }

    let nSugar = Math.ceil(totalSugar / 950);
    let nFlour = Math.ceil(totalFlour / 750);

    console.log(`Sugar: ${nSugar}`);
    console.log(`Flour: ${nFlour}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}

// solve(["3", "400", "350", "250", "300", "450", "380"]);
solve(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);
        