gsap.registerPlugin(ScrollTrigger)

gsap.to(".box", {
    scrollTrigger: {
        trigger: ".box",
        pin: true,
        start: "top top",
        scrub: 1
    },
    x: 300
})