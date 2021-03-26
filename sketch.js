var  car, wall,weight,speed,thickness;

function setup() {
  createCanvas(1600,400);
 
   thickness = random(22,83)
   
  speed=random(223,321);
  weight=random(30,52);

  car = createSprite(50, 200, 50, 20);
  wall = createSprite(1200,200,thickness,height/2);  

}

function draw() {
  background('black');  
   
   wall.shapeColor=color(80,80,80);
   car.shapeColor='white';
   car.velocityX = speed;

  

      if(hasCollided(car,wall))
      {
        car.velocityX = 0;
        var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
        
        if(damage<10){
          wall.shapeColor="green";
        }

        if(damage>10){
          wall.shapeColor="red";
        }

      }


  drawSprites();
}

function hasCollided(lcar,lwall) {
    
     carRightEdge=lcar.x + lcar.width;
     wallLeftEdge=lwall.x;
     if(carRightEdge>=wallLeftEdge)
      {
        return true
      }
        return false;
}





