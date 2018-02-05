function volumeAndAreaCone(r, h) {
    let s = Math.sqrt(r ** 2 + h ** 2);
    let volume = Math.PI * r * r * h / 3;
    let area = Math.PI * r * (r + s);
    
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

volumeAndAreaCone(3, 5)