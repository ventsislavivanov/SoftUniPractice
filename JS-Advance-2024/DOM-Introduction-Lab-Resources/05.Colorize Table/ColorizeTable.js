function colorize() {
    const rows = [...document.getElementsByTagName('tr')];
    rows.forEach((row, index) => {
        if (index % 2 !== 0) {
            row.style.backgroundColor = 'teal'
        }
    })
}