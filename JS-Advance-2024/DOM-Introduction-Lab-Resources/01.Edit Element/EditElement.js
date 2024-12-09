function editElement(el, match, replacer) {
    const content = el.textContent;
    el.textContent = content.replace(new RegExp(match, 'g'), replacer);
    // el.textContent = content.split(match).join(replacer);
}