let data = [
  { country: "South Korea", value: 95 },
  { country: "UK", value: 82 },
  { country: "Germany", value: 80 },
  { country: "USA", value: 81 },
  { country: "Canada", value: 78 },
  { country: "Japan", value: 76 },
  { country: "India", value: 45 },
  { country: "Brazil", value: 60 }
];

function setup() {
  createCanvas(1000, 600);
  textFont('Arial');
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  background(0, 0, 95); 

  textSize(26);
  fill(0);
  textAlign(LEFT, TOP);
  text("Smartphone Usage by Country (2022)", 30, 20);

  let barHeight = 40;
  let maxBarLength = width - 250;

  for (let i = 0; i < data.length; i++) {
    let x = 50;
    let y = 80 + i * (barHeight + 25);
    let val = data[i].value;
    let country = data[i].country;

  
    let hueVal = (frameCount + i * 40) % 360;
    fill(hueVal, 80, 80);

    let barLength = map(val, 0, 100, 0, maxBarLength);
    rect(x, y, barLength, barHeight, 10);

   
    fill(0);
    textSize(18);
    textAlign(LEFT, CENTER);
    text(country, x + 5, y + barHeight / 2);

   
    textAlign(RIGHT, CENTER);
    text(val + "%", x + barLength - 10, y + barHeight / 2);
  }
}
