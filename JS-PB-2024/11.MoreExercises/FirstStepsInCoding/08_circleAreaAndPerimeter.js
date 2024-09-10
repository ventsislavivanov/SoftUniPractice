function solve(input) {
    let r = Number(input.shift());
    let s = (Math.PI * r * r).toFixed(2);
    let c = (Math.PI * 2 * r).toFixed(2);
    
    console.log(s);
    console.log(c);

}

solve(['3']);