function tripLenght(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    let x3 = input[4];
    let y3 = input[5];

    let distanceFrom1To2 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    let distanceFrom2To3 = Math.sqrt(Math.pow((x3 - x2), 2) + Math.pow((y3 - y2), 2));
    let distanceFrom1To3 = Math.sqrt(Math.pow((x3 - x1), 2) + Math.pow((y3 - y1), 2));

    if ((distanceFrom1To2 <= distanceFrom1To3) && (distanceFrom1To3 => distanceFrom2To3)) {
        let a = distanceFrom1To2 + distanceFrom2To3;
        console.log('1->2->3: ' + a);
    }else if ((distanceFrom1To2 <= distanceFrom2To3) && (distanceFrom1To3 < distanceFrom2To3)) {
        let b = distanceFrom1To3 + distanceFrom1To2;
        console.log('2->1->3: '+ b);
    }else {
        let c = distanceFrom2To3 + distanceFrom1To3;
        console.log('1->3->2: ' + c);
    }
}

let output = [0, 0, 2, 0, 4, 0];
tripLenght(output);