function solve(input) {
    const employOne = Number(input.shift());
    const employTwo = Number(input.shift());
    const employTree = Number(input.shift());
    const answerPerHour = employOne + employTwo + employTree;
    let people = Number(input.shift());
    let hours = 0;

    while (people > 0) {
        hours++
        people -= answerPerHour;
        if (hours % 4 === 0) {
            hours++
        }
    }

    console.log(`Time needed: ${hours}h.`);
}

// solve(['5','6','4','20']);
solve(['1','2','3','45']);
solve(['3','2','5','40']);