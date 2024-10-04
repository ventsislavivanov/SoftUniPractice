function solve(input) {
    let message = input.shift();
    let line = input.shift();

    while (line !== 'Decode') {
        const [command, index, value] = line.split('|');
        switch (command) {
            case "Move":
                const firstChars = message.substring(0,index);
                const lastChars = message.substring(index);
                message = lastChars + firstChars;
                break;
            case "Insert":
                const firstPart = message.slice(0,index);
                const endPart = message.slice(-(message.length - index));
                if (firstPart !== endPart) {
                    message = firstPart + value + endPart;
                } else {
                    message = firstPart + value;
                }
                break;
            case "ChangeAll":
                while (message.includes(index)) {
                    message = message.replace(index, value);
                }
                break;
        }


        line = input.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

solve([
        'zzHe',
        'ChangeAll|z|l',
        'Insert|2|o',
        'Move|3',
        'Decode',
    ]
);

solve([
        'owyouh',
        'Move|2',
        'Move|3',
        'Insert|3|are',
        'Insert|9|?',
        'Decode'
    ]
);