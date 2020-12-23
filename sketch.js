var player1,player1_fighting,player1_standing;


function preload(){
  player1_fighting = loadAnimation("images/player1/kick.png",
  "images/player1/leftpunch.png","images/player1/rightpunch.png");
  player1_standing= loadAnimation("images/player1/standing1.png","images/player1/standing2.png");


}

function setup(){

  createCanvas(800,500);

  player1 = createSprite(200,250);
 // player1.addAnimation("standing",player1_standing);
  player1.addAnimation("fighting",player1_fighting)

}

function draw(){
  background(160);
  drawSprites();

}