function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    days = parseInt(timer / 60 / 60 / 24);
    hours = parseInt((timer/ 60/ 60) % 24, 10);
    minutes = parseInt((timer / 60) % 60, 10);
    seconds = parseInt(timer % 60, 10);

    dayas = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = days + " days, " + hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var t1 = Date.now();
  var t2 = new Date(2016, 10, 9, 23, 59);
  var dif = t2.getTime() - t1;
  dif = dif > 0 ? dif : 0;

  var Seconds_from_T1_to_T2 = dif / 1000;
  var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

  var display = document.getElementById('registrationTime');
  startTimer(Seconds_Between_Dates, display);
};


