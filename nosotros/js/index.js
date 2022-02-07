// // SMOOTH SCROLLING SECTIONS
// $('a[href*=#]:not([href=#])').click(function(){

//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//             if (target.length) {
//                 $('html,body').animate({
//                     scrollTop: target.offset().top
//                 }, 1000);
//                 return false;
//             }
//         }
// });

const timeline0 = document.getElementById("timeline-0");
const timeline1 = document.getElementById("timeline-1");
const timeline2 = document.getElementById("timeline-2");
const timeline3 = document.getElementById("timeline-3");
const timeline4 = document.getElementById("timeline-4");
const timeline5 = document.getElementById("timeline-5");


// window.addEventListener('load')

window.addEventListener('resize', () => {
    let whidthPage = document.documentElement.clientWidth;
    console.log(document.documentElement.clientWidth);
    if (whidthPage >= 600) {
        timeline0.src = "./assets/timeline-pc-0.svg";
        timeline1.src = "./assets/timeline-pc-1.svg";
        timeline2.src = "./assets/timeline-pc-2.svg";
        timeline3.src = "./assets/timeline-pc-3.svg";
        timeline4.src = "./assets/timeline-pc-4.svg";
        timeline5.src = "./assets/timeline-pc-5.svg";
        console.log("holi");
    } else {
        timeline0.src = "./assets/timeline-mobile-0.svg";
        timeline1.src = "./assets/timeline-mobile-1.svg";
        timeline2.src = "./assets/timeline-mobile-2.svg";
        timeline3.src = "./assets/timeline-mobile-3.svg";
        timeline4.src = "./assets/timeline-mobile-4.svg";
        timeline5.src = "./assets/timeline-mobile-5.svg";
    }
    
})