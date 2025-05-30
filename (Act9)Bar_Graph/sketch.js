/*Data is from = https://steamcharts.com/app/493520
numbers is an array containing the values*/
var numbers = [714, 1335, 909, 642, 1292, 956,743,1446,1085,699,1438,1174  ];

function setup() {

  createCanvas(400, 400);
  colorMode(HSB)
 


}


function draw() {
  
  /*sets the*/
  let barWidth = width / numbers.length;
  background(220);
  textSize(16)
  text('Stean Charts for GTFO',50,15)
  
  /*calculation to find player count undermouse*/
  text( 'Players: ' + (-mouseY+400)*4,50,35)
   textSize(10)

  /*for loop to go thur each array*/
  for (var i = 0; i< numbers.length; i = i + 1){
    /*sets n as the current number*/
    var n = (numbers[i]/4); /*divide to affect height*/
    
    /*creates text over 3 bar and so on...*/
    if (i <= 2) {/*May 1*/
      fill(135,155,255)
      if (i == 0){
      text("May 1" + "\n 12pm",i * barWidth,height-n-20)}
      if (i == 1){
      text("May 1" + "\n 6pm",i * barWidth,height-n-20)}
      if (i == 2){
      text("May 1" + "\n 11pm",i * barWidth,height-n-20)}
    }
    else if(i <=5){ /*May 2*/
      fill(50,255,255)
      if (i == 3){
      text("May 2" + "\n 12pm",i * barWidth,height-n-20)}
      if (i == 4){
      text("May 2" + "\n 6pm",i * barWidth,height-n-20)}
      if (i == 5){
      text("May 2" + "\n 11pm",i * barWidth,height-n-20)}
    }
    else if(i<=8){
      fill(200,100,130)
      if (i == 6){
      text("May 3" + "\n 12pm",i * barWidth,height-n-20)}
      if (i == 7){
      text("May 3" + "\n 6pm",i * barWidth,height-n-20)}
      if (i == 8){
      text("May 3" + "\n 11pm",i * barWidth,height-n-20)}
    }
    else if(i<=11){
      fill(10,140,200)
      if (i == 9){
      text("May 4" + "\n 12pm",i * barWidth,height-n-20)}
      if (i == 10){
      text("May 4" + "\n 6pm",i * barWidth,height-n-20)}
      if (i == 11){
      text("May 4" + "\n 11pm",i * barWidth,height-n-20)}
    }
    else{fill(255)}
    
    /*creates bars*/
    rect(i * barWidth, height - n, barWidth, n);

    
  }
  findmouse()
}

/*Function used cross over mouse*/
function findmouse(){
  line(mouseX,mouseY,mouseX+800,mouseY)
  line(mouseX,mouseY,mouseX,mouseY+800)
  line(mouseX,mouseY,mouseX-800,mouseY)
  line(mouseX,mouseY,mouseX,mouseY-800)
}


/*
May1
12:714
18:1335
23:909

May2
12:642
18:1292
23:956

May3
12:743
18:1446
23:1085

May4
12:699
18:1438
23:1174
*/