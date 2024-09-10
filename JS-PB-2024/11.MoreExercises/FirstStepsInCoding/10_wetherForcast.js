function solve(input) {
    let degree = Number(input.shift());
    if(degree >= 5 && degree <= 11.9) {
        console.log("Cold");
    } else if(degree >= 12 && degree <= 14.9){
        console.log("Cool");
    }else if(degree >= 15 && degree <= 20){
        console.log("Mild");
    } else if(degree >= 20.1 && degree <= 25.9) {
        console.log("Warm");
    } else if(degree >= 26 && degree <= 35) {
        console.log("Hot");
    } else {
        console.log('unknown')
    }
}

solve(
[

]

);