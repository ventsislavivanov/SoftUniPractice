function solve(arr) {
    let gladiators = {};
    for (const line of arr) {
        if (line === 'Ave Cesar') {
            break;
        }

        if (! line.includes(' vs ')) {
            let [name, technique, skill] = line.split(' -> ');
            if (! gladiators.hasOwnProperty(name)) {
                gladiators[name] = {};
            }

            if (! gladiators[name].hasOwnProperty(technique)) {
                gladiators[name][technique] = Number(skill);
            } else if (gladiators[name][technique] < Number(skill)) {
                gladiators[name][technique] = Number(skill);
            }
        } else {
            let [gladiator1, gladiator2] = line.split(' vs ');

            if (! gladiators.hasOwnProperty(gladiator1) ||
                ! gladiators.hasOwnProperty(gladiator2)) {
                continue;
            }

            const gladiator1Techniques =  gladiators[gladiator1];
            const gladiator2Techniques =  gladiators[gladiator2];

            for (const key in gladiator1Techniques) {
                if (! gladiator2Techniques.hasOwnProperty(key)) {
                    continue;
                }

                if (gladiator1Techniques[key] > gladiator2Techniques[key]) {
                    delete gladiators[gladiator2];
                } else if (gladiator1Techniques[key] < gladiator2Techniques[key]) {
                    delete gladiators[gladiator1];
                }
            }
        }
    }

    for (const key in gladiators) {
        let sum = 0;
        let technique = gladiators[key];
        for (const insideKey in technique) {
            sum += technique[insideKey];
        }
        technique['sum'] = sum;
    }

    const sortedGladiators = Object.entries(gladiators)
        .sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))


    for (const [name, skillsObj] of sortedGladiators) {
        console.log(`${name}: ${skillsObj.sum} skill`);
        delete skillsObj.sum

        const sortedSkills = Object.entries(skillsObj)
            .sort((a, b) => b[1] - a[1] ||  a[0].localeCompare(b[0]));
        for (const skill of sortedSkills) {
            console.log(`- ${skill[0]} <!> ${skill[1]}`);
        }
    }
}

// solve([
//         'Peter -> BattleCry -> 400',
//         'Alex -> PowerPunch -> 300',
//         'Stefan -> Duck -> 200',
//         'Stefan -> Tiger -> 250',
//         'Ave Cesar'
//     ]
// );
//Stefan: 450 skill
// - Tiger <!> 250
// - Duck <!> 200
// Peter: 400 skill
// - BattleCry <!> 400
// Alex: 300 skill
// - PowerPunch <!> 300

solve([
        'Peter -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
    ]
);
// Gladius: 700 skill
// - Shield <!> 250
// - Support <!> 250
// - Heal <!> 200
// Peter: 400 skill
// - Duck <!> 400
