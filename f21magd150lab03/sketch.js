
let bubbles = [];
let globalSpeed = 5.4;


class Ball{
  constructor(initX, initY, startColor = color(5,5,5)){
    this.x = initX;
    this.y = initY;
    this.startX = this.x;
    this.startY = this.y;
    this.color = startColor;
    this.radius = 25;
    this.startFrame = frameCount;
    this.moving = false;
    this.targetX = 0;
    this.targetY = 0;
    this.speed = globalSpeed;
    
  }
  onDraw(){
    if(this.moving){
      let lerpAmount = ((frameCount-this.startFrame)*this.speed)/this.moveLength;
      this.x = lerp(this.startX,this.targetX,lerpAmount);
      this.y = lerp(this.startY,this.targetY,lerpAmount);
      if(this.x > width-40 || this.x < 40 || this.y > height-40 || this.y < 40){
        this.x = width/2;
        this.y = height/2;
        print("You hit a boundary");
      }
    }
    fill(this.color);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }
  
  updateTarget(newX, newY){
    this.startX = this.x;
    this.startY = this.y;
    this.targetX = newX;
    this.targetY = newY;
    this.moving = true;
    this.startFrame = frameCount;
    this.moveLength = dist(this.x,this.y,newX,newY);
  }
}

class Bubble{
  constructor(){
    this.x = random(40,width-40);
    this.y = height;
    this.live = true;
    this.radius = 25;
    this.speed = globalSpeed*.3;
  }
  
  onDraw(){
    fill(244);
    strokeWeight(4);
    stroke(0);
    this.y = this.y - (this.speed + this.speed*norm(sin(frameCount/5),-1,1));
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }
}

function setup() {
  frameRate(30);
  createCanvas(700, 600);
  aBall = new Ball(width/2,height/2);
  
}

function draw() {
  background(220);
  fill(150);
  aBall.onDraw();
  if(frameCount % 15 == 0){
    bubbles.push(new Bubble());
  }
  for(i = 0; i < bubbles.length;i++){
    if(dist(bubbles[i].x,bubbles[i].y,aBall.x,aBall.y) < bubbles[i].radius + aBall.radius){
      bubbles.splice(i,1);
      print("You got a bubble");
    }else if(bubbles[i].y < bubbles[i].radius){
      bubbles.splice(i,1);
    
    }else{
      bubbles[i].onDraw();
    }
  }
}

function mousePressed() {
  aBall.updateTarget(mouseX,mouseY);
}