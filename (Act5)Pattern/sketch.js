var size = 20
var Rcolor1 = 0
var Rcolor2 = 0
var Rcolor3 = 0
function setup() {
  createCanvas(600, 600);
    background(220);
  frameRate(24)
}

function draw() {
    for (var j = 0;j<width+100;j = j + size){/*left to right*/
      
      for (var i = 0;i<height;i = i + size){/*top to down*/
        
        Rcolor1 = random(155)
        Rcolor2 = random(225)
        Rcolor3 = random(190)
        
        
        noStroke()
        fill(Rcolor1+75*sin(frameCount/12),
             Rcolor2+100*sin(frameCount/8),
             Rcolor3+100*sin(frameCount/8))
        
        beginShape()
        vertex(-100+j,0+i)
        vertex(0+j,100+i)
        vertex(100+j,0+i)
        endShape()
        
      }}


}

