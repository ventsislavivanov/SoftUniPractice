function biggerHalf(input:number[]) {
    const sorted: number[] = input.sort((a, b) => a - b);
    const halfLength: number = sorted.length % 2 === 0? sorted.length / 2 : Math.ceil(sorted.length / 2);
    const result: number[] = sorted.slice(-halfLength);
    
    console.log(result);    
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);