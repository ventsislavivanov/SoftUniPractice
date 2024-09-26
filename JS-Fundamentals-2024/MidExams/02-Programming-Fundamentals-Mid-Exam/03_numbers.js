function solve(str) {
    let sequence = str.split(' ').map(Number);

    let sum = 0;
    for (const el of sequence) {
        sum += el;
    }
    const average = sum / sequence.length;

    const result = sequence.sort((a,b) => b - a)
        .filter(el => el > average)
        .slice(0, 5);

    if (result.length > 0) {
        console.log(result.join(' '));
    } else {
        console.log('No');
    }
}

solve('10 20 30 40 50');
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
solve('1');
solve('-1 -2 -3 -4 -5 -6');