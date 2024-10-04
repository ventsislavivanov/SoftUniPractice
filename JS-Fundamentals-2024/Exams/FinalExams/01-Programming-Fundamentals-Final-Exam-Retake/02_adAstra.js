function solve(input) {
    const str = input.shift();
    const pattern = /([#|])(?<name>[a-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>[\d+]{1,5})\1/gi;
    let items = [];
    let totalCal = 0;

    // const match = str.match(pattern);
    let match = pattern.exec(str);
    while (match) {
        items.push({product: match[2], date: match[3], cal: match[4]});
        totalCal += Number(match[4])
        match = pattern.exec(str);
    }

    console.log(`You have food to last you for: ${Math.floor(totalCal / 2000)} days!`);
    items.forEach(item => console.log(`Item: ${item.product}, Best before: ${item.date}, Nutrition: ${item.cal}`));
}

solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
solve(['Hello|#Invalid food#19/03/20#450|$5*(@']);