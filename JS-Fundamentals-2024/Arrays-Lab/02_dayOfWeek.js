function solve(number) {
    const days = ['Monday', 'Tuesday', "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const result = days[number - 1];
    if (result !== undefined) {
        console.log(result);
    } else {
        console.log('Invalid day!');
    }
}

solve(11)