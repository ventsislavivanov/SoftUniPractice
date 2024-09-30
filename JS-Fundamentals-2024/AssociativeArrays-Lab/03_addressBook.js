function solve(arr) {
    const addressBook = {};
    for (const line of arr) {
        const [name, address] = line.split(':');
        addressBook[name] = address;
    }

    const entries= Object.entries(addressBook);
    const sorted= entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, address] of sorted) {
        console.log(`${name} -> ${address}`);
    }
}

// solve(['Tim:Doe Crossing',
//     'Bill:Nelson Place',
//     'Peter:Carlyle Ave',
//     'Bill:Ornery Rd']
// );

solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);