function solve(arr) {
    const msgCount = Number(arr.shift());
    const decryptedMsgs = [];

    const startPattern = /[star]/gi;

    for (let i = 0; i < msgCount; i++) {
        let msg = arr[i];
        let decryptedMsg = '';

        const matches = msg.match(startPattern);
        if (matches) {
            const matchesCount = matches.length;

            for (const char of msg) {
                let code = char.charCodeAt(0);
                code -= matchesCount;

                let newChar = String.fromCharCode(code);
                decryptedMsg += newChar;
            }
        } else {
            decryptedMsg = msg;
        }

        decryptedMsgs.push(decryptedMsg);
    }

    const planetPattern = /@(?<planet>[A-Za-z]+)[^@:!\->]*:(?<population>[\d+])[^@:!\->]*!(?<type>[A|D])![^@:!\->]*->(?<soldiers>[\d+])/;
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (const msg of decryptedMsgs) {
        const matches = msg.match(planetPattern);

        if (!matches) {
            continue;
        }

        let { planet, type} = matches.groups;

        if (type === "A") {
            attackedPlanets.push(planet);
        } else {
            destroyedPlanets.push(planet);
        }
    }

    attackedPlanets.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attackedPlanets.length}`)
    attackedPlanets.forEach((planet) => {console.log(`-> ${planet}`);});

    destroyedPlanets.sort((a,b) => a.localeCompare(b));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`)
    destroyedPlanets.forEach((planet) => {console.log(`-> ${planet}`);});
}
//
// solve(['2',
//     'STCDoghudd4=63333$D$0A53333',
//     'EHfsytsnhf?8555&I&2C9555SR']
// );

solve(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
);