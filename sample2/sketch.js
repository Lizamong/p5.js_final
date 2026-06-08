function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(210, 225, 200); 

  // 몸통
  noStroke();
  fill(45, 65, 35);
  rect(150, 320, 300, 100, 50, 50, 0, 0);

  // 얼굴형
  stroke(0);
  strokeWeight(2);
  fill(255, 224, 189);
  ellipse(300, 210, 180, 210);

  // 귀
  strokeWeight(1);
  ellipse(210, 220, 12, 25);
  ellipse(390, 220, 12, 25);

  // 군복 디테일
  fill(30, 30, 30);
  noStroke();
  rect(200, 350, 40, 25);
  stroke(255);
  strokeWeight(2);
  line(205, 357, 235, 357);
  line(205, 363, 235, 363);
  line(205, 369, 235, 369);

  // 눈
  noStroke();
  fill(255);
  ellipse(265, 215, 30, 20);
  fill(0);
  circle(265, 215, 12);
  fill(255);
  circle(267, 213, 4);

  fill(255);
  ellipse(335, 215, 30, 20);
  fill(0);
  circle(335, 215, 12);
  fill(255);
  circle(337, 213, 4);

  // 코와 입
  stroke(180, 130, 110);
  line(300, 235, 300, 250);

  // 베레모 군모
  fill(35, 45, 30);
  noStroke();
  arc(300, 130, 185, 110, 3.14, 6.28);
  rect(205, 125, 188, 15, 4);
}
