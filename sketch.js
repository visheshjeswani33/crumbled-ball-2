
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bar, ground, paperball, bin;

function preload(){

 dustbingreenIMG= loadImage("dustbingreen.png")
 paperIMG= loadImage("paper.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

 //Create the Bodies Here.
  
  bin = new Bin(700,570,100,140);

  paperball= new Ball(100,500,70)
  ground = new Ground(600,650,1200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  drawSprites();

  paperball.display();
  ground.display();
  bin.display();
 
 }

 function keyPressed() {

 if (keyCode === UP_ARROW) {

 Matter.Body.applyForce(paperball.body, paperball.body.position,{x:100,y:-110});

 }
 }