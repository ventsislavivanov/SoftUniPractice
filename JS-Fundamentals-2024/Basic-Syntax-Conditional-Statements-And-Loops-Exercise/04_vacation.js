function solve(peopleCount, groupType, day) {
    let price = 0;
    switch (groupType) {
        case 'Students':
            switch (day) {
                case 'Friday': price = 8.45; break;
                case 'Saturday': price = 9.8; break;
                case 'Sunday': price = 10.46; break;
            }
            break;
        case 'Business':
            switch (day) {
                case 'Friday': price = 10.9; break;
                case 'Saturday': price = 15.6; break;
                case 'Sunday': price = 16; break;
            }
            break;
        case 'Regular':
            switch (day) {
                case 'Friday': price = 15; break;
                case 'Saturday': price = 20; break;
                case 'Sunday': price = 22.5; break;
            }
            break;
    }

    let totalPrice = peopleCount * price;

    if (groupType === 'Students' && peopleCount >= 30) {
        totalPrice *= 0.85;
    } else  if (groupType === 'Business' && peopleCount >= 100) {
        totalPrice -= 10 * price;
    } else  if (groupType === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30, "Students", "Sunday");