function solve(input) {
    let hour = Number(input.shift())
    let day = input.shift();

    let isHoursOpen = false;
    let isDayOpen = false;

    if (hour >= 10 &&  hour < 18) {
        isHoursOpen = true;
    }

    switch(day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
        case 'Saturday':
            isDayOpen = true;
            break;
    }
    
    if(isHoursOpen && isDayOpen) {
       console.log('open'); 
    } else {
        console.log('closed');
    }
}

solve(["18",
    "Monday"])

