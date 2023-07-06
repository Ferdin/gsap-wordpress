function simulateCPUSpike(duration) {
    const startTime = performance.now();
    while (performance.now() - startTime < duration) {
      Math.sqrt(Math.random());
    }
  }

  simulateCPUSpike(3000);
  simulateCPUSpike(3000);

function createBox(){
    const gridContainer = document.querySelector('.grid-container');

    for (let i = 0; i < 100; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        gridContainer.appendChild(box);
    }
    gsap.to('.box', {
        opacity: 0,
        stagger: .1,
        repeat: -1,
        yoyo: true
    })
}

gsap.ticker.add(createBox());

