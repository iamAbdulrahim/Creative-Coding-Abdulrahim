let img;

function preload() {
  img = loadImage('img 44.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;
      for (let i = 0; i < 3; i++) {
        img.pixels[index + i] = floor(img.pixels[index + i] / 64) * 64;
      }
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
