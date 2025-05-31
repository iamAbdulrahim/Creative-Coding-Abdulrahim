let quotes = ["Believe.", "Create.", "Inspire.", "Imagine.", "Dream big."];
let wordObjects = [];
let bubbles = [];

function setup() {
  createCanvas(1000, 1000);
  textAlign(CENTER, CENTER);
  textFont('Georgia');
  textSize(48);
  colorMode(HSB, 360, 100, 100);
  noStroke();

 
  for (let i = 0; i < quotes.length; i++) {
    let x = random(200, 800);
    let y = random(200, 800);
    wordObjects.push(new Word(quotes[i], x, y));
  }

 
  for (let i = 0; i < 30; i++) {
    bubbles.push(new Bubble());
  }
}

function draw() {
  drawAnimatedGradient();
  drawFloatingBubbles();

  for (let w of wordObjects) {
    w.update();
    w.display();
  }
}

function mousePressed() {
  for (let w of wordObjects) {
    if (w.isMouseOver()) {
      w.changeColor();
      w.bounce();
    }
  }
}

class Word {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.baseY = y;
    this.angle = random(TWO_PI);
    this.color = color(random(360), 80, 100);
    this.size = 48;
    this.offset = random(1000);
    this.bounceTimer = 0;
  }

  update() {
    this.y = this.baseY + sin(frameCount * 0.02 + this.offset) * 10;
    this.angle += 0.005;
    if (this.bounceTimer > 0) {
      this.bounceTimer--;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    // Shadow
    fill(0, 0, 20, 0.3);
    textSize(this.size + (this.bounceTimer > 0 ? 10 : 0));
    text(this.text, 3, 3);

    // Main text
    fill(this.color);
    text(this.text, 0, 0);
    pop();
  }

  isMouseOver() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    return d < 100;
  }

  changeColor() {
    this.color = color(random(360), 80, 100);
  }

  bounce() {
    this.bounceTimer = 15;
  }
}


class Bubble {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(50, 150);
    this.speed = random(0.2, 0.5);
    this.hue = random(180, 250);
    this.alpha = random(0.1, 0.25);
  }

  move() {
    this.y -= this.speed;
    if (this.y < -this.r) {
      this.y = height + this.r;
    }
  }

  display() {
    noStroke();
    fill(this.hue, 30, 100, this.alpha);
    ellipse(this.x, this.y, this.r);
  }
}

function drawFloatingBubbles() {
  for (let b of bubbles) {
    b.move();
    b.display();
  }
}


function drawAnimatedGradient() {
  for (let y = 0; y < height; y++) {
    let hueShift = sin(frameCount * 0.01 + y * 0.005) * 20;
    let hue = map(y, 0, height, 220 + hueShift, 280 + hueShift);
    stroke(hue % 360, 30, 20);
    line(0, y, width, y);
  }
}
