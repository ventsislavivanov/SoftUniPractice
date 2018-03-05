function imperalUnits(feet) {
    let inch = Math.trunc(feet / 12);
    let minutes = feet % 12;
    let result = `${inch}'-${minutes}"` 
    return result;
}
console.log(imperalUnits(36));