function solve(input) {
    let mounth = input.shift();
    let overnightStays = Number(input.shift());

    let studioPerNigth, apetmentPerNight;
    if(mounth === "May" || mounth === 'October') {
        studioPerNigth = 50;
        apetmentPerNight = 65;
    } else if(mounth === 'June' || mounth === 'September') {
        studioPerNigth = 75.2;
        apetmentPerNight = 68.7;
    } else if(mounth === 'July' || mounth === 'August') {
        studioPerNigth = 76;
        apetmentPerNight = 77;
    }

    let studioTotal = overnightStays * studioPerNigth;
    let apertmentTotal = overnightStays * apetmentPerNight
    if(overnightStays > 14) {
        apertmentTotal = apertmentTotal - apertmentTotal * 0.1;
        if(mounth === 'June' || mounth === 'September') {
            studioTotal = studioTotal - studioTotal * 0.2;
        } else if(mounth === "May" || mounth === 'October') {
            studioTotal = studioTotal - studioTotal * 0.3;
        }
    } else if (overnightStays > 7 && (mounth === "May" || mounth === 'October')){
        studioTotal = studioTotal - studioTotal * 0.05;
    }


    console.log(`Apartment: ${apertmentTotal.toFixed(2)} lv.`);
    console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
}

solve(["August",
    "20"])
    
    
    