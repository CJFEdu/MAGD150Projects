let rButton;
let cButton;
let newTV;
let ls;

class TV{
  
  constructor(){
  }
  
  onDraw(){
    rectMode(CENTER);
    fill(100);
    rect(width/2, height/2, width-125, height-175);
    fill(230);
    rect(width/2, height/2, width-150, height-200,30);
  }
}

class circleButton{
  
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color(60,200,20);
    this.hover = color(30,150,0);
  }
  
  onDraw(){
    ellipseMode(CENTER);
    if(this.mouseOver()){
      fill(this.hover);
    }else{
      fill(this.color);
    }
    ellipse(this.x, this.y, this.r*2, this.r*2);
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text('ON', this.x, this.y);
  }
  
  mouseOver(){
    if(dist(this.x,this.y,mouseX,mouseY) <= this.r){
      return true;
    }
    return false;
  }

}

class loadingScreen{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.roffset = 0;
    this.rcount = 0;
    this.on = false;
  }
  onDraw(){
    if(this.on){
      push();

      ellipseMode(CENTER);
      translate(this.x,this.y);
      rotate(PI * this.roffset);
      for(let i = 0; i < 10; i++){
        fill(150 + i * 10);
        rotate(PI * .2);
        ellipse(40, 0, 10, 10);
      }

      this.rcount += 1;
      if(this.rcount % 4 == 0){
        this.roffset = this.roffset + .2;
      }
      pop();
    }
  }
}

class rectangleButton{
  
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color(200,50,0);
    this.hover = color(180,20,0);
  }
  
  onDraw(){
    rectMode(CENTER);
    if(this.mouseOver()){
      fill(this.hover);
    }else{
      fill(this.color);
    }
    rect(this.x,this.y,this.w,this.h);
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text('OFF', this.x, this.y);
  }
  
  mouseOver(){
    if(abs(this.x - mouseX) <= this.w && abs(this.y - mouseY) <= this.h){
      return true;
    }
    return false;
  }
}


function setup() {
  createCanvas(400, 400);
  newTV = new TV();
  cButton = new circleButton(100,350,30);
  rButton = new rectangleButton(300,350,80,60);
  ls = new loadingScreen(200,200);
}

function draw() {

  background(245);
  newTV.onDraw();
  cButton.onDraw();
  rButton.onDraw();
  ls.onDraw();
}

function mousePressed() {
  if(cButton.mouseOver()){
    ls.on = true;
  }
  if(rButton.mouseOver()){
    ls.on = false;
  }
}