function solve(year, month, day) {
    let date = new Date(year, month - 1, day + 1);
    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();

    console.log(`${yyyy}-${mm}-${dd}`);
}

solve(2016, 9, 30);