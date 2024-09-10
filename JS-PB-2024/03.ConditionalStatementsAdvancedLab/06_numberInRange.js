function solve(input) {
    let digit = Number(input.shift());
    if(digit >= -100 && digit <= 100 && digit !== 0) {
        console.log("Yes");        
    } else {
        console.log("No");
    }    
}

solve(['0'])