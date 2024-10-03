function solve(arr) {
    function helperF(prop) {
        return (prop / 1000).toFixed(2);
    }

    let food = Number(arr.shift())  * 1000;
    let hay = Number(arr.shift())  * 1000;
    let cover = Number(arr.shift())  * 1000;
    const weight = Number(arr.shift())  * 1000;

    let isEnough = true;

    for (let i = 1; i <= 30 ; i++) {
        food -= 300;
        if (i % 2 === 0) {
            hay -= (food * 0.05);
        }
        if (i % 3 === 0) {
            cover -= weight / 3;
        }

        if (food <= 0 || hay <= 0 || cover <= 0) {
            isEnough = false;
            break;
        }
    }

    if (isEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${helperF(food)}, Hay: ${helperF(hay)}, Cover: ${helperF(cover)}.`);
    } else {
        console.log("Merry must go to the pet store!");
    }
}

// solve(["10", "5", "5.2", "1"]);
// solve(["1", "1.5", "3", "1.5"]);
solve(["9", "5", "5.2", "1"]);
