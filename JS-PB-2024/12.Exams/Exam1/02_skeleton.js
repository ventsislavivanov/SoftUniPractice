function solve(input) {
    let minutesControl = +input.shift();
    let secondsControl = +input.shift();
    let lenghtTunelInMeters = + input.shift();
    let secondsPer100meters = +input.shift();

    let controlInSecond = minutesControl * 60 + secondsControl;
    let delayTimes = lenghtTunelInMeters / 120
    let totalDelay = delayTimes * 2.5;

    let martinTime = (lenghtTunelInMeters / 100) * secondsPer100meters - totalDelay;
    let neededSeconds = (martinTime - controlInSecond).toFixed(3);

    if (martinTime <= controlInSecond) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${martinTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${neededSeconds} second slower.`)
    }
}

solve(['2', '12', '1200', '10']);
solve(['1', '20', '1546', '12']);