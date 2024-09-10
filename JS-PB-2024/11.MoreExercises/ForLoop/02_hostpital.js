function solve(input) {
  let period = Number(input.shift());
  let nPatientsArray = input;
  let doctors = 7;

  let treatedPatients = 0;
  let untreatedPatients = 0;

  for (let i = 0; i < period; i++) {
    let dailyPatients = Number(nPatientsArray[i]);
    if ((i + 1) % 3 === 0) {
      if (untreatedPatients > treatedPatients) {
        doctors++;
      }
    }

    let treatedPerDay = 0;
    let untreatedPerDay = 0;
    
    treatedPerDay = doctors;
    if (doctors >= dailyPatients) {
        treatedPerDay = dailyPatients;
    } else {
        untreatedPerDay = dailyPatients - doctors;
    }

    treatedPatients += treatedPerDay;
    untreatedPatients += untreatedPerDay;
  }

  console.log(`Treated patients: ${treatedPatients}.`);
  console.log(`Untreated patients: ${untreatedPatients}.`);
}

solve([
    '6',
    '25',
    '25',
    '25',
    '25',
    '25',
    '2'
    
    
]);

