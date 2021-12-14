const bankructwo = new Date("December 28, 2021 20:00:00").getTime();

let timer = setInterval(function() {
  const today = new Date().getTime();

  let diff = bankructwo - today;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  days = Math.max(days, 0);
  hours = Math.max(hours, 0);
  minutes = Math.max(minutes, 0);
  seconds = Math.max(seconds, 0);

  if (days + hours + minutes + seconds == 0) {
    atBreak();
    clearInterval(timer);
  }

  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

}, 1000);

function atBreak() {
  document.getElementById("jazda").style.display="block";
  document.getElementById("main").style.display="none";
  
  var audio = new Audio('pooh.mp3');
  
  audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
  
  document.body.appendChild(audio);
  
  document.body.addEventListener("mousemove", function () {
      audio.play()
  })
  
  audio.play();
}
