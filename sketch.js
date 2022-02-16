let cowButton, chickenButton, pigButton, penguinButton;
let nextStepButton, drawCowButton, drawPigBbutton, drawPenguinButton, drawBeeButton;
var cowImg;
let chickenImg;
let pigImg;
let penguinImg;

function preload() {
  cowImg = createImg("https://i.imgur.com/yf0MajD.jpg"); 
  beeImg = createImg("https://i.imgur.com/h2mt3sI.jpg");
  penguinImg = createImg("https://i.imgur.com/q0bomhN.jpg");

}

function setup() {
  createCanvas(displayWidth);
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
  beeImg.position(750, 250);
  penguinImg.position(1350, 250);

}

function drawCow() {
  cowImg.hide();
  beeImg.hide();
  penguinImg.hide();
}

function draw() {

}



