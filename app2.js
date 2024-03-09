

const canvas =  document.querySelector( '#myCanvas' );
const ctx =  canvas.getContext('2d');



/// drawing a line 


ctx.beginPath();
ctx.moveTo(0, 0); // x and y coordinates of the starting point of the line
ctx.lineTo(100, 70); // x and y coordinates of the ending point of the line
ctx.strokeStyle = 'red'; // color of the line to be drawn
ctx.lineWidth = 4; // width of the line in pixels
ctx.stroke(); // draws the line on the canvas

// Drawing rectangle
var rectX = 50;
var rectY = 50;
var rectW = 100;
var rectH = 100;

function drawRectangle() {
    ctx.rect(rectX, rectY, rectW, rectH);
    ctx.stroke();
}



// drawing a circle

function drawCircle() {
ctx.beginPath();
   // need 5  parameters always
  ctx.arc(100,75,50,0,2* Math.PI);
  ctx.fillStyle='blue';
  //  fill the circle
  ctx.fill();
  ctx.stroke();

}

// drawing semicircle

function semicircle() {
ctx.beginPath();
ctx.arc(100,75,50,0,0* Math.PI);
ctx.stroke();


}

//----------------------------------------
let circleXX = canvas.width / 2;
let circleYY = canvas.height / 2;
const circleRadius = 20;

let rectXX = 50;
let rectYY = 100;
const rectWidth = 50;
const rectHeight = 30;

function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw circle
  ctx.beginPath();
  ctx.arc(circleXX, circleYY, circleRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();

  // Draw rectangle
  ctx.beginPath();
  ctx.rect(rectXX, rectYY, rectWidth, rectHeight);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
}

function update() {
  // Update circle position
  circleXX += 1;
  if (circleXX > canvas.width + circleRadius) {
    circleXX = -circleRadius; // Reset to the left side when it goes off-screen
  }

  // Update rectangle position
  rectYY += 1;
  if (rectYY > canvas.height) {
    rectYY= -rectHeight; // Reset to the top when it goes off-screen
  }
}

function animate() {
  draw();
  update();
  requestAnimationFrame(animate);
}

animate();


drawRectangle();
semicircle()
drawCircle()