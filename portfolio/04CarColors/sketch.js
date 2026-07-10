
var s;
var isOverRectangle1;
var isOverRectangle2;
var isOverRectangle3;
var isOverRectangle4;
var isOverRectangle5;
var isOverRectangle6;
var x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14;
var f1, f2, f3, f4, f5, f6, f7, f8, f9, f10;
var f11, f12, f13, f14, f15, f16, f17, f18, f19, f20;
var f21, f22, f23, f24, f25, f26, f27, f28, f29, f30;
var f31, f32, f33, f34, f35, f36, f37, f38, f39;
var m1=0; m2=0;;
var n1, n2;
var p1=0;


function setup() {
    var myCanvas = createCanvas(windowWidth, windowHeight*0.8);
  myCanvas.parent('sketchholder1');
}

function draw() {

  background(255, 255, 255);

  if (mouseX >= windowWidth*0.03 && mouseX <= windowWidth*0.03 + 140 && mouseY >= 0 && mouseY <= 0 + 50) {
    isOverRectangle1 = true;
  } else {
    isOverRectangle1 = false;
  }

  if (mouseX >= windowWidth*0.03 + 140 + 30 && mouseX <= windowWidth*0.03 + 140 + 30 + 140 && mouseY >= 0 && mouseY <= 0 + 50) {
    isOverRectangle2 = true;
  } else {
    isOverRectangle2 = false;
  }

  if (mouseX >= windowWidth*0.03 + 140 + 30 + 140 + 30 && mouseX <= windowWidth*0.03 + 140 + 30 + 140 + 30 + 140 && mouseY >= 0 && mouseY <= 0 + 50) {
    isOverRectangle3 = true;
  } else {
    isOverRectangle3 = false;
  }

  if (mouseX >= windowWidth*0.03 + 140 + 30 + 140 + 30 + 140 + 30 && mouseX <= windowWidth*0.03 + 140 + 30 + 140 + 30 + 140 + 30 + 140 && mouseY >= 0 && mouseY <= 0 + 50) {
    isOverRectangle4 = true;
  } else {
    isOverRectangle4 = false;
  }

  if (mouseX >= windowWidth*0.03 + 140 + 30 + 140 + 30 + 140 + 30 + 140 + 30 - 5 && mouseX <= windowWidth*0.03 + 140 + 30 + 140 + 30 + 140 + 30 + 140 + 30 - 5 + 150 && mouseY >= 0 && mouseY <= 0 + 50) {
    isOverRectangle5 = true;
  } else {
    isOverRectangle5 = false;
  }

  if (mouseX >= windowWidth*0.03 + 140 + 30 + 140 + 30 + 140 + 30 + 140 + 30 + 140 + 30 && mouseX <= windowWidth*0.03 + 140 + 30 + 140 + 30 + 140 + 30 + 140 + 30 + 140 + 30 + 150 && mouseY >= 0 && mouseY <= 0 + 50) {
    isOverRectangle6 = true;
  } else {
    isOverRectangle6 = false;
  }
  
  fill(128,0,128);
  rect(windowWidth*0.03, windowHeight*0.5-15, 20, 20);
  s="Purple indicates all other colors",
  textSize(14);
  fill(0,0,0);
  text(s,windowWidth*0.03 + 30, windowHeight*0.5);

  s = m1 + "% of cars in New York City",
  fill(p1, p1, p1);
  textSize(16);
  textAlign(LEFT);
  text(s, windowWidth*0.03 + 650 - 20, windowHeight*0.5);

  s = m2 + "% of residents in New York City",
  fill(0, 0, 0);
  textAlign(LEFT);
  text(s, windowWidth*0.03 + 650 - 20, windowHeight*0.5 + 40);
  
  s = "1 in "+ p1,
  fill(0, 0, 0);
  textSize(36);
  textAlign(CENTER, CENTER);
  text(s, windowWidth*0.03 + 730, windowHeight*0.5 + 90);
  
  s = "people has a car",
  fill(0, 0, 0);
  textSize(16);
  text(s, windowWidth*0.03 + 730, windowHeight*0.5 + 130);

  strokeWeight(1);
  fill(255, 255, 255);
  rect(windowWidth*0.03, 0, 140, 50);
  s = "Manhattan",
  textSize(20);
  fill(0, 0, 0);
  textAlign(CENTER, CENTER);
  text(s, windowWidth*0.03 + 70, 25);

  fill(255, 255, 255);
  rect(windowWidth*0.03 + 140 + 30, 0, 140, 50);
  s = "Brooklyn",
  fill(0, 0, 0);
  textAlign(CENTER, CENTER);
  text(s, windowWidth*0.03 + 140 + 30 + 70, 25);

  fill(255, 255, 255);
  rect(windowWidth*0.03 + 140 + 30 + 140 + 30, 0, 140, 50);
  s = "Queens",
  fill(0, 0, 0);
  textAlign(CENTER, CENTER);
  text(s, windowWidth*0.03 + 140 + 30 + 140 + 30 + 70, 25);

  fill(255, 255, 255);
  rect(windowWidth*0.03 + 140 + 30 + 140 + 30 + 140 + 30, 0, 140, 50);
  s = "Bronx",
  fill(0, 0, 0);
  textAlign(CENTER, CENTER);
  text(s, windowWidth*0.03 + 140 + 30 + 140 + 30 + 140 + 30 + 70, 25);

  fill(255, 255, 255);
  rect(windowWidth*0.03 + 140 + 30 + 140 + 30 + 140 + 30 + 140 + 30 - 5, 0, 145, 50);
  s = "Staten Island",
  fill(0, 0, 0);
  textAlign(CENTER, CENTER);
  text(s, windowWidth*0.03 + 140 + 30 + 140 + 30 + 140 + 30 + 140 + 30 + 70, 25);

  fill(128, 0, 0);
  rect(windowWidth*0.03 + 140 + 30 + 140 + 30 + 140 + 30 + 140 + 30 + 140 + 30, 0, 150, 50);
  s = "NYC Total",
    fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text(s, windowWidth*0.03 + 140 + 30 + 140 + 30 + 140 + 30 + 140 + 30 + 140 + 30 + 70 + 5, 25);

  fill(f1, f2, f3);
  rect(windowWidth*0.03, windowHeight * 0.15, x1, 120);
  fill(f4, f5, f6);
  rect(windowWidth*0.03 + x1, windowHeight * 0.15, x2, 120);
  fill(f7, f8, f9);
  rect(windowWidth*0.03 + x1 + x2, windowHeight * 0.15, x3, 120);
  fill(f10, f11, f12);
  rect(windowWidth*0.03 + x1 + x2 + x3, windowHeight * 0.15, x4, 120);
  fill(f13, f14, f15);
  rect(windowWidth*0.03 + x1 + x2 + x3 + x4, windowHeight * 0.15, x5, 120);
  fill(f16, f17, f18);
  rect(windowWidth*0.03 + x1 + x2 + x3 + x4 + x5, windowHeight * 0.15, x6, 120);
  fill(f19, f20, f21);
  rect(windowWidth*0.03 + x1 + x2 + x3 + x4 + x5 + x6, windowHeight * 0.15, x7, 120);
  fill(f22, f23, f24);
  rect(windowWidth*0.03 + x1 + x2 + x3 + x4 + x5 + x6 + x7, windowHeight * 0.15, x8, 120);
  fill(f25, f26, f27);
  rect(windowWidth*0.03 + x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8, windowHeight * 0.15, x9, 120);
  fill(f28, f29, f30);
  rect(windowWidth*0.03 + x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9, windowHeight * 0.15, x10, 120);
  fill(f31, f32, f33);
  rect(windowWidth*0.03 + x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9 + x10, windowHeight * 0.15, x11, 120);
  fill(f34, f35, f36);
  rect(windowWidth*0.03 + x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9 + x10 + x11, windowHeight * 0.15, x12, 120);
  fill(f37, f38, f39);
  rect(windowWidth*0.03 + x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9 + x10 + x11 + x12, windowHeight * 0.15, x13, 120);
  fill(153, 50, 204);
  rect(windowWidth*0.03 + x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9 + x10 + x11 + x12 + x13, windowHeight * 0.15, x14, 120);

  fill(0, 134, 139);
  ellipse(windowWidth*0.03 + 500, windowHeight*0.5 + 20, n1, n1);

  fill(255, 255, 255, 0.1);
  stroke(0, 100, 0);
  ellipse(windowWidth*0.03 + 500, windowHeight*0.5 + 20, n2, n2);

  fill(0, 134, 139);
  stroke(0, 0, 0);
  rect(windowWidth*0.03 + 600, windowHeight*0.5 - 15, 20, 20);

  fill(255, 255, 255);
  stroke(0, 100, 0);
  rect(windowWidth*0.03 + 600, windowHeight*0.5 + 25, 20, 20);


  fill(0,0,0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(x1/10 +"%", windowWidth*0.03 + x1/2, windowHeight * 0.15 + 130);
  text(x2/10 +"%", windowWidth*0.03 + x1 + x2/2, windowHeight * 0.15 + 130);
  text(x3/10 +"%", windowWidth*0.03 + x1 + x2 + x3/2, windowHeight * 0.15 + 130);
  text(x4/10 +"%", windowWidth*0.03 + x1 + x2 + x3 + x4/2, windowHeight * 0.15 + 130);
  text(x5/10 +"%", windowWidth*0.03 + x1 + x2 + x3 + x4 + x5/2, windowHeight * 0.15 + 130 );
  text(x6/10 +"%", windowWidth*0.03 + x1 + x2 + x3 + x4 + x5 + x6/2, windowHeight * 0.15 + 130 );
  text(x7/10 +"%", windowWidth*0.03 + x1 + x2 + x3 + x4 + x5 + x6 + x7/2, windowHeight * 0.15 + 130 );

}
 
function mousePressed() {
  if (isOverRectangle1 === true) {
    x1 = 326, x2 = 246, x3 = 126, x4 = 112, x5 = 59, x6 = 50, x7 = 28, x8 = 13, x9 = 13, x10 = 6,
      x11 = 6, x12 = 3, x13 = 2, x14 = 1000 - x1 - x2 - x3 - x4 - x5 - x6 - x7 - x8 - x9 - x10 - x11 - x12 - x13,
      f1 = 128, f2 = 128, f3 = 128;
    f4 = 0, f5 = 0, f6 = 0, f7 = 0, f8 = 0, f9 = 255, f10 = 255,
      f11 = 255, f12 = 255, f13 = 255, f14 = 0, f15 = 0, f16 = 0, f17 = 128, f18 = 0, f19 = 210, f20 = 180,
      f21 = 140, f22 = 165, f23 = 42, f24 = 42, f25 = 255, f26 = 215, f27 = 0, f28 = 213, f29 = 213, f30 = 213,
      f31 = 128, f32 = 0, f33 = 0, f34 = 255, f35 = 255, f36 = 0, f37 = 255, f38 = 165, f39 = 0,
      m1 = 11.6, m2 = 19.3,
      n1 = 35, n2 = 58,
      p1 = 7.2;

  } else if (isOverRectangle2 === true) {
    x1 = 335, x2 = 218, x3 = 125, x4 = 107, x5 = 62, x6 = 52, x7 = 38, x8 = 17, x9 = 16, x10 = 8,
      x11 = 6, x12 = 5, x13 = 2, x14 = 1000 - x1 - x2 - x3 - x4 - x5 - x6 - x7 - x8 - x9 - x10 - x11 - x12 - x13,
      f1 = 128, f2 = 128, f3 = 128;
    f4 = 0, f5 = 0, f6 = 0, f7 = 255, f8 = 255, f9 = 255, f10 = 0,
      f11 = 0, f12 = 255, f13 = 255, f14 = 0, f15 = 0, f16 = 0, f17 = 128, f18 = 0, f19 = 210, f20 = 180,
      f21 = 140, f22 = 165, f23 = 42, f24 = 42, f25 = 255, f26 = 215, f27 = 0, f28 = 128, f29 = 0, f30 = 0,
      f31 = 213, f32 = 213, f33 = 213, f34 = 255, f35 = 255, f36 = 0, f37 = 255, f38 = 165, f39 = 0,
      m1 = 23.6, m2 = 30.8,
      n1 = 71, n2 = 93,
      p1 = 5.7;

  } else if (isOverRectangle3 === true) {
    x1 = 331, x2 = 210, x3 = 139, x4 = 102, x5 = 71, x6 = 49, x7 = 39, x8 = 15, x9 = 13, x10 = 7,
      x11 = 5, x12 = 4, x13 = 3, x14 = 1000 - x1 - x2 - x3 - x4 - x5 - x6 - x7 - x8 - x9 - x10 - x11 - x12 - x13,
      f1 = 128, f2 = 128, f3 = 128;
    f4 = 0, f5 = 0, f6 = 0, f7 = 0, f8 = 0, f9 = 255, f10 = 255,
      f11 = 255, f12 = 255, f13 = 255, f14 = 0, f15 = 0, f16 = 0, f17 = 128, f18 = 0, f19 = 210, f20 = 180,
      f21 = 140, f22 = 165, f23 = 42, f24 = 42, f25 = 255, f26 = 215, f27 = 0, f28 = 213, f29 = 213, f30 = 213,
      f31 = 128, f32 = 0, f33 = 0, f34 = 255, f35 = 255, f36 = 0, f37 = 255, f38 = 165, f39 = 0,
      m1 = 38.8, m2 = 27.3,
      n1 = 116, n2 = 82,
      p1 = 3.0;

  } else if (isOverRectangle4 === true) {
    x1 = 314, x2 = 215, x3 = 126, x4 = 108, x5 = 80, x6 = 57, x7 = 40, x8 = 18, x9 = 14, x10 = 8,
      x11 = 4, x12 = 3, x13 = 2, x14 = 1000 - x1 - x2 - x3 - x4 - x5 - x6 - x7 - x8 - x9 - x10 - x11 - x12 - x13,
      f1 = 128, f2 = 128, f3 = 128;
    f4 = 0, f5 = 0, f6 = 0, f7 = 255, f8 = 255, f9 = 255, f10 = 0,
      f11 = 0, f12 = 255, f13 = 255, f14 = 0, f15 = 0, f16 = 0, f17 = 128, f18 = 0, f19 = 210, f20 = 180,
      f21 = 140, f22 = 255, f23 = 215, f24 = 0, f25 = 165, f26 = 42, f27 = 42, f28 = 128, f29 = 0, f30 = 0,
      f31 = 213, f32 = 213, f33 = 213, f34 = 255, f35 = 255, f36 = 0, f37 = 255, f38 = 165, f39 = 0,
      m1 = 13.1, m2 = 16.9,
      n1 = 39, n2 = 51,
      p1 = 5.6;

  } else if (isOverRectangle5 === true) {
    x1 = 320, x2 = 213, x3 = 174, x4 = 95, x5 = 73, x6 = 37, x7 = 34, x8 = 17, x9 = 13, x10 = 6,
      x11 = 3, x12 = 3, x13 = 3, x14 = 1000 - x1 - x2 - x3 - x4 - x5 - x6 - x7 - x8 - x9 - x10 - x11 - x12 - x13,
      f1 = 128, f2 = 128, f3 = 128;
    f4 = 0, f5 = 0, f6 = 0, f7 = 255, f8 = 255, f9 = 255, f10 = 0,
      f11 = 0, f12 = 255, f13 = 255, f14 = 0, f15 = 0, f16 = 0, f17 = 128, f18 = 0, f19 = 210, f20 = 180,
      f21 = 140, f22 = 165, f23 = 42, f24 = 42, f25 = 255, f26 = 215, f27 = 0, f28 = 128, f29 = 0, f30 = 0,
      f31 = 213, f32 = 213, f33 = 213, f34 = 255, f35 = 255, f36 = 0, f37 = 255, f38 = 165, f39 = 0,
      m1 = 12.3, m2 = 5.6,
      n1 = 39, n2 = 17,
      p1 = 1.9;

  } else if (isOverRectangle6 === true) {
    x1 = 328, x2 = 217, x3 = 136, x4 = 106, x5 = 69, x6 = 49, x7 = 37, x8 = 15, x9 = 14, x10 = 7,
      x11 = 5, x12 = 4, x13 = 2, x14 = 1000 - x1 - x2 - x3 - x4 - x5 - x6 - x7 - x8 - x9 - x10 - x11 - x12 - x13,
      f1 = 128, f2 = 128, f3 = 128;
    f4 = 0, f5 = 0, f6 = 0, f7 = 0, f8 = 0, f9 = 255, f10 = 255,
      f11 = 255, f12 = 255, f13 = 255, f14 = 0, f15 = 0, f16 = 0, f17 = 128, f18 = 0, f19 = 210, f20 = 180,
      f21 = 140, f22 = 165, f23 = 42, f24 = 42, f25 = 255, f26 = 215, f27 = 0, f28 = 213, f29 = 213, f30 = 213,
      f31 = 128, f32 = 0, f33 = 0, f34 = 255, f35 = 255, f36 = 0, f37 = 255, f38 = 165, f39 = 0,
      m1 = 100, m2 = 100,
      n1 = 100, n2 = 100,
      p1 = 4.3;
  }
}



