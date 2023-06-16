const cursor = document.querySelector('.circle');
let image = document.querySelector('.headset')    
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
    duration: 1.5,
    x: e.clientX,
    y: e.clientY,
    ease: "elastic.out"
    });
});

gsap.to(cursor, {
    duration: 2,
    scale: 1.1,
    opacity: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

image.addEventListener('mouseover', () => {
    gsap.to(image,{
        rotation: 4
    }
    )
})

image.addEventListener('mouseleave', () => {
    gsap.to(image, {
      rotation: 0
    });
  });

