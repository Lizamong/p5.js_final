let 모자 = true;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (keyIsPressed) {
    background(60, 80, 50);
  } else {
    background(210, 225, 200);
  }

  let eyeMoveX = map(mouseX, 0, width, -5, 5);
  let eyeMoveY = map(mouseY, 0, height, -3, 3);

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
  circle(265 + eyeMoveX, 215 + eyeMoveY, 12);
  fill(255);
  circle(267 + eyeMoveX, 213 + eyeMoveY, 4);

  fill(255);
  ellipse(335, 215, 30, 20);
  fill(0);
  circle(335 + eyeMoveX, 215 + eyeMoveY, 12);
  fill(255);
  circle(337 + eyeMoveX, 213 + eyeMoveY, 4);

  stroke(180, 130, 110);
  line(300, 235, 300, 250);

  if (!모자) {
    fill(20, 20, 20);
    noStroke();
    arc(300, 160, 170, 120, 3.14, 6.28);
    rect(215, 160, 170, 30);
  }

  if (모자) {
    fill(35, 45, 30);
    noStroke();
    arc(300, 160, 190, 130, 3.14, 6.28);
    rect(205, 160, 190, 15);
    fill(25, 35, 20);
    ellipse(300, 175, 210, 35);

    fill(255);
    noStroke();
    textSize(20);
    textAlign(CENTER);
    text("ROKA", 300, 145);
  }

  noFill();
  stroke(150, 50, 50);
  if (keyIsPressed) {
    line(285, 275, 315, 275);
  } else {
    arc(300, 275, 40, 20, 0, 3.1);
  }

  if (keyIsPressed) {
    fill(45, 65, 35);
    noStroke();
    quad(180, 230, 140, 250, 150, 320, 190, 320);

    fill(255, 224, 189);
    stroke(0);
    strokeWeight(2);
    quad(160, 230, 245, 205, 255, 225, 170, 250);

    noStroke();
    fill(255);
    ellipse(430, 130, 100, 60);
    triangle(390, 150, 410, 150, 380, 180);
    
    fill(0);
    textSize(22);
    text("충성!", 430, 138);
  }
}

function mousePressed() {
  모자 = !모자;
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('초상화_움직임.gif', 15);
  }
}
