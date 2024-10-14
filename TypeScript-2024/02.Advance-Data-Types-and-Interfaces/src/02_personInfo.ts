function personInfo(firstName: string, lastName: string, age: string) {
    const person: object = {}
    person['firstName'] = firstName;
    person['lastName'] = lastName;
    person['age'] = age

    for (const key in person) {
        console.log(`${key}: ${person[key]}`);        
    }
}

personInfo("Peter", "Pan", "20");