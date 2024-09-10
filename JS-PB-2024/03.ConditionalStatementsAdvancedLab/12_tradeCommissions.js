function solve(input) {
    let town = input.shift();
    let seles = Number(input.shift());
    let hasError = false;
    let commision = 0;

    switch(town) {
        case 'Sofia':
            if(seles >= 0 && seles <= 500) {
                commision = 0.05;
            } else if(seles > 500 && seles <= 1000) {
                commision = 0.07;
            }  else if(seles > 1000 && seles <= 10000) {
                commision = 0.08;
            }  else if(seles > 10000) {
                commision = 0.12;
            } else {
                hasError = true;
            }
            break;     
        case 'Varna':
            if(seles >= 0 && seles <= 500) {
                commision = 0.045;
            } else if(seles > 500 && seles <= 1000) {
                commision = 0.075;
            }  else if(seles > 1000 && seles <= 10000) {
                commision = 0.1;
            }  else if(seles > 10000) {
                commision = 0.13;
            } else {
                hasError = true;
            }
            break;  
        case 'Plovdiv':
            if(seles >= 0 && seles <= 500) {
                commision = 0.055;
            } else if(seles > 500 && seles <= 1000) {
                commision = 0.08;
            }  else if(seles > 1000 && seles <= 10000) {
                commision = 0.12;
            }  else if(seles > 10000) {
                commision = 0.145;
            } else {
                hasError = true;
            }
            break;
        default:
            hasError = true;
            break;
    }
    let tax = seles * commision;

    if(! hasError) {
        console.log(tax.toFixed(2));
    } else {
        console.log('error')
    }

}

solve(["Plovdiv",
    "8543.86"])
    
    
    
    
    