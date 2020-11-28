class Paper{
    constructor(x, y,radius) {
     var options = {
          
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Matter.Bodies.circle(x, y, 10,options);
     this.width = 10;
     this.height = 10;
      
     World.add(world, this.body);
    }
   display(){

     
     var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("red");
      ellipse(0,0, this.width, this.height);
      pop();
    }
  };
  