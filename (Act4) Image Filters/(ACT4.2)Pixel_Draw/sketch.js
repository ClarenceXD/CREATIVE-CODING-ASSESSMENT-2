var img;
var x
var y
function preload() {

img = loadImage("image.png");
}

function setup() {
  createCanvas(400, 400);
  //load img
  image(img, 0, 0, img.width, img.height);
  background(0);
}

function draw() {
}


function mouseDragged(){
  if (mouseButton === LEFT){
    
  //gets a point 50px around mouse
  x = mouseX + random(-25, 25);
  y = mouseY + random(-25, 25);
  //gets the color of the random point
  var color = img.get(x,y);
  
  strokeWeight(0)
  fill(color[0], color[1], color[2], 150)
  ellipse(x,y,7.5)
    
  }
}

//I wanted the users to feel as if they were drawing the image slowly as they moved they mouse