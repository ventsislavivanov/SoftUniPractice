function solve(input) {
    let inputElement = input.shift();
    let array = input;
    let index = 0;
    let min = Number.MAX_SAFE_INTEGER;

    while(inputElement !== "Stop") {
        let num = Number(inputElement)
        if(num < min) {
            min = num
        }

        inputElement = array[index];
        index++;
    }

    console.log(min);
}


solve(["100",
    "99",
    "80",
    "70",
    "Stop"])
    