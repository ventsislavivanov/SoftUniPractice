function solve(input) {
    let books = input.shift().split("&");
    let line = input.shift();

    while (line !== "Done") {
        let [command, book1, book2] = line.split(" | ");
        if (command === 'Add Book') {
            if (! books.includes(book1)) {
                books.unshift(book1);
            }
        } else if (command === 'Take Book') {
            if (books.includes(book1)) {
                const index = books.indexOf(book1);
                books.splice(index, 1)
            }
        } else if (command === 'Swap Books') {
            if (books.includes(book1) && books.includes(book2)) {
                const idx1 = books.indexOf(book1);
                const idx2 = books.indexOf(book2);

                books.splice(idx1, 1, book2);
                books.splice(idx2, 1, book1);
            }
        } else if (command === 'Insert Book') {
            if (! books.includes(book1)) {
                books.push(book1);
            }
        } else if (command === 'Check Book') {
            const index = book1;
            if (index >= 0 && index < books.length) {
                console.log(books[index]);
            }
        }

        line = input.shift();
    }

    console.log(books.join((', ')));
}

// solve(["Don Quixote&The Great Gatsby&Moby Dick",
//     "Add Book | Ulysses",
//     "Take Book | Don Quixote",
//     "Insert Book | Alice's Adventures in Wonderland",
//     "Done"]);
// Ulysses, The Great Gatsby, Moby Dick, Alice's Adventures in Wonderland

// solve(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
//     "Add Book | Catch-22",
//     "Swap Books | Anna Karenina | Catch-22",
//     "Take Book | David Copperfield",
//     "Done"]);
// //Catch-22, Heart of Darkness, Anna Karenina, The Stranger
//
solve(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"]);
//Ulysses
// War and Peace, Hamlet, Ulysses, Madame Bovary