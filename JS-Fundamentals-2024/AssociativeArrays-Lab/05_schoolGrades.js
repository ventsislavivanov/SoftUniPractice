function solve(input) {
    let map = new Map();
    for (const line of input) {
        let [name, ...grades] = line.split(' ');
        grades = grades.map(Number)
        // console.log(name, grades)

        if (!map.has(name)) {
            map.set(name, grades);
        } else {
            let curGrades = map.get(name)
            curGrades.push(...grades)
            map.set(name, curGrades);
        }
    }

    const entries = map.entries();

    let studentsAvrGrades = {}
    for (const entry of entries) {
        let name = entry[0];
        let grades = entry[1];

        studentsAvrGrades[name] = grades.reduce((a, b) => a + b, 0) / grades.length;
    }

    const sort = Object.entries(studentsAvrGrades)
        .sort((a, b) => a[0].localeCompare(b[0]));
    for (const el of sort) {
        console.log(`${el[0]}: ${el[1].toFixed(2)}`);
    }
}


solve(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
);
// solve(['Steven 3 5 6 4',
//     'George 4 6',
//     'Tammy 2 5 3',
//     'Steven 6 3']
// );