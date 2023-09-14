let strip = document.querySelector(".strip");
let blackBG = document.querySelector(".black-bg");
let image = document.querySelector(".image");
let texts = gsap.utils.toArray('.discount');
let dealBtn = document.querySelector('.deals-btn');
let adContainer = document.querySelector('.ad-container');

gsap.set(image, {
    display: 'none',
    scaleY: 0
})

gsap.set(texts, {
    display: 'none',
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
    display: 'inline',
    opacity: 1,    
});

tl.to(texts, {
    duration: 2
})

tl.to(texts, {
    opacity: 0
})

tl.to(texts, {
    display: 'none'
})

tl.to(image, {
    display: 'block',
    y: 15,
    scaleY: 1
})

dealBtn.addEventListener('mouseover', (event) => {
    let tl2 = gsap.timeline();

    tl2.to(strip,{
        rotation: 15,
        ease: "power3.inOut",
        duration: 1
    });
    
    tl2.to(blackBG, {
        rotation: 15,
        top: "-10%",
        left: "50%",
        ease: "power3.inOut",
        duration: 1
    }, "-=1");

    gsap.to(adContainer, {
        backgroundColor: "purple"
    });

    gsap.to(dealBtn, {
        color: 'purple'
    })

    tl2.play();
});
