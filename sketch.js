let cowButton, chickenButton, pigButton, penguinButton;
let nextStepButton, drawCowButton, drawPigBbutton, drawPenguinButton, drawBeeButton;
var cowImg;
let chickenImg;
let pigImg;
let penguinImg;

function preload() {
  cowImg = createImg("https://i.imgur.com/yf0MajD.jpg"); 
  beeImg = loadImage("https://i.imgur.com/h2mt3sI.jpg");
  penguinImg = loadImage("https://i.imgur.com/6CdUJfY.jpg");

}

function setup() {
  createCanvas(1000, 1000);
  nextStepButton = createButton("next step");
  nextStepButton.position(750, 850);
  nextStepButton.size(300)
  nextStepButton.mousePressed();
  drawCowButton = createButton("draw a cow");
  drawCowButton.mousePressed(drawCow);
  drawCowButton.position(200, 620);
  drawCowButton.size(200);
  drawBeeButton = createButton("draw a bee");
  drawBeeButton.position(800, 620);
  drawBeeButton.size(200);
  drawPenguinButton = createButton("draw a penguin");
  drawPenguinButton.position(1400, 620);
  drawPenguinButton.size(200);
  nextStepButton.style("font",'comic-sans');
  cowImg.mousePressed(drawCow)
  cowImg.position(150, 250);
  image(beeImg, 700, 250);
  image(penguinImg, 1300, 250);

}

function drawCow() {
  ellipse(100, 100, 100, 100);
}

function draw() {

}



