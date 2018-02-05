function fruitOrVegetable(name) {
    switch (name) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            console.log('fruit')
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley':
            console.log('vegetable')
            break;   
            tomato, cucumber, pepper, onion, garlic, parsley 
        default:
            console.log('unknown')
            break;
    }
}

fruitOrVegetable('banana');