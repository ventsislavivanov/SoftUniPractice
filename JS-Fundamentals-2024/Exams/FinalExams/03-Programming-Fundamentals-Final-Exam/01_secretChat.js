function solve(arr) {
    let msg = arr.shift();
    let line = arr.shift();

    while (line !== "Reveal") {
        const command = line.split(":|:")
        switch (command[0]) {
            case 'InsertSpace':
                const index = Number(command[1]);

                const firstPart = msg.slice(0, index);
                const lastPart = msg.slice(index);

                msg = firstPart.concat(' ').concat(lastPart);

                console.log(msg);
                break;
            case 'Reverse':
                const findStr = command[1];
                if (msg.includes(findStr)) {
                    const [firstStr, lastStr] = msg.split(findStr);
                    const reversed = findStr.split('').reverse().join('');
                    msg = firstStr.concat(lastStr).concat(reversed);
                    console.log(msg);
                } else {
                    console.log("error");
                }
                break;
            case 'ChangeAll':
                const findChar = command[1];
                const replaceChar = command[2];

                while (msg.includes(findChar)) {
                    msg = msg.replace(findChar, replaceChar);
                }

                console.log(msg);
                break;
        }

        line = arr.shift();
    }

    console.log(`You have a new text message: ${msg}`);
}

solve([
        'heVVodar!gniV',
        'ChangeAll:|:V:|:l',
        'Reverse:|:!gnil',
        'InsertSpace:|:5',
        'Reveal'
    ]
);

// solve([
//         'Hiware?uiy',
//         'ChangeAll:|:i:|:o',
//         'Reverse:|:?uoy',
//         'Reverse:|:jd',
//         'InsertSpace:|:3',
//         'InsertSpace:|:7',
//         'Reveal'
//     ]
// );