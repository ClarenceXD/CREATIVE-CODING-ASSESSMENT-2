/*will auto play audio*/

var size = 20
var s1;
var amplitude;

function preload(){
  s1 = loadSound("Ado - Usseewa compressed.mp3")
}


function setup() {
  createCanvas(450, 450);
  ellipseMode(CENTER)
  rectMode(CENTER)
  s1.setVolume(0.5)
   s1.play()
  amplitude = new p5.Amplitude();/*gets the volume of p5 whole*/
}

function draw() {
  stroke(10,100,200);
  strokeWeight(1);
  micLevel = amplitude.getLevel(); 
  /*controls bob-ing ;D 0.5 is wave*/
  let bob = sin(frameCount * 0.5) * micLevel * 75;
  /*map 0.3 = 100, 0 = 200 */
  let bgchange = map(micLevel, 0, 0.3, 200, 100); 
  background(bgchange/1.3, bgchange * 1.1, 255); 

  
  /*floor*/
  fill(193, 95, 47)
  rect(225,135,400,100)
  
  /*speaker*/
  fill(0)
  rect(75,155,35)
  fill(111)
  ellipse(75,155+ bob/12,15)
  
  fill(0)
  rect(375,155,35)
  fill(111)
  ellipse(375,155+ bob/12,15)
  
  /*MAin*/
  fill(40, 28, 180)
  ellipse(225,115 + bob/24,27.5)
  
  /*mic stand etc*/
  
  strokeWeight(1.5);
  line(225,125,225,175)
  strokeWeight(1);
  fill(111)
  ellipse(225,125,5)
  
  
  
  for (var j = 0;j<width;j = j + 30){/*left to right*/
      
      for (var i = 0;i<height;i = i + size){/*top to down*/
        strokeWeight(1);
        fill(200)
        ellipse(15+j,215+i + bob,30)
        
      }}
  drawLightning();
}

function drawLightning() {
  if (random(1) < 0.1) { /*change for lighting*/
    let x = random(width);
    stroke(255, 255, 0);
    strokeWeight(2);
    noFill();

    beginShape();
    let y = 0;
    vertex(x, y);/*starting point*/
    
    /*controls down movement*/
    for (let i = 0; i < 10; i++) {
      x += random(-10, 10); 
      y += 15; // distance downwards
      vertex(x, y);
    }
    endShape();
  }
}



