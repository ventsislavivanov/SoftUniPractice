function solve(input) {
    let index = 0;
    let inputElement = input[index];

    let isUsedC = false;
    let isUsedO = false;
    let isUsedN = false;

    let finalStr = '';
    let word = '';

    while (inputElement !== "End") {
        if (inputElement === 'a' || inputElement === 'A' || inputElement === 'b' || inputElement === 'B' || inputElement === 'c' || inputElement === 'C' || inputElement === 'd' || inputElement === 'D' || inputElement === 'e' || inputElement === 'E' || inputElement === 'f' || inputElement === 'F' || inputElement === 'g' || inputElement === 'G' || inputElement === 'h' || inputElement === 'H' || inputElement === 'i' || inputElement === 'I' || inputElement === 'j' || inputElement === 'J' || inputElement === 'k' || inputElement === 'K' || inputElement === 'l' || inputElement === 'L' || inputElement === 'm' || inputElement === 'M' || inputElement === 'n' || inputElement === 'N' || inputElement === 'o' || inputElement === 'O' || inputElement === 'p' || inputElement === 'P' || inputElement === 'q' || inputElement === 'Q' || inputElement === 'r' || inputElement === 'R' || inputElement === 's' || inputElement === 'S' || inputElement === 't' || inputElement === 'T' || inputElement === 'u' || inputElement === 'U' || inputElement === 'v' || inputElement === 'V' || inputElement === 'w' || inputElement === 'W' || inputElement === 'x' || inputElement === 'X' || inputElement === 'y' || inputElement === 'Y' || inputElement === 'z' || inputElement === 'Z') {
            
            if (inputElement === 'c' && !isUsedC) {
                isUsedC = true;
            } else if (inputElement === 'o' && !isUsedO) {
                isUsedO = true;
            } else if (inputElement === 'n' && !isUsedN) {
                isUsedN = true
            } else {
                word += inputElement;
            }

            if (isUsedC && isUsedO && isUsedN) {
                finalStr = finalStr + ' ' + word;
                word = '';
                isUsedC = false;
                isUsedO = false;
                isUsedN = false;
            }
        }

        index++;
        inputElement = input[index];
    }

    console.log(finalStr);
}

// solve(['H', 'n', 'e', 'l', 'l', 'o', 'o', 'c', 't', 'c', 'h', 'o', 'e', 'r', 'e', 'n', 'e', 'End']);
// solve(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "/", "A", "D", "End"]);
solve(['o', 'S', '%', 'o', 'l', '^', 'v', 'e', 'c', 'n', '&', 'm', 'e', 'c', 'o', 'n', 'End']);