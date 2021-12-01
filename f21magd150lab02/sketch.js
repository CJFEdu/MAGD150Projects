let starPoints = [];
let starSize = [];
let tailPoints = [];

function setup() {
  createCanvas(500, 500);
  
  //Store random locations so they are redrawn in same location
  for(let x = 0; x < 150; x++){
    let xLocation = random(500);
    let yLocation = random(500);
    append(starPoints, createVector(xLocation, yLocation));
    append(starSize,random(6));
  }
  append(tailPoints,createVector(50,80));
  append(tailPoints,createVector(100,100));
  append(tailPoints,createVector(100,70)); 
}

function draw() {
  colorMode(RGB);
  background(26,26,51);
  
  
  
  //Stars
  colorMode(HSB);
  stroke(64,29,100);
  for(let x = 0; x < starPoints.length; x++){
    strokeWeight(starSize[x]);
    point(starPoints[x].x,starPoints[x].y);
  }
  
  
  //Comet
  colorMode(HSL);
  let haloStart = createVector(350,260);
  let haloEnd = createVector(70,70);
  let haloIt = 10;
  let tailOffset = 5;
  
  
  noStroke();
  fill(64, 100, 93);
  for(let i = 0; i < tailPoints.length; i++){
    
  triangle(
    haloStart.x-tailOffset,
    haloStart.y-tailOffset,
    haloStart.x+tailOffset,
    haloStart.y+tailOffset,
    haloStart.x+tailPoints[i].x,
    haloStart.y-tailPoints[i].y);
  }
  
  colorMode(RGB);
  ellipseMode(CENTER);
  strokeWeight(2);
  stroke(255, 225, 143);
  noFill();
  
  for(let x = 0; x < haloIt; x++){
    arc(haloStart.x+x,haloStart.y-x,haloEnd.x,haloEnd.y,QUARTER_PI,PI+QUARTER_PI,OPEN);
  }
  noStroke();
  fill(133, 55, 0);
  ellipse(haloStart.x-(haloIt/2),haloStart.y+(haloIt/2),haloEnd.x/2,haloEnd.y/2);
  
  //Planet
  noStroke();
  fill(194, 251, 255);
  ellipse(0,500,400);
  
  //Satellite
  let satelliteStart = createVector(230,90);
  let satelliteOffset = createVector(20,50)
  push();
  strokeWeight(2);
  stroke(0);
  translate(satelliteStart.x,satelliteStart.y);
  rectMode(CORNER);
  rotate(PI * .9);
  fill("#343c3d");
  rect( (satelliteOffset.x*4)+5, satelliteOffset.y*-.5, satelliteOffset.x*2-10, satelliteOffset.y*2);
  fill(222, 227, 227);
  beginShape(QUAD_STRIP);
  for(let i = 0; i < 5; i++){
    vertex((i*satelliteOffset.x), 0);
    vertex((i*satelliteOffset.x), satelliteOffset.y);
  }
  endShape();
  beginShape(QUAD_STRIP);
  for(let i = 0; i < 5; i++){
    vertex(satelliteOffset.x*6+(i*satelliteOffset.x), 0);
    vertex(satelliteOffset.x*6+(i*satelliteOffset.x), satelliteOffset.y);
  }
  endShape();
  pop();
}