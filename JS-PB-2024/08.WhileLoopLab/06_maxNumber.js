function solve(input) {
    let inputElement = input.shift();
    let array = input;
    let index = 0;
    let max = Number.MIN_SAFE_INTEGER;

    while(inputElement !== "Stop") {
        let num = Number(inputElement)
        if(num > max) {
            max = num
        }

        inputElement = array[index];
        index++;
    }

    console.log(max);
}


solve(["100",
    "99",
    "80",
    "70",
    "Stop"])
    