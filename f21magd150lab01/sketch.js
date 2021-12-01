let starPoints = [];
let grassStart = [];
let grassEnd = [];

function setup() {
  createCanvas(500, 500);
  
  //Store random locations so they are redrawn in same location
  for(let x = 0; x < 100; x++){
    let xLocation = random(500);
    let yLocation = random(300);
    append(starPoints, createVector(xLocation, yLocation));
  }
 for(let x = 0; x < 200; x++){
    let xLocation = random(500);
    let yLocation = random(200);
    append(grassStart, createVector(xLocation, yLocation+300));
    let xOffset = random(20);
    let yOffset = random(10);
    append(grassEnd, createVector(xLocation+xOffset-10, yLocation+290-yOffset));
  }
  
}

function draw() {
  background(50);
  
  //Ground
  rectMode(CORNER);
  noStroke();
  fill(90);
  rect(0, 300, 500, 200);
  
  //Stars
  strokeWeight(5);
  stroke(255);
  for(let x = 0; x < starPoints.length; x++){
    point(starPoints[x].x,starPoints[x].y);
  }
  
  //Grass
  strokeWeight(3);
  stroke(255);
  for(let x = 0; x < grassStart.length; x++){
    line(grassStart[x].x,grassStart[x].y,grassEnd[x].x,grassEnd[x].y);
  }
  
  //Moon
  noStroke();
  fill(240);
  ellipse(400,100,100);
  
  //Roof
  strokeWeight(2);
  stroke(100);
  fill(150);
  ellipse(250,200,200);
  noFill();
  for(let x = 0; x < 5; x++){
    ellipse(250,200,x*40,200);
  }
  
  //Building
  fill(200);
  rect(150, 200, 200, 200);
  
  //Door
  fill(75);
  rectMode(CORNERS);
  rect(225, 400, 275, 310);
  
  //Sidewalk
  fill(125);
  stroke(50);
  rect(215,400,285,500);
  
  //Sidewalk lines
  line(215,425,285,425);
  line(215,450,285,450);
  line(215,475,285,475);
  
  
}