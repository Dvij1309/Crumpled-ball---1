
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball;
var dustbin1;
var dustbin2;
var dustbin3;
var ground;

function preload() {

}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ball = new Ball(300, 0, 40);
  dustbin1 = new DustBin(249, 530, 15, 50);
  dustbin3 = new DustBin(383, 530, 15, 50);
  dustbin2 = new DustBin(316, 565, 150, 15);
  Engine.run(engine);

  ground = new Ground(400, 600, 800, 50);


}


function draw() {

  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  drawSprites();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body, ball.body.position, { x: 85, y: -85 });

  }

}



