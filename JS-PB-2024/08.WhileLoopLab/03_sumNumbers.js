function solve(input) {
   let digit = Number(input.shift());
   let array = input;
   let index = 0;
   let sum = 0

   while (sum < digit) {
        sum += Number(array[index]);
        index++;
   }

   console.log(sum);
}

solve(
    ['100','10', '20', '30', '45']
);