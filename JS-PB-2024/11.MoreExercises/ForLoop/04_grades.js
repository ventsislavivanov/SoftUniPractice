function solve(input) {
    let nStudents = Number(input.shift());
    let topStudents= 0;
    let goodStudents = 0;
    let averageStudents = 0;
    let badStudents = 0;

    let allGrades = 0;
    for (let i = 0; i < nStudents; i++) {
        let grade = Number(input[i])
        allGrades += grade
        if (grade >= 2.00 && grade <= 2.99) {
            badStudents++;
        } else if (grade >= 3.00 && grade <= 3.99) {
            averageStudents++;
        } else if (grade >= 4.00 && grade <= 4.99) {
            goodStudents++;
        } else if (grade >= 5) {
            topStudents++;
        }
    }

    console.log(`Top students: ${(topStudents / nStudents * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(goodStudents / nStudents * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(averageStudents / nStudents * 100).toFixed(2)}%`);
    console.log(`Fail: ${(badStudents / nStudents * 100).toFixed(2)}%`);
    console.log(`Average: ${(allGrades / nStudents).toFixed(2)}`);
}

solve([

    '10',
    '3.00',
    '2.99',
    '5.68',
    '3.01',
    '4',
    '4',
    '6.00',
    '4.50',
    '2.44',
    '5'

]);