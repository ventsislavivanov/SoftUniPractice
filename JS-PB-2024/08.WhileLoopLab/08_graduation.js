function solve(input) {
    let name = input[0];
    
    let index = 0;
    let currentClass =  index + 1;
    let sum = 0;

    while(currentClass <= 12) {        
        index++;
        let grade = Number(input[index]);
        if(grade < 4) {
            if(grade === 2) {
                console.log(`${name} has been excluded at ${currentClass} grade`);
                break;
            }

            continue;
        }

        sum += grade;
        currentClass++;
    }

    if(index === 12) {
        let average = (sum / 12).toFixed(2);
        console.log(`${name} graduated. Average grade: ${average}`);
    } 
}

solve(["Gosho", 
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
    
    
    