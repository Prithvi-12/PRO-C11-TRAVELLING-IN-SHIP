var ship ,ship_running;
var sea,seaImage;  
function preload(){
 
  ship_running=loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  

  sea = createSprite(200,180,400,20)
   sea.addImage(seaImage);
   sea.scale=0.5;

   ship=createSprite(130,200,30,30);
    ship.addAnimation("running",ship_running);
    ship.scale=0.25;
}

function draw() {
  background("blue");
sea.velocityX = -3


if(sea.x<0){
  sea.x = sea.width/8
 }


//  ship.velocityY=ship.velocityY+0.5;
//  ship.collide(sea);

 drawSprites();
}
