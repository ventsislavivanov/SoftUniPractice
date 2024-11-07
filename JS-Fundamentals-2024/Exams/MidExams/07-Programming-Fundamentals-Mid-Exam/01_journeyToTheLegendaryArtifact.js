function solve(input) {
    let heroEnergy = Number(input.shift());
    let command = input.shift();
    let mountainCount = 0;
    let isFind = false;
    let isExhausted = false;
    let artefactPart = 0;


    while (command !== "Journey ends here!") {
        if (command === 'mountain') {
            heroEnergy -= 10;
            if (heroEnergy < 0) {
                isExhausted = true;
                break;
            }
            mountainCount++;

            if (mountainCount === 3) {
                artefactPart++;
                mountainCount = 0;
            }

            if (artefactPart === 3) {
                isFind = true;
                break;
            }
        } else if (command === 'desert') {
            heroEnergy -= 15;
            if (heroEnergy <= 0) {
                isExhausted = true;
                break;
            }
        } else if (command === 'forest') {
            heroEnergy += 7;
        }

        command = input.shift();
    }

    if (!isExhausted) {
        if (isFind) {
            console.log(`The character reached the legendary artifact with ${heroEnergy.toFixed(2)} energy left.`);
        } else {
            console.log(`The character could not find all the pieces and needs ${3 - artefactPart} more to complete the legendary artifact.`);
        }
    } else {
        console.log(`The character is too exhausted to carry on with the journey.`);
    }
}

solve(["130.0",
    "mountain",
    "desert",
    "mountain",
    "forest",
    "mountain",
    "desert",
    "desert",
    "mountain",
    "mountain",
    "desert",
    "mountain",
    "forest",
    "mountain",
    "mountain",
    "forest",
    "mountain",
    "Journey ends here!"]);

// solve(["40.0",
// "mountain",
// "desert",
// "mountain",
// "forest",
// "mountain",
// "mountain",
// "Journey ends here!"]);

// solve(["100.0",
// "mountain",
// "forest",
// "mountain",
// "forest",
// "desert",
// "mountain",
// "desert",
// "Journey ends here!"]);