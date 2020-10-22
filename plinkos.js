class Plinko{
    constructor(x,y){
        var options={
            isStatic:true ,
            friction:0.3
        }
        this.body = Bodies.circle(x,y,15,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,15,15);
        pop();
    }
}