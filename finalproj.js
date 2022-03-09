// README
/*
Colouring Catalogue
By Caleb Lynds-Martin

INSTRUCTIONS

For my program, I took inspiration from the drawing assignment, and created a guided colouring program. When the program is first run, the user is faced with the home page where they are able to select any of the four provided animal outlines to colour (Deer, Fox, Whale, Owl) or the "i" button. If the user clicks the "i" button, they will be brought to the information page, where breif instructions and tips can be found. To return to the homepage, the user can click the "x" button. Once the user clicks an outline, they will be brought to the colouring page, equipped with a toolbar and the outline of their selected animal in the center of the page. To pick a colour, the user can click and drag their mouse on the colour wheel. Once a colour has been chosen, it will appear on the cirle left of the colour wheel. To colour, the user can click and drag on the colouring spot of their choice. If the user wishes to erase any drawn colour, they can select the eraser by clicking it once, and then clicking and dragging on the spot they want to erase. To deselect the eraser and select another colour, the user can click and drag on the colour wheel once again. If the user wants to start fresh, they can erase all of their previously drawn colour by one click of the "clear" button. If the user wishes to save their finished colouring, they can click on the "save" button, which downloads a PNG image of their work. If the user needs a smaller or bigger brush or eraser radius, they can ajust it by clicking either the up (increase) or down (decrease) arrow, displaying the current radius visually and numerically when altered. Lastly, to return to the home page from the colouring page, the user can click the grid button left of the colouring wheel.

CODING QUALITY AND VISUAL DESIGN

I believe that my code is unique and stylistically my own. I think that it is well spaced and commented accordingly to the functionality of each string. I am most proud of my code for the functionality of the colour wheel, as I used knowledge from the lectures and labs on image processing and expanded on it to create something purposeful and interactive. As for visual design, I believe that my design is clean and simplistic, while also being stylistically unique. In regards to interactivity related to visual design, each button that I included, possesed a visual indicator in which notifies the user when it is highlighted, selected, or clicked. 
*/

let colourwheel;
let outline1; // Deer
let outline2; // Fox
let outline3; // Whale
let outline4; // Owl
let outcol1; // Deer
let outcol2; // Fox
let outcol3; // Whale
let outcol4; // Owl
let brushSize = 8;
let bg = 255;
let col = '#7ff808';
let bsc = 485; // Brush Size Counter x POS
let bse = 432; // Brush Size Example x POS

// Colour Wheel Dimensions

let cx = 85;
let cy = 25;

// Clear Button Dimensions

let xa = 295;
let ya = 16;
let wa = 55;
let ha = 20;

// Save Button Dimensions

let xb = 355;
let yb = 16;
let wb = 55;
let hb = 20;

// Top Arrow Button Dimensions

let tax = 446;
let tay = 16;
let taw = 25;
let tah = 10;

// Bottom Arrow Button Dimensions

let bax = 446;
let bay = 28;
let baw = 25;
let bah = 10;

// Eraser Dimensions

let ex = 106;
let ey = 14;
let ew = 15;
let eh = 23;

// Home Button Dimensions

let hbx = 15;
let hby = 16;
let hbw = 20;
let hbh = 20;

// Deer Home Page Button Dimensions

let dx = 123.5;
let dy = 80.5;
let dw = 128;
let dh = 128;

// Fox Home Page Button Dimensions

let fx = 269.5;
let fy = 80.5;
let fw = 128;
let fh = 128;

// Whale Home Page Button Dimensions

let wx = 123.5;
let wy = 225.5;
let ww = 128;
let wh = 128;

// Owl Home Page Button Dimensions

let ox = 269.5;
let oy = 225.5;
let ow = 128;
let oh = 128;

// Close Button Dimensions

let cbx = 390;
let cby = 48;
let cbs = 20;

// Information Button Dimensions

let ibx = 430;
let iby = 350;
let ibs = 25;

function setup() {
  createCanvas(521, 389);
  background(bg);
  state = 1;
}

function preload() {
  colourwheel = loadImage("data/colourwheel.png");
  outline1 = loadImage("data/deer.png");
  outline2 = loadImage("data/fox.png");
  outline3 = loadImage("data/whale.png");
  outline4 = loadImage("data/owl.png");
  outcol1 = loadImage("data/deercol.png");
  outcol2 = loadImage("data/foxcol.png");
  outcol3 = loadImage("data/whalecol.png");
  outcol4 = loadImage("data/owlcol.png");
}

function draw() {

  // Home Page

  if (state === 1) {
    background(220);
    hpl();
    deercol();
    foxcol();
    whalecol();
    owlcol();
    hpd(dx, dy);
    hpf(fx, fy);
    hpw(wx, wy);
    hpo(ox, oy);
  }

  // Information Page

  if (state === 6) {
    background(220);
    ipl();
  }

  // Deer Colouring Outline Page

  if (state === 2) {
    brush();
    deer();
    UI();
  }

  // Fox Colouring Outline Page

  if (state === 3) {
    brush();
    fox();
    UI();
  }

  // Whale Colouring Outline Page

  if (state === 4) {
    brush();
    whale();
    UI();
  }

  // Owl Colouring Outline Page

  if (state === 5) {
    brush();
    owl();
    UI();
  }
}

// Information Page Layout

function ipl() {

  // Page
  
  stroke(180);
  rectMode(CENTER);
  strokeWeight(6);
  fill(255);
  rect(width / 2, height / 2, 220, 310, 10);

  // Text

  noStroke();
  let t1 = 'INSTRUCTIONS';
  let t2 = 'TIPS';
  let b1 = 'First, click on any animal outline of your choice. Then, colour away!';
  let b2 = 'When you are colouring, if you need to use the eraser, MAKE SURE you are finished with the colour you are using, becuase it will be lost once you select the eraser. Additionally, if you want to go back to the home page, MAKE SURE you are finished with your current colouring, becuase it will not be saved. If you are happy with what you have coloured, you can click the "SAVE" button on the toolbar to save your work as a PNG image!';
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(11);
  fill(0);
  text(t1, width / 2, height / 2 + 15, 198, 300);
  text(t2, width / 2, height / 2 + 82, 198, 300);
  textStyle(NORMAL);
  text(b1, width / 2, height / 2 + 40, 190, 300);
  text(b2, width / 2, height / 2 + 70 + 38, 178, 300);

  // Close Button

  closeButton(cbx, cby, cbs);
  strokeWeight(1.5);
  stroke(255);
  line(386.5, 45, 393.5, 51);
  line(393.5, 45, 386.5, 51);
}

// Close Button Highlight

function closeButton(x, y, s) {
  let d = dist(x, y, mouseX, mouseY);

  if (d < s / 2) {
    strokeWeight(2);
    stroke(255);
    fill(180);
  } else {
    noStroke();
    fill(180);
  }

  if (d < s / 2 && mouseIsPressed) {
    fill(255);
  }

  ellipse(x, y, s);
}

// Home Page Layout

function hpl() {

  //Title

  rectMode(CORNER);
  noStroke();
  fill(100);
  textSize(32);
  textAlign(CENTER);
  textFont('Impact');
  text('COLOURING CATALOGUE', width / 2, 55);

  // Grid

  stroke(200);
  strokeWeight(5);
  fill(180);
  rect(113, 69, 295, 295, 10);
  strokeWeight(3);
  line(width / 2, 363, width / 2, 68);
  line(112, 217, 407, 217);

  // Information Button

  infoButton(ibx, iby, ibs);
  fill(255);
  textFont('Times New Roman');
  textSize(20);
  noStroke();
  textStyle(BOLD);
  text('i', ibx, iby + 6);
}

// Information Button Highlight

function infoButton(x, y, s) {
  let d = dist(x, y, mouseX, mouseY);

  if (d < s / 2) {
    strokeWeight(2);
    stroke(255);
    fill(180);
  } else {
    noStroke();
    fill(180);
  }

  if (d < s / 2 && mouseIsPressed) {
    fill(255);
  }

  ellipse(x, y, s);
}

// Deer Coloured

function deercol() {
  imageMode(CENTER);
  image(outcol1, width / 2 - 73, height / 2 - 50, outcol1.width / 4, outcol1.height / 4);
}

// Fox Coloured

function foxcol() {
  imageMode(CENTER);
  image(outcol2, width / 2 + 73, height / 2 - 50, outcol2.width / 4, outcol2.height / 4);
}

// Whale Coloured

function whalecol() {
  imageMode(CENTER);
  image(outcol3, width / 2 - 73, height / 2 + 95, outcol3.width / 4, outcol3.height / 4);
}

// Owl Coloured

function owlcol() {
  imageMode(CENTER);
  image(outcol4, width / 2 + 73, height / 2 + 95, outcol4.width / 4, outcol4.height / 4);
}

// Home Page Deer Highlight

function hpd(x, y) {
  if (mouseX >= x && mouseX <= x + dw && mouseY >= y && mouseY <= y + dh) {
    stroke(255);
    fill(200, 200, 200, 100);
    strokeWeight(5);
  } else {
    strokeWeight(3);
    stroke(200);
    noFill();
  }

  if (mouseX >= x && mouseX <= x + dw && mouseY >= y && mouseY <= y + dh && mouseIsPressed) {
    fill(255);
  }

  rect(x, y, dw, dh);
}

// Home Page Fox Highlight

function hpf(x, y) {
  if (mouseX >= x && mouseX <= x + fw && mouseY >= y && mouseY <= y + fh) {
    stroke(255);
    fill(200, 200, 200, 100);
    strokeWeight(5);
  } else {
    strokeWeight(3);
    stroke(200);
    noFill();
  }

  if (mouseX >= x && mouseX <= x + fw && mouseY >= y && mouseY <= y + fh && mouseIsPressed) {
    fill(255);
  }

  rect(x, y, fw, fh);
}

// Home Page Whale Highlight 

function hpw(x, y) {
  if (mouseX >= x && mouseX <= x + ww && mouseY >= y && mouseY <= y + wh) {
    stroke(255);
    fill(200, 200, 200, 100);
    strokeWeight(5);
  } else {
    strokeWeight(3);
    stroke(200);
    noFill();
  }

  if (mouseX >= x && mouseX <= x + ww && mouseY >= y && mouseY <= y + wh && mouseIsPressed) {
    fill(255);
  }

  rect(x, y, ww, wh);
}

// Home Page Owl Highlight 

function hpo(x, y) {
  if (mouseX >= x && mouseX <= x + ow && mouseY >= y && mouseY <= y + oh) {
    stroke(255);
    fill(200, 200, 200, 100);
    strokeWeight(5);
  } else {
    strokeWeight(3);
    stroke(200);
    noFill();
  }

  if (mouseX >= x && mouseX <= x + ow && mouseY >= y && mouseY <= y + oh && mouseIsPressed) {
    fill(255);
  }

  rect(x, y, ow, oh);
}

// Deer Outline

function deer() {
  imageMode(CENTER);
  image(outline1, width / 2 - 10, height / 2 + 20, outline1.width / 2.5, outline1.height / 2.5);
}

// Fox Outline

function fox() {
  imageMode(CENTER);
  image(outline2, width / 2 - 15, height / 2 + 20, outline2.width / 2.5, outline2.height / 2.5);
}

// Whale Outline

function whale() {
  imageMode(CENTER);
  image(outline3, width / 2 - 15, height / 2 + 20, outline3.width / 2.7, outline3.height / 2.7);
}

// Owl Outline

function owl() {
  imageMode(CENTER);
  image(outline4, width / 2 - 15, height / 2 + 20, outline4.width / 2.5, outline4.height / 2.5);
}

// Paint Brush

function brush() {
  let d = dist(cx, cy, mouseX, mouseY);

  // Brush

  if (mouseIsPressed && d < colourwheel.width / 25 / 2) {
    col = get(mouseX, mouseY);
  }

  if (mouseIsPressed) {
    let r = red(col);
    let g = green(col);
    let b = blue(col);
    stroke(r, g, b);
    strokeWeight(brushSize);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  
  // Brush Size Cursor
  
  // 20
  
  if (mouseIsPressed && mouseY > 50 && brushSize === 20) {
    cursor('data/circ20.png', 10, 10);
    
  // 19
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 19) {
    cursor('data/circ19.png', 10, 10);
    
  // 18
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 18) {
    cursor('data/circ18.png', 10, 10);
    
  // 17
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 17) {
    cursor('data/circ17.png', 10, 10);
    
  // 16
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 16) {
    cursor('data/circ16.png', 10, 10);
    
  // 15
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 15) {
    cursor('data/circ15.png', 10, 10);
    
  // 14
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 14) {
    cursor('data/circ14.png', 10, 10);
    
  // 13
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 13) {
    cursor('data/circ13.png', 10, 10);
    
  // 12
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 12) {
    cursor('data/circ12.png', 10, 10);
    
  // 11
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 11) {
    cursor('data/circ11.png', 10, 10);
    
  // 10
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 10) {
    cursor('data/circ10.png', 10, 10);
    
  // 9
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 9) {
    cursor('data/circ9.png', 10, 10);
    
  // 8
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 8) {
    cursor('data/circ8.png', 10, 10);
    
  // 7
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 7) {
    cursor('data/circ7.png', 10, 10);
    
  // 6
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 6) {
    cursor('data/circ6.png', 10, 10);
    
  // 5
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 5) {
    cursor('data/circ5.png', 10, 10);
    
  // 4
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 4) {
    cursor('data/circ4.png', 10, 10);
    
  // 3
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 3) {
    cursor('data/circ3.png', 10, 10);
    
  // 2
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 2) {
    cursor('data/circ2.png', 10, 10);
    
  // 1
    
  } else if (mouseIsPressed && mouseY > 50 && brushSize === 1) {
    cursor('data/circ1.png', 10, 10);
    
  // Cursor
    
  } else {
    cursor();
  }
}

// User Interface

function UI() {

  // Toolbar 

  noFill();
  stroke('#dcdcdc');
  strokeWeight(30);
  rect(0, 0, width, height);

  fill('#dcdcdc');
  strokeWeight(1);
  rect(0.5, 0, width - 0.5, 50);

  noFill();
  stroke(180);
  strokeWeight(2);
  rect(15, 50, 490, 325, 1);

  // Toolbar Buttons

  colourpicker();
  eraser(ex, ey);
  colourButton(cx - 29, cy, col);
  saveButton(xb, yb);
  clearButton(xa, ya);
  topArrow(tax, tay);
  bottomArrow(bax, bay);
  homebutton(hbx, hby);

  // Brush Size Counter

  fill(180);
  stroke(200);
  strokeWeight(2);
  rect(475, 17, 30, 20, 1);
  fill(255);
  noStroke();
  textSize(15);
  text(brushSize, bsc, 32);

  if (brushSize > 9 && brushSize < 20) {
    bsc = 482;
  } else if (brushSize === 20) {
    bsc = 480;
  } else {
    bsc = 485;
  }

  // Brush Size Example

  noFill();
  stroke(180);
  strokeWeight(2);
  ellipse(bse, 26, brushSize);
  noStroke();
  fill(180);
  ellipse(bse, 26, brushSize / 5);
}

// Eraser

function eraser(x, y) {

  // Eraser Select

  if (mouseX >= x && mouseX <= x + ew && mouseY >= y && mouseY <= y + eh && mouseIsPressed) {
    col = 'ffffff';
  }

  // Eraser Highlight

  if (mouseX >= x && mouseX <= x + ew && mouseY >= y && mouseY <= y + eh) {
    stroke(255);
    strokeWeight(2);
    fill(180);
  } else {
    noStroke();
    fill(180);
  }

  if (mouseX >= x && mouseX <= x + ew && mouseY >= y && mouseY <= y + eh && mouseIsPressed) {
    fill(255);
  }

  // Eraser Selection Checker

  if (col === 'ffffff') {
    stroke(255);
    strokeWeight(2);
  }

  // Button
  
  rect(x, y, ew, eh);
  fill('#ffffff');
  rect(x, y, ew, 8);
}

// Save Button

function saveButton(x, y) {
  if (mouseX >= x && mouseX <= x + wb && mouseY >= y && mouseY <= y + hb) {
    stroke(255);
    strokeWeight(2);
    fill(180);
  } else {
    noStroke();
    fill(180);
  }

  if (mouseX >= x && mouseX <= x + wb && mouseY >= y && mouseY <= y + hb && mouseIsPressed) {
    fill(255);
  }

  // Button

  textAlign(LEFT);
  rect(x, y, wb, hb, 100);
  noStroke();
  textSize(10);
  fill(255);
  textFont('montserrat');
  text('SAVE', x + 14, y + 13);
}

// Clear Button

function clearButton(x, y) {
  if (mouseX >= x && mouseX <= x + wa && mouseY >= y && mouseY <= y + ha) {
    stroke(255);
    strokeWeight(2);
    fill(180);
  } else {
    noStroke();
    fill(180);
  }

  if (mouseX >= x && mouseX <= x + wa && mouseY >= y && mouseY <= y + ha && mouseIsPressed) {
    fill(255);
  }

  // Button

  textAlign(LEFT);
  rect(x, y, wa, ha, 100);
  noStroke();
  textSize(10);
  fill(255);
  textFont('montserrat');
  text('CLEAR', x + 10, y + 13);
}

// Top Arrow Button

function topArrow(x, y) {
  if (mouseX >= x && mouseX <= x + taw && mouseY >= y && mouseY <= y + tah) {
    stroke(255);
    strokeWeight(2);
    fill(180);
  } else {
    noStroke();
    fill(180);
  }

  if (mouseX >= x && mouseX <= x + taw && mouseY >= y && mouseY <= y + tah && mouseIsPressed) {
    fill(255);
  }

  // Button

  rect(x, y, taw, tah, 1);
  noStroke();
  fill(255);
  triangle(x + 6, y + 7, x + 12, y + 3, x + 18, y + 7);
}

// Bottom Arrow Button

function bottomArrow(x, y) {
  if (mouseX >= x && mouseX <= x + baw && mouseY >= y && mouseY <= y + bah) {
    stroke(255);
    strokeWeight(2);
    fill(180);
  } else {
    noStroke();
    fill(180);
  }

  if (mouseX >= x && mouseX <= x + baw && mouseY >= y && mouseY <= y + bah && mouseIsPressed) {
    fill(255);
  }

  // Button

  rect(x, y, baw, bah, 1);
  noStroke();
  fill(255);
  triangle(x + 6, y + 3, x + 12, y + 7, x + 18, y + 3);
}

// Colour Wheel

function colourpicker() {
  let d = dist(cx, cy, mouseX, mouseY);

  if (d < colourwheel.width / 24 / 2) {
    stroke(255);
    strokeWeight(4.5);
    noFill();
  } else {
    stroke(180);
    strokeWeight(3);
    noFill();
  }

  // Clour Wheel Selection Checker

  ellipse(cx, cy, colourwheel.width / 25);

  if (col !== 'ffffff') {
    strokeWeight(4.5);
    stroke(255);
    ellipse(cx, cy, colourwheel.width / 25);
  }

  imageMode(CENTER);
  image(colourwheel, cx, cy, colourwheel.width / 25, colourwheel.height / 25);
}

// Colour Picker Display

function colourButton(x, y, colour) {
  stroke(180);
  strokeWeight(1.5);
  fill(colour);
  ellipse(x, y, 15);
}

// Home Button

function homebutton(x, y) {
  if (mouseX >= x && mouseX <= x + hbw && mouseY >= y && mouseY <= y + hbh) {
    stroke(255);
    strokeWeight(2);
    fill(180);
  } else {
    noStroke();
    fill(180);
  }

  if (mouseX >= x && mouseX <= x + hbw && mouseY >= y && mouseY <= y + hbh && mouseIsPressed) {
    fill(255);
  }

  // Button

  rect(x, y, hbw, hbh, 2);
  noStroke();
  fill(255);
  noStroke();
  fill(255);
  for (let i = 18.5; i < 30; i = i + 8) {
    for (let j = 19.5; j < 30; j = j + 8) {
      rect(i, j, 5, 5);
    }
  }
}

function mouseReleased() {

  // Go to Home

  if (mouseX >= hbx && mouseX <= hbx + hbw && mouseY >= hby && mouseY <= hby + hbh && state !== 1) {
    state = 1;
  }

  // Go to Deer Outline

  if (mouseX >= dx && mouseX <= dx + dw && mouseY >= dy && mouseY <= dy + dh && state !== 2 && state !== 3 && state !== 4 && state !== 5 && state !== 6) {
    background(bg);
    textStyle(NORMAL);
    state = 2;
  }

  // Go to Fox Outline

  if (mouseX >= fx && mouseX <= fx + fw && mouseY >= fy && mouseY <= fy + fh && state !== 2 && state !== 3 && state !== 4 && state !== 5 && state !== 6) {
    background(bg);
    textStyle(NORMAL);
    state = 3;
  }

  // Go to Whale Outline

  if (mouseX >= wx && mouseX <= wx + ww && mouseY >= wy && mouseY <= wy + wh && state !== 2 && state !== 3 && state !== 4 && state !== 5 && state !== 6) {
    background(bg);
    textStyle(NORMAL);
    state = 4;
  }

  // Go to Owl Outline

  if (mouseX >= ox && mouseX <= ox + ow && mouseY >= oy && mouseY <= oy + oh && state !== 2 && state !== 3 && state !== 4 && state !== 5 && state !== 6) {
    background(bg);
    textStyle(NORMAL);
    state = 5;
  }

  // Close Button Select

  let d = dist(cbx, cby, mouseX, mouseY);

  if (d < cbs / 2 && state === 6) {
    background(bg);
    state = 1;
  }

  // Information Button Select

  d = dist(ibx, iby, mouseX, mouseY);

  if (d < ibs / 2 && state === 1) {
    background(bg);
    textFont('Arial');
    state = 6;
  }

  // Save Drawing

  if (mouseX >= xb && mouseX <= xb + wb && mouseY >= yb && mouseY <= yb + hb && state !== 1 && state !== 6) {
    img = get(16, 51, 488, 323);
    save(img, "Drawing.png");
    print("Image Saved");
  }

  // Reset Canvas

  if (mouseX >= xa && mouseX <= xa + wa && mouseY >= ya && mouseY <= ya + ha && state !== 1 && state !== 6) {
    background(bg);
    print("Canvas Cleared");
  }

  // Increase Brush Size

  if (mouseX >= tax && mouseX <= tax + taw && mouseY >= tay && mouseY <= tay + tah && state !== 1 && state !== 6) {
    brushSize = brushSize + 1;
    if (brushSize > 20) {
      brushSize = 20;
    }
  }

  // Decrease Brush Size

  if (mouseX >= bax && mouseX <= bax + baw && mouseY >= bay && mouseY <= bay + bah && state !== 1 && state !== 6) {
    brushSize = brushSize - 1;
    if (brushSize < 1) {
      brushSize = 1;
    }
  }
}
