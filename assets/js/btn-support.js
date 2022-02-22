const   btnMenu = document.querySelector('#menu'),
        menuContent = document.querySelector('.menu-content');
        menuItems = document.getElementsByClassName('menu-item');
        menuBlur = document.getElementById("menuBlur");
        menuCircles = document.getElementsByClassName("circle");

btnMenu.addEventListener('click', () =>{
    menuContent.classList.toggle('menu-active');
});

menuItems.item(1).addEventListener('click', () => {
  menuContent.classList.toggle('menu-active');
});
menuItems.item(2).addEventListener('click', () => {
  menuContent.classList.toggle('menu-active');
});
menuItems.item(3).addEventListener('click', () => {
  menuContent.classList.toggle('menu-active');
});

// Boton WhatsApp INICIO

let Inicio_contenido = document.querySelector(".btn-support-ref");
let Inicio_contenido_Style = window.getComputedStyle(Inicio_contenido);

// Boton WhatsApp FIN

document.body.addEventListener('scroll', () => {
  let coords = Inicio_contenido.getBoundingClientRect();
  // console.log(coords);
  // let ContenidoRight = Inicio_contenido_Style.getPropertyValue('margin-right');
  // let coordscontenido = Inicio_contenido.getBoundingClientRect();

  if (coords.top < 0) {
    btnMenu.style.position = "fixed";
    menuItems.item(1).style.position = "fixed";
    menuItems.item(2).style.position = "fixed";
    menuItems.item(3).style.position = "fixed";
    menuCircles.item(0).style.position = "fixed";
    menuCircles.item(1).style.position = "fixed";
    menuCircles.item(2).style.position = "fixed";
    menuBlur.style.position = "fixed";
    document.getElementById("header").style.mixBlendMode = "difference";
    document.getElementById("bm-container").style.mixBlendMode = "difference";
  }
  else {
    btnMenu.style.position = "absolute";
    menuItems.item(1).style.position = "absolute";
    menuItems.item(2).style.position = "absolute";
    menuItems.item(3).style.position = "absolute";
    menuCircles.item(0).style.position = "absolute";
    menuCircles.item(1).style.position = "absolute";
    menuCircles.item(2).style.position = "absolute";
    menuBlur.style.position = "absolute";
    document.getElementById("header").style.mixBlendMode = "normal";
    document.getElementById("bm-container").style.mixBlendMode = "normal";
  }
});
// Menu para moviles, scroll FIN