let width = 1400;
let height = 800;
let shapes = [randEllipse, randRect, randTriangle];
let slider;
let sliderValue;

function setup() {
  createCanvas(width, height);
  slider = createSlider(10, 100, 20, 1);
  slider.position(width / 2, 10);
  generateArt();
}

function draw() {
  sliderValue = slider.value();
}

function mouseClicked() {
  generateArt();
}

function generateArt() {
  background(255);
  let ammountOfShapes = parseInt(Math.random() * sliderValue) + 10;
  console.log(ammountOfShapes);
  for (let i = 0; i < ammountOfShapes; i++) {
    shapes[parseInt(Math.random() * shapes.length)]();
  }
}

function randEllipse() {
  let x = parseInt(Math.random() * width);
  let y = parseInt(Math.random() * height);
  let w = parseInt(Math.random() * width);
  let h = parseInt(Math.random() * height);
  let randomColors = [
    parseInt(Math.random() * 255),
    parseInt(Math.random() * 255),
    parseInt(Math.random() * 255),
  ];

  fill(randomColors[0], randomColors[1], randomColors[2]);
  ellipse(x, y, w, h);
}
function randRect() {
  let x = parseInt(Math.random() * width);
  let y = parseInt(Math.random() * height);
  let w = parseInt(Math.random() * width);
  let h = parseInt(Math.random() * height);
  let randomColors = [
    parseInt(Math.random() * 255),
    parseInt(Math.random() * 255),
    parseInt(Math.random() * 255),
  ];

  rotate(parseInt(Math.random() * 180));
  fill(randomColors[0], randomColors[1], randomColors[2]);
  rect(x, y, w, h);
}
function randTriangle() {
  let x = parseInt(Math.random() * width);
  let y = parseInt(Math.random() * height);
  let x2 = parseInt(Math.random() * width);
  let y2 = parseInt(Math.random() * height);
  let x3 = parseInt(Math.random() * width);
  let y3 = parseInt(Math.random() * height);
  let randomColors = [
    parseInt(Math.random() * 255),
    parseInt(Math.random() * 255),
    parseInt(Math.random() * 255),
  ];

  fill(randomColors[0], randomColors[1], randomColors[2]);
  triangle(x, y, x2, y2, x3, y3);
}
