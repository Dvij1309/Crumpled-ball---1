class Ball{
 constructor(x,y,radius){
    var options ={
     isStatic: false,
     'restitution': 0.1,
     'friction':5,
     'density':1.2

    }
    this.body = Bodies.circle(x,y,radius,options,1);
    this.radius = radius;
    
    World.add(world,this.body);

 }
 display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    strokeWeight(4);
    stroke("pink");
    fill(255);
    circle(0, 0, this.radius);
    pop();

 }

}