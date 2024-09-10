function solve(input) {
    let digit = Number(input.shift());

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${digit} = ${i * digit}`);        
    }
}


solve(['4'])