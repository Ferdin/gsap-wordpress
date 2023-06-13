//selector
//arrays
//shuffle

let q = gsap.utils.selector(document);

let blackBox = q(".black.box");

let greenBox = q(".green.box");

let greyBox = q(".grey.box");

let blueBox = q(".blue.box");

let yellowBox = q(".yellow.box");

//get the current positions of each boxes

// let blackBoxPos = blackBox.getBoundingClientRect;

// let greenBoxPos = greenBox.getBoundingClientRect;

// let greyBoxPos = greyBox.getBoundingClientRect;

// let blueBoxPos = blueBox.getBoundingClientRect;

// let yellowBoxPos = yellowBox.getBoundingClientRect;

// greenBox.getBoundingClientRect = greyBoxPos;

//let boxes = [];

// for (var i = 0; i<gsap.utils.toArray(".box").length; i++){
    
// }

// Get the current x positions of each box
// Get the boxes and store their current positions
const boxes = gsap.utils.toArray(".box");
const shuffledPositions = gsap.utils.shuffle(boxes.map((box) => box.getBoundingClientRect()));

// boxes.forEach((box, index) => {
//   const { x, y } = shuffledPositions[index];
  
//   gsap.to(box, {
//     x: `${x}px`,
//     y: `${y}px`,
//     duration: 1,
//   });
// });



//and switch the boxes to randomly using the utils method

  