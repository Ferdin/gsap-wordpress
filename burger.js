var imgElements = document.querySelectorAll('.img-brg');

var tl = gsap.timeline();

var fl_string = document.querySelector(".main-heading");

gsap.from(fl_string, {
    y: 100,
    ead: "expo.out",
    duration: 1.1,
    opacity: 0
})

tl.from(imgElements.item(6), {
    y: -100,
    ease: "expo.out",
    duration: 1.
}, "");

tl.from(imgElements.item(5), {
    y: -1000,
    ease: "expo.out",
    duration: 1.5
}, "-=1.4");

tl.from(imgElements.item(4), {
    y: -1000,
    ease: "expo.out",
    duration: 1.5
}, "-=1.4");

tl.from(imgElements.item(3), {
    y: -1000,
    ease: "expo.out",
    duration: 1.5
}, "-=1.4");

tl.from(imgElements.item(2), {
    y: -1000,
    ease: "expo.out",
    duration: 1.5
}, "-=1.4");

tl.from(imgElements.item(1), {
    y: -1000,
    ease: "expo.out",
    duration: 1.5
}, "-=1.4");

tl.from(imgElements.item(0), {
    y: -1000,
    ease: "expo.out",
    duration: 1.5
}, "-=1.4");

tl2 = gsap.timeline({repeat: -1});

tl2.to(".dot", {
    y: 35,
    duration: 1.5
});

tl2.to(".dot", {
    opacity: 0
})

tl2.to(".dot", {
    duration: 1
})

