
function preload(){
   seaImg = loadImage("sea.png");
   shipImg1 = loadImage("ship-1.png");
}

function setup(){
  createCanvas(400,400);
  
  ship = createSprite(200,200)
  ship.addImage(shipImg1);
  
  spriteName = createSprite(200,200)
  spriteName.addImage(seaImg);
  spriteName.velocityX = 2;
  
}

function draw() {
  background(spriteName);

  if(sea.x < 0){
     sea.x = sea.width/2;
  }
 
}