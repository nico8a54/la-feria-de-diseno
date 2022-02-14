var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
    triggerElement: '.scrollTrigger'
})

.setClassToggle('.scrollColor','scrollBlue')
.addTo (controller)


var scene2 = new ScrollMagic.Scene({
    triggerElement: '.nosotros_img-container'
})

.setClassToggle('.nosotros_img-container','show')
.addTo (controller)