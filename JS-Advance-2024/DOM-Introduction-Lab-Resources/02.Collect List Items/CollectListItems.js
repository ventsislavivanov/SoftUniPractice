function extractText() {
    const list = document.getElementById('items');
    const items = Array.from(list.children);
    const textarea = document.getElementById('result');

    let result = [];
    items.forEach(item => result.push(item.textContent));
    textarea.value = result.join('\n');
}