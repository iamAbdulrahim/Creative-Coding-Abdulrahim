let trail = [];

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  background(240, 20, 15, 10);
  trail.push(new TrailPoint(mouseX, mouseY));
  if (trail.length > 100) {
    trail.splice(0, 1);
  }
  for (let i = 0; i < trail.length; i++) {
    trail[i].update(i, trail.length);
    trail[i].display();
  }
}

class TrailPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 30);
    this.hue = random(180, 300);
    this.alpha = 100;
  }

  update(index, total) {
    this.alpha = map(index, 0, total, 20, 100);
    this.size *= 0.98;
  }

  display() {
    fill(this.hue, 80, 100, this.alpha);
    ellipse(this.x, this.y, this.size);
  }
}
