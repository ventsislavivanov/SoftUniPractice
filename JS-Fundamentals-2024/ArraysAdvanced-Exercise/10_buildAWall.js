function solve(arr) {
    const parsedArr = arr.map(Number);
    let dailyConcrete = [];
    let totalConcrete = 0;
    let sections = parsedArr.filter(len => len < 30).length;

    while (sections !== 0) {
        let concreteByAllCrews = 0;
        for (let i = 0; i < parsedArr.length; i++){
            if (parsedArr[i] !== 30) {
                parsedArr[i]++;
                concreteByAllCrews += 195;
                if (parsedArr[i] === 30) {
                    sections--;
                }
            }
        }
        totalConcrete += concreteByAllCrews;
        dailyConcrete.push(concreteByAllCrews);
    }

    console.log(dailyConcrete.join(", "));
    console.log(`${totalConcrete * 1900} pesos`);
}

solve([21, 25, 28]);
// solve([17]);
// solve([17, 22, 17, 19, 17]);