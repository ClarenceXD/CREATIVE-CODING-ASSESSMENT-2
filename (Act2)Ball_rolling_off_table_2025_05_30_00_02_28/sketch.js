var counter = 0
var xCords = 30
var yCords = 150
var speeddrop = 1
var angle = 0

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  counter ++;
  
  //Table top
  fill(100,20,10)
  rect(15,165,240,35)
  
  rect(25,200,35,200)
  
  rect(210,200,35,200)
  fill(125,255,55)
  noStroke()
  
  push()
  translate(xCords,yCords)/*Makes the ball move left and down*/
  rotate(angle)
  arc(0, 0, 30, 30, 0, 180,PIE)/*Green Semi Circle*/
  fill(10,20,177)
  arc(0, 0, 30, 30, 180, 360,PIE)/*Blue Semi Circle*/
  angle +=2
  pop()
  
  //moved ball
  if (counter < 315){ xCords += 0.75} 
  //falling state
  else if (counter>315){ xCords += 0.5;
          xCords += speeddrop/4;
          yCords += speeddrop;
          speeddrop += 0.04 }


}