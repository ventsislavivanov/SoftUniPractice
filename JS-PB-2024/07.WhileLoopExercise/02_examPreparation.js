function solve(input) {
    let nBadGrades = Number(input.shift());

    let indexTask = 0;
    let indexGrade = 1;

    let task = input[0];
    let grade = input[1];

    let badGradesCounter = 0;
    let taskCounter = 0;

    let sum = 0
    
    let isNeedBreak = false;

    while(task !== 'Enough' ) {
        taskCounter++;

        if(grade <= 4) {            
            badGradesCounter++;

            if(nBadGrades === badGradesCounter) {
                isNeedBreak = true;                
                break;
            }
        }

        sum += Number(grade);

        indexTask  += 2;
        indexGrade += 2;

        task  = input[indexTask];
        grade = input[indexGrade];
    }

    if(isNeedBreak) {
        console.log(`You need a break, ${badGradesCounter} poor grades.`);
    } else {
        console.log(`Average score: ${(sum / taskCounter).toFixed(2)}`);
        console.log(`Number of problems: ${taskCounter}`);
        console.log(`Last problem: ${input[indexTask - 2]}`);
    }
}

solve(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

    