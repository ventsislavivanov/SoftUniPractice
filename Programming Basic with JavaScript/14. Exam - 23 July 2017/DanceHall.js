function danceHall([arg1, arg2, arg3]) {
    let lenghtOfHall = Number(arg1);
    let widthOfHall = Number(arg2);
    let sideOfWardrobe = Number(arg3);

    let totalAreaOnHall = lenghtOfHall * 100 * widthOfHall * 100;
    let areaOnWardrobe = sideOfWardrobe * 100 * sideOfWardrobe * 100;
    let areaOnBench = totalAreaOnHall / 10;
    let freeAreaOnHall = totalAreaOnHall - areaOnBench - areaOnWardrobe;
    let numbersOfDancers = Math.floor(freeAreaOnHall / (40 + 7000));

    console.log(numbersOfDancers);
}

danceHall([70, 20, 4])