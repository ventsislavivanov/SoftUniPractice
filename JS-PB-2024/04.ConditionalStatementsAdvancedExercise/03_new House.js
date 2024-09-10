function solve(input) {
    let typeFlours = input.shift();
    let countFlours = Number(input.shift());
    let homeBudget = Number(input.shift());

    let rose = 5;
    let dahlia = 3.8;
    let tulip = 2.8;
    let narcissus = 3;
    let gladiolus = 2.5;

    let sumFlours = 0;
    
    if(typeFlours === 'Roses') {
        sumFlours = countFlours * rose;
        if(countFlours > 80) {
            sumFlours = sumFlours - sumFlours * 0.1;
        }
    } else if(typeFlours === 'Dahlias') {
        sumFlours = countFlours * dahlia;
        if(countFlours > 90) {
            sumFlours = sumFlours - sumFlours * 0.15;
        }
    } else if(typeFlours === 'Tulips') {
        sumFlours = countFlours * tulip;
        if(countFlours > 80) {
            sumFlours = sumFlours - sumFlours * 0.15;
        }
    } else if(typeFlours === 'Narcissus') {
        sumFlours = countFlours * narcissus;
        if(countFlours < 120) {
            sumFlours = sumFlours + sumFlours * 0.15;
        }
    } else if(typeFlours === 'Gladiolus') {
        sumFlours = countFlours * gladiolus;
        if(countFlours < 80) {
            sumFlours = sumFlours + sumFlours * 0.2;
        }
    }

    let leftMoney = (homeBudget - sumFlours).toFixed(2);
    let neededMoney = (sumFlours - homeBudget).toFixed(2);

    if(homeBudget >= sumFlours) {
        console.log(`Hey, you have a great garden with ${countFlours} ${typeFlours} and ${leftMoney} leva left.`);
    } else {
        console.log(`Not enough money, you need ${neededMoney} leva more.`);
    }
}

solve(["Narcissus",
    "119",
    "360"])
    
    
    