function solve(bandName, albumName, songName) {
    const duration = (albumName.length * bandName.length) * songName.length / 2;
    const rotations =  Math.ceil((duration / 2.5));
    console.log(`The plate was rotated ${rotations} times.`)
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');