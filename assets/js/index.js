var state = false;

const line1 = document.querySelector(".bm-line1");
const line2 = document.querySelector(".bm-line2");
const nav = document.getElementById("bm-container");
const menu = document.getElementById("navigator");

const openMenu = () => {
    return new Promise((resolve, reject) => {
        line1.style.animation = "playLine1 300ms forwards";
        line2.style.animation = "playLine2 300ms forwards";
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