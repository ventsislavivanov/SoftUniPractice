function choreography([arg1, arg2, arg3]) {
    let steps = Number(arg1);
    let numberOfDancers = Number(arg2);
    let daysForLerning = Number(arg3);

    let stepsOnDayInPercent = Math.ceil((steps / daysForLerning) / steps * 100);
    let stepsOnEveryDancer = (stepsOnDayInPercent / numberOfDancers).toFixed(2);

    if (stepsOnDayInPercent  <= 13) {
        console.log(`Yes, they will succeed in that goal! ${stepsOnEveryDancer}%.`)
    } else {
        console.log(`No, They will not succeed in that goal! Required ${stepsOnEveryDancer}% steps to be learned per day.`)
    }
}

choreography(['10464', '20', '20'])