function solve(input) {
    let phonebook = {};
    for (const el of input) {
        let [name, phone] = el.split(' ');
        phonebook[name] =  phone;
    }

    for (const key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`)
    }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);