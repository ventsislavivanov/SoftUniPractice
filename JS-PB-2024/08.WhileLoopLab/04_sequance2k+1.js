function solve(input) {
    let digit = Number(input.shift());
    let k = 1;
 
    while (k <= digit) {
         console.log(k);
         k = k * 2 + 1;
    }
 
 }
 
 solve(
     ['500']
 );