let strip = document.querySelector(".strip");
let blackBG = document.querySelector(".black-bg");
let image = document.querySelector(".image");

function removeElement(element) {
    if (typeof(element) === "string") {
      element = document.querySelector(element);
    }
    return function() {
      element.parentNode.removeChild(element);
    };
}


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

let tl2 = gsap.timeline();