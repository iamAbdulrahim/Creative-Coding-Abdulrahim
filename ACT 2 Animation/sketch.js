let spaceshipY;
let stars = [];
const numStars = 100;

function setup() {
  createCanvas(400, 400);
  spaceshipY = height + 100;

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3),
      speed: random(1, 3)
    });
  }

  angleMode(DEGREES);
  strokeWeight(2);
}

function draw() {
  drawSpaceBackground();

  
  for (let star of stars) {
    star.y += star.speed;
    if (star.y > height) {
      star.y = 0;
      star.x = random(width);
      star.size = random(1, 3);
      star.speed = random(1, 3);
    }
    fill(255);
    noStroke();
    ellipse(star.x, star.y, star.size);
  }

  translate(width / 2, spaceshipY);

  
  let pulse = map(sin(frameCount * 3), -1, 1, 0.9, 1.1);

  push();
  scale(pulse);

  
  fill(180, 220, 255, 220);
  stroke(100, 150, 200);
  strokeWeight(3);
  beginShape();
  vertex(0, -80);
  bezierVertex(50, -20, 50, 40, 0, 80);
  bezierVertex(-50, 40, -50, -20, 0, -80);
  endShape(CLOSE);

 
  let r = map(sin(frameCount * 3), -1, 1, 100, 180);
  let g = map(cos(frameCount * 3.5), -1, 1, 150, 220);
  let b = map(sin(frameCount * 4), -1, 1, 200, 255);
  fill(r, g, b, 230);
  stroke(r * 0.6, g * 0.6, b * 0.6);
  strokeWeight(2);
  ellipse(0, -20, 40, 25);

  for (let i = -1; i <= 1; i++) {
    push();
    translate(i * 30, 70);
    let glowPulse = map(sin(frameCount * 4 + i * 40), -1, 1, 10, 25);
    noFill();
    for (let r = glowPulse; r > 5; r -= 5) {
      stroke(255, 100, 50, map(r, 5, 25, 150, 10));
      strokeWeight(map(r, 5, 25, 5, 1));
      ellipse(0, 0, r * 2);
    }
    fill(255, 120, 40);
    noStroke();
    ellipse(0, 0, glowPulse, glowPulse * 1.5);
    pop();
  }

  pop();

  
  spaceshipY -= 2;

  if (spaceshipY < -100) {
    spaceshipY = height + 100;
  }
}

function drawSpaceBackground() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(10, 10, 30), color(0, 0, 0), inter);
    stroke(c);
    line(0, y, width, y);
  }
}
