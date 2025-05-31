let img;

function preload() {
  img = loadImage('img 44.jpg'); 
}

function setup() {
  createCanvas(img.width, img.height);
  background(255);
  noStroke();
  frameRate(60); 
}

function draw() {
  for (let i = 0; i < 300; i++) {  
    let x = floor(random(img.width));
    let y = floor(random(img.height));
    let c = img.get(x, y);
    fill(c);
    ellipse(x, y, 4, 4);
  }
}
