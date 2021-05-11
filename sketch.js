const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var piggy1;
var log1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(900,320,70,70);
    ground = new Ground(600,height,canvas.width,20)
    piggy1= new Piggy(800,320)
    log1= new Log(800,300,300,PI/2);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    piggy1.display();
    log1.display();
}