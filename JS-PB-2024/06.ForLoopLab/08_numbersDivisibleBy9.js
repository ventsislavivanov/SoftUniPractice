function solve(input) {
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());

    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        const element = i;
        if (element % 9 === 0) {
            sum += element;
        }        
    }

    console.log(`The sum: ${sum}`)

    for (let i = n1; i <= n2; i++) {
        const element = i;
        if (element % 9 === 0) {
            console.log(element);
        }        
    }

}

solve(["100", "200"])