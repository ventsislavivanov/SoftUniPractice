function solve(input) {
    let targetHeight = Number(input.shift());
    let startHeight = targetHeight - 30;

    let jumps = 0;
    let failedJumps = 0;

    let index = 0;
    let inputElement = input[index];
    index++;

    while (inputElement <= targetHeight || startHeight !== targetHeight) {
        let currentHeight = Number(inputElement);

        if (currentHeight > startHeight) {
            startHeight += 5;
            failedJumps = 0;
        } else {
            failedJumps++;
        }

        jumps++;

        if (failedJumps === 3) {
            console.log(`Tihomir failed at ${startHeight}cm after ${jumps} jumps.`);
            break;
        }

        inputElement = input[index];
        index++;
    }

    if (inputElement > targetHeight) {
        jumps++;
        console.log(`Tihomir succeeded, he jumped over ${targetHeight}cm after ${jumps} jumps.`);
    }
}

solve(["231", "205", "212", "213", "228", "229", "230", "235"]);
// solve(['250', '225', '224', '225', '228', '231', '235', '234', '235']);
