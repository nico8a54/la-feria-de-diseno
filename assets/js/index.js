
const cards = document.getElementById("cards");

cards.addEventListener('click', (e) => {
  if (e.target && e.target.tagName == 'SPAN' ) {
    e.target.parentElement.parentElement.classList.toggle('expand');
  } else {
    
  }
  // console.log(e.target.parentElement);
});

var iframe1 = document.getElementById('iframe-1');
var player1 = new Vimeo.Player(iframe1);
var iframe2 = document.getElementById('iframe-2');
var player2 = new Vimeo.Player(iframe2);
var iframe3 = document.getElementById('iframe-3');
var player3 = new Vimeo.Player(iframe3);

player1.on('play', () => {
    console.log("Video 1 cargado!");
    // spinnerLanding.style.opacity = 0;
    // setTimeout(()=>{
    //     spinnerLanding.style.display = "none";
    // }, 1000);
});

player2.on('play', () => {
  console.log("Video 2 cargado!");
  // spinnerLanding.style.opacity = 0;
  // setTimeout(()=>{
  //     spinnerLanding.style.display = "none";
  // }, 1000);
});

player3.on('play', () => {
  console.log("Video 3 cargado!");
  // spinnerLanding.style.opacity = 0;
  // setTimeout(()=>{
  //     spinnerLanding.style.display = "none";
  // }, 1000);
});