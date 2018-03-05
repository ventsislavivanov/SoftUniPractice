function smallestTwoNumbers(arr) {
    console.log(
        arr.sort((a, b) => a - b)
            .slice(0, Math.min(2, arr.length))
            .join(' ')
    );
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);