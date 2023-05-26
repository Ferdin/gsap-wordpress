// const path = document.querySelector("#blob");

// const startData = "M53,-44C65.7,-26.4,70.8,-4.5,65.7,14C60.7,32.5,45.5,47.7,28.1,54.7C10.7,61.6,-8.8,60.3,-29.5,53.4C-50.1,46.5,-71.8,33.9,-79.1,14.5C-86.4,-5,-79.4,-31.3,-63.8,-49.5C-48.2,-67.7,-24.1,-77.8,-2,-76.3C20.2,-74.7,40.4,-61.5,53,-44Z";
// const endData = "M60.8,-49C73.9,-32,76.3,-7,71.2,16.7C66.1,40.4,53.6,62.9,36.7,67.8C19.8,72.7,-1.5,60.1,-21.8,48.9C-42,37.8,-61.1,28,-67.8,11.7C-74.5,-4.5,-68.7,-27.4,-55.3,-44.4C-42,-61.4,-21,-72.7,1.4,-73.8C23.8,-75,47.7,-66,60.8,-49Z";

// const startCoords = startData.match(/[-]?\d+[.]?\d*/g).map(Number);
// const endCoords = endData.match(/[-]?\d+[.]?\d*/g).map(Number);

// const animationDuration = 1; // Duration in seconds
// const animationFrames = 60; // Number of frames in the animation
// const frameDuration = animationDuration / animationFrames; // Duration of each frame

// function updatePath(coords) {
//   const newData = `M${coords[0]},${coords[1]}C${coords.slice(2).join(",")}`;
//   path.setAttribute("d", newData);
// }

// function animatePath() {
//   let frame = 0;
//   const coords = startCoords.slice();

//   function update() {
//     frame++;
//     if (frame <= animationFrames) {
//       for (let i = 0; i < coords.length; i++) {
//         const start = startCoords[i];
//         const end = endCoords[i];
//         const distance = end - start;
//         const progress = frame / animationFrames;
//         const currentValue = start + distance * progress;
//         coords[i] = currentValue;
//       }
//       updatePath(coords);
//       requestAnimationFrame(update);
//     }
//   }

//   update();
// }



// gsap.to({},{
//     repeat: -1,
//     yoyo: true,
//     onUpdate: (progress) => {
//         animatePath();
//     }
// })
const blobPath = document.querySelector("#blob");
const duration = 2;

gsap.to(blobPath, {
  attr: { d: "M200,200" }, // Start position
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  onUpdate: () => updateBlobPath(),
});

function updateBlobPath() {
    const t = gsap.getProperty(blobPath, "progress");
    const offset = 80;
    const x = 200 + Math.sin(t * Math.PI * 2) * offset;
    const y = 200 + Math.cos(t * Math.PI * 2) * offset;
    const radius = 80;
  
    let pathData = `M ${x},${y}`;
    for (let i = 0; i < 4; i++) {
      const angle = t * Math.PI * 2 + i * (Math.PI / 2);
      const cx1 = x + Math.sin(angle) * radius;
      const cy1 = y + Math.cos(angle) * radius;
      const cx2 = x + Math.sin(angle + (Math.PI / 2)) * (radius / 2);
      const cy2 = y + Math.cos(angle + (Math.PI / 2)) * (radius / 2);
      const dx = x + Math.sin(angle + (Math.PI / 2)) * radius;
      const dy = y + Math.cos(angle + (Math.PI / 2)) * radius;
      pathData += ` Q ${cx1},${cy1} ${cx2},${cy2} Q ${dx},${dy} ${x},${y}`;
    }
  
    blobPath.setAttribute("d", pathData);
  }
  
  
