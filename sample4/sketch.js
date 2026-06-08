let 시작프레임;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#000000"); 
  
  let 파동 = sin(frameCount * 0.05); 
  let 파동크기 = map(파동, -1, 1, 0.8, 1.2); 

  push();
  translate(300, 200);
  noFill();
  stroke("#1F2833");
  strokeWeight(2);
  ellipse(0, 0, 550, 380); 
  pop();

  push();
  translate(300, 200);
  noFill();
  stroke("#66FCF1");
  strokeWeight(4);
  arc(0, 0, 450, 300, 4.7, 0);  
  stroke("#45A29E");
  strokeWeight(6);
  arc(0, 0, 350, 230, 1.5, 3.1);
  pop();

  noStroke();
  fill("#1F2833");
  ellipse(300, 200, 280 * 파동크기, 180 * 파동크기); 
  fill("#45A29E");
  ellipse(300, 200, 200 * 파동크기, 130 * 파동크기);
  fill("#66FCF1");
  ellipse(300, 200, 120 * 파동크기, 80 * 파동크기);

  let 색1 = color("#FF4500");
  let 색2 = color("#FFD700");
  let 색3 = lerpColor(색1, 색2, (파동 + 1) / 2);

  stroke("#FFD700");
  strokeWeight(1);
  line(300, 150, 300, 250);
  line(200, 200, 400, 200);

  noStroke();
  fill(색3); 
  ellipse(300, 200, 60, 60); 

  push();
  translate(300, 200); 
  
  let 지구X = cos(frameCount * 0.02) * 225;
  let 지구Y = sin(frameCount * 0.02) * 150;

  push();
  translate(지구X, 지구Y); 
  noStroke();
  fill("#0077BE");
  ellipse(0, 0, 25, 25); 
  
  push();
  rotate(frameCount * 0.05); 
  fill("#228B22"); 
  arc(0, 0, 25, 25, 0, 2.0); 
  ellipse(-3, -4, 8, 6);     
  ellipse(4, -3, 5, 5);      
  pop();

  let 달X = cos(frameCount * 0.08) * 22;
  let 달Y = sin(frameCount * 0.08) * 22;
  fill("#C0C0C0"); 
  ellipse(달X, 달Y, 8, 8); 
  pop(); 
  
  pop(); 
}
