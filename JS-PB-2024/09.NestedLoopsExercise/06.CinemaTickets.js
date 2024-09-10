function solve(input) {
    const standardTicket = 'standard';
    const kidTicket = 'kid';
    const studentTicket = 'student';

    let counterStandard, counterStudent, counterKid = 0;
    for (let i = 0; i < input.length; i++) {
        let FilmName = input[0];
        let area = input[1];

        if (input[i] === 'standard') {
            counterStandard++;
        }
        if (input[i] === 'student') {
            counterStudent++;
        }
        if (input[i] === 'kid') {
            counterKid++;
        }

        if (input[i] === 'End') {
            break;
        }
    }
}

solve(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);

/* solve(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"]); */