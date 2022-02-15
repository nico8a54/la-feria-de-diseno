const spinner = document.getElementById("spinner");

function delaySpinner () {
  spinner.style.display = "none";
}

function showSpinner () {
  spinner.style.opacity = "0";
  setTimeout (delaySpinner, 300);
}

// window.addEventListener("load",showSpinner);

var iframe1 = document.getElementById('iframe-1');
var player1 = new Vimeo.Player(iframe1);

player1.on('play', showSpinner);

window.addEventListener('load', () => {
  setTimeout(showSpinner, 5000);
})