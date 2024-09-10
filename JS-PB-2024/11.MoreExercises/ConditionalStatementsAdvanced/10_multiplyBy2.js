function solve(input) {
    let inputElemnt = input[0];
    let index = 0;

    while (input.length !== index) {
        let num = Number(inputElemnt);
        if (inputElemnt < 0) {
            console.log(`Negative number!`);
            break;
        }

        console.log('Result: ' + (num * 2).toFixed(2));

        index++;
        inputElemnt = input[index];
    }
}

solve([

    '12',
'43.2144',
'12.3',
'543.23',
'-20'

])