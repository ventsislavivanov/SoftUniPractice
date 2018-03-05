function templateFormat(input) {
    function drawingQuestion(question) {
        let xml = '\t<question>\n';
        xml += `\t\t${question}\n`;
        xml += '\t</question>\n';
        return xml;
    }
    function drawingAnswer(answer) {
        let xml = '\t<answer>\n';
        xml += `\t\t${answer}\n`;
        xml += '\t</answer>\n';
        return xml;
    }
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<quiz>\n';
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            xml += drawingQuestion(input[i]);       
        } else {
            xml += drawingAnswer(input[i]);
        }
    }
    xml += '</quiz>\n';
    console.log(xml);
}

let output = ["Dry ice is a frozen form of which gas?", "Carbon Dioxide", "What is the brightest star in the night sky?", "Sirius"]
templateFormat(output);