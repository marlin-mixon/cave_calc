const display = document.getElementById('display');
const DISPLAY_WIDTH = 90;
const FIXED_CHAR_WIDTH = 7.75;
const X_LOC = 39.97;
var y_reg;
var operand;
var new_value = false;
var has_fraction = false;
clr();

document.addEventListener('keypress', key_press);

function key_press(e) {
  console.log(e);
  if ('1234567890'.indexOf(e.key) >= 0 ) {  // Number key or point
    key_number(e.key);
    return;
  }
  switch (e.key) {
    case ".":
      pnt();
      break;
    case "+":
      add();
      break;
    case "/":
      dvd();
      break;
    case "X":
    case "x":
    case "*":
      mul();
      break;
    case "%":
      pct();
      break;
    case "C":
    case "c":
      clr();
      break;
    case "=":
      equ();
      break;            
  }
}

function redisplay() {  /* Simulate right justification */
  let display_length = display.textContent.toString().length;
  if (display_length > 12) {
    display.textContent = display.textContent.toString().substr(0, 12);
    display_length = 12;
  }
  let width = display_length * FIXED_CHAR_WIDTH;
  let x_offset = DISPLAY_WIDTH - width;
  let x = X_LOC + x_offset;
  display.setAttribute('x', x);
}

function pnt() {
  if (! has_fraction) {
    key_number('.');
    has_fraction = true;
  }
}
function clr() {
  display.textContent = "0";
  redisplay();
  operand = "";
  has_fraction = false;
  y_reg = 0;
}
function mul() {
  y_reg = display.textContent;
  new_value = true;
  has_fraction = false;
  operand = "mul";
}
function add() {
  y_reg = display.textContent;
  new_value = true;
  has_fraction = false;
  operand = "add";
}
function sub() {
  y_reg = display.textContent;
  new_value = true;
  has_fraction = false;
  operand = "sub";
}
function dvd() {
  y_reg = display.textContent;
  new_value = true;
  has_decimal = false;
  operand = "dvd";
}
function equ() {
  switch (operand) {
    case 'mul':
      display.textContent = y_reg * display.textContent;
      break;
    case 'add':
      display.textContent = Number(y_reg) + Number(display.textContent);
      break;
    case 'sub':
      display.textContent = y_reg - display.textContent;
      break;
    case 'dvd':
      display.textContent = y_reg / display.textContent;
      break;
  }
  redisplay();
  y_reg = display.textContent;
  new_value = true;
}
function prc() {
  display.textContent = display.textContent / 100;
  redisplay();
  new_value = true;
}

function chs() {
  display.textContent = display.textContent * -1;
  redisplay();
}

function key_number(key) {
  if (new_value) {
    new_value = false;
    display.textContent = "0";
  }
  if (display.textContent === "0") {
    display.textContent = key;
  } else {
    display.textContent += key;
  }
  redisplay();
}
