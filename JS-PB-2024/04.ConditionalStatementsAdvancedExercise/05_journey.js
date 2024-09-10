function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift();

    let destination = '';
    let typeHoliday = '';
    let costMoney = 0;
    let costPersent = 0;


    if(budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            costPersent = 0.3;
        } else if(season === 'winter') {
            costPersent = 0.7;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season === 'summer') {
            costPersent =  0.4;
        } else if(season === 'winter') {
            costPersent =  0.8;
        }
    } else if(budget > 1000) {
        destination = 'Europe';
        costPersent =  0.9;
    }

    costMoney = (budget * costPersent).toFixed(2);
    
    if (season === 'summer' && destination !== 'Europe') {
        typeHoliday = 'Camp';
    } else {
        typeHoliday = 'Hotel';
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeHoliday} - ${costMoney}`);
}

solve(["678.53", "winter"])