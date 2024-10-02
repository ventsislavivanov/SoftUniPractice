function matchFullName(text) {
    const pattern = /\b[A-Z][a-z]+ \b[A-Z][a-z]+/g;
    const matched = text.match(pattern);

    console.log(matched.join(' '));
}

matchDates("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");