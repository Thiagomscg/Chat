let clock = document.querySelector("#Relogio #Hora");

function updateClock() {
  let date = new Date();
  let time = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  clock.innerHTML = time;
}

setInterval(updateClock, 1000);