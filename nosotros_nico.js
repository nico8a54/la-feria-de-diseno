
var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from("lineContainer", 1, {x:50, opacity:0})
tl.from(".line1", 1, {height:0,});
tl.from(".line2", 1, {width:0,});
tl.from(".line3", 1, {height:0,});
tl.from(".line4", 1, {width:0,});
tl.from(".line5", 1, {height:0,});
tl.from(".line6", 1, {width:0,});

const scene = new ScrollMagic.Scene({
    triggerElement: ".sticky",
    triggerHook: "onLeave",
    duration:"100%"
})
    .setPin(".sticky")
    .setTween(tl)
        .addTo(controller)

function updatePercentage() {
    tl.progress();
    console.log(tl.progress())
}

LottieInteractivity.create({
    player:'#firstLottie',
    mode:"scroll",
        actions: [
        {
            visibility:[0, 1.0],
            type: "seek",
            frames: [0, 300],
        },
        ]
    });