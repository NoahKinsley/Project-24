
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

ground = new Line(400,680,800,10);
ground.shapeColor = ("yellow");	

box1 = new Line(600,620,15,100);
box2 = new Line(680,660,150,15);
box3 = new Line(750,620,15,100);

paper = new Ball(100,650,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ground.display();
	box1.display();
	box2.display();
	box3.display();

	paper.display();

keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyWentDown("UP_ARROW")){
Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
	}
}



