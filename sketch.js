
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;

function setup() {
	createCanvas(800, 700);

   

	engine = Engine.create();
	world = engine.world;

	  
    leftside = createSprite(310,610,20,100);
    leftside.shapeColor = "red";
 
    rightside = createSprite(530,610,20,100);
    rightside.shapeColor = "red";
 
    centerside = createSprite(420,650,200,20);
    centerside.shapeColor = "red";
    

      ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
      World.add(world, ground);

	

	
     paper = new Paper(54,386,15);
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


 paper.display();



  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW)

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

}

