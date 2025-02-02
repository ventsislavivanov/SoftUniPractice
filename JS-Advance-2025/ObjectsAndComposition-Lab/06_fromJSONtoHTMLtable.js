function solve(string) {
    const data = JSON.parse(string);

    let result = ['<table>'];
    result.push(makeKeysRows(data));
    data.forEach(obj => result.push(makeValuesRows(obj)));
    result.push('</table>');

    console.log(result.join('\n'));

    function makeKeysRows(data) {
        let result = '  <tr>';
        Object.keys(data[0]).forEach(key => {
            result += `<th>${key}</th>`;
        });
        result += '</tr>'

        return result;
    }

    function makeValuesRows(obj) {
        let result =  '  <tr>';
        Object.values(obj).forEach(value => {
            result += `<td>${escapeHtml(value)}</td>`;
        });
        result += '</tr>';

        return result;
    }

    function escapeHtml(unsafe) {
        return unsafe
            .toString()
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#039;');
    }
}

// solve('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]');
console.log('------')
solve('[{"Name":"Pesho","Score":4,"Grade":"8"},{"Name":"Gosho","Score":5,"Grade":"8"},{"Name":"Angel","Score":5.5,"Grade":"10"}]');