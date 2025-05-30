var img;

function preload() {

img = loadImage("image.png");
}

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  image(img, 0, 0, img.width, img.height);
  
  var color = get(mouseX, mouseY);
  strokeWeight(0)
  fill(color)
   heart(mouseX,mouseY+20)
}


function heart(x,y){
  beginShape()
  vertex(x,y)
  bezierVertex(x + 60,y - 30,  x,y-60,  x,y-30)
  endShape()
  beginShape()
  vertex(x,y)
  bezierVertex(x - 60,y - 30,  x,y-60,  x,y-30)
  endShape()
}