function setup() {
    createCanvas(1000, 1000);
    background(240);
    strokeWeight(10);
  }
  
  function draw() {
    if (mouseIsPressed) {
      stroke(255, 0, 255);
    } else {
      stroke(237, 34, 93);
    }
    line(mouseX - 66, mouseY, mouseX + 66, mouseY);
    line(mouseX, mouseY - 66, mouseX, mouseY + 66);
  }
