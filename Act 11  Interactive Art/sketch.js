let moonX = 100, moonY = 100;
let cloudX1 = 0, cloudX2 = 300;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  drawNightSky();
  drawMoon();
  drawCloud(cloudX1, 100);
  drawCloud(cloudX2, 150);

  cloudX1 += 0.3;
  cloudX2 += 0.2;
  if (cloudX1 > width + 200) cloudX1 = -200;
  if (cloudX2 > width + 200) cloudX2 = -200;

  drawBuildings();
  drawRoad();
  drawCar();
}

// Night Background
function drawNightSky() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(15, 15, 35), color(5, 5, 15), inter);
    stroke(c);
    line(0, y, width, y);
  }
}

// Moon
function drawMoon() {
  noStroke();
  fill(255, 255, 200, 180);
  ellipse(moonX, moonY, 80);
}

// Clouds
function drawCloud(x, y) {
  fill(255, 255, 255, 50);
  noStroke();
  ellipse(x, y, 100, 60);
  ellipse(x + 40, y - 20, 100, 60);
  ellipse(x + 80, y, 100, 60);
}

// Road
function drawRoad() {
  fill(30);
  rect(0, height - 80, width, 80);
  stroke(255);
  strokeWeight(4);
  for (let x = 0; x < width; x += 40) {
    line(x, height - 40, x + 20, height - 40);
  }
}

// Buildings with rooftop terraces
function drawBuildings() {
  // Left Building
  let bWidth = 250;
  let bHeight = 350;
  let x1 = 80;
  let y1 = height - 80;

  fill('#2c3e50'); // rich dark blue
  rect(x1, y1 - bHeight, bWidth, bHeight);

  fill('#34495e'); // rooftop terrace
  rect(x1 - 10, y1 - bHeight - 20, bWidth + 20, 20);
  fill('#1abc9c');
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      rect(x1 + 40 + c * 60, y1 - bHeight + 50 + r * 80, 30, 40, 4);
    }
  }

  // Right Building
  let x2 = width - bWidth - 80;
  fill('#8e44ad'); // deep purple
  rect(x2, y1 - bHeight, bWidth, bHeight);

  fill('#9b59b6'); // rooftop terrace
  rect(x2 - 10, y1 - bHeight - 20, bWidth + 20, 20);
  fill('#ecf0f1');
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 2; c++) {
      rect(x2 + 50 + c * 80, y1 - bHeight + 60 + r * 90, 40, 50, 5);
    }
  }
}

// Car
function drawCar() {
  let x = frameCount % width;
  let y = height - 110;

  // Car body
  fill('#e74c3c');
  rect(x, y, 100, 30, 8); // base
  rect(x + 20, y - 20, 60, 30, 8); // top

  // Windows
  fill(255);
  rect(x + 25, y - 15, 20, 20, 4);
  rect(x + 55, y - 15, 20, 20, 4);

  // Wheels
  fill(0);
  ellipse(x + 20, y + 30, 22, 22);
  ellipse(x + 80, y + 30, 22, 22);

  // Headlights
  fill(255, 255, 100);
  ellipse(x + 100, y + 10, 8, 8);
}
