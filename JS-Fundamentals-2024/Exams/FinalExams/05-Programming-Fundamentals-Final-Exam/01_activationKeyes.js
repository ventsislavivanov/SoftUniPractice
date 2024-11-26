function solve(arr) {
    let activationKey = arr.shift();
    let line = arr.shift();

    function isValidIndex(index, str) {
        return index >= 0 && index < str.length;
    }

    while (line !== 'Generate') {
        const tokens = line.split('>>>');
        const command = tokens[0];

        if (command === 'Contains') {
            const substring = tokens[1];

            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (command === 'Flip') {
            const action = tokens[1];
            const startIndex = Number(tokens[2]);
            const endIndex = Number(tokens[3]);

            if (isValidIndex(startIndex, activationKey) && isValidIndex(endIndex, activationKey)) {
                const manipulationArr = activationKey.split('');
                const firstPart = manipulationArr.slice(0, startIndex);
                const secondPart = manipulationArr
                    .slice(startIndex, endIndex)
                    .map(el => action === 'Upper' ? el.toUpperCase() : el.toLowerCase());
                const thirdPart = manipulationArr.slice(endIndex);
                activationKey = firstPart.concat(secondPart, thirdPart).join('');

                console.log(activationKey)
            }
        } else if (command === 'Slice') {
            const startIndex = Number(tokens[1]);
            const endIndex = Number(tokens[2]);

            if (isValidIndex(startIndex, activationKey) && isValidIndex(endIndex, activationKey)) {
                const manipulationArr = activationKey.split('');
                const firstPart = manipulationArr.slice(0, startIndex);
                const secondPart = manipulationArr.slice(endIndex);
                activationKey = firstPart.concat(secondPart).join('');

                console.log(activationKey);
            }
        }

        line = arr.shift();
    }

    console.log(`Your activation key is: ${activationKey}`);
}

solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]);

solve([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
]);