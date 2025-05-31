function setup() {
  createCanvas(400, 200);
  background(220);
  
  drawRoad();     
  drawCar(100, 100); 
}

function drawRoad() {
  fill(60); 
  rect(0, 130, width, 70); 
  
  
  stroke(255);
  strokeWeight(2);
  for (let i = 0; i < width; i += 40) {
    line(i, 165, i + 20, 165); 
  }

  noStroke();
}

function drawCar(x, y) {
  // Car body
  fill(150, 0, 0);
  rect(x, y, 120, 40);         
  rect(x + 20, y - 20, 80, 20); 
  // Wheels
  fill(0);
  ellipse(x + 25, y + 40, 30, 30);
  ellipse(x + 95, y + 40, 30, 30); 

  // Window lines
  stroke(255);
  line(x + 40, y - 20, x + 40, y); 
  line(x + 80, y - 20, x + 80, y); 
  noStroke();
}
