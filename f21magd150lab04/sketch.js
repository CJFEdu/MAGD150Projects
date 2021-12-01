crustArray = [];
toppingsArray = [];
globalSpeed = 5.4;
pizzaRadius = 70;
toppingRadius = 10;
currentTopping = 0;

class Topping{
  
  constructor(startX,startY,parent){
    this.x = startX;
    this.y = startY;
    this.radius = toppingRadius;
    this.topping = currentTopping;
    this.parent = parent;
  }
  
  onDraw(){
    let baseX = this.parent.x;
    let baseY = this.parent.y;
    if(this.topping == 0){
      ellipseMode(CENTER);
      noStroke();
      fill(255,20,20);
      ellipse(this.x+baseX, this.y+baseY, this.radius*2, this.radius*2);
    }else if(this.topping == 1){
      ellipseMode(CENTER);
      noStroke();
      fill(240);
      ellipse(this.x+baseX, this.y+baseY, this.radius*2, this.radius*2);
    }
  }
}

class Crust{
  constructor(){
    this.x = random(40,width-40);
    this.y = pizzaRadius * -1;
    this.live = true;
    this.radius = pizzaRadius;
    this.speed = globalSpeed*.3;
    this.toppings = [];
  }
  
  onDraw(){
    fill( 255, 209, 154 );
    noStroke();
    this.y = this.y + this.speed;
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }
  
  addPepperoni(){
    this.toppings.push(new Topping(mouseX - this.x,mouseY - this.y));
  }
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  if(frameCount % 90 == 1){
    crustArray.push(new Crust());
  }
  for(i = crustArray.length - 1; i >= 0; i--){
    if(crustArray[i].y > height + pizzaRadius){
       crustArray.splice(i,1);
    }else{
      crustArray[i].onDraw();
    }
  }
  for(i = toppingsArray.length - 1; i >= 0; i--){
    if(toppingsArray[i].y > height + pizzaRadius){
       toppingsArray.splice(i,1);
    }else{
      toppingsArray[i].onDraw();
    }
  }
}

function mousePressed() {
  for(i = 0; i < crustArray.length;i++){
    if(dist(mouseX,mouseY,crustArray[i].x,crustArray[i].y) <= pizzaRadius - toppingRadius){
       //crustArray[i].addPepperoni();
      toppingsArray.push(new Topping(mouseX - crustArray[i].x,mouseY - crustArray[i].y, crustArray[i]));
     }
  }
}

function keyPressed() {
  if(keyCode == 49){
    currentTopping = 0;
  }else if(keyCode == 50){
    currentTopping = 1;
  }
}