function solve(str) {
    const filePath = str.split("\\");
    const fileNameExtension = filePath.pop()
    const dotIndex = fileNameExtension.lastIndexOf(".");

    const fileName = fileNameExtension.substring(0, dotIndex);
    const fileExtension = fileNameExtension.substring(dotIndex + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx');
// solve('C:\\Projects\\Data-Structures\\LinkedList.cs')