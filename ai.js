let boltBtn = document.querySelector('#icon');
let body = document.querySelector('body');
let hero = document.querySelector('.hero');
let userInput = document.querySelector('#userInput');
let dots = gsap.utils.toArray('.dot');
let loading = document.querySelector('.loading');
let blob = document.querySelector('.blob');
const video = document.querySelector('.video');

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {

});

const totalDots = dots.length;

function animateDots() {
    const tl = gsap.timeline({ repeat: -1 });
  
    tl.to(dots, {
      y: -15,
      stagger: {
        each: 0.1,
      },
    })
    tl.to(dots, {
      y: 0,
      stagger: {
        each: 0.1,
      },
    },
    "-=.5"
    );
    tl.to(dots, {
        delay: .5
    })
  
    return tl;
  }

  let master = gsap.timeline({ });

  master.add(animateDots)
  
  


//API
//https://rapidapi.com/serg.osipchuk/api/ApiAI/

gsap.from(loading, {
    scale:0,
    transformOrigin:"top right",
    ease: "back.out(1.7)",
    rotation: 70
});


boltBtn.addEventListener("mouseover", () => {
    gsap.to(boltBtn, {
        rotation: 180,
        color: "rgb(255 255 255)",
    })
    gsap.to(body, {
        "--gradient-color-1": "#ff0844",
        "--gradient-color-2": " #ffb199"
    });
    gsap.to(hero,{
        color: "rgb(255 255 255)"
    });
    gsap.to(userInput,{
        borderColor: "rgb(255 255 255)"
    });
    gsap.to(loading, {
        background: "white"
    });
    gsap.to(dots, {
        background: "black"
    });
});

boltBtn.addEventListener("mouseleave", () => {
    gsap.to(boltBtn, {
        rotation: -180,
        color: "rgb(0, 0, 0)"
    });
    gsap.to(body, {
        "--gradient-color-1": "rgba(255,255,255,1)",
        "--gradient-color-2": "rgba(255,255,255,1)"
    });
    gsap.to(hero,{
        color: "rgb(0, 0, 0)"
    });
    gsap.to(userInput,{
        borderColor: "rgb(0, 0, 0)"
    });
    gsap.to(loading, {
        background: "black"
    });
    gsap.to(dots, {
        background: "white"
    });
});

boltBtn.addEventListener("click", () => {
    gsap.to(body, {
        "--gradient-color-1": "#b721ff",
        "--gradient-color-2": "#21d4fd"
    });
    const userInput = document.getElementById('userInput').value;

    // Make API request using userInput
    // Replace 'YOUR_API_KEY' with your actual OpenAI API key
    // Replace 'YOUR_MODEL_ID' with the model ID you want to use
    fetch('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
           // 'Authorization': 'Bearer API'
        },
        body: JSON.stringify({
            prompt: userInput,
            max_tokens: 50 // Adjust as needed
        })
    })
    .then(response => response.json())
    .then(data => {
        // Update input field with API response
        console.log(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

gsap.to(blob, {
    borderRadius: '48% 52% 68% 32% / 42% 28% 72% 58%',
  duration: 4, // Animation duration in seconds
  keyframes: [
    { borderRadius: '57% 43% 49% 51% / 55% 71% 29% 45', offset: 0 },
    { borderRadius: '48% 52% 41% 59% / 66% 37% 63% 34%', offset: 0.05 },
    { borderRadius: '69% 31% 71% 29% / 67% 31% 69% 33%', offset: 0.1 },
    { borderRadius: '60% 40% 71% 29% / 63% 65% 35% 37%', offset: 0.15 },
    { borderRadius: '61% 39% 51% 49% / 57% 58% 42% 43%', offset: 0.2 },
    { borderRadius: '66% 34% 25% 75% / 47% 30% 70% 53%', offset: 0.25 },
    { borderRadius: '48% 52% 68% 32% / 42% 28% 72% 58%', offset: 0.3 },
    { borderRadius: '32% 68% 38% 62% / 65% 60% 40% 35%', offset: 0.35 },
    { borderRadius: '75% 25% 47% 53% / 49% 53% 47% 51%', offset: 0.4 },
  ],
  repeat:-1,
  yoyo: true
});

video.addEventListener('load', () => {
    const playButton = video.contentDocument.querySelector('.ytp-large-play-button');
    if (playButton) {
      playButton.style.display = 'none';
    }
  });