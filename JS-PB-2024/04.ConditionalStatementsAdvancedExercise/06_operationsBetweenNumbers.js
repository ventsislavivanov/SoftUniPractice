function solve(input) {
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());
    let operator = input.shift();

    let result, everOrodd;
    switch(operator) {
        case '+':
            result = n1 + n2;     
            break;
        case '-':
            result = n1 - n2;
            break;
        case '/':            
        result = (n1 / n2).toFixed(2);
            break;
        case '*':
            result = n1 * n2;
            break;
        case '%':
            result = n1 % n2;
            break;
    }

    if (result % 2 === 0) {
        everOrodd = 'even';
    } else {
        everOrodd = 'odd';
    }

    if(operator === '+' || operator === '-' || operator === '*') {
        console.log(`${n1} ${operator} ${n2} = ${result} - ${everOrodd}`);
    } else if (n2 !== 0 && (operator === '/' || operator === '%')) {
        console.log(`${n1} ${operator} ${n2} = ${result}`);
    } else if(operator === '/' || operator === '%') {
        console.log(`Cannot divide ${n1} by zero`);
    }
}

solve(["10",
    "3",
    "%"])
    
    
    