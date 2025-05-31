let stars = [];
let shootingStars = [];
let alienY = 0;
let alienDirection = 1;

function setup() {
  createCanvas(600, 450);
  angleMode(DEGREES);

  // Regular stars
  for (let i = 0; i < 100; i++) {
    stars.push({ x: random(width), y: random(height), size: random(1, 3) });
  }
}

function draw() {
  drawBackground();
  drawStars();
  drawPlanets();
  handleShootingStars();
  drawAlien(width / 2, height / 2 + alienY);
  moveAlien();
}


function drawBackground() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(10, 10, 30), color(20, 20, 50), inter);
    stroke(c);
    line(0, y, width, y);
  }
}


function drawStars() {
  noStroke();
  for (let s of stars) {
    fill(255);
    ellipse(s.x, s.y, s.size);
    s.y += 0.3; 
    if (s.y > height) {
      s.y = 0;
      s.x = random(width);
    }
  }
}

// Planet glow
function drawPlanets() {
  noStroke();
  fill(150, 50, 200, 150);
  ellipse(500, 80, 80, 80);

  fill(255, 100, 50, 180);
  ellipse(100, 60, 50, 50);
}


function handleShootingStars() {
  
  if (random(1) < 0.01) {
    shootingStars.push({
      x: random(width),
      y: random(height / 2),
      speedX: -2,
      speedY: 1
    });
  }

  
  stroke(255, 255, 150);
  strokeWeight(2);
  for (let i = shootingStars.length - 1; i >= 0; i--) {
    let s = shootingStars[i];
    line(s.x, s.y, s.x + 10, s.y + 5);
    s.x += s.speedX;
    s.y += s.speedY;

    
    if (s.x < -20 || s.y > height + 20) {
      shootingStars.splice(i, 1);
    }
  }
}


function drawAlien(x, y) {
  push();
  translate(x, y);

  
  fill(60, 255, 60);
  beginShape();
  vertex(0, -50);
  bezierVertex(30, -60, 30, -90, 0, -100);
  bezierVertex(-30, -90, -30, -60, 0, -50);
  endShape(CLOSE);


  fill(0);
  ellipse(-10, -70, 10, 20);
  ellipse(10, -70, 10, 20);
  fill(255);
  ellipse(-10, -75, 3, 3);
  ellipse(10, -75, 3, 3);

  
  fill(0);
  arc(0, -55, 20, 10, 0, PI);

 
  stroke(0, 255, 0);
  strokeWeight(2);
  line(-15, -95, -25, -110);
  line(15, -95, 25, -110);
  fill(255, 0, 0);
  ellipse(-25, -110, 5);
  ellipse(25, -110, 5);
  noStroke();

  
  fill(60, 255, 60);
  rect(-25, -40, 50, 70, 10);

  
  fill(255, 0, 100);
  ellipse(0, -10, 10);

 
  rect(-45, -30, 20, 50, 10);
  rect(25, -30, 20, 50, 10);

 
  rect(-15, 30, 12, 30, 10);
  rect(3, 30, 12, 30, 10);

  pop();
}


function moveAlien() {
  alienY += alienDirection * 1.2;
  if (alienY > 15 || alienY < -15) {
    alienDirection *= -1;
  }
}
