function solve(input) {
    let figure = input[0];
    let s = 0;

    if (figure == 'square') {
        let side = Number(input[1]);
        s = side * side;        
    } else if(figure == 'rectangle') {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);

        s = sideA * sideB
    } else if(figure == 'circle') {
        let radius = Number(input[1])
        s = Math.PI * radius * radius;
    } else if(figure == 'triangle') {
        let side = Number(input[1]);
        let height = Number(input[2]);

        s = side * height /2
    }

    console.log(s.toFixed(3));
}


solve(["square",
    "6"])
    