gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();


tl.to("#first-item",{
    duration:2,
    opacity: 0
});

tl.to("#first-item-description",{
    x: -40,
    duration:2,
    opacity:0
});

ScrollTrigger.create({
    animation: tl,
    trigger:".first-slide",
    pin: true,
    start: "top top",
    snap: 1,
    // end: "bottom top",
    scrub: 1,
});

