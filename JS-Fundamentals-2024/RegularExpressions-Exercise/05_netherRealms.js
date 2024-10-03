function solve(string) {
    const splitPattern = /[, ]+/g;
    const healthPattern = /[^0-9.\/+*-]/g;
    const digitPattern = /[+-]?\d+\.?\d*/g;
    const signPattern = /[\/*]/g;

    const demonsArr = string.split(splitPattern);
    let demons = {}

    for (const demon of demonsArr) {
        let hp = 0;
        let dmg = 0;

        const letterMatches = demon.match(healthPattern);
        if (letterMatches) {
            letterMatches.forEach(char => {
                hp += char.charCodeAt(0);
            })
        }

        const digitsMatches = demon.match(digitPattern);
        if (digitsMatches) {
            digitsMatches.forEach(digit => {
                dmg += Number(digit);
            })
        }

        const signMatches = demon.match(signPattern);
        if (signMatches) {
            signMatches.forEach(operator => {
                if (operator === '*') {
                    dmg *= 2;
                } else {
                    dmg /= 2;
                }
            });
        }

        demons[demon] = {};
        demons[demon]['health'] = hp;
        demons[demon]['damage'] = dmg;
    }

    const sorted = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [name, valuesObj] of sorted) {
        console.log(`${name} - ${valuesObj['health']} health, ${valuesObj['damage'].toFixed(2)} damage`);
    }
}

// solve('M3ph-0.5s-0.5t0.0**');
solve('M3ph1st0**, Azazel');
// solve('Gos/ho');