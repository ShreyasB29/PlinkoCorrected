const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var grounds,stage1,stage2,stage3,stage4;
var funnel,img;
var divisions=[];
var particles=[];
var plinkos=[];

function preload(){
    img=loadImage("download.jpg");
}

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    funnel=createSprite(400,100,0,0);
    funnel.addImage(img);
    funnel.scale=2;

    grounds=new Ground(395,780,700,10,0);
    stage1=new Ground(735,450,10,650,0);
    stage2=new Ground(55,450,10,650,0);

    for(var k=150;k<=650;k=k+100){
        divisions.push(new Division(k,710,10,130));
    }

        for(var k=90;k<=700;k=k+75){
            plinkos.push(new Plinko(k,220));
        }

        for(var k=127;k<=700;k=k+75){
            plinkos.push(new Plinko(k,275));
        }

        for(var k=90;k<=700;k=k+75){
            plinkos.push(new Plinko(k,330));
        }
    
            for(var k=127;k<=700;k=k+75){
                plinkos.push(new Plinko(k,385));
            }

            for(var k=90;k<=700;k=k+75){
                plinkos.push(new Plinko(k,440));
            }
        
                for(var k=127;k<=700;k=k+75){
                    plinkos.push(new Plinko(k,495));
                }

                for(var k=90;k<=700;k=k+75){
                    plinkos.push(new Plinko(k,550));
                }
            
                    for(var k=127;k<=700;k=k+75){
                        plinkos.push(new Plinko(k,605));
                    }
    
}

function draw(){
    background(0);
    Engine.update(engine);

    if(frameCount%60===0){
        particles.push(new Particle(random(380,420),90,10));
    }

    grounds.display();
    stage1.display();
    stage2.display();
    // stage3.display();
    // stage4.display();

    for(var i=0;i<divisions.length;i++){
       divisions[i].display();
    }

    for(var k=0;k<particles.length;k++){
        particles[k].display();
     }

     for(var l=0;l<plinkos.length;l++){
        plinkos[l].display();
     }
    
    drawSprites();

}