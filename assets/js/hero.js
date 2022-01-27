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