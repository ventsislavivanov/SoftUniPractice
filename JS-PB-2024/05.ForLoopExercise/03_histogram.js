function solve(input) {
    let n = Number(input.shift());
    let array = input;

 
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let counter5 = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if(element < 200) {
            counter1++;
        } else if(element >= 200 && element < 400) {
            counter2++;
        } else if(element >= 400 && element < 600) {
            counter3++;
        } else if(element >= 600 && element < 800) {
            counter4++;
        } else if(element >= 800) {
            counter5++;
        }
    }

    console.log(`${(counter1 / n * 100).toFixed(2)}%`);
    console.log(`${(counter2 / n * 100).toFixed(2)}%`);
    console.log(`${(counter3 / n * 100).toFixed(2)}%`);
    console.log(`${(counter4 / n * 100).toFixed(2)}%`);
    console.log(`${(counter5 / n * 100).toFixed(2)}%`);    
}

solve(["14",
    "53",
    "7",
    "56",
    "180",
    "450",
    "920",
    "12",
    "7",
    "150",
    "250",
    "680",
    "2",
    "600",
    "200"])
    
    