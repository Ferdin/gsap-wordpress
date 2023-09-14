let strip = document.querySelector(".strip");
let blackBG = document.querySelector(".black-bg");
let image = document.querySelector(".image");
let texts = gsap.utils.toArray('.discount')

// function removeElement(element) {
//     if (typeof(element) === "string") {
//       element = document.querySelector(element);
//     }
//     return function() {
//       element.parentNode.removeChild(element);
//     };
// }

gsap.set(image, {
    display: 'none',
    scaleY: 0
})

gsap.set(texts, {
    opacity: 0
})

let tl = gsap.timeline();

tl.from(strip, {
    scaleY: 0,
    ease: "power3.inOut",
    duration: 1
});

tl.to(strip,{
    rotation: -15,
    ease: "power3.inOut",
    duration: 2
});

tl.to(blackBG, {
    rotation: -15,
    top: "-10%",
    left: "52%",
    ease: "power3.inOut",
    duration: 2
}, "-=2");

tl.to(texts, {
    opacity: 1,    
});

tl.to(texts, {
    duration: 2
})

tl.to(texts, {
    opacity: 0
})

tl.to(image, {
    display: 'block',
    scaleY: 1
})


// let tl2 = gsap.timeline();

// tl2.to(image, {
//     display: 'block'
// })