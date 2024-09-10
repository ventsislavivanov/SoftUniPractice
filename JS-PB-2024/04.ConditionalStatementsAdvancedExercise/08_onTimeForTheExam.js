function solve(input) {
    let examHours = Number(input.shift());
    let examMinutes = Number(input.shift());
    let arriveHours = Number(input.shift());
    let arriveMinutes = Number(input.shift());

    let examInMinutes = examHours * 60 + examMinutes;
    let arriveInMinutes = arriveHours * 60 + arriveMinutes;

    let diffTime = examInMinutes- arriveInMinutes;
    let diffAbs = Math.abs(diffTime);

    let hours = Math.floor(diffAbs / 60);
    let minutes = diffAbs % 60;
 
    if(diffTime > 30) {
        console.log('Early');
        if (diffAbs >= 60) {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }            
        } else {
            console.log(`${minutes} minutes before the start`); 
        }
    } else if(diffTime >= 0 && diffTime <= 30) {
        console.log('On Time');
        console.log(`${diffAbs} minutes before the start`);
    } else if(diffTime < 0) {
        console.log('Late');
        if (diffAbs >= 60) {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }            
        } else {
            console.log(`${minutes} minutes after the start`);
        }
    }
}

solve(['11',
    '30',
    '12',
    '29'])
    

            
        