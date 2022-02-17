let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j=0
}

function draw() {
  // put drawing code here
  background(181,234,215);
  line(200,0,200,400);

 
  vertex
  fill(255,255,0)
  ellipse(120,100,90,50);
  ellipse(70,95,50,50);
  ellipse(320,100,90,50);
  ellipse(270,95,50,50);

  fill(255,255,255)
  ellipse(55,85,15,15);
  ellipse(70,85,15,15);
  ellipse(255,85,15,15);
  ellipse(270,85,15,15);

  fill(0,0,0)
  ellipse(65,85,5,5);
  ellipse(50,85,5,5);
  
  
//

  fill(0,0,204,0.3)
  arc(107,78,30,80,radians(180),radians(0));
  arc(135,78,30,100,radians(185),radians(20));
  arc(307,78,30,80,radians(180),radians(0));
  arc(335,78,30,100,radians(185),radians(20));


arc(65,65,15,20,radians(90),radians(0));
arc(75,65,15,20,radians(90),radians(0));
arc(265,65,15,20,radians(90),radians(0));
arc(275,65,15,20,radians(90),radians(0));


strokeWeight(6)
arc(84,69,40,120,radians(20),radians(80));
arc(95,70,40,120,radians(20),radians(80));
arc(107,70,40,120,radians(20),radians(80));
arc(118,70,40,120,radians(20),radians(80));
arc(135,70,30,115,radians(20),radians(80));
arc(284,69,40,120,radians(20),radians(80));
arc(295,70,40,120,radians(20),radians(80));
arc(307,70,40,120,radians(20),radians(80));
arc(318,70,40,120,radians(20),radians(80));
arc(335,70,30,115,radians(20),radians(80));

strokeWeight(2)
arc(90,120,20,40,radians(20),radians(80));
arc(100,120,20,40,radians(20),radians(80));
arc(120,120,20,40,radians(20),radians(80));
arc(130,120,20,40,radians(20),radians(80));
arc(290,120,20,40,radians(20),radians(80));
arc(300,120,20,40,radians(20),radians(80));
arc(320,120,20,40,radians(20),radians(80));
arc(330,120,20,40,radians(20),radians(80));


fill(128,0,0)
arc(64,100,20,20,radians(0),radians(180));
arc(64,100,radians(0),radians(30));
arc(264,100,20,20,radians(0),radians(180));
arc(264,100,radians(0),radians(30));

var y=2+3*Math.sin(PI*j/150)
var r=5+20*Math.sin(PI*j/100)
j+=1

  fill(0,0,0)
  ellipse(265+y,85,5,5);
  ellipse(250+y,85,5,5);


}