var angle = 0
var font;
var change = () => {};

function preload(){
  font = loadFont('BebasNeue-Regular.ttf'); // Load the font file

}


function setup() {
  createCanvas(1000, 1000);
  textAlign(CENTER,CENTER)
  textSize(50)
  angleMode(DEGREES);
  background(220)
frameRate(60)
}

function draw() {

  change();
  
  fill(220)
  rect(25,750,200,150) /*RGB*/
  fill(0)
  text('RGB',25+100,750+75)
  
  fill(220)
  rect(275,750,200,150)/*Swing*/
  fill(0)
  text('Swing(r)',275+100,750+75)
  
  fill(220)
  rect(525,750,200,150)/*Rot text*/
  fill(0)
  text('Rotate',525+100,750+75,)
  
  fill(220)
  rect(775,750,200,150)/*text drop*/
  fill(0)
  text('textdrop',775+100,750+75)
}


function mousePressed() {
  
  if (mouseButton === LEFT) {
    /*RGB*/
    if ((mouseX > 25) && (mouseX < 25+200) &&
	    (mouseY > 750) && (mouseY < 750+150)) {
   background(220)
      
      change = () => RGBtext()
    }
    
    /*Swing*/
    else if ((mouseX > 275) && (mouseX < 275+200) &&
	    (mouseY > 750) && (mouseY < 750+150)) {

         background(220)
      change = () => holdtostop()
    }
    /*rot text*/
    else if ((mouseX > 525) && (mouseX < 525+200) &&
	    (mouseY > 750) && (mouseY < 750+150)) {

         background(220)
      change = () => rotatetext()
    }
    /*text drop*/
    else if ((mouseX > 775) && (mouseX < 775+200) &&
	    (mouseY > 750) && (mouseY < 750+150)) {

         background(220)
      change = () => textdrop()
    }
    
    else {
       change = () => {};
      background(220)
    }
  }
}



function RGBtext(){

  

  push()
  translate(width/2,height/2)
  fill(100 + 125*sin(frameCount/1),
       100 + 125*sin(frameCount/0.20),
       100 + 125*sin(frameCount/0.55))
  text('I change colors :DDD',0,0)
  pop()

}


function rotatetext(){
  background(220)
  push()
  translate(width/2,height/2)
  rotate(angle)
  textFont('cursive')
  text('Rotate',0,0)
  pop()
  angle = angle + 5
}

function holdtostop(){
background(220)
  if (keyIsPressed && key === 'r'){
      push()
    
    fill(0)
  translate(width/2,height/2.5)/*Text pos*/
  rotate(55*sin(frameCount/0.1))
  text('I swing',0,200)
    
  pop()
  }
  else{
  push()
    fill(0)
  translate(width/2,height/2.5)/*Text pos*/
  rotate(55*sin(frameCount/1))
  text('I swing',0,200)
  pop()}
}

function textdrop(){
   textFont(font);
    
  if(keyIsPressed && key === 'e'){
    translate(0,450)
    fill(100 + 125*sin(frameCount/1),
       100 + 125*sin(frameCount/0.20),
       100 + 125*sin(frameCount/0.55))
    for (let i = 0; i < width; i += width/10){
      text('Up and Down :D (E)',85+i,50+ 475*sin(frameCount*2))
      
    }
  }
  
  else{
    background(220)
  text('Up and Down :D (E)',width/2,height/2)
}  
  
  textFont('sans-serif');
}

