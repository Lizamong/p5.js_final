function setup() {
  createCanvas(600, 400);
  // noLoop()를 끄거나 draw 맨 아래로 이동시키는 것이 웹 환경에서 훨씬 안전합니다.
}

function draw() {
  // 1. 도화지 배경색을 draw 맨 위에서 칠해줍니다 (검은 화면 팅김 현상 방지)
  background("#000000");

  // 궤도 및 성운 레이어
  noFill();
  stroke("#1F2833");
  strokeWeight(2);
  ellipse(300, 200, 550, 380);

  stroke("#66FCF1");
  strokeWeight(4);
  arc(300, 200, 450, 300, 4.7, 0); 
  
  stroke("#45A29E");
  strokeWeight(6);
  arc(300, 200, 350, 230, 1.5, 3.1);

  // 중심부 행성 베이스
  noStroke();
  fill("#1F2833");
  ellipse(300, 200, 280, 180);
  
  fill("#45A29E");
  ellipse(300, 200, 200, 130);
  
  fill("#66FCF1");
  ellipse(300, 200, 120, 80);

  // 황금빛 십자선 가이드
  stroke("#FFD700");
  strokeWeight(1);
  line(300, 150, 300, 250);
  line(200, 200, 400, 200);

  // 태양 및 주변 행성들
  noStroke();
  fill("#FF4500");
  ellipse(300, 200, 60, 60); 

  fill("#0077BE");
  ellipse(80, 85, 25, 25); 

  fill("#C0C0C0"); 
  ellipse(115, 75, 10, 10);
  
  // 모든 도형이 안전하게 그려진 직후 루프를 멈추도록 맨 하단에 배치합니다.
  noLoop(); 
}
