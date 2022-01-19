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
UIkit.util.on('#slider-hero', 'itemshow', (e) => {
    switch (e.detail[0].index) {
        case 0:
            document.getElementById("slider-1").style.width = "100%";
            document.getElementById("slider-2").style.width = "0%";
            document.getElementById("slider-3").style.width = "0%";
            break;

        case 1:
            document.getElementById("slider-1").style.width = "100%";
            document.getElementById("slider-2").style.width = "100%";
            document.getElementById("slider-3").style.width = "0%";
            break;

        case 2:
            document.getElementById("slider-1").style.width = "100%";
            document.getElementById("slider-2").style.width = "100%";
            document.getElementById("slider-3").style.width = "100%";
            break;
    
        default:
            break;
    }
});