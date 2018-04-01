/// <reference path="../../../../typings/globals/jquery/index.d.ts" />

function createBook(selector, bookTitle, authourTitle, isbn) {
    let bookGenerator = (function () {
        let id = 1;
        return function (selector, bookTitle, authourTitle, isbn) {
            console.log('object');
            let container = $(selector);
            let bookContainer = ($('<div>').attr('id', `book${id}`).css('border', 'none')).appendTo(container)
            $('<p>').addClass('title').text(`${bookTitle}`).appendTo(bookContainer);
            $('<p>').addClass('author').text(`${authourTitle}`).appendTo(bookContainer);
            $('<p>').addClass('isbn').text(`${isbn}`).appendTo(bookContainer);
            $('<button>').text('Select').appendTo(bookContainer).click(selectBook);
            $('<button>').text('Deselect').appendTo(bookContainer).click(deselectBook);
            function selectBook() {
                $(this).parent().css('border', '2px solid blue')
            }
            function deselectBook() {
                $(this).parent().css('border', '')
            }
            id++;
        }
    }());
    bookGenerator (selector, bookTitle, authourTitle, isbn);
    bookGenerator (selector, bookTitle, authourTitle, isbn);
    bookGenerator (selector, bookTitle, authourTitle, isbn);
}