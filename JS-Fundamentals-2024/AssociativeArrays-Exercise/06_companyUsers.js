function solve(arr) {
    let companyEmployees = {}
    for (const data of arr) {
        const [company, employeeId] = data.split(' -> ');

        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(employeeId)) {
                companyEmployees[company].push(employeeId)
            }
        } else {
            companyEmployees[company] = [employeeId];
        }
    }

    const companyEntries = Object.entries(companyEmployees)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, ids] of companyEntries) {
        console.log(name);
        for (const id of ids) {
            console.log(`-- ${id}`);
        }
    }
}


solve([
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
    ]
);

// solve([
//         'SoftUni -> AA12345',
//         'SoftUni -> CC12344',
//         'Lenovo -> XX23456',
//         'SoftUni -> AA12345',
//         'Movement -> DD11111'
//     ]
// );