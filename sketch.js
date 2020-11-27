var fixedRect, movingRect, gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(1000,300,20,80);
  gameObject1.shapeColor = "lightblue";

  gameObject2 = createSprite(800,700,100,20);
  gameObject2.shapeColor = "blue";

  gameObject3 = createSprite(100,200,100,100);
  gameObject3.shapeColor = "brown";

  gameObject4 = createSprite(800,300,80,100);
  gameObject4.shapeColor = "white";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,gameObject1)){
   movingRect.shapeColor = "red";
   gameObject1.shapeColor = "red";
 }

 else {
   movingRect.shapeColor = "green";
   gameObject1.shapeColor = "green";
 }

  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
}
else {
  return false;
}
}