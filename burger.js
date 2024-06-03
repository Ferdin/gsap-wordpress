var imgElements = document.querySelectorAll('.img-brg');

var tl = gsap.timeline();

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