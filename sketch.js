let cowButton, chickenButton, pigButton, penguinButton;
let nextStepButton, drawCowButton, drawPigBbutton, drawPenguinButton, drawBeeButton;
var cowImg;
let chickenImg;
let pigImg;
let penguinImg;

function preload() {
  
}

function setup() {
  createCanvas(750, 500);
  nextStepButton = createButton("next step");
  nextStepButton.position(750, 850);
  nextStepButton.size(300)
  nextStepButton.mousePressed();
  drawCowButton = createButton("draw a cow");
  drawCowButton.position(200, 620);
  drawCowButton.size(200);
  drawBeeButton = createButton("draw a bee");
  drawBeeButton.position(800, 620);
  drawBeeButton.size(200);
  drawPenguinButton = createButton("draw a penguin");
  drawPenguinButton.position(1400, 620);
  drawPenguinButton.size(200);
  cowImg = loadImage("cow.jpg");
  
}

function draw() {
  nextStepButton.display();
  cowButton.display();
  beeImg.display();
  penguinImg.display();
  image(cowImg, 0, 0);

}



