gsap.registerPlugin(ScrollTrigger);

// let tl = gsap.timeline();


// tl.to("#first-item",{
//     duration:2,
//     opacity: 0
// });

// tl.to("#first-item-description",{
//     x: -40,
//     duration:2,
//     opacity:0
// });

// ScrollTrigger.create({
//     animation: tl,
//     trigger:".first-slide",
//     pin: true,
//     start: "top top",
//     snap: 1,
//     // end: "bottom top",
//     scrub: 1,
// });

let sections = gsap.utils.toArray(".slide");

gsap.to(sections, {
    xPercent: -100 * (sections.length -1),
    duration: .3,
    ease: "expo.out",
    scrollTrigger: {
        trigger: '.slider',
        pin: true,
        scrub: 1,
        snap: 1/ (sections.length - 1),
        start: "top top",
        //end: () => "+=" + document.querySelector(".slider").offsetWidth
    }
});


// gsap.to("#second-item", {
//     scrollTrigger: {
//         trigger: ".second-slide",
//         scrub: 1
//     },
//     opacity: 0,
//     duration:3
// })

let tl = gsap.timeline();


tl.to("#second-item",{
    duration:0,
    opacity: 0
});

tl.to("#second-item",{
    duration:2,
    opacity:1,
});

ScrollTrigger.create({
    animation: tl,
    trigger:".second-slide",
    scrub: 1,
    start: "top top"
});
