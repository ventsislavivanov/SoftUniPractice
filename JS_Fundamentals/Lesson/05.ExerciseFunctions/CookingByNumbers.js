function cookingByNumbers(arr) {
    let number = arr[0];
    
    let chop =  (num) => num / 2;
    let dice =  (num) => Math.sqrt(num);
    let spice =  (num) => ++num;
    let bake =  (num) => num * 3;
    let fillet =  (num) => num -= num * 0.2;

    for (let i = 1; i < arr.length; i++) {
        switch (arr[i]) {
            case 'chop': number = chop(number);
                console.log(number);
                break;
            case 'dice': number = dice(number);
                console.log(number);
                break;
            case 'spice': number = spice(number);
                console.log(number);
                break;
            case 'bake': number = bake(number);
                console.log(number);
                break;
            case 'fillet': number = fillet(number);
                console.log(number);
                break;
        }
    }
}

let arr = [32, 'chop', 'chop', 'chop', 'chop', 'chop'];
let arr1 = [9, 'dice', 'spice', 'chop', 'bake', 'fillet']
cookingByNumbers(arr1);