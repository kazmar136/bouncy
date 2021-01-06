const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world, ground, ball
function setup() {
  var canvas=createCanvas(400,400);
  engine=Engine.create()
  world=engine.world

  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,50,options)
  World.add(world,ground)
  console.log(ground.position.y)
  var ballnew={
    restitution:1.1
  }
  ball=Bodies.circle(100,300,50,ballnew)
  World.add(world,ball)
}

function draw() {
  background(0);  
Engine.update(engine)
fill("red")
  var pos=ground.position
  rectMode(CENTER)
  rect(pos.x,pos.y,400,50)
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,50,50)
}