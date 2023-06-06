let boltBtn = document.querySelector('#icon');
let body = document.querySelector('body');
let hero = document.querySelector('.hero');
let userInput = document.querySelector('#userInput');
let dots = gsap.utils.toArray('.dot');

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
  
    return tl;
  }
  
  animateDots();
  


//API
//https://rapidapi.com/serg.osipchuk/api/ApiAI/

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