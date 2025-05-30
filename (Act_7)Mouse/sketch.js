function setup() {
  createCanvas(400, 400);
   background(150);
}

function draw() {

  noStroke();
  fill(150, 40); //higher = faster fade out
   
  rect(0, 0, width, height);
  stroke(1)
  line(mouseX, mouseY+10, pmouseX, pmouseY+10);
  
drawmouse()
  
}

function drawmouse(){
  beginShape()
  stroke(0)
  fill(225)
  strokeWeight(0.5)
  
  vertex(mouseX,mouseY)
  vertex(mouseX,mouseY+13)
  vertex(mouseX+3,mouseY+13-5)
  vertex(mouseX+3+3,mouseY+13-5+6.5)
  vertex(mouseX+3+3+1,mouseY+13-5+6.5-0.5)
  vertex(mouseX+3+3+1-2,mouseY+13-5+6.5-0.5-6.5)
  vertex(mouseX+3+3+1-2+4,mouseY+13-5+6.5-0.5-6.5)
  vertex(mouseX,mouseY)
  endShape()
  
}