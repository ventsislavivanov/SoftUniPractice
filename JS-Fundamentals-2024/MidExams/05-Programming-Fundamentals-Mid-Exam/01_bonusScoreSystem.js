function solve(input) {
    const studentsN = +input.shift();
    const lecturesN = +input.shift();
    const additionalBonus = +input.shift();
    let maxBonus = 0;
    let maxAtt = 0;

    for (let i = 0; i < studentsN; i++) {
        const attendances = input[i];
        const bonus = (attendances / lecturesN) * (5 + additionalBonus);

        if (bonus >= maxBonus) {
            maxBonus = bonus;
            maxAtt = attendances;
        }
    }

    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${maxAtt} lectures.`);
}

solve(['5', '25', '30', '12', '19', '24', '16', '20']);
// solve(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);
