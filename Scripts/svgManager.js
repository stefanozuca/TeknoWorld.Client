

$(function() {
    
    gsap.registerPlugin(MotionPathPlugin);

    gsap.from('#square7', {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: 0.5})
    gsap.from('#square4', {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: 0.6})
    gsap.from('#square1', {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: 0.7})
    gsap.from('#square8', {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: 0.8})
    gsap.from('#square5', {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: 0.9})
    gsap.from('#square9', {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: 1})
    gsap.from('#square2', {scaleY: 0, transformOrigin: "left", ease: Power2.easeIn, delay: 1.2})
    gsap.from('#square3', {scaleY: 0, transformOrigin: "left", ease: Power2.easeIn, delay: 1.3})
    gsap.from('#square6', {scaleY: 0, transformOrigin: "left", ease: Power2.easeIn, delay: 1.4})

    gsap.to('#square1', {opacity: 0, duration: 1, delay: 2.6})
    gsap.to('#square2', {opacity: 0, duration: 1, delay: 2.7})
    gsap.to('#square3', {opacity: 0, duration: 1, delay: 2.6})
    gsap.to('#square4', {opacity: 0, duration: 1, delay: 2.8})
    gsap.to('#square5', {opacity: 0, duration: 1, delay: 2.6})
    gsap.to('#square6', {opacity: 0, duration: 1, delay: 2.5})
    gsap.to('#square7', {opacity: 0, duration: 1, delay: 2.7})
    gsap.to('#square8', {opacity: 0, duration: 1, delay: 2.6})
    gsap.to('#square9', {opacity: 0, duration: 1, delay: 2.8})

});
