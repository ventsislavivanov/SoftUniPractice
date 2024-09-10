function solve(input) {
    let startInterval = Number(input.shift());
    let endInterval = Number(input.shift());
    let magicNumber = Number(input.shift());
    let combinationCount = 0;
    let isCombination = false;

    let firstNumber = 0;
    let secondNumber = 0;


    for (let i = startInterval; i <= endInterval; i++) {
        if(isCombination) {
            break;
        }
         
        for (let j = startInterval; j <= endInterval; j++) {
            combinationCount++;
            if(i + j === magicNumber) {
                isCombination = true;
                firstNumber = i;
                secondNumber = j;
                break;
            }
        }
    }

    if(! isCombination) {
        console.log(`${combinationCount} combinations - neither equals ${magicNumber}`);
    } else {
        console.log(`Combination N:${combinationCount} (${firstNumber} + ${secondNumber} = ${magicNumber})`);
    }
}

solve(["88",
    "888",
    "1000"])
    
    
    
    