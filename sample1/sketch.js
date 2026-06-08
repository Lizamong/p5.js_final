function setup() {
  createCanvas(600, 400);
  noLoop(); 
}

function draw() {
  background("#000000"); 

  // 외곽 궤도 라인
  push();
  translate(300, 200);
  noFill();
  stroke("#1F2833");
  strokeWeight(2);
  ellipse(0, 0, 550, 380); 
  pop();

  // 중간 성운 레이어
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

  // 중심부 항성 배치
  noStroke();
  fill("#1F2833");
  ellipse(300, 200, 280, 180); 
  fill("#45A29E");
  ellipse(300, 200, 200, 130);
  fill("#66FCF1");
  ellipse(300, 200, 120, 80);
}
