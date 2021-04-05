var bg,bgImg
var player,playerImg
var enemyImg1,enemyImg2,enemyImg3

function preload(){
  bgImg = loadImage ("bg.jpg")
  playerImg=loadImage ("playership.png")
  enemyImg1=loadImage ("enemy1.png")
  enemyImg2=loadImage ("enemy2.png")
  enemyImg3=loadImage ("enemy3.png")
}

function setup() {
  createCanvas(1300,700);

  

  bg=createSprite(650,350,1300,700);
  bg.addImage(bgImg);
  bg.scale=3;
  bg.velocityY=-2;

  player=createSprite(650,650);
  player.addImage(playerImg);
  player.scale=0.2;
}

function draw() {
  background("blue");  
  player.x=mouseX;
  if (bg.y<0){
    bg.y=height/2;
  }
 spawnEnemy();

  drawSprites();
}

function spawnEnemy(){
  if (World.frameCount%200==0){
    var enemy=createSprite (random(50,1250),0);
    enemy.velocityY=3;
    var rand=Math.round(random(1,3));
    switch(rand){ 
      case 1 :enemy.addImage(enemyImg1);
      enemy.scale=0.5;
      break ;
      case 2 :enemy.addImage(enemyImg2);
      enemy.scale=0.5;
      break ;
      case 3 :enemy.addImage(enemyImg3);
      enemy.scale=0.5;
      break ;
      default : break;
    } 
 }
}