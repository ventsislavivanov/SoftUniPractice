function solve(input) {
    let nM = Number(input.shift());
    let nZ = Number(input.shift());
    let nR = Number(input.shift());
    let nK = Number(input.shift());
    let pGift = Number(input.shift());

    let m = 3.25;
    let z = 4;
    let r = 3.5;
    let k = 8;

    let ta = m * nM + z * nZ + r * nR + k * nK;
    ta = ta - ta * 0.05;

    if(ta >= pGift) {
        console.log(`She is left with ${Math.floor(ta - pGift)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(pGift- ta)} leva.`)
    }
}

solve([])