function solve(num) {
    function loadedBar(num) {
        const percentCount = num / 10;
        const dotCount = 10 - percentCount;

        let bar = '';
        for (let percent = 0; percent < percentCount; percent++) {
            bar += '%';
        }
        for (let dot = 0; dot < dotCount; dot++) {
            bar += '.';
        }

        return `[${bar}]`;
    }

    const loaded = loadedBar(num);

    if (num === 100) {
        console.log('100% Complete!');
        console.log(loaded);
    } else {
        console.log(`${num}% ${loaded}`);
        console.log('Still loading...');

    }
}

solve(30);
solve(100);
