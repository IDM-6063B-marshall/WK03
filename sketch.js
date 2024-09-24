function star(x,y,w, c){ 
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
  background(220, 20, 50);
  strokeWeight(3);
  star (100, 100, 50, 5)
  star (200, 200, 50, 5)
  star (300, 100, 50, 5)
  star (200, 200, 50, 5)

 
  noFill()
  push
  translate (400, 300)

 // for (let d = 20; d < 220; d+=9) {
 //   ellipse (0, 0, d)
  //}
for (let cnt=0; cnt<20; cnt++){
  print(cnt)
  ellipse (0, 0, 10*cnt)
}


}

function draw() {}
