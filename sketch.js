var runningImg,standImg,bgImg;
var naruto,bg;
var stone, stoneImg;
var pCoins,pCoinsImg;
var sCoin, sCoinImg
var frog,frogImg
var noodles,noodlesImg;
var gameState = "play";
var ground;
var stoneGroup;
var score;
function setup() {
  createCanvas(1100,400);
  bg = createSprite(500,200,1100,400);
  bg.addImage("bg",bgImg);
  bg.scale=1.4;
  bg.velocityX = 0;
  ground = createSprite(550,350,1100,20);
  naruto = createSprite(250,275,20,20);
  naruto.scale = 2.5
  naruto.addImage("stand",standImg)
  naruto.addAnimation("Naruto",runningImg);
  ground.visible = false;

  stoneGroup = createGroup();
}

function preload(){
runningImg = loadAnimation("run1.png","run2.png","run3.png","run4.png");
standImg = loadImage("stand.png");
bgImg = loadImage("bg.png");
stoneImg = loadImage("stone.png");
pCoinsImg = loadImage("pile_of_coins.png");
noodldesImg = loadImage("noodles.png");
frogImg = loadImage("gamakichi.png");
sCoinImg = loadImage("1_coin.png");



}

function draw() {
  background("black");

  naruto.collide(ground);
 
if(gameState==="play"){
  if(bg.x<500){
    bg.x = 550
    
      }
 
    bg.velocityX = -1;
    naruto.changeAnimation("Naruto",runningImg);

    if(keyDown("space") && naruto.y>=110){
    naruto.velocityY = -3
    } 
  naruto.velocityY = naruto.velocityY+0.5
  spawnStones();
  if(stoneGroup.isTouching(naruto)){
     gameState = "end";
     
  }
  drawSprites();
}

if(gameState==="end"){
  stoneGroup.destroyEach();
    background("black");
    textSize(35);
    fill("orange")
    stroke("orange")
    text("Game Over",500,200);
    text("Refresh page to restart",420,250)
}
}

function spawnStones(){
  if(frameCount%50 === 0){
  stone = createSprite(1120,325,10,10);
  stone.addImage("stone",stoneImg);
  stone.velocityX = -2;
  stone.scale = 0.15;
  stone.lifetime = 1100/2;
  stoneGroup.add(stone)
  }
}
