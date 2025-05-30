//Mouse1 horn1, Mouse3 horn2
function preload(){
  horn1 = loadSound("Clown_Horn.mp3")
  horn2 = loadSound("horn2.mp3")
}

function setup() {
  createCanvas(400, 400);
    horn1.setVolume(0.5)
    horn2.setVolume(0.25)
}

function draw() {
  background(195);
  strokeWeight(1)
  fill(128,128,128)
  ellipse(125,360,35)
  ellipse(170,360,35)
  ellipse(275,360,35)
  fill(0, 95, 200)
  rect(100,300,200,60,0,0,5,10)
  fill(90,175,225)
  rect(255,300,45,30)
  fill(225,225,225)
  
  /*door and handle*/
  rect(190,300,45,60)
  rect(212.5+7.5,327.5,10,5)
  rect(212.5-17.5,327.5,10,5)
  rect(210,327.5-15,5,10)
  rect(210,327.5+10,5,10)
  /*Door also but the turning thing :D*/
  fill(225,225,225)
  ellipse(212.5,330,15)
  
  rect(115,260,4.5,40)
  rect(119.5,260,25,15)
  fill(255, 0, 0)/*red*/
  strokeWeight(0)
  rect(119.5,260,7.5,15)
  fill(0, 151, 57) /*green*/
  rect(119.5+7.5,260,17.5,5)
  fill(255, 255, 255) /*white*/
  rect(119.5+7.5,265,17.5,5)
  fill(0, 0, 0) /*black*/
  rect(119.5+7.5,270,17.5,5)
  
  
  /*NOW A REAL ONE I THINK */
  strokeWeight(0)
  fill(128,128,128)
  ellipse(225+15,115,30)
  ellipse(121+15,115,30)
  fill(0,23,150)
  rect(110,51,156,64)
  
  
  
  strokeWeight(0)
  fill(195)
  rect(231,51,35,25,0,0,0,0)
  rect(110,51,35,25,0,0,5,0)
  
  strokeWeight(1)
  fill(212,208,200)
  rect(150,52,30,25,0,0,0,0)
  rect(197,52,30,25,0,0,0,0)
  
  fill(0)
  line(185,52,185,114)
  rect(210,85,15,5)
  rect(165,85,15,5)
  
  
  
  /*Another one ;p*/
  push()
  fill(255)
  translate(0,-30)
  beginShape();
  vertex(100,250)
  bezierVertex(200,200,265,200,295,250)
  ellipse(150,250,30,30);
  ellipse(250,250,30,30);
  endShape();

  line(200,230,276,230) //X
  line(200,230,200,214) //Y
  ellipse(202,230,10,10);
  ellipse(215,218,9,3);  //glint i guess :D
  
  pop()
  
}

function mousePressed(){
  if (mouseButton === LEFT){
     horn1.play()
  }
    if (mouseButton === RIGHT){
     horn2.play()
  }
}