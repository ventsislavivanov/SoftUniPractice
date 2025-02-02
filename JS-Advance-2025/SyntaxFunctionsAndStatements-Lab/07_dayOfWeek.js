function dayOfWeek(day) {
    let days;
    (function (days) {
        days[days["Monday"] = 1] = "Monday";
        days[days["Tuesday"] = 2] = "Tuesday";
        days[days["Wednesday"] = 3] = "Wednesday";
        days[days["Thursday"] = 4] = "Thursday";
        days[days["Friday"] = 5] = "Friday";
        days[days["Saturday"] = 6] = "Saturday";
        days[days["Sunday"] = 7] = "Sunday";
    })(days || (days = {}));
    console.log(days[day] ? days[day] : 'error');
}