let img;
let scaleFactor = 1.5; 

function preload() {
  img = loadImage("img 44.jpg"); 
}

function setup() {
  createCanvas(img.width * scaleFactor, img.height * scaleFactor);
  noStroke();
}

function draw() {
  background(0);
  
  
  image(img, 0, 0, img.width * scaleFactor, img.height * scaleFactor);
  
  
  let sampleX = floor(mouseX / scaleFactor);
  let sampleY = floor(mouseY / scaleFactor);

  if (sampleX >= 0 && sampleX < img.width && sampleY >= 0 && sampleY < img.height) {
    let c = img.get(sampleX, sampleY);
    fill(c);
    stroke(255);
    strokeWeight(1);
    ellipse(mouseX, mouseY, 50);
  }
}
