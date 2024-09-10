function solve(input) {
    let goalStep = 10000;

    let index = 0;
    let inputElement = input[index];
    let totalSteps = 0;

    while(goalStep > totalSteps) {
        if (inputElement === "Going home") {
            totalSteps += Number(input[index + 1]);
            break;
        }

        totalSteps += Number(inputElement);

        index++;
        inputElement = input[index]
    }

    let neededSteps = goalStep - totalSteps;
    let overSteps = totalSteps - goalStep;

    if(goalStep > totalSteps) {
        console.log(`${neededSteps} more steps to reach goal.`);
    } else {
        console.log("Goal reached! Good job!");
        console.log(`${overSteps} steps over the goal!`);
    }
}

solve(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"])
    
    
    
    