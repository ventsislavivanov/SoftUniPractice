function dayOfWeek(day: string){
    enum days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }

    console.log(days[day] ? days[day] : 'error');
}

dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');


