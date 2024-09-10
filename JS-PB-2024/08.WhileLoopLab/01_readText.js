function solve(input) {
    let array = input;
    let index = 0;

    while(true) {
        let str = array[index];
        if (str === 'Stop') {
            break;
        }

        console.log(str);
        index++;        
    }
}

solve(["Sofia",
    "Berlin",
    "Moscow",
    "Athens",
    "Madrid",
    "London",
    "Paris",
    "Stop",
    "AfterStop"])
    
    