gsap.registerPlugin(ScrollTrigger)

gsap.to(".box", {
    scrollTrigger: {
        trigger: ".box",
        pin: true,
        start: "top top",
        end: "+=1000",
        scrub: 1
    },
    x: 300,
})