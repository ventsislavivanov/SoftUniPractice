function solve(input) {
    let days = Number(input.shift());
    let premises = input.shift();
    let rating = input.shift();

    let overnightStays = days - 1;

    let room = 18;
    let apartment = 25;
    let president = 35;

    let spendForHost;
    if(overnightStays > 15){
        if(premises === 'president apartment') {
            spendForHost = president * overnightStays - president * overnightStays * 0.2;
        } else if(premises === 'apartment') {
            spendForHost = apartment * overnightStays - apartment * overnightStays * 0.5;
        } else if(premises === 'room for one person') {
            spendForHost = room * overnightStays;
        }
    } else if(overnightStays >=10 && overnightStays <= 15) {
        if(premises === 'president apartment') {
            spendForHost = president * overnightStays - president * overnightStays * 0.15;
        } else if(premises === 'apartment') {
            spendForHost = apartment * overnightStays - apartment * overnightStays * 0.35;
        } else if(premises === 'room for one person') {
            spendForHost = room * overnightStays;
        }
    } else if (overnightStays < 10) {
        if(premises === 'president apartment') {
            spendForHost = president * overnightStays - president * overnightStays * 0.1;
        } else if(premises === 'apartment') {
            spendForHost = apartment * overnightStays - apartment * overnightStays * 0.3;
        } else if(premises === 'room for one person') {
            spendForHost = room * overnightStays;
        }
    }

    if(rating === 'positive') {
        spendForHost = spendForHost * 1.25
    } else {
        spendForHost = spendForHost * 0.9;
    }

    console.log(spendForHost.toFixed(2));
}

solve(["30",
    "president apartment",
    "negative"])
    
    