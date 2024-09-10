function solve(input)  {
    let openTabs = Number(input.shift());
    let salary = Number(input.shift());
    let tabsNames = input;

    for(let i = 0; i < openTabs; i++) {
        let tabName = tabsNames[i];
        switch (tabName) {
            case 'Facebook':
                salary -= 150;
                break;
            case 'Instagram':
                salary -= 100;
                break;
            case 'Reddit':
                salary -= 50;
                break;
        }
    }

    if (salary <= 0) {
        console.log('You have lost your salary.');
    } else {
        console.log(salary);
    }
}

solve(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])
    
    
    
