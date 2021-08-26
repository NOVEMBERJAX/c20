var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600, 400, 50, 50);
fixedrect.shapeColor="green";
movingrect= createSprite(400,400,100,50);
movingrect.shapeColor="green";
movingrect.velocityX=5;
fixedrect.velocityX=-5
}

function draw() {
  background(255,255,255);
  //movingrect.x=World.mouseX;
  //movingrect.y=World.mouseY;
  console.log(movingrect.x-fixedrect.x)
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2){
      movingrect.velocityX=movingrect.velocityX*(-1);
      fixedrect.velocityX=fixedrect.velocityX*(-1)
    }
    if(movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.velocityY=movingrect.velocityY*(-1);
      fixedrect.velocityY=fixedrect.velocityY*(-1)
  }
  drawSprites();
}