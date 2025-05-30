function setup() {
  createCanvas(400, 400);
  background(15);
  rectMode(CENTER)
  angleMode(DEGREES)
  noLoop()
}

function draw() {
  
  translate(width/2,height/2)
  fill(128,0,0)
  ellipse(0,0,225,275)
  fill(0, 128, 0)
  /*right eye */
  push()
  translate(70,0)
  rotate(-30)
  ellipse(0,-55,45,20)
  ellipse(0, -15,45,20)
  pop()
  /*left eye */
  push()
  translate(-70,0)
  rotate(30)
  ellipse(0,-55,45,20)
  ellipse(0, -15,45,20)
  pop()
  
  /*mouth*/
  fill(80,0,0)
  noStroke()
  rect(0,45,150,30)
  fill(255)
  
  /*Teeth*/
  beginShape();
  vertex(-75, 30);
  vertex(-75, 60);
  vertex(75, 60);
  vertex(75, 30);
  vertex(55, 50);
  vertex(-55, 50);
  endShape();
  
  /*Top head*/
  beginShape();
  fill(0)
  vertex(20, -137);
  vertex(15, 30);
  vertex(-15, 30);
  vertex(-20, -137);
  endShape();
  
  /*bottom head*/
  beginShape();
  fill(0)
  vertex(40, 138);
  vertex(40, 60);
  vertex(-40, 60);
  vertex(-40, 138);
  endShape();
}
