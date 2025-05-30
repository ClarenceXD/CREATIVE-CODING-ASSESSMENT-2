var img;
var v = 10;
function preload() {

img = loadImage("image.png");

}

function setup() {
  createCanvas(400, 400);
  textSize(22)
}

function draw() {

background(0);

image(img, 0, 0);

  
  
  v = (mouseX / width) * 20; /*max 20*/




filter(POSTERIZE, v); 
  
push();
fill(255, 0, 0);
text('Power: ' + v.toFixed(2), 30, 30);
pop();
  
}







