
const cards = document.getElementById("cards");

cards.addEventListener('click', (e) => {
  if (e.target && e.target.tagName == 'SPAN' ) {
    e.target.parentElement.parentElement.classList.toggle('expand');
  } else {
    
  }
  // console.log(e.target.parentElement);
});