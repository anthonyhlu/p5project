let cowButton, chickenButton, pigButton, penguinButton;
let nextStepButton, drawCowButton, drawPigBbutton, drawPenguinButton, drawBeeButton;
var cowImg;
let chickenImg;
let pigImg;
let penguinImg;

function preload() {
  cowImg = createImg("https://i.imgur.com/EUFLyLD.jpg"); 
  beeImg = createImg("https://i.imgur.com/Ot6AaZB.jpg");
  penguinImg = createImg("https://i.imgur.com/KgD1dYm.jpg");

}

function setup() {
  createCanvas(displayWidth);
  nextStepButton = createButton("next step");
  nextStepButton.position(750, 800);
  nextStepButton.size(300)
  nextStepButton.hide();
  nextStepButton.mousePressed();
  //drawCowButton = createButton("draw a cow");
  //drawCowButton.mousePressed(drawCow);
  //drawCowButton.position(200, 620);
  //drawCowButton.size(200);
  //drawBeeButton = createButton("draw a bee");
  //drawBeeButton.position(800, 620);
  //drawBeeButton.size(200);
  //drawPenguinButton = createButton("draw a penguin");
  //drawPenguinButton.position(1400, 620);
  //drawPenguinButton.size(200);
  nextStepButton.style("font",'comic-sans');
  cowImg.mousePressed(drawCow)
  cowImg.position(0.02 * window.innerWidth, 0.3 * window.innerHeight);
  beeImg.position(0.355 * window.innerWidth, 0.3 * window.innerHeight);
  penguinImg.position(0.69 * window.innerWidth, 0.3 * window.innerHeight);;

}

function drawCow() {
  cowImg.hide();
  beeImg.hide();
  penguinImg.hide();
  drawCowButton.hide();
  drawBeeButton.hide();
  drawPenguinButton.hide();
  nextStepButton.show();
}

function draw() {

}



