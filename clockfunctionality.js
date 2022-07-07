var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

var hourCount = 0;
var minuteCount = 0;
var secondCount = 0;
var tick = 'rotate(' + hourCount + 'deg)';



function clock() {
    var date = new Date();
    var hours = date.getHours();
    hours > 12 ? hours = hours - 12 : hours = hours;
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hourCount = (hours * 60 * 60 + (minutes * 60) + seconds) / 120;
    minuteCount = (minutes * 60 + seconds) / 10;
    secondCount = (seconds) * 6;

    var hourStart = 'rotate(' + hourCount + 'deg)';
    var minuteStart = 'rotate(' + minuteCount + 'deg)';
    var secondStart = 'rotate(' + secondCount + 'deg)';
    hour.style.transform = hourStart;
    minute.style.transform = minuteStart;
    second.style.transform = secondStart;
    setInterval(clock, 1000);
}
clock();


