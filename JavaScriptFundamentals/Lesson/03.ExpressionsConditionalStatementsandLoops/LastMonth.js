function lastMonth(date) {
    let days= date[0];
    let month = date[1];
    let year = date[2];

    let newDate = new Date(year, month - 1, 0);
    let daysCount = newDate.getDate();

    return daysCount;
}

let arr = [13, 12, 2004];
let output = lastMonth(arr);
console.log(output);
