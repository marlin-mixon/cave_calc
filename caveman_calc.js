const display = document.getElementById('display');
var y_reg;
var operand;
var new_value = false;
var has_fraction = false;
clr();
document.getElementById('n-0').addEventListener('click', number0);
document.getElementById('n-1').addEventListener('click', number1);
document.getElementById('n-2').addEventListener('click', number2);
document.getElementById('n-3').addEventListener('click', number3);
document.getElementById('n-4').addEventListener('click', number4);
document.getElementById('n-5').addEventListener('click', number5);
document.getElementById('n-6').addEventListener('click', number6);
document.getElementById('n-7').addEventListener('click', number7);
document.getElementById('n-8').addEventListener('click', number8);
document.getElementById('n-9').addEventListener('click', number9);
document.getElementById('pnt').addEventListener('click', pnt);
document.getElementById('clr').addEventListener('click', clr);
document.getElementById('mul').addEventListener('click', mul);
document.getElementById('equ').addEventListener('click', equ);
document.getElementById('add').addEventListener('click', add);
document.getElementById('sub').addEventListener('click', sub);
document.getElementById('dvd').addEventListener('click', dvd);
document.getElementById('prc').addEventListener('click', prc);
document.getElementById('chs').addEventListener('click', chs);

function number0() {
  key_number(0);
}
function number1() {
  key_number(1);
}
function number2() {
  key_number(2);
}
function number3() {
  key_number(3);
}
function number4() {
  key_number(4);
}
function number5() {
  key_number(5);
}
function number6() {
  key_number(6);
}
function number7() {
  key_number(7);
}
function number8() {
  key_number(8);
}
function number9() {
  key_number(9);
}
function pnt() {
  if (! has_fraction) {
    key_number('.');
    has_fraction = true;
  }
}
function clr() {
  display.textContent = "0";
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
  y_reg = display.textContent;
  new_value = true;
}
function prc() {
  display.textContent = display.textContent / 100;
  new_value = true;
}

function chs() {
  display.textContent = display.textContent * -1;
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
}
