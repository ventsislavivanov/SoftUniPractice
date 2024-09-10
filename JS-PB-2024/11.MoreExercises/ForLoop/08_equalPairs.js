// function solve(input) {
//     let n = Number(input.shift());
//     let index = 0;
//     let sum = 0;
//     let min = Number.MAX_SAFE_INTEGER;
//     let max = Number.MIN_SAFE_INTEGER;
//
//     for (let i = 0; i < n; i++) {
//         let num1 = Number(input[index++]);
//         let num2 = Number(input[index++]);
//         sum = num1 + num2;
//
//         if (min > sum) {
//             min = sum
//         }
//
//         if (max < sum) {
//             max = sum;
//         }
//     }
//
//     if (min === sum) {
//         console.log(`Yes, value=${min}`);
//     } else {
//         console.log(`No, maxdiff=${Math.abs(max - sum)}`);
//     }
// }

// solve(['3', '1', '2', '0', '3', '4', '-1']);                //1
// solve(['2', '1', '2', '2', '2']);                           //2
solve(['4', '1', '1', '3', '1', '2', '2', '0', '0']);       //3
// solve(['1', '5', '5']);                                     //4
// solve(['2', '-1', '0', '0', '-1']);                         //5
// solve(['2', '-1', '2', '0', '-1']);                         //6



function solve(input) {
    // Дадени са 2*n-на брой числа.
    const numberOfPairs = Number(input[0]) * 2;
    let firstNum = 0;
    let secondNum = 0;
    let thirdNum = 0;
    let fourthNum = 0;

    // двойка 1
    let sum = 0;
    // двойка 2
    let sum2 = 0;
    // разлика между две последователни двойки
    let diff = 0;
    // максималната разлика между две последователни двойки
    let maxDiff = 0;
    // всички двойки имат еднаква стойност,
    let equalSum = true;

    if (numberOfPairs === 2) {
        return console.log(`Yes, value=${Number(input[1]) + Number(input[2])}`);
    }

    for (let i = 1; i <= numberOfPairs; i += 2) {
        firstNum = Number(input[i]);
        secondNum = Number(input[i + 1]);

        if (i === (numberOfPairs - 1)) {
            sum = sum2;
            sum2 = firstNum + secondNum;
        } else {
            thirdNum = Number(input[i + 2]);
            fourthNum = Number(input[i + 3]);
            sum = firstNum + secondNum;
            sum2 = thirdNum + fourthNum;
        }

        if (sum === sum2) {
            continue;
        } else {
            diff = Math.abs(sum - sum2);
            if (diff > maxDiff) {
                maxDiff = diff;
            }
            equalSum = false;
        }
    }

    if (equalSum === true) {
        //  Ако всички двойки имат еднаква стойност, отпечатайте "Yes, value={Value}" + стойността.
        console.log(`Yes, value=${firstNum + secondNum}`);
    } else {
        // печата максималната разлика между две последователни двойки
        console.log(`No, maxdiff=${maxDiff}`);
    }
}


