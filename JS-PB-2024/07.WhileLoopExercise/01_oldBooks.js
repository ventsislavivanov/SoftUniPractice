function solve(input) {
    let favoritBook = input.shift();
    let lib = input;
    let counter = 0;
    let checkedBook = lib[counter];
    
    let bookIsFound = false;

    while(checkedBook !== "No More Books") {
        if(checkedBook === favoritBook) {
            bookIsFound = true;
            break;        
        }

        counter++;
        checkedBook = lib[counter];
    }

    if (bookIsFound) {
        console.log(`You checked ${counter} books and found it.`);
    } else {        
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`)
    }
}

solve(["Troy",
    "Stronger",
    "Life Style",
    "Troy"])
    
    
    
    
    