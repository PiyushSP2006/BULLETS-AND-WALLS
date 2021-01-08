var bullet,wall;
var speed,weight,


function setup() {
  createCanvas(1600,400);

  bullet=createSprite(200, 200, 50, 50);

  speed=Math.round(random(220,305));
  weight=Math.round(random(30,52));

  thickness=Math.round(random(30,60));
}

function draw() {
  
  background("black"); 
  wall=createSprite(1500,200,thickness,25);
  bullet.velocityX=speed;

  if(collide(bullet,wall)){

    var deformation=0.5*weight*speed^2/thickness^3;

    if(deformation>10){
      bullet.shapeColor=color(225,0,0);
    }

    if(deformation<50 && deformation>10){
      bullet.shapeColor=color(230,230,0);
    }

  }
  drawSprites();
}