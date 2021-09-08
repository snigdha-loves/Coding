var box
function setup() {
  createCanvas(1900,850);
  box = createSprite (200,200,30,30)
  box.shapeColor = "white"
}

function draw() 
{
  background(30);
  
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 5
  }

  if (keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 5
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y + 5
  }

  if (keyIsDown(UP_ARROW)) {
    box.position.y = box.position.y - 5
  }

drawSprites ()
}