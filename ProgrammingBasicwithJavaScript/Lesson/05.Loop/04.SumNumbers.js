function sumNumber(args){
    let n = Number(args[0]);
 
    let sum = 0;
 
    for(let i = 1; i <= n; i++){
        let currentNumber = Number(args[i]);
        sum += currentNumber;
    }
 
    console.log(sum);
}

sumNumbers([4, 45, -20, 7, 11]);