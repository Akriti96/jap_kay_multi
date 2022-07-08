var canvas;
var backgroundImage;
var bgImg;
var database;
var myform, myplayer,mygame;
var myGameState,myPlayerCount
var car1,car2,cars,car1Image,car2Image,trackImage
var allPlayers


function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Image=loadImage("./assets/car1.png")
  car2Image=loadImage("./assets/car2.png")
  trackImage=loadImage("./assets/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  bgImg = backgroundImage;

  // initialise the firebase
  database = firebase.database();
  mygame = new Game();
  mygame.start();
  mygame.getState(); 


}

function draw() {
  background(bgImg);
  if(myPlayerCount === 2){
    mygame.updateState(1) 
  }


  if(myGameState === 1){
    mygame.play()
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
