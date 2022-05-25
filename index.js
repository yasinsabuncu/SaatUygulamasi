function getTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var days = now.getDate();
  var months = now.getMonth() + 1;
  var years = now.getFullYear();
  hours < 10
    ? (document.getElementById("hours").innerHTML = "0" + hours)
    : (document.getElementById("hours").innerHTML = hours);
  document.getElementById("minute").innerText = minutes;
  seconds < 10
    ? (document.getElementById("seconds").innerText = "0" + seconds)
    : (document.getElementById("seconds").innerText = seconds);
  document.getElementById("date").innerHTML =
    days + " / " + months + " / " + years;
}

setInterval(function () {
  getTime();
}, 100);
