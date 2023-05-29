let boltBtn = document.querySelector('#icon');


boltBtn.addEventListener("mouseover", () => {
    gsap.to(boltBtn, {
        opacity: 0
    })
});

boltBtn.addEventListener("mouseleave", () => {
    gsap.to(boltBtn, {
        opacity: 1
    })
});