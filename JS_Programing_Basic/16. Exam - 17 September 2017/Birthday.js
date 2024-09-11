function birthday([arg1, arg2, arg3, arg4]) {
    let widthInSm = Number(arg1)
    let lengthInSm = Number(arg2);
    let heightInSm = Number(arg3);
    let persent = parseFloat(arg4);

    let volumeAquariumInSm = widthInSm * lengthInSm * heightInSm;
    let volumeAquariumInL = (volumeAquariumInSm * 0.001).toFixed(3);
    let percentReal = persent * 0.01;

    let realL = volumeAquariumInL * (1 - percentReal);
    console.log(realL.toFixed(3));
}

birthday(['105', '77', '89' , '18.5']);