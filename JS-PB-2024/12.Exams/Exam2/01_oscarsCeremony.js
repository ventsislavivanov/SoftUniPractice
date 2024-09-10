function solve(input) {
    let rent = +input.shift();
    let s = rent - rent * 0.3;
    let k = s - s * 0.15;
    let music = k / 2;

    console.log((rent + s + k + music).toFixed(2));
}

solve(['3500']);
