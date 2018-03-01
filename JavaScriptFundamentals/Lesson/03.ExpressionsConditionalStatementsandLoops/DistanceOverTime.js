function distanceOverTime(array) {
    let v1 = array[0];
    let v2 = array[1]
    let ts = array[2];

    let th = ts / 3600;

    let s1 = v1 * th * 1000;
    let s2 = v2 * th * 1000;
    console.log(Math.abs(s2 - s1));
}

distanceOverTime([5, -5, 40]);