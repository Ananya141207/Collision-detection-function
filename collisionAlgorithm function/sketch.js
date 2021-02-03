var fixedRect, movingRect; 
var gameObject1,gameObject2,gameObject3,gameObject4;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "yellow";
  gameObject2 = createSprite(100,200,50,50);
  gameObject2.shapeColor = "blue";
  gameObject3 = createSprite(100,300,50,50);
  gameObject3.shapeColor = "pink";
  gameObject4 = createSprite(100,450,50,50);
  gameObject4.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if( isTouching(movingRect,gameObject1)){
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
gameObject1.shapeColor = "yellow";
}

 
  drawSprites();
}


