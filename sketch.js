let j;
function setup() {
  // put setup code here
  createCanvas(1000,1000);
  j = 0;
}

function draw() {
  // put drawing code here
  background(200);
  strokeWeight(3);
  point(200,100);
  line(0,0,70,70);

  strokeJoin(ROUND);

  fill (255, 183, 178);
  rect(150,100, 100, 20);
  strokeWeight(1);
  stroke(226, 240, 203)
  fill(255, 223, 211) 
  ellipse(150, 120, 20, 20);
  ellipse(250,120,20,20);
  strokeWeight(0);
  triangle(180, 240, 200,200,90,90);
  arc(200,100, 80,80, radians(180), radians(0));

  
  strokeWeight(1);
  beginShape();
  vertex(40,40)
  vertex(30,30)
  vertex(90,110)
  vertex(100,100)
  endShape(CLOSE);

  strokeWeight(10);
  for(var i=0; i<=1000; i++){
    x= i
    y= 300 + 100*Math.sin(x/20)
    point(x,y)
  }
  
  var y = 150 + 20*Math.sin(j/20);
  j += 5;
  fill(186,225,255);
  ellipse(400,y,60,60);


}