gsap.registerPlugin(ScrollTrigger);

gsap.to("#first-item",{
    scrollTrigger: {
        trigger:".first-slide",
        pin: true,
        start: "top top",
        scrub: true,
    },
    duration:2,
    opacity: 0
});