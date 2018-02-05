function trinagleArea(a, b, c) {
    let halfPerimer = hp = (a + b + c) / 2;
    let area = Math.sqrt(hp * (hp - a) * (hp - b) * (hp - c));
    return area;
}

console.log(trinagleArea(2, 3.5, 4));