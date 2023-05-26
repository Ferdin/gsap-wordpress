let innerCircle = document.querySelector(".innerCircle");
let outerCirlce = document.querySelector(".outerCircle");

gsap.from(innerCircle, {
    scale:0,
    transformOrigin:"center",
});

gsap.from(outerCirlce, {
  rotation: 360,
  transformOrigin: "center",
  repeat: -1, 
  duration: 5,
  ease: "linear" 
});

gsap.from(".innerCircle1", {
    scale:0,
    transformOrigin:"center",
});

gsap.from(".outerCircle1", {
  rotation: 360,
  transformOrigin: "center",
  repeat: -1, 
  duration: 5,
  ease: "linear" 
});

const dashedLine = document.querySelector("#dashedLine1");
const lineLength = dashedLine.getTotalLength();

dashedLine.style.strokeDasharray = lineLength;
dashedLine.style.strokeDashoffset = lineLength;

gsap.to(dashedLine, { strokeDashoffset: 0, duration: 2 });
