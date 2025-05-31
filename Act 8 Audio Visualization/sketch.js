let sound, fft;
let buildings = [];
let stars = [];
let moonX, moonY;

function preload() {
  sound = loadSound("AUDIO1.mp3"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sound.loop();
  fft = new p5.FFT();

 
  for (let i = 0; i < 20; i++) {
    buildings.push({
      x: i * (width / 20),
      w: width / 20,
      h: random(height / 3, height / 2),
      color: color(random(180, 240), random(100, 200), random(200, 255))
    });
  }

  
  for (let i = 0; i < 150; i++) {
    stars.push({ x: random(width), y: random(height / 2), size: random(1, 3) });
  }

  moonX = width - 120;
  moonY = 100;
}

function draw() {
  drawNightSky();
  drawMoon();
  drawStars();

  let spectrum = fft.analyze();

  for (let i = 0; i < buildings.length; i++) {
    let b = buildings[i];
    let amp = spectrum[i * 3];
    let dynamicH = map(amp, 0, 255, 10, b.h);

    fill(b.color);
    noStroke();
    rect(b.x, height - dynamicH, b.w - 2, dynamicH);
  }
}

function drawNightSky() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(15, 10, 30), color(0, 0, 10), inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function drawStars() {
  for (let s of stars) {
    fill(255, 255, 255, random(150, 255));
    noStroke();
    ellipse(s.x, s.y, s.size);
  }
}

function drawMoon() {
  noStroke();
  fill(255, 255, 200);
  ellipse(moonX, moonY, 80);
}
