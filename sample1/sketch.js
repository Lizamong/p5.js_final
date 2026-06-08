function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(210, 225, 200);

  noStroke();
  fill(45, 65, 35);
  rect(150, 320, 300, 100, 50, 50, 0, 0);

  stroke(0);
  strokeWeight(2);
  fill(255, 224, 189);
  ellipse(300, 210, 180, 210);

  strokeWeight(1);
  ellipse(210, 220, 12, 25);
  ellipse(390, 220, 12, 25);

  fill(30, 30, 30);
  noStroke();
  rect(200, 350, 40, 25);
  stroke(255);
  strokeWeight(2);
  line(205, 357, 235, 357);
  line(205, 363, 235, 363);
  line(205, 369, 235, 369);

  noStroke();
  fill(255);
  ellipse(265, 215, 30, 20);
  fill(0);
  circle(265, 215, 12);
  fill(255);
  circle(268, 212, 4);

  stroke(180, 130, 110);
  line(300, 235, 300, 250);

  fill(35, 45, 30);
  noStroke();
  arc(300, 160, 190, 130, 3.14, 6.28);
  rect(205, 160, 190, 15);

  fill(255);
  noStroke();
  ellipse(335, 215, 30, 20);
  fill(0   
  circle(335, 215, 12);
  fill(255);
  circle(338, 212, 4);

  noFill();
  stroke(150, 50, 50);
  arc(300, 275, 40, 20, 0, 3.1);

  fill(25, 35, 20);
  noStroke();
  ellipse(300, 175, 210, 35);
  fill(0);
  rect(210, 175, 4, 35);
  rect(386, 175, 4, 35);

  fill(255);
  textSize(20);
  textAlign(CENTER);
  text("ROKA", 300, 150);
}
