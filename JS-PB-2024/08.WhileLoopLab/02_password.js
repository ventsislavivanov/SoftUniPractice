function solve(input) {
    let username = input.shift();
    let password = input.shift();
    let data = input.shift();
    let index = 0;

    while(data !== password) {
        data = input[index];
        index++;
    }

    console.log(`Welcome ${username}!`);
}

solve(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])
    