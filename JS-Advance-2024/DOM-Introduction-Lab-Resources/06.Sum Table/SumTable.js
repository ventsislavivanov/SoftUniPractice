function sumTable() {
    const rows = Array.from(document.getElementsByTagName('tr'));
    const sumTd = document.getElementById('sum');

    let total = 0;
    for (let i = 1; i < rows.length - 1; i++) {
        const cols = rows[i].children;
        const cost = cols[cols.length - 1].textContent
        total += Number(cost);
    }

    sumTd.textContent = total.toString();
}