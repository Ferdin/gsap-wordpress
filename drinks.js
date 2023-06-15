const cursor = document.querySelector('.circle');
    
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
    duration: 0.3,
    x: e.clientX,
    y: e.clientY
    });
});

gsap.to(cursor, {
    duration: 2,
    scale: 1.5,
    opacity: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });