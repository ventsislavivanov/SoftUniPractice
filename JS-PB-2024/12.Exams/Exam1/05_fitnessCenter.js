function solve(input) {
    let nCustomers = +input.shift();
    let backCustomers = 0;
    let chestCustomers = 0;
    let legsCustomers = 0;
    let absCustomers = 0;

    let shakeCustomers = 0;
    let barCustomers = 0;

    let trainingCustomers = 0;
    let proteinCustomers = 0;

    for (let i = 0; i < nCustomers; i++) {
        let inputElement = input[i];
        switch (inputElement) {
            case 'Back':
                backCustomers++;
                trainingCustomers++;
                break;
            case 'Chest':
                chestCustomers++;
                trainingCustomers++;
                break;
            case 'Legs':
                legsCustomers++;
                trainingCustomers++;
                break;
            case 'Abs':
                absCustomers++;
                trainingCustomers++;
                break;
            case 'Protein shake':
                shakeCustomers++;
                proteinCustomers++
                break;
            case 'Protein bar':
                barCustomers++;
                proteinCustomers++;
                break;
        }
    }

    console.log(`${backCustomers} - back`);
    console.log(`${chestCustomers} - chest`);
    console.log(`${legsCustomers} - legs`);
    console.log(`${absCustomers} - abs`);
    console.log(`${shakeCustomers} - protein shake`);
    console.log(`${barCustomers} - protein bar`);
    console.log(`${(trainingCustomers / nCustomers * 100).toFixed(2)}% - work out`);
    console.log(`${(proteinCustomers / nCustomers * 100).toFixed(2)}% - protein`);
}

solve(['10', 'Back', 'Chest', 'Legs', 'Abs', 'Protein shake', 'Protein bar', 'Protein shake', 'Protein bar', 'Legs', 'Abs'])