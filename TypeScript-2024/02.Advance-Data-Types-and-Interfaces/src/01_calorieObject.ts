function calorie(input: string[]) {
    const object: Object = {}

    while(input.length > 0) {
        const key = input.shift();
        object[key] = Number(input.shift());
    }

    console.log(object);    
}

calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
