function wireNet([arg1, arg2, arg3, arg4, arg5]) {
    let widthInM = Number(arg1);
    let lengthInM = Number(arg2);
    let heightInM = Number(arg3);
    let priceOnOneLenearM = parseFloat(arg4);
    let weightOnSquareM = parseFloat(arg5);

    let lengthOnNet = 2 * widthInM + 2 * lengthInM;
    let priceOnNet = lengthOnNet * priceOnOneLenearM;
    let areaNet = lengthOnNet * heightInM;
    let weightOnNet = areaNet * weightOnSquareM;
    console.log(lengthOnNet);
    console.log(priceOnNet.toFixed(2));
    console.log(weightOnNet.toFixed(3));
}

wireNet(['10', '50', '1.5', '2.10', '0.95']);