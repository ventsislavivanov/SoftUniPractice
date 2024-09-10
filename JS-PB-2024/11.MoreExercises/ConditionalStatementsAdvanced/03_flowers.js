function solve(input) {
    let nH = Number(input.shift());
    let nR = Number(input.shift());
    let nL = Number(input.shift());
    let season = input.shift();
    let isHoliday = input.shift();


    let pH = 0;
    let pR = 0;
    let pL = 0;
    if(season === 'Autumn' || season === 'Winter') {
        pH = 3.75;
        pR = 4.5;
        pL = 4.15;
    } else if (season === 'Spring' || season === 'Summer') {
        pH = 2;
        pR = 4.1;
        pL = 2.5;
    }

    if(isHoliday === "Y") {
        pH = pH * 1.15;
        pR = pR * 1.15;
        pL = pL * 1.15;
    }

    let af = nH * pH + nR * pR + nL * pL;

    if(season === 'Spring' && nL > 7) {
        af = af - af * 0.05;
    }
    if(season === 'Winter' && nR >= 10) {
        af = af - af * 0.1;
    }
    if(nH + nR + nL > 20) {
        af = af - af * 0.2;
    }
    
    console.log((af + 2).toFixed(2));
}

solve(['2', '4', '8', 'Spring', 'Y']);
solve(['3', '10', '9', 'Winter', 'N']);