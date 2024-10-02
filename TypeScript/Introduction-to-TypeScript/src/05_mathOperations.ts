function mathOperators(num1:number, num2:number, operator:string) {
    let result = 0;
    switch(operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }

    console.log(result);    
}

mathOperators(5, 6, "+");
mathOperators(3, 5.5, '*');