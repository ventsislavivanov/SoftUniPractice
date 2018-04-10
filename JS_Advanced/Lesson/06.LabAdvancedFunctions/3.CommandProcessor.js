function solve(commands) {
    let processor = (function() {
        let text = '';
        return function processor(commandString) {
            let commandToken = commandString.split(' ');

            switch (commandToken[0]) {
                case 'append':
                    text += commandToken[1];
                    break;
                case 'removeStart':
                    text = text.slice(Number(commandToken[1]));
                    break;
                case 'removeEnd':
                    text = text.slice(0, text.length - Number(commandToken[1]));
                    break;
                case 'print':
                    console.log(text);
                    break;

            }
        }
    })();
    
    for (let command of commands){
        processor(command);
    }
}
solve(['append hello', 'append again', 'removeStart 3', 'removeEnd 4', 'print']);