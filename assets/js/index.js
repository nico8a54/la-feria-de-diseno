var state = false;

const line1 = document.querySelector(".bm-line1");
const line2 = document.querySelector(".bm-line2");
const nav = document.getElementById("bm-container");
const menu = document.getElementById("navigator");
const header = document.getElementById("header");

const openMenu = () => {
    return new Promise((resolve, reject) => {
        line1.style.animation = "playLine1 300ms forwards";
        line2.style.animation = "playLine2 300ms forwards";
        header.style.mixBlendMode = "normal";
        menu.style.display = "flex";
        menu.style.transitionDuration = "0.6s";
        setTimeout(()=>{
            menu.style.opacity = 1;
            resolve(true);
        }, 10);
    });
}

const closeMenu = () => {
    return new Promise((resolve, reject) => {
        line1.style.animation = "backLine1 300ms forwards";
        line2.style.animation = "backLine2 300ms forwards";
        header.style.mixBlendMode = "difference";
        menu.style.opacity = 0;
        menu.style.transitionDuration = "0.2s";
        setTimeout(()=>{
            menu.style.display = "none";
            resolve(true);
        }, 200);
    });
}

const BurgerMenuAnimate = () => {
    (!state) ? openMenu().then(state = true) : closeMenu().then(state = false);
}

nav.onclick = BurgerMenuAnimate;

var event;

menu.onclick = (e) => {
    event = e;
    if (e.target.innerHTML != "Proyectos") {
        closeMenu().then(state = false);
    } else {
        console.log(e);
    }
}

// Detección de slide y cambio de estado
var stateSlider = 0;
UIkit.util.on('#slider-hero', 'itemshow', (e) => {
    switch (e.detail[0].index) {
        case 0:
            if (stateSlider == 0) {
                document.getElementById("slider-1").style.width = "100%";
                document.getElementById("slider-2").style.width = "0%";
                document.getElementById("slider-3").style.width = "0%";
            } else if (stateSlider == 1) {
                document.getElementById("slider-1").style.width = "100%";
                document.getElementById("slider-2").style.transition = "width 0.3s ease-in";
                document.getElementById("slider-2").style.width = "0%";
                document.getElementById("slider-3").style.width = "0%";
            } else if (stateSlider == 2) {
                document.getElementById("slider-1").style.width = "100%";
                document.getElementById("slider-2").style.transition = "none";
                document.getElementById("slider-2").style.width = "0%";
                document.getElementById("slider-3").style.transition = "none";
                document.getElementById("slider-3").style.width = "0%";
            }
            stateSlider = 0;
            break;

        case 1:
            if (stateSlider == 0) {
                document.getElementById("slider-1").style.width = "100%";
                document.getElementById("slider-2").style.transition = "width 0.3s ease-in";
                document.getElementById("slider-2").style.width = "100%";
                document.getElementById("slider-3").style.width = "0%";
            } else if (stateSlider == 2) {
                document.getElementById("slider-1").style.width = "100%";
                document.getElementById("slider-2").style.transition = "width 0.3s ease-in";
                document.getElementById("slider-2").style.width = "100%";
                document.getElementById("slider-3").style.transition = "width 0.3s ease-in";
                document.getElementById("slider-3").style.width = "0%";
            }
            stateSlider = 1;
            break;

        case 2:
            if (stateSlider == 0) {
                document.getElementById("slider-1").style.width = "100%";
                document.getElementById("slider-2").style.transition = "none";
                document.getElementById("slider-2").style.width = "100%";
                document.getElementById("slider-3").style.transition = "none";
                document.getElementById("slider-3").style.width = "100%";
            } else if (stateSlider == 1) {
                document.getElementById("slider-1").style.width = "100%";
                document.getElementById("slider-2").style.transition = "width 0.3s ease-in";
                document.getElementById("slider-2").style.width = "100%";
                document.getElementById("slider-3").style.transition = "width 0.3s ease-in";
                document.getElementById("slider-3").style.width = "100%";
            }
            stateSlider = 2;
            break;
    
        default:
            break;
    }
});

var acc = document.getElementsByClassName("btn-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

mdc.textField.MDCTextField.attachTo(document.querySelector('.nombre'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.empresa'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.ciudad'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.correo'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.celular'));