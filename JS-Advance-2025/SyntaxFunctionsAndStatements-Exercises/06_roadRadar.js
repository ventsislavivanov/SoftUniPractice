function solve(speed, area) {
    let limit = 0;
    let status = '';
    switch (area) {
        case 'residential':
            limit = 20;
            break;
        case 'city':
            limit = 50;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'motorway':
            limit = 130;
            break;
    }

    const difference = speed - limit;
    if (difference <= 20) {
        status = 'speeding';
    } else if (difference <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving'
    }

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

// solve(40, 'city');
// solve(21, 'residential');
solve(120,'interstate');