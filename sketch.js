function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-background');
  angleMode(DEGREES);
  rectMode(CENTER);
  noFill();
  stroke(255, 150);
  strokeWeight(2);
}

function draw() {
  clear(); // transparent background

  let rotationSpeed = mouseX / 100;

  for (let y = 0; y <= height; y += 100) {
    for (let x = 0; x <= width; x += 100) {
      push();
      translate(x, y);
      rotate(frameCount * rotationSpeed);
      rect(0, 0, 80, 80);
      pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
