/*Press e to save
Press r to reset*/


var change = () => {};
var colors = [255, 0, 0];

function setup() {
  createCanvas(500, 500);
  background(220);
  textSize(16)
  rectMode(CENTER)
  textAlign(CENTER, CENTER)
}

function draw(){
    stroke(0)
  
  fill(250)
  rect(100,475,100,35)
  fill(0)
  text('Heart♥',100,475)
  
  fill(250)
  rect(250,475,100,35)
  fill(0)
  text('Star★',250,475)
  
  fill(250)
  rect(400,475,100,35)
  fill(0)
  text('Diamond◆',400,475)
  
  /*RED*/
  fill(225,0,0)
  rect(35,35,45)
  
  /*GREEN*/
  fill(0,225,0)
  rect(35,100,45)
  
  /*BLUE*/
  fill(0,0,225)
  rect(35,165,45)

  
}

function mouseDragged() {
  
  if (mouseButton === LEFT) {
    /*heart*/
    if ((mouseX > 50) && (mouseX < 150) &&
	    (mouseY > 457.5) && (mouseY < 492.5)) {
      change = () => heart(mouseX, mouseY+20);
    }
    /*star*/
    else if ((mouseX > 200) && (mouseX < 300) &&
	    (mouseY > 457.5) && (mouseY < 492.5)) {
      change = () => drawStar(mouseX, mouseY);
    }
    /*diamond*/
    else if ((mouseX > 350) && (mouseX < 450) &&
	    (mouseY > 457.5) && (mouseY < 492.5)) {
      change = () => diamond(mouseX, mouseY);
    }
    /*RED*/
    else if ((mouseX > 12.5) && (mouseX < 57.5) &&
	    (mouseY > 12.5) && (mouseY < 57.5)) {
      colors = [255, 0, 0];
    }
    /*GREEN*/
    else if ((mouseX > 12.5) && (mouseX < 57.5) &&
	    (mouseY > 77.5) && (mouseY < 122.5)) {
      colors = [0, 255, 0];
    }
    /*BLUE*/
    else if ((mouseX > 12.5) && (mouseX < 57.5) &&
	    (mouseY > 142.5) && (mouseY < 187.5)) {
      colors = [0, 0, 255];
    }
    else {
      fill(colors)
      change(); 
    }
    
    
  }
    if (mouseButton === RIGHT){
        findmouse()
    }
}

 
function keyPressed(){
  if (key === 'e'){
    saveCanvas("stickers.png")
  }
  if (key === 'r'){
    background(220)
  }
}

/*heart(mouseX,mouseY+20)*/
/*drawStar()*/
/*diamond()*/


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

function diamond(){
  beginShape()
  vertex(mouseX,mouseY+20)
  vertex(mouseX+20,mouseY)
  vertex(mouseX,mouseY-20)
  vertex(mouseX-20,mouseY)
  vertex(mouseX,mouseY+20)
  endShape()
}



function drawStar() {
  beginShape();
  vertex(mouseX, mouseY - 20);
  vertex(mouseX + 6, mouseY - 6);
  vertex(mouseX + 20, mouseY - 6);
  vertex(mouseX + 9, mouseY + 3);
  vertex(mouseX + 13, mouseY + 18);
  vertex(mouseX, mouseY + 9);
  vertex(mouseX - 13, mouseY + 18);
  vertex(mouseX - 9, mouseY + 3);
  vertex(mouseX - 20, mouseY - 6);
  vertex(mouseX - 6, mouseY - 6);
  vertex(mouseX, mouseY - 20);
  endShape();
}

function findmouse(){
  stroke(mouseX/1.5,mouseY/2,mouseX - mouseY)
    line(mouseX+800,mouseY,mouseX-800,mouseY)
    line(mouseX,mouseY+800,mouseX,mouseY-800)


}