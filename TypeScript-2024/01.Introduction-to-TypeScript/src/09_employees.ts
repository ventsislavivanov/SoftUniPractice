function employess(input: string[]) {
    const employess: object = {};
    for (const employe of input) {
        employess[employe] = employe.length;        
    }

    for (const key in employess) {
        console.log(`Name: ${key} -- Personal Number: ${employess[key]}`);        
    }    
}

employess([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
);
console.log('------------');
employess([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
);