function solve(input) {
    function checkIsPalindrome(num) {
        const numString = num.toString();
        let reversedNumString = '';

        for (let i = numString.length - 1; i >= 0 ; i--) {
            let curr = numString[i]
            reversedNumString += curr;
        }

        return numString === reversedNumString;
    }

    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        console.log(checkIsPalindrome(current))
    }
}

// solve([123,323,421,121]);
solve([32,2,232,1010]);