var cowImg;
var penguinImg;
var beeImg;

function preload() {
  cowImg = createImg("https://i.imgur.com/EUFLyLD.jpg"); 
  beeImg = createImg("https://i.imgur.com/Ot6AaZB.jpg");
  penguinImg = createImg("https://i.imgur.com/KgD1dYm.jpg");
  howToCowStep1 = createImg("https://imgur.com/DspvZqT.jpg");
  howToCowStep2 = createImg("https://imgur.com/M22X13a.jpg");
  howToCowStep3 = createImg("https://imgur.com/ehCPSwx.jpg");
  howToBeeStep1 = createImg("https://imgur.com/xDu2W7v.jpg");
  howToBeeStep2 = createImg("https://imgur.com/JmW5rAz.jpg");
  howToBeeStep3 = createImg("https://imgur.com/dijJCAS.jpg");
  howToPenguinStep1 = createImg("https://imgur.com/roHQRAE.jpg");
  howToPenguinStep2 = createImg("https://imgur.com/ECBYs5p.jpg");
  howToPenguinStep3 = createImg("https://imgur.com/y4b00pq.jpg");
}

function setup() {
  createCanvas(displayWidth);
  cowImg.position(0.02 * window.innerWidth, 0.3 * window.innerHeight);
  beeImg.position(0.355 * window.innerWidth, 0.3 * window.innerHeight);
  penguinImg.position(0.69 * window.innerWidth, 0.3 * window.innerHeight);
  
  howToCowStep1.hide();
  howToCowStep2.hide();
  howToCowStep3.hide();
  howToBeeStep1.hide();
  howToBeeStep2.hide();
  howToBeeStep3.hide();
  howToPenguinStep1.hide();
  howToPenguinStep2.hide();
  howToPenguinStep3.hide();
}

function draw() {
  cowImg.mousePressed(drawCow);
  beeImg.mousePressed(drawBee);
  penguinImg.mousePressed(drawPenguin);
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

function drawBee() {
  howToBeeStep1.position(0.02 * window.innerWidth, 0.3 * window.innerHeight);
  howToBeeStep1.show();
  howToBeeStep2.position(0.375 * window.innerWidth, 0.3 * window.innerHeight);
  howToBeeStep2.show();
  howToBeeStep3.position(0.69 * window.innerWidth, 0.3 * window.innerHeight);
  howToBeeStep3.show();
  cowImg.hide();
  beeImg.hide();
  penguinImg.hide();
  drawCowButton.hide();
  drawBeeButton.hide();
  drawPenguinButton.hide();
}

function drawPenguin() {
  howToPenguinStep1.position(0.02 * window.innerWidth, 0.3 * window.innerHeight);
  howToPenguinStep1.show();
  howToPenguinStep2.position(0.355 * window.innerWidth, 0.3 * window.innerHeight);
  howToPenguinStep2.show();
  howToPenguinStep3.position(0.69 * window.innerWidth, 0.3 * window.innerHeight);
  howToPenguinStep3.show();
  cowImg.hide();
  beeImg.hide();
  penguinImg.hide();
  drawCowButton.hide();
  drawBeeButton.hide();
  drawPenguinButton.hide();
}

