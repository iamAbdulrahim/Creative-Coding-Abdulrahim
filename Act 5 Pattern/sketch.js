let cols, rows;
let spacing = 40;

function setup() {
  createCanvas(600, 600);
  cols = floor(width / spacing);
  rows = floor(height / spacing);
  colorMode(HSB, 360, 255, 255);
  noStroke();
}

function draw() {
  background(220, 40, 20);

  
  let noiseScale = map(mouseY, 0, height, 0.01, 0.2);
  let maxSize = map(mouseX, 0, width, 5, 50);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let posX = x * spacing + spacing / 2;
      let posY = y * spacing + spacing / 2;

      let n = noise(x * noiseScale, y * noiseScale, frameCount * 0.01);
      let size = map(n, 0, 1, 5, maxSize);

      let hue = map(n, 0, 1, 180, 360);
      fill(hue, 200, 255);

      ellipse(posX, posY, size, size);
    }
  }
}
