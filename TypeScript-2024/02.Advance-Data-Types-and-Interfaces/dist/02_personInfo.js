function personInfo(firstName, lastName, age) {
    const person = {};
    person['firstName'] = firstName;
    person['lastName'] = lastName;
    person['age'] = age;
    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}
personInfo("Peter", "Pan", "20");
//# sourceMappingURL=02_personInfo.js.map