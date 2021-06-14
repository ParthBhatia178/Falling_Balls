
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle = 100;
var angle1 = 150;
var angle2 = 200;
var particle1;
var praticle2;
var particle3;
var particle4;
var particle5;
var particle6;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var plane_options={
	isStatic: true
	};

	var block1_options={
		isStatic: true
		};

    var block2_options={
		isStatic: true
		};

	var rotator1_options={
		isStatic: true
	};

	var rotator2_options={
		isStatic:true
	};

	var rotator3_options={
		isStatic:true
	};
		
	plane = Bodies.rectangle(400,690,800,10,plane_options);
	World.add(world,plane);

	block1 = Bodies.rectangle(150,450,200,10,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(650,450,200,10,block2_options);
	World.add(world,block2);
 
    rotator1 = Bodies.rectangle(400,300,250,20,rotator1_options);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(400,300,250,20,rotator2_options);
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(400,300,250,20,rotator3_options);
	World.add(world,rotator3);

    var particle_options = {
		restitution : 0.4,
		frictionAir : 0.02 
	}
      
	particle1 = Bodies.circle(400,10,10,particle_options);
	World.add(world,particle1);

	particle2 = Bodies.circle(400,10,10,particle_options);
	World.add(world,particle2);

	particle3 = Bodies.circle(400,10,10,particle_options);
	World.add(world,particle3);

	particle4 = Bodies.circle(400,10,10,particle_options);
	World.add(world,particle4);

	particle5 = Bodies.circle(400,10,10,particle_options);
	World.add(world,particle5);

	particle6 = Bodies.circle(400,10,10,particle_options);
	World.add(world,particle6);



	Engine.run(engine);
	rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() {

  Engine.update(engine);

  rectMode(CENTER);
  background("blue");
  
  Matter.Body.rotate(rotator1,angle)
  push();
  translate(rotator1.position.x,rotator1.position.y)
  rotate(angle)
  rect(0,0,110,20);
  pop();               
  angle +=1

  Matter.Body.rotate(rotator2,angle1)
  push();
  translate(rotator2.position.x,rotator2.position.y)
  rotate(angle1)
  rect(0,0,110,20);
  pop();               
  angle1 +=1

  Matter.Body.rotate(rotator3,angle2)
  push();
  translate(rotator3.position.x,rotator3.position.y)
  rotate(angle2)
  rect(0,0,110,20);
  pop();               
  angle2 +=1


  rect(plane.position.x,plane.position.y,800,10);
  rect(block1.position.x,block1.position.y,200,10);
  rect(block2.position.x,block2.position.y,200,10);
  ellipse(particle1.position.x,particle1.position.y,12)
  ellipse(particle2.position.x,particle2.position.y,12)
  ellipse(particle3.position.x,particle3.position.y,12)
  ellipse(particle4.position.x,particle4.position.y,12)
  ellipse(particle5.position.x,particle5.position.y,12)
  ellipse(particle6.position.x,particle6.position.y,12)
  
}



