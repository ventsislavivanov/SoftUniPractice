function solve(input) {
    let meetings = {};
    for (const line of input) {
        const [weekday, name] = line.split(' ');

        if (! meetings.hasOwnProperty(weekday)) {
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`)
        } else {
            console.log(`Conflict on ${weekday}!`);
        }
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)
    }
}

solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);