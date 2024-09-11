function solve(number) {
    let sum = 0;
    const str = number.toString();
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

    console.log(`${number} Amazing? ${sum.toString().includes('9') ? 'True' : 'False'}`);
}

solve(1233);