function solve(str) {
    const middleIndex = str.length / 2;
    const halfLeft = str.substring(0, middleIndex)
        .split('')
        .reverse()
        .join('');
    const halfRight = str.substring(middleIndex)
        .split('')
        .reverse()
        .join('');

    console.log(halfLeft);
    console.log(halfRight)
}

solve('tluciffiDsIsihTgnizamAoSsIsihT')