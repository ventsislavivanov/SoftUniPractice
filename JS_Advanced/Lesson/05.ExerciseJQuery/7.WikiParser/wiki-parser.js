/// <reference path="../../../../typings/globals/jquery/index.d.ts" />
'use strict'
function wikiParser(selector) {
    let element = $(selector);

    let h3Pattern = /===([^'=\[]*?)===/g;
    let h2Pattern = /==([^'=\[]*?)==/g;
    let h1Pattern = /=([^'=\[]*?)=/g
    let bPattern  = /'''([^'=\[]*?)'''/g;
    let iPattern  = /''([^'=\[]*?)''/g;
    let aPattern  = /\[\[([^'=\[\|]*?)]]/g;
    let anPattern = /(\[\[([^'=\[]*?)\|([^'=\[]*)]])/g;
    let paragraph = element.text();
    paragraph = paragraph
        .replace(h3Pattern, '<h3>$1</h3>')
        .replace(h2Pattern, '<h2>$1</h2>')
        .replace(h1Pattern, '<h1>$1</h1>')
        .replace(bPattern, '<b>$1</b>')
        .replace(iPattern, '<i>$1</i>')
        .replace(aPattern, '<a href="/wiki/$1">$1</a>')
        .replace(anPattern, '<a href="/wiki/$2">$3</a>');
    element.html(paragraph);
}