/// <reference path="../../../../typings/globals/jquery/index.d.ts" />

function timer() {
    let time = 0;
    let interval;
    let isRun = false;

    $('#start-timer').click(startTimer);
    $('#stop-timer').click(stopTimer);
    
    function startTimer() {
        if(!isRun) {
            interval = setInterval(incrementTime, 1000);
            isRun  = true;
        }
    }
    function stopTimer() {
        clearInterval(interval);
        isRun  = false;
    }
    function incrementTime() {
        time++;
        $('#hours').text(('0' + Math.trunc(time / 3600)).slice(-2));
        $('#minutes').text(('0' + Math.trunc(time / 60) % 60).slice(-2));
        $('#seconds').text(('0' + time % 60).slice(-2));
    }
}