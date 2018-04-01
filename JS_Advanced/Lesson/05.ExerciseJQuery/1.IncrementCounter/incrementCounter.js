/// <reference path="../../../../typings/globals/jquery/index.d.ts" />


function increment(string) {
    let selector = $(string);
    selector
        .append($('<textarea>').addClass('counter').attr('disabled', true).val(0))
        .append($('<button>').addClass('btn').attr('id', 'incrementBtn').text('Increment').click(increment))
        .append($('<button>').addClass('btn').attr('id', 'addBtn').text('Add').click(add))
        .append($('<ul>').addClass('results'))
    function increment() {
        $('.counter').val(Number($('.counter').val()) + 1);
    }
    function add() {
        $('.results').append($('<li>').text($('.counter').val()));
    }
}
