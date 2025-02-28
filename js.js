var num1 = Math.round(Math.random() * 20);
var num2 = Math.round(Math.random() * 20);
var num3 = Math.round(Math.random() * 20);
var beststat;
var beststat_name;
var nthletter;
var time;
var time_hr;
var time_min;
document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;
document.getElementById("num3").innerHTML = num3;

if (num1 > num2) {
    if (num1 > num3) {
        beststat = num1;
        beststat_name = "catching";
    }
    else if (num3 > num1) {
        beststat = num3;
        beststat_name = "blocking";
    }
    else if (num3 == num1) {
        beststat = num1;
        beststat_name = "both catching and blocking";
    }
}
else if (num2 > num1) {
    if (num2 < num3) {
        beststat = num3;
        beststat_name = "blocking";
    }
    else if (num2 > num3) {
        beststat = num2;
        beststat_name = "passing";
    }
    else if (num2 == num3) {
        beststat = num3;
        beststat_name = "both passing and blocking";
    }
}
else if (num1 == num2) {
    if (num2 > num3) {
        beststat = num2;
        beststat_name = "both catching and passing";
    }
    else if (num2 < num3) {
        beststat = num3;
        beststat_name = "blocking";
    }
    else if (num2 == num3) {
        beststat = num3;
        beststat_name = "catching, passing, and blocking";
    }
}
document.getElementById("beststat").innerHTML = "The player specializes in " + beststat_name + ". (" + beststat + ")"

nthletter = "AABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(num1);

document.getElementById("nthletter").innerHTML = "The player's first name started with the letter " + nthletter + "."

time = num2*num3;
time_hr = parseInt(time*(1/60));
time_min = parseInt(((time*(1/60)) - time_hr)*(60));

document.getElementById("time").innerHTML = "The time the player trained every day was " + time + " minutes. (" + time_hr + "hr(s), " + time_min + "min(s))";