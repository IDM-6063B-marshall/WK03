function star(x, y, w, c) {
  let r = w / 2;
  push();
  translate(x, y);
  line(-c, -c, 0, -r);
  line(0, -r, c, -c);
  line(c, -c, r, 0);
  line(r, 0, c, c);
  line(c, c, 0, r);
  line(-c, -c, -r, 0);
  line(-r, 0, -c, c);
  line(-c, c, 0, r);
  pop();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(300, 120, 500);
  strokeWeight(3);
  //star (100, 100, 50, 5)
  // star (200, 200, 50, 5)
  // star (300, 100, 50, 5)
  //star (200, 200, 50, 5)

  // drawing a row of stars

  for (let x = 50; x < width; x += 50) star(x, 50, 80, 10);

  // drawing a column of stars

  for (let y = 50; y < height; y += 50) {
    star(50, y, 80, 10);
  }

  // draw a column of rows
  for (let y = 50; y < height; y += 70) {
    // draw a row of stars
    for (let x = 50; x < width; x += 100) {
      star(x, y, 100, 5);
    }
  }
}

function draw() {}
