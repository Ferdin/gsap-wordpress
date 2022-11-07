gsap.registerPlugin(ScrollTrigger);

//toggleActions: 
/*
restart - when enters into the scene,
pause - when exits the screen,
reverse - when enters inot the scene from bottom,
pause - again exits the screen from bottom,
*/

//start:
/*
top center - play when the top of the object hits the center of the screen.
*/

//markers:
/*
true
*/

// gsap.to(".c", { 
//     scrollTrigger:{
//         trigger:".c",
//         start: "top center",
//         end: "bottom 100px",
//         markers: true,
//         toggleActions: "restart pause reverse pause"
//     },
//     x: 200, 
//     duration: 3
// })

gsap.to((".c"),{
    scrollTrigger: {
        trigger: ".c",
        start: "top center",
        end: "top 100px;",
        scrub: 1,
        markers: true
    },
    x: 400,
    rotation: 360,
    duration: 3
});