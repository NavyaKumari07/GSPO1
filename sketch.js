var wall,car,speed,weight;
var color,border1,border2,border3,border4;

function setup() {
  createCanvas(600,400);

  //the car
  car=createSprite(100,100,50,50);
  car.shapeColor = color("green");
car.debug = true;
car.visible = true;

  //the wall
  wall=createSprite(500,200,50,350);
  wall.shapeColor=color("violet");
wall.debug = true;
wall.visible = true;

border1=createSprite(300,2,600,5);
border1.shapeColor=color("blue");

border2=createSprite(2,200,5,400);
border2.shapeColor=color("blue");

border3=createSprite(300,396,600,5);
border3.shapeColor=color("blue");

border4=createSprite(597,200,5,400);
border4.shapeColor=color("blue");

  speed=random(55,90);
  weight=random(400,1500);

 
}


function draw() {
  background("lightBlue");  

  fill("black");
  textSize(20);

  car.velocityX=speed;

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=(0.5 * weight * speed* speed)/22509;
    if(deformation>180)
    {
      car.shapeColor=color(230,230,0);
    }
  
    
    if(deformation<180 && deformation>100) {
    car.shapeColor=color(230,230,0); 
  }
    
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
    }
  

  drawSprites();
  text("My Wall",400,200);
text("CHECKING THE CRASHING",150,30);
}
