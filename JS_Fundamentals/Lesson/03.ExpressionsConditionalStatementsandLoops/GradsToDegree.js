function gradsToDegree(grads) {
    grads = grads % 400;
    let degree = grads * 0.9;
    degree = degree > 0 ? degree : (360 + degree);
    return degree;
}


let output = gradsToDegree(['850']);
console.log(output);
