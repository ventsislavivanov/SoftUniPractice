function solve(arr) {
    let allEmployees = [];
    for (const name of arr) {
        const employee = {
            name,
            personalNumber: name.length
        }
        allEmployees.push(employee);
    }

    for (const employee of allEmployees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
}

solve([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
);