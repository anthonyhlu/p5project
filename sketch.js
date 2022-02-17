let cowButton, chickenButton, pigButton, penguinButton;
let nextStepButton, drawCowButton, drawPigBbutton, drawPenguinButton, drawBeeButton;
var cowImg;
let chickenImg;
let pigImg;
let penguinImg;
let howToPenguin;

function preload() {
  cowImg = createImg("https://i.imgur.com/EUFLyLD.jpg"); 
  beeImg = createImg("https://i.imgur.com/Ot6AaZB.jpg");
  penguinImg = createImg("https://i.imgur.com/KgD1dYm.jpg");
  howToCowStep1 = createImg("https://imgur.com/nXYFP6n.jpg");
  howToCowStep2 = createImg("https://imgur.com/rtBEIAp.jpg");
  howToCowStep3 = createImg("https://imgur.com/Rm2s8OD.jpg");
  howToBeeStep1 = createImg("");
  howToBeeStep2 = createImg("");
  howToBeeStep3 = createImg("");
  howToPenguinStep1 = createImg("");
  howToPenguinStep2 = createImg("");
  howToPenguinStep3 = createImg("");
}

function setup() {
  createCanvas(displayWidth);
  // nextStepButton = createButton("next step");
  // nextStepButton.position(750, 800);
  // nextStepButton.size(300)
  // nextStepButton.mousePressed();
  // nextStepButton.hide();
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
  //cowImg.mousePressed(drawCow);
  cowImg.position(0.02 * window.innerWidth, 0.3 * window.innerHeight);
  beeImg.position(0.355 * window.innerWidth, 0.3 * window.innerHeight);
  penguinImg.position(0.69 * window.innerWidth, 0.3 * window.innerHeight);
  beeImg.mousePressed(drawBee);
  penguinImg.mousePressed(drawPenguin);
  howToCowStep1.hide();
  howToCowStep2.hide();
  howToCowStep3.hide();
}

function drawBee() {
  cowImg.hide();
  beeImg.hide();
  penguinImg.hide();
  drawCowButton.hide();
  drawBeeButton.hide();
  drawPenguinButton.hide();
  howToBee();
}

function drawPenguin() {
  cowImg.hide();
  beeImg.hide();
  penguinImg.hide();
  drawCowButton.hide();
  drawBeeButton.hide();
  drawPenguinButton.hide();
}

function howToBee() {
  howToBeeStep1.show();
}

function draw() {
  cowImg.mousePressed(drawCow);
  
}

function drawCow() {
  howToCowStep1.position(0.02 * window.innerWidth, 0.3 * window.innerHeight);
  howToCowStep1.show();
  howToCowStep2.position(0.355 * window.innerWidth, 0.3 * window.innerHeight);
  howToCowStep2.show();
  howToCowStep3.position(0.69 * window.innerWidth, 0.3 * window.innerHeight);
  howToCowStep3.show();
  cowImg.hide();
  beeImg.hide();
  penguinImg.hide();
  drawCowButton.hide();
  drawBeeButton.hide();
  drawPenguinButton.hide();
  

}


