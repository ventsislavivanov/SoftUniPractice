function solve(input) {
    let nGroups = Number(input.shift());
    let nPeopleInGroup = input;

    let totalClimbers = 0;
    let musalaClimbers = 0;
    let montBlanClimbers = 0;
    let kilimandjaroClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;

    for (let i = 0; i < nPeopleInGroup.length; i++) {
        let groupClimbers = Number(nPeopleInGroup[i]);
        totalClimbers += groupClimbers;

        if(groupClimbers <= 5) {
            musalaClimbers += groupClimbers;
        } else if(groupClimbers >= 6 && groupClimbers <= 12) {
            montBlanClimbers += groupClimbers;
        } else if(groupClimbers >= 13 && groupClimbers <= 25) {
            kilimandjaroClimbers += groupClimbers;
        } else if(groupClimbers >= 26 && groupClimbers <= 40) {
            k2Climbers += groupClimbers;
        } else if(groupClimbers >= 41) {
            everestClimbers += groupClimbers;
        }
        
    }

    console.log((musalaClimbers / totalClimbers * 100).toFixed(2) + '%');
    console.log((montBlanClimbers / totalClimbers * 100).toFixed(2) + '%');
    console.log((kilimandjaroClimbers / totalClimbers * 100).toFixed(2) + '%');
    console.log((k2Climbers / totalClimbers * 100).toFixed(2) + '%');
    console.log((everestClimbers / totalClimbers * 100).toFixed(2) + '%');
}


solve(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])
    
    